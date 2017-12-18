const fetch = () => new Promise((resolve) => {
  resolve({
    coord: {
      lon: 3.06,
      lat: 50.63
    },
    weather: [
      {
        id: 520,
        main: "Rain",
        description: "light intensity shower rain",
        icon: "09d"
      }
    ],
    base: "stations",
    main: {
      temp: 4.52,
      pressure: 995,
      humidity: 86,
      temp_min: 4,
      temp_max: 5
    },
    visibility: 10000,
    wind: {
      speed: 2.1,
      deg: 220
    },
    clouds: {
      all: 75
    },
    dt: 1513341000,
    sys: {
      type: 1,
      id: 5625,
      message: 0.004,
      country: "FR",
      sunrise: 1513323790,
      sunset: 1513352595
    },
    id: 2998324,
    name: "Lille",
    cod: 200
  });
});



module.exports = fetch;
