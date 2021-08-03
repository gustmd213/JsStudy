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

const body = document.querySelector("body");
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
  // css .gradient의 속성값에 접근해서 변경
  body.style.setProperty("--element-left-color", colorLeft);
  body.style.setProperty("--element-right-color", colorRight);
  // 변경한 class 추가
  body.classList.add() = "gradient";
}

click.addEventListener("click", selectColor);