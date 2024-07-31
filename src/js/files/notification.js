export default function notification() {
  const buttonsNotification = document.querySelectorAll(".notification__btn");

  if (buttonsNotification.length) {
    buttonsNotification.forEach(btn => {
      btn.addEventListener("click", () => {
        const notification = btn.closest(".notification");

        notification.classList.add("hide");
        setTimeout(() => {
          notification.classList.remove("hide");
          notification.classList.remove("open");
        }, 500);
      })
    })
  }
}