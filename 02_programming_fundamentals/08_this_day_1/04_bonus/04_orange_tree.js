// See Sparta courses for the exercise summary
const orangeTree = {
  height: 0,
  age: 0,
  oranges: 0,
  alive: false,
  lifetime : 50 + Math.floor(Math.random() * 50),

  pickAnOrange: function() {
    if (this.oranges > 0) {
      this.oranges -= 1;
      return true;
    } else return false;
  },

  ageOneYear: function() {
    this.age += 1;
    // height management
    if (this.alive) {
      if (this.age > 0 && this.age < 10) {
        this.height = this.age * 25;
      } else if (this.age >= 10 && this.age < 20) {
        this.height = 9 * 25 + (this.age - 9) * 10;
      }

      if (this.height >= 325) {
        this.height = 325;
      }

      //orange production
      if (this.age >=5 && this.age < 10) {
        this.oranges = 10;
      } else if (this.age >= 10 && this.age < 20) {
        this.oranges = 20;
      } else if (this.age >= 20 && this.age < 40) {
        this.oranges = 5;
      } else this.oranges = 0;

      // Dead or Not Dead ?
      if (Math.floor(Math.random() * this.age) > (this.lifetime)) {
        this.alive = false;
      }
      if (this.age >= this.lifetime) {
        this.alive = false;
      }
    }
    return this;
  },

  seed: function() {
    this.height = 0;
    this.age = 0;
    this.oranges = 0;
    this.alive = true;
    return this;
  }

};

module.exports = orangeTree;

// Business Rules
//
// the Orange Tree should age each year
// it should grow each year:
// 25 centimeters until it is 10 years old
// 10 centimeters until it is 20 years old
// it should produce each year:
// 10 oranges when it's between 5 and 10 years old
// 20 oranges when it's between 10 and 20 years old
// 5 oranges until it's 40 years old
// it should not die until it is at least 50 years old and can't get past 100 years
// When we seed an orangeTree, it resets all its attributes
// Bonus Point: Make it so that the probability for the Orange Tree to die gets bigger as the time passes.
//
// Tip: Paying attention to the tests may help you understand the expected implementation details for this exercise.
