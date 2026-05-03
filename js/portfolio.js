let projectsData = [];
let currentProjectFilter = 'all';

/** Resolved from the document (page URL), since fetch() is relative to the HTML page. */
const PROJECTS_JSON = '../data/projects.json';

async function loadProjects() {
    const res = await fetch(PROJECTS_JSON);
    if (!res.ok) throw new Error('Could not load projects (' + res.status + ')');
    const data = await res.json();
    projectsData = Array.isArray(data) ? data : data.projects;
    if (!Array.isArray(projectsData)) projectsData = [];
}

/** Turn JSON paths like ../images/a.jpg into absolute URLs for the current page */
function resolveAssetUrl(path) {
    if (!path) return '';
    if (/^https?:\/\//i.test(path)) return path;
    try {
        return new URL(path, window.location.href).href;
    } catch {
        return path;
    }
}

/** Safe for use inside double-quoted HTML attributes */
function escapeAttr(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/"/g, '&quot;')
        .replace(/</g, '&lt;')
        .replace(/\s+/g, ' ')
        .trim();
}

function projectCategoryLabel(type) {
    switch (type) {
        case 'fullstack':
            return 'Full stack';
        case 'frontend':
            return 'Frontend';
        case 'electrical':
            return 'Electrical engineering';
        case 'hardware':
            return 'Hardware';
        case 'software':
            return 'Software engineering';
        default:
            return 'Project';
    }
}

function projectIcon(type) {
    if (type === 'electrical' || type === 'hardware') return '⚡';
    if (type === 'fullstack') return '🧩';
    return '💻';
}

function renderProjects(filter = 'all') {
    const grid = document.getElementById('projects-grid');
    if (!grid) return;

    grid.innerHTML = '';

    if (!projectsData.length) {
        grid.innerHTML =
            '<p class="projects-empty" role="status">Projects could not be loaded. Run the site through a local server (for example <code>npx serve</code>) so <code>data/projects.json</code> can be fetched.</p>';
        return;
    }

    const filtered =
        filter === 'all' ? projectsData : projectsData.filter((p) => p.type === filter);

    filtered.forEach((project) => {
        const card = document.createElement('div');
        card.className = 'project-card';

        const icon = projectIcon(project.type);
        const category = projectCategoryLabel(project.type);
        const external = /^https?:\/\//i.test(project.link);
        const linkAttrs = external ? ' target="_blank" rel="noopener noreferrer"' : '';
        const imgSrc = resolveAssetUrl(project.image);
        const visualInner = imgSrc
            ? `<img class="project-card-thumb" src="${imgSrc}" alt="" loading="lazy" decoding="async" fetchpriority="low">`
            : `<span class="project-image-emoji">${icon}</span>`;
        const longDesc = project.longDescription ? escapeAttr(project.longDescription) : '';
        const descTitleAttr = longDesc ? ` title="${longDesc}"` : '';

        card.innerHTML = `
            <div class="project-image${imgSrc ? ' project-image--thumb' : ''}">${visualInner}</div>
            <div class="project-content">
                <div class="project-type">${category}</div>
                ${project.course ? `<div style="font-size: 0.75rem; color: var(--accent-secondary); margin-bottom: 0.25rem; font-weight: 500;">📚 ${project.course}</div>` : ''}
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description"${descTitleAttr}>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map((tag) => `<span class="project-tag">${tag}</span>`).join('')}
                </div>
                <a href="${project.link}" class="project-link"${linkAttrs}>
                    Open project →
                </a>
            </div>
        `;

        grid.appendChild(card);
    });
}

function showSection(sectionId) {
    document.querySelectorAll('.section').forEach((s) => s.classList.remove('active'));
    const target = document.getElementById(sectionId);
    if (target) target.classList.add('active');

    document.querySelectorAll('.nav-links a[data-section]').forEach((link) => {
        link.classList.toggle('active', link.dataset.section === sectionId);
    });

    if (sectionId === 'projects') {
        renderProjects(currentProjectFilter);
    }

    window.scrollTo(0, 0);
}

function filterProjects(type) {
    currentProjectFilter = type;
    document.querySelectorAll('.filter-btn[data-filter]').forEach((btn) => {
        btn.classList.toggle('active', btn.dataset.filter === type);
    });
    renderProjects(type);
}

async function initPortfolio() {
    await loadProjects().catch(function (err) {
        console.error(err);
        projectsData = [];
    });

    document.querySelectorAll('[data-section]').forEach((el) => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const id = el.dataset.section;
            if (id) showSection(id);
        });
    });

    document.querySelectorAll('.filter-btn[data-filter]').forEach((btn) => {
        btn.addEventListener('click', () => {
            filterProjects(btn.dataset.filter);
        });
    });

    renderProjects(currentProjectFilter);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
        void initPortfolio();
    });
} else {
    void initPortfolio();
}
