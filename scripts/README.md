# scripts/

## build_demos.py

Generates the click-through demos embedded on the Loadout skill pages at [missionbuilt.io](https://missionbuilt.io).

Each demo is built directly from the same HTML template the MCP server ships to agents — same CSS, same layout, same data schema. What you see in the demo is exactly what an agent produces.

### Run it

From the project root:

```bash
cd ~/Projects/missionbuilt-site
python3 scripts/build_demos.py
```

Output goes to `public/demos/`:

- `public/demos/spotter.html`
- `public/demos/approach.html`
- `public/demos/warmup.html`

Commit and push after rebuilding. Cloudflare Pages deploys automatically.

### How it works

Each demo has two parts: **sample data** and **overlay steps**.

**Sample data** is hardcoded in `build_demos.py` — `SPOTTER_DATA`, `APPROACH_DATA`, and `WARMUP_DATA` near the top of the file. The builder injects this data into the real skill template the same way the MCP server does during a live run.

**Overlay steps** — `SPOTTER_STEPS`, `APPROACH_STEPS`, `WARMUP_STEPS` — define the guided walkthrough. Each step is a dict with three keys:

```python
{
    "selector": "#some-element",   # CSS selector for the element to highlight
    "title":    "Step title",      # shown in the overlay panel
    "desc":     "Step description" # shown below the title
}
```

The overlay adds a keyboard-navigable panel (← → or panel buttons), a pulsing oxblood highlight ring on the target element, and a progress counter. It doesn't modify the template HTML itself.

### Where templates come from

| Demo | Source template |
|------|----------------|
| Spotter | `loadout/missionbuilt-mcp/src/skill-content/spotter/spotter-template.html` |
| Approach | `loadout/missionbuilt-mcp/src/skill-content/the-approach/approach-template.html` |
| Warmup | `loadout/missionbuilt-mcp/src/warmup-shell.rawjs` (the shell is injected into a minimal HTML wrapper) |

These paths assume the `loadout` and `missionbuilt-site` repos are siblings under the same parent directory.

### Editing steps

Open `build_demos.py` and find the `*_STEPS` list for the demo you want to change. Edit the list, then rebuild. No other files need to change.

To find the right selector for a new step, open the built demo in a browser and use DevTools to inspect the element you want to highlight.

### Editing sample data

The `*_DATA` dicts are near the top of `build_demos.py`. They follow the exact same schema as live data — see each skill's `SKILL.md` in the `loadout` repo for the full schema.

After editing data, rebuild.

### Warmup: how fonts work in the demo

The Warmup template normally calls the MCP server to load fonts at runtime. In the demo, there's no MCP server — the preamble script handles this:

1. Sets `fontToolName` to a non-empty string so the shell's guard check passes.
2. Intercepts `window.cowork.callMcpTool` via `Object.defineProperty` and returns stub `@font-face` CSS immediately when the font tool is called — whether Cowork desktop injects `window.cowork` before or after the preamble runs.
3. Google Fonts CDN in `<head>` loads the real fonts for the browser.

Don't remove the `Object.defineProperty` intercept or set `fontToolName` back to an empty string — both changes will bring back the font error banner.

### After any template change in the loadout repo

Rebuild the demos and commit the updated `public/demos/*.html` files alongside any other site changes. The demos don't auto-update when the loadout templates change — they're static files that need to be regenerated.

> **Heads-up:** the Warmup source above (`warmup-shell.rawjs`) was retired in the loadout thin-server v2 work. Before the Warmup demo will rebuild, repoint `build_demos.py`'s Warmup path to `skill-content/warmup/warmup-template.html` and switch its injection to the `__WARMUP_DATA__` / `__WARMUP_SAVED_AT__` placeholders.

---

## build_skill_zips.py

Generates the one-click "download the standalone" zips offered on the Loadout pages.

Each live, standalone skill folder in the `loadout` repo is zipped to `public/downloads/{skill}.zip`, unpacking to a drop-in folder for `~/.claude/skills/`.

### Run it

```bash
cd ~/Projects/missionbuilt-site
python3 scripts/build_skill_zips.py
```

Output:

- `public/downloads/warmup.zip`
- `public/downloads/the-approach.zip`
- `public/downloads/spotter.zip`

Commit the zips alongside other site changes — like the demos, they're static and don't auto-update when the loadout repo changes. Re-run after a skill release. Floodlight is excluded until it ships (add it to `SKILLS` in the script when it does).

Same sibling-repo assumption as `build_demos.py`: `loadout` and `missionbuilt-site` live under the same parent directory.
