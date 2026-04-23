# Contributing to Coderooz Docs Template

Thank you for your interest in contributing! This document outlines the process for contributing to this project.

## Ways to Contribute

- **Reporting bugs** - Use GitHub Issues with the bug report template
- **Suggesting features** - Open a GitHub Issue with the feature request template
- **Improving documentation** - Submit PRs to update docs
- **Writing code** - Pick up issues tagged as `good first issue`

## Getting Started

1. Fork the repository
2. Clone your fork locally
3. Create a feature branch: `git checkout -b feature/your-feature-name`

## Development Setup

```bash
# Install dependencies
npm install

# Start local development
npm start
```

## Making Changes

1. Make your changes in your feature branch
2. Test locally with `npm test`
3. Run linting with `npm run lint`
4. Commit using conventional commits (see below)
5. Push to your fork and create a Pull Request

## Commit Message Format

We follow [Conventional Commits](https://conventionalcommits.org):

```
<type>(<scope>): <subject>

[optional body]

[optional footer]
```

### Types

- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation changes
- `style` - Code style (formatting, no logic change)
- `refactor` - Code refactoring
- `test` - Adding or updating tests
- `chore` - Maintenance tasks

### Examples

```
feat(docs): add installation section
fix(api): handle missing response gracefully
docs: update README with new examples
```

## Pull Request Process

1. Update documentation if needed
2. Ensure all checks pass
3. Update CHANGELOG.md if adding/changing features
4. Request review from maintainers

## Code Review Guidelines

- Be respectful and constructive
- Explain why rather than just what
- Suggest improvements instead of just stating issues

## Questions?

- Open a GitHub Discussion for questions
- Use issues for bug reports and feature requests