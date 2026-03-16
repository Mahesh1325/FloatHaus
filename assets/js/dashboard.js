/**
 * @file dashboard.js
 * @description Sensory Deprivation Float Center — Dashboard Logic
 *
 * Responsibilities:
 *  - Sidebar navigation: switches between view sections on nav item click
 *  - Role toggling: switches the sidebar between User and Admin nav groups
 *  - Skeleton loaders: simulates API data loading on initial dashboard load
 *  - Page title: updates the topbar title on section change
 *
 * How to connect to a real backend:
 *  1. Replace the skeleton loader timeout in `simulateDataLoad()` with a real fetch()
 *  2. Replace the role toggle button logic with your auth system's role check
 *  3. Pass the authenticated user's name/email into `.profile-name` / `.profile-email`
 *
 * TODO: Replace `toggle-role-btn` with server-side role detection (e.g. JWT claim check)
 * TODO: Fill `simulateDataLoad()` with real API calls to your booking backend
 */

document.addEventListener('DOMContentLoaded', () => {
    // Topbar Title
    const pageTitle = document.getElementById('page-title');

    // Sidebar Navigation
    const navItems = document.querySelectorAll('.dashboard-nav-item');
    const sections = document.querySelectorAll('.view-section');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove active classes
            navItems.forEach(n => n.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));

            // Add active class
            item.classList.add('active');

            // Show target section
            const targetId = item.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');

            // Update Title — use data-title attribute to avoid picking up badge text
            const title = item.getAttribute('data-title') || getDirectTextContent(item);
            pageTitle.textContent = title;

            // Close mobile sidebar immediately on link click
            if (window.innerWidth < 1024) {
                toggleSidebar(false);
            }

            // Simulate Data Loading if skeleton is present
            simulateDataLoad(targetId);
        });
    });

    // Helper: get only direct text content of an element, ignoring child elements (badges etc.)
    function getDirectTextContent(el) {
        let text = '';
        el.childNodes.forEach(node => {
            if (node.nodeType === Node.TEXT_NODE) {
                text += node.textContent;
            }
        });
        return text.trim();
    }

    // Mobile Sidebar Toggle
    const sidebar = document.getElementById('dashboard-sidebar');
    const sidebarToggle = document.getElementById('sidebar-toggle');
    const sidebarOverlay = document.getElementById('sidebar-overlay');

    const toggleSidebar = (forceState) => {
        const isOpen = sidebar.classList.contains('is-open');
        const newState = forceState !== undefined ? forceState : !isOpen;

        if (newState) {
            sidebar.classList.add('is-open');
            sidebarOverlay.classList.add('is-active');
        } else {
            sidebar.classList.remove('is-open');
            sidebarOverlay.classList.remove('is-active');
        }
    };

    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', () => toggleSidebar());
    }
    if (sidebarOverlay) {
        sidebarOverlay.addEventListener('click', () => toggleSidebar(false));
    }

    // Role Toggling
    const toggleRoleBtn = document.getElementById('toggle-role-btn');
    const badge = document.getElementById('current-role-badge');

    // Parse role from URL
    const urlParams = new URLSearchParams(window.location.search);
    let isAdmin = urlParams.get('role') === 'admin';

    const setRoleView = (adminView) => {
        const userGroup = document.querySelector('.nav-group-user');
        const adminGroup = document.querySelector('.nav-group-admin');

        if (!userGroup || !adminGroup) return;

        if (adminView) {
            badge.textContent = 'ADMIN';
            userGroup.style.display = 'none';
            adminGroup.style.display = 'block';
            // Click first admin link
            const firstLink = adminGroup.querySelector('.dashboard-nav-item');
            if (firstLink) firstLink.click();
        } else {
            badge.textContent = 'USER';
            adminGroup.style.display = 'none';
            userGroup.style.display = 'block';
            // Click first user link
            const firstLink = userGroup.querySelector('.dashboard-nav-item');
            if (firstLink) firstLink.click();
        }
    };



    // Set initial view
    setTimeout(() => {
        setRoleView(isAdmin);
    }, 10);

    // Data Loading Simulation
    const simulateDataLoad = (sectionId) => {
        const targetSection = document.getElementById(sectionId);
        if (!targetSection) return;

        const body = targetSection.querySelector('.dashboard-content-body');
        if (body && body.innerHTML.includes('skeleton')) {
            setTimeout(() => {
                if (sectionId === 'user-home') {
                    body.innerHTML = `
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
                            <div class="card" style="border-left: 4px solid var(--success);">
                                <h3>Upcoming Session</h3>
                                <p style="color: var(--theme-text-muted); margin-bottom: 1rem;">Oct 15, 2026 at 2:00 PM</p>
                                <button class="btn btn-outline" style="padding: 0.5rem 1rem;">Reschedule</button>
                            </div>
                            <div class="card">
                                <h3>Available Floats</h3>
                                <div style="font-size: 2.5rem; font-weight: bold; color: var(--primary);">2</div>
                                <p style="color: var(--theme-text-muted);">Expiring Jan 1, 2027</p>
                            </div>
                        </div>
                        <div class="card">
                            <h3>Welcome Back</h3>
                            <p style="color: var(--theme-text-muted);">You've floated 12 times this year. Your average session duration is 90 minutes. You consistently hit theta-states quickly. Keep it up!</p>
                        </div>
                    `;
                } else if (sectionId === 'admin-overview') {
                    body.innerHTML = `
                        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin-bottom: 2rem;">
                            <div class="card">
                                <h4 style="color: var(--theme-text-muted);">Total Bookings Today</h4>
                                <div style="font-size: 2rem; font-weight: bold;">24</div>
                            </div>
                            <div class="card">
                                <h4 style="color: var(--theme-text-muted);">Active Members</h4>
                                <div style="font-size: 2rem; font-weight: bold;">342</div>
                            </div>
                            <div class="card">
                                <h4 style="color: var(--theme-text-muted);">Monthly Revenue</h4>
                                <div style="font-size: 2rem; font-weight: bold;">$45k</div>
                            </div>
                            <div class="card">
                                <h4 style="color: var(--theme-text-muted);">Pod Utilization</h4>
                                <div style="font-size: 2rem; font-weight: bold;">88%</div>
                            </div>
                        </div>
                        <div style="display: grid; grid-template-columns: 2fr 1fr; gap: 1rem;">
                            <div class="card">
                                <h3>Revenue Chart Placeholder</h3>
                                <div style="height: 300px; background: rgba(79, 70, 229, 0.1); border: 1px dashed var(--primary); display: flex; align-items: center; justify-content: center; border-radius: 8px; margin-top: 1rem;">[ Chart.js Graphic ]</div>
                            </div>
                            <div class="card">
                                <h3>Recent Activity</h3>
                                <ul style="list-style: none; margin-top: 1rem;">
                                    <li style="padding: 0.5rem 0; border-bottom: 1px solid var(--theme-border);"><strong>Sarah M.</strong> booked a 90-min float</li>
                                    <li style="padding: 0.5rem 0; border-bottom: 1px solid var(--theme-border);"><strong>David K.</strong> cancelled session</li>
                                    <li style="padding: 0.5rem 0; border-bottom: 1px solid var(--theme-border);"><strong>Emily R.</strong> upgraded membership</li>
                                </ul>
                            </div>
                        </div>
                    `;
                }
            }, 800); // Simulate network delay
        }
    };

    // Initial Load execution
    simulateDataLoad('user-home');
});
