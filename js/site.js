document.addEventListener("DOMContentLoaded", function () {
  const nav = document.getElementById("main-nav");
  if (nav) {
    nav.innerHTML = `
      <a href="index.html">Home</a>
      <a href="projects.html">Projects</a>
      <a href="design.html">Design</a>
      <a href="about.html">About</a>
      <a href="funding.html">Funding</a>
      <a href="datasets.html">Datasets</a>
      <a href="ai_models.html">AI Models</a>
      <a href="docs/index.html">Docs</a>
    `;
  }

  // Dynamic project cards
  const container = document.getElementById("projects-container");
  if (container) {
    fetch("data/projects.json")
      .then(res => res.json())
      .then(projects => {
        container.innerHTML = projects.map(project => `
          <div class="project-card">
            <h2>${project.name}</h2>
            <p>${project.description}</p>
            ${project.link ? `<a href="${project.link}" target="_blank">View Project</a>` : ""}
          </div>
        `).join("");
      });
  }
});

(() => {
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.topnav a').forEach(a => {
    const file = a.getAttribute('href');
    if ((path === '' || path === 'index.html') && file === 'index.html') a.classList.add('active');
    else if (file === path) a.classList.add('active');
  });
  // Print resume
  const printBtn = document.querySelector('[data-print]');
  if (printBtn) printBtn.addEventListener('click', () => window.print());
})();

<!-- Add this where you want the navigation bar -->
<nav id="main-nav" class="topnav" aria-label="Top navigation"></nav>