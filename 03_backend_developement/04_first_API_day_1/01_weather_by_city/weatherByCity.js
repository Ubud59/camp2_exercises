const request = require("request");

const API_KEY = process.env.OPEN_WEATHER_API;

function weatherByCity(city) {

  return request({
    url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${API_KEY}&units=metric`,
    method: "GET"
  }, function(error, response, result) {
    const json = JSON.parse(result);
    const temp = json.main.temp + " °C";
    return temp;
  });

}

//weatherByCity("Bogota");

module.exports = weatherByCity;
