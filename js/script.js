new Swiper(
  '.image-slider', 
  {
    slidesPerView: 3.5,
    spaceBetween: 12,
    freeMode: true,
  }
);

new Swiper(
  '.element-slider', 
  {
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  }
);

new Swiper(
  '.reviews-slider', 
  {
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      834: {
        slidesPerView: 2.5,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 3,
      }
    }
  }
)