# DOICT-IndSoc 2027 — Website V6

Static GitHub Pages website for IEEE INFOCOM 2027 DOICT-IndSoc Workshop.

## Updates

- **At a Glance** is now a prominent top-nav item and a hero button. Clicking it scrolls to the at-a-glance panel on the homepage.
- The official CFP PDF provided by the organizers is included as `assets/DOICT-IndSoc-2027-Official-CFP.pdf` and has preview + download links on the homepage and CFP page.
- The poster card shows a genuine thumbnail rendered from that PDF. The previous coming-soon placeholder and dynamic file checking have been removed.
- Site typography is updated to **Manrope (headings)** and **Source Sans 3 (body text)** loaded via Google Fonts, with system fallbacks when external fonts are unavailable. No font files are bundled.
- All 2027 text, committee members, dates, 2026 history and countdown behavior are kept from V5.

## Update later

To publish a replacement poster, overwrite `assets/DOICT-IndSoc-2027-Official-CFP.pdf`. For the poster thumbnail preview, also replace `assets/official-cfp-preview.webp` (this can be regenerated from the first PDF page).

## Deploy

Upload **all extracted files and folders** to the root of `https://github.com/indsocws-pixel/doict-indsoc`, replacing files with identical paths. Keep `index.html` at repo root. GitHub Pages should be `main` + `/ (root)`.

Public URL: https://indsocws-pixel.github.io/doict-indsoc/

If there are old, unused files such as `poster.html` or `assets/DOICT-IndSoc-2027-CFP.pdf` in the GitHub repository from V4, remove them separately when convenient.


## Committee contact emails

The Organization page and homepage now show clickable `mailto:` contacts for the lead chairs:
- Bo Qian (Lead General Chair): boqian@ieee.org
- Hang Zhou (Lead TPC Chair): zh185571483@gmail.com

The emails are displayed below each affiliation and open the visitor's default email application when clicked.
