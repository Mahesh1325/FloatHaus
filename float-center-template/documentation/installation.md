# Installation Guide — Sensory Deprivation Float Center Template

## Requirements
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A code editor (VS Code recommended)
- A local server OR simply open files directly in browser

## Quick Start

### Option A — Direct Browser (No Server)
1. Download or clone the template folder
2. Open `pages/index.html` in your browser
3. That's it — all assets use relative paths

### Option B — Local Development Server (Recommended)
```bash
# Using VS Code Live Server extension (recommended)
# Install "Live Server" from VS Code Extensions
# Right-click index.html → "Open with Live Server"

# OR using Python's built-in server
cd float-center-template
python -m http.server 8080
# Open http://localhost:8080/pages/index.html
```

### Option C — Deploy to Hosting
Upload all files to your hosting provider preserving the folder structure:
```
float-center-template/
├── assets/
├── pages/
├── documentation/
├── sitemap.xml
├── robots.txt
└── README.md
```

## File Structure
```
float-center-template/
├── assets/
│   ├── css/
│   │   ├── style.css        ← Main styles & CSS variables
│   │   ├── dark-mode.css    ← Dark mode specific overrides
│   │   └── rtl.css          ← Right-to-left language support
│   ├── js/
│   │   ├── main.js          ← Theme toggle, mobile menu
│   │   ├── booking.js       ← Multi-step booking form logic
│   │   ├── dashboard.js     ← Dashboard sidebar, role toggle
│   │   └── plugins/         ← (Place third-party JS here)
│   ├── images/              ← (Place your images here)
│   └── fonts/               ← (Place custom fonts here)
├── pages/
│   ├── index.html           ← Homepage
│   ├── about.html           ← About Us
│   ├── services.html        ← Services & availability
│   ├── gallery.html         ← Image gallery with lightbox
│   ├── blog.html            ← Blog & insights
│   ├── contact.html         ← Contact form & map
│   ├── booking.html         ← Multi-step booking form
│   ├── dashboard.html       ← User + Admin dashboard
│   ├── memberships.html     ← Membership plans
│   ├── confirmation.html    ← Booking confirmation
│   ├── 404.html             ← Custom 404 error page
│   └── coming-soon.html     ← Maintenance/pre-launch page
├── documentation/
│   ├── index.html           ← Documentation home
│   ├── installation.md      ← This file
│   ├── customization.md     ← Customization guide
│   ├── credits.md           ← Third-party credits
│   └── changelog.md         ← Version history
├── sitemap.xml
└── robots.txt
```

## Dependencies
- **Google Fonts**: Inter + Playfair Display (loaded via CDN)
- **No npm, no build step** — pure HTML/CSS/JS

## Browser Support
| Browser | Version |
|---------|---------|
| Chrome  | 90+     |
| Firefox | 88+     |
| Safari  | 14+     |
| Edge    | 90+     |
