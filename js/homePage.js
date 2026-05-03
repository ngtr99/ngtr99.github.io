(function () {
    const roleEl = document.getElementById("hero-role");
    if (!roleEl) return;

    const roles = ["Software Engineer", "Electrical Engineer", "Hardware Engineer"];
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const intervalMs = prefersReducedMotion ? 5000 : 3200;
    const fadeMs = prefersReducedMotion ? 0 : 280;

    let index = 0;

    function showNext() {
        index = (index + 1) % roles.length;

        if (fadeMs === 0) {
            roleEl.textContent = roles[index];
            return;
        }

        roleEl.classList.add("is-changing");
        window.setTimeout(function () {
            roleEl.textContent = roles[index];
            roleEl.classList.remove("is-changing");
        }, fadeMs);
    }

    window.setInterval(showNext, intervalMs);
})();
