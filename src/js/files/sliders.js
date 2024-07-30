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
      simulateTouch: false,
      pagination: {
        el: ".hero__slider-pagination",
        clickable: true
      }
    });
  }

  const topSalesSlider = document.querySelector(".top-sales__slider");
  if (topSalesSlider) {
    const swiper = new Swiper(topSalesSlider, {
      speed: 700,
      modules: [Autoplay],
      autoplay: true,
      slidesPerView: "auto",
      spaceBetween: 20,
      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 0
        }
      }
    });
  }

  const newProductsSlider = document.querySelector(".new-products__slider");
  if (newProductsSlider) {
    const swiper = new Swiper(newProductsSlider, {
      speed: 700,
      modules: [Autoplay],
      autoplay: true,
      slidesPerView: "auto",
      spaceBetween: 20,
      breakpoints: {
        1540: {
          slidesPerView: 4,
          spaceBetween: 90
        },
        1365: {
          slidesPerView: 4,
          spaceBetween: 60
        },
        993: {
          slidesPerView: 3,
          spaceBetween: 40
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20
        }
      }
    });
  }
}
