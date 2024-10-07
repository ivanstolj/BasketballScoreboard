let homeScore = 0;
let guestScore = 0;
let timer = 60 * 60; // 60 minutes in seconds
let timerInterval;
let isPaused = true;

function updateScore() {
    document.getElementById('home-score').textContent = homeScore;
    document.getElementById('guest-score').textContent = guestScore;
}

function add(team, number) {
    if (team === 'home') {
        homeScore += Number(number);
    } else if (team === 'guest') {
        guestScore += Number(number);
    }
    updateScore();
}

function updateTimerDisplay() {
    let minutes = parseInt(timer / 60, 10);
    let seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById('clock').textContent = minutes + ":" + seconds;
}

function startTimer() {
    timerInterval = setInterval(function () {
        if (!isPaused) {
            if (timer > 0) {
                timer--;
                updateTimerDisplay();
            } else {
                clearInterval(timerInterval);
            }
        }
    }, 1000);
}

function toggleTimer() {
    isPaused = !isPaused;
    if (!isPaused && !timerInterval) {
        startTimer();
    }
}

// Initialize the scores and timer on page load
document.addEventListener('DOMContentLoaded', (event) => {
    updateScore();
    updateTimerDisplay();
    document.getElementById('clock').addEventListener('click', toggleTimer);
});