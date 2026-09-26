#!/usr/bin/env python3
"""Sync the book's chapter prose from the missionbuilt-book repo into src/content/chapters/.

The book repo (../missionbuilt-book, a sibling of this one) is the source of truth for the
manuscript. Each `## Section` in a chapter file becomes the body of one .mdx here; the .mdx
frontmatter (chapter, section, order, title, mins, kicker) is kept from the existing file and
only the body is replaced. Chapter epigraphs and the chapter 13 intro are not on the site.

Chapter 13 is the one special case: the site splits "AI in the Boardroom" into 13.2 and 13.3
("What Stays Yours") at the paragraph beginning "Here is what AI does not change."

Read times: every section's `mins` is recomputed from its word count at 230 words per minute, and
the chapter, prologue and conclusion totals in src/data/book.ts are rewritten to match, so the home
page, the chapter index and the reading view all quote the same numbers.

Also copies manuscript.md to public/downloads/DOWNLOAD_MD (the Markdown download).

Run from the project root:
    python3 scripts/sync_book.py            # sync
    python3 scripts/sync_book.py --check    # report what would change, write nothing
"""
import os, re, sys, glob

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
BOOK = os.path.normpath(os.path.join(ROOT, "..", "missionbuilt-book"))
CONTENT = os.path.join(ROOT, "src", "content", "chapters")
CHECK = "--check" in sys.argv
WPM = 230
DOWNLOAD_MD = "mission-built-second-edition-revised.md"

def slug(title):
    s = title.lower().replace("'", "").replace("’", "")
    s = re.sub(r"[^a-z0-9]+", "-", s).strip("-")
    return s

def split_sections(text):
    """Return [(heading, body)] for each '## ' section; body excludes the trailing rule."""
    parts = re.split(r"(?m)^## ", text)
    out = []
    for p in parts[1:]:
        head, _, body = p.partition("\n")
        body = body.strip()
        body = re.sub(r"\n+---\s*$", "", body).strip()
        out.append((head.strip(), body))
    return out

def read_mins(text):
    words = len(re.findall(r"[A-Za-z0-9'’-]+", re.sub(r"[#>*_]", "", text)))
    return max(1, round(words / WPM))

MINS = {}  # (folder, order) -> mins
def replace_body(mdx_path, body):
    cur = open(mdx_path, encoding="utf-8").read()
    m = re.match(r"(?s)^(---\n.*?\n---\n)", cur)
    if not m:
        raise SystemExit(f"no frontmatter in {mdx_path}")
    mins = read_mins(body)
    fm = re.sub(r"(?m)^mins: \d+$", f"mins: {mins}", m.group(1))
    folder = os.path.basename(os.path.dirname(mdx_path))
    order = int(re.search(r"(?m)^order: (\d+)$", fm).group(1))
    MINS[(folder, order)] = mins
    new = fm + "\n" + body + "\n"
    if new != cur:
        if not CHECK:
            open(mdx_path, "w", encoding="utf-8").write(new)
        return True
    return False

changed = []
def sync(folder, sections):
    for title, body in sections:
        path = os.path.join(CONTENT, folder, slug(title) + ".mdx")
        if not os.path.exists(path):
            raise SystemExit(f"missing {path} for section '{title}'")
        if replace_body(path, body):
            changed.append(os.path.relpath(path, ROOT))

# Chapters 1–12 and 14 (conclusion), plus the prologue.
for ch in sorted(glob.glob(os.path.join(BOOK, "book", "[01][0-9]-*.md"))):
    base = os.path.basename(ch)
    n = base[:2]
    text = open(ch, encoding="utf-8").read()
    if n == "13":
        secs = split_sections(text)
        bar = [b for t, b in secs if t == "AI Under the Bar"][0]
        board = [b for t, b in secs if t == "AI in the Boardroom"][0]
        cut = board.index("Here is what AI does not change.")
        board_a = re.sub(r"\n+---\s*$", "", board[:cut].rstrip()).strip()
        board_b = board[cut:].strip()
        sync("13", [("AI Under the Bar", bar), ("AI in the Boardroom", board_a), ("What Stays Yours", board_b)])
    elif n == "14":
        body = text.split("\n", 1)[1]
        body = re.sub(r"\n+---\s*$", "", body.strip()).strip()
        sync("conclusion", [("Giving a Shit Works", body)])
    else:
        sync(n, split_sections(text))

# Prologue.
pro = open(os.path.join(BOOK, "book", "00d-prologue.md"), encoding="utf-8").read()
body = pro.split("\n", 1)[1]
body = re.sub(r"\n+---\s*$", "", body.strip()).strip()
sync("prologue", [("Built for More", body)])

# Read-time totals in src/data/book.ts: one number per chapter, prologue and conclusion.
bts_path = os.path.join(ROOT, "src", "data", "book.ts")
bts = open(bts_path, encoding="utf-8").read()
new_bts = bts
for folder in [f"{i:02d}" for i in range(1, 14)]:
    total = sum(v for (fo, _), v in MINS.items() if fo == folder)
    new_bts = re.sub(r"(\{ n: '%s',.*?mins: )\d+( \})" % folder, lambda m: f"{m.group(1)}{total}{m.group(2)}", new_bts, count=1, flags=re.S)
new_bts = re.sub(r"(prologue: \{.*?mins: )\d+", lambda m: f"{m.group(1)}{MINS[('prologue', 1)]}", new_bts, count=1)
new_bts = re.sub(r"(conclusion: \{.*?mins: )\d+", lambda m: f"{m.group(1)}{MINS[('conclusion', 1)]}", new_bts, count=1)
if new_bts != bts:
    if not CHECK:
        open(bts_path, "w", encoding="utf-8").write(new_bts)
    changed.append("src/data/book.ts")

# Markdown download.
src = os.path.join(BOOK, "manuscript.md"); dst = os.path.join(ROOT, "public", "downloads", DOWNLOAD_MD)
if not os.path.exists(dst) or open(src, encoding="utf-8").read() != open(dst, encoding="utf-8").read():
    if not CHECK:
        open(dst, "w", encoding="utf-8").write(open(src, encoding="utf-8").read())
    changed.append("public/downloads/" + DOWNLOAD_MD)

print(("would change" if CHECK else "updated"), len(changed), "files")
for c in changed: print(" ", c)
