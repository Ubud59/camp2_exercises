const fetch = require("node-fetch");

function temperatureAt(place) {
  fetch(
    `https://maps.googleapis.com/maps/api/geocode/json?address=${place},FR&key=${process.env.GOOGLE_MAPS_API}`
  )
    .then((response) => response.json())
    .then((result) => {
      weatherByLatitudeAndLongitude(result.results[0].geometry.location.lat, result.results[0].geometry.location.lng);
    })
    .catch((error) => {
      console.warn(error);
    });
}

function weatherByLatitudeAndLongitude(latitude, longitude) {
  fetch(
    `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&APPID=${process.env.OPEN_WEATHER_API}&units=metric`
  )
    .then((response) => response.json())
    .then((result) => {
      console.log(result.list[0].main.temp);
    })
    .catch((error) => {
      console.warn(error);
    });
}


temperatureAt("Shanghai");
