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
const progressFill = document.getElementById("progress-fill");

const questions = [
    {
        question: "מהי בירת ישראל?",
        answers: ["תל אביב", "ירושלים", "חיפה", "באר שבע"],
        correctIndex: 1
    },
    {
        question: "מה צבע הדגל של ישראל?",
        answers: ["כחול ולבן", "אדום ולבן", "ירוק ולבן", "שחור ולבן"],
        correctIndex: 0
    },
    {
        question: "כמה ימים יש בשבוע?",
        answers: ["5", "6", "7", "8"],
        correctIndex: 2
    },
    {
        question: "מי המציא את החשמל?",
        answers: ["תומס אדיסון", "אלברט איינשטיין", "ניקולה טסלה", "מייקל פאראדיי"],
        correctIndex: 0
    },
    {
        question: "מהי השפה הרשמית בישראל?",
        answers: ["עברית", "ערבית", "אנגלית", "רוסית"],
        correctIndex: 0
    },
    {
        question: "באיזה יבשת נמצאת ישראל?",
        answers: ["אירופה", "אסיה", "אפריקה", "אמריקה"],
        correctIndex: 1
    },
    {
        question: "כמה כוכבים יש בדגל ארה\"ב?",
        answers: ["50", "51", "48", "52"],
        correctIndex: 0
    },
    {
        question: "מהי החיה הגדולה ביותר בעולם?",
        answers: ["פיל", "לווייתן כחול", "קרנף", "דינוזאור"],
        correctIndex: 1
    },
    {
        question: "כמה שיניים יש לאדם בוגר?",
        answers: ["28", "30", "32", "34"],
        correctIndex: 2
    },
    {
        question: "מהו הים המלוח ביותר?",
        answers: ["ים המלח", "הים התיכון", "הים האדום", "הים השחור"],
        correctIndex: 0
    }
];

let currentQuestionIndex = 0;
let score = 0;
let answered = false;

btnQuiz.addEventListener("click", () => {
    mainMenu.style.display = "none";
    quizContainer.style.display = "block";
    resultContainer.style.display = "none";
    currentQuestionIndex = 0;
    score = 0;
    answered = false;
    feedback.textContent = "";
    nextBtn.style.display = "none";
    showQuestion();
});

nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    answered = false;
    feedback.textContent = "";
    nextBtn.style.display = "none";

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
});

restartBtn.addEventListener("click", () => {
    resultContainer.style.display = "none";
    mainMenu.style.display = "block";
});

function showQuestion() {
    updateProgressBar();

    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;

    // מנקה תשובות קודמות
    answersContainer.innerHTML = "";

    currentQuestion.answers.forEach((answer, index) => {
        const btn = document.createElement("button");
        btn.classList.add("answer-btn");
        btn.textContent = answer;
        btn.disabled = false;

        btn.addEventListener("click", () => {
            if (answered) return; // למנוע לחיצות נוספות
            answered = true;

            if (index === currentQuestion.correctIndex) {
                btn.classList.add("correct");
                feedback.textContent = "תשובה נכונה";
                score += 10;
            } else {
                btn.classList.add("incorrect");
                // סימון התשובה הנכונה
                const buttons = answersContainer.querySelectorAll("button");
                buttons[currentQuestion.correctIndex].classList.add("correct");
                feedback.textContent = "תשובה שגויה";
            }

            // השבתת כל הכפתורים לאחר בחירה
            const buttons = answersContainer.querySelectorAll("button");
            buttons.forEach(b => b.disabled = true);

            nextBtn.style.display = "inline-block";
        });

        answersContainer.appendChild(btn);
    });
}

function showResult() {
    quizContainer.style.display = "none";
   
