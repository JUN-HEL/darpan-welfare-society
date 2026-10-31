# Darpan Welfare Society — public website

A premium, static public website for **Darpan Welfare Society**, based in Roorkee, Uttarakhand. The site has five primary pages:

- Home
- About Us
- Our Work
- Gallery
- Contact

A secondary privacy page supports the footer and contact form.

## Stack

- Next.js 16 App Router (static content, no CMS or database)
- TypeScript
- Custom CSS design system
- Playfair Display + DM Sans via `next/font`
- No analytics, admin, API or authentication layer

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The scripts use the webpack builder. This is deliberate for this OneDrive-synced Windows workspace, where previous Turbopack file watching was unstable. The production build can be started with:

```bash
npm run build
npm run start
```

## Photography placeholders

**No stock or AI-generated activity photography is used in the project.** All editorial images are intentionally CSS-based placeholders until Darpan supplies or authorises real photographs.

Every image slot lives in `src/content/images.ts`. The shared `EditorialImage` component renders a designed placeholder when a slot has no `src`.

To add an authorised photograph:

1. Add an optimised image to `public/images/…`.
2. Set the corresponding `src` in `src/content/images.ts`.
3. Update `alt` to describe the real scene and people shown.
4. Add any required photo credit or caption in the page that uses the image.
5. For gallery images, update the relevant item in `src/content/gallery.ts` if its title or caption needs to reflect the real photograph.

Do not add stock or AI-generated photographs, and do not publish photographs of beneficiaries without informed consent.

## Verified information

The site deliberately does not invent phone numbers, email addresses, WhatsApp numbers, leadership names, registration numbers, programme outcomes, achievements, donation credentials or legal permissions.

- The address and Instagram profile shown are publicly listed.
- The contact page marks phone, email and WhatsApp as pending confirmation.
- Donations are not collected. No Donate navigation item is shown.
- The livelihood entry is the only area of focus with a specific public-source note; all categories are presented as areas of focus rather than confirmed programmes.
- The contact form never reports a successful submission unless a configured form service returns a successful response.

When verified details become available, update `src/content/site.ts`.

## Contact form service

The contact form uses an optional external form service — no backend or database is included.

```env
NEXT_PUBLIC_CONTACT_FORM_ENDPOINT=https://...
```

Without this variable, the form clearly states that delivery is not connected and does not submit. When connected, the form posts `FormData` to the endpoint and only shows success after an OK response. The chosen provider's privacy and retention terms should be reviewed before launch, and the privacy note updated.

## Environment variables

Copy `.env.example` to `.env.local` when needed.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical site URL used by metadata, sitemap and structured data. Defaults to `https://darpanwelfare.org`. |
| `NEXT_PUBLIC_CONTACT_FORM_ENDPOINT` | Optional secure external form endpoint. |

## Routes

- `/`
- `/about`
- `/work`
- `/gallery`
- `/contact`
- `/privacy`
- `/sitemap.xml`, `/robots.txt`
- Custom not-found page

Legacy paths redirect to their closest current page in `next.config.ts`.

## Checks

```bash
npm run lint
npm run typecheck
npm run build
```

Before launch:

1. Replace placeholders with authorised photography.
2. Confirm contact details, address accuracy and map.
3. Connect and test the enquiry form service, or keep the honest “not connected” state.
4. Review the privacy note against the final services in use.
5. Verify every public claim and add only supported programme information.
6. Check keyboard navigation, lightbox controls, mobile menu, reduced motion and all responsive breakpoints.
