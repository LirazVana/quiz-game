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
  {
    question: "מהו כוכב הלכת הקרוב ביותר לשמש?",
    answers: ["נוגה", "מאדים", "מרקורי", "כדור הארץ"],
    correctIndex: 2,
  },
  {
    question: "באיזו מדינה נמצא מגדל אייפל?",
    answers: ["איטליה", "צרפת", "אנגליה", "ספרד"],
    correctIndex: 1,
  },
  {
    question: "כמה ימים יש בשבוע?",
    answers: ["5", "6", "7", "8"],
    correctIndex: 2,
  },
  {
    question: "מהי שפת התכנות הפופולרית ל־web?",
    answers: ["C++", "Python", "JavaScript", "Java"],
    correctIndex: 2,
  },
  {
    question: "באיזו יבשת נמצא מדבר סהרה?",
    answers: ["אסיה", "אפריקה", "אמריקה", "אוסטרליה"],
    correctIndex: 1,
  },
  {
    question: "מהי עיר הבירה של ישראל?",
    answers: ["תל אביב", "ירושלים", "חיפה", "באר שבע"],
    correctIndex: 1,
  },
  {
    question: "מי המציא את הנורה החשמלית?",
    answers: ["אלברט איינשטיין", "תומאס אדיסון", "אלכסנדר גרהם בל", "ניקולה טסלה"],
    correctIndex: 1,
  },
  {
    question: "כמה צבעים יש בקשת?",
    answers: ["5", "6", "7", "8"],
    correctIndex: 2,
  }
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
  nextBtn.style.display = "none";
  feedback.textContent = "";
  answersContainer.innerHTML = "";

  const currentQuestion = questions[currentQuestionIndex];
  questionText.textContent = currentQuestion.question;

  currentQuestion.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.dir = "rtl";
    btn.addEventListener("click", () => selectAnswer(index));
    answersContainer.appendChild(btn);
  });
}

function selectAnswer(selectedIndex) {
  const currentQuestion = questions[currentQuestionIndex];
  const buttons = answersContainer.querySelectorAll("button");

  buttons.forEach((btn, idx) => {
    btn.disabled = true;
    if (idx === currentQuestion.correctIndex) {
      btn.classList.add("correct");
    }
    if (idx === selectedIndex && idx !== currentQuestion.correctIndex) {
      btn.classList.add("incorrect");
    }
  });

  if (selectedIndex === currentQuestion.correctIndex) {
    score++;
    feedback.textContent = "תשובה נכונה! כל הכבוד 🎉";
    feedback.style.color = "#28a745";
  } else {
    feedback.textContent = "תשובה לא נכונה. נסה שוב בשאלה הבאה.";
    feedback.style.color = "#dc3545";
  }

  if (currentQuestionIndex < questions.length - 1) {
    nextBtn.style.display = "block";
  } else {
    nextBtn.textContent = "סיים שאלון";
    nextBtn.style.display = "block";
  }
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
  scoreText.textContent = `קיבלת ${score} מתוך ${questions.length} שאלות נכונות.`;
}

restartBtn.addEventListener("click", () => {
  mainMenu.style.display = "flex";
  quizContainer.style.display = "none";
  resultContainer.style.display = "none";
});
