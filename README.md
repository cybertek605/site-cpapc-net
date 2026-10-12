# site-cpapc-net

Website for CPA PC (Victor Schmitz CPA, PC), cpapc.net: home page, SMS terms (`/sms-terms`), privacy policy (`/privacy`), printable consent form (`/sms-consent-form`).
Static Astro site, deployed with GitHub Pages (Actions workflow in `.github/workflows/deploy-pages.yml`). No analytics, no trackers, no third-party scripts (on purpose).

## Change content
Everything (name, legal name, phone, address, SMS wording) lives in `src/site.config.ts`.

## DNS WARNING
cpapc.net also runs Microsoft 365 email. Do NOT delete or edit the MX, SPF (TXT), DKIM (CNAME selector1/selector2), or Autodiscover records. Only the root web records (and `www`) should point at the web host.

## Reuse for another customer
Copy this repo, change `src/site.config.ts` and `site` in `astro.config.mjs`, deploy, point the domain.

## 10DLC links
- Terms: https://cpapc.net/sms-terms
- Privacy: https://cpapc.net/privacy
