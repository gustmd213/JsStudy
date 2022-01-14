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

const btn = document.querySelector("button");

function selectColor() {
  const colorLeft = colors[Math.floor(Math.random() * colors.length)];
  const colorRight = colors[Math.floor(Math.random() * colors.length)];
  if(colorLeft === colorRight) {
    return selectColor();
  }
  changeBgColor(colorLeft, colorRight);
}

function changeBgColor(colorLeft, colorRight) {
  // 이게 정답이었다. 아주 간단한 문제였다. 괜히 js라고 표기법이 다를거라고 생각한게 실수였다. 
  document.body.style.background = `linear-gradient(to left, ${colorLeft}, ${colorRight})`;
}

btn.addEventListener("click", selectColor);