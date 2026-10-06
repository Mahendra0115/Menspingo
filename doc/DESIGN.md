# Design Document
## Menspingo Website — UI/UX Design System

---

## 1. Design Theme

**Style:** Dark theme, Glassmorphism, AI Startup  
**Mood:** Professional, Modern, Futuristic, Trustworthy  
**Inspiration:** Linear.app, Vercel, Stripe

---

## 2. Color Palette

| Name | Variable | Hex | Usage |
|------|----------|-----|-------|
| Primary | `--primary` | `#6c63ff` | Buttons, accents, highlights |
| Secondary | `--secondary` | `#ff6584` | Secondary accents, badges |
| Purple Accent | `--accent` | `#a855f7` | Gradients, glow effects |
| BG Primary | `--bg-primary` | `#0a0a0f` | Main background |
| BG Secondary | `--bg-secondary` | `#12121a` | Cards, sections |
| BG Tertiary | `--bg-tertiary` | `#1a1a2e` | Elevated surfaces |
| Glass BG | `--glass-bg` | `rgba(255,255,255,0.05)` | Glassmorphism cards |
| Glass Border | `--glass-border` | `rgba(255,255,255,0.1)` | Card borders |
| Text Primary | `--text-primary` | `#ffffff` | Headings, main text |
| Text Secondary | `--text-secondary` | `#a0a0b8` | Subtext, captions |

---

## 3. Typography

| Role | Font | Weight | Size |
|------|------|--------|------|
| Headings | Space Grotesk | 700–800 | 2.5rem–4rem |
| Body | Inter | 400–500 | 0.9rem–1rem |
| Code/Tech | Monospace | 400 | 0.85rem |

### Font Import (index.css)
```css
@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap');
```

---

## 4. Gradients

```css
--gradient-1: linear-gradient(135deg, #6c63ff, #a855f7)   /* Primary */
--gradient-2: linear-gradient(135deg, #ff6584, #ff8c69)   /* Secondary */
--gradient-3: linear-gradient(135deg, #0a0a0f, #12121a)   /* Background */
```

---

## 5. Spacing System

| Token | Value | Usage |
|-------|-------|-------|
| xs | 4px | Icon padding |
| sm | 8px | Small gaps |
| md | 16px | Default gap |
| lg | 24px | Card padding |
| xl | 40px | Section padding |
| 2xl | 80px | Section vertical padding |

---

## 6. Border Radius

| Element | Radius |
|---------|--------|
| Buttons | 8px |
| Cards | 16px |
| Badges | 50px (pill) |
| Logo | 50% (circle) |
| Input fields | 10px |

---

## 7. Shadows & Glow

```css
/* Card hover glow */
box-shadow: 0 20px 60px rgba(108, 99, 255, 0.2);

/* Button glow */
box-shadow: 0 8px 30px rgba(108, 99, 255, 0.5);

/* Logo ring */
box-shadow: 0 0 0 2px rgba(108, 99, 255, 0.4),
            0 4px 16px rgba(108, 99, 255, 0.3);
```

---

## 8. Component Design

### Navbar
- Height: 70px (normal), 58px (scrolled)
- Background: transparent → `rgba(10,10,15,0.95)` on scroll
- Backdrop blur: 20px

### Cards (Services, Portfolio)
- Background: `var(--glass-bg)`
- Border: `1px solid var(--glass-border)`
- Border radius: 16px
- Hover: translateY(-8px) + glow

### Buttons
- Primary: gradient background, white text
- Outline: transparent bg, gradient border
- Hover: scale(1.03), stronger glow

### Section Layout
- Max width: 1200px (`.container`)
- Section padding: 100px top/bottom
- Grid: 2–4 columns depending on content

---

## 9. Animations

| Animation | Duration | Easing |
|-----------|----------|--------|
| Hover transitions | 0.3s | ease |
| Page scroll | 800ms | smooth |
| Blob float | 8s | ease-in-out infinite |
| Orbit rotation | 20s | linear infinite |
| Marquee scroll | 30s | linear infinite |
| Card fade-in | 0.6s | ease-out |

---

## 10. Responsive Breakpoints

| Breakpoint | Width | Layout |
|------------|-------|--------|
| Mobile | < 768px | 1 column, hamburger menu |
| Tablet | 768px–1024px | 2 columns |
| Desktop | > 1024px | 3–4 columns |
