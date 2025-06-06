// שאלות השאלון
const questions = [
    {
        question: "מהי בירת ישראל?",
        answers: ["תל אביב", "ירושלים", "חיפה", "באר שבע"],
        correct: 1
    },
    {
        question: "כמה ימים יש בשבוע?",
        answers: ["5", "6", "7", "8"],
        correct: 2
    },
    {
        question: "מהי שפת התכנות הנפוצה לפיתוח אתרים?",
        answers: ["C++", "Python", "JavaScript", "Java"],
        correct: 2
    },
    {
        question: "איזה צבע מתקבל כאשר מערבבים אדום וכחול?",
        answers: ["סגול", "ירוק", "כתום", "צהוב"],
        correct: 0
    },
    {
        question: "מהי ההמבורגר המפורסם שמקורו בארה\"ב?",
        answers: ["פיצה", "המבורגר", "שווארמה", "טאקו"],
        correct: 1
    },
    {
        question: "כמה נשמות יש לאדם?",
        answers: ["אחת", "שתיים", "שלוש", "ארבע"],
        correct: 0
    },
    {
        question: "מהי חיה ימית?",
        answers: ["אריה", "דולפין", "זאב", "קוף"],
        correct: 1
    },
    {
        question: "מהי שפת האם שלך?",
        answers: ["עברית", "אנגלית", "צרפתית", "ספרדית"],
        correct: 0
    },
    {
        question: "כמה כפות יש לאדם?",
        answers: ["1", "2", "3", "4"],
        correct: 1
    },
    {
        question: "מהו צבע הדגל של ישראל?",
        answers: ["כחול-לבן", "אדום-לבן", "ירוק-צהוב", "שחור-לבן"],
        correct: 0
    }
];

let currentQuestionIndex = 0;
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
    resultContainer.style.display = "none";
    quizContainer.style.display = "block";
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
    feedback.textContent = "";
    nextBtn.style.display = "none";
});

function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    answersContainer.innerHTML = "";

    currentQuestion.answers.forEach((answer, index) => {
        const btn = document.createElement("button");
        btn.classList.add("answer-btn");
        btn.textContent = answer;
        btn.addEventListener("click", () => selectAnswer(index));
        answersContainer.appendChild(btn);
    });
}

function selectAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    const buttons = answersContainer.querySelectorAll("button");

    // מנטרל את כל הכפתורים כדי למנוע לחיצות נוספות
    buttons.forEach(btn => btn.disabled = true);

    if (selectedIndex === currentQuestion.correct) {
        buttons[selectedIndex].classList.add("correct");
        feedback.textContent = "תשובה נכונה";
        score += 10;
    } else {
        buttons[selectedIndex].classList.add("wrong");
        buttons[currentQuestion.correct].classList.add("correct");
        feedback.textContent = "תשובה לא נכונה";
    }

    nextBtn.style.display = "inline-block";
}

nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
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

function showResult() {
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";
    scoreText.textContent = `הציון שלך הוא: ${score} מתוך 100 נקודות`;
}
