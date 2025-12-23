// Top slide (homepage)
var swiper = new Swiper(".topSwiper", {
  autoplay: {
    delay: 3000,
  },
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});

// Work section (homepage)
var swiper = new Swiper(".workSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  breakpoints: {
    810: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
      centeredSlides: true
    }
  }
});

// Work page
var swiper = new Swiper(".projectSwiper", {
  autoHeight: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});