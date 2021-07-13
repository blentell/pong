// Size of the game area (in px)
const GAME_AREA_WIDTH = 1400;
const GAME_AREA_HEIGHT = 1000;

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
let computerPaddleYVelocity = 10;

// The y-velocity of the player paddle
let playerPaddleYPosition = 300;
let playerPaddleYVelocity = 10;

// The ball position and velocity
let pongBallXPosition = 700;
let pongBallYPosition = 500;
let pongBallXVelocity = Math.random() * 15;
let pongBallYVelocity = Math.random() * 15;
const compScore = document.querySelector("#computerScoreNum");
const playScore = document.querySelector("#playerScoreNum");
const watchGame = document.querySelector("#computer-play");
const playMyself = document.querySelector("#take-Control");

document.addEventListener("keydown", function (event) {
	console.log(event);
	if (event.code == "KeyW" || playerPaddleYPosition >= 900) {
		playerPaddleYPosition = playerPaddleYPosition - 10;
		playerPaddle.style.top = `${playerPaddleYPosition}px`;
	}
	if (event.code == "KeyS" || playerPaddleYPosition <= 0) {
		playerPaddleYPosition = playerPaddleYPosition + 10;
		playerPaddle.style.top = `${playerPaddleYPosition}px`;
	}
	if (event.code == "ArrowUp" || computerPaddleYPosition >= 900) {
		computerPaddleYPosition = computerPaddleYPosition - 10;
		computerPaddle.style.top = `${computerPaddleYPosition}px`;
	}
	if (event.code == "ArrowDown" || computerPaddleYPosition <= 0) {
		computerPaddleYPosition = computerPaddleYPosition + 10;
		computerPaddle.style.top = `${computerPaddleYPosition}px`;
	}
});

function go1() {
	pongBall.style = "#flash";
}
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
	if (computerPaddleYPosition <= 0 || computerPaddleYPosition >= 900) {
		computerPaddleYVelocity = computerPaddleYVelocity * -1;
	}
	computerPaddle.style.top = `${computerPaddleYPosition}px`;

	// Move the ball
	pongBallXPosition = pongBallXPosition + pongBallXVelocity;
	pongBallYPosition = pongBallYPosition + pongBallYVelocity;
	pongBall.style.left = `${pongBallXPosition}px`;

	// If the ball goes past the game area
	if (pongBallXPosition > 1390) {
		pongBallXPosition = 700;
		pongBallYPosition = 500;
		playerScore++;
		playScore.innerText = playerScore;
		pongBallXVelocity = -Math.random() * 15;
		pongBallYVelocity = -Math.random() * 2;
	}
	if (pongBallXPosition < -10) {
		pongBallXPosition = 700;
		pongBallYPosition = 500;
		computerScore++;
		compScore.innerText = computerScore;
		pongBallXVelocity = Math.random() * 15;
		pongBallYVelocity = Math.random() * 2;
	}
	// Make the ball bounce off player Paddle
	if (
		pongBallXPosition <= 20 &&
		pongBallYPosition >= playerPaddleYPosition &&
		pongBallYPosition <= playerPaddleYPosition + 100
	) {
		pongBallXVelocity = pongBallXVelocity * -1;
		go1();
	}
	// Make the ball bounce off computer Paddle
	if (
		pongBallXPosition >= 1360 &&
		pongBallYPosition >= computerPaddleYPosition &&
		pongBallYPosition <= computerPaddleYPosition + 100
	) {
		pongBallXVelocity = pongBallXVelocity * -1;
		go1();
	}
	pongBall.style.top = `${pongBallYPosition}px`;
	// Make the ball bounce off the top and bottom
	if (pongBallYPosition >= 980) {
		pongBallYVelocity = pongBallYVelocity * -1;
		go1();
	}
	if (pongBallYPosition <= 0) {
		pongBallYVelocity = pongBallYVelocity * -1;
		go1();
	}

	playerPaddleYPosition = playerPaddleYPosition + playerPaddleYVelocity;
	playerPaddle.style.top = `${playerPaddleYPosition}px`;
	if (playerPaddleYPosition <= 0 || playerPaddleYPosition >= 900) {
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
	if (pongBallXPosition > 1390) {
		pongBallXPosition = 700;
		pongBallYPosition = 500;
		playerScore++;
		playScore.innerText = playerScore;
		pongBallXVelocity = -Math.random() * 15;
		pongBallYVelocity = -Math.random() * 2;
	}
	if (pongBallXPosition < -10) {
		pongBallXPosition = 700;
		pongBallYPosition = 500;
		computerScore++;
		compScore.innerText = computerScore;
		pongBallXVelocity = Math.random() * 15;
		pongBallYVelocity = Math.random() * 2;
	}
	// Make the ball bounce off player Paddle
	if (
		pongBallXPosition <= 20 &&
		pongBallYPosition >= playerPaddleYPosition &&
		pongBallYPosition <= playerPaddleYPosition + 100
	) {
		pongBallXVelocity = pongBallXVelocity * -1;
		go1();
	}
	// Make the ball bounce off computer Paddle
	if (
		pongBallXPosition >= 1360 &&
		pongBallYPosition >= computerPaddleYPosition &&
		pongBallYPosition <= computerPaddleYPosition + 100
	) {
		pongBallXVelocity = pongBallXVelocity * -1;
		go1();
	}
	pongBall.style.top = `${pongBallYPosition}px`;
	// Make the ball bounce off the top and bottom
	if (pongBallYPosition >= 980) {
		pongBallYVelocity = pongBallYVelocity * -1;
		go1();
	}
	if (pongBallYPosition <= 0) {
		pongBallYVelocity = pongBallYVelocity * -1;
		go1();
	}
	// Move the player paddle
	playerPaddle.style.top = `${playerPaddleYPosition}px`;
}
