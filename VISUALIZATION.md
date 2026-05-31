# Zee Bakehouse — Project Visualization

## File tree (top-level)

```
.git
.gitignore
package.json
tsconfig.json
vite.config.ts
bun.lock
bunfig.toml
src/
  server.ts
  start.ts
  router.tsx
  routeTree.gen.ts
  styles.css
  assets/ (images)
  components/ui/ (many UI components)
  hooks/
  lib/ (config, utils, api)
  routes/ (index.tsx, __root.tsx)
```

## Architecture (Mermaid)

```mermaid
graph LR
  Browser -->|HTTP| Vite[Vite (dev/build)]
  Vite --> Client[Client SPA (`src/`)]
  Client --> Components[`src/components`]
  Client --> Routes[`src/routes`]
  Client --> Assets[`src/assets`]
  Server[Server (`src/server.ts` / `src/start.ts`)] --> API[`src/lib/api`]
  Server -->|serves| Client
  Repo[Repository] -->|package| PackageJSON[package.json]
  Repo -->|bundler| Bun[bun.lock / bunfig.toml]
```

## Key files to inspect

- `package.json` — scripts & dependencies
- `src/server.ts` — server entry
- `src/start.ts` — runtime bootstrap
- `src/routes/index.tsx` — root route

---
You can open these files in your editor or run the commands below to push the project to GitHub.

If you want me to push from this machine, I need `git` (and optionally `gh`) installed here. Otherwise run the following locally:

```powershell
Set-Location 'C:\Users\Lutha\Projects\zee-bakehouse'
git init
git add .
git commit -m "Initial import of zee-bakehouse"
git remote add origin https://github.com/USERNAME/REPO.git
git branch -M main
git push -u origin main
```

Or create & push with GitHub CLI (`gh`):

```powershell
Set-Location 'C:\Users\Lutha\Projects\zee-bakehouse'
gh repo create USERNAME/zee-bakehouse --public --source=. --remote=origin --push
```
