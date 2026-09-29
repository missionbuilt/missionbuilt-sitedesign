#!/usr/bin/env python3
"""Bring everything MealStack publishes on the site up to date from the app repo:
the release notes (sync_mealstack_changelog.py), the plan skill download
(sync_plan_skill.py --app mealstack) and the schema (sync_mealstack_schema.py). Run from the site root:  python3 scripts/sync_mealstack.py
"""
import subprocess
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
code = 0
for script, *args in (("sync_mealstack_changelog.py",), ("sync_plan_skill.py", "--app", "mealstack"), ("sync_mealstack_schema.py",)):
    code |= subprocess.call([sys.executable, str(HERE / script), *args])
sys.exit(code)
