const request = require("request");

const API_KEY = process.env.OPEN_WEATHER_API;

function weatherByLatitudeAndLongitude(latitude,longitude) {

  return request({
    url: `http://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&APPID=${API_KEY}&units=metric`,
    method: "GET"
  }, function(error, response, result) {
    const json = JSON.parse(result);
    const myjason = json.list.map(buildmyjson);

    console.log(myjason);
  });
}

function buildmyjson(item) {
  return {
    temp: item.main.temp,
    date: new Date(item.dt*1000),
    weather: {id: item.weather[0].id, main: item.weather[0].main , description: item.weather[0].description}
  };
}

function weatherByZipcode(zipcode,countrycode) {
  return request({
    url: `http://api.openweathermap.org/data/2.5/forecast?zip=${zipcode},${countrycode}&APPID=${API_KEY}&units=metric`,
    method: "GET"
  }, function(error, response, result) {

    const json = JSON.parse(result);
    const myjason = json.list.map(buildmyjson);

    console.log(myjason);
  });
}


//weatherByLatitudeAndLongitude(32.661343,51.680374);
weatherByZipcode("59650", "fr");
//weatherByCity("Bogota");

//module.exports = weatherByCity;
