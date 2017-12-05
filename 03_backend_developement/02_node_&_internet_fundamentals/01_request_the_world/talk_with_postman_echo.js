const request = require("request");


function simpleGet(callback) {

request(
  {
    url: "https://postman-echo.com/get",
    method: "GET"
  },
  function(error, response, result) {
    callback(result);
  }
);

}

simpleGet();

module.exports = {
  simpleGet : simpleGet
}
