#!/usr/bin/env python3
"""Copy MealStack's CHANGELOG.md into the site as one file per release.

The app repo's CHANGELOG.md is the source of truth. This script splits it on its
`## <version> (...)` headings and writes src/content/releases/mealstack-<version>.md,
which /rack/mealstack/changelog renders. The files are committed: Cloudflare builds
the site without the app repo next to it.

Heading forms it reads:
    ## 0.9 (in progress)          -> status in-progress (still being built)
    ## 0.9 (in review)            -> status in-review (submitted, waiting on Apple)
    ## 0.8.1 (September 16, 2026) -> shipped, with a date
    ## 0.8.0 (36)                 -> shipped, build 36

Run from the site root:
    python3 scripts/sync_mealstack_changelog.py [path/to/CHANGELOG.md]
"""
import re
import sys
from datetime import datetime
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DEFAULT_SOURCE = ROOT.parent / "mealstack" / "MealStack" / "CHANGELOG.md"
OUT = ROOT / "src" / "content" / "releases"
HEADING = re.compile(r"^##\s+(\d+(?:\.\d+)*)\s*(?:\((.*)\))?\s*$")


def order(version: str) -> int:
    parts = [int(p) for p in version.split(".")] + [0, 0]
    return parts[0] * 1_000_000 + parts[1] * 1_000 + parts[2]


def frontmatter(version: str, note: str) -> str:
    lines = ["---", "app: mealstack", f'version: "{version}"', f"order: {order(version)}"]
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
        text = frontmatter(version, note) + "\n\n" + "\n".join(body).strip() + "\n"
        path.write_text(text, encoding="utf-8")
        print(f"wrote {path.relative_to(ROOT)}")
    for stale in OUT.glob("mealstack-*.md"):
        if stale.name not in keep:
            stale.unlink()
            print(f"removed {stale.relative_to(ROOT)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
