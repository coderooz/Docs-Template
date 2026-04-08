# Changelog

All notable changes to this template repository will be documented in this file.

The format is based on Keep a Changelog and this project aims to follow Semantic Versioning for tagged releases.

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

