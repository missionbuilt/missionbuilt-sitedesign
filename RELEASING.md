# Releasing missionbuilt.io

Pushing `main` deploys the live site (Cloudflare Pages). Any other pushed branch gets a
preview URL. So nothing lands on `main` until it is meant to be live.

**Ship when ready** (Mike, 2026-10-07): each app ships on its own, and the site goes out with
whichever app release it describes.

## Branches

The same scheme in IronStack, MealStack, MissionBuiltKit and missionbuilt-site (decided
2026-09-29, named for what ships rather than a date since 2026-10-07).

| Prefix | What it is | Cut from | Merges to | Example |
|---|---|---|---|---|
| `main` | The live site; every push deploys | — | — | `main` |
| `release/<app>` | The site's half of an app release, named for it; deleted after it's live | `main` | `main` | `release/ironstack` |
| `fix/<area>-<what>` | A bug, or a site-only change (merged to `main` on Mike's word) | `main` or the release | `main` or the release | `fix/site-broken-anchor` |
| `feat/<area>-<what>` | A feature | the release | the release | `feat/site-release-notes` |
| `chore/<what>` | Rename, tooling, cleanup; no behavior change | the release | the release | `chore/stackai-rename` |
| `hotfix/<what>` | A fix that can't wait | `main` | `main`, then into the open release | `hotfix/privacy-typo` |
| `lab/<what>` | Experiment; never merges unless Mike decides | `main` | nothing by default | `lab/schema-page` |

Work that crosses repos uses the same branch name in each repo (e.g. `chore/stackai-rename`
in ironstack, mealstack, the kit and the site). If both apps ship together, one site release
can carry both. The dated branches still open finish as they are.

## With an app release

1. `cd /Users/mike/Projects/missionbuilt-site && git switch -c release/<app> main`
2. Each change on its own branch cut from the release, merged back when
   `cd /Users/mike/Projects/missionbuilt-site && npm run build` is clean.
3. Release notes are generated from each app's `CHANGELOG.md`:
   `cd /Users/mike/Projects/missionbuilt-site && python3 scripts/sync_mealstack_changelog.py --app ironstack`
   (and `--app mealstack`). Don't hand-edit `src/content/releases/`. The page names the same
   build as the app's tag and the roadmap issue.
4. Push the release branch and check its preview URL.
5. **The site ships first.** Merge the release into `main` and push (Mike says when), so the
   release notes page is live before the app's `main` moves, then delete the release branch:

   ```
   cd /Users/mike/Projects/missionbuilt-site && git switch main && git merge --no-ff release/<app> -m "Release <app> <version>" && git push origin main
   ```

6. A privacy page changes on the day the server it describes deploys, never before: it must
   match what's live.

## A site-only change

A `fix/<area>-<what>` branch from `main`, `npm run build` clean, preview checked, merged to
`main` on Mike's word.
