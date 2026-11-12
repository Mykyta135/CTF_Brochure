# CTF_Brochure

Partner brochure site for **BEST::CTF 2024**, the first offline CTF in Lviv. Instead of a PDF with fixed packages, a company builds its own partnership offer: it ticks the options it wants (fixed, flexible and optional items, or a barter deal), sees them in a cart, and sends the request straight to the organisers.

- Offer builder state in Redux Toolkit, forms with react-hook-form / Formik + Zod / Yup
- Request sent through EmailJS, no backend to host
- Two languages via `next-intl` (`[locale]` routes), Framer Motion animations, Swiper carousels

**Stack:** Next.js (App Router) · TypeScript · Tailwind · Redux Toolkit · next-intl · EmailJS

## Run

```bash
npm install
# EmailJS: NEXT_PUBLIC_SERVICE_ID, NEXT_PUBLIC_TEMPLATE_ID, NEXT_PUBLIC_PUBLIC_KEY in .env.local
npm run dev
```

The same builder, generalised for other BEST Lviv events: [CTF_General_Brochure](https://github.com/Mykyta135/CTF_General_Brochure).
