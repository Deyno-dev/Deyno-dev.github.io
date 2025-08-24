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