const mainMenu = document.getElementById("main-menu");
const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result-container");

const btnQuiz = document.getElementById("btn-quiz");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const scoreText = document.getElementById("score-text");
const restartBtn = document.getElementById("restart-btn");

const questions = [
  {
    question: "מה צבע השמיים ביום בהיר?",
    answers: ["אדום", "כחול", "ירוק", "צהוב"],
    correctIndex: 1,
  },
  {
    question: "כמה רגליים יש לעכביש?",
    answers: ["6", "8", "10", "4"],
    correctIndex: 1,
  },
  // הוסיפי כאן עוד שאלות לפי הצורך
];

let currentQuestionIndex = 0;
let score = 0;

btnQuiz.addEventListener("click", () => {
  mainMenu.style.display = "none";
  quizContainer.style.display = "block";
  resultContainer.style.display = "none";
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
});

function showQuestion() {
  clearState();

  const q = questions[currentQuestionIndex];
  questionText.textContent = q.question;

  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.addEventListener("click", () => selectAnswer(index));
    answersContainer.appendChild(btn);
  });
}

function clearState() {
  feedback.textContent = "";
  nextBtn.style.display = "none";
  answersContainer.innerHTML = "";
}

function selectAnswer(selectedIndex) {
  const q = questions[currentQuestionIndex];
  const buttons = answersContainer.querySelectorAll("button");

  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === q.correctIndex) {
      btn.classList.add("correct");
    } else if (idx === selectedIndex) {
      btn.classList.add("incorrect");
    }
  });

  if (selectedIndex === q.correctIndex) {
    feedback.textContent = "תשובה נכונה! 👏";
    score++;
  } else {
    feedback.textContent = `תשובה שגויה. התשובה הנכונה היא: ${q.answers[q.correctIndex]}`;
  }

  nextBtn.style.display = "inline-block";
}

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  quizContainer.style.display = "none";
  resultContainer.style.display = "block";
  scoreText.textContent = `קיבלת ${score * 10} מתוך ${questions.length * 10} נקודות`;
}

restartBtn.addEventListener("click", () => {
  resultContainer.style.display = "none";
  mainMenu.style.display = "flex";
});
