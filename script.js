function getComputerChoice() {
  let randomNumber = Math.random();

  if (randomNumber < 0.33) {
    return "rock";
  } else if (randomNumber < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());


function getHumanChoice() {
  let choice = prompt("Enter rock, paper, or scissors:");
  return choice.toLowerCase();
}

console.log(getHumanChoice());







function playGame () {
   let humanScore = 0;
   let computerScore = 0;

   function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();

  if (humanChoice === computerChoice) {
    console.log("It's a tie!");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors")
  ) {
    console.log("You win! Rock beats Scissors");
    humanScore++;
  } else if (
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    console.log("You win! Paper beats Rock");
    humanScore++;
  } else if (
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("You win! Scissors beats Paper");
    humanScore++;
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  }
}




for (let i = 0; i < 5; i++) {
  let humanSelection = getHumanChoice();
  let computerSelection = getComputerChoice();

  playRound(humanSelection, computerSelection);
}

 console.log("Final Score:");
console.log("Human:", humanScore);
console.log("Computer:", computerScore);
}

playGame();


