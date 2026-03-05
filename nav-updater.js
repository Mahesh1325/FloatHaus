const fs = require('fs');
const path = require('path');

const rootNav = `            <nav id="main-nav" class="nav" aria-label="Main Navigation">
                <div class="nav-item-dropdown">
                    <span style="display: flex; align-items: center; gap: 0.25rem;">
                        Home
                        <svg class="dropdown-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </span>
                    <div class="dropdown-menu">
                        <a href="index.html" class="dropdown-item active">Home 1</a>
                        <a href="pages/home-2.html" class="dropdown-item">Home 2</a>
                    </div>
                </div>
                <a href="pages/services.html" class="nav-link">Services</a>
                <a href="pages/gallery.html" class="nav-link">Gallery</a>
                <a href="pages/about.html" class="nav-link">About</a>
                <a href="pages/contact.html" class="nav-link">Contact</a>
                <a href="pages/dashboard.html" class="nav-link">Dashboard</a>
            </nav>`;

const subNavTemplate = `            <nav id="main-nav" class="nav" aria-label="Main Navigation">
                <div class="nav-item-dropdown">
                    <span style="display: flex; align-items: center; gap: 0.25rem;">
                        Home
                        <svg class="dropdown-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </span>
                    <div class="dropdown-menu">
                        <a href="../index.html" class="dropdown-item">Home 1</a>
                        <a href="home-2.html" class="dropdown-item">Home 2</a>
                    </div>
                </div>
                <a href="services.html" class="nav-link ACTIVE_SERVICES">Services</a>
                <a href="gallery.html" class="nav-link ACTIVE_GALLERY">Gallery</a>
                <a href="about.html" class="nav-link ACTIVE_ABOUT">About</a>
                <a href="contact.html" class="nav-link ACTIVE_CONTACT">Contact</a>
                <a href="dashboard.html" class="nav-link">Dashboard</a>
            </nav>`;

function replaceNav(filePath, isRoot) {
    let content = fs.readFileSync(filePath, 'utf8');
    const navRegex = /<nav id="main-nav" class="nav" aria-label="Main Navigation">[\s\S]*?<\/nav>/;

    if (isRoot) {
        content = content.replace(navRegex, rootNav);
    } else {
        let replacement = subNavTemplate;

        replacement = replacement.replace('ACTIVE_SERVICES', filePath.includes('services.html') ? 'active' : '');
        replacement = replacement.replace('ACTIVE_GALLERY', filePath.includes('gallery.html') ? 'active' : '');
        replacement = replacement.replace('ACTIVE_ABOUT', filePath.includes('about.html') ? 'active' : '');
        replacement = replacement.replace('ACTIVE_CONTACT', filePath.includes('contact.html') ? 'active' : '');

        replacement = replacement.replace(/ class="nav-link "/g, ' class="nav-link"');

        content = content.replace(navRegex, replacement);
    }

    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Updated ' + filePath);
}

replaceNav('./index.html', true);

const pagesDir = './pages';
const files = fs.readdirSync(pagesDir).filter(f => f.endsWith('.html') && f !== 'dashboard.html');

for (const f of files) {
    if (fs.existsSync(path.join(pagesDir, f))) {
        replaceNav(path.join(pagesDir, f), false);
    }
}
