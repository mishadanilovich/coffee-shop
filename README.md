# Coffee Shop

A marketing + e-commerce site for a coffee shop, built with Next.js (Pages Router) and TypeScript. Landing page with an intro, about, menu preview, baristas, video lessons, a Google Maps–powered contact section and a blog; a full menu page with cart; email/password auth; and Stripe-based checkout for the shopping basket.

## Stack

- **Next.js 13** (Pages Router) + **React 18** + **TypeScript**
- **styled-components** for styling, with a themed design system (palette, typography, spacing, breakpoints)
- **react-hook-form** for forms
- **SWR** + **axios** for data fetching against a separate backend API
- **Stripe** (`@stripe/stripe-js`, `@stripe/react-stripe-js`) for checkout
- **nookies** for cookie-based auth token storage
- **@react-google-maps/api** for the store location map
- **Swiper** for carousels, **notiflix** for toast notifications

## Architecture notes

- This is a **frontend-only** repository. All data (menu, baristas, blog posts, basket, auth) is served by a separate backend, configured via `NEXT_PUBLIC_API_BASE_URL`. Without that backend running, pages will fail to fetch data.
- Auth: on login/signup the backend returns a JWT, which is stored in a `_token` cookie (`nookies`) and attached to every request via an axios interceptor (`core/axios.ts`). Server-side route protection is handled in `getServerSideProps` via `src/components/utils/checkAuth.ts`.
- Pages (`src/pages`) are thin wrappers that fetch data in `getServerSideProps` and hand it to screen components in `src/components/screens/*`.

## Getting started

1. Install dependencies:

   ```bash
   yarn install
   ```

2. Copy the environment template and fill in real values:

   ```bash
   cp .env.example .env.local
   ```

   | Variable | Description |
   | --- | --- |
   | `NEXT_PUBLIC_API_BASE_URL` | Base URL of the backend API |
   | `NEXT_PUBLIC_STRIPE_KEY` | Stripe publishable key (test mode) |

3. Run the dev server:

   ```bash
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
yarn dev      # start the dev server
yarn build    # production build
yarn start    # run the production build
yarn lint     # run ESLint
yarn test     # run the test suite
```

## Project structure

```
src/
  components/
    constants/    # shared enums, routes, form field configs
    hooks/        # data-fetching hooks (SWR)
    icons/        # inline SVG icon components
    layout/       # Header, Footer, Layout
    screens/      # page-level compositions (home, menu, auth) and their sections
    seo/          # <Meta> component for per-page SEO tags
    theme/        # styled-components theme, global styles
    ui/           # reusable UI components (forms, modals, cards, etc.)
  pages/          # Next.js routes (index, menu, auth)
  services/       # typed API clients, one module per backend resource
  types/          # shared TypeScript types
core/
  axios.ts        # shared axios instance with auth interceptor
```
