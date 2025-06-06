// מערך השאלות
const questions = [
    {
        question: "מהי בירת ישראל?",
        answers: ["תל אביב", "חיפה", "ירושלים", "אילת"],
        correct: 2
    },
    {
        question: "מהו צבע הדגל של ישראל?",
        answers: ["אדום ולבן", "כחול ולבן", "ירוק וצהוב", "שחור ולבן"],
        correct: 1
    },
    // הוסף כאן עוד 8 שאלות לפי הדוגמה
    {
        question: "מהי שפת התכנות של האתר הזה?",
        answers: ["Python", "Java", "C++", "JavaScript"],
        correct: 3
    },
    {
        question: "כמה ימים יש בשבוע?",
        answers: ["5", "6", "7", "8"],
        correct: 2
    },
    {
        question: "מהי החיה הגדולה ביותר בעולם?",
        answers: ["פיל", "לוויתן כחול", "קרנף", "דינוזאור"],
        correct: 1
    },
    {
        question: "באיזה יבשת נמצאת מצרים?",
        answers: ["אסיה", "אירופה", "אפריקה", "אוסטרליה"],
        correct: 2
    },
    {
        question: "כמה צבעים יש בקשת?",
        answers: ["5", "6", "7", "8"],
        correct: 2
    },
    {
        question: "מהו האי הגדול ביותר בעולם?",
        answers: ["גרינלנד", "מדגסקר", "איסלנד", "הוואי"],
        correct: 0
    },
    {
        question: "מהי השפה המדוברת ביותר בעולם?",
        answers: ["אנגלית", "סינית", "ספרדית", "ערבית"],
        correct: 1
    },
    {
        question: "כמה שעות יש ביום?",
        answers: ["12", "24", "18", "36"],
        correct: 1
    }
];

// משתנים לשמירת מצב
let currentQuestionIndex = 0;
let score = 0;

const mainMenu = document.getElementById('main-menu');
const quizContainer = document.getElementById('quiz-container');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const feedback = document.getElementById('feedback');
const nextBtn = document.getElementById('next-btn');
const resultContainer = document.getElementById('result-container');
const scoreText = document.getElementById('score-text');
const restartBtn = document.getElementById('restart-btn');

document.getElementById('btn-quiz').addEventListener('click', startQuiz);
nextBtn.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
});
restartBtn.addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.style.display = 'none';
    mainMenu.style.display = 'block';
});

function startQuiz() {
    mainMenu.style.display = 'none';
    quizContainer.style.display = 'block';
    currentQuestionIndex = 0;
    score = 0;
    showQuestion();
}

function showQuestion() {
    feedback.textContent = '';
    nextBtn.style.display = 'none';
    const currentQ = questions[currentQuestionIndex];
    questionText.textContent = currentQ.question;
    answersContainer.innerHTML = '';

    currentQ.answers.forEach((answer, index) => {
        const btn = document.createElement('button');
        btn.textContent = answer;
        btn.addEventListener('click', () => selectAnswer(index));
        answersContainer.appendChild(btn);
    });
}

function selectAnswer(selectedIndex) {
    const currentQ = questions[currentQuestionIndex];
    const buttons = answersContainer.querySelectorAll('button');
    
    // ננעל את כל הכפתורים אחרי לחיצה
    buttons.forEach(btn => btn.disabled = true);

    if (selectedIndex === currentQ.correct) {
        buttons[selectedIndex].classList.add('correct');
        feedback.textContent = "תשובה נכונה";
        score += 10;
    } else {
        buttons[selectedIndex].classList.add('wrong');
        buttons[currentQ.correct].classList.add('correct');
        feedback.textContent = "תשובה שגויה";
    }

    nextBtn.style.display = 'inline-block';
}

function showResults() {
    quizContainer.style.display = 'none';
    resultContainer.style.display = 'block';
    scoreText.textContent = `הציון שלך הוא: ${score} מתוך 100 נקודות`;
}
