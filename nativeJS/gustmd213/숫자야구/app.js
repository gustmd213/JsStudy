const Output1 = document.querySelector("#output span:first-child");
const Output2 = document.querySelector("#output span:nth-child(2)");
const Output3 = document.querySelector("#output span:nth-child(3)");
const resetBtn = document.querySelector("#output button:last-child");
const inputForm = document.querySelector("#input");
const input1 = document.querySelector("#input input:first-child");
const input2 = document.querySelector("#input input:nth-child(2)");
const input3 = document.querySelector("#input input:nth-child(3)");

const countObj = document.querySelector("#count");
const board = document.querySelector("#bulletin_board");
let chance = 0;
const numbers = [];
const values = [];
function makeRandom() {
  while (numbers.length < 3) {
    const random = Math.floor(Math.random() * 10);

    if (!numbers.includes(random)) {
      numbers.push(random);
    }
  }
}

function countBall() {
  let countBa = 0;

  for (i = 0; i < 3; i++) {
    if (numbers.includes(values[i])) {
      if (numbers[i] != values[i]) {
        countBa++;
      }
    }
  }
  return countBa;
}

function countStrike() {
  let countSt = 0;
  for (i = 0; i < 3; i++) {
    if (numbers[i] == values[i]) {
      countSt++;
    }
  }
  return countSt;
}
function makeValue() {
  values.length = 0;
  const value1 = parseInt(input1.value);
  const value2 = parseInt(input2.value);
  const value3 = parseInt(input3.value);
  while (values.length < 3) {
    if (!values.includes(value1)) {
      values.push(value1);
    } else {
      return false;
    }
    if (!values.includes(value2)) {
      values.push(value2);
    } else {
      return false;
    }
    if (!values.includes(value3)) {
      values.push(value3);
    } else {
      return false;
    }
  }
  return true;
}
function onSubmit(event) {
  event.preventDefault(); //브라우저의 기본동작을 막아줌

  if (makeValue()) {
    chance++;
    let ball = countBall();
    let strike = countStrike();
    if (strike == 3) {
      Output1.innerText = numbers[0];
      Output2.innerText = numbers[1];
      Output3.innerText = numbers[2];
      board.innerText = "win!!";
    } else if (ball == 0 && strike == 0) {
      board.innerText = "OUT";
    } else {
      board.innerText = `BALL: ${ball} , STRIKE: ${strike}`;
    }
    countObj.innerText = `${chance} 회`;
  } else {
    board.innerText = "중복되었습니다.";
  }
  input1.value = "";
  input2.value = "";
  input3.value = "";
}

makeRandom();
inputForm.addEventListener("submit", onSubmit);

input1.addEventListener("input", maxLengthCheck);
input2.addEventListener("input", maxLengthCheck);
input3.addEventListener("input", maxLengthCheck);
resetBtn.addEventListener("click", onReset);

function onReset() {
  chance = 0;
  numbers.length = 0;
  values.length = 0;
  makeRandom();

  Output1.innerText = "?";
  Output2.innerText = "?";
  Output3.innerText = "?";
  board.innerText = "";
  countObj.innerText = "";
}
function maxLengthCheck(object) {
  if (object.target.value.length > object.target.maxLength) {
    object.target.value = object.target.value.slice(0, object.target.maxLength);
  }
}
