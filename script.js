const questions = [
  {
    question: "מהי בירת ישראל?",
    answers: ["ירושלים", "תל אביב", "חיפה", "באר שבע"],
    correctIndex: 0
  },
  {
    question: "מה צבע הדגל של ישראל?",
    answers: ["כחול ולבן", "אדום ולבן", "ירוק ולבן", "צהוב ולבן"],
    correctIndex: 0
  },
  // הוסיפי כאן את כל 10 השאלות שלך לפי הפורמט הזה
];

const mainMenu = document.getElementById("main-menu");
const btnQuiz = document.getElementById("btn-quiz");
const quizContainer = document.getElementById("quiz-container");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const resultContainer = document.getElementById("result-container");
const scoreText = document.getElementById("score-text");
const restartBtn = document.getElementById("restart-btn");

let currentQuestionIndex = 0;
let score = 0;

btnQuiz.addEventListener("click", () => {
  mainMenu.style.display = "none";
  resultContainer.style.display = "none";
  quizContainer.style.display = "block";
  currentQuestionIndex = 0;
  score = 0;
  feedback.textContent = "";
  nextBtn.style.display = "none";
  showQuestion();
});

function showQuestion() {
  feedback.textContent = "";
  nextBtn.style.display = "none";
  answersContainer.innerHTML = "";

  const q = questions[currentQuestionIndex];
  questionText.textContent = q.question;

  q.answers.forEach((answer, i) => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.classList.add("answer-button");
    btn.addEventListener("click", () => handleAnswer(i));
    answersContainer.appendChild(btn);
  });
}

function handleAnswer(selectedIndex) {
  const q = questions[currentQuestionIndex];
  const buttons = answersContainer.querySelectorAll("button");

  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if(idx === q.correctIndex) {
      btn.classList.add("correct");
    } else if(idx === selectedIndex) {
      btn.classList.add("incorrect");
    }
  });

  if(selectedIndex === q.correctIndex) {
    feedback.textContent = "תשובה נכונה! 👏";
    score++;
  } else {
    feedback.textContent = `תשובה שגויה. התשובה הנכונה היא: ${q.answers[q.correctIndex]}`;
  }

  nextBtn.style.display = "inline-block";
}

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  quizContainer.style.display = "none";
  resultContainer.style.display = "block";
  scoreText.textContent = `קיבלת ${score} מתוך ${questions.length}`;
}

restartBtn.addEventListener("click", () => {
  resultContainer.style.display = "none";
  mainMenu.style.display = "flex";
});
