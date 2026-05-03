const PROJECTS_JSON = '../data/projects.json';

function resolveAssetUrl(path) {
    if (!path) return '';
    if (/^https?:\/\//i.test(path)) return path;
    try {
        return new URL(path, window.location.href).href;
    } catch {
        return path;
    }
}

function normalizeProjects(data) {
    if (Array.isArray(data)) return data;
    if (data && Array.isArray(data.projects)) return data.projects;
    return [];
}

function renderProjectCard(project, container) {
    const wrap = document.createElement('div');
    wrap.className = 'project-title';

    const link = document.createElement('a');
    link.href = project.link || '#';
    if (/^https?:\/\//i.test(project.link)) {
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
    }

    if (project.image) {
        const img = document.createElement('img');
        img.src = resolveAssetUrl(project.image);
        img.alt = project.title ? `Screenshot: ${project.title}` : '';
        img.loading = 'lazy';
        link.appendChild(img);
    }

    wrap.appendChild(link);

    const heading = document.createElement('h1');
    heading.textContent = project.title || 'Untitled';
    wrap.appendChild(heading);

    const stack = document.createElement('p');
    stack.textContent = Array.isArray(project.tags) ? project.tags.join(', ') : '';
    wrap.appendChild(stack);

    container.appendChild(wrap);
}

(async function initProjectPage() {
    const root = document.getElementById('projects-root');
    if (!root) return;

    try {
        const res = await fetch(PROJECTS_JSON);
        if (!res.ok) throw new Error(String(res.status));
        const data = await res.json();
        const projects = normalizeProjects(data);

        root.innerHTML = '';

        if (!projects.length) {
            root.innerHTML =
                '<p class="projects-page-empty">No projects found. Check <code>data/projects.json</code>.</p>';
            return;
        }

        projects.forEach((p) => renderProjectCard(p, root));
    } catch (e) {
        console.error(e);
        root.innerHTML =
            '<p class="projects-page-empty">Could not load projects. Use a local server (for example <code>npx serve</code>) so <code>data/projects.json</code> can load.</p>';
    }
})();
