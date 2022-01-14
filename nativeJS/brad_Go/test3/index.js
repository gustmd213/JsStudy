// 플레이 버튼을 js로 가져옴
const playBtn = document.querySelector("#play");
// 사용자의 선택과 랜덤으로 선택된 숫자를 보여줄 문구를 저장할 span 태그 가져오기
const text = document.querySelector("#text");

// 사용자가 설정할 범위와 고를 숫자의 인풋값을 가져오기위해 input을 변수에 저장
const max = document.querySelector("#max");
const guess = document.querySelector("#guess");

// 결과에 따라 문구를 달리 표시하기 위해 span 태그 두개 가져오기
const win = document.querySelector("#win");
const lose = document.querySelector("#lose");

const HIDDEN_CLASSNAME = "hidden";

function handleClickPlay(event) {
  event.preventDefault();
  // 사용자가 고른 값을 변수에 저장
  const cNumber = guess.value;
  // js가 고를 숫자를 랜덤으로 정수형태로 변수에 저장. 
  // Math module을 사용했고, max.value로 random() 함수가 표현할 값의 범위를 지정
  let mNumber = Math.round(Math.random() * max.value);

  // 결과에 대한 문구 보여주기
  text.innerText = `Yous chose: ${cNumber}, the machine chose: ${mNumber}.`; 
  text.classList.remove(HIDDEN_CLASSNAME);

  // 결과에 따라 다른 문구 보여주기
  if(cNumber == mNumber) {
    lose.classList.add(HIDDEN_CLASSNAME);
    win.classList.remove(HIDDEN_CLASSNAME);
  } else {
    win.classList.add(HIDDEN_CLASSNAME);
    lose.classList.remove(HIDDEN_CLASSNAME);
  }
}

playBtn.addEventListener("click", handleClickPlay);

