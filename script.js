(function () {
  const site = window.SITE;
  if (!site) return;

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

  document.title = site.pageTitle || site.name;

  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute("content", site.pageDescription || "");

  // Banner
  const bannerRoot = document.getElementById("banner");
  if (site.banner && site.banner.enabled && site.banner.text) {
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

  // Nav
  const nav = document.getElementById("nav");
  (site.nav || []).forEach(function (item) {
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

  // Header name
  document.getElementById("tagline").textContent = site.tagline || "";
  document.getElementById("name").textContent = site.name || "";

  // Projects
  const projectsRoot = document.getElementById("projects");
  (site.projects || []).forEach(function (project) {
    const card = document.createElement("a");
    card.className = "project-card";
    card.href = project.url || "#";
    if (project.url && project.url.startsWith("http")) {
      card.target = "_blank";
      card.rel = "noopener noreferrer";
    }

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

  // Links list
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

  // About
  document.getElementById("about-title").textContent =
    site.aboutTitle || "About";
  const aboutRoot = document.getElementById("about");
  (site.about || []).forEach(function (paragraph) {
    aboutRoot.appendChild(el("p", null, paragraph));
  });

  // Contact
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
