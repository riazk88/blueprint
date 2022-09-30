const start = document.getElementById("start");

const quiz = document.getElementById("quiz");

const question = document.getElementById("question");

const choiceA = document.getElementById("0");

const choiceB = document.getElementById("1");

const choiceC = document.getElementById("2");

const choiceD = document.getElementById("3");

const choiceE = document.getElementById("4");

// const progress = document.getElementById("progress");

const scoreDiv = document.getElementById("scoreContainer");

const scoreSubmit = document.getElementById("score-submit");

const userInput = document.getElementById("user-input");

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

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
let score = 8;

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
    // showProgress();
}

// progress bar

// function showProgress(){
//     for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
//         progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
//     }
// }


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
function scoreshow(){
    scoreDiv.style.display = "block";

    // calculate the amount of question percent answered by the user
    const scorePerCent = Math.round(100 * score/questions.length);

    scoreDiv.innerHTML += "<p>"+ scorePerCent +"%</p>";

    results.style.display = "block"
}


scoreSubmit.addEventListener('submit', e => {
  e.preventDefault()

  console.log('form was submitted!')

  const localScores = JSON.parse(localStorage.getItem('scores'))

//   localScores.push(userInput.value)

  localStorage.setItem('scores', JSON.stringify(localScores))

  console.log(localScores)
})