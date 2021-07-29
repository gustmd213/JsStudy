/*
방법 1
// html의 <body>를 js로 가져옴
const body = document.querySelector("body");

// 창의 크기에 따라 배경색이 바뀌는 함수 작성
function handleWindowColor() {
  // 윈도우의 크기를 변수에 저장
  let innerWidth = window.innerWidth;
  
  // 이 함수안에 let bgColor = body.style.backgroundColor 로 배경색을 변수에 저장해서 사용하려고
  // 했는데, 변수에 저장하면 오류는 나지 않지만 이 코드가 작동하지 않습니다. 이유가 뭘까요??
  // 조건문 안에 하나하나 변수를 작성해야 하나요? let의 적용범위가 함수 안까지는 미치지 않나요? 

  // 조건에 따른 배경색이 변경되는 조건문 작성
  if(innerWidth <= 728) {
    body.style.backgroundColor = "#337ec4";
  } else if(innerWidth > 728 && innerWidth <= 1200) {
    body.style.backgroundColor = "rgb(152, 90, 190)";
  } else {
    body.style.backgroundColor = "rgb(255, 208, 0)";
  }
}

// resize이벤트가 발생하면 함수를 작동시킬 이벤트리스너 호출
window.addEventListener("resize", handleWindowColor);
*/

// html의 <body>를 js로 가져옴
const body = document.body

// css의 클래스 명들을 string 형태로 변수에 저장
const SMALL_SCREEN = "smallScreen";
const MEDIUM_SCREEN = "mediumScreen";
const BIG_SCREEN = "bigScreen";

function handleResize() {
  // 창의 너비를 width 변수에 저장
  const width = window.innerWidth;

  // 조건문 작성
  if(width > 1000) {
    body.classList.add(BIG_SCREEN);
    body.classList.remove(MEDIUM_SCREEN);
  } else if(width <= 1140 && width >= 700) {
    body.classList.add(MEDIUM_SCREEN);
    body.classList.remove(BIG_SCREEN, SMALL_SCREEN);
  } else {
    body.classList.remove(MEDIUM_SCREEN);
    body.classList.add(SMALL_SCREEN);
  }
}

window.addEventListener("resize", handleResize);