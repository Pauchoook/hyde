export default function burger() {
  const burger = document.querySelector("#burger");
  const burgerOpen = document.querySelector("#burger-open");
  const burgerClose = document.querySelector("#burger-close");
  const burgerOverlay = document.querySelector("#burger-overlay");

  if (burger) {
    burgerOpen.addEventListener("click", () => {
      burger.classList.add("open");
      document.body.classList.add("body-hidden");
      burgerOverlay.classList.add("active");
      burgerOverlay.addEventListener("click", handleClose);
    });

    burgerClose.addEventListener("click", handleClose);

    function handleClose() {
      burger.classList.remove("open");
      document.body.classList.remove("body-hidden");
      burgerOverlay.classList.remove("active");

      return burgerOverlay.removeEventListener("click", handleClose);
    }
  }
}
