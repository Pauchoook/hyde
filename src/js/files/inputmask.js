import IMask from "imask";

export default function inputmask() {
  const inputs = document.querySelectorAll("input[type='tel']");

inputs.forEach((input) => {
  const maskOptions = {
    mask: "+{7}(000)000-00-00",
  };
  const mask = IMask(input, maskOptions);
});
}
