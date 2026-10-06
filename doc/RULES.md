# Rules & Development Standards
## Menspingo Project — Coding Guidelines

---

## 1. General Rules

- All code written in **English** (comments, variable names, class names)
- Every new feature on its own **Git branch**
- No direct commits to `main` — always use Pull Requests
- All PRs reviewed before merging

---

## 2. File Naming

| Type | Convention | Example |
|------|-----------|---------|
| React Components | PascalCase | `Navbar.jsx` |
| CSS Files | Match component | `Navbar.css` |
| Utility files | camelCase | `formatDate.js` |
| Constants | UPPER_SNAKE_CASE | `API_URL` |
| Image assets | kebab-case | `hero-bg.jpg` |

---

## 3. React Rules

- Always use **functional components** — no class components
- Use **hooks** only (`useState`, `useEffect`, `useRef`)
- Each component has its **own CSS file**
- Props must be **destructured** in function signature
- Keep components **under 200 lines**

---

## 4. CSS Rules

- Use **CSS Custom Properties** for all colors, fonts, transitions
- Never use **inline styles** in JSX (except dynamic values)
- Use BEM-like naming: `.section-title`, `.card-body`
- **Mobile-first** media queries
- No `!important` unless absolutely necessary

---

## 5. Git Commit Convention

```
feat(navbar): add mobile hamburger menu
fix(footer): remove FiTwitter undefined error
style(hero): update gradient animation
docs(readme): add deployment instructions
refactor(services): split card into sub-component
chore(deps): upgrade react-icons
```

| Type | When |
|------|------|
| `feat` | New feature |
| `fix` | Bug fix |
| `style` | CSS/UI changes |
| `docs` | Documentation |
| `refactor` | Code restructure |
| `chore` | Dependencies, configs |

---

## 6. Import Order (React files)

```jsx
// 1. React
import React, { useState } from 'react';
// 2. Third-party
import { motion } from 'framer-motion';
import { FiMail } from 'react-icons/fi';
// 3. Internal components
import Button from './Button';
// 4. Assets
import logo from '../assets/logo.jpeg';
// 5. Styles (always last)
import './Navbar.css';
```

---

## 7. Brand Rules

| Use | Value |
|-----|-------|
| Primary color | `#6c63ff` (purple) |
| Accent color | `#ff6584` (pink) |
| Background | `#0a0a0f` |
| Text primary | `#ffffff` |
| Text secondary | `#a0a0b8` |

- Always use colors via CSS variable — never hardcode
- Logo always on white background or circular badge
- Dark theme throughout — no light mode

---

## 8. Accessibility Rules

- All `<img>` must have `alt` attribute
- All interactive elements must be keyboard-focusable
- Minimum contrast ratio: **4.5:1**
- Use semantic HTML: `<nav>`, `<section>`, `<footer>`

---

## 9. Performance Rules

- Optimize images before adding to `/assets`
- Use `loading="lazy"` on below-fold images
- Keep bundle size < 500KB (gzipped)
- No unused CSS — remove dead styles regularly
