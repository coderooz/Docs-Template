# Changelog

All notable changes to this template repository will be documented in this file.

The format is based on Keep a Changelog and this project aims to follow Semantic Versioning for tagged releases.

---

## [1.2.0] - 2026-04-23

### Added

- Added `dependabot.yml` for automated dependency updates (npm + GitHub Actions)
- Added `auto-tag.yml` workflow to auto-create version tags on package.json changes
- Added `security.yml` workflow with CodeQL analysis
- Added `stale.yml` workflow to manage stale issues/PRs
- Added `delete-branch.yml` workflow to auto-delete merged branches
- Added `auto-merge.yml` workflow to auto-merge Dependabot PRs
- Enabled auto-merge for Dependabot in dependabot.yml
- Added `CODEOWNERS` file

## [1.1.0] - 2026-04-23

### Added

- Added `.nvmrc` for Node.js version pinning
- Added lint and test GitHub Actions workflows
- Added `CONTRIBUTING.md` with contribn guidelines
- Added `SECURITY.md` with security vulnerability reporting
- Added `LICENSE.md` with MIT license
- Added `.editorconfig` for consistent editor settings
- Added `.eslintrc.json` for JavaScript linting
- Added `.prettierrc` for code formatting
- Added question issue template
- Added `CODE_OF_CONDUCT.md` (Contributor Covenant v2.1)
- Added `AUTHORS.md` with project lead listing
- Added `SUPPORT.md` with getting help documentation
- Added `.github/FUNDING.yml` with funding links

### Changed

- Updated `package.json` with proper npm scripts and devDependencies
- Updated `.gitignore` with more comprehensive exclusions
- Updated `.github/workflows/docs.yml` to include more thorough checks
- Updated issue templates with assignees and priority fields
- Updated docs site config with Coderooz branding

---

## [1.0.0] - 2026-04-08

### Added

- Reusable, config-driven documentation shell in `docs/`
  - Configurable project name, tagline, CTAs, external links, stats, and sections via `docs/site-config.js`
  - Dynamic page rendering with support for `paragraph`, `list`, `steps`, `code`, `table`, and `callout` blocks, including copy buttons and synced sidebar nav via `docs/app.js`
  - Modern static-docs layout responsive for desktop and mobile via `docs/styles.css`
  - Publish-time metadata files: `docs/robots.txt`, `docs/sitemap.xml`, and `docs/site.webmanifest`
- Initial reusable documentation template in `n.md`
- Repository-level README for setup and usage
- Dedicated external links placement in the docs template
- GitHub issue forms for bugs, features, and documentation improvements
- Markdown and workflow validation GitHub Actions

### Changed

- Reworked PR template for clearer review and testing context
- Updated labeler paths to match this repository
- Switched release automation to a tag-based GitHub release flow

