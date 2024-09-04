export default function popup() {
  const buttonsPopup = document.querySelectorAll(".btn-popup");

  if (buttonsPopup.length) {
    buttonsPopup.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();

        const popoupId = btn.dataset.popup;
        const currentPopup = document.querySelector(`.popup[data-popup="${popoupId}"]`);
        const popupWindow = currentPopup.querySelector(".popup__window");
        const btnClose = currentPopup.querySelector(".popup__close");

        btnClose.addEventListener("click", handleClose);

        document.addEventListener("click", handleClose);
        popupWindow.addEventListener("click", (e) => e.stopPropagation());

        currentPopup.classList.add("open");
        document.body.classList.add("body-hidden");
      });
    });

    function handleClose(e) {
      let currentPopup = e.target.closest(".popup");

      if (!currentPopup) currentPopup = document.querySelector(".popup.open");

      currentPopup.classList.add("hide");
      setTimeout(() => {
        document.body.classList.remove("body-hidden");
        currentPopup.classList.remove("open");
        currentPopup.classList.remove("hide");
      }, 500);

      return document.removeEventListener("click", handleClose);
    }
  }
}
