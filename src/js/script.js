"use strict";

// Connecting vendors (plugins)
import "./_vendor";

// Functions
import { burger, dynamicAdaptive, mobileCheck } from "./functions/";

// Components
import { productSlider } from "./components";

window.addEventListener("DOMContentLoaded", () => {
  mobileCheck();
  burger();
  productSlider();
  dynamicAdaptive();
});
