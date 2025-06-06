const questions = [
  {
    question: "מהי עיר הבירה של ישראל?",
    answers: ["תל אביב", "ירושלים", "חיפה", "באר שבע"],
    correct: 1
  },
  {
    question: "כמה רגליים יש לעכביש?",
    answers: ["6", "8", "10", "12"],
    correct: 1
  },
  {
    question: "איזה כוכב לכת קרוב ביותר לשמש?",
    answers: ["מאדים", "נוגה", "כדור הארץ", "כוכב חמה"],
    correct: 3
  },
  {
    question: "מהו המטבע של ארצות הברית?",
    answers: ["אירו", "שקל", "דולר", "לירה"],
    correct: 2
  },
  {
    question: "איזו חיה נחשבת לגדולה ביותר על פני כדור הארץ?",
    answers: ["פיל", "כריש לבן", "לווייתן כחול", "דינוזואר"],
    correct: 2
  },
  {
    question: "מהי השפה הרשמית ביפן?",
    answers: ["יפנית", "סינית", "קוריאנית", "אנגלית"],
    correct: 0
  },
  {
    question: "באיזו יבשת נמצאת מצרים?",
    answers: ["אסיה", "אירופה", "אפריקה", "אמריקה"],
    correct: 2
  },
  {
    question: "כמה ימים יש בשנה רגילה?",
    answers: ["365", "366", "364", "360"],
    correct: 0
  },
  {
    question: "מי המציא את הנורה החשמלית?",
    answers: ["אלברט איינשטיין", "ניקולה טסלה", "תומס אדיסון", "אייזק ניוטון"],
    correct: 2
  },
  {
    question: "מהי בירת צרפת?",
    answers: ["פריז", "ליון", "מרסיי", "בריסל"],
    correct: 0
  }
];

let currentQuestion = 0;
let score = 0;

const mainMenu = document.getElementById("main-menu");
const quizContainer = document.getElementById("quiz-container");
const resultContainer = document.getElementById("result-container");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

document.getElementById("btn-quiz").addEventListener("click", () => {
  mainMenu.style.display = "none";
  quizContainer.style.display = "block";
  resultContainer.style.display = "none";
  currentQuestion = 0;
  score = 0;
  showQuestion();
});

function showQuestion() {
  const q = questions[currentQuestion];
  questionText.textContent = q.question;
  answersContainer.innerHTML = "";
  feedback.textContent = "";
  nextBtn.style.display = "none";

  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.className = "answer-button";
    btn.textContent = answer;
    btn.addEventListener("click", () => handleAnswer(index));
    answersContainer.appendChild(btn);
  });
}

function handleAnswer(selectedIndex) {
  const q = questions[currentQuestion];
  const buttons = document.querySelectorAll(".answer-button");

  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.correct) {
      btn.classList.add("correct");
    } else if (i === selectedIndex) {
      btn.classList.add("incorrect");
    }
  });

  if (selectedIndex === q.correct) {
    feedback.textContent = "תשובה נכונה!";
    score += 10;
  } else {
    feedback.textContent = "תשובה שגויה!";
  }

  nextBtn.style.display = "inline-block";
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  quizContainer.style.display = "none";
  resultContainer.style.display = "block";
  document.getElementById("score-text").textContent = `ציון סופי: ${score} מתוך 100`;
}

restartBtn.addEventListener("click", () => {
  mainMenu.style.display = "block";
  resultContainer.style.display = "none";
});
