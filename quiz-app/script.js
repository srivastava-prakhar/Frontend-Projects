const questions = [
  {
    question: "Who is the father of  Megumi Fushiguro",
    answers: [
      {text: "Nanami" , correct: false},
      {text: "Mahoraga" , correct: false},
      {text: "Toji" , correct: true},
      {text: "Toge" , correct: false},
      ]
  },
  { question: "Who is the father of Goku",
  answers: [
    {text: "Raditz" , correct: false},
    {text: "Bardock" , correct: true},
    {text: "Dodoria" , correct: false},
    {text: "Zarbon" , correct: false},
    ]

  },
  {
    question: "Who was the original War-Hammer Titan ",
  answers: [
    {text: "Lara Tybur" , correct: true},
    {text: "Willy Tybur" , correct: false},
    {text: "Porco Galliard" , correct: false},
    {text: "Marcel Galliard" , correct: false},
    ]
  },
  {
    question: "Who is known as Black Swordsman",
  answers: [
    {text: "Kokushibo" , correct: false},
    {text: "Zoro" , correct: false},
    {text: "Guts" , correct: true},
    {text: "Kurosaki" , correct: false},
    ]
  },
  {
    question: "What is Saitama's superhero name in the association",
  answers: [
    {text: "Baldy" , correct: false},
    {text: "Hero for fun" , correct: false},
    {text: "OPM" , correct:false },
    {text: "Bald Cape" , correct: true },
    ]
  }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
  currentQuestionIndex = 0;
  score=0;
  nextButton.innerHTML = "Next" ;
  showQuestion();
}

 function showQuestion(){
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(answer.correct){
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetState(){
  nextButton.style.display = "none" ;
  while(answerButtons.firstChild)
  answerButtons.removeChild(answerButtons.firstChild)
}

 
function selectAnswer(e){
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++ ;
  }
  else{
    selectedBtn.classList.add("incorrect");
  }
  Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct === "true"){
      button.classList.add("correct");
    }
    button.disabled = "true";
  });
  nextButton.style.display = "block";
}

function showScore(){
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton(){
  currentQuestionIndex++ ; 
  if(currentQuestionIndex < questions.length){
    showQuestion();
  }else{
    showScore();
  }
}

nextButton.addEventListener("click",() =>{
  if(currentQuestionIndex < questions.length){
    handleNextButton();
  }else {
    startQuiz();
  }
})
startQuiz();