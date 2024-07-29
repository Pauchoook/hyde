import Swiper from "swiper";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";

export default function sliders() {
  const heroSlider = document.querySelector(".hero__slider");
  if (heroSlider) {
    const swiper = new Swiper(".hero__slider", {
      speed: 700,
      modules: [Pagination, Autoplay, EffectFade],
      autoplay: true,
      slidesPerView: 1,
      effect: "fade",
      fadeEffect: { crossFade: true },
      simulateTouch: false
    });
  }
}
