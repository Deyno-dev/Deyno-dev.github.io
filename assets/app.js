document.addEventListener('DOMContentLoaded', () => {
  const year = new Date().getFullYear();
  document.getElementById('y').textContent = year;

  const openBtn = document.getElementById('openSidebar');
  const closeBtn = document.getElementById('closeSidebar');
  const sidebar = document.getElementById('sidebar');
  const backdrop = document.getElementById('sidebar-backdrop');

  openBtn.addEventListener('click', () => {
    sidebar.style.right = '0';
    backdrop.style.display = 'block';
  });

  closeBtn.addEventListener('click', () => {
    sidebar.style.right = '-300px';
    backdrop.style.display = 'none';
  });

  backdrop.addEventListener('click', () => {
    sidebar.style.right = '-300px';
    backdrop.style.display = 'none';
  });
});
