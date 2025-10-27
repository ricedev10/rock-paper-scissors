let humanScore = 0;
let computerScore = 0;
let ties = 0;

const scores = document.querySelector("#scores");

function getComputerChoice() {
	let randomRange = Math.floor(1 + Math.random() * 3);
	switch (randomRange) {
		case 1:
			return "rock";
		case 2:
			return "paper";
		case 3:
			return "scissors";
	}
}

function getHumanChoice() {
	let humanChoice = window.prompt(
		'enter "rock", "paper", or "scissors"'
	);
	switch (humanChoice) {
		case "rock":
			return "rock";
		case "paper":
			return "paper";
		case "scissors":
			return "scissors";
		default:
			return null;
	}
}

function playRound(humanChoice, computerChoice) {
	humanChoice = humanChoice.toLowerCase();
	console.log(humanChoice, computerChoice);
	if (humanChoice == computerChoice) {
		console.log("Tie!");
		ties += 1;
	} else if (humanChoice == "rock") {
		if (computerChoice == "paper") {
			console.log("You lose! Paper beats rock.");
			computerScore += 1;
		} else if (computerChoice == "scissors") {
			console.log("You win! Rock beats scissors.");
			humanScore += 1;
		}
	} else if (humanChoice == "paper") {
		if (computerChoice == "rock") {
			console.log("You win! Paper beats rock.");
			humanScore += 1;
		} else if (computerChoice == "scissors") {
			console.log("You lose! Paper beats rock.");
			computerScore += 1;
		}
	}
}

function playGame(totalRounds) {
	// reset scores
	humanScore = 0;
	computerScore = 0;
	ties = 0;

	// play rounds
	for (let i = 0; i < totalRounds; i++) {
		playRound(getHumanChoice(), getComputerChoice());
	}

	// tell user the scores
	let output = `
		Human Score: ${humanScore}
		Computer Score: ${computerScore}

		Ties: ${ties}
	`;
	console.log(output);
	scores.textContent = output;
}

playGame(5);
