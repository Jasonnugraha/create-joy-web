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

After the production site is live:

1. Open [Google Search Console](https://search.google.com/search-console/) and add `createjoy.agency` as a **Domain property**.
2. Verify domain ownership by adding the DNS TXT record Google provides in the domain registrar. Keep the record in place.
3. In Search Console, open **Sitemaps** and submit `https://createjoy.agency/sitemap.xml`.
4. Use **URL Inspection** for `https://createjoy.agency/` and request indexing after the live deployment is accessible over HTTPS.
5. Check **Page indexing** and **Core Web Vitals** reports periodically for crawl errors and mobile performance issues.

Google decides when and whether to index pages; these steps help discovery but do not guarantee timing or rankings.

## Analytics

The site has optional event hooks on the main calls to action. They send events only if a Google Analytics 4 tag is configured; no visitor data is collected by this project by default.

To enable GA4:

1. Create a GA4 web data stream for `createjoy.agency` and copy its Measurement ID (`G-...`).
2. Add Google's current GA4 tag snippet to the `<head>` in `index.html`, replacing the sample ID with that Measurement ID. Use Google's instructions in [Set up Analytics for a website](https://support.google.com/analytics/answer/9304153).
3. Deploy and confirm events such as `view_opportunities`, `view_ecosystem`, and `contact_whatsapp` in the GA4 Realtime report.
4. Configure a privacy notice and any consent controls appropriate for your audience and analytics setup before enabling tracking.

Do not commit private credentials or a Measurement ID from an unrelated property.

## Mobile and Contact

The layout adapts for phones, includes a keyboard-accessible skip link and mobile menu, and respects reduced-motion settings. The contact section and navigation link open a WhatsApp chat with the number supplied for CreateJoy. Update that link in `index.html` if the contact number changes.

The role descriptions explain example responsibilities and suitability. The activity photos are presented as current community and project imagery; add only verified member stories, project outcomes, or testimonials when those materials are available.
