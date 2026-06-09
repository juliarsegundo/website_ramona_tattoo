  function toggleFaq(el) {
  el.classList.toggle('open');
}

function filterTab(btn, category) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');

const imagens = {
  pets: [
    "imagens/Pets/Pets-1.jpg",
    "imagens/Pets/Pets-2.jpg",
    "imagens/Pets/Pets-3.jpg",
    "imagens/Pets/Pets-4.jpg",
    "imagens/Pets/Pets-5.jpg",
    "imagens/Pets/Pets-6.jpg",
    "imagens/Pets/Pets-7.jpg",
    "imagens/Pets/Pets-8.jpg",
    "imagens/Pets/Pets-9.jpg",
    "imagens/Pets/Pets-10.jpg",
    "imagens/Pets/Pets-11.jpg",
    "imagens/Pets/Pets-12.jpg",
    "imagens/Pets/Pets-13.jpg",
    "imagens/Pets/Pets-14.jpg",
    "imagens/Pets/Pets-15.jpg",
    "imagens/Pets/Pets-16.jpg",
    "imagens/Pets/Pets-17.jpg",
    "imagens/Pets/Pets-18.jpg",
    "imagens/Pets/Pets-19.jpg",
    "imagens/Pets/Pets-20.jpg",
    "imagens/Pets/Pets-21.jpg",
    "imagens/Pets/Pets-22.jpg",
    "imagens/Pets/Pets-23.jpg",
    "imagens/Pets/Pets-24.jpg",
    "imagens/Pets/Pets-25.jpg",
    "imagens/Pets/Pets-26.jpg",
    "imagens/Pets/Pets-27.jpg",
    "imagens/Pets/Pets-28.jpg",
    "imagens/Pets/Pets-29.jpg",
    "imagens/Pets/Pets-30.jpg",
    "imagens/Pets/Pets-31.jpg",
    "imagens/Pets/Pets-32.jpg",
    "imagens/Pets/Pets-33.jpg",
    "imagens/Pets/Pets-34.jpg",
    "imagens/Pets/Pets-35.jpg",
    "imagens/Pets/Pets-36.jpg"
  ],
  delicadas: [
    "imagens/Delicadas/Delicadas-1.jpg",
  ],
  aquarela: [
    "imagens/Aquarela/Aquarela-1.jpg",
  ],
  coloridas: [
    "imagens/Coloridas/Coloridas-1.jpg"
  ],
  blackwork: [
    "imagens/Blackwork/Blackwork-1.jpg"
  ],
  fineline: [
    "imagens/Linhas/Linhas-1.jpg"
  ]
};

  const grid = document.getElementById('portfolio-grid');
  grid.style.opacity = '0';
  grid.style.transform = 'translateY(10px)';
  grid.style.transition = 'all 0.3s ease';

  setTimeout(() => {
    const items = imagens[category] || imagens.pets;

    grid.innerHTML = items.map(src => `
  <div class="portfolio-item">
    <img src="${src}" loading="lazy" onclick="openModal('${src}')">
  </div>
`).join('');
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

function openModal(src) {
  const modal = document.getElementById("imageModal");
  const img = document.getElementById("modalImg");

  img.src = src;
  modal.classList.add("active");
}

function closeModal() {
  document.getElementById("imageModal").classList.remove("active");
}