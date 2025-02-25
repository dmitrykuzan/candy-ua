export const productSlider = () => {
  let productSlider = new Swiper(".product__slider", {
    slidesPerView: 1,
    spaceBetween: 40,
    // centeredSlides: true,

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
