
console.log("Welcome To Rock, Paper, Scissors");

playGame();

function playGame() {
  let computerScore = 0;
  let humanScore = 0;

  for (let i = 1; i <= 5; i++) {
    const computerChoice = getComputerChoice().toLowerCase();
    const humanChoice = getHumanChoice().toLowerCase();
    console.log("Round: ", i)
    let winner = playRound(humanChoice, computerChoice);
    if (winner === "Human") {
      humanScore++;
    } else if (winner === "Computer") {
      computerScore++;
    }
    console.log("H: ", humanScore, "C: ", computerScore);
  }


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

function getHumanChoice() {
  return (prompt("Choose: Rock, Paper or Scissors"));
}

function playRound(humanChoice, computerChoice, humanScore, computerScore) {
  console.log(humanChoice);
  console.log(computerChoice);
  if (humanChoice === computerChoice) {
    console.log("DRAW");
    return ("Draw");
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("WIN");
    // humanScore++;
    return ("Human");
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("WIN");
    // humanScore++;
    return ("Human");
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("WIN");
    // humanScore++;
    return ("Human");
  }
  else {
    console.log("LOSE");
    // computerScore++;
    return ("Computer");
  }

}
