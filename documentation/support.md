# Support Guide

## Before Asking for Help

1. **Check the documentation** — Review `installation.md`, `customization.md`, and `page-structure.md` first.
2. **Check the browser console** — Press `F12` → Console tab for JavaScript errors.
3. **Verify file paths** — All asset links use relative paths (`../assets/css/style.css`). If you move files, update paths accordingly.
4. **Clear browser cache** — Try a hard reload: `Ctrl + Shift + R` (Windows) or `Cmd + Shift + R` (Mac).

---

## Common Issues & Solutions

### Theme doesn't toggle / flash on load
- Ensure the **anti-FOUC inline script** is the first `<script>` tag in `<head>`, before any CSS links.
- Check that `main.js` loads correctly (no 404 in Network tab).

### Images not showing
- Unsplash URLs require an internet connection. For offline use, replace with local images in `assets/images/`.
- Verify the image `src` path is correct relative to the HTML file.

### Contact form not sending
- Replace the Formspree action URL with your own form ID from [formspree.io](https://formspree.io).
- The form uses `fetch` — ensure your hosting allows outbound requests.

### Dashboard menus not switching
- Ensure `dashboard.js` is loaded **before** the inline profile dropdown script at the bottom of `dashboard.html`.
- Every `data-target="section-id"` must match an existing `id="section-id"` div on the page.

### RTL layout broken
- Confirm `<html dir="rtl">` is set on the page.
- Ensure `rtl.css` is linked in the page `<head>`.

### Google Maps not loading
- Replace the `<iframe src="...">` in `contact.html` with your own embed URL from [Google Maps Embed](https://developers.google.com/maps/documentation/embed/get-started).

---

## Integration Setup

| Service | File | What to Replace |
|---------|------|----------------|
| **Formspree** | `contact.html` | `action="https://formspree.io/f/placeholder"` |
| **Mailchimp** | `index.html`, `blog.html` | `action="https://mailchimp.com/placeholder"` |
| **Stripe** | `booking.html` Step 4 | Stripe placeholder div → Stripe Elements |
| **PayPal** | `booking.html` Step 4 | `#paypal-button-container` div → PayPal JS SDK |
| **Google Maps** | `contact.html` | `<iframe src="...">` embed URL |

---

## Browser Developer Tools Quick Reference

| Task | Chrome / Edge | Firefox |
|------|-------------|---------|
| Open DevTools | `F12` | `F12` |
| Check console errors | Console tab | Console tab |
| Inspect element | Right-click → Inspect | Right-click → Inspect |
| Network requests | Network tab | Network tab |
| Mobile emulation | Toggle device toolbar icon | Responsive Design Mode |

---

## Customization Help

See [`customization.md`](customization.md) for detailed guidance on changing colors, fonts, business information, and integration endpoints.

---

## Reporting Bugs

When reporting a bug, include:
1. Browser name and version
2. Operating system
3. Steps to reproduce the issue
4. Screenshot or screen recording if possible
5. Any console errors (`F12` → Console tab)
