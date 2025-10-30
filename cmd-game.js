let humanScore = 0;
let computerScore = 0;
let ties = 0;

const scores = document.querySelector("#scores");
const buttons = document.querySelector(".buttons");
const results = document.querySelector(".results");

buttons.addEventListener("click", (event) => {
	const humanChoice = event.target.name;
	if (!humanChoice) return;

	const computerChoice = getComputerChoice();

	const winner = playRound(humanChoice, computerChoice);

	// display score
	const score = document.createElement("li");

	const humanChoiceScore = document.createElement("span");
	humanChoiceScore.textContent = `YOU: ${humanChoice}`;

	const computerChoiceScore =
		document.createElement("span");
	computerChoiceScore.textContent = `Computer: ${computerChoice}`;

	const winnerScore = document.createElement("span");
	winnerScore.textContent =
		score.textContent.padEnd(300) + `WINNER: ${winner}`;

	score.appendChild(humanChoiceScore);
	score.appendChild(computerChoiceScore);
	score.appendChild(winnerScore);
	results.appendChild(score);
});

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

function getHumanChoice(currentRound) {
	let humanChoice = window.prompt(
		'Enter "rock", "paper", or "scissors"' +
			(currentRound || "")
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

	let winner = "tie";
	if (humanChoice == computerChoice) {
		console.log("Tie!");
		ties += 1;
	} else if (humanChoice == "rock") {
		if (computerChoice == "paper") {
			console.log("You lose! Paper beats rock.");
			computerScore += 1;
			winner = "computer";
		} else if (computerChoice == "scissors") {
			console.log("You win! Rock beats scissors.");
			humanScore += 1;
			winner = "you";
		}
	} else if (humanChoice == "paper") {
		if (computerChoice == "rock") {
			console.log("You win! Paper beats rock.");
			humanScore += 1;
			winner = "you";
		} else if (computerChoice == "scissors") {
			console.log("You lose! Paper beats rock.");
			computerScore += 1;
			winner = "computer";
		}
	} else if (humanChoice == "scissors") {
		if (computerChoice == "rock") {
			console.log("You lose! Rock beats scissors.");
			computerScore += 1;
			winner = "computer";
		} else if (computerChoice == "paper") {
			console.log("You win! Scissors beats paper.");
			humanScore += 1;
			winner = "you";
		}
	}

	return winner;
}

function getScoreOutput() {
	return `Human Score: ${humanScore}\nComputer Score: ${computerScore}\nTies: ${ties}`;
}

function playGame(totalRounds) {
	// reset scores
	humanScore = 0;
	computerScore = 0;
	ties = 0;

	// play rounds
	for (let i = 0; i < totalRounds; i++) {
		playRound(
			getHumanChoice(
				`\nRound ${
					i + 1
				}\n\n--------\n\n${getScoreOutput()}`
			),
			getComputerChoice()
		);
		console.log(i);
	}

	// tell user the scores
	let output = getScoreOutput();
	console.log(output);
	scores.textContent = output;
}
