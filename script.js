  function toggleFaq(el) {
  el.classList.toggle('open');
}

function filterTab(btn, category) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');

const imagens = {
  pets: [
    { src: "imagens/Pets/Pets-1.jpg", alt: "Tatuagem de pet número 1" },
    { src: "imagens/Pets/Pets-2.jpg", alt: "Tatuagem de pet número 2" },
    { src: "imagens/Pets/Pets-3.jpg", alt: "Tatuagem de pet número 3" },
    { src: "imagens/Pets/Pets-4.jpg", alt: "Tatuagem de pet número 4" },
    { src: "imagens/Pets/Pets-5.jpg", alt: "Tatuagem de pet número 5" },
    { src: "imagens/Pets/Pets-6.jpg", alt: "Tatuagem de pet número 6" },
    { src: "imagens/Pets/Pets-7.jpg", alt: "Tatuagem de pet número 7" },
    { src: "imagens/Pets/Pets-8.jpg", alt: "Tatuagem de pet número 8" },
    { src: "imagens/Pets/Pets-9.jpg", alt: "Tatuagem de pet número 9" },
    { src: "imagens/Pets/Pets-10.jpg", alt: "Tatuagem de pet número 10" },
    { src: "imagens/Pets/Pets-11.jpg", alt: "Tatuagem de pet número 11" },
    { src: "imagens/Pets/Pets-12.jpg", alt: "Tatuagem de pet número 12" },
    { src: "imagens/Pets/Pets-13.jpg", alt: "Tatuagem de pet número 13" },
    { src: "imagens/Pets/Pets-14.jpg", alt: "Tatuagem de pet número 14" },
    { src: "imagens/Pets/Pets-15.jpg", alt: "Tatuagem de pet número 15" },
    { src: "imagens/Pets/Pets-16.jpg", alt: "Tatuagem de pet número 16" },
    { src: "imagens/Pets/Pets-17.jpg", alt: "Tatuagem de pet número 17" },
    { src: "imagens/Pets/Pets-19.jpg", alt: "Tatuagem de pet número 19" },
    { src: "imagens/Pets/Pets-20.jpg", alt: "Tatuagem de pet número 20" },
    { src: "imagens/Pets/Pets-21.jpg", alt: "Tatuagem de pet número 21" },
    { src: "imagens/Pets/Pets-22.jpg", alt: "Tatuagem de pet número 22" },
    { src: "imagens/Pets/Pets-23.jpg", alt: "Tatuagem de pet número 23" },
    { src: "imagens/Pets/Pets-24.jpg", alt: "Tatuagem de pet número 24" },
    { src: "imagens/Pets/Pets-25.jpg", alt: "Tatuagem de pet número 25" },
    { src: "imagens/Pets/Pets-26.jpg", alt: "Tatuagem de pet número 26" },
    { src: "imagens/Pets/Pets-27.jpg", alt: "Tatuagem de pet número 27" },
    { src: "imagens/Pets/Pets-28.jpg", alt: "Tatuagem de pet número 28" },
    { src: "imagens/Pets/Pets-30.jpg", alt: "Tatuagem de pet número 30" },
    { src: "imagens/Pets/Pets-31.jpg", alt: "Tatuagem de pet número 31" },
    { src: "imagens/Pets/Pets-32.jpg", alt: "Tatuagem de pet número 32" },
    { src: "imagens/Pets/Pets-33.jpg", alt: "Tatuagem de pet número 33" },
    { src: "imagens/Pets/Pets-34.jpg", alt: "Tatuagem de pet número 34" },
    { src: "imagens/Pets/Pets-35.jpg", alt: "Tatuagem de pet número 35" },
    { src: "imagens/Pets/Pets-36.jpg", alt: "Tatuagem de pet número 36" }
  ],
  delicadas: [
    { src: "imagens/Delicadas/Delicadas-1.jpg", alt: "Tatuagem delicada número 1" },
    { src: "imagens/Delicadas/Delicadas-2.jpg", alt: "Tatuagem delicada número 2" },
    { src: "imagens/Delicadas/Delicadas-3.jpg", alt: "Tatuagem delicada número 3" },
    { src: "imagens/Delicadas/Delicadas-4.jpg", alt: "Tatuagem delicada número 4" },
    { src: "imagens/Delicadas/Delicadas-6.jpg", alt: "Tatuagem delicada número 6" },
    { src: "imagens/Delicadas/Delicadas-7.jpg", alt: "Tatuagem delicada número 7" },
    { src: "imagens/Delicadas/Delicadas-8.jpg", alt: "Tatuagem delicada número 8" },
    { src: "imagens/Delicadas/Delicadas-9.jpg", alt: "Tatuagem delicada número 9" },
    { src: "imagens/Delicadas/Delicadas-10.jpg", alt: "Tatuagem delicada número 10" },
    { src: "imagens/Delicadas/Delicadas-11.jpg", alt: "Tatuagem delicada número 11" },
    { src: "imagens/Delicadas/Delicadas-12.jpg", alt: "Tatuagem delicada número 12" },
    { src: "imagens/Delicadas/Delicadas-13.jpg", alt: "Tatuagem delicada número 13" },
    { src: "imagens/Delicadas/Delicadas-14.jpg", alt: "Tatuagem delicada número 14" },
    { src: "imagens/Delicadas/Delicadas-15.jpg", alt: "Tatuagem delicada número 15" },
    { src: "imagens/Delicadas/Delicadas-16.jpg", alt: "Tatuagem delicada número 16" },
    { src: "imagens/Delicadas/Delicadas-17.jpg", alt: "Tatuagem delicada número 17" },
    { src: "imagens/Delicadas/Delicadas-18.jpg", alt: "Tatuagem delicada número 18" },
    { src: "imagens/Delicadas/Delicadas-19.jpg", alt: "Tatuagem delicada número 19" },
    { src: "imagens/Delicadas/Delicadas-20.jpg", alt: "Tatuagem delicada número 20" },
    { src: "imagens/Delicadas/Delicadas-21.jpg", alt: "Tatuagem delicada número 21" },
    { src: "imagens/Delicadas/Delicadas-23.jpg", alt: "Tatuagem delicada número 23" },
    { src: "imagens/Delicadas/Delicadas-24.jpg", alt: "Tatuagem delicada número 24" },
    { src: "imagens/Delicadas/Delicadas-25.jpg", alt: "Tatuagem delicada número 25" },
    { src: "imagens/Delicadas/Delicadas-26.jpg", alt: "Tatuagem delicada número 26" },
    { src: "imagens/Delicadas/Delicadas-27.jpg", alt: "Tatuagem delicada número 27" },
    { src: "imagens/Delicadas/Delicadas-28.jpg", alt: "Tatuagem delicada número 28" },
    { src: "imagens/Delicadas/Delicadas-29.jpg", alt: "Tatuagem delicada número 29" }
  ],
  aquarela: [
    { src: "imagens/Aquarela/Aquarela-1.jpg", alt: "Tatuagem aquarela número 1" },
    { src: "imagens/Aquarela/Aquarela-2.jpg", alt: "Tatuagem aquarela número 2" },
    { src: "imagens/Aquarela/Aquarela-3.jpg", alt: "Tatuagem aquarela número 3" },
    { src: "imagens/Aquarela/Aquarela-4.jpg", alt: "Tatuagem aquarela número 4" },
    { src: "imagens/Aquarela/Aquarela-5.jpg", alt: "Tatuagem aquarela número 5" },
    { src: "imagens/Aquarela/Aquarela-6.jpg", alt: "Tatuagem aquarela número 6" },
    { src: "imagens/Aquarela/Aquarela-7.jpg", alt: "Tatuagem aquarela número 7" },
    { src: "imagens/Aquarela/Aquarela-8.jpg", alt: "Tatuagem aquarela número 8" },
    { src: "imagens/Aquarela/Aquarela-9.jpg", alt: "Tatuagem aquarela número 9" },
    { src: "imagens/Aquarela/Aquarela-10.jpg", alt: "Tatuagem aquarela número 10" },
    { src: "imagens/Aquarela/Aquarela-11.jpg", alt: "Tatuagem aquarela número 11" },
    { src: "imagens/Aquarela/Aquarela-12.jpg", alt: "Tatuagem aquarela número 12" },
    { src: "imagens/Aquarela/Aquarela-13.jpg", alt: "Tatuagem aquarela número 13" },
    { src: "imagens/Aquarela/Aquarela-14.jpg", alt: "Tatuagem aquarela número 14" },
    { src: "imagens/Aquarela/Aquarela-15.jpg", alt: "Tatuagem aquarela número 15" },
    { src: "imagens/Aquarela/Aquarela-16.jpg", alt: "Tatuagem aquarela número 16" },
    { src: "imagens/Aquarela/Aquarela-17.jpg", alt: "Tatuagem aquarela número 17" },
    { src: "imagens/Aquarela/Aquarela-18.jpg", alt: "Tatuagem aquarela número 18" },
    { src: "imagens/Aquarela/Aquarela-19.jpg", alt: "Tatuagem aquarela número 19" },
    { src: "imagens/Aquarela/Aquarela-20.jpg", alt: "Tatuagem aquarela número 20" },
    { src: "imagens/Aquarela/Aquarela-21.jpg", alt: "Tatuagem aquarela número 21" },
    { src: "imagens/Aquarela/Aquarela-22.jpg", alt: "Tatuagem aquarela número 22" },
    { src: "imagens/Aquarela/Aquarela-23.jpg", alt: "Tatuagem aquarela número 23" },
    { src: "imagens/Aquarela/Aquarela-24.jpg", alt: "Tatuagem aquarela número 24" },
    { src: "imagens/Aquarela/Aquarela-25.jpg", alt: "Tatuagem aquarela número 25" },
    { src: "imagens/Aquarela/Aquarela-26.jpg", alt: "Tatuagem aquarela número 26" },
    { src: "imagens/Aquarela/Aquarela-27.jpg", alt: "Tatuagem aquarela número 27" },
    { src: "imagens/Aquarela/Aquarela-28.jpg", alt: "Tatuagem aquarela número 28" },
    { src: "imagens/Aquarela/Aquarela-29.jpg", alt: "Tatuagem aquarela número 29" },
    { src: "imagens/Aquarela/Aquarela-30.jpg", alt: "Tatuagem aquarela número 30" },
    { src: "imagens/Aquarela/Aquarela-31.jpg", alt: "Tatuagem aquarela número 31" },
    { src: "imagens/Aquarela/Aquarela-32.jpg", alt: "Tatuagem aquarela número 32" },
    { src: "imagens/Aquarela/Aquarela-33.jpg", alt: "Tatuagem aquarela número 33" }
  ],
  coloridas: [
    { src: "imagens/Coloridas/Coloridas-1.jpg", alt: "Tatuagem colorida número 1" },
    { src: "imagens/Coloridas/Coloridas-2.jpg", alt: "Tatuagem colorida número 2" },
    { src: "imagens/Coloridas/Coloridas-3.jpg", alt: "Tatuagem colorida número 3" },
    { src: "imagens/Coloridas/Coloridas-4.jpg", alt: "Tatuagem colorida número 4" },
    { src: "imagens/Coloridas/Coloridas-5.jpg", alt: "Tatuagem colorida número 5" },
    { src: "imagens/Coloridas/Coloridas-6.jpg", alt: "Tatuagem colorida número 6" },
    { src: "imagens/Coloridas/Coloridas-7.jpg", alt: "Tatuagem colorida número 7" },
    { src: "imagens/Coloridas/Coloridas-8.jpg", alt: "Tatuagem colorida número 8" },
    { src: "imagens/Coloridas/Coloridas-9.jpg", alt: "Tatuagem colorida número 9" },
    { src: "imagens/Coloridas/Coloridas-10.jpg", alt: "Tatuagem colorida número 10" },
    { src: "imagens/Coloridas/Coloridas-11.jpg", alt: "Tatuagem colorida número 11" },
    { src: "imagens/Coloridas/Coloridas-12.jpg", alt: "Tatuagem colorida número 12" },
    { src: "imagens/Coloridas/Coloridas-13.jpg", alt: "Tatuagem colorida número 13" },
    { src: "imagens/Coloridas/Coloridas-14.jpg", alt: "Tatuagem colorida número 14" },
    { src: "imagens/Coloridas/Coloridas-15.jpg", alt: "Tatuagem colorida número 15" },
    { src: "imagens/Coloridas/Coloridas-16.jpg", alt: "Tatuagem colorida número 16" },
    { src: "imagens/Coloridas/Coloridas-17.jpg", alt: "Tatuagem colorida número 17" },
    { src: "imagens/Coloridas/Coloridas-18.jpg", alt: "Tatuagem colorida número 18" },
    { src: "imagens/Coloridas/Coloridas-19.jpg", alt: "Tatuagem colorida número 19" },
    { src: "imagens/Coloridas/Coloridas-20.jpg", alt: "Tatuagem colorida número 20" },
    { src: "imagens/Coloridas/Coloridas-21.jpg", alt: "Tatuagem colorida número 21" },
    { src: "imagens/Coloridas/Coloridas-22.jpg", alt: "Tatuagem colorida número 22" },
    { src: "imagens/Coloridas/Coloridas-23.jpg", alt: "Tatuagem colorida número 23" },
    { src: "imagens/Coloridas/Coloridas-24.jpg", alt: "Tatuagem colorida número 24" },
    { src: "imagens/Coloridas/Coloridas-25.jpg", alt: "Tatuagem colorida número 25" },
    { src: "imagens/Coloridas/Coloridas-26.jpg", alt: "Tatuagem colorida número 26" }
  ],
    blackwork: [
    { src: "imagens/Blackwork/Blackwork-1.jpg", alt: "Tatuagem blackwork número 1" },
    { src: "imagens/Blackwork/Blackwork-2.jpg", alt: "Tatuagem blackwork número 2" },
    { src: "imagens/Blackwork/Blackwork-3.jpg", alt: "Tatuagem blackwork número 3" },
    { src: "imagens/Blackwork/Blackwork-4.jpg", alt: "Tatuagem blackwork número 4" },
    { src: "imagens/Blackwork/Blackwork-5.jpg", alt: "Tatuagem blackwork número 5" },
    { src: "imagens/Blackwork/Blackwork-6.jpg", alt: "Tatuagem blackwork número 6" },
    { src: "imagens/Blackwork/Blackwork-7.jpg", alt: "Tatuagem blackwork número 7" },
    { src: "imagens/Blackwork/Blackwork-8.jpg", alt: "Tatuagem blackwork número 8" },
    { src: "imagens/Blackwork/Blackwork-9.jpg", alt: "Tatuagem blackwork número 9" },
    { src: "imagens/Blackwork/Blackwork-10.jpg", alt: "Tatuagem blackwork número 10" },
    { src: "imagens/Blackwork/Blackwork-11.jpg", alt: "Tatuagem blackwork número 11" },
    { src: "imagens/Blackwork/Blackwork-12.jpg", alt: "Tatuagem blackwork número 12" },
    { src: "imagens/Blackwork/Blackwork-13.jpg", alt: "Tatuagem blackwork número 13" },
    { src: "imagens/Blackwork/Blackwork-14.jpg", alt: "Tatuagem blackwork número 14" },
    { src: "imagens/Blackwork/Blackwork-15.jpg", alt: "Tatuagem blackwork número 15" },
    { src: "imagens/Blackwork/Blackwork-16.jpg", alt: "Tatuagem blackwork número 16" },
    { src: "imagens/Blackwork/Blackwork-17.jpg", alt: "Tatuagem blackwork número 17" },
    { src: "imagens/Blackwork/Blackwork-18.jpg", alt: "Tatuagem blackwork número 18" },
    { src: "imagens/Blackwork/Blackwork-19.jpg", alt: "Tatuagem blackwork número 19" },
    { src: "imagens/Blackwork/Blackwork-20.jpg", alt: "Tatuagem blackwork número 20" }
  ],
  fineline: [
    { src: "imagens/Linhas/Linhas-1.jpg", alt: "Tatuagem fineline número 1" },
    { src: "imagens/Linhas/Linhas-2.jpg", alt: "Tatuagem fineline número 2" },
    { src: "imagens/Linhas/Linhas-3.jpg", alt: "Tatuagem fineline número 3" },
    { src: "imagens/Linhas/Linhas-4.jpg", alt: "Tatuagem fineline número 4" },
    { src: "imagens/Linhas/Linhas-5.jpg", alt: "Tatuagem fineline número 5" },
    { src: "imagens/Linhas/Linhas-6.jpg", alt: "Tatuagem fineline número 6" },
    { src: "imagens/Linhas/Linhas-7.jpg", alt: "Tatuagem fineline número 7" },
    { src: "imagens/Linhas/Linhas-8.jpg", alt: "Tatuagem fineline número 8" },
    { src: "imagens/Linhas/Linhas-9.jpg", alt: "Tatuagem fineline número 9" },
    { src: "imagens/Linhas/Linhas-10.jpg", alt: "Tatuagem fineline número 10" },
    { src: "imagens/Linhas/Linhas-11.jpg", alt: "Tatuagem fineline número 11" },
    { src: "imagens/Linhas/Linhas-12.jpg", alt: "Tatuagem fineline número 12" },
    { src: "imagens/Linhas/Linhas-13.jpg", alt: "Tatuagem fineline número 13" },
    { src: "imagens/Linhas/Linhas-14.jpg", alt: "Tatuagem fineline número 14" },
    { src: "imagens/Linhas/Linhas-15.jpg", alt: "Tatuagem fineline número 15" },
    { src: "imagens/Linhas/Linhas-16.jpg", alt: "Tatuagem fineline número 16" },
    { src: "imagens/Linhas/Linhas-17.jpg", alt: "Tatuagem fineline número 17" },
    { src: "imagens/Linhas/Linhas-18.jpg", alt: "Tatuagem fineline número 18" },
    { src: "imagens/Linhas/Linhas-19.jpg", alt: "Tatuagem fineline número 19" },
    { src: "imagens/Linhas/Linhas-20.jpg", alt: "Tatuagem fineline número 20" },
    { src: "imagens/Linhas/Linhas-21.jpg", alt: "Tatuagem fineline número 21" },
    { src: "imagens/Linhas/Linhas-22.jpg", alt: "Tatuagem fineline número 22" },
    { src: "imagens/Linhas/Linhas-23.jpg", alt: "Tatuagem fineline número 23" },
    { src: "imagens/Linhas/Linhas-24.jpg", alt: "Tatuagem fineline número 24" },
    { src: "imagens/Linhas/Linhas-25.jpg", alt: "Tatuagem fineline número 25" },
    { src: "imagens/Linhas/Linhas-26.jpg", alt: "Tatuagem fineline número 26" },
    { src: "imagens/Linhas/Linhas-27.jpg", alt: "Tatuagem fineline número 27" },
    { src: "imagens/Linhas/Linhas-28.jpg", alt: "Tatuagem fineline número 28" },
    { src: "imagens/Linhas/Linhas-29.jpg", alt: "Tatuagem fineline número 29" },
    { src: "imagens/Linhas/Linhas-30.jpg", alt: "Tatuagem fineline número 30" }
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