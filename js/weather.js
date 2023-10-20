const API_KEY = "94894145cea2296b2abdf104fe25ee52";

function onGeoOk(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const weather = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      city.innerText = data.name;
      const temperature = Math.floor(data.main.temp);
      weather.innerText = `${data.weather[0].main} / ${temperature}`;
    });
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
