const questions = [
  {
    question: "כמה חברי כנסת יש בישראל?",
    answers: ["120", "100", "150", "80"],
    correctIndex: 0
  },
  {
    question: "איזו עיר ישראלית ידועה בזכות חוף הים שלה וחיי הלילה?",
    answers: ["תל אביב", "ירושלים", "צפת", "נצרת"],
    correctIndex: 0
  },
  {
    question: "מה צבע הדגל של ישראל?",
    answers: ["כחול ולבן", "אדום ולבן", "ירוק ולבן", "צהוב ולבן"],
    correctIndex: 0
  },
  {
    question: "מה שותים כשצמאים?",
    answers: ["מים", "שמן", "מלח", "קמח"],
    correctIndex: 0
  },
  {
    question: "מה עושים עם מטרייה?",
    answers: ["נשמרים מהגשם", "אוכלים", "רוקדים איתה", "כובשים איתה הרים"],
    correctIndex: 0
  },
  {
    question: "כמה ימים יש בשבוע?",
    answers: ["7", "5", "10", "6"],
    correctIndex: 0
  },
  {
    question: "מהי בירת ישראל?",
    answers: ["ירושלים", "תל אביב", "חיפה", "באר שבע"],
    correctIndex: 0
  },
  {
    question: "כמה רגליים יש לכלב?",
    answers: ["4", "2", "6", "8"],
    correctIndex: 0
  },
  {
    question: "מהו שם הספר שכתב הרצל?",
    answers: ["אלטנוילנד", "מדינת היהודים", "חזון ציון", "עם לבדד ישכון"],
    correctIndex: 0
  },
  {
    question: "מהי העיר הראשונה שהוקמה בישראל בעת החדשה?",
    answers: ["תל אביב", "פתח תקווה", "חדרה", "ראשון לציון"],
    correctIndex: 1
  },
  {
    question: "מהו 'חוק השבות'?",
    answers: [
      "חוק שמאפשר ליהודים לעלות לישראל",
      "חוק המגביל נסיעה לחו״ל",
      "חוק שמסדיר חופשות בארץ",
      "חוק הקובע את גובה המיסים לתיירים"
    ],
    correctIndex: 0
  },
  {
    question: "כמה אותיות יש באלפבית העברי?",
    answers: ["22", "26", "24", "20"],
    correctIndex: 0
  },
  {
    question: "איזה צבע יש לדשא?",
    answers: ["ירוק", "כחול", "אדום", "כתום"],
    correctIndex: 0
  },
  {
    question: "באיזו יבשת נמצאת ישראל?",
    answers: ["אסיה", "אירופה", "אפריקה", "אמריקה"],
    correctIndex: 0
  },
  {
    question: "מהו הפרי הצהוב עם הקליפה העבה?",
    answers: ["בננה", "תפוז", "תפוח", "ענב"],
    correctIndex: 0
  },
  {
    question: "מה שמה של הרכבת הקלה בעיר הבירה?",
    answers: ["הרכבת הקלה של ירושלים", "רַקָל", "המטרונית", "קו החוף"],
    correctIndex: 0
  },
  {
    question: "מה היה המבצע שבו הועלו יהודי אתיופיה לישראל ב-1991?",
    answers: ["מבצע שלמה", "מבצע משה", "מבצע יונתן", "מבצע אביב נעורים"],
    correctIndex: 0
  }
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
