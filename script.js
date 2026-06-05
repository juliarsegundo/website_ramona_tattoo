  function toggleFaq(el) {
  el.classList.toggle('open');
}

function filterTab(btn, category) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');

const placeholder = ['📷','📷','📷','📷','📷','📷'];

const emojis = {
  pets: placeholder,
  aquarela: placeholder,
  delicadas: placeholder,
  coloridas: placeholder,
  blackwork: placeholder,
  fineline: placeholder,
};

  const grid = document.getElementById('portfolio-grid');
  grid.style.opacity = '0';
  grid.style.transform = 'translateY(10px)';
  grid.style.transition = 'all 0.3s ease';

  setTimeout(() => {
    const items = emojis[category] || emojis.pets;
    grid.innerHTML = items.map(e => `<div class="portfolio-item">${e}</div>`).join('');
    grid.style.opacity = '1';
    grid.style.transform = 'translateY(0)';
  }, 250);
}

const menuBtn = document.querySelector('.menu-btn');
const mobileMenu = document.querySelector('.mobile-menu');

if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
  });
}

const observer = new IntersectionObserver(entries => {
  const sticky = document.querySelector('.sticky-cta');
  if (!sticky) return;

  if (entries[0].isIntersecting) {
    sticky.style.transform = 'translateY(120%)';
  } else {
    sticky.style.transform = 'translateY(0)';
  }
}, { threshold: 0.1 });

const ctaBanner = document.querySelector('.cta-banner');
const stickyCta = document.querySelector('.sticky-cta');

if (ctaBanner && stickyCta) {
  observer.observe(ctaBanner);
  stickyCta.style.transition = 'transform 0.3s ease';
}

const nav = document.querySelector('.main-nav');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

function toggleMoreFaq() {
  const extras = document.querySelectorAll('.extra-faq');
  const btn = document.querySelector('.see-more');

  const isHidden = extras[0].style.display === '' || extras[0].style.display === 'none';

  extras.forEach(el => {
    el.style.display = isHidden ? 'block' : 'none';
  });

  btn.textContent = isHidden
    ? 'Ver menos perguntas ↑'
    : 'Ver todas as perguntas →';
}