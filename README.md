# Portfolio Site

Personal portfolio website for **Aimilianos Vergas** — a backend/full-stack developer based in Ioannina, Greece. Built with Next.js and Tailwind CSS, it showcases an about section, skills, and featured projects, with light/dark mode support.

**Repo:** [VergasAimilianos/PortfolioSite](https://github.com/VergasAimilianos/PortfolioSite)
**Live:** deployed on [Render](https://portfoliosite-i1bq.onrender.com/)

## Features

- **Next.js App Router** with the built-in font optimization (`next/font`) using Google Fonts (Outfit + Ovo)
- **Dark mode** toggle with persistence via `localStorage` and respect for the user's system preference
- **Tailwind CSS 4** for styling
- Fully responsive layout
- Modular sections: Navbar, Header, About Me, Work/Projects, Contact, Footer
- Project cards with GitHub and live deployment links
- **Render "wake up" pinger** — silently wakes up other free-tier Render services (linked from the Work section) on page load, so visitors don't hit a cold-start delay when clicking through to a project demo

## Tech Stack

| Category   | Technology                     |
| ---------- | ------------------------------- |
| Framework  | [Next.js 16](https://nextjs.org) |
| UI Library | [React 19](https://react.dev)   |
| Styling    | [Tailwind CSS 4](https://tailwindcss.com) |
| Hosting    | [Render](https://render.com) (Web Service) |
| Linting    | ESLint (`eslint-config-next`)   |

## Project Structure

```
PortfolioSite/
├── app/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Header.jsx
│   │   ├── AboutMe.jsx
│   │   ├── Work.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── utils/
│   │   └── pingServices.jsx   # wakes up linked Render services on load
│   ├── layout.js               # Root layout, fonts, metadata
│   ├── page.js                 # Home page, assembles all sections
│   └── globals.css
├── assets/
│   └── assets.js               # Icons, images, and project/tool data
├── public/                     # Static files (e.g. resume PDF)
├── package.json
└── next.config.mjs
```

## Waking Up Linked Projects (`pingServices.jsx`)

Several of the projects featured in the Work section (`Gym Exercise Tracker`, `Hotel Reservation Manager`, `Movie-API`) are themselves hosted on Render's free tier, which spins down after ~15 minutes of inactivity. A cold start can take 30–60 seconds, which makes for a poor first impression when someone clicks a project demo link.

`app/utils/pingServices.jsx` fires a lightweight `no-cors` GET request to each of those services as soon as the portfolio site loads, so they're already warming up in the background by the time a visitor clicks through:

```js
const RENDER_SERVICES = [
  "https://gym-tracker-frontend-5kdd.onrender.com",
  "https://hotel-reservation-manager-k6p4.onrender.com",
  "https://movie-api-n4si.onrender.com",
];

export const wakeUpServices = () => { /* ... */ };
```

To add or remove a linked project, just update the `RENDER_SERVICES` array. `wakeUpServices()` is called once on mount (e.g. from `page.js` inside a `useEffect`), and failures are simply logged, since a failed ping shouldn't affect the portfolio page itself.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18.18+ (required by Next.js 16)
- npm (or yarn / pnpm / bun)

### Installation

```bash
git clone https://github.com/VergasAimilianos/PortfolioSite.git
cd PortfolioSite
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the site. The page auto-updates as you edit files under `app/`.

### Build for production

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

## Customization

- **Personal info & copy:** edit `app/components/Header.jsx` and `app/components/AboutMe.jsx`
- **Projects:** add or update entries in `assets/assets.js` under `workData` (title, description, image, GitHub link, deployment link)
- **Skills/tools:** update `toolsData` and `infoList` in `assets/assets.js`
- **Resume:** replace the file in `public/` and update the `href` in `Header.jsx`
- **Fonts:** configured in `app/layout.js` via `next/font/google`
- **Linked services to warm up:** update `RENDER_SERVICES` in `app/utils/pingServices.jsx`

## Deployment

This project is deployed on [Render](https://render.com) as a Node **Web Service**:

- **Build command:** `npm install && npm run build`
- **Start command:** `npm run start`
- **Node version:** pinned via the `NODE_VERSION` environment variable
- **`NPM_CONFIG_PRODUCTION=false`** is set so that build-time `devDependencies` (like `@tailwindcss/postcss`) install correctly, since Render sets `NODE_ENV=production` by default for Web Services

It can also be deployed on [Vercel](https://vercel.com/new), which auto-detects Next.js projects with zero configuration. See the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for platform-specific guides.

## License

This project is personal portfolio code. Feel free to use it as inspiration, or copy it.
