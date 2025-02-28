"use strict";

// Connecting vendors (plugins)
import "./_vendor";

// Functions
import {
  accordion,
  burger,
  dynamicAdaptive,
  mobileCheck,
  modals,
} from "./functions/";

// Components
import { gallerySlider, productSlider } from "./components";

window.addEventListener("DOMContentLoaded", () => {
  mobileCheck();
  burger();
  productSlider();
  gallerySlider();
  modals();
  dynamicAdaptive();
  accordion(".faq__list", "faq__item-title", ".faq__item", "active");

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
