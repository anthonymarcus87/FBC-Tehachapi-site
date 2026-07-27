// Mobile nav toggle
const toggle = document.getElementById('navToggle');
const menu = document.getElementById('navMenu');
if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', open);
  });
}

// Today's Reading widget (home page only)
// Proverb of the day matches the day of the month (Proverbs has 31 chapters)
// Psalms: five readings spaced 30 chapters apart, wrapping within the 150 Psalms
const proverbEl = document.getElementById('proverbNum');
const psalmsEl = document.getElementById('psalmNums');
if (proverbEl && psalmsEl) {
  const day = new Date().getDate(); // 1-31
  proverbEl.textContent = 'Proverbs ' + day;

  const psalmNumbers = [0, 30, 60, 90, 120].map(offset => ((day - 1 + offset) % 150) + 1);
  psalmsEl.textContent = 'Psalms ' + psalmNumbers.join(' · ');
}

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
