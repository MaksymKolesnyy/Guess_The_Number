'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}
let highscore = 0;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // NO INPUT
  if (!guess) {
    // document.querySelector('.message').textContent = 'No Number!';
    displayMessage('No Number!');
    // CORRECT INPUT
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    // document.querySelector('.message').textContent = 'Correct number!';
    displayMessage('Correct Number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // TOO HIGH OR TOO LOW
  } else {
    // document.querySelector('.message').textContent = guess > secretNumber ? 'Too high!' : 'Too low';
    displayMessage(guess > secretNumber ? 'Too high!' : 'Too low');
    score--;
    document.querySelector('.score').textContent = score;
    if (score <= 0) {
      // document.querySelector('.message').textContent = 'You lost the game!';
      displayMessage('You lost the game!');
    }
  }
});


// Your tasks:
// 1. Select the element with the 'again' class and attach a click event handler.
// 2. In the handler function, restore initial values of the 'score' and 'secretNumber' variables.
// 3. Restore the initial conditions of the message, number, score and guess input fields.
// 4. Also restore the original background color (#222) and number width (15rem)

document.querySelector('.again').addEventListener('click', function () {

  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';

});