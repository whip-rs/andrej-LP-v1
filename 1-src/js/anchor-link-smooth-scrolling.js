// anchor-link-smooth-scrolling.js
document.addEventListener('click', e => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const el = document.querySelector(a.getAttribute('href'));
  if (!el) return;
  e.preventDefault();
  el.scrollIntoView({ behavior: 'smooth' });
});
