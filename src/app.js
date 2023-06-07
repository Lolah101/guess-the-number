let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessInput = document.querySelector("#guessInput");
let message = document.querySelector("#message");
let attempts = 0;

function checkGuess() {
  let guess = parseInt(guessInput.value);
  attempts++;

  if (guess === randomNumber) {
    message.innerHTML =
      "Congratulations! You guessed the number in " + attempts + " attempts.";
    message.style.color = "green";
    guessInput.disabled = true;
  } else if (guess < randomNumber) {
    message.innerHTML = "Too low! Try again.";
    message.style.color = "red";
  } else if (guess > randomNumber) {
    message.innerHTML = "Too high! Try again.";
    message.style.color = "red";
  }

  guessInput.value = "";
  guessInput.focus();

  if (attempts === 10) {
    message.innerHTML = "Game over! The number was " + randomNumber + ".";
    message.style.color = "red";
    guessInput.disabled = true;
  }
}
