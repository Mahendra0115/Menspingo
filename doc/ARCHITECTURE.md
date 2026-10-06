# Architecture Document
## Menspingo Website — Technical Architecture

---

## 1. Tech Stack

| Layer | Technology | Version |
|-------|-----------|---------|
| Frontend Framework | React JS | 18.x |
| Routing | React Router DOM | 6.x |
| Animations | Framer Motion | 10.x |
| Scroll | React Scroll | 1.x |
| Type Animation | React Type Animation | 3.x |
| Icons | React Icons (Feather) | 4.x |
| Styling | Pure CSS (Custom Properties) | CSS3 |
| Build Tool | Create React App / Webpack | 5.x |
| Package Manager | npm | 9.x |

---

## 2. Project Structure

```
menspingo/
├── public/
│   └── index.html
├── src/
│   ├── assets/
│   │   └── logo.jpeg
│   ├── components/
│   │   ├── Navbar.jsx + Navbar.css
│   │   ├── Hero.jsx + Hero.css
│   │   ├── Services.jsx + Services.css
│   │   ├── Technologies.jsx + Technologies.css
│   │   ├── About.jsx + About.css
│   │   ├── Portfolio.jsx + Portfolio.css
│   │   ├── Contact.jsx + Contact.css
│   │   └── Footer.jsx + Footer.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── doc/
│   ├── PRD.md
│   ├── ARCHITECTURE.md
│   ├── RULES.md
│   ├── DESIGN.md
│   ├── TASK.md
│   └── MEMORY.md
└── package.json
```

---

## 3. Component Tree

```
App.js
├── Navbar          (fixed, z-index: 1000)
├── Hero            (section id="hero")
├── Services        (section id="services")
├── Technologies    (section id="technologies")
├── About           (section id="about")
├── Portfolio       (section id="portfolio")
├── Contact         (section id="contact")
└── Footer
```

---

## 4. CSS Architecture

### Global Variables (index.css)
```css
--primary: #6c63ff
--secondary: #ff6584
--bg-primary: #0a0a0f
--bg-secondary: #12121a
--glass-bg: rgba(255,255,255,0.05)
--gradient-1: linear-gradient(135deg, #6c63ff, #a855f7)
```

### Design Patterns
- **Glassmorphism** — backdrop-filter: blur() on cards/navbar
- **CSS Grid** — Section layouts
- **CSS Flexbox** — Component alignment
- **Keyframe Animations** — Hero blobs, orbit rings, marquee

---

## 5. Future Backend (Planned)

| Service | Technology |
|---------|-----------|
| REST API | Spring Boot (Java) |
| ORM | Hibernate |
| Microservices | Node.js + NestJS |
| SSR/SEO | Next.js |
| Database | MySQL / PostgreSQL |
| Email | SendGrid / SMTP |

---

## 6. Deployment Plan

| Layer | Platform |
|-------|---------|
| Frontend | Vercel / Netlify |
| Backend | AWS EC2 / Railway |
| Database | AWS RDS |
| Domain | menspingo.in |
| SSL | Let's Encrypt |
