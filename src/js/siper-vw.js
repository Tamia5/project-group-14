const swiper = new Swiper('.swiper', {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 18,
  
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    768: {
      slidesPerView: 2,
      spaceBetween: 18
    },
    // when window width is >= 480px
    1200: {
      slidesPerView: 4,
      spaceBetween: 18
    }
  }
})
