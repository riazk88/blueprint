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
        question: "Do you feel sad, down, or blue most of the time?",
        choiceA: "0",
        choiceB: "1",
        choiceC: "2",
        choiceD: "3",
        choiceE: "4",
    },
    {
        question: "Do you feel helpless?",
        choiceA: "0",
        choiceB: "1",
        choiceC: "2",
        choiceD: "3",
        choiceE: "4",
    },
    {
        question: "Do you feel much more talkative or speak faster than usual?",
        choiceA: "0",
        choiceB: "1",
        choiceC: "2",
        choiceD: "3",
        choiceE: "4",
    },
    {
        question: "Do you engage in behaviors that others consider to be risky?",
        choiceA: "0",
        choiceB: "1",
        choiceC: "2",
        choiceD: "3",
        choiceE: "4",
    },
    {
        question: "Do you experience excessive thinking or worrying?",
        choiceA: "0",
        choiceB: "1",
        choiceC: "2",
        choiceD: "3",
        choiceE: "4",
    },
    {
        question: "Do you feel restless or on edge?",
        choiceA: "0",
        choiceB: "1",
        choiceC: "2",
        choiceD: "3",
        choiceE: "4",
    },
    {
        question: "Do you get irritated easily or have difficulty controlling anger?",
        choiceA: "0",
        choiceB: "1",
        choiceC: "2",
        choiceD: "3",
        choiceE: "4",
    },
    {
        question: "Do you use drugs other than those required for medical reasons?",
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