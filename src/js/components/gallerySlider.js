export const gallerySlider = () => {
  let gallerySlider = new Swiper(".gallery__slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    grid: {
      rows: 1,
    },

    breakpoints: {
      767: {
        slidesPerView: 3,
        spaceBetween: 20,

        grid: {
          rows: 2,
        },
      },
    },

    navigation: {
      nextEl: ".product__button-next",
      prevEl: ".product__button-prev",
    },
    pagination: {
      el: ".product__pagination",
      clickable: true,
    },
  });
};
