export default function deliveryChange() {
  const spollers = document.querySelectorAll(".basket__delivery-spoller");
  if (spollers.length) {
    spollers.forEach((spoller) => {
      const deliveryInput = spoller.querySelector(".basket__delivery-input");
      const addresses = spoller.querySelectorAll(".basket__delivery-address");
      const deliveryView = spoller.querySelector(".basket__delivery-view");

      addresses.forEach((address) => {
        address.addEventListener("click", () => {
          const value = address.textContent;
          const parent = address.closest(".basket__delivery-addresses");

          deliveryView.textContent = value;
          deliveryInput.value = value;

          parent.setAttribute("hidden", "");
        });
      });
    });
  }
}
