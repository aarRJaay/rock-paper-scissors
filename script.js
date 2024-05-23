
console.log("Welcome To Rock, Paper, Scissors");

playGame();

function playGame() {
  let computerScore = 0;
  let humanScore = 0;

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
  console.log("H: ", humanScore, "C: ", computerScore);
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
  rock.textContent = "Rock";
  paper.textContent = "Paper";
  scissors.textContent = "Scissors";

  container.appendChild(rock);
  container.appendChild(paper);
  container.appendChild(scissors);

  rock.addEventListener("click", function(e) { playRound("rock", getComputerChoice()); });
  paper.addEventListener("click", function(e) { playRound("paper", getComputerChoice()); });
  scissors.addEventListener("click", function(e) { playRound("scissors", getComputerChoice()); });
}

function playRound(humanChoice, computerChoice, humanScore, computerScore) {
  console.log(humanChoice);
  console.log(computerChoice);

  const container = document.querySelector("#container");
  const winner = document.createElement("p");
  // const human = document.createElement("p");
  const choices = document.createElement("p");
  winner.classList.add("content");
  // human.classList.add("content");
  choices.classList.add("content");

  choices.textContent = "COMPUTER: " + computerChoice + " HUMAN: " + humanChoice;
  // human.textContent = humanChoice;
  container.appendChild(choices);
  // container.appendChild(human);

  if (humanChoice === computerChoice) {
    console.log("DRAW");
    winner.textContent = "DRAW";
    container.appendChild(winner);
    //return ("Draw");
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("WIN");
    winner.textContent = "WIN";
    // humanScore++;
    container.appendChild(winner);
    //return ("Human");
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    winner.textContent = "WIN";
    console.log("WIN");
    // humanScore++;
    container.appendChild(winner);
    //return ("Human");
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    winner.textContent = "WIN";
    console.log("WIN");
    // humanScore++;
    //return ("Human");
  }
  else {
    winner.textContent = "LOSE";
    console.log("LOSE");
    // computerScore++;
    container.appendChild(winner);
    //return ("Computer");
  }

}
