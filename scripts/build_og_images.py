#!/usr/bin/env python3
"""Build the share cards (og:image, 1200 x 630) for IronStack and MealStack.

Each card is the Iron Log look: charcoal ground, the MISSION ▪ BUILT lockup, the app's
name in Oswald with the oxblood period, its line, and one real phone screen from
public/images/<app>/ on the right. The book keeps /og-image.jpg.

    python3 scripts/build_og_images.py

Writes public/images/<app>/og.jpg, and public/images/rack-og.jpg for /rack (both phones). Needs Pillow, and the fonts in scripts/fonts
(cd scripts/fonts && npm install), the same local copies build_pdf.py uses.
Run it again after the phone screen it uses is recaptured.
"""
from __future__ import annotations  # the Mac's system Python is 3.9
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parent.parent
FONTS = ROOT / "scripts" / "fonts" / "node_modules" / "@fontsource"
W, H = 1200, 630

BG = (0x17, 0x15, 0x13)
RULE = (0x2a, 0x26, 0x22)
CHALK = (0xeb, 0xe5, 0xd8)
CHALK_DIM = (0xa8, 0xa0, 0x94)
CHALK_FAINT = (0x8a, 0x84, 0x7a)
BLOOD = (0xa8, 0x21, 0x1a)
BLOOD_BRIGHT = (0xcb, 0x28, 0x1f)

CARDS = {
    "ironstack": {"name": "IRONSTACK", "line": ["Log it. Time it.", "Lift each other up."],
                  "screen": "log-session.webp", "meta": "A LIFTING LOG FOR IPHONE · PRIVATE BETA"},
    "mealstack": {"name": "MEALSTACK", "line": ["Fueling is training."],
                  "screen": "today-training.webp", "meta": "MEAL TIMING FOR IPHONE · PRIVATE BETA"},
    "rack": {"name": "THE RACK", "line": ["IronStack and MealStack.", "For people who train."],
             "screens": ["ironstack/log-session.webp", "mealstack/today-training.webp"], "meta": "IPHONE · PRIVATE BETA"},
}


def font(family: str, weight: int, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(str(FONTS / family / "files" / f"{family}-latin-{weight}-normal.woff"), size)


def tracked(draw: ImageDraw.ImageDraw, xy, text: str, f, fill, spacing: float) -> float:
    """Draw text with letter-spacing in em; returns the x after the last letter."""
    x, y = xy
    for ch in text:
        draw.text((x, y), ch, font=f, fill=fill)
        x += draw.textlength(ch, font=f) + spacing * f.size
    return x


def card(app: str) -> Image.Image:
    c = CARDS[app]
    im = Image.new("RGB", (W, H), BG)
    d = ImageDraw.Draw(im)
    left = 72

    # The lockup: MISSION ▪ BUILT, Oswald 700, .08em, with the oxblood square.
    lock = font("oswald", 700, 26)
    x = tracked(d, (left, 64), "MISSION", lock, CHALK, 0.08)
    sq = 11
    d.rectangle([x + 6, 64 + 12, x + 6 + sq, 64 + 12 + sq], fill=BLOOD)
    tracked(d, (x + 6 + sq + 12, 64), "BUILT", lock, CHALK, 0.08)

    # The name, big, with the period in blood-bright.
    big = font("oswald", 700, 132 if "screen" in c else 104)
    y = 150 if "screen" in c else 176
    x = tracked(d, (left, y), c["name"], big, CHALK, -0.02)
    d.text((x, y), ".", font=big, fill=BLOOD_BRIGHT)

    # The line, Oswald 400 in chalk-dim.
    line = font("oswald", 400, 44)
    y = 330
    for row in c["line"]:
        d.text((left, y), row, font=line, fill=CHALK_DIM)
        y += 58

    # A rule and the mono meta line.
    d.line([(left, 520), (700, 520)], fill=RULE, width=1)
    mono = font("jetbrains-mono", 500, 18)
    tracked(d, (left, 542), c["meta"], mono, CHALK_FAINT, 0.14)

    # The phone screen(s) on the right, bled off the bottom, with a hairline edge.
    screens = c.get("screens") or [f"{app}/{c['screen']}"]
    # Wide enough that each screen reaches the bottom edge (they are 540 x 1174).
    sw = 330 if len(screens) == 1 else 262
    sx = W - 90 - len(screens) * sw - (len(screens) - 1) * 24
    for i, path in enumerate(screens):
        shot = Image.open(ROOT / "public" / "images" / path).convert("RGB")
        shot = shot.resize((sw, round(shot.height * sw / shot.width)), Image.LANCZOS)
        x0, sy = sx + i * (sw + 24), 60 + i * 40
        im.paste(shot.crop((0, 0, sw, H - sy)), (x0, sy))
        d.rectangle([x0 - 1, sy - 1, x0 + sw, H + 1], outline=RULE, width=1)
    return im


def main() -> int:
    for app in CARDS:
        out = ROOT / "public" / "images" / ("rack-og.jpg" if app == "rack" else f"{app}/og.jpg")
        card(app).save(out, "JPEG", quality=88, optimize=True, progressive=True)
        print(f"wrote {out.relative_to(ROOT)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
