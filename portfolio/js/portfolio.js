// <!-- portfolio/js/portfolio.js (text/javascript) -->
(() => {
  // Filters
  const filterBar = document.querySelector('.filters');
  const cards = () => Array.from(document.querySelectorAll('[data-item]'));
  const setActive = (tag) => {
    document.querySelectorAll('.filter-btn')
      .forEach(b => b.classList.toggle('active', b.dataset.tag === tag));
  };
  const applyFilter = (tag) => {
    cards().forEach(el => {
      const tags = (el.dataset.tags || '').split(',');
      el.style.display = (tag === 'all' || tags.includes(tag)) ? '' : 'none';
    });
  };
  if (filterBar) {
    filterBar.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;
      const tag = btn.dataset.tag;
      setActive(tag);
      applyFilter(tag);
    });
  }
  // Load items
  const holder = document.getElementById('portfolio-holder');
  if (holder) {
    fetch('data/portfolio.json')
      .then(r => r.json())
      .then(items => {
        holder.innerHTML = items.map(p => `
          <article class="card" data-item data-tags="${(p.tags||[]).join(',')}">
            <div class="thumb">
              ${p.thumb ? `<img src="${p.thumb}" alt="${p.title} thumbnail" loading="lazy" style="max-width:100%;max-height:100%;">` : 'Thumbnail'}
            </div>
            <div class="body">
              <div class="title">${p.title}</div>
              <div class="muted">${p.oneLine || ''}</div>
              <div class="tags">${(p.tags||[]).map(t => `<span class="tag">${t}</span>`).join('')}</div>
              <div class="actions">
                ${p.detail ? `<a class="btn" href="${p.detail}">Details</a>` : ''}
                ${p.link ? `<a class="btn secondary" href="${p.link}" target="_blank" rel="noopener">GitHub</a>` : ''}
              </div>
            </div>
          </article>
        `).join('');
        // Reveal animation
        const io = new IntersectionObserver((entries) => {
          entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
        }, { threshold: .1 });
        document.querySelectorAll('.card').forEach(c => io.observe(c));
      })
      .catch(() => {
        holder.innerHTML = '<p class="muted">Failed to load portfolio.json</p>';
      });
  }
  // Search
  const searchInput = document.getElementById('project-search');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase();
      cards().forEach(el => {
        el.style.display = el.textContent.toLowerCase().includes(term) ? '' : 'none';
      });
    });
  }
  // Infinite scroll placeholder
  // Implement if needed
})();