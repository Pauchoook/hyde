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
        clickable: true,
      },
    });
  }

  const recProductSlider = document.querySelector(".rec-products__slider");
  if (recProductSlider) {
    const swiper = new Swiper(recProductSlider, {
      speed: 700,
      modules: [Autoplay],
      autoplay: true,
      slidesPerView: "auto",
      spaceBetween: 20,
      grabCursor: true,
      breakpoints: {
        1580: {
          slidesPerView: 4,
          spaceBetween: 75,
        },
        768: {
          slidesPerView: 3,
        },
      },
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
        1580: {
          slidesPerView: 4,
          spaceBetween: 75,
        },
        768: {
          slidesPerView: 3,
        },
      },
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
          spaceBetween: 90,
        },
        1365: {
          slidesPerView: 4,
          spaceBetween: 60,
        },
        993: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
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
        clickable: true,
      },
      navigation: {
        prevEl: ".reviews__slider-nav .btn-slider--prev",
        nextEl: ".reviews__slider-nav .btn-slider--next",
      },
      breakpoints: {
        1540: {
          slidesPerView: 4,
          spaceBetween: 75,
        },
        1365: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
        993: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      },
      on: {
        init: () => {
          const pagesSlider = document.querySelectorAll(
            ".reviews__slider-pagination .swiper-pagination-bullet"
          );
          pagesSlider.forEach((p, number) => (p.textContent = number + 1));
        },
      },
    });
  }

  const historySlider = document.querySelector(".history-article__slider");
  if (historySlider) {
    const swiper = new Swiper(historySlider, {
      speed: 700,
      modules: [Autoplay],
      autoplay: true,
      slidesPerView: "auto",
      spaceBetween: 30,
      grabCursor: true,
      breakpoints: {
        993: {
          spaceBetween: 85,
        },
      },
    });
  }

  // const productSlider = document.querySelector(".product__slider");
  // if (productSlider) {
  //   const buttonsPagination = document.querySelectorAll(".product__pagination-btn");
  //   const swiper = new Swiper(productSlider, {
  //     speed: 700,
  //     modules: [Autoplay, Pagination],
  //     grabCursor: true,
  //     spaceBetween: 15,
  //     pagination: {
  //       el: ".product__slider-pagination",
  //       clickable: true,
  //       type: "custom",
  //       bulletClass: "product__pagination-btn",
  //       bulletActiveClass: "active"
  //     },
  //     on: {
  //       init: () => {
  //         const firstBtnPagination = document.querySelector(".product__pagination-btn");
  //         firstBtnPagination.classList.add("active");
  //       },
  //       slideChange: ({ activeIndex }) => {
  //         buttonsPagination.forEach((btn) => btn.classList.remove("active"));
  //         buttonsPagination[activeIndex].classList.add("active");
  //       },
  //     },
  //   });
  // }

  const paginationProductSlider = document.querySelector(".product__slider-pagination");
  if (paginationProductSlider) {
    const swiperPag = new Swiper(paginationProductSlider, {
      speed: 700,
      grabCursor: true,
      slidesPerView: 4,
      spaceBetween: 20,
    });
    
    const productSlider = document.querySelector(".product__slider");
    const buttonsPagination = document.querySelectorAll(".product__pagination-btn");
    const swiper = new Swiper(productSlider, {
      speed: 700,
      modules: [Autoplay, Pagination],
      grabCursor: true,
      spaceBetween: 15,
      pagination: {
        el: ".product__slider-pagination",
        clickable: true,
        type: "custom",
        bulletClass: "product__pagination-btn",
        bulletActiveClass: "active",
      },
      on: {
        init: () => {
          const firstBtnPagination = document.querySelector(".product__pagination-btn");
          firstBtnPagination.classList.add("active");
        },
        slideChange: ({ activeIndex }) => {
          buttonsPagination.forEach((btn) => btn.classList.remove("active"));
          buttonsPagination[activeIndex].classList.add("active");
          swiperPag.slideTo(activeIndex);
        },
      },
    });
  }

  const salesSlider = document.querySelector(".supplies-sales__slider");
  console.log(salesSlider);
  if (salesSlider) {
    const swiper = new Swiper(salesSlider, {
      speed: 700,
      modules: [Autoplay],
      autoplay: true,
      slidesPerView: "auto",
      spaceBetween: 24,
      grabCursor: true,
      breakpoints: {
        1580: {
          slidesPerView: 5,
          spaceBetween: 44,
        },
        1100: {
          slidesPerView: 4,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 3,
        },
      },
    });
  }
}
