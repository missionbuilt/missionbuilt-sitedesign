#!/usr/bin/env python3
"""Copy MealStack's CHANGELOG.md into the site as one file per release.

The app repo's CHANGELOG.md is the source of truth. This script splits it on its
`## <version> (...)` headings and writes src/content/releases/mealstack-<version>.md,
which /rack/mealstack/changelog renders: an index of releases, and a page per
release with its `###` groups as sections. Each bullet's first sentence is set in bold
and listed on the index. The files are committed: Cloudflare builds
the site without the app repo next to it.

Heading forms it reads:
    ## 0.9 (in progress)          -> status in-progress (still being built)
    ## 0.9 (in review)            -> status in-review (submitted, waiting on Apple)
    ## 0.8.1 (September 16, 2026) -> shipped, with a date
    ## 0.8.0 (36)                 -> shipped, build 36

Run from the site root:
    python3 scripts/sync_mealstack_changelog.py [path/to/CHANGELOG.md]
"""
import json
import re
import sys
from datetime import datetime
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DEFAULT_SOURCE = ROOT.parent / "mealstack" / "MealStack" / "CHANGELOG.md"
OUT = ROOT / "src" / "content" / "releases"
HEADING = re.compile(r"^##\s+(\d+(?:\.\d+)*)\s*(?:\((.*)\))?\s*$")
GROUP = re.compile(r"^###\s+(.+?)\s*$")


def first_sentence(text: str) -> str | None:
    """Up to the first . ! or ? that ends a sentence: followed by a space or the end,
    and not inside quotes, parentheses or backticks."""
    depth = 0
    quoted = False
    code = False
    for i, ch in enumerate(text):
        if ch == "`":
            code = not code
        elif code:
            continue
        elif ch == '"':
            quoted = not quoted
        elif ch in "(\u201c":
            depth += 1
        elif ch in ")\u201d":
            depth = max(0, depth - 1)
        elif ch in ".!?" and not quoted and depth == 0:
            if i + 1 == len(text) or text[i + 1] == " ":
                return text[: i + 1]
    return None
LEAD_MAX = 110


def slugify(text: str) -> str:
    return re.sub(r"[^a-z0-9]+", "-", text.lower()).strip("-")


def lead_of(text: str) -> str:
    """The bullet's first sentence, the line the index shows."""
    lead = first_sentence(text) or text
    if len(lead) > LEAD_MAX:
        cut = max(lead.rfind(":", 0, LEAD_MAX), lead.rfind(";", 0, LEAD_MAX))
        if cut > 30:
            lead = lead[:cut] + "."
        else:
            lead = lead[:LEAD_MAX].rsplit(" ", 1)[0].rstrip(",;:") + "..."
    return lead


def shape(body: list[str]) -> tuple[str, list[dict]]:
    """Split a release body into groups of bullets. Returns the body rewritten with
    each bullet's first sentence in bold, and the groups for the frontmatter."""
    groups: list[dict] = []
    current = None
    bullet: list[str] | None = None

    def close_bullet():
        nonlocal bullet
        if bullet is not None:
            current["items"].append(" ".join(x.strip() for x in bullet))
            bullet = None

    for line in body:
        g = GROUP.match(line)
        if g:
            close_bullet()
            current = {"title": g.group(1), "items": []}
            groups.append(current)
        elif line.startswith("- "):
            close_bullet()
            if current is None:
                current = {"title": "", "items": []}
                groups.append(current)
            bullet = [line[2:]]
        elif line.strip() and bullet is not None:
            bullet.append(line)
        else:
            close_bullet()
    close_bullet()

    out: list[str] = []
    meta: list[dict] = []
    for grp in groups:
        if not grp["items"]:
            continue
        slug = slugify(grp["title"]) or "changes"
        leads = []
        if grp["title"]:
            out.append(f"### {grp['title']}\n")
        for item in grp["items"]:
            lead = lead_of(item)
            leads.append(lead)
            first = first_sentence(item)
            if first and len(first) > LEAD_MAX and 0 < first.find(": ") < LEAD_MAX:
                first = first[: first.find(": ") + 1]
            if first and len(first) <= LEAD_MAX * 2:
                rest = item[len(first):].strip()
                out.append(f"- **{first}** {rest}".rstrip())
            else:
                out.append(f"- {item}")
        out.append("")
        meta.append({"title": grp["title"], "slug": slug, "leads": leads})
    return "\n".join(out).strip(), meta


def order(version: str) -> int:
    parts = [int(p) for p in version.split(".")] + [0, 0]
    return parts[0] * 1_000_000 + parts[1] * 1_000 + parts[2]


def frontmatter(version: str, note: str, groups: list[dict]) -> str:
    lines = ["---", "app: mealstack", f'version: "{version}"', f"order: {order(version)}"]
    lines.append(f"changes: {sum(len(g['leads']) for g in groups)}")
    # JSON is YAML; it keeps quotes and colons in the lead-ins safe.
    lines.append("groups: " + json.dumps(groups, ensure_ascii=False))
    note = (note or "").strip()
    if note.lower() == "in progress":
        lines.append("status: in-progress")
    elif note.lower() == "in review":
        lines.append("status: in-review")
    else:
        lines.append("status: shipped")
        if note.isdigit():
            lines.append(f'build: "{note}"')
        elif note:
            day = datetime.strptime(note, "%B %d, %Y").date()
            lines.append(f"date: {day.isoformat()}")
    lines.append("---")
    return "\n".join(lines)


def main() -> int:
    source = Path(sys.argv[1]) if len(sys.argv) > 1 else DEFAULT_SOURCE
    if not source.exists():
        print(f"No changelog at {source}", file=sys.stderr)
        return 1
    releases: list[tuple[str, str, list[str]]] = []
    for line in source.read_text(encoding="utf-8").splitlines():
        m = HEADING.match(line)
        if m:
            releases.append((m.group(1), m.group(2) or "", []))
        elif releases:
            releases[-1][2].append(line)
    if not releases:
        print("No '## <version>' headings found", file=sys.stderr)
        return 1

    OUT.mkdir(parents=True, exist_ok=True)
    keep = set()
    for version, note, body in releases:
        path = OUT / f"mealstack-{version}.md"
        keep.add(path.name)
        shaped, groups = shape(body)
        text = frontmatter(version, note, groups) + "\n\n" + shaped + "\n"
        path.write_text(text, encoding="utf-8")
        print(f"wrote {path.relative_to(ROOT)}")
    for stale in OUT.glob("mealstack-*.md"):
        if stale.name not in keep:
            stale.unlink()
            print(f"removed {stale.relative_to(ROOT)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
