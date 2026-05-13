# Ruhestörer — Landing Page

Static HTML/CSS/JS marketing website for the Ruhestörer iOS app.
Hosted on GitHub Pages. No build step required.

---

## Files

```
ruhestoerer-site/
├── index.html        # Main landing page
├── pricing.html      # Pricing with FAQ
├── privacy.html      # Datenschutzerklärung / Privacy Policy (DE + EN)
├── imprint.html      # Impressum (required by German law §5 TMG)
├── terms.html        # AGB / Terms of Service (DE + EN)
├── contact.html      # Contact page
├── css/
│   └── styles.css    # Design system + all styles
├── js/
│   ├── i18n.js       # Translations + language switch (DE/EN)
│   └── main.js       # Nav, FAQ, scroll reveal, waveform animation
├── assets/
│   └── icons/
│       └── favicon.svg
└── README.md
```

---

## Preview locally

Just open `index.html` in any browser. No server needed.

For best results (fonts load correctly), serve via a local server:

```bash
# Python
python3 -m http.server 8080

# Node (if npx available)
npx serve .
```

Then visit `http://localhost:8080`.

---

## Deploy to GitHub Pages

1. Create a new GitHub repository (e.g. `ruhestoerer-site`)
2. Push this folder to the `main` branch
3. Go to **Settings → Pages → Source → Deploy from branch → main → / (root)**
4. GitHub will publish the site at `https://<your-username>.github.io/ruhestoerer-site/`

To use a custom domain (e.g. `ruhestoerer.app`):
- Add a `CNAME` file in the root with your domain name
- Set up DNS: add a CNAME record pointing to `<your-username>.github.io`
- Enable "Enforce HTTPS" in GitHub Pages settings

---

## Before going live — Checklist

### Required (legal)

- [ ] `imprint.html` — Fill in ALL `[PLACEHOLDER]` fields:
  - Full legal name of the operator
  - Postal address (Straße, PLZ, Ort)
  - Phone number (optional but recommended)
  - USt-IdNr (if applicable)
  - Responsible person under §55 RStV

- [ ] `privacy.html` — Fill in:
  - Full legal name and address of the data controller (§1 in both DE and EN)

- [ ] `terms.html` — Fill in:
  - Operator name and address in §1 (both DE and EN)

### Required (functional)

- [ ] Replace all `href="#"` App Store links with the real App Store URL.
  Search for `TODO: Replace href="#"` in each HTML file — there are 3 occurrences:
  - `index.html` (hero CTA + nav + footer CTA)
  - `pricing.html` (Free card + Pro card + footer CTA)

- [ ] Add a real `assets/images/og.png` (1200×630px) for social sharing previews.

### Optional

- [ ] Update the copyright year in all `footer-bottom` sections if needed.
- [ ] If you have screenshots of the app, replace the phone mockup in the hero
  with a real screenshot (add to `assets/images/`).
- [ ] Add Google Search Console verification meta tag to `<head>` if needed.

---

## Language switching

The site defaults to German for `de-*` browser locales, English otherwise.
The user's choice is persisted in `localStorage` under key `rs_lang`.

To add new translation keys, edit `js/i18n.js` — add the key under both
`de` and `en` objects, then use `data-i18n="key.path"` on any HTML element.

---

## Design tokens

All colors, spacing, typography, and radii are defined as CSS variables in
`css/styles.css` under `:root`. The accent color is `#E53935`.

Dark theme only (matches the iOS app).

---

## Notes

- The Impressum page has `<meta name="robots" content="noindex">` — this is
  intentional to avoid it appearing in search results while still being
  accessible. Remove if you prefer otherwise.
- All App Store links are currently `href="#"` (placeholder). The app must be
  published before a real link is available.
- The `imprint.html` displays a red warning banner while `[PLACEHOLDER]` text
  is present. This banner has no auto-hide logic — it disappears only when you
  actually fill in the placeholders.
