#!/usr/bin/env python3
"""Package an app's plan skill for /loadout/plans.

The skills live in the app repos (ironstack/skills/ironstack-plan,
mealstack/MealStack/skills/mealstack-plan). This script zips one the way a
person installs it (SKILL.md, references, scripts, examples; no tests, caches or
the maintainer's build scripts) into public/downloads/<app>-plan.zip, copies its
example files to public/downloads/<app>/, and writes src/data/<app>-skill.json
with the figures the page shows. The zip is reproducible (fixed timestamps,
sorted entries), so running it again with nothing changed changes nothing.

The site repo is public and the app repos are not, so it refuses to package a
skill that names a private file (a Swift source, the kit, a home folder).

Run from the site root:
    python3 scripts/sync_plan_skill.py --app ironstack|mealstack [path/to/skill]
"""
from __future__ import annotations  # the Mac's system Python is 3.9
import argparse
import hashlib
import io
import json
import re
import shutil
import sys
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
SOURCES = {
    "ironstack": ROOT.parent / "ironstack" / "skills" / "ironstack-plan",
    "mealstack": ROOT.parent / "mealstack" / "MealStack" / "skills" / "mealstack-plan",
}
EXT = {"ironstack": ".ironstack", "mealstack": ".mealstack"}

INCLUDE_DIRS = ("references", "scripts", "examples")
SKIP_PARTS = {"__pycache__", ".DS_Store", "tests"}
SKIP_NAMES = re.compile(r"^build_.*\.py$")
PRIVATE = re.compile(r"\.swift\b|missionbuilt-kit|/Users/|coach-proxy|app/Ironstack")
STAMP = (2026, 1, 1, 0, 0, 0)


def files(source: Path) -> list[Path]:
    out = [source / "SKILL.md"]
    for d in INCLUDE_DIRS:
        for p in sorted((source / d).rglob("*")):
            if (p.is_file() and not SKIP_PARTS.intersection(p.parts)
                    and not p.name.endswith(".pyc") and not SKIP_NAMES.match(p.name)):
                out.append(p)
    return out


def example_figures(app: str, doc: dict) -> dict:
    if app == "ironstack":
        return {"workouts": len(doc.get("workouts") or []), "days": doc.get("days")}
    return {"stacks": len(doc.get("stacks") or doc.get("weeks") or []), "meals": len(doc.get("meals") or [])}


def reference_figures(app: str, source: Path) -> dict:
    refs = source / "references"
    if app == "ironstack":
        lifts = json.loads((refs / "exercises.json").read_text(encoding="utf-8"))
        return {"lifts": len(lifts.get("canonical") or [])}
    pantry = json.loads((refs / "pantry.json").read_text(encoding="utf-8"))
    return {"builtInIngredients": len(pantry.get("foods", [])), "builtInVersion": pantry.get("pantryVersion")}


def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--app", choices=sorted(SOURCES), required=True)
    ap.add_argument("source", nargs="?")
    args = ap.parse_args()
    app = args.app
    source = Path(args.source) if args.source else SOURCES[app]
    if not (source / "SKILL.md").exists():
        print(f"No skill at {source}", file=sys.stderr)
        return 1

    listing = files(source)
    leaks = [f"{p.relative_to(source)}:{n}" for p in listing
             for n, line in enumerate(p.read_text(encoding="utf-8", errors="ignore").splitlines(), 1)
             if PRIVATE.search(line)]
    if leaks:
        print("Refusing: the skill names private files:\n  " + "\n  ".join(leaks), file=sys.stderr)
        return 1

    skill_md = (source / "SKILL.md").read_text(encoding="utf-8")
    m = re.search(r"^name:\s*(.+)$", skill_md, re.M)
    name = m.group(1).strip() if m else f"{app}-plan"
    zip_out = ROOT / "public" / "downloads" / f"{app}-plan.zip"
    examples_out = ROOT / "public" / "downloads" / app
    data_out = ROOT / "src" / "data" / f"{app}-skill.json"

    buffer = io.BytesIO()
    with zipfile.ZipFile(buffer, "w", zipfile.ZIP_DEFLATED) as z:
        for p in listing:
            info = zipfile.ZipInfo(f"{name}/{p.relative_to(source).as_posix()}", STAMP)
            info.compress_type = zipfile.ZIP_DEFLATED
            info.external_attr = (0o755 if p.suffix == ".py" else 0o644) << 16
            z.writestr(info, p.read_bytes())
    packed = buffer.getvalue()
    zip_out.parent.mkdir(parents=True, exist_ok=True)
    if zip_out.exists() and zip_out.read_bytes() == packed:
        print(f"unchanged {zip_out.relative_to(ROOT)}")
    else:
        zip_out.write_bytes(packed)
        print(f"wrote {zip_out.relative_to(ROOT)} ({len(listing)} files)")

    examples_out.mkdir(parents=True, exist_ok=True)
    examples = []
    for ex in sorted((source / "examples").glob(f"*{EXT[app]}")):
        shutil.copyfile(ex, examples_out / ex.name)
        doc = json.loads(ex.read_text(encoding="utf-8"))
        examples.append({"file": f"/downloads/{app}/{ex.name}", "name": doc.get("name", ex.stem),
                         **example_figures(app, doc)})
        print(f"copied {ex.name}")

    data = {
        "name": name,
        "zip": f"/downloads/{app}-plan.zip",
        "zipBytes": len(packed),
        "sha256": hashlib.sha256(packed).hexdigest(),
        "files": len(listing),
        **reference_figures(app, source),
        "examples": examples,
    }
    data_out.write_text(json.dumps(data, indent=2) + "\n", encoding="utf-8")
    print(f"wrote {data_out.relative_to(ROOT)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
