const testimonials = [
  {
    nome: "João Costa",
    texto:
      "Excelente atendimento! Senti-me muito bem acompanhado do início ao fim.",
    foto: "./assets/img/homem01.png",
  },
  {
    nome: "Ana Fernandes",
    texto: "óculos de alta qualidade e ótimo suporte técnico.",
    foto: "./assets/img/mulher.png",
  },
  {
    nome: "Carlos Pereira",
    texto: "Profissionais atenciosos e serviço rápido.",
    foto: "./assets/img/homem.png",
  },
  {
    nome: "Sofia Almeida",
    texto: "Meus óculos ficaram perfeitos e super confortáveis.",
    foto: "./assets/img/mulher.png",
  },
  {
    nome: "Luís Martins",
    texto: "Recomendo totalmente! Atendimento impecável.",
    foto: "./assets/img/homem01.png",
  },
];

let testimonialIndex = 0;
let autoplay;

function qs(id) {
  return document.getElementById(id);
}

const nameEl = qs("testimonialName");
const photoEl = qs("testimonialPhoto");
const textEl = qs("testimonialText");
const authorEl = qs("testimonialAuthor");
const prevBtn = qs("prevCard");
const nextBtn = qs("nextCard");

function renderTestimonial() {
  const t = testimonials[testimonialIndex];
  if (!t) return;
  nameEl.textContent = t.nome;
  photoEl.src = t.foto;
  textEl.textContent = `"${t.texto}"`;
  authorEl.textContent = `${t.nome}`;
}

function nextTestimonial() {
  testimonialIndex = (testimonialIndex + 1) % testimonials.length;
  renderTestimonial();
}

function prevTestimonial() {
  testimonialIndex =
    (testimonialIndex - 1 + testimonials.length) % testimonials.length;
  renderTestimonial();
}

function resetAutoplay() {
  clearInterval(autoplay);
  autoplay = setInterval(nextTestimonial, 6000);
}

function addKeyboardNavigation() {
  document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
      prevTestimonial();
      resetAutoplay();
    }
    if (e.key === "ArrowRight") {
      nextTestimonial();
      resetAutoplay();
    }
  });
}

function addSwipeNavigation() {
  const wrapper = document.querySelector(".feedback-wrapper");
  if (!wrapper) return;
  let startX = 0;
  wrapper.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });
  wrapper.addEventListener("touchend", (e) => {
    const deltaX = e.changedTouches[0].clientX - startX;
    if (Math.abs(deltaX) < 40) return;
    if (deltaX > 0) prevTestimonial();
    else nextTestimonial();
    resetAutoplay();
  });
}

function initCarousel() {
  if (!nameEl || !photoEl || !textEl || !authorEl) return;
  renderTestimonial();
  prevBtn?.addEventListener("click", () => {
    prevTestimonial();
    resetAutoplay();
  });
  nextBtn?.addEventListener("click", () => {
    nextTestimonial();
    resetAutoplay();
  });
  const wrapper = document.querySelector(".feedback-wrapper");
  wrapper?.addEventListener("mouseenter", () => clearInterval(autoplay));
  wrapper?.addEventListener("mouseleave", resetAutoplay);
  addKeyboardNavigation();
  addSwipeNavigation();
  resetAutoplay();
}

document.addEventListener("DOMContentLoaded", initCarousel);
