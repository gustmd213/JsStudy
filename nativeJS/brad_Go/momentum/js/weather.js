// api key 저장
const API_KEY = config.API_KEY;

// 사용자의 위치를 얻는 함수
function onGeoOk(position) {
  // javascript가 position을 채워준다!! 
  // position의 properties사용. coords에 latitude(위도), longitude(경도)를 변수에 저장
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  // 해당 지역의 날씨정보 url을 변수에 저장하기.
  // url의 끝에 &units=metric을 추가해서 화씨를 섭씨로 변환하기
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  // fetch는 promise이다. promise는 당장 일어나지 않고 시간이 걸린 뒤 일어난다. 서버의 응답 대기 필요. 그래서 then을 사용한다!!
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child")
      const city = document.querySelector("#weather span:last-child")
      // span태그의 innerText를 도시 이름과 날씨, 온도로 설정!
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;
  })
}
function onGeoError() {
  alert("Can't find you. No weather for you.")
}

// 사용자의 위치를 얻는 함수 작성, 하나는 success(유저의 위치를 얻을 수 있을 때), 하나는 error로 인자를 2개 받는다. 
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);