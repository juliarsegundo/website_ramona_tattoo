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
    "imagens/Delicadas/Delicadas-2.jpg",
    "imagens/Delicadas/Delicadas-3.jpg",
    "imagens/Delicadas/Delicadas-4.jpg",
    "imagens/Delicadas/Delicadas-6.jpg",
    "imagens/Delicadas/Delicadas-7.jpg",
    "imagens/Delicadas/Delicadas-8.jpg",
    "imagens/Delicadas/Delicadas-9.jpg",
    "imagens/Delicadas/Delicadas-10.jpg",
    "imagens/Delicadas/Delicadas-11.jpg",
    "imagens/Delicadas/Delicadas-12.jpg",
    "imagens/Delicadas/Delicadas-13.jpg",
    "imagens/Delicadas/Delicadas-14.jpg",
    "imagens/Delicadas/Delicadas-15.jpg",
    "imagens/Delicadas/Delicadas-16.jpg",
    "imagens/Delicadas/Delicadas-17.jpg",
    "imagens/Delicadas/Delicadas-18.jpg",
    "imagens/Delicadas/Delicadas-19.jpg",
    "imagens/Delicadas/Delicadas-20.jpg",
    "imagens/Delicadas/Delicadas-21.jpg",
    "imagens/Delicadas/Delicadas-23.jpg",
    "imagens/Delicadas/Delicadas-24.jpg",
    "imagens/Delicadas/Delicadas-25.jpg",
    "imagens/Delicadas/Delicadas-26.jpg",
    "imagens/Delicadas/Delicadas-27.jpg",
    "imagens/Delicadas/Delicadas-28.jpg",
    "imagens/Delicadas/Delicadas-29.jpg"
  ],
  aquarela: [
    "imagens/Aquarela/Aquarela-1.jpg",
    "imagens/Aquarela/Aquarela-2.jpg",
    "imagens/Aquarela/Aquarela-3.jpg",
    "imagens/Aquarela/Aquarela-4.jpg",
    "imagens/Aquarela/Aquarela-5.jpg",
    "imagens/Aquarela/Aquarela-6.jpg",
    "imagens/Aquarela/Aquarela-7.jpg",
    "imagens/Aquarela/Aquarela-8.jpg",
    "imagens/Aquarela/Aquarela-9.jpg",
    "imagens/Aquarela/Aquarela-10.jpg",
    "imagens/Aquarela/Aquarela-11.jpg",
    "imagens/Aquarela/Aquarela-12.jpg",
    "imagens/Aquarela/Aquarela-13.jpg",
    "imagens/Aquarela/Aquarela-14.jpg",
    "imagens/Aquarela/Aquarela-15.jpg",
    "imagens/Aquarela/Aquarela-16.jpg",
    "imagens/Aquarela/Aquarela-17.jpg",
    "imagens/Aquarela/Aquarela-18.jpg",
    "imagens/Aquarela/Aquarela-19.jpg",
    "imagens/Aquarela/Aquarela-20.jpg",
    "imagens/Aquarela/Aquarela-21.jpg",
    "imagens/Aquarela/Aquarela-22.jpg",
    "imagens/Aquarela/Aquarela-23.jpg",
    "imagens/Aquarela/Aquarela-24.jpg",
    "imagens/Aquarela/Aquarela-25.jpg",
    "imagens/Aquarela/Aquarela-26.jpg",
    "imagens/Aquarela/Aquarela-27.jpg",
    "imagens/Aquarela/Aquarela-28.jpg",
    "imagens/Aquarela/Aquarela-29.jpg",
    "imagens/Aquarela/Aquarela-30.jpg",
    "imagens/Aquarela/Aquarela-31.jpg",
    "imagens/Aquarela/Aquarela-32.jpg",
    "imagens/Aquarela/Aquarela-33.jpg"
  ],
  coloridas: [
    "imagens/Coloridas/Coloridas-1.jpg",
    "imagens/Coloridas/Coloridas-2.jpg",
    "imagens/Coloridas/Coloridas-3.jpg",
    "imagens/Coloridas/Coloridas-4.jpg",
    "imagens/Coloridas/Coloridas-5.jpg",
    "imagens/Coloridas/Coloridas-6.jpg",
    "imagens/Coloridas/Coloridas-7.jpg",
    "imagens/Coloridas/Coloridas-8.jpg",
    "imagens/Coloridas/Coloridas-9.jpg",
    "imagens/Coloridas/Coloridas-10.jpg",
    "imagens/Coloridas/Coloridas-11.jpg",
    "imagens/Coloridas/Coloridas-12.jpg",
    "imagens/Coloridas/Coloridas-13.jpg",
    "imagens/Coloridas/Coloridas-14.jpg",
    "imagens/Coloridas/Coloridas-15.jpg",
    "imagens/Coloridas/Coloridas-16.jpg",
    "imagens/Coloridas/Coloridas-17.jpg",
    "imagens/Coloridas/Coloridas-18.jpg",
    "imagens/Coloridas/Coloridas-19.jpg",
    "imagens/Coloridas/Coloridas-20.jpg",
    "imagens/Coloridas/Coloridas-21.jpg",
    "imagens/Coloridas/Coloridas-22.jpg",
    "imagens/Coloridas/Coloridas-23.jpg",
    "imagens/Coloridas/Coloridas-24.jpg",
    "imagens/Coloridas/Coloridas-25.jpg",
    "imagens/Coloridas/Coloridas-26.jpg"
  ],
  blackwork: [
    "imagens/Blackwork/Blackwork-1.jpg",
    "imagens/Blackwork/Blackwork-2.jpg",
    "imagens/Blackwork/Blackwork-3.jpg",
    "imagens/Blackwork/Blackwork-4.jpg",
    "imagens/Blackwork/Blackwork-5.jpg",
    "imagens/Blackwork/Blackwork-6.jpg",
    "imagens/Blackwork/Blackwork-7.jpg",
    "imagens/Blackwork/Blackwork-8.jpg",
    "imagens/Blackwork/Blackwork-9.jpg",
    "imagens/Blackwork/Blackwork-10.jpg",
    "imagens/Blackwork/Blackwork-11.jpg",
    "imagens/Blackwork/Blackwork-12.jpg",
    "imagens/Blackwork/Blackwork-13.jpg",
    "imagens/Blackwork/Blackwork-14.jpg",
    "imagens/Blackwork/Blackwork-15.jpg",
    "imagens/Blackwork/Blackwork-16.jpg",
    "imagens/Blackwork/Blackwork-17.jpg",
    "imagens/Blackwork/Blackwork-18.jpg",
    "imagens/Blackwork/Blackwork-19.jpg",
    "imagens/Blackwork/Blackwork-20.jpg"
  ],
  fineline: [
    "imagens/Linhas/Linhas-1.jpg",
    "imagens/Linhas/Linhas-2.jpg",
    "imagens/Linhas/Linhas-3.jpg",
    "imagens/Linhas/Linhas-4.jpg",
    "imagens/Linhas/Linhas-5.jpg",
    "imagens/Linhas/Linhas-6.jpg",
    "imagens/Linhas/Linhas-7.jpg",
    "imagens/Linhas/Linhas-8.jpg",
    "imagens/Linhas/Linhas-9.jpg",
    "imagens/Linhas/Linhas-10.jpg",
    "imagens/Linhas/Linhas-11.jpg",
    "imagens/Linhas/Linhas-12.jpg",
    "imagens/Linhas/Linhas-13.jpg",
    "imagens/Linhas/Linhas-14.jpg",
    "imagens/Linhas/Linhas-15.jpg",
    "imagens/Linhas/Linhas-16.jpg",
    "imagens/Linhas/Linhas-17.jpg",
    "imagens/Linhas/Linhas-18.jpg",
    "imagens/Linhas/Linhas-19.jpg",
    "imagens/Linhas/Linhas-20.jpg",
    "imagens/Linhas/Linhas-21.jpg",
    "imagens/Linhas/Linhas-22.jpg",
    "imagens/Linhas/Linhas-23.jpg",
    "imagens/Linhas/Linhas-24.jpg",
    "imagens/Linhas/Linhas-26.jpg",
    "imagens/Linhas/Linhas-27.jpg",
    "imagens/Linhas/Linhas-28.jpg",
    "imagens/Linhas/Linhas-29.jpg",
    "imagens/Linhas/Linhas-30.jpg"
  ]
};

  const grid = document.getElementById('portfolio-grid');
  grid.style.opacity = '0';
  grid.style.transform = 'translateY(10px)';
  grid.style.transition = 'all 0.3s ease';

  setTimeout(() => {
    const items = imagens[category] || imagens.pets;

    grid.innerHTML = items.map((src, index) => `
      <div class="portfolio-item ${index >= 12 ? 'portfolio-item hidden-item' : 'portfolio-item show-item'}">
        <img src="${src}" loading="lazy" onclick="openModal('${src}')">
      </div>
    `).join('');
    const btn = document.querySelector('.see-more');
    if (btn) btn.textContent = 'Ver mais ↓';
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

function togglePortfolio() {
  const items = document.querySelectorAll('.portfolio-item');
  const btn = document.querySelector('.see-more');

  const isExpanded = btn.classList.contains('expanded');

  items.forEach((el, index) => {
    if (index >= 12) {
      el.style.transitionDelay = `${index * 0.03}s`;
      
      if (!isExpanded) {
        el.classList.add('show-item');
      } else {
        el.classList.remove('show-item');
      }
    }
  });

  btn.classList.toggle('expanded');

  btn.textContent = !isExpanded
    ? 'Ver menos ↑'
    : 'Ver mais ↓';
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
    : 'Ver todas as perguntas ↓';
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

document.addEventListener("DOMContentLoaded", () => {
  const firstTab = document.querySelector('.tab.active');
  if (firstTab) {
    filterTab(firstTab, 'pets');
  }
});

function openKitModal() {
  document.getElementById("kitModal").classList.add("active");
}

function closeKitModal() {
  document.getElementById("kitModal").classList.remove("active");
}