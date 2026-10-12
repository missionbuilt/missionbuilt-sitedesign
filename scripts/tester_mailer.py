#!/usr/bin/env python3
"""The soft-launch email to beta testers (#44, briefs/launch/pricing-page-spec.md §4).

    python3 scripts/tester_mailer.py --testers <testers.csv> --links <links.json> [--out <folder>]

Dry run only. It writes one email per tester, as a plain .txt file, into a folder outside every
repository (default: ~/Library/Application Support/missionbuilt/tester-mail-dryrun/<date>/), for
Mike to read. It never sends. Sending is a separate step, on Mike's go, after he has read the
list and the emails.

- `testers.csv`: the TestFlight testers Mike exports, with columns `email` and, if he has them,
  `first_name`. It holds personal data, so it stays outside the repo, and this script never
  copies it anywhere but the output folder.
- `links.json`: the three App Store links, set on release day:
  {"ironstack": "https://apps.apple.com/…", "mealstack": "…", "missionstack": "…"}.
  A missing or placeholder link stops the run.

The rules the email keeps (spec §4): from mike@missionbuilt.io; the founding price and its end
date; a thank-you; an ask for an honest rating with no reward of any kind (RULES.md product
rule 16); no tracking pixels, no link tracking, plain text only.
"""
import argparse
import csv
import datetime as dt
import json
import pathlib
import re
import sys

FROM = "Mike Nichols <mike@missionbuilt.io>"
SUBJECT = "IronStack, MealStack and MissionStack are on the App Store"
FOUNDING_END = "January 31"
# The founding prices of record (decision log, Mike 2026-10-11 20:33), first year, annual.
FOUNDING = [
    ("IronStack Pro", "$19.99", "$29.99"),
    ("MealStack", "$44.99", "$59.99"),
    ("The Stack (all three apps)", "$59.99", "$79.99"),
]
APPS = [("IronStack", "ironstack"), ("MealStack", "mealstack"), ("MissionStack, for iPad, Mac and Apple TV", "missionstack")]
EMAIL = re.compile(r"^[^@\s]+@[^@\s]+\.[^@\s]+$")


def body(first_name: str, links: dict) -> str:
    hello = f"Hi {first_name}," if first_name else "Hi,"
    app_lines = "\n".join(f"{name}: {links[key]}" for name, key in APPS)
    price_lines = "\n".join(f"- {name}: {now} for your first year (then {regular} a year)" for name, now, regular in FOUNDING)
    return f"""{hello}

IronStack, MealStack and MissionStack are on the App Store now.

{app_lines}

You tested them before anyone else could, and they're better for it. Thank you.

Subscribe by {FOUNDING_END} and you get the founding price. No code needed:
{price_lines}

It renews at the regular price, and you can cancel any time in your Apple ID's subscriptions. IronStack itself stays free.

One ask: if you have a minute, rate the apps on the App Store and say what you honestly think. It helps other lifters decide.

Mike
"""


def main() -> int:
    ap = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    ap.add_argument("--testers", required=True, type=pathlib.Path)
    ap.add_argument("--links", required=True, type=pathlib.Path)
    default_out = pathlib.Path.home() / "Library/Application Support/missionbuilt/tester-mail-dryrun" / dt.date.today().isoformat()
    ap.add_argument("--out", type=pathlib.Path, default=default_out)
    args = ap.parse_args()

    links = json.loads(args.links.read_text())
    for _, key in APPS:
        link = links.get(key, "")
        if not link.startswith("https://apps.apple.com/") or "…" in link:
            print(f"stopped: the {key} App Store link isn't set ({link or 'missing'}). Set all three on release day.", file=sys.stderr)
            return 1

    repo = pathlib.Path(__file__).resolve().parent.parent
    out = args.out.resolve()
    if repo in out.parents or out == repo:
        print("stopped: the output folder is inside the repository; testers' addresses never go in git.", file=sys.stderr)
        return 1

    with args.testers.open(newline="") as f:
        rows = list(csv.DictReader(f))
    seen, bad, people = set(), [], []
    for i, row in enumerate(rows, start=2):
        email = (row.get("email") or "").strip().lower()
        if not EMAIL.match(email):
            bad.append(f"line {i}")
            continue
        if email in seen:
            continue
        seen.add(email)
        people.append((email, (row.get("first_name") or "").strip()))
    if bad:
        print(f"stopped: {len(bad)} rows without a usable email ({', '.join(bad[:5])}…). Fix the export first.", file=sys.stderr)
        return 1

    out.mkdir(parents=True, exist_ok=True)
    for n, (email, first) in enumerate(people, start=1):
        text = f"From: {FROM}\nTo: {email}\nSubject: {SUBJECT}\n\n{body(first, links)}"
        (out / f"{n:04d}.txt").write_text(text)
    print(f"Dry run: {len(people)} emails in {out}. Nothing was sent.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
