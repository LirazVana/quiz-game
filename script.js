const questions = [
  {
    question: "מה בירת ישראל?",
    answers: ["תל אביב", "ירושלים", "חיפה", "באר שבע"],
    correct: 1
  },
  {
    question: "כמה זה 2 + 2?",
    answers: ["3", "4", "5", "6"],
    correct: 1
  },
  {
    question: "מה הצבע של השמש?",
    answers: ["כחול", "אדום", "צהוב", "ירוק"],
    correct: 2
  },
  {
    question: "כמה ימים יש בשבוע?",
    answers: ["5", "6", "7", "8"],
    correct: 2
  },
  {
    question: "מהו ההר הכי גבוה בעולם?",
    answers: ["חרמון", "הימלאיה", "אוורסט", "אלפים"],
    correct: 2
  },
  {
    question: "איזו חיה נובחת?",
    answers: ["חתול", "ציפור", "כלב", "פרה"],
    correct: 2
  },
  {
    question: "מהי שפת התכנות הזו?", 
    answers: ["Python", "JavaScript", "C#", "HTML"],
    correct: 1
  },
  {
    question: "באיזה יבשת נמצאת מצרים?",
    answers: ["אסיה", "אירופה", "אפריקה", "אמריקה"],
    correct: 2
  },
  {
    question: "איזו מדינה בצורת מגף?",
    answers: ["גרמניה", "ספרד", "איטליה", "צרפת"],
    correct: 2
  },
  {
    question: "מהי עיר הבירה של צרפת?",
    answers: ["רומא", "פריז", "מדריד", "בריסל"],
    correct: 1
  }
];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
  currentQuestion = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  const q = questions[currentQuestion];
  const main = document.getElementById("main-content");
  main.innerHTML = `
    <h2>שאלה ${currentQuestion + 1} מתוך ${questions.length}</h2>
    <p>${q.question}</p>
    <div id="answers"></div>
    <p id="feedback"></p>
    <button id="next" onclick="nextQuestion()" disabled>לשאלה הבאה</button>
  `;

  const answersDiv = document.getElementById("answers");
  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.onclick = () => checkAnswer(index);
    answersDiv.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const q = questions[currentQuestion];
  const buttons = document.querySelectorAll("#answers button");
  buttons.forEach((btn, i) => {
    btn.disabled = true;
    if (i === q.correct) btn.classList.add("correct");
    if (i === selected && i !== q.correct) btn.classList.add("wrong");
  });

  const feedback = document.getElementById("feedback");
  if (selected === q.correct) {
    feedback.textContent = "תשובה נכונה!";
    score += 10;
  } else {
    feedback.textContent = "תשובה שגויה.";
  }

  document.getElementById("next").disabled = false;
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  const main = document.getElementById("main-content");
  main.innerHTML = `
    <h2>סיימת את השאלון!</h2>
    <p>הציון שלך: ${score} מתוך 100</p>
    <button onclick="startQuiz()">נסה שוב</button>
  `;
}
