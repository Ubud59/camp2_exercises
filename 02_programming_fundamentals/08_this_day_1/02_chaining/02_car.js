// See Sparta courses for the exercise summary

const car = {
  speed: 0,
  km_total: 0,

  start: function() { // will reset all the car data
    this.speed = 0;
    this.km_total = 0;
    return this;
  },

  changeSpeed(speed) { // will change the km/h speed of the car
    this.speed = speed;
    return this;
  },

  drive(minutes) { // will make your car drive at the previously set speed for that amount of time in minutes
    this.km_total = this.km_total + (this.speed/60) * minutes;
    return this;
  },

  showDistance() { // will print the distance you drove as the number of kilometers
    return console.log(`${this.km_total} Km`);
  }
}


module.exports = car;
