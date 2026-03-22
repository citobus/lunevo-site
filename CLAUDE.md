# lunevo-website — Claude Code Context

> **IMPORTANT FOR AI AGENTS:** After any meaningful change here (new page, content update, deployment config), you MUST update:
> 1. This file (`lunevo-website/CLAUDE.md`)
> 2. `lunevo-website/AGENTS.md` — the parallel AI agent context file in this directory
> 3. `../LUNEVO_PROJECT.md` → Section 8 (Website)

Full project context: **[../LUNEVO_PROJECT.md](../LUNEVO_PROJECT.md)**
Website design notes: **[WEBSITE.md](WEBSITE.md)**

---

## What This Is

Static marketing/legal site. No build step. Pure HTML + CSS + JS.

**Live at:** https://www.lunevoapp.com
**GitHub:** https://github.com/citobus/lunevo-site
**Domain:** `lunevoapp.com` via Porkbun
**Official support email:** `support@lunevoapp.com`
**DNS/CDN:** Cloudflare (proxied — HTTPS, caching handled automatically)
**Hosting:** Cloudflare Pages (connected to `citobus/lunevo-site` GitHub repo — push to deploy)

## Files

| File | Purpose |
|---|---|
| `index.html` | Main landing/marketing page |
| `privacy-policy.html` | Required for App Store |
| `terms-of-service.html` | Required for App Store |
| `styles.css` | Full design system (13.5 KB) — do not duplicate styles inline |
| `script.js` | Scroll animations |
| `media/` | App screenshots (Flow, Trends, Insights views) |
| `WEBSITE.md` | Design rules, content guidelines, section breakdown |
| `adminportal/index.html` | Admin login page (Google Sign-In via Firebase) |
| `adminportal/dashboard.html` | Admin dashboard: Broadcast Messages tab + Push Notifications tab |
| `adminportal/admin.css` | Admin portal styles (separate from main styles.css) |

## Admin Portal

**URL:** `lunevoapp.com/adminportal/`
**Auth:** Firebase Google Sign-In — only emails in the backend `ADMIN_EMAILS` env var can use the API
**Firebase config** is embedded directly in both admin HTML files (Web SDK v12.10.0 via CDN, no build step)
**Calls:** Railway backend `/admin/messages` and `/admin/notifications` endpoints with Firebase Bearer token
- Do not add Firebase config to any other files — it's intentionally scoped to the admin portal

## Design System

All styles are in `styles.css`. Read `WEBSITE.md` before editing visual styles or content — it has guardrails on fonts, colors, tone, and section structure.

## Deploying Changes

Push to `citobus/lunevo-site` main branch → Cloudflare Pages deploys automatically. No build command needed.

## Rules for AI Agents

- Do not add frameworks or build tools — this is intentionally zero-dependency
- Privacy policy and terms of service pages must remain accurate — do not edit legal language without user confirmation
- New screenshots go in `media/` — use the existing naming convention
- DNS is managed in Cloudflare — do not modify domain settings without user confirmation
