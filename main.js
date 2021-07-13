// Size of the game area (in px)
const GAME_AREA_WIDTH = 700;
const GAME_AREA_HEIGHT = 500;

// Size of the paddles (in px)
const PADDLE_HEIGHT = 100;
const PADDLE_WIDTH = 20;

// Size of the ball (in px)
const BALL_SIZE = 20;

// Get the computer paddle element
const computerPaddle = document.querySelector(".computer-paddle");

// Get the ball element
const pongBall = document.querySelector(".ball");

// Track the score
let computerScore = 0;
let playerScore = 0;

// Get the player paddle element
const playerPaddle = document.querySelector(".player-paddle");

// The y-velocity of the computer paddle
let computerPaddleYPosition = 0;
let computerPaddleYVelocity = 7;

// The y-velocity of the player paddle
let playerPaddleYPosition = 300;
let playerPaddleYVelocity = 7;

// The ball position and velocity
let pongBallXPosition = 350;
let pongBallYPosition = 250;
let pongBallXVelocity = 4;
let pongBallYVelocity = 4;
const compScore = document.querySelector("#computerScoreNum");
const playScore = document.querySelector("#playerScoreNum");
const watchGame = document.querySelector("#computer-play");
const playMyself = document.querySelector("#take-Control");

document.addEventListener("keydown", function (event) {
	console.log(event);
	if (event.code == "KeyW" || playerPaddleYPosition >= 400) {
		playerPaddleYPosition = playerPaddleYPosition - 10;
		playerPaddle.style.top = `${playerPaddleYPosition}px`;
	}
	if (event.code == "KeyS" || playerPaddleYPosition <= 0) {
		playerPaddleYPosition = playerPaddleYPosition + 10;
		playerPaddle.style.top = `${playerPaddleYPosition}px`;
	}
	if (event.code == "ArrowUp" || computerPaddleYPosition >= 400) {
		computerPaddleYPosition = computerPaddleYPosition - 10;
		computerPaddle.style.top = `${computerPaddleYPosition}px`;
	}
	if (event.code == "ArrowDown" || computerPaddleYPosition <= 0) {
		computerPaddleYPosition = computerPaddleYPosition + 10;
		computerPaddle.style.top = `${computerPaddleYPosition}px`;
	}
});
function reloadPage() {
	window.location.reload();
}
// Make a function to call the setInterval on button click
function callFunction() {
	if (playerScore > 0 || computerScore > 0) {
		reloadPage();
	}
	setInterval(update, 35);
}
function callFunction2() {
	if (playerScore > 0 || computerScore > 0) {
		reloadPage();
	}
	setInterval(takeControl, 35);
}

watchGame.addEventListener("click", callFunction);
playMyself.addEventListener("click", callFunction2);

// Update the pong world
function update() {
	compScore.innerText = computerScore;
	playScore.innerText = playerScore;
	// Update the computer paddle's position
	computerPaddleYPosition = computerPaddleYPosition + computerPaddleYVelocity;

	// Apply the y-position
	if (computerPaddleYPosition <= 0 || computerPaddleYPosition >= 400) {
		computerPaddleYVelocity = computerPaddleYVelocity * -1;
	}
	computerPaddle.style.top = `${computerPaddleYPosition}px`;

	// Move the ball
	pongBallXPosition = pongBallXPosition + pongBallXVelocity;
	pongBallYPosition = pongBallYPosition + pongBallYVelocity;
	pongBall.style.left = `${pongBallXPosition}px`;

	// If the ball goes past the game area
	if (pongBallXPosition > 690) {
		pongBallXPosition = 350;
		pongBallYPosition = 250;
		playerScore++;
		playScore.innerText = playerScore;
		pongBallXVelocity = -4;
		pongBallYVelocity = -4;
	}
	if (pongBallXPosition < -10) {
		pongBallXPosition = 350;
		pongBallYPosition = 250;
		computerScore++;
		compScore.innerText = computerScore;
		pongBallXVelocity = 4;
		pongBallYVelocity = 4;
	}
	// Make the ball bounce off player Paddle
	if (
		pongBallXPosition <= 20 &&
		pongBallYPosition >= playerPaddleYPosition &&
		pongBallYPosition <= playerPaddleYPosition + 100
	) {
		pongBallXVelocity = pongBallXVelocity * -1;
	}
	// Make the ball bounce off computer Paddle
	if (
		pongBallXPosition >= 660 &&
		pongBallYPosition >= computerPaddleYPosition &&
		pongBallYPosition <= computerPaddleYPosition + 100
	) {
		pongBallXVelocity = pongBallXVelocity * -1;
	}
	pongBall.style.top = `${pongBallYPosition}px`;
	// Make the ball bounce off the top and bottom
	if (pongBallYPosition >= 480) {
		pongBallYVelocity = pongBallYVelocity * -1;
	}
	if (pongBallYPosition <= 0) {
		pongBallYVelocity = pongBallYVelocity * -1;
	}

	playerPaddleYPosition = playerPaddleYPosition + playerPaddleYVelocity;
	playerPaddle.style.top = `${playerPaddleYPosition}px`;
	if (playerPaddleYPosition <= 0 || playerPaddleYPosition >= 400) {
		playerPaddleYVelocity = playerPaddleYVelocity * -1;
	}
}

// Lets take control of our paddle
function takeControl() {
	compScore.innerText = computerScore;
	playScore.innerText = playerScore;
	// Update the computer paddle's position
	// computerPaddleYPosition = computerPaddleYPosition + computerPaddleYVelocity;

	// // Apply the y-position
	// if (computerPaddleYPosition <= 0 || computerPaddleYPosition >= 400) {
	// 	computerPaddleYVelocity = computerPaddleYVelocity * -1;
	// }
	// computerPaddle.style.top = `${computerPaddleYPosition}px`;

	// Move the ball
	pongBallXPosition = pongBallXPosition + pongBallXVelocity;
	pongBallYPosition = pongBallYPosition + pongBallYVelocity;
	pongBall.style.left = `${pongBallXPosition}px`;

	// If the ball goes past the game area
	if (pongBallXPosition > 690) {
		pongBallXPosition = 350;
		pongBallYPosition = 250;
		playerScore++;
		playScore.innerText = playerScore;
		pongBallXVelocity = -4;
		pongBallYVelocity = -4;
	}
	if (pongBallXPosition < -10) {
		pongBallXPosition = 350;
		pongBallYPosition = 250;
		computerScore++;
		compScore.innerText = computerScore;
		pongBallXVelocity = 4;
		pongBallYVelocity = 4;
	}
	// Make the ball bounce off player Paddle
	if (
		pongBallXPosition <= 20 &&
		pongBallYPosition >= playerPaddleYPosition &&
		pongBallYPosition <= playerPaddleYPosition + 100
	) {
		pongBallXVelocity = pongBallXVelocity * -1;
	}
	// Make the ball bounce off computer Paddle
	if (
		pongBallXPosition >= 660 &&
		pongBallYPosition >= computerPaddleYPosition &&
		pongBallYPosition <= computerPaddleYPosition + 100
	) {
		pongBallXVelocity = pongBallXVelocity * -1;
	}
	pongBall.style.top = `${pongBallYPosition}px`;
	// Make the ball bounce off the top and bottom
	if (pongBallYPosition >= 480) {
		pongBallYVelocity = pongBallYVelocity * -1;
	}
	if (pongBallYPosition <= 0) {
		pongBallYVelocity = pongBallYVelocity * -1;
	}
	// Move the player paddle
	playerPaddle.style.top = `${playerPaddleYPosition}px`;
}
