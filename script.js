const questions = [
  {
    question: "מהי הבירה של צרפת?",
    answers: ["פריז", "לונדון", "ברלין", "רומא"],
    correctIndex: 0,
    explanation: "פריז היא בירת צרפת ומרכז תרבותי, כלכלי ואמנותי חשוב באירופה."
  },
  {
    question: "איזו יבשת היא הגדולה ביותר בעולם?",
    answers: ["אסיה", "אפריקה", "אירופה", "אמריקה"],
    correctIndex: 0,
    explanation: "אסיה היא היבשת הגדולה ביותר בשטח ובאוכלוסייה."
  },
  {
    question: "איזה ים נמצא מערבית לישראל?",
    answers: ["הים התיכון", "ים סוף", "ים המלח", "ים סיבירי"],
    correctIndex: 0,
    explanation: "הים התיכון גובל במערב ישראל ומשמש כנתיב מסחר ותחבורה חשוב."
  },
  {
    question: "באיזו יבשת נמצאת מדינת ברזיל?",
    answers: ["אמריקה הדרומית", "אמריקה הצפונית", "אירופה", "אפריקה"],
    correctIndex: 0,
    explanation: "ברזיל היא המדינה הגדולה ביותר באמריקה הדרומית."
  },
  {
    question: "מהי העיר המאוכלסת ביותר בעולם?",
    answers: ["טוקיו", "ניו יורק", "מוסקבה", "בומביי"],
    correctIndex: 0,
    explanation: "טוקיו, בירת יפן, היא העיר עם מספר התושבים הגבוה ביותר בעולם."
  },
  {
    question: "איזה נהר הוא הארוך ביותר בעולם?",
    answers: ["נילוס", "האמזונס", "הדנובה", "הירדן"],
    correctIndex: 1,
    explanation: "נהר האמזונס נחשב כיום לארוך ביותר בעולם, באורך של כ-7,000 ק\"מ."
  },
  {
    question: "מהו האי הגדול ביותר בעולם?",
    answers: ["גרינלנד", "אוסטרליה", "מדגסקר", "בריטניה"],
    correctIndex: 0,
    explanation: "גרינלנד היא האי הלא-יבשתי הגדול ביותר בעולם."
  },
  {
    question: "איזה הר נחשב לגבוה ביותר בעולם?",
    answers: ["האברסט", "החרמון", "האלפים", "הרי האנדים"],
    correctIndex: 0,
    explanation: "הר האוורסט, הנמצא בהרי ההימלאיה, הוא הגבוה ביותר בעולם – 8,848 מטרים."
  },
  {
    question: "באיזו מדינה נמצא הספארי הפופולרי ביותר?",
    answers: ["קניה", "מצרים", "ישראל", "ארה\"ב"],
    correctIndex: 0,
    explanation: "קניה מפורסמת בשמורות הטבע שלה ובספארי האפריקאי האותנטי."
  },
  {
    question: "איזו מדינה מוקפת ים מכל צדדיה?",
    answers: ["אוסטרליה", "מצרים", "רוסיה", "קנדה"],
    correctIndex: 0,
    explanation: "אוסטרליה היא אי-יבשת, ולכן מוקפת מים מכל צדדיה."
  },
  {
    question: "מהי הבירה של יפן?",
    answers: ["טוקיו", "קיוטו", "אוסקה", "הירושימה"],
    correctIndex: 0,
    explanation: "טוקיו היא בירת יפן והעיר הגדולה ביותר בה."
  },
  {
    question: "איזו מדינה מחוברת בגשר עם שבדיה?",
    answers: ["דנמרק", "נורווגיה", "פינלנד", "גרמניה"],
    correctIndex: 0,
    explanation: "גשר ארסונד מחבר את דנמרק (קופנהגן) לשבדיה (מאלמו)."
  },
  {
    question: "איפה נמצאים הרי האנדים?",
    answers: ["אמריקה הדרומית", "אירופה", "אסיה", "אפריקה"],
    correctIndex: 0,
    explanation: "הרי האנדים משתרעים לאורך החוף המערבי של אמריקה הדרומית."
  },
  {
    question: "מהו הים המלוח ביותר בעולם?",
    answers: ["ים המלח", "ים סוף", "הים השחור", "הים האדום"],
    correctIndex: 0,
    explanation: "ים המלח הוא הים בעל ריכוז המלחים הגבוה ביותר בעולם."
  },
  {
    question: "איזו מדינה יש לה את המספר הגדול ביותר של שכנים?",
    answers: ["רוסיה", "סין", "גרמניה", "צרפת"],
    correctIndex: 1,
    explanation: "סין גובלת ב-14 מדינות שונות – המספר הגבוה ביותר יחד עם רוסיה."
  },
  {
    question: "מהו המדבר הגדול ביותר בעולם?",
    answers: ["המדבר הסהרה", "המדבר האנטארקטי", "הנגב", "המדבר הגובי"],
    correctIndex: 1,
    explanation: "המדבר האנטארקטי נחשב למדבר הגדול בעולם בגלל היובש הקיצוני שבו."
  },
  {
    question: "מהי בירת קנדה?",
    answers: ["אוטווה", "טורונטו", "מונטריאול", "ונקובר"],
    correctIndex: 0,
    explanation: "אוטווה היא עיר הבירה של קנדה, ולא טורונטו כפי שחושבים רבים."
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
let shuffledAnswers = [];

// פונקציה לערבוב מערך
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

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
  console.log("שאלה מס'", currentQuestionIndex + 1);
  feedback.textContent = "";
  nextBtn.style.display = "none";
  answersContainer.innerHTML = "";

  const q = questions[currentQuestionIndex];
  questionText.textContent = q.question;

  // יוצרים מערך של אובייקטים עם טקסט ומידע אם התשובה נכונה
  shuffledAnswers = q.answers.map((text, idx) => ({
    text,
    isCorrect: idx === q.correctIndex
  }));

  // מערבבים את התשובות
  shuffleArray(shuffledAnswers);

  // יוצרים כפתורים לפי הסדר המעורבב
  shuffledAnswers.forEach((ansObj, i) => {
    const btn = document.createElement("button");
    btn.textContent = ansObj.text;
    btn.classList.add("answer-button");
    btn.addEventListener("click", () => handleAnswer(i));
    answersContainer.appendChild(btn);
  });
}

function handleAnswer(selectedIndex) {
  const btns = answersContainer.querySelectorAll("button");
  const currentQuestion = questions[currentQuestionIndex];

  btns.forEach((btn, idx) => {
    btn.disabled = true;
    if(shuffledAnswers[idx].isCorrect) btn.classList.add("correct");
    else if(idx === selectedIndex) btn.classList.add("incorrect");
  });

  if (shuffledAnswers[selectedIndex].isCorrect) {
    feedback.innerHTML = `תשובה נכונה! 👏<br><small>${currentQuestion.explanation}</small>`;
    score++;
  } else {
    const correctAnswer = shuffledAnswers.find(a => a.isCorrect).text;
    feedback.innerHTML = `תשובה שגויה. התשובה הנכונה היא: ${correctAnswer}<br><small>${currentQuestion.explanation}</small>`;
  }

  nextBtn.style.display = "inline-block";
}

nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length) showQuestion();
  else showResult();
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
