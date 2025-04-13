document.addEventListener('DOMContentLoaded', function() {
  // Botón de hamburguesa para abrir/cerrar menú
  const hamburger = document.querySelector('.hamburger-menu');
  const navLinks = document.querySelector('.nav-links');
  
  if (hamburger) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });
  }

  // Detectar si hay hero section y ajustar el header en consecuencia
  const header = document.querySelector('.main-header');
  const heroSection = document.querySelector('.hero'); // Usando la clase 'hero' de tu HTML
  const body = document.body;
  
  // Si no hay hero section, agrega una clase al body y fondo sólido al header
  if (!heroSection) {
    body.classList.add('no-hero');
    header.classList.add('solid-bg'); // Agrega fondo sólido inmediatamente
  } else {
    // Si hay hero, mantén el comportamiento original de scroll
    window.addEventListener('scroll', function() {
      if (window.scrollY > window.innerHeight * 0.7) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }
});
