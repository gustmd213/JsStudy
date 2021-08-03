const restTime = document.querySelector("#resttime");

function showRestTime() {
  const today = new Date();

  // 크리스마스 설정(d-day)
  let christmas = new Date(2021, 11, 25);

  // 경과시간 간의 차를 이용해 총 남은 시간 밀리초로 구하기위해 gapTime에 두 날짜 간의 차를 저장
  const gapTime = christmas.getTime() - today.getTime();
  
  // 총 남은 시간을 통해 남은 날짜 구하기
  const second = Math.floor(gapTime/1000);
  const minute = Math.floor(second/60);
  const hour = Math.floor(minute/60);
  const restDay = Math.floor(hour/24);

  // 남은 초, 분, 시간
  const restSec = String(Math.floor(((second/60)-minute)*60)).padStart(2, "0");
  const restMin = String(Math.floor(((minute/60)-hour)*60)).padStart(2, "0");
  const restHour = String(Math.floor(((hour/24)-restDay)*24)).padStart(2, "0");

  // h2의 내용을 구한 남은 시간으로 변경!
  restTime.innerText = `${restDay}d ${restHour}h ${restMin}m ${restSec}s`
}

showRestTime();
setInterval(showRestTime, 1000);