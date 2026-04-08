window.DOCS_TEMPLATE = {
  site: {
    name: "Project Docs Template",
    shortName: "Docs Template",
    label: "Reusable project docs",
    tagline: "Drop this into a repository, change one config object, and the docs site updates everywhere.",
    description:
      "A static, editable documentation shell for products, libraries, services, CLIs, and mixed-language repositories.",
    owner: "Your Team",
    version: "0.1.0",
    lastUpdated: "2026-04-08",
    repositoryUrl: "https://github.com/your-org/your-project",
    primaryCta: {
      label: "View Repository",
      href: "https://github.com/your-org/your-project"
    },
    secondaryCta: {
      label: "Open Docs Template",
      href: "#section-overview"
    },
    stats: [
      { label: "Stack", value: "Polyglot-ready" },
      { label: "Delivery", value: "Static GitHub docs" },
      { label: "Edit Model", value: "Single config file" }
    ],
    quickFacts: [
      { label: "Best for", value: "Libraries, apps, services, CLIs" },
      { label: "Works with", value: "JS, TS, Python, Go, Rust, Java, PHP, C#" },
      { label: "Current mode", value: "Direct repository download" },
      { label: "Future mode", value: "CLI-generated via codebase-context" }
    ],
    externalLinks: [
      { label: "Repository", href: "https://github.com/your-org/your-project" },
      { label: "Live Docs", href: "https://example.com/docs" },
      { label: "Issue Tracker", href: "https://github.com/your-org/your-project/issues" },
      { label: "Discussions", href: "https://github.com/your-org/your-project/discussions" }
    ],
    footerLinks: [
      { label: "README", href: "../README.md" },
      { label: "Template File", href: "../n.md" },
      { label: "Changelog", href: "../CHANGELOG.md" }
    ]
  },
  sections: [
    {
      id: "overview",
      title: "Overview",
      eyebrow: "Start here",
      summary: "Explain what the project is, who it serves, and why it exists.",
      blocks: [
        {
          type: "paragraph",
          text:
            "This starter is designed to be copied into new repositories and updated by editing a single JavaScript config object. The page layout, links, hero, sidebar, and content sections all render from that config."
        },
        {
          type: "callout",
          tone: "info",
          title: "How to reuse this",
          text:
            "Keep the structure. Replace the site details, external links, and section blocks in docs/site-config.js."
        },
        {
          type: "list",
          title: "Template strengths",
          items: [
            "No build step required",
            "Easy to edit for non-frontend contributors",
            "Works for internal and public repositories",
            "Supports multiple languages and project types"
          ]
        }
      ]
    },
    {
      id: "quickstart",
      title: "Quickstart",
      eyebrow: "Fast setup",
      summary: "The shortest path to adapting this template for another repository.",
      blocks: [
        {
          type: "steps",
          items: [
            "Copy the docs directory into the target project.",
            "Open docs/site-config.js.",
            "Replace site metadata, CTAs, stats, and links.",
            "Rewrite or remove sections that do not apply.",
            "Update robots.txt, sitemap.xml, and site.webmanifest before publishing."
          ]
        },
        {
          type: "code",
          language: "text",
          title: "Primary file to edit",
          code: "docs/site-config.js"
        }
      ]
    },
    {
      id: "editing-model",
      title: "Editing Model",
      eyebrow: "Config driven",
      summary: "Each section is composed of simple blocks so the site stays easy to edit without touching the renderer.",
      blocks: [
        {
          type: "table",
          columns: ["Block type", "Purpose"],
          rows: [
            ["paragraph", "Short descriptive copy"],
            ["list", "Bulleted highlights or requirements"],
            ["steps", "Ordered setup or release flows"],
            ["code", "Commands, snippets, or file paths"],
            ["table", "Structured facts and compatibility grids"],
            ["callout", "Warnings, notes, or guidance"]
          ]
        },
        {
          type: "code",
          language: "js",
          title: "Example section object",
          code:
            "{\n  id: \"deployment\",\n  title: \"Deployment\",\n  eyebrow: \"Operations\",\n  summary: \"Document environments, release flow, and rollback steps.\",\n  blocks: [\n    { type: \"paragraph\", text: \"Deployments run from GitHub Actions.\" },\n    { type: \"steps\", items: [\"Tag release\", \"Review checks\", \"Promote build\"] }\n  ]\n}"
        }
      ]
    },
    {
      id: "structure",
      title: "Suggested Structure",
      eyebrow: "Recommended sections",
      summary: "Use a predictable layout so contributors always know where to find key project information.",
      blocks: [
        {
          type: "list",
          items: [
            "Overview",
            "Quickstart",
            "Installation",
            "Configuration",
            "Common workflows",
            "Architecture",
            "Deployment",
            "Troubleshooting",
            "Contribution rules",
            "External links"
          ]
        },
        {
          type: "callout",
          tone: "warning",
          title: "Do not over-template",
          text:
            "Delete sections that are not useful. A shorter docs site is usually better than a generic one with empty categories."
        }
      ]
    },
    {
      id: "compatibility",
      title: "Compatibility",
      eyebrow: "Multi-project support",
      summary: "The content model is broad enough for libraries, services, CLIs, apps, and monorepos.",
      blocks: [
        {
          type: "table",
          columns: ["Repository type", "Supported"],
          rows: [
            ["Library or package", "Yes"],
            ["CLI tool", "Yes"],
            ["Web app", "Yes"],
            ["Service or API", "Yes"],
            ["Monorepo", "Yes"],
            ["Mixed-language repository", "Yes"]
          ]
        },
        {
          type: "paragraph",
          text:
            "Keep project-specific commands and ownership details inside the config. The renderer stays generic."
        }
      ]
    },
    {
      id: "next-step",
      title: "Next Step",
      eyebrow: "Adoption",
      summary: "What to do after dropping this into a real repository.",
      blocks: [
        {
          type: "steps",
          items: [
            "Replace placeholder URLs and names.",
            "Point footer links to the repository's actual docs files.",
            "Publish the docs directory with GitHub Pages or any static host.",
            "Later, map this config shape to codebase-context CLI output."
          ]
        }
      ]
    }
  ]
};
