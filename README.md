# Paaloving Tech Solutions (PTS) — Homepage & Survey API

Production-ready Next.js 15 (App Router) homepage and backend survey system
for PTS, an IT infrastructure and security hardware installation firm based
in Kumasi, Ghana.

## Stack

- Next.js 15, App Router, React Server Components by default
- TypeScript (strict)
- Tailwind CSS
- lucide-react icons

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Structure

```
app/
  layout.tsx              Root layout + metadata
  page.tsx                Homepage (assembles all sections)
  globals.css              Tailwind directives + base tokens
  api/survey/route.ts      POST handler for the site survey form
components/
  Navbar.tsx               Sticky glassmorphic nav + mobile menu
  Hero.tsx                 Headline, CTAs, trust badges
  Services.tsx             Bento grid of service offerings
  CaseStudies.tsx          Interactive tab switcher (client)
  BookSurveySection.tsx    Copy + form wrapper
  SurveyForm.tsx           Form state, fetch POST, loading/success/error UI
  LocationMap.tsx          Google Maps embed + office details
  Footer.tsx                4-column footer
lib/
  types.ts                 Shared TypeScript types for the survey flow
```

## Connecting real email alerts

`app/api/survey/route.ts` currently logs the alert to the console
(`sendManagementAlert`). To send real emails, install Resend or Nodemailer
and replace that function's body — the commented example in the file shows
the Resend call shape. Set `RESEND_API_KEY` (or your provider's equivalent)
as an environment variable before deploying.

## Notes

- The office location in `LocationMap.tsx` uses a query-based Google Maps
  embed for "Maxwell Rd, Kumasi, Ghana" — swap in an exact place ID once
  you have one for a pinned marker instead of a text search.
- Replace `PTS_MANAGEMENT_EMAIL` in the API route with the real
  operations inbox.
# pts-site
