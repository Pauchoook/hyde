export default function balanceShow() {
  const btnShow = document.querySelector(".my-balance__btn-start");
  if (btnShow) {
    btnShow.addEventListener("click", () => {
      const window = document.querySelector(".my-balance__start-window");
      const nextWindow = document.querySelector(".my-balance__replenish");
      
      window.remove();
      nextWindow.classList.add("open");
    })
  }
}