document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('mobile-menu-toggle');
  const closeBtn = document.getElementById('mobile-menu-close');
  const menu = document.getElementById('mobile-menu');
  if (!toggle || !menu) return;

  function show() { menu.classList.remove('hidden'); }
  function hide() { menu.classList.add('hidden'); }

  toggle.addEventListener('click', () => {
    if (menu.classList.contains('hidden')) show(); else hide();
  });
  if (closeBtn) closeBtn.addEventListener('click', hide);

  // Close menu when clicking a link inside
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', hide));

  // Close on ESC
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') hide(); });
});
