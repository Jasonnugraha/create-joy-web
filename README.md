# CreateJoy Website

CreateJoy's static company and community website. It uses plain HTML, CSS, and JavaScript; there is no build step or dependency installation.

## Preview locally

Open `index.html` in a browser. Keep the relative paths and folder structure intact so the styles, scripts, and images load correctly.

## Project files

- `index.html` contains the page content and section structure.
- `styles.css` contains the visual styles and responsive layouts.
- `script.js` contains navigation, carousel, and scroll reveal behavior.
- `assets/` contains the logo, optimized WebP photos, and archived unused media.

## Publish

Publish the project root with a static hosting provider. No server-side runtime is required. Before publishing, confirm the production domain and hosting provider settings, then make sure the site loads over HTTPS and the asset paths remain case-sensitive and relative to `index.html`.

## Google Search

After the production site is live, verify `createjoy.agency` in Google Search Console, submit `https://createjoy.agency/sitemap.xml`, and request indexing for the home page in URL Inspection. Google decides when and whether to index a page; these steps help it discover the site but do not guarantee timing or rankings.
