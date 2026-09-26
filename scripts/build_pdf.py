#!/usr/bin/env python3
"""Build the Mission Built book PDF (public/downloads/mission-built-second-edition-revised.pdf) from the book repo.

Reads the chapter files in ../missionbuilt-book/book/, assembles one print HTML in the Iron Log
design (charcoal pages, chalk type, oxblood accent; Oswald / Merriweather / JetBrains Mono), and
prints it to a 6 x 9 in PDF with Chromium through Playwright.

Usage, from the site repo root:
    python3 scripts/build_pdf.py                 # writes public/downloads/mission-built-second-edition-revised.pdf
    python3 scripts/build_pdf.py --html-only     # writes the HTML next to the PDF, for a look in a browser
    python3 scripts/build_pdf.py --book ../missionbuilt-book --out public/downloads/mission-built-second-edition-revised.pdf

Needs:  pip install markdown playwright && playwright install chromium
Fonts:  the script embeds the three fonts from scripts/fonts/node_modules/@fontsource/{oswald,merriweather,jetbrains-mono}
        (cd scripts/fonts && npm install @fontsource/oswald @fontsource/merriweather @fontsource/jetbrains-mono).
        If that folder is missing it falls back to Google Fonts, which needs network at print time.
"""
import argparse, base64, glob, html, os, re, sys
import markdown

HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)

ap = argparse.ArgumentParser()
ap.add_argument("--book", default=os.path.normpath(os.path.join(ROOT, "..", "missionbuilt-book")))
ap.add_argument("--out", default=os.path.join(ROOT, "public", "downloads", "mission-built-second-edition-revised.pdf"))
ap.add_argument("--fonts", default=os.path.join(HERE, "fonts", "node_modules", "@fontsource"))
ap.add_argument("--html-only", action="store_true")
ap.add_argument("--edition", default="Second Edition, Revised")
ap.add_argument("--version", default="v2.1")
ap.add_argument("--year", default="2026")
args = ap.parse_args()

BOOK = os.path.join(args.book, "book")
md = markdown.Markdown(extensions=["smarty"], output_format="html5")

def read(name):
    return open(os.path.join(BOOK, name), encoding="utf-8").read()

def body_of(text):
    """Drop the '# Title' line and the trailing rule."""
    lines = text.split("\n")
    if lines and lines[0].startswith("# "):
        lines = lines[1:]
    t = "\n".join(lines).strip()
    t = re.sub(r"\n+---\s*$", "", t).strip()
    return t

def title_of(text):
    return text.split("\n", 1)[0].lstrip("# ").strip()

def to_html(text):
    md.reset()
    h = md.convert(text)
    # mark the signature line
    h = re.sub(r"<p>(— Mike)</p>", r'<p class="sig">\1</p>', h)
    return h

def esc(s): return html.escape(s, quote=False)

# ---------- fonts ----------
def font_css():
    base = args.fonts
    spec = [
        ("Oswald", "oswald", [(400, "normal"), (500, "normal"), (600, "normal"), (700, "normal")]),
        ("Merriweather", "merriweather", [(300, "normal"), (300, "italic"), (400, "normal"), (400, "italic"), (700, "normal"), (700, "italic")]),
        ("JetBrains Mono", "jetbrains-mono", [(400, "normal"), (500, "normal"), (600, "normal")]),
    ]
    if not os.path.isdir(base):
        return ('<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700'
                '&family=Merriweather:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=JetBrains+Mono:wght@400;500;600&display=block">')
    out = []
    for family, pkg, faces in spec:
        for w, style in faces:
            p = os.path.join(base, pkg, "files", f"{pkg}-latin-{w}-{style}.woff2")
            if not os.path.exists(p):
                continue
            b64 = base64.b64encode(open(p, "rb").read()).decode()
            out.append(f"@font-face{{font-family:'{family}';font-weight:{w};font-style:{style};font-display:block;"
                       f"src:url(data:font/woff2;base64,{b64}) format('woff2');}}")
    return "<style>" + "\n".join(out) + "</style>"

# ---------- content ----------
front_files = ["00b-note-on-second-edition.md", "00c-who-i-wrote-this-for.md"]
prologue = read("00d-prologue.md")
chapter_files = sorted(glob.glob(os.path.join(BOOK, "[01][0-9]-*.md")))
back = {n: read(n) for n in ["99a-sources.md", "99b-about-the-author.md", "99c-acknowledgments.md", "99d-tools.md"]}

pages = []
def page(cls, inner):
    pages.append(f'<section class="page {cls}">{inner}</section>')

EDITION_UP = args.edition.upper()
ed_mono = f"{EDITION_UP} · {args.year}"

# Cover
page("cover", f"""
  <div class="cover-top">
    <p class="eyebrow"><span class="dots">▮▮▮</span> AN OPEN-SOURCE BOOK · CC BY-NC-SA <span class="dots">▮▮▮</span></p>
    <p class="lockup">MISSION <span class="sq"></span> BUILT</p>
    <p class="mono dim">{esc(args.version.upper())} · {esc(ed_mono)}</p>
  </div>
  <div class="cover-main">
    <p class="mono kicker"><span class="sqs"></span> THE FIELD GUIDE</p>
    <h1 class="cover-title"><span>MISSION</span><span class="red">BUILT.</span></h1>
    <p class="cover-sub"><span class="dash"></span>A FIELD GUIDE FOR BUILDING THINGS THAT MATTER.</p>
  </div>
  <div class="cover-foot">
    <div><p class="mono faint">BY</p><p class="oswald">MIKE NICHOLS</p></div>
    <div class="right"><p class="mono faint">EDITION</p><p class="oswald red-text">{esc(EDITION_UP.replace('SECOND EDITION', 'SECOND'))} · {esc(args.year)}</p></div>
  </div>
""")

# Title page
page("titlepage", f"""
  <p class="eyebrow center"><span class="dots">▮▮▮</span> {esc(ed_mono)} <span class="dots">▮▮▮</span></p>
  <h1 class="cover-title center"><span>MISSION</span><span class="red">BUILT.</span></h1>
  <p class="oswald sub center">A FIELD GUIDE FOR BUILDING<br>THINGS THAT MATTER.</p>
  <p class="oswald center author">MIKE NICHOLS</p>
""")

# License page
page("license", f"""
  <p class="serif small"><em>Mission Built: A Field Guide for Building Things That Matter</em><br>by Mike Nichols<br>Copyright © {esc(args.year)} Mike Nichols.</p>
  <p class="mono label">LICENSE</p>
  <p class="serif small">This work is licensed under the Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License.<br><span class="mono">creativecommons.org/licenses/by-nc-sa/4.0</span></p>
  <p class="mono label">FIND THE LIVE EDITION</p>
  <p class="mono">missionbuilt.io</p>
  <p class="mono label">CONTACT</p>
  <p class="mono">mike@missionbuilt.io</p>
  <p class="mono label bottom">{esc(ed_mono)}</p>
""")

# Contents
toc = ['<li><span class="n">00</span><span class="k">PROLOGUE</span><span class="t">BUILT FOR MORE</span></li>']
chapters = []
for f in chapter_files:
    t = open(f, encoding="utf-8").read()
    m = re.match(r"# (\d+)\. (.+)", t.split("\n", 1)[0])
    num, title = m.group(1), m.group(2).strip()
    chapters.append((num, title, t))
    k = "CONCLUSION" if num == "14" else ""
    toc.append(f'<li><span class="n">{num.zfill(2)}</span><span class="k">{k}</span><span class="t">{esc(title.upper())}</span></li>')
page("contents", f"""
  <p class="mono kicker"><span class="sqs"></span> THE LOADOUT</p>
  <h1 class="page-h1">CONTENTS</h1>
  <ol class="toc">{''.join(toc)}</ol>
""")

# Front matter
for name in front_files:
    t = read(name)
    page("matter", f"""
  <p class="mono kicker"><span class="sqs"></span> FRONT MATTER</p>
  <h1 class="page-h1">{esc(title_of(t).upper())}</h1>
  <div class="prose">{to_html(body_of(t))}</div>""")

# Prologue
page("matter", f"""
  <p class="mono kicker"><span class="sqs"></span> PROLOGUE</p>
  <h1 class="page-h1">BUILT FOR MORE</h1>
  <div class="prose">{to_html(body_of(prologue))}</div>""")

# Chapters
for num, title, text in chapters:
    body = body_of(text)
    parts = re.split(r"(?m)^## ", body)
    pre = parts[0].strip()
    epigraph, intro = "", ""
    if pre:
        # a leading blockquote is the chapter epigraph; anything else is chapter intro prose (ch 13)
        bq = re.match(r"(?s)^((?:>.*\n?)+)", pre)
        if bq:
            epigraph = to_html(bq.group(1))
            intro = pre[bq.end():].strip()
        else:
            intro = pre
    kicker = "CONCLUSION" if num == "14" else f"CHAPTER {num.zfill(2)}"
    page("opener", f"""
  <p class="mono kicker"><span class="sqs"></span> {kicker}</p>
  <p class="chapter-num">{num.zfill(2)}</p>
  <h1 class="chapter-title">{esc(title.upper())}</h1>
  {('<div class="epigraph">' + epigraph + '</div>') if epigraph else ''}""")
    if intro:
        page("matter", f'<div class="prose">{to_html(intro)}</div>')
    for i, sec in enumerate(parts[1:], 1):
        head, _, sbody = sec.partition("\n")
        sbody = re.sub(r"\n+---\s*$", "", sbody.strip()).strip()
        page("section", f"""
  <p class="mono kicker">§ {int(num)}.{i} · {esc(title.upper())}</p>
  <h1 class="page-h1">{esc(head.strip().upper())}</h1>
  <div class="prose">{to_html(sbody)}</div>""")

# Back matter
for name in ["99a-sources.md", "99b-about-the-author.md", "99c-acknowledgments.md", "99d-tools.md"]:
    t = back[name]
    cls = "sources" if name.startswith("99a") else "matter"
    page(cls, f"""
  <p class="mono kicker"><span class="sqs"></span> BACK MATTER</p>
  <h1 class="page-h1">{esc(title_of(t).upper())}</h1>
  <div class="prose">{to_html(body_of(t))}</div>""")

# Colophon + end
page("colophon", f"""
  <p class="mono label center">COLOPHON</p>
  <p class="mono center dim">Set in Oswald, Merriweather,<br>and JetBrains Mono.<br><br>Designed and built in {esc(args.year)}.<br>Read the live edition at missionbuilt.io.<br>Source openly on GitHub.</p>
  <p class="mono label center bottom">CC BY-NC-SA 4.0</p>
""")
page("end", f"""
  <p class="mono center dim">MISSION BUILT · END</p>
  <p class="credo">REAL STRENGTH IS<br>LIFTING OTHERS.</p>
  <p class="center"><span class="sq big"></span></p>
""")

CSS = """
@page { size: 6in 9in; margin: 0.62in 0.6in; }
* { box-sizing: border-box; border-radius: 0 !important; }
html, body { margin: 0; padding: 0; background: #171513; color: #ebe5d8; }
body { font-family: "Merriweather", Georgia, serif; font-size: 9.6pt; line-height: 1.58; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
.page { page-break-before: always; min-height: 7.7in; position: relative; }
.page:first-child { page-break-before: auto; }
p { margin: 0 0 0.62em 0; }
.mono { font-family: "JetBrains Mono", monospace; font-size: 6.6pt; letter-spacing: 0.2em; text-transform: uppercase; color: #a8a094; }
.mono.faint { color: #8a847a; }
.dim { color: #a8a094; }
.eyebrow { font-family: "JetBrains Mono", monospace; font-size: 6.2pt; letter-spacing: 0.22em; text-transform: uppercase; color: #a8a094; }
.eyebrow .dots, .dots { color: #cb281f; letter-spacing: 0; }
.kicker { margin-bottom: 0.9em; }
.kicker .sqs { display: inline-block; width: 4pt; height: 4pt; background: #a8211a; margin-right: 6pt; vertical-align: 1pt; }
.oswald { font-family: "Oswald", sans-serif; text-transform: uppercase; }
.center { text-align: center; }
.red { color: #cb281f; }
.red-text { color: #e4564e; }
.page-h1 { font-family: "Oswald", sans-serif; font-weight: 700; font-size: 21pt; line-height: 1.05; letter-spacing: -0.005em; text-transform: uppercase; color: #ebe5d8; margin: 0 0 0.55em 0; max-width: 4.2in; }

/* cover */
.cover { display: flex; flex-direction: column; justify-content: space-between; min-height: 7.7in; }
.lockup { font-family: "Oswald", sans-serif; font-weight: 700; letter-spacing: 0.08em; font-size: 11pt; margin: 0.9em 0 0.2em; }
.sq { display: inline-block; width: 5pt; height: 5pt; background: #a8211a; vertical-align: 1pt; }
.sq.big { width: 9pt; height: 9pt; margin-top: 18pt; }
.cover-title { font-family: "Oswald", sans-serif; font-weight: 700; font-size: 62pt; line-height: 0.92; letter-spacing: -0.02em; margin: 0; }
.cover-title span { display: block; }
.cover-sub { font-family: "Oswald", sans-serif; font-weight: 400; font-size: 11.5pt; letter-spacing: 0.04em; color: #a8a094; margin: 14pt 0 0; max-width: 2.9in; line-height: 1.25; }
.cover-sub .dash { display: inline-block; width: 12pt; height: 1.5pt; background: #a8211a; vertical-align: 4pt; margin-right: 8pt; }
.cover-foot { display: flex; justify-content: space-between; border-top: 1px solid #2a2622; padding-top: 8pt; }
.cover-foot .oswald { font-size: 15pt; font-weight: 500; letter-spacing: 0.03em; margin: 0; }
.cover-foot .right { text-align: right; }
.cover-foot .mono { margin-bottom: 2pt; }

/* title & license */
.titlepage { display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; }
.titlepage .cover-title { font-size: 44pt; margin: 20pt 0 12pt; }
.titlepage .sub { font-size: 11pt; letter-spacing: 0.06em; color: #a8a094; line-height: 1.3; }
.titlepage .author { font-size: 13pt; font-weight: 500; letter-spacing: 0.1em; margin-top: 40pt; }
.license { padding-top: 1.2in; }
.license .small { font-size: 7.8pt; line-height: 1.5; color: #a8a094; }
.license .mono.label, .mono.label { color: #cb281f; margin: 14pt 0 3pt; font-weight: 500; letter-spacing: 0.24em; }
.license .mono { text-transform: none; letter-spacing: 0.08em; }
.license .mono.label { text-transform: uppercase; }
.bottom { position: absolute; bottom: 0; left: 0; right: 0; }

/* contents */
.toc { list-style: none; margin: 10pt 0 0; padding: 0; }
.toc li { display: grid; grid-template-columns: 22pt 60pt 1fr; align-items: baseline; padding: 6pt 0; border-bottom: 1px solid #221f1c; }
.toc .n { font-family: "JetBrains Mono", monospace; font-size: 7pt; color: #8a847a; }
.toc .k { font-family: "JetBrains Mono", monospace; font-size: 6pt; letter-spacing: 0.2em; color: #8a847a; }
.toc .t { font-family: "Oswald", sans-serif; font-weight: 500; font-size: 10.5pt; letter-spacing: 0.02em; }

/* chapter opener */
.opener { display: flex; flex-direction: column; justify-content: center; }
.chapter-num { font-family: "Oswald", sans-serif; font-weight: 700; font-size: 64pt; line-height: 1; color: #cb281f; margin: 0 0 6pt; }
.chapter-title { font-family: "Oswald", sans-serif; font-weight: 700; font-size: 26pt; line-height: 1.02; text-transform: uppercase; margin: 0; max-width: 4in; }
.epigraph { margin-top: 26pt; max-width: 3.6in; }
.epigraph blockquote { margin: 0; padding: 0 0 0 10pt; border-left: 2px solid #a8211a; font-family: "Merriweather", serif; font-style: italic; font-weight: 300; font-size: 10pt; color: #ebe5d8; }
.epigraph p { margin: 0; }

/* prose */
.prose { max-width: 4.2in; }
.prose p { text-align: left; hyphens: none; orphans: 2; widows: 2; }
.prose h3 { font-family: "Oswald", sans-serif; font-weight: 600; font-size: 10pt; letter-spacing: 0.06em; text-transform: uppercase; margin: 14pt 0 5pt; page-break-after: avoid; }
.prose h2 { font-family: "Oswald", sans-serif; font-weight: 600; font-size: 12pt; letter-spacing: 0.04em; text-transform: uppercase; margin: 16pt 0 6pt; page-break-after: avoid; }
.prose blockquote { margin: 9pt 0 10pt; padding: 8pt 11pt; background: #1f1c19; border-left: 3px solid #a8211a; page-break-inside: avoid; }
.prose blockquote p { margin: 0; font-family: "Merriweather", serif; font-style: italic; font-weight: 300; font-size: 9.6pt; color: #ebe5d8; }
.prose blockquote p + p { margin-top: 4pt; font-family: "JetBrains Mono", monospace; font-style: normal; font-size: 6.6pt; letter-spacing: 0.12em; color: #a8a094; }
.prose ul, .prose ol { margin: 0 0 8pt 0; padding-left: 16pt; }
.prose li { margin: 0 0 3pt 0; }
.prose li p { margin: 0; }
.prose hr { border: 0; height: 1px; background: #2a2622; margin: 12pt 0; }
.prose strong { font-weight: 700; color: #ebe5d8; }
.prose em { font-style: italic; }
.prose a { color: inherit; text-decoration: none; }
.prose .sig { font-family: "JetBrains Mono", monospace; font-size: 7pt; letter-spacing: 0.1em; color: #a8a094; margin-top: 10pt; }
.sources .prose p { font-size: 8pt; line-height: 1.45; }
.sources .prose h2 { margin-top: 18pt; }
.sources .prose a { word-break: break-all; }

/* colophon and end */
.colophon { display: flex; flex-direction: column; justify-content: center; align-items: center; }
.colophon .mono { line-height: 1.9; }
.colophon .mono.center.dim { text-transform: none; letter-spacing: 0.1em; }
.end { display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; }
.credo { font-family: "Oswald", sans-serif; font-weight: 500; font-size: 22pt; line-height: 1.1; color: #cb281f; margin: 14pt 0 0; }
"""

doc = f"""<!doctype html><html lang="en"><head><meta charset="utf-8">
<title>Mission Built — {esc(args.edition)} · {esc(args.year)}</title>
{font_css()}
<style>{CSS}</style></head><body>
{''.join(pages)}
</body></html>"""

html_path = os.path.splitext(args.out)[0] + ".html"
if args.html_only:
    open(html_path, "w", encoding="utf-8").write(doc)
    print("wrote", html_path); sys.exit(0)

from playwright.sync_api import sync_playwright
tmp_html = os.path.join(HERE, ".mission-built-print.html")
open(tmp_html, "w", encoding="utf-8").write(doc)
with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page()
    pg.goto("file://" + os.path.abspath(tmp_html), wait_until="load")
    pg.evaluate("document.fonts.ready")
    pg.pdf(path=args.out, prefer_css_page_size=True, print_background=True, display_header_footer=False)
    b.close()
os.remove(tmp_html)
print("wrote", args.out)
