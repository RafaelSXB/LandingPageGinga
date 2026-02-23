const swiper = new Swiper('.swiper', {
  loop: true,               // Carrossel infinito
  centeredSlides: true,     // Deixa o item ativo no meio
  slidesPerView: 'auto',    // Ajusta quantos slides aparecem
  spaceBetween: 30,         // Espaço entre os cards
  
  // Autoplay de 10 segundos
  autoplay: {
    delay: 10000,
    disableOnInteraction: false,
  },

  // Habilita arrastar e clique
  grabCursor: true,
  slideToClickedSlide: true,

  // Efeito opcional de profundidade
  effect: 'coverflow',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: false,
  },
});