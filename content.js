/**
 * ============================================================
 *  EDIT THIS FILE ONLY
 *  Change the text between the quotes. Keep the quotes.
 *  Do not delete commas , or curly braces { }
 *  See HOW-TO-UPDATE.md for step-by-step help.
 * ============================================================
 *
 *  IMAGES:
 *  1. Put a .png, .jpg, or .svg file in the "images" folder
 *  2. Set the path like: "images/my-photo.png"
 *  3. Keep the same filename spelling (including .png / .svg)
 * ============================================================
 */

window.SITE = {
  // --- Your name (big title at the top) ---
  name: "Ogundepo Tobi",

  // --- Small line above your name ---
  tagline: "The Portfolio Of",

  // --- Browser tab title ---
  pageTitle: "Ogundepo Tobi",

  // --- Short description for Google / link previews ---
  pageDescription: "Protein engineering, Molecular biology",

  // --- Blue bar at the very top (set enabled to false to hide it) ---
  banner: {
    enabled: true,
    text: "Open to new opportunities — say hello.",
    url: "mailto:ogundepotobi@gmail.com",
  },

  // --- Links in the top-right corner ---
  nav: [
    { label: "Email", url: "mailto:ogundepotobi@gmail.com" },
    { label: "LinkedIn", url: "https://www.linkedin.com/" },
    { label: "X", url: "https://x.com/" },
  ],

  // --- Featured projects ---
  // Each project gets a homepage card AND its own page.
  // id = the page address (no spaces). Example page: project.html?id=research
  projects: [
    {
      id: "research",
      title: "Research",
      description: "Protein engineering and molecular biology work.",
      image: "images/research.svg",

      summary: "A space for research notes, findings, and ongoing scientific work.",
      body: [
        "Replace this paragraph with a short overview of your research focus.",
        "Add what questions you are exploring, methods you use, or recent results.",
        "You can also link out to papers, posters, or collaborators below.",
      ],
      gallery: [
        "images/research.svg",
        "images/research-detail.svg",
      ],
      externalLink: {
        label: "View related link",
        url: "",
      },
    },
    {
      id: "notes",
      title: "Notes",
      description: "Technical notes and ideas I’m working through.",
      image: "images/notes.svg",

      summary: "Working notes on science, tools, and problem-solving.",
      body: [
        "Use this page for short write-ups, lab notes, or explanations you want to keep.",
        "Replace these paragraphs with your own notes over time.",
        "Keep each note clear enough that future-you can understand it quickly.",
      ],
      gallery: [
        "images/notes.svg",
        "images/notes-detail.svg",
      ],
      externalLink: {
        label: "View related link",
        url: "",
      },
    },
    {
      id: "projects",
      title: "Projects",
      description: "Ongoing and completed projects outside day-to-day research.",
      image: "images/projects.svg",

      summary: "Selected projects spanning science, building, and exploration.",
      body: [
        "Describe one project at a time: the goal, what you built or tested, and what you learned.",
        "Add images in the gallery section below to show process or results.",
        "Update this page whenever a project moves forward.",
      ],
      gallery: [
        "images/projects.svg",
        "images/projects-detail.svg",
      ],
      externalLink: {
        label: "View related link",
        url: "",
      },
    },
    {
      id: "reading",
      title: "Reading",
      description: "Books, papers, and ideas worth keeping.",
      image: "images/reading.svg",

      summary: "A living list of reading and reflections.",
      body: [
        "Share books or papers that shaped your thinking.",
        "Add a short note on why each one mattered.",
        "This page can stay informal — useful for you, interesting for visitors.",
      ],
      gallery: [
        "images/reading.svg",
        "images/reading-detail.svg",
      ],
      externalLink: {
        label: "View related link",
        url: "",
      },
    },
  ],

  // --- Simple list of links (writing, talks, press, etc.) ---
  // Tip: to point at a project page, use: "project.html?id=research"
  linksSectionTitle: "Selected Work",
  links: [
    { label: "Research", url: "project.html?id=research" },
    { label: "Notes", url: "project.html?id=notes" },
    { label: "Projects", url: "project.html?id=projects" },
    { label: "Reading", url: "project.html?id=reading" },
  ],

  // --- About section ---
  aboutTitle: "About Tobi",
  // Each item is one paragraph. You can use <a href="URL">link text</a> for links.
  about: [
    "A personal space for research, projects, notes, and ideas.",
    "I use this site to document my work in science, explore ideas beyond my immediate research, and share what I’m learning along the way.",
    "It brings together my research, ongoing projects, technical notes, reading, and reflections on science and problem-solving.",
    "A living record of what I’m working on, learning, and thinking about.",
  ],

  // --- Contact line under About ---
  contact: {
    label: "Get in touch",
    email: "ogundepotobi@gmail.com",
  },
};
