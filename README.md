# LCN Consulting Website

Static marketing site for **LCN Consulting, Inc.** — a pharmaceutical and biotech strategic intelligence firm.

## Tech stack

- **HTML + Tailwind CSS** (loaded via CDN — no build step required)
- **Vanilla JavaScript** for mobile menu, scroll reveals, smooth scrolling, FAQ accordion
- **Raleway** typography (Google Fonts)
- **HubSpot** for contact form embed and meeting scheduler

## Structure

```
.
├── index.html              # Home
├── about.html              # About / mission / values / leadership
├── services.html           # Four practice areas + engagement process
├── why-lcn.html            # Differentiators, comparison, outcomes
├── insights.html           # Article index + featured article
├── contact.html            # HubSpot form + contact details + FAQ
├── privacy.html            # Privacy Policy
├── terms.html              # Terms of Service
│
├── insights/               # Long-form articles
│   ├── forecasts-optimistic-by-design.html       (featured)
│   ├── conference-signal-framework.html
│   ├── kols-say-vs-prescribe.html
│   ├── indication-sequencing.html
│   ├── payer-evidence-shifting.html
│   ├── portfolio-decision.html
│   └── pricing-ira-era.html
│
├── images/
│   ├── logo.png            # Full brand logo (transparent bg)
│   ├── logo-mark.png       # Logo without tagline (used in nav/footer)
│   ├── logo-source.jpg     # Original source file (backup)
│   ├── og-image.png        # 1200×630 social share image
│   ├── favicon.ico         # Multi-size browser favicon
│   ├── favicon-16.png  / -32.png  / -48.png  / -64.png
│   └── apple-touch-icon.png  (180×180)
│
├── styles.css              # Brand styles, animations, gradients
├── script.js               # Menu, scroll reveals, FAQ
└── README.md
```

## Deployment

The site is fully static — no build pipeline. Deploy by uploading the entire repo to any static host (Netlify, Vercel, GitHub Pages, S3 + CloudFront, etc.).

When a domain is connected, update the absolute URLs in the OG meta tags inside each page's `<head>` if `lcnconsult.com` ever changes.

## Contact info on site

- **Address:** 175 Fairfield Ave #2D, West Caldwell, NJ 07006
- **Phone:** 973-226-0344
- **General email:** info@lcnconsult.com
- **Privacy / legal email:** admin@lcnconsult.com
- **Scheduling link:** https://meetings.hubspot.com/emanuele-criscione

## SEO / social sharing

Every page has a complete metadata block:
- `<title>` and `<meta name="description">`
- Open Graph tags (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`)
- Twitter Card meta (`summary_large_image`)
- Full favicon set including Apple touch icon

The OG image (`images/og-image.png`) is rendered at 1200×630 — the LinkedIn / Facebook recommended dimensions — and uses the brand palette and dimensional-circles motif.

## Scripts in this repo

The `build_*.py` files in the source tree are the generators used to assemble the pages. They are not required for deployment — only the static HTML / CSS / JS / images are needed. They are kept in the repo for future regeneration if global changes (e.g. site-wide navigation update) are needed.

## License

© 2025 LCN Consulting, Inc. All rights reserved.
