const start = document.getElementById("start");

const quiz = document.getElementById("quiz");

const question = document.getElementById("question");

const choiceA = document.getElementById("0");

const choiceB = document.getElementById("1");

const choiceC = document.getElementById("2");

const choiceD = document.getElementById("3");

const choiceE = document.getElementById("4");

const scoreDiv = document.getElementById("scoreContainer");

const localStorage = window.localStorage;


// create questions
let questions = [
    {
        question: "Little interest or pleasure in doing things?",
        choiceA: "0",
        choiceB: "1",
        choiceC: "2",
        choiceD: "3",
        choiceE: "4",
    },
    {
        question: "Feeling down, depressed, or hopeless?",
        choiceA: "0",
        choiceB: "1",
        choiceC: "2",
        choiceD: "3",
        choiceE: "4",
    },
    {
        question: "Sleeping less than usual, but still have a lot of energy?",
        choiceA: "0",
        choiceB: "1",
        choiceC: "2",
        choiceD: "3",
        choiceE: "4",
    },
    {
        question: "Starting lots more projects than usual or doing more risky things than usual?",
        choiceA: "0",
        choiceB: "1",
        choiceC: "2",
        choiceD: "3",
        choiceE: "4",
    },
    {
        question: "Feeling nervous, anxious, frightened, worried, or on edge?",
        choiceA: "0",
        choiceB: "1",
        choiceC: "2",
        choiceD: "3",
        choiceE: "4",
    },
    {
        question: "Feeling panic or being frightened?",
        choiceA: "0",
        choiceB: "1",
        choiceC: "2",
        choiceD: "3",
        choiceE: "4",
    },
    {
        question: "Avoiding situations that make you feel anxious?",
        choiceA: "0",
        choiceB: "1",
        choiceC: "2",
        choiceD: "3",
        choiceE: "4",
    },
    {
        question: "Drinking at least 4 drinks of any kind of alcohol in a single day?",
        choiceA: "0",
        choiceB: "1",
        choiceC: "2",
        choiceD: "3",
        choiceE: "4",
    }
]

// create some variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let score = 0;

// show a question
function showQuestion(){
    let q = questions[runningQuestion];

    question.innerHTML = "<p>"+ q.question +"</p>";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
    choiceD.innerHTML = q.choiceD;
    choiceE.innerHTML = q.choiceE;
}

start.addEventListener("click",startQuiz);

// start quiz
function startQuiz(){
    start.style.display = "none";
    showQuestion();
    quiz.style.display = "inline-block";
}


function checkAnswer(answer){
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        showQuestion();
    }else{
        // end the quiz and show the score
        scoreshow();
    }
}

// score show