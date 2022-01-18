let currentTime = new Date();

//console.log(currentTime.getDay());
//console.log(currentTime.getHours());
//console.log(currentTime.getMinutes());

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

//let currentMonth = currentTime.getMonth();
let currentDay = days[currentTime.getDay()];
//let currentYear = currentTime.getFullYear();
let currentMin = currentTime.getMinutes();
let currentHour = currentTime.getHours();

let timeFormat = `${currentDay} ${currentHour}:${currentMin}`;
////console.log(timeFormat);

let inputTime = document.querySelector("#timeInput");
inputTime.innerHTML = timeFormat;

/*  weather api */
/*let apiKey = "9505eef35ba652edb7db56c09bed59ad";
let city = "Paris";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`; */
function showWeather(response) {
  console.log(response);
  document.querySelector("#h2-city").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    `${response.data.main.temp}`
  );
  document.querySelector("#description").innerHTML =
    response.data.weather[0].description;
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind-speed").innerHTML = Math.round(
    response.data.wind.speed
  );
}

function searchCity(city) {
  let apiKey = "9505eef35ba652edb7db56c09bed59ad";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showWeather);
}

function handleSubmit(event) {
  event.preventDefault();
  let city = document.querySelector("#chosen-city").value;
  searchCity(city);
}

function getCurrentPosition(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

function searchLocation(position) {
  position.coords.latitude;
  position.coords.longitude;
}

//axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);

let searchForm = document.querySelector("#submit-form");
searchForm.addEventListener("submit", handleSubmit);

let geoLocationButton = document.querySelector("#geo-button");
geoLocationButton.addEventListener("click", getCurrentPosition);

searchCity("Brooklyn");
