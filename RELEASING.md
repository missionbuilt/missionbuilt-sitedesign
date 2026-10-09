# Releasing missionbuilt.io

Pushing `main` deploys the live site (Cloudflare Pages). Any other pushed branch gets a
preview URL. So nothing lands on `main` until it is meant to be live.

## Branches

The same scheme in IronStack, MealStack, MissionBuiltKit and missionbuilt-site (decided
2026-09-29).

| Prefix | What it is | Cut from | Merges to | Example |
|---|---|---|---|---|
| `main` | The live site; every push deploys | — | — | `main` |
| `release/<ship-date>` | One weekly update, named for its ship weekend | `main` | `main` | `release/2026-10-03` |
| `fix/<area>-<what>` | A bug in that update | the release | the release | `fix/site-broken-anchor` |
| `feat/<area>-<what>` | A feature in that update | the release | the release | `feat/site-release-notes` |
| `chore/<what>` | Rename, tooling, cleanup; no behavior change | the release | the release | `chore/stackai-rename` |
| `hotfix/<what>` | A fix that can't wait for the week | `main` | `main`, then into the open release | `hotfix/privacy-typo` |
| `lab/<what>` | Experiment; never merges unless Mike decides | latest release | nothing by default | `lab/schema-page` |

Work that crosses repos uses the same branch name in each repo (e.g. `chore/stackai-rename`
in ironstack, mealstack, the kit and the site).

## Weekly update

1. `cd ~/Projects/missionbuilt-site && git switch -c release/<ship-date> main`
2. Each change on its own branch cut from the release, merged back when
   `cd ~/Projects/missionbuilt-site && npm run build` is clean.
3. Release notes are generated from each app's `CHANGELOG.md`:
   `cd ~/Projects/missionbuilt-site && python3 scripts/sync_mealstack_changelog.py --app ironstack`
   (and `--app mealstack`). Don't hand-edit `src/content/releases/`.
4. Push the release branch and check its preview URL.
5. **The site ships first.** Merge the release into `main` and push (Mike says when), so the
   release notes page is live before either app's `main` moves:

   ```
   cd ~/Projects/missionbuilt-site && git switch main && git merge --no-ff release/<ship-date> -m "Release <ship-date>" && git push origin main
   ```

6. A privacy page changes on the day the server it describes deploys, never before: it must
   match what's live.
