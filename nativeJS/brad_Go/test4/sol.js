const restTime = document.querySelector("#resttime");

function getClock() {
  // dDay에 크리스마스의 날짜 가져오기
  const dday = new Date("december 24, 2021, 00:00:00").getTime();
  const today = new Date().getTime();

  // 두 날짜 간의 시간 차이 구하기
  const gapTime = dday - today;

  // 남은 날, 시간, 분, 초 구하기
  const day = Math.ceil(gapTime / (1000*60*60*24));
  const hours = String(Math.ceil((gapTime % (1000*60*60*24)) / (1000*60*60))).padStart(2, "0");
  const minutes = String(Math.ceil((gapTime % (1000*60*60)) / (1000*60))).padStart(2, "0");
  const seconds = String(Math.ceil((gapTime % (1000*60)) / 1000)).padStart(2, "0");
  // 하루 = (1시간 = ((1분 = (1초 = 1000 밀리초) * 60) * 60) * 24)
  // 총 시간 차를 하루로 나누고 남은 나머지를 시간(1000 * 60 * 60)으로 나누기 
  // 총 시간을 시간으로 나누고 남은 나머지를 분(1000 * 60)으로 나누기
  // 총 시간을 분으로 나누고 남은 나머지를 초(1000밀리초)로 나누기

  // h2의 innerText 변경
  restTime.innerText = `${day}d ${hours}h ${minutes}m ${seconds}s`;
}

// 함수 호출
getClock();
// 1초마다 호출
setInterval(getClock, 1000);