# Customization Guide — Sensory Deprivation Float Center Template

## 1. Changing Colors

All colors are defined as CSS variables in `assets/css/style.css` at the top of the file.

```css
/* ---- Dark Theme (default) ---- */
:root, [data-theme="dark"] {
  --primary:       #0d9488;  /* Main teal — change this for brand color */
  --primary-dark:  #0f766e;
  --accent-dark:   #5eead4;  /* Hover/accent color */
  --bg-dark:       #0a0f0e;  /* Page background */
  --surface-dark:  #111918;  /* Card/panel background */
}

/* ---- Light Theme ---- */
[data-theme="light"] {
  --primary:    #0d9488;
  --bg-light:   #f0fdf9;    /* Page background in light mode */
  --surface-light: #ffffff; /* Card background in light mode */
}
```

To change the brand color, replace `#0d9488` with your hexadecimal color.

## 2. Changing Fonts

Fonts are loaded from Google Fonts in each HTML page's `<head>`:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600
  &family=Playfair+Display:wght@500;600;700&display=swap" rel="stylesheet">
```

Replace `Inter` and `Playfair+Display` with your desired fonts. Then update variables in `style.css`:

```css
:root {
  --font-sans:  'Inter', sans-serif;     /* Body text */
  --font-serif: 'Playfair Display', serif; /* Headings */
}
```

## 3. Replacing Business Information

Search for these placeholder values across all HTML files and replace them:

| Placeholder | Replace with |
|-------------|-------------|
| `Sensory Deprivation Float Center` | Your business name |
| `123 Float Way, Zen City, CA 90210` | Your address |
| `+1-800-FLOAT-NOW` | Your phone number |
| `hello@floatcenter.example.com` | Your email |
| `https://example.com` | Your domain |
| `FLOAT it` | Your logo text or replace with `<img>` tag |

## 4. Replacing Images

All images use Unsplash URLs. Replace with your own:

```html
<!-- Replace this: -->
<img src="https://images.unsplash.com/photo-xxx..." alt="...">

<!-- With your own: -->
<img src="../assets/images/your-photo.jpg" alt="Descriptive alt text">
```

Place your images inside `assets/images/`.

## 5. Integrations

### Formspree (Contact Form)
In `contact.html`, find:
```html
<form action="https://formspree.io/f/placeholder" method="POST">
```
Replace `placeholder` with your Formspree form ID from [formspree.io](https://formspree.io).

### Google Maps
In `contact.html`, find the `<iframe>` tag and replace the `src` with your own embed URL from [Google Maps Embed API](https://developers.google.com/maps/documentation/embed).

### Stripe Payments
In `booking.html` Step 4 (Payment), replace the Stripe placeholder div with your actual Stripe Elements integration.

### Newsletter (Mailchimp/ConvertKit)
In `blog.html` and `index.html`, find the newsletter form and replace the `action` URL with your Mailchimp or ConvertKit form endpoint.

## 6. RTL (Right-to-Left) Languages

To enable RTL layout, add `dir="rtl"` to the `<html>` tag and set the appropriate language:

```html
<html lang="ar" dir="rtl" data-theme="dark">
```

The `assets/css/rtl.css` file contains all RTL overrides and is linked automatically.

## 7. SEO

Update the following in each page's `<head>`:
- `<title>` — Keep under 60 characters
- `<meta name="description">` — 150–160 characters
- JSON-LD structured data block — update business name, URL, address
- `sitemap.xml` — Replace `https://example.com` with your domain
- `robots.txt` — Replace `https://example.com` with your domain
