export default function dropdown() {
  const buttonsDropdown = document.querySelectorAll(".btn-dropdown");

  if (buttonsDropdown.length) {
    buttonsDropdown.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        const dropdown = btn.closest(".dropdown");
        const dropdownItem = dropdown.querySelector(".dropdown__item");

        dropdown.classList.toggle("open");
        document.addEventListener("click", handleClose);
        dropdownItem.addEventListener("click", (e) => e.stopPropagation());

        function handleClose() {
          dropdown.classList.remove("open");

          return document.removeEventListener("click", handleClose);
        }
      });
    });
  }
}
