let max, min, computerChoice;

function go(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

function sub() {
  let guess = parseInt(document.getElementById("guess").value);

  if (isNaN(guess) || guess > max || guess < min) {
    alert("Enter a valid choice!");
    return;
  }

  console.log("Computer's Choice:", computerChoice);

  if (guess == computerChoice) {
    document.getElementById(
      "result"
    ).innerHTML = `You guessed right! The number was ${computerChoice}`;
  } else {
    document.getElementById("result").innerHTML = "Incorrect guess. Try again!";
  }
}

function initGame() {
  max = parseInt(document.getElementById("max-value").value);
  min = parseInt(document.getElementById("min-value").value);
  computerChoice = go(min, max);
}

// Call initGame when the page loads
document.addEventListener("DOMContentLoaded", initGame);
