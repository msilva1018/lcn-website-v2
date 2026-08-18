# LCN Consulting Website

Static marketing site for **LCN Consulting, Inc.** — a pharmaceutical and biotech strategic intelligence firm.

## Tech stack

- **HTML + Tailwind CSS** (loaded via CDN — no build step required)
- **Vanilla JavaScript** for mobile menu, scroll reveals, smooth scrolling, FAQ accordion
- **Raleway** typography (Google Fonts)
- **Web3Forms** for the contact form submission endpoint
- **HubSpot** for the meeting scheduler link

## Structure

```
.
├── index.html                      # Home
├── home/index.html                 # Home (duplicate of index.html, canonicalized to /)
├── about/index.html                # About / mission / values / leadership
├── services/index.html             # Four practice areas + engagement process
├── why-lcn/index.html              # Differentiators, comparison, outcomes
├── contact/index.html              # Web3Forms contact form + contact details + FAQ
├── privacy.html                    # Privacy Policy
├── terms.html                      # Terms of Service
│
├── intelligence-center/
│   ├── index.html                  # Hub: atomic essays + LinkedIn feed
│   └── monitoring-versus-intelligence.html   # Atomic essay, Aug 18 2026
│
├── insights/index.html             # Redirect stub -> /intelligence-center
│
├── images/
│   ├── logo.png                    # Full brand logo
│   ├── logo-mark.png               # Nav / footer logo (currently identical to logo.png)
│   ├── logo-source.jpg             # Original source file (backup)
│   ├── og-lcn.png                  # 1200x630 social share card
│   ├── favicon.ico                 # Multi-size browser favicon
│   ├── favicon-16.png / -32.png / -48.png / -64.png
│   └── apple-touch-icon.png        (180x180)
│
├── styles.css                      # Brand styles, animations, gradients
├── script.js                       # Menu, scroll reveals, FAQ
└── README.md
```

### Publishing a new atomic essay

1. Copy `intelligence-center/monitoring-versus-intelligence.html` to a new slug in the same folder.
2. Replace the eyebrow date, `<h1>`, standfirst, and body paragraphs.
3. Update `<title>`, `meta description`, `og:title`, `og:description`, `og:url`, `article:published_time`, and `rel=canonical`.
4. Add a card for it in the Atomic Essays grid on `intelligence-center/index.html`.

Body copy classes: `.essay p` for standard paragraphs, `.essay p.essay-turn` for the pivot line, `.essay p.essay-close` for the closing question.

## Deployment

The site is fully static — no build pipeline. Deploy by uploading the entire repo to any static host (Netlify, Vercel, GitHub Pages, S3 + CloudFront, etc.).

Every page carries `rel=canonical`, `og:url`, `og:image`, and `twitter:image` as absolute URLs. If `lcnconsult.com` ever changes, update those four tags in every page `<head>`.

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

The social share card (`images/og-lcn.png`) is rendered at 1200x630, the LinkedIn and Facebook recommended dimensions, and uses the LCN logo on a white field with a navy baseline rule.

## License

© 2026 LCN Consulting, Inc. All rights reserved.
