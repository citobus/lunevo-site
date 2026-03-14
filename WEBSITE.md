# lunevo Website Notes

## File structure

| File | Purpose |
|---|---|
| `index.html` | Main landing page |
| `privacy-policy.html` | Privacy Policy |
| `terms-of-service.html` | Terms of Service |
| `styles.css` | Full visual system and responsive layout |
| `script.js` | Lightweight scroll-reveal animations |
| `media/flowView.PNG` | App screenshot — Flow view |
| `media/trendsView.PNG` | App screenshot — Trends view |
| `media/insightsView.PNG` | App screenshot — Insights view |

## Page structure (index.html)

1. **Hero** — Headline, tagline, CTAs, and the Flow app screenshot in a phone frame
2. **Features** (`#features`) — Three info cards: Check in / Notice patterns / Get insights
3. **The App** (`#screenshots`) — Three phone screenshots with captions: Flow, Trends, Insights
4. **About** (`#about`) — Product story and three value cards (Calm by default / Your data / Honest guidance)
5. **Footer** — Brand, tagline, Privacy Policy and Terms links, copyright

## Design direction

- Keep the site calm, airy, and warm
- Mirror the app's sunrise-to-night gradient language
- Prefer simple sections with generous whitespace
- Avoid heavy product-marketing language
- Write like a thoughtful guide, not a hype-driven startup page

## Visual system

- **Fonts:** Cormorant Garamond (headings) + Manrope (body)
- **Palette:** Warm cream background, teal accent, peach/gold/rose gradients
- **Surfaces:** Frosted glass cards with `backdrop-filter: blur`
- **Phone frames:** `border-radius: 40–48px` with layered shadows — no border, no device chrome
- **Animations:** IntersectionObserver scroll-reveal on all `.section` elements

## Content guardrails

- Focus on rhythm, energy, flow, and well-being
- Stay visually simple even as more sections are added
- Keep copy short and easy to scan
- AI Insights copy: emphasize honesty and personal grounding, not hype

## Legal pages

Both `privacy-policy.html` and `terms-of-service.html`:
- Share the same header/nav and footer as `index.html`
- Use `.legal-header` and `.legal-body` layout classes from `styles.css`
- Link to each other in the footer
- Include a back link to `index.html`

Key points covered in the Privacy Policy:
- What data is collected (check-ins, usage, device)
- How AI Insights are processed (third-party AI, no training use)
- No data selling or advertising use
- User rights: access, export, delete, opt out of AI Insights

Key points covered in the Terms of Service:
- Not medical advice (prominently stated)
- User data ownership
- Acceptable use
- AI-generated content disclaimer
- Limitation of liability

## Good next additions

- Add an App Store or TestFlight download link once available
- Add a waitlist or email capture form
- Add Open Graph / social preview meta tags for link sharing
- Add a favicon
- Consider a subtle animated gradient on the hero background

## Deployment

- GitHub Pages
- Netlify
- Vercel

All three work with this static setup as-is.
