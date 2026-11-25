# sarahpalu.com

Static website for Sarah Palu, built with [Astro](https://astro.build). It replaces the old Weebly site and keeps the same page URLs (`/bio.html`, `/music--store.html`, ...).

## Commands

```sh
npm install
npm run dev      # local preview at http://localhost:4321
npm run build    # writes the site to dist/
```

## Where things are

| What | Where |
|---|---|
| Pages | `src/pages/*.astro` |
| Header, footer, page shell | `src/layouts/Base.astro` |
| Colours, fonts, layout | `src/styles/global.css` |
| Calendar events | `src/data/calendar.json` (add `{ "date": "YYYY-MM-DD", "html": "..." }`; the page sorts them into upcoming and past when it is built) |
| Gallery photos | `src/data/gallery.json` |
| Images | `public/images/` |

## Notes

- Photos are the resized copies from the old Weebly site. Replace the files in `public/images/` (same file names) with the originals when available.
- The calendar decides "upcoming" vs "past" at build time, so the site should be rebuilt daily (Cloudflare Pages deploy hook plus a scheduled trigger) or whenever an event is added.
- Fonts are self-hosted via `@fontsource`. The old site's custom heading font ("Birdseye") was not copied; Nunito Sans is the stand-in for body text.
- Blog and store are not built yet. Ikivirta links to Bandcamp.

## Deploying (Cloudflare Pages)

Connect this repo, framework preset **Astro**, build command `npm run build`, output directory `dist`.
