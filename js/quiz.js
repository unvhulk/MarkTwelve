const quizForm = document.querySelector(".quiz-form");
const btnSubmit = document.querySelector("#btn-submit");
const outputMsg = document.querySelector("#output-score");

const correctAnswers = ["90°", "obtuse"];

btnSubmit.addEventListener("click", calculateScore);

function calculateScore() {
  let score = 0;
  let index = 0;
  const formResults = new FormData(quizForm);

  for (let value of formResults.values()) {
    if (value === correctAnswers[index]) {
      score++;
    }
    index++;
  }
  outputMsg.innerText = "The score is: " + score;
}
