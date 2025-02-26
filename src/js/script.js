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
import { productSlider } from "./components";

window.addEventListener("DOMContentLoaded", () => {
  mobileCheck();
  burger();
  productSlider();
  modals();
  dynamicAdaptive();
  accordion(".faq__list", "faq__item-title", ".faq__item", "active");
});
