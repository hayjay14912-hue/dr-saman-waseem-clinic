# Dr. Saman Waseem — clinic website

## Run locally
1. `cp .env.example .env.local` and add credentials when available.
2. `npm install`
3. `npm run dev`

## Deploy on Vercel
Import this folder as a new Vercel project. Add the variables in `.env.example` under **Settings → Environment Variables**, then deploy. Do not commit `.env.local`.

## Assets to supply before launch
- `public/dr-saman-waseem.jpg`: approved doctor portrait (also used for OG)
- `public/hero.mp4`, `public/hero.webm`, `public/hero-poster.jpg`
- Consent-approved before/after images and written patient reviews
- Logo, clinic phone/WhatsApp, addresses, hours, map links, prices and legal copy
- Google Place ID and a server-only Google Places API key

## Review integration
`/api/reviews` uses Google Places API (New) Place Details when variables exist, revalidates every 24 hours, and falls back to clearly labelled approved placeholder content. It does not scrape Google. Use Google Business Profile API or a licensed service when the complete review set is required.

## Booking integration
`/api/booking` validates submissions and is intentionally provider-neutral. Add a transactional email provider in that route and set `WHATSAPP_NUMBER` for the client booking link. Add production spam protection (for example, Turnstile) before launch.
