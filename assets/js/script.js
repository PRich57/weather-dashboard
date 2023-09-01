// VARIABLE DECLARATIONS
var cityName = prompt("Which city would you like to view?");
var fetchBtn = document.getElementById('fetch-button');
var mainSection = document.querySelector("main");

var currentWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=9217e4926ac9dcff03755cdfef766696';

var forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=denver&appid=9217e4926ac9dcff03755cdfef766696'










// FUNCTIONS
function getApi(requestUrlArg) {
  fetch(requestUrlArg)
    .then(function (response) {
      // console.log(response);
      return response.json();
  })
  .then(function (data) {
    console.log(data);
    var city = document.createElement("h2");
    var weather = document.createElement("p");
    city.textContent = data.name;
    weather.textContent = data.weather[0].description;
    mainSection.appendChild(city);
    mainSection.appendChild(weather);
  })
}
getApi(currentWeatherUrl);

getApi(forecastUrl);






// EVENT LISTENERS





