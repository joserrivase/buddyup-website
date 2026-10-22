# BuddyUp marketing site

Download-focused homepage for [buddyupapp.co](https://buddyupapp.co). Built with Vite, React, TypeScript, and Tailwind CSS.

## Local development

This project needs Node.js (which includes `npm`). If your terminal says `command not found: npm`, load it first:

```bash
source ~/.zshrc
```

Then from this folder:

```bash
npm install
npm run dev
```

Then open the URL Vite prints (usually `http://localhost:5173`).

```bash
npm run build    # production assets in dist/
npm run preview  # serve the production build locally
```

## GitHub Pages

Pushes to `main` build the site and publish it at [joserrivase.github.io/buddyup-website](https://joserrivase.github.io/buddyup-website/).

`buddyupapp.co` stays on Cloudflare so invite links at `/join/{code}` keep working. Do not point that domain at GitHub Pages.

## Deploy (Cloudflare Pages)

This site is a static build. On Cloudflare Pages:

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Output directory | `dist` |
| Root | this folder |

`buddyupapp.co` currently 500s on `/`. This homepage is meant to replace that root only.

### Do not break invite links

`https://buddyupapp.co/join/{code}` is already forwarded by Cloudflare to the Supabase `invite` function. That function serves its own landing page and opens the app.

When you attach this project to the domain:

- Keep the existing Worker / route for `/join/*`.
- Do **not** add a catch-all SPA rewrite such as `/* /index.html 200`. That would swallow invite links.

This site has no `/join` route. It only needs `/` (and hashed assets under `/assets`).

## Brand

Primary CTA everywhere: Download on the App Store.

- App Store: https://apps.apple.com/us/app/buddyup-accountability-app/id6756550977
- Support: jose@buddyupapp.co
- Instagram: https://www.instagram.com/buddyupapp88/
- TikTok: https://www.tiktok.com/@buddyupapp
- Terms and Privacy: existing Notion pages (linked in the footer)

Always use the name **BuddyUp**, never the internal Xcode name.
