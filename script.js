
console.log("Welcome To Rock, Paper, Scissors");
var roundCount=0;
var h = 0;
var c = 0;
playGame();

function playGame() {

  // for (let i = 1; i <= 5; i++) {
  const computerChoice = getComputerChoice().toLowerCase();
  const humanChoice = getHumanChoice(computerChoice).toLowerCase();
  // console.log("Round: ", i)
  let winner = playRound(humanChoice, computerChoice);
  if (winner === "Human") {
    humanScore++;
  } else if (winner === "Computer") {
    computerScore++;
  }
  // }


  if (humanScore > computerScore) {
    console.log("You Win!");
  } else if (humanScore < computerScore) {
    console.log("Loooooooossseeeeeerrrrr!  - You SUCK!");
  } else {
    console.log("We Draw! - That's awkward");
  }
}

function getComputerChoice() {
  var choice = (Math.floor(Math.random() * 3));
  if (choice === 0) {
    return ("rock");
  } else if (choice === 1) {
    return ("paper");
  } else {
    return ("scissors");
  }
}

function getHumanChoice(computerChoice) {
  // console.log(computerChoice);
  const container = document.querySelector("#container");



  const rock = document.createElement("button");
  const paper = document.createElement("button");
  const scissors = document.createElement("button");

  let computerScore = 0;
  let humanScore = 0;




  rock.textContent = "Rock";
  paper.textContent = "Paper";
  scissors.textContent = "Scissors";
  
  container.appendChild(rock);
  container.appendChild(paper);
  container.appendChild(scissors);

  rock.addEventListener("click", function(e) { playRound("rock", getComputerChoice(), computerScore, humanScore); });
  paper.addEventListener("click", function(e) { playRound("paper", getComputerChoice(), computerScore, humanScore); });
  scissors.addEventListener("click", function(e) { playRound("scissors", getComputerChoice(), computerScore, humanScore); });
}

function playRound(humanChoice, computerChoice, humanScore, computerScore) {
  console.log(humanChoice);
  console.log(computerChoice);

  const container = document.querySelector("#container");
  const winner = document.createElement("p");
  const round = document.createElement("h3");
  const score = document.createElement("h3");
  // const human = document.createElement("p");
  const choices = document.createElement("p");
  winner.classList.add("content");
  // human.classList.add("content");
  choices.classList.add("content");

  choices.textContent = "COMPUTER: " + computerChoice + " HUMAN: " + humanChoice;
  // human.textContent = humanChoice;
  container.appendChild(choices);
  // container.appendChild(human);

  container.appendChild(round);
  roundCount++;
  console.log("ROUND: ", roundCount);
  console.log("H: ", h, "C: ", c);
  round.textContent = roundCount;

  if (humanChoice === computerChoice) {
    console.log("DRAW");
    winner.style.color = "black";
    winner.textContent = "DRAW";
    container.appendChild(winner);
 score.textContent = "H: " + h  + " C: " + c;
  container.appendChild(score);
    //return ("Draw");
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("WIN");
    winner.style.color = "green";
    winner.textContent = "WIN";
    h++;
 score.textContent = "H: " + h  + " C: " + c;
  container.appendChild(score);
  console.log("H: ", h, "C: ", c);
    container.appendChild(winner);
    //return ("Human");
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    winner.style.color = "green";
    winner.textContent = "WIN";
    console.log("WIN");
    h++;
 score.textContent = "H: " + h  + " C: " + c;
  container.appendChild(score);
  console.log("H: ", h, "C: ", c);
    container.appendChild(winner);
    //return ("Human");
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    winner.style.color = "green";
    winner.textContent = "WIN";
    console.log("WIN");
     h++;
 score.textContent = "H: " + h  + " C: " + c;
  container.appendChild(score);
  console.log("H: ", h, "C: ", c);
    //return ("Human");
    container.appendChild(winner);
  }
  else {
    winner.style.color = "red";
    winner.textContent = "LOSE";
    console.log("LOSE");
    c++;
 score.textContent = "H: " + h  + " C: " + c;
  container.appendChild(score);
  console.log("H: ", h, "C: ", c);
    container.appendChild(winner);
    //return ("Computer");
  }
  console.log("END ROUND");

  if(roundCount == 5) {
    if(h > c) { 
      winner.textContent = "GAME WINNER IS HUMAN"; 
  } else if (c > h) { 
      winner.textContent = "GAME WINNER IS COMPUTER"; 
  } else {
    winner.textContent = "GAME IS DRAW"; 
    }
    roundCount = 0;
    h = 0;
    c = 0;
  } 
  

}
