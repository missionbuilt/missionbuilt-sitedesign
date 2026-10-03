# missionbuilt.io

Astro static site on Cloudflare Pages (project `missionbuilt`). Shared rules in `~/Projects/CLAUDE.md`;
the brand rules are in the `missionbuilt-design` skill.

- App release notes are generated, not hand-written: `python3 scripts/sync_mealstack_changelog.py --app ironstack|mealstack`
  reads the app's `CHANGELOG.md` into `src/content/releases/`. Edit the app's CHANGELOG, then sync.
  Pages: `/rack/ironstack/changelog`, `/rack/mealstack/changelog`. One page per build
  (`/changelog/0-9-1-b86`; `-next` for the section in progress), because a weekly update keeps
  the version and bumps only the build. The version alone (`/changelog/0-9-1`) forwards to its
  newest shipped build. From a worktree, pass the CHANGELOG path to the sync script.
- Pushing `main` deploys. The release notes page must be live before an app's `main` moves.
- `functions/api/beta.js` + KV `BETA_KV` hold IronStack and MealStack beta sign-ups (the `page` field says which); the admin key is a Pages secret.
