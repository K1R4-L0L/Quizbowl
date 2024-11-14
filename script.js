const quiz = document.getElementById("question");
// Array containing the questions
var questions = [
    "What is the capital of Spain?",
    "What color is math?"
   
  ];
  
  // Function to select a random question from the array
  function getRandomQuestion() {
    var randomIndex = Math.floor(Math.random() * questions.length);
    return questions[randomIndex];
  }
  
  // Function to display the quiz
  function displayquiz(maxQuestions) {
    var quiz = document.getElementById("question");
    var numQuestionsDisplayed = 0;
  
    // Loop until max number of questions are displayed
    while (numQuestionsDisplayed < maxQuestions) {
      var question = getRandomQuestion();
  
      // Add the question to the quiz
      var questionDiv = document.createElement("div");
      questionDiv.innerHTML = question;
      quiz.appendChild(questionDiv);
  
      // Increment the number of questions displayed
      numQuestionsDisplayed++;
    }
  }
  
  // Call the function to display the quiz (10 questions in this example)
  window.onload = function() {
  console.log("Displaying quiz");
  displayquiz(1);
  }
  var correctAnswers = [
    "Madrid",
    "Red",
  ];

  document.getElementById("answer")

  document.querySelector("form").addEventListener("submit", function(event) {
    console.log("User answer:", userAnswer);
    console.log("Question index:", questionIndex);
    event.preventDefault(); // Prevent form from submitting
  
    var userAnswer = document.getElementById("answer").value;
    var questionIndex = 0; /* index of the current question */
  
    checkAnswer(userAnswer, questionIndex);
  });
  


function checkAnswer(userAnswer, questionIndex) {
  if (userAnswer === correctAnswers[questionIndex]) {
      handleCorrectAnswer();
      alert("Nice Job!");
  } else {
      alert("Try again!");
  }
}
function handleCorrectAnswer() {
  // Remove the current question
  var quiz = document.getElementById("question");
  quiz.innerHTML = "";

  // Display a new question
  displayquiz(1);
}