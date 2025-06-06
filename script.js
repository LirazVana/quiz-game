const questions = [
    {
        question: "מה בירת ישראל?",
        answers: ["תל אביב", "חיפה", "ירושלים", "באר שבע"],
        correct: 2
    },
    {
        question: "כמה ימים יש בשבוע?",
        answers: ["5", "6", "7", "8"],
        correct: 2
    },
    {
        question: "מה הצבע של השמש?",
        answers: ["צהוב", "כחול", "אדום", "ירוק"],
        correct: 0
    },
    {
        question: "כמה רגליים יש לחתול?",
        answers: ["2", "3", "4", "5"],
        correct: 2
    },
    {
        question: "מהי שפת התכנות הפופולרית ביותר?",
        answers: ["Python", "Java", "HTML", "Scratch"],
        correct: 0
    },
    {
        question: "מהו ים המלח?",
        answers: ["אגם", "נהר", "ים", "הר"],
        correct: 0
    },
    {
        question: "באיזו יבשת נמצאת ישראל?",
        answers: ["אירופה", "אפריקה", "אסיה", "אמריקה"],
        correct: 2
    },
    {
        question: "מהו המספר הבא אחרי 9?",
        answers: ["8", "10", "11", "9"],
        correct: 1
    },
    {
        question: "איזה חיה נובחת?",
        answers: ["חתול", "כלב", "דג", "סוס"],
        correct: 1
    },
    {
        question: "מהי בירת צרפת?",
        answers: ["רומא", "לונדון", "פריז", "ברלין"],
        correct: 2
    }
];

let currentQuestionIndex = 0;
let score = 0;

const quizContainer = document.getElementById("quiz-container");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const feedback = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");

const resultContainer = document.getElementById("result-container");
const scoreText = document.getElementById("score-text");
const restartBtn = document.getElementById("restart-btn");

document.getElementById("btn-quiz").addEventListener("click", startQuiz);
nextBtn.addEventListener("click", showNextQuestion);
restartBtn.addEventListener("click", startQuiz);

function startQuiz() {
    document.getElementById("main-menu").style.display = "none";
    resultContainer.style.display = "none";
    quizContainer.style.display = "block";
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    answersContainer.innerHTML = "";
    feedback.textContent = "";
    nextBtn.style.display = "none";

    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.classList.add("answer-btn");
        button.addEventListener("click", () => selectAnswer(index));
        answersContainer.appendChild(button);
    });
}

function selectAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const buttons = document.querySelectorAll(".answer-btn");

    buttons.forEach((btn, index) => {
        btn.disabled = true;
        if (index === currentQuestion.correct) {
            btn.classList.add("correct");
        }
        if (index === selectedIndex && index !== currentQuestion.correct) {
            btn.classList.add("incorrect");
        }
    });

    if (selectedIndex === currentQuestion.correct) {
        feedback.textContent = "תשובה נכונה!";
        score += 10;
    } else {
        feedback.textContent = "תשובה שגויה!";
    }

    nextBtn.style.display = "inline-block";
}

function showNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";

    const maxScore = questions.length * 10;
    const percentage = (score / maxScore) * 100;
    let evaluation = "";

    if (percentage === 100) {
        evaluation = "מושלם! כל הכבוד 👑";
    } else if (percentage >= 90) {
        evaluation = "מצוין! עבודה נהדרת 💪";
    } else if (percentage >= 75) {
        evaluation = "טוב מאוד! המשיכי כך 😊";
    } else if (percentage >= 60) {
        evaluation = "טוב, יש מקום לשיפור 🙂";
    } else {
        evaluation = "כדאי לחזור על החומר... 😕";
    }

    scoreText.innerHTML = `
        קיבלת <strong>${score}</strong> מתוך <strong>${maxScore}</strong> נקודות.<br>
        ציון: <strong>${Math.round(percentage)}%</strong><br>
        <em>${evaluation}</em>
    `;
}
