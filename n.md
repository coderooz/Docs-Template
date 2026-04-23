# {{PROJECT_NAME}}

> One-line summary of what the project does and who it serves.

## Document Metadata

| Field | Value |
| --- | --- |
| Project | `{{PROJECT_NAME}}` |
| Status | `{{ACTIVE | MAINTENANCE | EXPERIMENTAL}}` |
| Owner | `{{TEAM_OR_OWNER}}` |
| Primary Language(s) | `{{LANGUAGES}}` |
| Repository | `{{REPOSITORY_URL}}` |
| Documentation Version | `{{DOCS_VERSION}}` |
| Last Updated | `{{YYYY-MM-DD}}` |

## At A Glance

- Problem solved: `{{PROBLEM_STATEMENT}}`
- Target users: `{{USERS_OR_TEAMS}}`
- Supported environments: `{{LOCAL | CLOUD | MOBILE | SERVER | CLI}}`
- Main entry points: `{{ENTRY_POINTS}}`

## External Links

- Repository: `{{REPOSITORY_URL}}`
- Live application: `{{PRODUCTION_URL}}`
- Staging environment: `{{STAGING_URL}}`
- API reference: `{{API_DOCS_URL}}`
- Package registry: `{{PACKAGE_URL}}`
- Design files: `{{DESIGN_URL}}`
- Issue tracker: `{{ISSUES_URL}}`
- Discussions: `{{DISCUSSIONS_URL}}`
- Changelog: `{{CHANGELOG_URL}}`
- Security policy: `{{SECURITY_URL}}`

## Table Of Contents

1. [Overview](#overview)
2. [Goals](#goals)
3. [Repository Structure](#repository-structure)
4. [Tech Stack](#tech-stack)
5. [Getting Started](#getting-started)
6. [Configuration](#configuration)
7. [Common Workflows](#common-workflows)
8. [Usage Examples](#usage-examples)
9. [Architecture Notes](#architecture-notes)
10. [Testing Strategy](#testing-strategy)
11. [Deployment](#deployment)
12. [Troubleshooting](#troubleshooting)
13. [Contributing](#contributing)
14. [Roadmap](#roadmap)
15. [FAQ](#faq)

## Overview

Describe the project in one or two short paragraphs.

Cover:

- What the project is
- Why it exists
- What is included in this repository
- What is intentionally out of scope

## Goals

- `{{PRIMARY_GOAL_1}}`
- `{{PRIMARY_GOAL_2}}`
- `{{PRIMARY_GOAL_3}}`

## Repository Structure

```text
{{PROJECT_NAME}}/
|-- src/
|-- docs/
|-- tests/
|-- scripts/
`-- .github/
```

Add a short explanation for the most important directories:

- `src/`: `{{SOURCE_DESCRIPTION}}`
- `docs/`: `{{DOCS_DESCRIPTION}}`
- `tests/`: `{{TESTS_DESCRIPTION}}`
- `scripts/`: `{{SCRIPTS_DESCRIPTION}}`

## Tech Stack

| Area | Choice | Notes |
| --- | --- | --- |
| Language(s) | `{{LANGUAGES}}` | `{{LANGUAGE_NOTES}}` |
| Framework | `{{FRAMEWORK}}` | `{{FRAMEWORK_NOTES}}` |
| Package Manager | `{{PACKAGE_MANAGER}}` | `{{PACKAGE_MANAGER_NOTES}}` |
| Runtime | `{{RUNTIME}}` | `{{RUNTIME_NOTES}}` |
| Database | `{{DATABASE}}` | `{{DATABASE_NOTES}}` |
| Hosting | `{{HOSTING}}` | `{{HOSTING_NOTES}}` |

## Getting Started

### Prerequisites

- `{{REQUIRED_TOOL_1}}`
- `{{REQUIRED_TOOL_2}}`
- `{{REQUIRED_TOOL_3}}`

### Installation

Use only the blocks that apply to the project.

```bash
# Node.js / TypeScript
npm install
```

```bash
# Python
python -m venv .venv
pip install -r requirements.txt
```

```bash
# Go
go mod download
```

```bash
# Rust
cargo fetch
```

```bash
# Java
./gradlew build
```

### First Run

```bash
{{START_COMMAND}}
```

State what should happen after the first successful run.

## Configuration

### Environment Variables

| Variable | Required | Default | Description |
| --- | --- | --- | --- |
| `{{ENV_VAR_1}}` | `yes` | `{{DEFAULT}}` | `{{DESCRIPTION}}` |
| `{{ENV_VAR_2}}` | `no` | `{{DEFAULT}}` | `{{DESCRIPTION}}` |

### Project Configuration

Document any config files the project relies on.

| File | Purpose |
| --- | --- |
| `{{CONFIG_FILE_1}}` | `{{PURPOSE}}` |
| `{{CONFIG_FILE_2}}` | `{{PURPOSE}}` |

## Common Workflows

Use this section to document the commands contributors run most often.

| Goal | Example Command | Notes |
| --- | --- | --- |
| Start development server | `{{DEV_COMMAND}}` | `{{NOTES}}` |
| Run tests | `{{TEST_COMMAND}}` | `{{NOTES}}` |
| Lint code | `{{LINT_COMMAND}}` | `{{NOTES}}` |
| Format code | `{{FORMAT_COMMAND}}` | `{{NOTES}}` |
| Build project | `{{BUILD_COMMAND}}` | `{{NOTES}}` |
| Release project | `{{RELEASE_COMMAND}}` | `{{NOTES}}` |

## Usage Examples

### Example 1

Describe the input, command, or user action:

```bash
{{USAGE_EXAMPLE_1}}
```

Expected result:

```text
{{EXPECTED_OUTPUT_1}}
```

### Example 2

```bash
{{USAGE_EXAMPLE_2}}
```

## Architecture Notes

Summarize the system in plain language before going deep.

### Key Components

- `{{COMPONENT_1}}`: `{{RESPONSIBILITY}}`
- `{{COMPONENT_2}}`: `{{RESPONSIBILITY}}`
- `{{COMPONENT_3}}`: `{{RESPONSIBILITY}}`

### Data Flow

```text
{{INPUT}} -> {{PROCESSING}} -> {{OUTPUT}}
```

### Important Decisions

- `{{DECISION_1}}`
- `{{DECISION_2}}`

## Testing Strategy

- Unit tests: `{{UNIT_TEST_APPROACH}}`
- Integration tests: `{{INTEGRATION_TEST_APPROACH}}`
- End-to-end tests: `{{E2E_TEST_APPROACH}}`

If there are gaps, state them clearly.

## Deployment

### Environments

| Environment | URL | Purpose |
| --- | --- | --- |
| Local | `{{LOCAL_URL}}` | `{{PURPOSE}}` |
| Staging | `{{STAGING_URL}}` | `{{PURPOSE}}` |
| Production | `{{PRODUCTION_URL}}` | `{{PURPOSE}}` |

### Release Process

1. `{{RELEASE_STEP_1}}`
2. `{{RELEASE_STEP_2}}`
3. `{{RELEASE_STEP_3}}`

## Troubleshooting

### Common Problems

| Problem | Likely Cause | Fix |
| --- | --- | --- |
| `{{PROBLEM_1}}` | `{{CAUSE_1}}` | `{{FIX_1}}` |
| `{{PROBLEM_2}}` | `{{CAUSE_2}}` | `{{FIX_2}}` |

## Contributing

- Point contributors to `README.md`, this document, and any contribution rules.
- Explain branch naming, review expectations, and local validation steps.
- Link related GitHub templates or project standards.

## Roadmap

- `{{ROADMAP_ITEM_1}}`
- `{{ROADMAP_ITEM_2}}`
- `{{ROADMAP_ITEM_3}}`

## FAQ

### Is this template language-specific?

No. Keep only the sections and command blocks that match the project.

### Can this work for monorepos?

Yes. Add a workspace or package map in the repository structure and workflows sections.

### Can this be generated later by automation?

Yes. The placeholder-driven format is intended to be compatible with future CLI generation.