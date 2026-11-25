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

## Deploying (GitHub Pages)

The site deploys with `.github/workflows/deploy.yml` on every push to `main`, and every morning (so the calendar stays current).

One-time setup:
1. In the repo, go to **Settings > Pages** and set **Source** to **GitHub Actions**.
2. Merge to `main`. The first deploy appears at `https://erdemtutal.github.io/sarahpalu/` (links and images will look broken there, because the site expects to live at the domain root; that is normal until the domain is connected).
3. When ready to go live, follow the domain steps in the migration plan (`www.sarahpalu.com` is set in `public/CNAME`). Then tick **Enforce HTTPS** in Settings > Pages.

Pull requests run `.github/workflows/check.yml`, which just makes sure the site builds.
