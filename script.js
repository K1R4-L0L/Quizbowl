let questionList = ["What is the color of math", "What is the color of english","Have we met before? Possibly in...", "What is 0 in Tennis", "Viral hit or miss song is called...?", "Best Animal?", "Skibidi, Skibidi, Hawk Tuah ...", "Who made Literal Legend","My favorite app?","This is the ... Inside out 2 song"];
let answerList = ["Red", "Blue","Michigan", "Love", "Mia Khalifa", "Octopus", "Gyatt", "Ayesha Erotica", "Instagram","Freaky"];
let score = 0;
let questionIndex = 0;

const question = document.querySelector(".question");
const button = document.querySelector(".button");
const input = document.querySelector("#name");
let scoreContainer = document.querySelector(".score");

question.textContent = questionList[questionIndex];

let submitFunction = () =>{
  button.addEventListener('click', () =>{
    if(input.value === answerList[questionIndex]){
      questionIndex += 1;
      score += 1;
      question.textContent = questionList[questionIndex];
      scoreContainer.textContent = "Score: " + score;
    } else {
      score -= 1;
      scoreContainer.textContent = "Score: " + score;
    }
    endGame();
  });
}

let endGame = () =>{
  if(questionIndex >= questionList.length){
    scoreContainer.textContent = "Final Score: " + score;
    question.textContent = "Congratulations, play again!";
    input.style.display = "none";
    button.style.display = "none";
  }
}

submitFunction();