#!/usr/bin/env python3
"""Turn MealStack Simulator screenshots into the click-through demo's images.

The demo at public/demos/mealstack.html is real screens from the app, shot in the
iPhone 17 Simulator (dark appearance) with the Debug build's demo clock set to the
time of day each step needs. The Simulator's own status-bar clock shows the hour the
shot was taken, so this script paints it out; the page draws the demo time there.

    python3 scripts/build_mealstack_demo_images.py ~/Projects/mealstack/"Claude outputs"/demo-captures

Writes public/demos/mealstack/<name>.webp (603 x 1311, 1.5x of the 402 pt screen).
Needs Pillow (pip install pillow).
"""
import sys
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "public" / "demos" / "mealstack"
W, H = 603, 1311          # 1.5x of 402 x 874 pt
# The status-bar clock, in points: x 36-114, y 19-45.
CLOCK = (36, 19, 114, 45)


def erase_clock(im: Image.Image) -> Image.Image:
    """Fill the clock's box row by row from the column just right of it. The status
    bar there is empty (the Dynamic Island starts further right), and a row copy keeps
    whatever is scrolled under the bar, like the edge of a button, intact."""
    s = im.width / 402
    x0, y0, x1, y1 = (round(v * s) for v in CLOCK)
    px = im.load()
    src = x1 + round(3 * s)
    for y in range(y0, y1):
        c = px[src, y]
        for x in range(x0, x1):
            px[x, y] = c
    return im


def main() -> int:
    src = Path(sys.argv[1]).expanduser() if len(sys.argv) > 1 else None
    if not src or not src.is_dir():
        print(__doc__)
        return 1
    OUT.mkdir(parents=True, exist_ok=True)
    for f in sorted(src.glob("*.png")):
        im = erase_clock(Image.open(f).convert("RGB"))
        im = im.resize((W, H), Image.LANCZOS)
        out = OUT / (f.stem + ".webp")
        im.save(out, "WEBP", quality=82, method=6)
        print(f"wrote {out.relative_to(ROOT)} ({out.stat().st_size // 1024} kB)")
    return 0


if __name__ == "__main__":
    sys.exit(main())
