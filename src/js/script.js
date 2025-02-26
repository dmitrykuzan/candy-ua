"use strict";

// Connecting vendors (plugins)
import "./_vendor";

// Functions
import { accordion, burger, dynamicAdaptive, mobileCheck } from "./functions/";

// Components
import { productSlider } from "./components";

window.addEventListener("DOMContentLoaded", () => {
  mobileCheck();
  burger();
  productSlider();
  dynamicAdaptive();
  accordion(".faq__list", "faq__item-title", ".faq__item", "active");
});
