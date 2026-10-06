# Task Tracker
## Menspingo Website — Development Tasks

---

## Legend

| Symbol | Meaning |
|--------|---------|
| ✅ | Done |
| 🔄 | In Progress |
| ⏳ | Pending |
| ❌ | Blocked |
| 🐛 | Bug |

---

## Phase 1 — Website v1.0 (React Frontend)

### Setup & Infrastructure
- [x] ✅ Create React App initialized
- [x] ✅ Install dependencies: `react-router-dom`, `framer-motion`, `react-icons`, `react-scroll`, `react-type-animation`
- [x] ✅ Project moved to `/Documents/Developer/Projects/menspingo`
- [x] ✅ Global CSS variables & dark theme (`index.css`)

### Components
- [x] ✅ Navbar — fixed, scroll-aware, mobile hamburger
- [x] ✅ Hero — TypeAnimation, floating cards, orbit rings, stats
- [x] ✅ Services — 6 service cards
- [x] ✅ Technologies — progress bars, marquee animation
- [x] ✅ About — story, values, achievements
- [x] ✅ Portfolio — 6 projects, category filter
- [x] ✅ Contact — form, real emails, phone, social links
- [x] ✅ Footer — 4-column, social links, back-to-top

### Assets & Branding
- [x] ✅ Company logo added (`src/assets/logo.jpeg`)
- [x] ✅ Logo displayed as circle in Navbar (44×44px, purple ring)
- [x] ✅ Logo displayed as circle in Footer (same style as Navbar)
- [x] ✅ Real contact details added (3 emails, phone, GitHub, LinkedIn)

### Bug Fixes
- [x] ✅ Fixed `FiBrain` → `FiCpu` (react-icons version compatibility)
- [x] ✅ Fixed `FiTwitter` undefined error in Footer
- [x] ✅ Fixed empty file corruption after server restarts
- [x] ✅ Fixed "Check the render method of App" crash
- [x] ✅ Removed "Made with React JS & Spring Boot" from footer

### Documentation
- [x] ✅ PRD.md created
- [x] ✅ ARCHITECTURE.md created
- [x] ✅ RULES.md created
- [x] ✅ DESIGN.md created
- [x] ✅ TASK.md created
- [x] ✅ MEMORY.md created

---

## Phase 2 — Improvements (Planned)

### Performance
- [ ] ⏳ Optimize logo.jpeg (compress to < 50KB)
- [ ] ⏳ Add `loading="lazy"` to below-fold images
- [ ] ⏳ Add meta tags for SEO
- [ ] ⏳ Add favicon (company logo)

### Features
- [ ] ⏳ Contact form — make it functional (EmailJS or backend)
- [ ] ⏳ Add real portfolio projects (replace placeholder data)
- [ ] ⏳ Blog section
- [ ] ⏳ Careers/Job listings page
- [ ] ⏳ Testimonials section

### UI Improvements
- [ ] ⏳ Add page loading animation
- [ ] ⏳ Add scroll progress indicator
- [ ] ⏳ Dark/light mode toggle
- [ ] ⏳ Add 404 error page

---

## Phase 3 — Backend (Planned)

- [ ] ⏳ Spring Boot REST API setup
- [ ] ⏳ Contact form API (`POST /api/contact`)
- [ ] ⏳ Email integration (SendGrid)
- [ ] ⏳ Portfolio API (`GET /api/projects`)
- [ ] ⏳ Admin dashboard

---

## Phase 4 — Deployment (Planned)

- [ ] ⏳ Connect GitHub remote (`https://github.com/MensPingo`)
- [ ] ⏳ Push all code to GitHub
- [ ] ⏳ Deploy frontend to Vercel/Netlify
- [ ] ⏳ Configure domain `menspingo.in`
- [ ] ⏳ Setup SSL certificate

---

## Known Issues

| # | Issue | Status | Priority |
|---|-------|--------|----------|
| 1 | `href="#"` a11y warnings in Footer | ⏳ Minor warning | Low |
| 2 | Contact form not yet functional | ⏳ Phase 2 | Medium |
| 3 | No GitHub remote connected | ⏳ Phase 4 | High |
