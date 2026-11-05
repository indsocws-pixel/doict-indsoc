# DOICT-IndSoc Workshop Official Website (IEEE-style revision)

Independent GitHub Pages static website for the DOICT-IndSoc international workshop, **inspired by the dark-blue and white visual style of its IEEE INFOCOM 2026 listing**.

## Files

- `index.html`: **2027 home page**, with CFP, dates, committee placeholder, program placeholder, and archive link.
- `cfp.html`: detailed **2027 Call for Papers**.
- `2026/index.html`: archive of the **2026 first edition**.
- `assets/styles.css`: shared layout and styling (both editions).
- `assets/favicon.svg`: independent monogram icon (not an official IEEE logo).
- `.nojekyll`: GitHub Pages helper file.

## Deployment to your existing repository

Target repository: `https://github.com/indsocws-pixel/doict-indsoc`

1. Download and unzip the bundle.
2. On the GitHub repository page, choose **Add file → Upload files**.
3. Drag the files and the `2026` and `assets` folders from **inside** the extracted folder (not the top-level folder itself) into the upload area, and commit changes. When GitHub warns of duplicate paths, choose the overwrite/replace operation.
4. Make sure `index.html` exists in the repo root and `2026/index.html` exists inside folder `2026/` (not a text file named `2026`).
5. Open repository **Settings → Pages → Build and deployment → Deploy from a branch → main / (root) → Save**.
6. The expected website URL is `https://indsocws-pixel.github.io/doict-indsoc/` after successful deployment.

## Important editorial checks before publication

- The **2027 submission portal, author formatting rules, page limit, acceptance notification, camera-ready date, committee, and detailed program** were *not provided*. Those areas are clearly marked as to be announced.
- The workshop title for 2027 follows the Chinese publicity notice provided by the workshop chair. First edition (2026) used a different full title; both historical titles are retained as supplied.
- Publication wording follows the 2027 announcement and should be approved by organizers.
- The 2026 historical topics are summarized/transcribed from the first-edition screenshot; the official page could not be fully retrieved. **2026 Committee and Program are linked to the original page instead of inventing records.**
- The 2026 event duration and rooms (08:30–18:00; Kiku 1 / Kiku 2) are taken from the screenshot provided by the workshop chair. Remove if the official program disagrees.
- This is an independently designed site; it does not reproduce IEEE's main-conference navigation, official logo, trademark artwork, or original proprietary site code.

Original page: https://infocom2026.ieee-infocom.org/pages/international-workshop-fusion-data-operation-information-and-communication-technology

## Editing later

The text and links are editable using any plain-text editor or GitHub's Edit file feature. Keep the `href` values relative (`cfp.html`, `2026/`, `../index.html`) so the GitHub Pages project URL works. Update CSS once to update both years.
