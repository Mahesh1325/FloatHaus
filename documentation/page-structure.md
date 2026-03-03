# Page Structure — Sensory Deprivation Float Center Template

Each page follows a consistent layout: `<header>` → `<main>` → `<footer>` with shared navigation and theme toggle.

---

## Public Pages

### `pages/index.html` — Homepage
**Purpose:** Primary landing page. Establishes brand identity and drives bookings.

**Sections:**
1. **Hero** — Full-viewport background, headline, Book Now + Learn More CTAs
2. **Benefits Bar** — 3 key points (stress relief, pain management, mental clarity) with SVG icons
3. **How It Works** — 3-step float walkthrough (Book → Arrive → Float)
4. **Services Highlight** — 3 service card previews linking to services.html
5. **About Teaser** — Short brand story with image + CTA to about.html
6. **Membership CTA** — Pricing teaser card linking to memberships.html
7. **Testimonials** — 3 client quotes
8. **Footer** — Logo, navigation columns, newsletter form, copyright

**Key Integrations:** JSON-LD LocalBusiness schema, Mailchimp newsletter form

---

### `pages/about.html` — About Us
**Purpose:** Company story, mission statement, and team introduction.

**Sections:**
1. Page Hero (title + subtitle)
2. Mission & Story narrative
3. Team placeholder cards
4. Values / Differentiators
5. CTA linking to booking.html

---

### `pages/services.html` — Services
**Purpose:** Lists all float therapy services with pricing, availability, and details.

**Sections:**
1. Page Hero
2. Service Cards (Standard Float, Deep Sensory, Couples Float, etc.) — each with price, duration, real-time availability indicator
3. Wellness Packages / Add-ons
4. Booking CTA

---

### `pages/gallery.html` — Gallery
**Purpose:** Visual showcase of the float center space. Filterable by category.

**Sections:**
1. Page Hero
2. Filter Pills (All / Pods / Suites / Lounge / Exterior)
3. Masonry-style Image Grid with hover overlays
4. Lightbox (opens on click)

---

### `pages/blog.html` — Blog
**Purpose:** Wellness content hub for SEO and audience engagement.

**Sections:**
1. Page Hero
2. Featured Post Card (large)
3. Category Filter Pills
4. Article Grid (6 posts)
5. Newsletter signup CTA

---

### `pages/contact.html` — Contact
**Purpose:** Contact form, location information, and embedded map.

**Sections:**
1. Page Hero
2. Two-column layout:
   - **Left:** Formspree contact form with JS validation
   - **Right:** Address, phone, email, hours, Google Maps embed

**Key Integrations:** Formspree form backend, Google Maps Embed API

---

### `pages/memberships.html` — Memberships
**Purpose:** Membership plan comparison and sign-up CTAs.

**Sections:**
1. Page Hero
2. Three-tier pricing cards (Starter Pack / Devotee / Unlimited Monthly)
3. Features comparison list
4. FAQ accordion

---

## Booking Flow Pages

### `pages/booking.html` — Booking Form
**Purpose:** 4-step guided booking experience.

**Steps:**
1. **Service Selection** — Click-to-select service cards
2. **Date & Time** — Interactive mini-calendar + time slot grid (real-time availability mock)
3. **Personal Info** — Name, email, phone, special requests
4. **Payment** — Stripe card placeholder + PayPal Smart Button placeholder

**Key Integrations:** `booking.js`, Stripe Elements, PayPal JS SDK

---

### `pages/confirmation.html` — Booking Confirmation
**Purpose:** Post-booking success page. Reads `sessionStorage` for booking details.

**Sections:**
1. Success icon + headline
2. Booking summary (date, time, service from session data)
3. Pre-float reminder checklist
4. CTAs: Add to Calendar / Back to Home

---

## Utility Pages

### `pages/dashboard.html` — User & Admin Dashboard
**Purpose:** Authenticated user portal. Toggle between User and Admin view.

**User Sections:** Overview, Booking History, Membership, Saved Items, Messages, Pre-Float Info, Profile, Settings, Logout

**Admin Sections:** Overview/Stats, User Management, Content Management, Bookings Calendar, Notifications, Memberships, Customers, Revenue, Settings

**Key Files:** `dashboard.js` (sidebar, role toggle, skeleton loaders), inline profile dropdown JS

---

### `pages/404.html` — Custom 404 Error
**Purpose:** Friendly error page for broken URLs. Includes navigation options back to key pages.

---

### `pages/coming-soon.html` — Coming Soon / Maintenance
**Purpose:** Pre-launch placeholder or maintenance mode screen.

**Sections:**
1. Countdown timer (JavaScript)
2. Tagline + brand name
3. Newsletter signup for launch notification

---

## Shared Components

| Component | Location | Notes |
|-----------|----------|-------|
| Navigation | All pages `<header>` | Logo, nav links, theme toggle, mobile hamburger |
| Footer | All pages `<footer>` | Links, newsletter form, copyright year (auto-updated by JS) |
| Skip Link | All pages `<body>` start | WCAG 2.1 AA accessibility |
| Anti-FOUC Script | All pages `<head>` | Prevents dark/light mode flash on page load |
