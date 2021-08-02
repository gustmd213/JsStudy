const API_KEY = config.API_KEY;

function onGeoOk(position) {

  const lat = position.coords.latitude;
  const lon = position.coords.longitude;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  // 날씨, 온도 정보를 이용해 span태그에 넣어주기!
  fetch(url)
    .then(response => response.json())
    .then((data) => {
      const container = document.querySelector("#weather");
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      const icon = document.createElement("img");
      icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

      container.prepend(icon);
      weather.innerText = `${data.weather[0].main} ${Math.round(data.main.temp)}°C`;
      city.innerText = data.name;
    });
}
function onError() {
  alert("Can't find your location. Refresh the page and accept location check message");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onError);