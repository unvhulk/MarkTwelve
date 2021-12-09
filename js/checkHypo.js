const valueOfA = document.querySelector("#value-of-a");
const valueOfB = document.querySelector("#value-of-b");
const btnSubmit = document.querySelector("#btn-submit");
const outputBox = document.querySelector("#show-message");

btnSubmit.addEventListener("click", calculateHypotenuse);

function calculateHypotenuse() {
  const a = parseInt(valueOfA.value);
  const b = parseInt(valueOfB.value);

  if (Number.isNaN(a) && Number.isNaN(b)) {
    outputBox.innerText = "The length of the hypotenuse is " + "0 cm";
  } else {
    const hypotenuseLength = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    outputBox.innerText =
      "The length of the hypotenuse is " + hypotenuseLength + " cm";
  }
}
