export default function numbersBasket() {
  const nav = document.querySelectorAll(".header__basket-numbers");
  if (nav.length) {
    nav.forEach((n) => {
      const btnMinus = n.querySelector(".btn-minus");
      const btnPlus = n.querySelector(".btn-plus");
      const currentNum = n.querySelector(".header__basket-number");

      btnMinus.addEventListener("click", () => {
        const num = Number(currentNum.textContent);
        if (num >= 1) {
          currentNum.textContent = num - 1;
        }
      });

      btnPlus.addEventListener("click", () => {
        const num = Number(currentNum.textContent);
        currentNum.textContent = num + 1;
      });
    });
  }
}

// страница корзины
const navBasket = document.querySelectorAll(".basket__numbers-wrapper");
if (navBasket.length) {
  navBasket.forEach((n) => {
    const btnMinus = n.querySelector(".btn-minus");
    const btnPlus = n.querySelector(".btn-plus");
    const currentNum = n.querySelector(".basket__product-number");

    btnMinus.addEventListener("click", () => {
      const num = Number(currentNum.textContent);
      if (num >= 1) {
        currentNum.textContent = num - 1;
      }
    });

    btnPlus.addEventListener("click", () => {
      const num = Number(currentNum.textContent);
      currentNum.textContent = num + 1;
    });
  });
}
