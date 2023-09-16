const questions = [
    
    {
        question: "What are the main ingirdients in Amritarishta?",
        answeres: [
            { text: "SarvaJvara, Jirna Jvara", correct: true},
            { text: "	Arsha, Agnimandya, Udararoga, Vibandha", correct: false},
            { text: "Kandu, Tvak Vikara, Vibandha", correct: false},
            { text: "Balaroga, Balakshaya, Agnimandya, Aruchi", correct: false},
        ]
    },
    {
        question: "Which taste is associated with the Pitta dosha?",
        answeres: [
            { text: "Sweet", correct: false },
            { text: "Bitter", correct: false },
            { text: "Sour", correct: true },
            { text: "Salty", correct: false }
        ]
    },
    {
        question: "Which of the following is not a property for Ayurvedic medicines?",
        answeres: [
            { text: "Do not have side effects", correct: false},
            { text: "Reduce stress & anxiety", correct: false},
            { text: "Toxifies the body", correct: true},
            { text: "Cures insomnia", correct: false},
        ]
    },
    {
        question: "What are the main ingirdients in Aragvadharishta?",
        answeres: [
            { text: "SarvaJvara, Jirna Jvara", correct: false},
            { text: "	Arsha, Agnimandya, Udararoga, Vibandha", correct: false},
            { text: "Kandu, Tvak Vikara, Vibandha", correct: true},
            { text: "Balaroga, Balakshaya, Agnimandya, Aruchi", correct: false},
        ]
    },
    {
        question: "What is the Ayurvedic practice of self-massage with warm oil called?",
        answeres: [
            { text: "Acupuncture", correct: false },
            { text: "Pranayama", correct: false },
            { text: "Abhyanga", correct: true },
            { text: "Meditation", correct: false }
        ]
    },
    {
        question: "What are the main ingirdients in Aravindasava?",
        answeres: [
            { text: "SarvaJvara, Jirna Jvara", correct: false},
            { text: "	Arsha, Agnimandya, Udararoga, Vibandha", correct: false},
            { text: "Kandu, Tvak Vikara, Vibandha", correct: false},
            { text: "Balaroga, Balakshaya, Agnimandya, Aruchi", correct: true},
        ]
    },
    {
        question: "Which element is associated with the Vata dosha?",
        answeres: [
            { text: "Earth", correct: false },
            { text: "Water", correct: false },
            { text: "Air", correct: true },
            { text: "Fire", correct: false }
        ]
    },
    {
        question: "What is the primary goal of Ayurvedic medicine?",
        answeres: [
            { text: "To cure diseases", correct: false },
            { text: "To promote longevity and well-being", correct: true },
            { text: "To perform surgery", correct: false },
            { text: "To maintain body temperature", correct: false }
        ]
    },
    {
        question: "Which dosha is associated with the qualities of heaviness, coolness, and stability?",
        answeres: [
            { text: "Vata", correct: false },
            { text: "Pitta", correct: false },
            { text: "Kapha", correct: true },
            { text: "Sattva", correct: false }
        ]
    },
    {
        question: "In Ayurveda, what is the term for the vital energy or life force within the body?",
        answeres: [
            { text: "Qi", correct: false },
            { text: "Prana", correct: true },
            { text: "Chakra", correct: false },
            { text: "Yin", correct: false }
        ]
    },
    {
        question: "What are the main ingirdients in Abhayarishta?",
        answeres: [
            { text: "SarvaJvara, Jirna Jvara", correct: false},
            { text: "	Arsha, Agnimandya, Udararoga, Vibandha", correct: true},
            { text: "Kandu, Tvak Vikara, Vibandha", correct: false},
            { text: "Balaroga, Balakshaya, Agnimandya, Aruchi", correct: false},
        ]
    },

];

const questionElement = document.getElementById("question");

const answerButton = document.getElementById("answer-button");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;

let score = 0;


function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function startQuiz(){
    currentQuestionIndex = 0;
    score =0;
    nextButton.innerHtml = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex]
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question

    currentQuestion.answeres.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
            
        }
        button.addEventListener("click", selectAnswer);
    });
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";

    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}
function showScore(){
    resetState();
    questionElement.innerHTML = `Your score is ${score} out of ${questions.length}.`
    nextButton.innerHTML = "Play Again"
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex< questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}
nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})

startQuiz();