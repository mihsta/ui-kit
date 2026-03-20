# Release process

This project uses Changesets to prepare releases and a manual final publish step to npm.

## Package installation

### From npm (after publish)

```bash
npm install @your-scope/ui-kit react react-dom tailwindcss
```

### From GitHub Release tarball

Download the `.tgz` asset from the [Releases](https://github.com/mihsta/ui-kit/releases) page, then:

```bash
npm install ./path/to/your-scope-ui-kit-0.1.2.tgz react react-dom tailwindcss
```

Or install directly from a release URL (replace the version as needed):

```bash
npm install https://github.com/mihsta/ui-kit/releases/download/v0.1.2/your-scope-ui-kit-0.1.4.tgz react react-dom tailwindcss
```

### Peer dependencies

The package requires `react`, `react-dom`, and `tailwindcss` as peer dependencies—install them in your project.

---

## One-time setup

- Set the real package name in `package.json` instead of `@your-scope/ui-kit`.
- Ensure the default branch is `main`.
- Add `NPM_TOKEN` to GitHub repository secrets with publish permissions for npm.
- Ensure branch protection requires CI checks from `.github/workflows/ci.yml`.

## Day-to-day development

1. For every user-facing change, create a changeset:
   - `npm run changeset`
   - Choose the package and bump type (`patch`, `minor`, `major`).
   - Write a short human-readable summary.
2. Open a PR with code + `.changeset/*.md`.
3. Merge only after CI is green.

## What happens after merge to main

- Workflow `.github/workflows/release.yml` runs.
- `changesets/action` creates or updates a release PR with version bumps and changelog updates.
- No automatic npm publish happens on push.
- When a release PR is merged, GitHub Release is created automatically with tag `v<version>`.

## Manual final publish to npm

1. Merge the release PR to `main`.
2. GitHub Release is created automatically.
3. Open GitHub Actions and run workflow `Release` manually (`workflow_dispatch`).
4. In `confirm_publish`, type `publish`.
5. Workflow runs quality gates and publishes to `registry.npmjs.org`.

## Local commands

- Create changeset: `npm run changeset`
- Apply versions from changesets: `npm run version-packages`
- Build and publish (used by manual publish job): `npm run release`

## Recommended release policy

- `patch`: bug fixes, non-breaking internal improvements.
- `minor`: new components, new optional props, additive behavior.
- `major`: breaking API changes, removed props/components, behavior changes requiring migration.
