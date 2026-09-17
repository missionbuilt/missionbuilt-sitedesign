#!/usr/bin/env python3
"""Bring everything MealStack publishes on the site up to date from the app repo:
the release notes (sync_mealstack_changelog.py) and the plan skill download
(sync_mealstack_skill.py). Run from the site root:  python3 scripts/sync_mealstack.py
"""
import subprocess
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
code = 0
for script in ("sync_mealstack_changelog.py", "sync_mealstack_skill.py"):
    code |= subprocess.call([sys.executable, str(HERE / script)])
sys.exit(code)
