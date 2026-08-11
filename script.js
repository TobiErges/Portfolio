(function () {
  const site = window.SITE;
  if (!site) return;

  const page = document.body.getAttribute("data-page") || "home";

  function el(tag, className, html) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (html != null) node.innerHTML = html;
    return node;
  }

  function text(tag, className, value) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    node.textContent = value;
    return node;
  }

  function projectHref(project) {
    return "project.html?id=" + encodeURIComponent(project.id);
  }

  function getProjectIdFromUrl() {
    const params = new URLSearchParams(window.location.search);
    const fromQuery = params.get("id");
    if (fromQuery) return fromQuery;

    const parts = window.location.pathname.split("/").filter(Boolean);
    const projectIndex = parts.indexOf("project");
    if (projectIndex !== -1 && parts[projectIndex + 1]) {
      return decodeURIComponent(parts[projectIndex + 1]);
    }
    return "";
  }

  function renderBanner() {
    const bannerRoot = document.getElementById("banner");
    if (!bannerRoot) return;
    if (!(site.banner && site.banner.enabled && site.banner.text)) return;

    const banner = document.createElement("a");
    banner.className = "announcement-banner";
    banner.href = site.banner.url || "#";
    if (site.banner.url && site.banner.url.startsWith("http")) {
      banner.target = "_blank";
      banner.rel = "noopener noreferrer";
    }
    banner.textContent = site.banner.text;
    bannerRoot.appendChild(banner);
  }

  function renderNav(extraItems) {
    const nav = document.getElementById("nav");
    if (!nav) return;

    const items = (extraItems || []).concat(site.nav || []);
    items.forEach(function (item) {
      const a = document.createElement("a");
      a.className = "navbar-link";
      a.href = item.url;
      a.textContent = item.label;
      if (item.url.startsWith("http")) {
        a.target = "_blank";
        a.rel = "noopener noreferrer";
      }
      nav.appendChild(a);
    });
  }

  function renderHome() {
    document.title = site.pageTitle || site.name;

    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", site.pageDescription || "");

    renderBanner();
    renderNav();

    document.getElementById("tagline").textContent = site.tagline || "";
    document.getElementById("name").textContent = site.name || "";

    const projectsRoot = document.getElementById("projects");
    (site.projects || []).forEach(function (project) {
      const card = document.createElement("a");
      card.className = "project-card";
      card.href = project.id ? projectHref(project) : "#";

      const media = el("div", "project-card-media");
      if (project.image) {
        const img = document.createElement("img");
        img.src = project.image;
        img.alt = project.title || "";
        media.appendChild(img);
      } else {
        media.appendChild(el("div", "project-card-placeholder"));
      }

      card.appendChild(media);
      card.appendChild(text("div", "project-card-title", project.title || ""));
      card.appendChild(text("div", "project-card-desc", project.description || ""));
      projectsRoot.appendChild(card);
    });

    document.getElementById("links-title").textContent =
      site.linksSectionTitle || "Selected Work";
    const linksRoot = document.getElementById("links");
    (site.links || []).forEach(function (item) {
      const row = el("div", "link-item");
      const a = document.createElement("a");
      a.className = "link-text";
      a.href = item.url || "#";
      a.textContent = item.label || "";
      if (item.url && item.url.startsWith("http")) {
        a.target = "_blank";
        a.rel = "noopener noreferrer";
      }
      row.appendChild(a);
      linksRoot.appendChild(row);
    });

    document.getElementById("about-title").textContent =
      site.aboutTitle || "About";
    const aboutRoot = document.getElementById("about");
    (site.about || []).forEach(function (paragraph) {
      aboutRoot.appendChild(el("p", null, paragraph));
    });

    const contactRoot = document.getElementById("contact");
    if (site.contact && site.contact.email) {
      const label = text("span", "contact-label", site.contact.label || "Email");
      const mail = document.createElement("a");
      mail.href = "mailto:" + site.contact.email;
      mail.textContent = site.contact.email;
      contactRoot.appendChild(label);
      contactRoot.appendChild(document.createTextNode(" "));
      contactRoot.appendChild(mail);
    }

    initHeaderCanvas();
  }

  function renderProject() {
    renderBanner();
    renderNav([{ label: "Home", url: "index.html" }]);

    document.getElementById("tagline").textContent = site.tagline || "";
    const nameEl = document.getElementById("name");
    nameEl.textContent = site.name || "";

    const id = getProjectIdFromUrl();
    const project = (site.projects || []).find(function (item) {
      return item.id === id;
    });

    const missing = document.getElementById("project-missing");
    const article = document.getElementById("project-article");

    if (!project) {
      missing.hidden = false;
      document.title = "Project not found";
      return;
    }

    article.hidden = false;
    document.title = (project.title || "Project") + " · " + (site.name || "");

    const desc = document.querySelector('meta[name="description"]');
    if (desc) {
      desc.setAttribute(
        "content",
        project.summary || project.description || site.pageDescription || ""
      );
    }

    document.getElementById("project-kicker").textContent = "Project";
    document.getElementById("project-title").textContent = project.title || "";
    document.getElementById("project-summary").textContent =
      project.summary || project.description || "";

    const hero = document.getElementById("project-hero");
    const heroImg = document.getElementById("project-hero-img");
    const heroSrc = project.heroImage || project.image;
    if (heroSrc) {
      hero.hidden = false;
      heroImg.src = heroSrc;
      heroImg.alt = project.title || "";
    }

    const bodyRoot = document.getElementById("project-body");
    (project.body || []).forEach(function (paragraph) {
      bodyRoot.appendChild(el("p", null, paragraph));
    });

    const galleryRoot = document.getElementById("project-gallery");
    (project.gallery || []).forEach(function (src, index) {
      if (!src) return;
      const figure = el("figure", "project-gallery-item");
      const img = document.createElement("img");
      img.src = src;
      img.alt = (project.title || "Project") + " image " + (index + 1);
      figure.appendChild(img);
      galleryRoot.appendChild(figure);
    });

    const externalRoot = document.getElementById("project-external");
    if (
      project.externalLink &&
      project.externalLink.url &&
      project.externalLink.label
    ) {
      externalRoot.hidden = false;
      const a = document.createElement("a");
      a.href = project.externalLink.url;
      a.textContent = project.externalLink.label;
      if (project.externalLink.url.startsWith("http")) {
        a.target = "_blank";
        a.rel = "noopener noreferrer";
      }
      externalRoot.appendChild(a);
    }
  }

  if (page === "project") {
    renderProject();
  } else {
    renderHome();
  }
})();

function initHeaderCanvas() {
  const canvas = document.getElementById("header-canvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let width = 0;
  let height = 0;
  let dots = [];
  let raf = 0;
  let last = 0;

  function resize() {
    const rect = canvas.parentElement.getBoundingClientRect();
    width = Math.max(320, Math.floor(rect.width));
    height = Math.max(220, Math.floor(rect.height));
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const count = Math.floor((width * height) / 14000);
    dots = [];
    for (let i = 0; i < count; i++) {
      dots.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: 0.6 + Math.random() * 1.4,
        vx: (Math.random() - 0.5) * 0.18,
        vy: (Math.random() - 0.5) * 0.18,
        a: 0.12 + Math.random() * 0.22,
      });
    }
  }

  function draw(ts) {
    if (!last) last = ts;
    const dt = Math.min(32, ts - last);
    last = ts;

    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, width, height);

    for (let i = 0; i < dots.length; i++) {
      const d = dots[i];
      d.x += d.vx * (dt / 16);
      d.y += d.vy * (dt / 16);
      if (d.x < -4) d.x = width + 4;
      if (d.x > width + 4) d.x = -4;
      if (d.y < -4) d.y = height + 4;
      if (d.y > height + 4) d.y = -4;

      ctx.beginPath();
      ctx.fillStyle = "rgba(70, 120, 160," + d.a + ")";
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fill();
    }

    raf = requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener("resize", resize);
  raf = requestAnimationFrame(draw);

  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      cancelAnimationFrame(raf);
      last = 0;
    } else {
      raf = requestAnimationFrame(draw);
    }
  });
}
