const fetch = require("node-fetch");


function weatherByCityName(city) {
  return fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${process.env.OPEN_WEATHER_API}&units=metric`
  )
    .then((response) => response.json())
    .then((result) => {
      return result.main.temp;
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


//weatherByCityName("Lille");
//weatherByLatitudeAndLongitude(32.661343, 51.680374);

module.exports={
  weatherByCityName:weatherByCityName,
  weatherByLatitudeAndLongitude:weatherByLatitudeAndLongitude};
