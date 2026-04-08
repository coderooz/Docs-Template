const docsTemplate = window.DOCS_TEMPLATE || { site: {}, sections: [] };
const { site, sections } = docsTemplate;

const heroEl = document.getElementById("hero");
const navEl = document.getElementById("section-nav");
const linkListEl = document.getElementById("link-list");
const contentEl = document.getElementById("content");
const footerEl = document.getElementById("footer");
const topbarActionsEl = document.getElementById("topbar-actions");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function updateMeta() {
  document.title = site.name ? `${site.name} Docs` : "Project Docs Template";

  const description = document.querySelector('meta[name="description"]');
  if (description && site.description) {
    description.setAttribute("content", site.description);
  }

  const brandName = document.getElementById("brand-name");
  const brandLabel = document.getElementById("brand-label");

  brandName.textContent = site.name || "Docs Template";
  brandLabel.textContent = site.label || "Reusable project docs";
}

function renderTopbarActions() {
  const actions = [site.secondaryCta, site.primaryCta].filter(Boolean);

  topbarActionsEl.innerHTML = actions
    .map((action, index) => {
      const className = index === actions.length - 1 ? "button button-solid" : "button button-ghost";
      return `<a class="${className}" href="${escapeHtml(action.href)}">${escapeHtml(action.label)}</a>`;
    })
    .join("");
}

function renderHero() {
  const stats = (site.stats || [])
    .map(
      stat => `
        <div class="stat">
          <span>${escapeHtml(stat.label)}</span>
          <strong>${escapeHtml(stat.value)}</strong>
        </div>
      `
    )
    .join("");

  const quickFacts = (site.quickFacts || [])
    .map(
      item => `
        <div class="fact-row">
          <span>${escapeHtml(item.label)}</span>
          <strong>${escapeHtml(item.value)}</strong>
        </div>
      `
    )
    .join("");

  heroEl.innerHTML = `
    <div class="hero-copy">
      <p class="eyebrow">${escapeHtml(site.label || "Reusable docs")}</p>
      <h1>${escapeHtml(site.name || "Project Docs Template")}</h1>
      <p class="hero-tagline">${escapeHtml(site.tagline || "")}</p>
      <p class="hero-description">${escapeHtml(site.description || "")}</p>
      <div class="hero-actions">
        ${site.primaryCta ? `<a class="button button-solid" href="${escapeHtml(site.primaryCta.href)}">${escapeHtml(site.primaryCta.label)}</a>` : ""}
        ${site.secondaryCta ? `<a class="button button-ghost" href="${escapeHtml(site.secondaryCta.href)}">${escapeHtml(site.secondaryCta.label)}</a>` : ""}
      </div>
      <div class="stats-grid">${stats}</div>
    </div>
    <div class="hero-panel">
      <p class="panel-label">Project facts</p>
      <div class="fact-list">${quickFacts}</div>
    </div>
  `;
}

function renderNav() {
  navEl.innerHTML = sections
    .map(
      section => `
        <a class="nav-link" href="#section-${escapeHtml(section.id)}">
          <span>${escapeHtml(section.eyebrow || "Section")}</span>
          <strong>${escapeHtml(section.title)}</strong>
        </a>
      `
    )
    .join("");
}

function renderLinkList() {
  linkListEl.innerHTML = (site.externalLinks || [])
    .map(
      link => `
        <a class="external-link" href="${escapeHtml(link.href)}" target="_blank" rel="noreferrer">
          <span>${escapeHtml(link.label)}</span>
          <strong>Open</strong>
        </a>
      `
    )
    .join("");
}

function renderBlock(block) {
  if (block.type === "paragraph") {
    return `<p class="body-copy">${escapeHtml(block.text)}</p>`;
  }

  if (block.type === "list") {
    const items = (block.items || []).map(item => `<li>${escapeHtml(item)}</li>`).join("");
    return `
      ${block.title ? `<h3 class="block-title">${escapeHtml(block.title)}</h3>` : ""}
      <ul class="content-list">${items}</ul>
    `;
  }

  if (block.type === "steps") {
    const items = (block.items || []).map(item => `<li>${escapeHtml(item)}</li>`).join("");
    return `<ol class="step-list">${items}</ol>`;
  }

  if (block.type === "code") {
    return `
      <div class="code-block">
        <div class="code-header">
          <span>${escapeHtml(block.title || block.language || "Snippet")}</span>
          <button class="copy-button" type="button" data-copy="${escapeHtml(block.code || "")}">Copy</button>
        </div>
        <pre><code>${escapeHtml(block.code || "")}</code></pre>
      </div>
    `;
  }

  if (block.type === "table") {
    const header = (block.columns || []).map(column => `<th>${escapeHtml(column)}</th>`).join("");
    const rows = (block.rows || [])
      .map(
        row => `
          <tr>
            ${row.map(cell => `<td>${escapeHtml(cell)}</td>`).join("")}
          </tr>
        `
      )
      .join("");

    return `
      <div class="table-wrap">
        <table>
          <thead>
            <tr>${header}</tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    `;
  }

  if (block.type === "callout") {
    return `
      <div class="callout callout-${escapeHtml(block.tone || "info")}">
        ${block.title ? `<strong>${escapeHtml(block.title)}</strong>` : ""}
        <p>${escapeHtml(block.text || "")}</p>
      </div>
    `;
  }

  return "";
}

function renderSections() {
  contentEl.innerHTML = sections
    .map(
      section => `
        <section class="doc-section" id="section-${escapeHtml(section.id)}">
          <div class="section-header">
            <p class="eyebrow">${escapeHtml(section.eyebrow || "Section")}</p>
            <div class="section-title-row">
              <h2>${escapeHtml(section.title)}</h2>
              <a class="anchor-link" href="#section-${escapeHtml(section.id)}" aria-label="Link to ${escapeHtml(section.title)}">#</a>
            </div>
            ${section.summary ? `<p class="section-summary">${escapeHtml(section.summary)}</p>` : ""}
          </div>
          <div class="section-body">
            ${(section.blocks || []).map(renderBlock).join("")}
          </div>
        </section>
      `
    )
    .join("");
}

function renderFooter() {
  const footerLinks = (site.footerLinks || [])
    .map(link => `<a href="${escapeHtml(link.href)}">${escapeHtml(link.label)}</a>`)
    .join("");

  footerEl.innerHTML = `
    <div>
      <strong>${escapeHtml(site.name || "Project Docs Template")}</strong>
      <p>Owned by ${escapeHtml(site.owner || "Your Team")} - Version ${escapeHtml(site.version || "0.1.0")} - Updated ${escapeHtml(site.lastUpdated || "TBD")}</p>
    </div>
    <div class="footer-links">${footerLinks}</div>
  `;
}

function bindCopyButtons() {
  document.querySelectorAll(".copy-button").forEach(button => {
    button.addEventListener("click", async () => {
      const original = button.textContent;

      try {
        await navigator.clipboard.writeText(button.dataset.copy || "");
        button.textContent = "Copied";
      } catch {
        button.textContent = "Failed";
      }

      window.setTimeout(() => {
        button.textContent = original;
      }, 1200);
    });
  });
}

function bindActiveNav() {
  const navLinks = Array.from(document.querySelectorAll(".nav-link"));
  const sectionsEls = Array.from(document.querySelectorAll(".doc-section"));

  if (!navLinks.length || !sectionsEls.length) {
    return;
  }

  const observer = new IntersectionObserver(
    entries => {
      const visible = entries
        .filter(entry => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (!visible) {
        return;
      }

      navLinks.forEach(link => link.classList.remove("is-active"));
      const active = navLinks.find(link => link.getAttribute("href") === `#${visible.target.id}`);
      if (active) {
        active.classList.add("is-active");
      }
    },
    {
      rootMargin: "-20% 0px -60% 0px",
      threshold: [0.15, 0.35, 0.55]
    }
  );

  sectionsEls.forEach(section => observer.observe(section));
}

function render() {
  updateMeta();
  renderTopbarActions();
  renderHero();
  renderNav();
  renderLinkList();
  renderSections();
  renderFooter();
  bindCopyButtons();
  bindActiveNav();
}

render();
