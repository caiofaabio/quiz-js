const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spnQts = document.querySelector(".spnQts");
const textFinish = document.querySelector(".finish span");
const content = document.querySelector(".content");
const contentFinish = document.querySelector(".finish");
const btnRestart = document.querySelector(".finish button");

// import questions
import questions from "./questions.js";

let currentIndex = 0; //n da pergunta
let questionsCorrect = 0; //total de pontos

btnRestart.onclick = () => {
  content.style.display = "flex";
  contentFinish.style.display = "none";

  currentIndex = 0;
  questionsCorrect = 0;
  loadQuestion();
};

function nextQuestion(e) {
  if (e.target.getAttribute("data-correct") === "true") {
    questionsCorrect++;
  }

  if (currentIndex < questions.length - 1) {
    currentIndex++;
    loadQuestion();
  } else {
    finish();
  }
}

function finish() {
  textFinish.innerHTML = `Você acertou ${questionsCorrect} de ${questions.length}`;
  content.style.display = "none";
  contentFinish.style.display = "flex";
}

function loadQuestion() {
  spnQts.innerHTML = `${currentIndex + 1}/${questions.length}`;
  const item = questions[currentIndex];
  answers.innerHTML = "";
  question.innerHTML = item.question;

  item.answers.forEach((answer) => {
    const div = document.createElement("div");

    div.innerHTML = `<button class="answer" data-correct="${answer.correct}">${answer.option}</button>`;

    answers.innerHTML += div.innerHTML;
  });

  document
    .querySelector(".answers")
    .querySelectorAll(".answer")
    .forEach((item) => {
      item.addEventListener("click", nextQuestion);
    });
}

loadQuestion();
