# Shri Digambar Jain Atishay Kshetra Pateriyaji – Website

A fast, modern single-page website for Shri Digambar Jain Atishay Kshetra Pateriyaji built with Vite + React + Tailwind. It includes bilingual content (English/Hindi), responsive layouts, and on‑page SEO optimizations ready for deployment on Vercel with strong security headers.

## Tech Stack
- Vite (rolldown-vite) + React 19
- React Router 7
- Tailwind CSS v4
- Swiper (hero slider)
- Lucide (icons)
- ESLint 9

## Project Structure
```
d:\Temple
├── index.html
├── vercel.json
├── public/
│   └── img/Gallery/…              # Gallery images
├── src/
│   ├── Components/
│   │   ├── Homepage/…             # Hero, About, Gallery, News, etc.
│   │   ├── Pages/…                # About, Contact, Donate, GalleryPage, etc.
│   │   └── Static/…               # Header, Footer
│   ├── assets/
│   ├── App.jsx                    # Router + SEO manager
│   ├── main.jsx
│   ├── App.css
│   └── index.css
├── package.json
└── vite.config.js
```

## Getting Started
1. Install dependencies
   - npm install
2. Run locally
   - npm run dev
3. Build for production
   - npm run build
4. Preview the production build
   - npm run preview

## On‑Page SEO
This project implements on‑page SEO in two layers:
- Base tags in [index.html](file:///d:/Temple/index.html)
  - Title, meta description, keywords, Open Graph, Twitter Card, theme color, canonical, and Schema.org JSON‑LD.
- Route‑aware SEO in [App.jsx](file:///d:/Temple/src/App.jsx)
  - SEO manager updates document title, meta description, html lang, and canonical URL on every route change and language toggle.

How to customize:
- Edit base tags and structured data in index.html.
- Update per‑route titles/descriptions in the routeMeta map inside App.jsx.
- Default canonical base is updated at runtime from the current URL.

## Accessibility & Content Notes
- Images include alt text where shown; add meaningful alt for any new images.
- External links opened in a new tab use `rel="noopener noreferrer"`.
- Language attribute on the html element switches dynamically between `en` and `hi`.

## Security & Headers
Security headers are configured in [vercel.json](file:///d:/Temple/vercel.json):
- Content‑Security‑Policy blocks third‑party execution by default while allowing required images and inline styles used by Tailwind/Swiper.
- X‑Content‑Type‑Options, X‑Frame‑Options, Referrer‑Policy, Permissions‑Policy, and HSTS are enabled.
- Long‑term caching for static assets is enabled.

If you add external scripts or providers, update the CSP accordingly.

## Deploy to Vercel
Option A: Import the repository in Vercel (Framework: Vite).  
Option B: Vercel CLI:
1. npm i -g vercel
2. vercel
3. vercel --prod

The provided vercel.json:
- Adds SPA rewrites so client routing works on refresh.
- Sets security headers site‑wide.
- Enables aggressive caching for built assets.

## Scripts
- npm run dev – start dev server
- npm run build – production build
- npm run preview – preview build locally
- npm run lint – run ESLint

## Notes
- Site URL used in metadata defaults to https://pateriyaji.vercel.app — change it in index.html after you attach a custom domain.
