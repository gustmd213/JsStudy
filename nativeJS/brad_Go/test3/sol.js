const inputForm = document.querySelector("#number-game");
const generateInput = document.querySelector(".generate input");
const guessInput = document.querySelector(".guess input");

const GENERATED_KEY = "generated";
const GUESSED_KEY = "guessed";

function onGameSubmit(event) {
  event.preventDefault();
  const generatedNumber = generateInput.value;
  const guessedNumber = guessInput.value;
  localStorage.setItem(GENERATED_KEY, generatedNumber);
  localStorage.setItem(GUESSED_KEY, guessedNumber);
  compareNumber(parseInt(generatedNumber, 10), parseInt(guessedNumber, 10));
}

function compareNumber(generatedNumber, guessedNumber) {
  const resultCompared = document.querySelector(".result__compared");
  const resultValue = document.querySelector(".result__value");
  const randomNumber = Math.floor(Math.random() * (generatedNumber + 1));

  if (guessedNumber > generatedNumber) {
    resultCompared.innerText = `Guessed number must be between 0 and generated number`;
    resultValue.innerText = ``;
  } else if (randomNumber === guessedNumber) {
    resultCompared.innerText = `You chose: ${guessedNumber}, the machine chose: ${randomNumber}.`;
    resultValue.innerText = "You won!";
  } else {
    resultCompared.innerText = `You chose: ${guessedNumber}, the machine chose: ${randomNumber}.`;
    resultValue.innerText = "You lost!";
  }
}

inputForm.addEventListener("submit", onGameSubmit);
