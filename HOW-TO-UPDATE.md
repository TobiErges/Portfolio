# HOW TO UPDATE

**You almost never need to touch code.**

Only use these two things:
1. **`content.js`** — all text and links
2. **`images` folder** — all pictures

Do not edit `index.html`, `project.html`, `styles.css`, or `script.js`.

---

## Quick start

1. Open the website folder on your computer.
2. Open `content.js` with **Notepad** (Windows) or **TextEdit** (Mac).
3. Change text **only between the quote marks**: `"like this"`.
4. Save the file.
5. Open `index.html` in your browser to check.
6. Click a project card to check its project page.

---

## Part 1 — Change pictures

### Replace a project picture
1. Find the old file in the `images` folder  
   (example: `product-redesign.svg`).
2. Add your new picture to the `images` folder.
3. Either:
   - **Easiest:** keep the same filename as the old one, or
   - Use a new filename, then update the matching path in `content.js`.

Allowed file types: `.png`, `.jpg`, `.jpeg`, `.svg`, `.webp`

### Tell the website which picture to use
In `content.js`, paths look like this:

```js
image: "images/product-redesign.svg",
```

That means: “use the file named `product-redesign.svg` inside the `images` folder.”

The spelling must match exactly, including the ending (`.png` / `.svg`).

### Which image field does what?

For each project:

- `image` = picture on the **homepage card**
- `gallery` = pictures on the **project page**

Example:

```js
image: "images/product-redesign.svg",

gallery: [
  "images/product-redesign.svg",
  "images/product-redesign-detail.svg",
],
```

- To add a gallery image: copy one line, paste it, change the filename.
- To remove a gallery image: delete that whole line.

---

## Part 2 — Update a project (card + its page)

Each project lives in one block inside `projects: [ ... ]`.

### What each field means

| Field | What you change |
|--------|------------------|
| `id` | The project page address. **No spaces.** Example: `product-redesign` |
| `title` | Project name on the card and page |
| `description` | Short line under the card title |
| `image` | Card picture |
| `summary` | Short intro at the top of the project page |
| `body` | Main paragraphs on the project page |
| `gallery` | Extra pictures on the project page |
| `externalLink` | Optional “View live project” button |

### Change the project page story
Edit text inside `body`:

```js
body: [
  "Write the first paragraph here.",
  "Write the second paragraph here.",
  "Write the third paragraph here.",
],
```

Add another paragraph by copying a line.  
Remove a paragraph by deleting a line.

### Open a project page
Homepage cards open pages like:

`project.html?id=product-redesign`

The part after `id=` must match the project’s `id`.

### Add a brand-new project
1. Copy one full project block, from `{` to `},`
2. Paste it under the other projects
3. Change:
   - `id` (new, no spaces)
   - `title`
   - `description`
   - `summary`
   - `body` paragraphs
   - `image` and `gallery` paths
4. Save and preview

### Optional live-project button
Hide it (recommended until you have a link):

```js
externalLink: {
  label: "View live project",
  url: "",
},
```

Show it:

```js
externalLink: {
  label: "View live project",
  url: "https://your-website.com",
},
```

---

## Part 3 — Update the homepage

### Your name
```js
name: "Alex Rivera",
```

### Line above your name
```js
tagline: "The Portfolio Of",
```

### Top blue banner
```js
banner: {
  enabled: true,
  text: "Open to new opportunities — say hello.",
  url: "mailto:alex@example.com",
},
```

- Hide banner: set `enabled: false`
- Change the words in `text`
- Change where it goes in `url`

### Top-right links (Email, LinkedIn, X)
Edit items inside `nav: [ ... ]`.

### “Selected Work” links
Edit items inside `links: [ ... ]`.

To link to a project page:

```js
{ label: "Product Redesign", url: "project.html?id=product-redesign" },
```

### About section
Edit paragraphs inside `about: [ ... ]`.

### Contact email
```js
contact: {
  label: "Get in touch",
  email: "you@email.com",
},
```

---

## Rules (read these)

1. Only change text **inside** quote marks `" "`.
2. Keep commas `,` at the ends of lines.
3. Do not delete `{ }` or `[ ]`.
4. Never put spaces in an `id` (use `my-project`, not `my project`).
5. Image paths must match real filenames in `images`.
6. Do not use fancy Word quotes like `“ ”`. Use straight quotes `"`.
7. Save → refresh the browser → check.

---

## If something breaks

1. Press **Ctrl+Z** (Windows) or **Cmd+Z** (Mac) to undo.
2. Save again and refresh.
3. Check for missing quotes or commas.
4. Check image filenames carefully.
5. Compare with a backup copy if needed.

---

## Put updates online (Vercel)

If this site is connected to GitHub + Vercel:

1. Change `content.js` and/or files in `images`
2. Commit and push the changes
3. Wait 1–2 minutes — Vercel updates the live site

If someone else handles publishing for you, send them:
- the updated `content.js`
- any new/changed files from the `images` folder
