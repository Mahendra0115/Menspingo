# Memory — Project Context & Notes
## Menspingo Website — Persistent Knowledge Base

---

## 1. Company Info

| Field | Value |
|-------|-------|
| **Company Name** | Menspingo (website) / MensaPingo Tech (LinkedIn) |
| **Email — General** | info@menspingo.in |
| **Email — Contact** | contact@menspingo.in |
| **Email — Careers** | hr@menspingo.in |
| **Phone** | +91 91061 40115 |
| **GitHub** | https://github.com/MensPingo |
| **LinkedIn** | https://www.linkedin.com/company/mensapingo-tech/ |
| **Domain** | menspingo.in |

---

## 2. Project Locations

| Item | Path |
|------|------|
| **Project Root** | `/Users/mahendrasingh/Documents/Developer/Projects/menspingo` |
| **Source Code** | `/src/` |
| **Components** | `/src/components/` |
| **Assets** | `/src/assets/` |
| **Logo File** | `/src/assets/logo.jpeg` |
| **Original Logo** | `~/Downloads/mensapingo_tech_logo.jpeg` |
| **Documentation** | `/doc/` |

---

## 3. Logo Details

- **File:** `mensapingo_tech_logo.jpeg`
- **Format:** JPEG (no transparency)
- **Appearance:** Light grey/white background, dark navy "menspingo" text, purple WiFi-like signal icon on the "o"
- **Usage in Navbar:** 44×44px circle, `object-fit: cover`, white bg, purple ring shadow
- **Usage in Footer:** Same as Navbar (44×44px circle, identical style)

---

## 4. Known Technical Constraints

| Constraint | Detail |
|------------|--------|
| `FiBrain` not available | Use `FiCpu` instead — react-icons version limitation |
| `FiTwitter` removed | No Twitter account — do not add Twitter icon |
| JPEG logo | Cannot have transparency — use white bg wrapper |
| No GitHub remote | Local git only — remote not yet connected |

---

## 5. Design Decisions Made

| Decision | Reason |
|----------|--------|
| Dark theme only | AI startup professional look |
| Glassmorphism cards | Modern, premium feel |
| Purple (#6c63ff) as primary | Unique, memorable brand color |
| Circular logo | More professional than square on dark bg |
| White pill/circle bg for logo | JPEG has white bg — needed for dark navbar |
| Removed "Made with React JS & Spring Boot" | User request — footer cleaner |

---

## 6. Git Status

| Field | Value |
|-------|-------|
| **Branch** | `main` |
| **Last Commit** | `bc23790` — "Initialize project using Create React App" |
| **Remote** | ❌ Not connected |
| **Uncommitted files** | All components, assets, styles (never committed after CRA init) |

---

## 7. Dev Server

- **Start command:** `npm start` (in project root)
- **URL:** `http://localhost:3000`
- **Port:** 3000

---

## 8. Session History (Key Events)

| Date | Event |
|------|-------|
| Sep 2026 | Project created with Create React App |
| Sep 2026 | All 8 components built (Navbar to Footer) |
| Sep 2026 | Real contact details added |
| Sep 2026 | Company logo added (circular, both Navbar + Footer) |
| Sep 2026 | FiTwitter bug fixed, "Made with..." text removed |
| Oct 2026 | Documentation folder created |

---

## 9. Pending Decisions

- [ ] Should contact form use EmailJS (no backend) or Spring Boot API?
- [ ] Which hosting platform: Vercel vs Netlify vs AWS?
- [ ] Should portfolio show real projects or keep placeholders for now?
- [ ] When to push to GitHub? (`https://github.com/MensPingo`)
