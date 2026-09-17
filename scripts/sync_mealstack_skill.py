#!/usr/bin/env python3
"""Package the MealStack plan skill for /rack/mealstack/skill.

The skill lives in the app repo (skills/mealstack-plan). This script zips the
folder the way a person installs it (SKILL.md, references, scripts, examples; no
tests or caches) into public/downloads/mealstack-plan.zip, copies the example plan
to public/downloads/mealstack/, and writes src/data/mealstack-skill.json with the
figures the page shows. The zip is reproducible (fixed timestamps, sorted
entries), so running it again with nothing changed changes nothing.

Run from the site root:
    python3 scripts/sync_mealstack_skill.py [path/to/skills/mealstack-plan]
"""
import hashlib
import io
import json
import re
import shutil
import sys
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DEFAULT_SOURCE = ROOT.parent / "mealstack" / "MealStack" / "skills" / "mealstack-plan"
ZIP_OUT = ROOT / "public" / "downloads" / "mealstack-plan.zip"
EXAMPLES_OUT = ROOT / "public" / "downloads" / "mealstack"
DATA_OUT = ROOT / "src" / "data" / "mealstack-skill.json"

INCLUDE_DIRS = ("references", "scripts", "examples")
SKIP_PARTS = {"__pycache__", ".DS_Store", "tests"}
STAMP = (2026, 1, 1, 0, 0, 0)


def files(source: Path) -> list[Path]:
    out = [source / "SKILL.md"]
    for d in INCLUDE_DIRS:
        for p in sorted((source / d).rglob("*")):
            if p.is_file() and not SKIP_PARTS.intersection(p.parts) and not p.name.endswith(".pyc"):
                out.append(p)
    return out


def main() -> int:
    source = Path(sys.argv[1]) if len(sys.argv) > 1 else DEFAULT_SOURCE
    if not (source / "SKILL.md").exists():
        print(f"No skill at {source}", file=sys.stderr)
        return 1

    listing = files(source)
    ZIP_OUT.parent.mkdir(parents=True, exist_ok=True)
    buffer = io.BytesIO()
    with zipfile.ZipFile(buffer, "w", zipfile.ZIP_DEFLATED) as z:
        for p in listing:
            info = zipfile.ZipInfo(f"mealstack-plan/{p.relative_to(source).as_posix()}", STAMP)
            info.compress_type = zipfile.ZIP_DEFLATED
            info.external_attr = (0o755 if p.suffix == ".py" else 0o644) << 16
            z.writestr(info, p.read_bytes())
    packed = buffer.getvalue()
    if ZIP_OUT.exists() and ZIP_OUT.read_bytes() == packed:
        print(f"unchanged {ZIP_OUT.relative_to(ROOT)}")
    else:
        ZIP_OUT.write_bytes(packed)
        print(f"wrote {ZIP_OUT.relative_to(ROOT)} ({len(listing)} files)")

    EXAMPLES_OUT.mkdir(parents=True, exist_ok=True)
    examples = []
    for ex in sorted((source / "examples").glob("*.mealstack")):
        shutil.copyfile(ex, EXAMPLES_OUT / ex.name)
        doc = json.loads(ex.read_text(encoding="utf-8"))
        examples.append({
            "file": f"/downloads/mealstack/{ex.name}",
            "name": doc.get("name", ex.stem),
            "stacks": len(doc.get("stacks") or doc.get("weeks") or []),
            "meals": len(doc.get("meals") or []),
        })
        print(f"copied {ex.name}")

    pantry = json.loads((source / "references" / "pantry.json").read_text(encoding="utf-8"))
    skill_md = (source / "SKILL.md").read_text(encoding="utf-8")
    name = re.search(r"^name:\s*(.+)$", skill_md, re.M)
    data = {
        "name": name.group(1).strip() if name else "mealstack-plan",
        "zip": "/downloads/mealstack-plan.zip",
        "zipBytes": ZIP_OUT.stat().st_size,
        "sha256": hashlib.sha256(ZIP_OUT.read_bytes()).hexdigest(),
        "files": len(listing),
        "builtInIngredients": len(pantry.get("foods", [])),
        "builtInVersion": pantry.get("pantryVersion"),
        "examples": examples,
    }
    DATA_OUT.write_text(json.dumps(data, indent=2) + "\n", encoding="utf-8")
    print(f"wrote {DATA_OUT.relative_to(ROOT)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
