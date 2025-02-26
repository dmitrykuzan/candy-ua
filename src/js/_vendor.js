import "focus-visible";

import "../../node_modules/swiper/swiper-bundle";

import Swiper, { Navigation, Pagination } from "swiper";
Swiper.use([Navigation, Pagination]);

document.addEventListener("DOMContentLoaded", () => {
  let fsLightboxLoaded = false;

  document.querySelectorAll(".gallery__link").forEach((link) => {
    link.addEventListener("click", async (event) => {
      if (!fsLightboxLoaded) {
        event.preventDefault();
        await import("fslightbox");
        fsLightboxLoaded = true;
        link.click();
        console.log("trueee");
      }
    });
  });
});
