#!/usr/bin/env python3
"""Publish the MealStack Schema on /rack/mealstack/schema.

The schema lives in the app repo (docs/schema): the YAML under fields/ is the
source of truth, VERSION is its version, README.md is the part for people, and
mealstack-schema.json is the flat map for tools. This script writes:

  src/data/mealstack-schema.json      every field set and field, for the pages
  src/data/mealstack-schema-readme.md the README, minus its title, links fixed
  public/downloads/mealstack/mealstack-schema.json          the flat map, latest
  public/downloads/mealstack/mealstack-schema-<version>.json the same, pinned

Needs PyYAML (the app repo's build_schema.py needs it too):
    pip3 install pyyaml

Run from the site root:
    python3 scripts/sync_mealstack_schema.py [path/to/docs/schema]
"""
from __future__ import annotations  # the Mac's system Python is 3.9
import json
import re
import shutil
import sys
from pathlib import Path

try:
    import yaml
except ImportError:
    sys.exit("PyYAML is missing: pip3 install pyyaml")

ROOT = Path(__file__).resolve().parent.parent
DEFAULT_SOURCE = ROOT.parent / "mealstack" / "MealStack" / "docs" / "schema"
DATA = ROOT / "src" / "data"
DOWNLOADS = ROOT / "public" / "downloads" / "mealstack"
PAGE = "/rack/mealstack/schema"
LINK = re.compile(r"\[([^\]]+)\]\((?!https?://|#|/)([^)]+)\)")


def paragraphs(text) -> list[str]:
    return [" ".join(p.split()) for p in re.split(r"\n\s*\n", str(text or "").strip()) if p.strip()]


def full_name(fs, field):
    return field["name"] if fs.get("root") else f"{fs['name']}.{field['name']}"


def readme(text: str) -> str:
    lines = text.splitlines()
    # Drop the title and the italic version line under it; the page has its own header.
    while lines and (lines[0].startswith("# ") or not lines[0].strip() or lines[0].startswith("*Version")):
        lines.pop(0)
    body = "\n".join(lines)

    def fix(m):
        label, target = m.group(1), m.group(2)
        if target.startswith("reference.md"):
            return f"[the field reference]({PAGE}#field-sets)"
        return f"`{label}`" if not label.startswith("`") else label

    return LINK.sub(fix, body).strip() + "\n"


def main() -> int:
    source = Path(sys.argv[1]) if len(sys.argv) > 1 else DEFAULT_SOURCE
    if not (source / "VERSION").exists():
        print(f"No schema at {source}", file=sys.stderr)
        return 1
    version = (source / "VERSION").read_text().strip()

    sets = []
    for path in sorted((source / "fields").glob("*.yml")):
        doc = yaml.safe_load(path.read_text(encoding="utf-8"))
        sets.extend(doc)
    sets.sort(key=lambda s: s.get("group", 99))

    out_sets = []
    for fs in sets:
        reusable = fs.get("reusable") or {}
        fields = []
        for f in fs["fields"]:
            fields.append({
                "name": full_name(fs, f),
                "level": f["level"],
                "type": f["type"],
                "required": bool(f.get("required")),
                "array": "array" in (f.get("normalize") or []),
                "short": f.get("short", ""),
                "paragraphs": paragraphs(f.get("description")),
                "values": [str(v) for v in f.get("expected_values") or []],
                "pattern": f.get("pattern"),
                "example": None if "example" not in f else str(f["example"]),
            })
        out_sets.append({
            "name": fs["name"],
            "title": fs["title"],
            "short": fs.get("short", ""),
            "paragraphs": paragraphs(fs.get("description")),
            "root": bool(fs.get("root")),
            "reusedAs": [
                {
                    "path": f"{r['at']}.{r.get('as', fs['name'])}",
                    "array": "array" in (r.get("normalize") or []),
                    "note": r.get("short_override", ""),
                }
                for r in reusable.get("expected", [])
            ],
            "nestedOnly": bool(reusable) and not reusable.get("top_level", True),
            "fields": fields,
        })

    data = {
        "version": version,
        "fieldSets": len(out_sets),
        "fields": sum(len(s["fields"]) for s in out_sets),
        "download": f"/downloads/mealstack/mealstack-schema-{version}.json",
        "downloadLatest": "/downloads/mealstack/mealstack-schema.json",
        "sets": out_sets,
    }
    (DATA / "mealstack-schema.json").write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"wrote src/data/mealstack-schema.json ({data['fieldSets']} field sets, {data['fields']} fields)")

    (DATA / "mealstack-schema-readme.md").write_text(readme((source / "README.md").read_text(encoding="utf-8")), encoding="utf-8")
    print("wrote src/data/mealstack-schema-readme.md")

    DOWNLOADS.mkdir(parents=True, exist_ok=True)
    flat = source / "mealstack-schema.json"
    shutil.copyfile(flat, DOWNLOADS / "mealstack-schema.json")
    shutil.copyfile(flat, DOWNLOADS / f"mealstack-schema-{version}.json")
    print(f"copied mealstack-schema.json (and -{version})")
    return 0


if __name__ == "__main__":
    sys.exit(main())
