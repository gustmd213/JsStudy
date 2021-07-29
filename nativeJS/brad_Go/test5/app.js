// 여러 색을 가진 배열
const colors = [
  "#ef5777",
  "#575fcf",
  "#4bcffa",
  "#34e7e4",
  "#0be881",
  "#f53b57",
  "#3c40c6",
  "#0fbcf9",
  "#00d8d6",
  "#05c46b",
  "#ffc048",
  "#ffdd59",
  "#ff5e57",
  "#d2dae2",
  "#485460",
  "#ffa801",
  "#ffd32a",
  "#ff3f34"
];

const click = document.querySelector("#click");

// 클릭 시 호출할 함수
function selectColor(event) {
  event.preventDefault();
  // 색을 저장할 변수 2가지 선언
  const colorLeft = colors[Math.floor(Math.random() * colors.length)];
  const colorRight = colors[Math.floor(Math.random() * colors.length)];
  // 배경색을 바꿔줄 함수 호출
  changeBgColors(colorLeft, colorRight);
}

function changeBgColors(colorLeft, colorRight) {
  // css 파일을 가져오기
  let myStylesheet = document.styleSheets[0];
  
  // css 구문 추가
  document.styleSheets[0].insertRule(`.gradient { background: linear-gradient(90deg, ${colorLeft}, ${colorRight});}`, myStylesheet.cssRules.length);
}

click.addEventListener("click", selectColor);