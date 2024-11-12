const gameDiv= document.querySelector('#gameDiv');
let score = document.querySelector('#score');
let startCountDown = setInterval(countDown, 1000);
let totalScore = 0;
document.addEventListener('DOMContentLoaded', renderGame())
function renderGame() {
    const gameCard = document.createElement('div');
    const click = document.createElement('button');
    click.textContent = 'CLICK FOR POINTS ';
    click.addEventListener('click', pointsClick);
    gameCard.append(click);
    gameDiv.append(gameCard);
}
function pointsClick() {
    totalScore++
    score.innerText = totalScore
}
function countDown(){
    timeLeft--;
    timer.innerText = timeLeft;
    if(timeLeft === 0){
        gameOver();
    }
}
function gameOver() {
    clearInterval(startCountDown);

    const button = document.querySelector('button')
    button.removeEventListener('click', pointsClick)

    const gameOver = document.createElement('h1');
    gameOver.innerHTML = 'GAME OVER!' + '<br>' + `Total Score: ${totalScore}`;

    gameDiv.append(gameOver);
}

// Array containing the questions
var questions = [
    "What is the capital of Spain?",
    "Who won the FIFA Women's World Cup in 2019?",
    "What is the smallest country in the world?",
    "Who invented the telephone?",
    "What is the tallest mountain in the world?"
  ];
  
  // Function to select a random question from the array
  function getRandomQuestion() {
    var randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
  }
  
  // Function to display the quiz
  function displayquestion(maxQuestions) {
    var quiz = document.getElementById("question");
    var numQuestionsDisplayed = 0;
  
    // Loop until max number of questions are displayed
    while (numQuestionsDisplayed < maxQuestions) {
      var question = getRandomQuestion();
  
      // Add the question to the quiz
      var questionDiv = document.createElement("quiz");
      questionDiv.innerHTML = question;
      quiz.appendChild(questionDiv);
  
      // Increment the number of questions displayed
      numQuestionsDisplayed++;
    }
  }
  
  // Call the function to display the quiz (10 questions in this example)
  displayQuiz(10);