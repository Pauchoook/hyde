export default function filters() {
  const btnOpen = document.querySelector(".shop__btn-sidebar");
  const btnClose = document.querySelector(".shop__sidebar-close");
  const sidebar = document.querySelector(".shop__sidebar");
  const sidebarOverlay = document.querySelector(".shop__sidebar-overlay");

  if (sidebar) {
    btnOpen.addEventListener("click", () => {
      sidebar.classList.add("open");
      document.body.classList.add("body-hidden");
      sidebarOverlay.classList.add("active");
      sidebarOverlay.addEventListener("click", handleClose);
    });

    btnClose.addEventListener("click", handleClose);

    function handleClose() {
      sidebar.classList.remove("open");
      document.body.classList.remove("body-hidden");
      sidebarOverlay.classList.remove("active");

      return sidebarOverlay.removeEventListener("click", handleClose);
    }
  }
}
