const homeMenu = document.querySelector("#home");
const gameMenu = document.querySelector("#game");
const startButton = document.querySelector("#start-button");
const buttons = document.querySelectorAll(
	".rock-paper-scissors button"
);
const countdown = document.querySelector(".countdown");
const defaultDisplay = "flex";
const hiddenDisplay = "none";
const COUNTDOWN_SPEED = 1; // wait _ seconds between each interval
let currentChoice = "none"; // can be "rock", "paper", or "scissors" (or"none")
let choices = ["rock", "paper", "scissors"];
// Set default visibility of menus
homeMenu.style.display = defaultDisplay;
gameMenu.style.display = hiddenDisplay;

//
function buttonClicked(className) {
	currentChoice = className;
}
function startButtonClicked() {
	homeMenu.style.display = hiddenDisplay;
	gameMenu.style.display = defaultDisplay;
	startGame();
}
function playerWon() {
	let randomChoice =
		choices[Math.floor(1 + Math.random() * 3)];
	console.log(randomChoice);
	if (currentChoice == randomChoice) {
		return true;
	} else {
		return false;
	}
}
function startGame() {
	const precision = 2;
	let factor = 10 ** precision;
	// four hundred "ticks"
	let seconds = 3;
	let length = 1 + seconds * factor;
	for (let i = 0; i < length; i++) {
		let seconds = i / factor;
		setTimeout(() => {
			if (i == length - 1) {
				// we reached the last "second"
				if (currentChoice == "none") {
					countdown.textContent =
						"You lost :(\nDecidequicker next time!";
				} else {
					if (playerWon()) {
						console.log("Won! Point to player.");
					} else {
						console.log("Lost! Point to AI");
					}
				}
			} else {
				countdown.textContent = seconds
					.toFixed(2)
					.toString();
			}
		}, seconds * 1000);
	}
}
startButton.addEventListener("click", startButtonClicked);
for (i = 0; i < buttons.length; i++) {
	let button = buttons[i];
	button.addEventListener("click", () =>
		buttonClicked(buttonclassName)
	);
}
