#!/usr/bin/env python3
"""
build_skill_zips.py — Mission Built skill download builder

Zips each live, standalone Loadout skill folder into public/downloads/{skill}.zip
so the site can offer a one-click "download the standalone" path for the
non-CLI audience (Cowork, Claude.ai). Each zip unpacks to a folder you can drop
straight into ~/.claude/skills/.

Like build_demos.py, this runs LOCALLY (it needs the sibling ../loadout repo,
which the Cloudflare Pages CI build does not have). Commit the generated zips in
public/downloads/ — they are served as static assets.

Usage: cd /path/to/missionbuilt-site && python3 scripts/build_skill_zips.py
Output: public/downloads/{warmup,the-approach,spotter,floodlight}.zip
"""
import os
import sys
import zipfile

SCRIPT_DIR   = os.path.dirname(os.path.abspath(__file__))
SITE_ROOT    = os.path.dirname(SCRIPT_DIR)
LOADOUT_ROOT = os.path.join(os.path.dirname(SITE_ROOT), 'loadout')
OUT_DIR      = os.path.join(SITE_ROOT, 'public', 'downloads')

# Live, standalone skills.
SKILLS = ['warmup', 'the-approach', 'spotter', 'floodlight']

# Never include these in a download.
EXCLUDE_DIRS  = {'.git', 'node_modules', '__pycache__', '.DS_Store'}
EXCLUDE_FILES = {'.DS_Store'}


def zip_skill(skill: str) -> str:
    src = os.path.join(LOADOUT_ROOT, skill)
    if not os.path.isdir(src):
        sys.exit(f"[zips] ERROR: skill folder not found: {src}")
    out = os.path.join(OUT_DIR, f"{skill}.zip")
    count = 0
    with zipfile.ZipFile(out, 'w', zipfile.ZIP_DEFLATED) as zf:
        for root, dirs, files in os.walk(src):
            dirs[:] = [d for d in dirs if d not in EXCLUDE_DIRS]
            for f in files:
                if f in EXCLUDE_FILES:
                    continue
                full = os.path.join(root, f)
                # arcname includes the top skill folder, e.g. "spotter/SKILL.md"
                arc = os.path.join(skill, os.path.relpath(full, src))
                zf.write(full, arc)
                count += 1
    kb = os.path.getsize(out) / 1024
    print(f"[zips] {skill}.zip — {count} files, {kb:.0f} KB")
    return out


def main() -> int:
    os.makedirs(OUT_DIR, exist_ok=True)
    for skill in SKILLS:
        zip_skill(skill)
    print("[zips] OK")
    return 0


if __name__ == "__main__":
    sys.exit(main())
