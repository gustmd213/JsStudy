// const clock = document.querySelector("#clock");

// Date 객체를 생성하는 함수 작성
function getClock() {
  // Date객체 생성
  const date = new Date();
  // 시간, 분, 초를 변수에 저장하고 h2의 innerText를 변경. 
  // date의 method를 통해 얻은 숫자를 String으로 변경하고 만약 1글자라면 2글자로 변경하고 앞에 0을 추가
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
  // clock.innerText = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
}

// html을 열자마자 함수를 바로 실행해서 시간이 표시될수 있게 한다. 
getClock();
// 매 초마다 getClock()함수를 실행해서 시간 표시
setInterval(getClock, 1000);

