function onGeoSuccess(position){
  const latitude  = position.coords.latitude;
  const longitude = position.coords.longitude;
  const url = `https://weatheraaaaa.herokuapp.com/`;
  fetch(url)
    .then((response) => response.json())
    .then(data => {
      const weather = document.querySelector('.weather');
      const weatherLocation = document.querySelector('.weather-location');
      const weatherIcon = document.querySelector('.weather-icon');
      weather.innerText = `${Math.floor(data.main.temp*10)/10}℃`
      weatherLocation.innerText = data.name;
      weatherIcon.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png`);
    })
}
function onGeoError(position){
  alert("Can't find you");
}
navigator.geolocation.getCurrentPosition(onGeoSuccess, onGeoError);