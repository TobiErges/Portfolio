# Portfolio

A simple personal site inspired by [julian.com](https://www.julian.com/).

## For the site owner (non-technical)

**Only edit `content.js`.**  
Step-by-step instructions: [HOW-TO-UPDATE.md](HOW-TO-UPDATE.md)

## Preview locally

Open `index.html` in a browser, or from this folder:

```bash
npx --yes serve .
```

## What’s in this folder

| File | Who edits it |
|------|----------------|
| `content.js` | Site owner — name, bio, projects, links |
| `images/` | Site owner — project photos |
| `index.html`, `styles.css`, `script.js` | Developer only |

## Deploy on Vercel

1. Push this repo to GitHub (if not already).
2. Go to [vercel.com/new](https://vercel.com/new) and import the repo.
3. Leave **Framework Preset** as Other / no build command.
4. Click **Deploy**.

Or from this folder with the Vercel CLI:

```bash
npx vercel
```

For production:

```bash
npx vercel --prod
```

No build step is required — Vercel serves the static files as-is.
