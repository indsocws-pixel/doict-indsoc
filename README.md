# DOICT-IndSoc Workshop website — V5

## What this release changes

The generated sample CFP poster from V4 has been **removed**. The site is otherwise unchanged: IEEE INFOCOM 2027 workshop homepage, 2027 CFP, committee, schedule, the 2026 archive, December 29, 2026 submission-date countdown, and mobile-friendly styling remain.

The **At a Glance** panel on the home page and the CFP page now say **Official CFP poster coming soon**, with no broken PDF download.

## When the organizers send the actual PDF

**Do not upload it yet unless the PDF is final and approved for publicity.** When the final PDF arrives:

1. Rename it to exactly `DOICT-IndSoc-2027-Official-CFP.pdf`.
2. Upload it to the GitHub repository at `assets/DOICT-IndSoc-2027-Official-CFP.pdf` (within the existing `assets` folder).
3. Commit the change. You do **not** need to edit `index.html`, `cfp.html`, or JavaScript.
4. Once GitHub Pages is updated, the site automatically detects the PDF and reveals the **Download Official CFP Poster (PDF)** links on both the homepage and CFP page.

GitHub repository: https://github.com/indsocws-pixel/doict-indsoc
Public site: https://indsocws-pixel.github.io/doict-indsoc/

## How to deploy V5 now

Unzip this archive and upload the **contents** (not the enclosing folder) to the root of the existing repository. Files named `index.html`, `cfp.html`, `assets/style.css` and `assets/script.js` must replace their prior versions. Your GitHub Pages settings remain `main` and `/ (root)`.

**Important cleanup:** Since uploading new files does not delete older files in the existing GitHub repository, please delete these V4 draft-poster files when convenient:
- `assets/DOICT-IndSoc-2027-CFP.pdf` (unofficial generated example)
- `assets/cfp-poster-preview.webp` (unofficial poster preview)
- `poster.html` (unofficial poster editing source)

These are deliberately absent from V5. The website does **not** link to them anymore.

## Editorial reminders

- Submission URL, final cutoff time and time zone, and detailed 2027 workshop schedule are still awaiting organizers' confirmation.
- The 2026 page contains available archival content, not a verified full historical committee / detailed schedule transcription.
- The Honolulu hero illustration is AI-generated, not an official site photo.
