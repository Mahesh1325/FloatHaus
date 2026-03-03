# Changelog

All notable changes to the Float Center Template are documented here.

---

## v1.0.0 — March 3, 2026 (Initial Release)

### Added
- `index.html` — Homepage with hero, benefits, how-it-works, membership highlight, CTA
- `about.html` — Company story, mission, team placeholder
- `services.html` — Service listing with real-time availability indicators and wellness packages
- `gallery.html` — Filterable image grid (Pods / Suites / Lounge / Exterior) with lightbox
- `blog.html` — Article grid, category filter pills, newsletter CTA
- `contact.html` — Formspree-compatible form, Google Maps embed, hours/location info
- `booking.html` — 4-step booking form (service → date/time → personal info → payment)
- `dashboard.html` — User dashboard + Admin dashboard with role toggle (Switch to Admin View)
- `memberships.html` — Three-tier membership plans (Starter / Devotee / Monthly)
- `confirmation.html` — Booking confirmation page
- `404.html` — Custom 404 error page
- `coming-soon.html` — Pre-launch / maintenance page
- `assets/css/style.css` — Full design system with CSS variables, dark/light theme
- `assets/css/dark-mode.css` — Dark mode specific overrides
- `assets/css/rtl.css` — Full RTL (Right-to-Left) layout support
- `assets/js/main.js` — Theme toggle, mobile nav, system preference detection
- `assets/js/booking.js` — Multi-step form with calendar, time-slot selection, validation
- `assets/js/dashboard.js` — Sidebar nav, skeleton loaders, role switcher, data simulation
- `sitemap.xml` — XML sitemap for all public pages
- `robots.txt` — Production-ready robots config
- `documentation/` — Installation, customization, credits, changelog guides

### Design Highlights
- Teal/ocean wellness color palette — works in both dark and light themes
- No black-flash bug — inline theme script in `<head>` prevents FOUC
- Mobile-first responsive design with hamburger menu
- WCAG 2.1 AA accessibility compliance (skip links, ARIA labels, keyboard navigation)
- Scroll-triggered fade animations
- Profile dropdown with user info, quick navigation, and sign-out
- Admin dashboard sections: Overview, Booking Calendar, Membership Mgmt, Customers, Revenue, Settings

### Integrations (Placeholder Ready)
- Formspree (contact form)
- Stripe (booking payment step)
- Mailchimp / ConvertKit (newsletter)
- Google Maps Embed API (contact page)
- JSON-LD LocalBusiness structured data (SEO)
