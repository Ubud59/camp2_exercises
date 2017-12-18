require("sepia");
const open_weather = require("./open_weather.js");


test("weatherByCityName", () => {
  return open_weather.weatherByCityName("Lille")
    .then(temp => {
      expect(temp).toBe(4.51);});
});
