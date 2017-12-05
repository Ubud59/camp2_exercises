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

function simpleGetWithParams(callback) {
  request(
    {
      url: "https://postman-echo.com/get?foo=bar&program=camp2&people=Frieda&people=Francis",
      method: "GET"
    },
    function(error, response, result) {
      const result1 = JSON.parse(result);
      callback(result1.args);
    }
  );
}

function validateTimestamp(callback) {

  const today = new Date();
  const today2 = today.getFullYear()+"-"+today.getMonth()+"-"+today.getDate();
  //console.log("today2:",today2);
  request(
    {
      url: `https://postman-echo.com/time/valid?timestamp=${today2}`,
      method: "GET"
    },
    function(error, response, result) {
      callback(result);
    }
  );
}


function displayResult(result) {
  console.log(result);
}

module.exports = {
  simpleGet : simpleGet,
  simpleGetWithParams : simpleGetWithParams,
  validateTimestamp : validateTimestamp
};
