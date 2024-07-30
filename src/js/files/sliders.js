import Swiper from "swiper";
import { Pagination, Autoplay, EffectFade, Navigation } from "swiper/modules";

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
      grabCursor: true,
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
      grabCursor: true,
      breakpoints: {
        768: {
          slidesPerView: 3,
          spaceBetween: 3
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
      grabCursor: true,
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

  const reviewsSlider = document.querySelector(".reviews__slider");
  if (reviewsSlider) {
    const swiper = new Swiper(reviewsSlider, {
      speed: 700,
      modules: [Autoplay, Pagination, Navigation],
      autoplay: true,
      slidesPerView: "auto",
      spaceBetween: 20,
      grabCursor: true,
      pagination: {
        el: ".reviews__slider-pagination",
        clickable: true
      },
      navigation: {
        prevEl: ".reviews__slider-nav .btn-slider--prev",
        nextEl: ".reviews__slider-nav .btn-slider--next",
      },
      breakpoints: {
        1540: {
          slidesPerView: 4,
          spaceBetween: 75
        },
        1365: {
          slidesPerView: 3,
          spaceBetween: 50
        },
        993: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20
        }
      },
      on: {
        init: () => {
          const pagesSlider = document.querySelectorAll(".reviews__slider-pagination .swiper-pagination-bullet");
          pagesSlider.forEach((p, number) => p.textContent = number + 1)
        }
      }
    });
  }
}
