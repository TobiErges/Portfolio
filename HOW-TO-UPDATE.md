# How to update this website (no coding needed)

You only need to edit **one file**: `content.js`

Everything else (`index.html`, `styles.css`, `script.js`) can stay untouched.

---

## Before you start

1. Open the project folder on your computer.
2. Open `content.js` in **Notepad** (Windows) or **TextEdit** (Mac).
3. Change only the words **between the quote marks** `"like this"`.
4. Save the file.
5. Double-click `index.html` to preview in your browser.

---

## Common updates

### Change your name
Find:
```js
name: "Alex Rivera",
```
Change to your name. Keep the quotes and the comma.

### Change the top blue banner
```js
banner: {
  enabled: true,
  text: "Open to new opportunities — say hello.",
  url: "mailto:alex@example.com",
},
```
- Set `enabled: false` to hide the banner.
- Change `text` for the message.
- Change `url` to your email (`mailto:you@email.com`) or a webpage.

### Change top-right links (Email, LinkedIn, X)
Inside `nav: [ ... ]`, edit the `label` and `url` for each item.
To remove a link, delete its whole `{ ... },` block.
To add a link, copy an existing block and paste it.

### Update featured project cards
Inside `projects: [ ... ]`:
- `title` = card heading
- `description` = short sentence under the title
- `url` = where the card goes when clicked
- `image` = optional picture path, example: `"images/project1.png"`

If you leave `image: ""`, a soft placeholder shows instead.

**To add a photo:**
1. Put the image file in the `images` folder.
2. Set `image: "images/your-filename.png"`

### Update the list of links
Inside `links: [ ... ]`, change `label` and `url`.

### Update the About section
Inside `about: [ ... ]`, each quoted paragraph is one block of text.

To add a clickable link inside a paragraph:
```js
'I worked at <a href="https://example.com" target="_blank" rel="noopener">Acme</a>.'
```

### Change contact email
```js
contact: {
  label: "Get in touch",
  email: "alex@example.com",
},
```

---

## Important rules (so the site doesn’t break)

1. Keep the quote marks `" "` around text.
2. Keep commas `,` after each item.
3. Don’t delete `{ }` or `[ ]`.
4. If you paste from Word/Google Docs, watch for fancy quotes like `“ ”` — replace them with straight quotes `"`.
5. After saving, refresh the browser (or reopen `index.html`).

---

## If something looks broken

1. Undo your last edit (Ctrl+Z / Cmd+Z) and save again.
2. Check that every changed line still has quotes and a comma at the end.
3. Ask a friend to compare your file with a backup copy.

---

## Publishing the site online

Ask whoever set this up for you. Common free options:
- [Netlify Drop](https://app.netlify.com/drop) — drag the whole folder onto the page
- GitHub Pages — if the project is already on GitHub

After publishing, future updates usually mean: edit `content.js`, then upload/replace that file (or push to GitHub).
