# Guntur Club — Premium Next.js Website

A working multi-page Next.js App Router + TypeScript website built around the **Guntur Club Brochure 2026**. Real club photographs are extracted from that brochure; no unrelated stock images have been substituted.

## 1. Requirements
- Node.js 20.9+ (Node.js 22 LTS recommended)
- VS Code

## 2. Local setup
Open a terminal in this directory and run:

```bash
npm install
cp .env.example .env.local
npm run dev
```

On Windows PowerShell replace the copy command with:

```powershell
Copy-Item .env.example .env.local
```

Visit **http://localhost:3000**. Stop the server with `Ctrl+C`.

## 3. File guide
- `app/page.tsx` — homepage sections
- `app/<route>/page.tsx` — individual pages
- `app/amenities/[slug]/page.tsx` — eight amenity pages generated from structured data
- `components/sections/HeroSlider.tsx` — five full-height animated hero slides
- `components/sections/AmenitiesShowcase.tsx` — interactive facility showcase
- `components/layout/Header.tsx`, `Footer.tsx` — shared navigation
- `components/artwork/GoldenWaves.tsx` — SVG decorative curves
- `components/animations/Reveal.tsx` — GSAP ScrollTrigger animations
- `components/layout/SmoothScroll.tsx` — Lenis + GSAP sync
- `components/ui/EnquiryForm.tsx` — validated enquiry form
- `app/api/enquiry/route.ts` — server-side email endpoint
- `data/site.ts` — amenities, navigation, gallery, affiliations and contact details
- `app/globals.css` — brand tokens and styles
- `public/images/` — original extracted club imagery (WebP)
- `public/documents/` — source brochure PDF

## 4. Email configuration (required before forms can send)
Set the following in `.env.local`:
- `RESEND_API_KEY` — API key from Resend
- `CONTACT_FROM_EMAIL` — sender on a verified sending domain
- `CONTACT_TO_EMAIL` — actual club enquiry inbox
- `NEXT_PUBLIC_SITE_URL` — local URL for development, production domain after launch

The form **will not claim success** without a configured email service. Restart the dev server after editing environment variables.

## 5. Update content
Edit `data/site.ts` for facility names/descriptions, affiliation clubs, photo gallery, address and navigation. To replace an image, place the new `.webp` under `public/images/` and update its path in the data/component. For the homepage hero, edit the `slides` array in `components/sections/HeroSlider.tsx`.

## 6. Routes
`/`, `/about`, `/committee`, `/services`, `/amenities`, eight `/amenities/<slug>` details, `/gc-pavilion`, `/stay-and-celebrate`, `/guest-rooms`, `/function-halls`, `/affiliations`, `/gallery`, `/membership`, `/contact`, `/privacy-policy`, branded 404.

## 7. Testing and deployment
```bash
npm run typecheck
npm run build
npm run start
```
For Vercel: import the Git repository, select Next.js, add the same production environment variables, deploy. Use a verified production domain.

## 8. Items requiring client approval or original assets
1. Official logo vector/transparent PNG: the temporary **G** monogram in the header must be replaced with the approved emblem.
2. Original close-up photographs for pickleball, billiards/snooker and air pistol shooting. These sections explicitly indicate where an approved image is needed.
3. Current committee member names and portraits: the committee page avoids displaying unconfirmed leadership information.
4. Official membership terms, enquiry handling/email credentials, and final privacy policy approval.
5. Official social links and verified Maps place URL (current directions link is a search URL, not a verified place listing).
6. Optional full India SVG map and custom page transitions/preloader are future design enhancements; the state-filtered affiliation directory is functional.

**Source:** Guntur Club Brochure 2026, supplied with the project. Brochure imagery may be used only where the club has publication rights.
