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

One-time setup: in the repo, go to **Settings > Pages** and set **Source** to **GitHub Actions**.

**Live site.** The site is built for `https://www.sarahpalu.com/` (domain root). Before go-live it was previewed at `erdemtutal.github.io/sarahpalu` using `BASE_PATH` and `SITE_URL` env variables in the workflow; all internal links still go through `src/lib/url.ts`, so a preview under a base path can be done again if needed.

**Domain.** Custom domain `www.sarahpalu.com` is set in Settings > Pages (`public/CNAME` records it too). DNS: four `A` records for the bare domain (`185.199.108.153`, `.109.153`, `.110.153`, `.111.153`) and a `CNAME` for `www` pointing to `erdemtutal.github.io`. Keep the Google MX records (email).

Pull requests run `.github/workflows/check.yml`, which just makes sure the site builds.
