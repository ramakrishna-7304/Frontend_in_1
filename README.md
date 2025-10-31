# AppDost UI (Vite + React + Tailwind)

A modern, performance-focused landing page inspired by AppDost, built with React, Vite, Tailwind CSS, Lucide icons, and Framer Motion.

## Tech Stack
- React 18 + Vite 5
- Tailwind CSS 3
- Framer Motion 11 (animations)
- Lucide React (icons)
- Google Font: Inter

## Features
- Sticky navbar with blur, active link highlighting, and mobile menu
- Animated hero with gradient background and CTAs
- Services, Projects, About (animated counters), Testimonials, Contact, Footer
- Glassmorphism, gradients, shadows, micro-interactions
- Accessible markup, focus styles, and responsive layout

## Getting Started
```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Production build
npm run build

# Preview local production build
npm run preview
```

## Project Structure
```
appdost-ui/
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
├── public/
└── src/
    ├── App.jsx
    ├── index.css
    ├── main.jsx
    └── components/
        ├── Navbar.jsx
        ├── Hero.jsx
        ├── Services.jsx
        ├── Projects.jsx
        ├── About.jsx
        ├── Testimonials.jsx
        ├── Contact.jsx
        └── Footer.jsx
```

## Tailwind Setup
- Configured content paths in `tailwind.config.js`
- Custom colors: `primary` and `secondary`
- Global styles and animations in `src/index.css`

## Deployment
- Build output: `dist`
- Vercel: Framework Preset “Vite”, Build: `npm run build`, Output: `dist`
- Netlify: Build: `npm run build`, Publish: `dist`

## Accessibility & Performance
- Semantic HTML, visible focus states
- Smooth scroll and reduced jank animations
- Optimized production build via Vite

## License
This project is provided as-is for portfolio and learning purposes.
