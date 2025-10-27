let humanScore = 0;
let computerScore = 0;

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
	choice = prompt('Choose "rock", "paper", or "scissors"');
	switch (choice) {
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

	// play rounds
	for (let i = 0; i < totalRounds; i++) {
		playRound(getHumanChoice(), getComputerChoice());
	}

	// tell user the scores
	console.log(`
		Human Score | ${humanScore}
		Computer Score | ${computerScore}
	`);
}

playGame(5);
