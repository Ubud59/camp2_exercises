// See Sparta courses for the exercise summary

// Coffee Machine usage. Insert your code above this comment
const container = require("./container");

const machine = {

  fillWithLitersOfCoffee : function(numberOfLiters) {
    container.putLitersOfCoffee(numberOfLiters);
  },

  expresso : function() {
    return container.consumeLitersOfCoffee(0.08);
  },

  longCoffee : function () {
    return container.consumeLitersOfCoffee(0.15);
  }

};


machine.fillWithLitersOfCoffee(0.5);
console.log(machine.expresso()); // => true
console.log(machine.longCoffee()); // => true
console.log(machine.longCoffee()); // => true
console.log(machine.longCoffee()); // => false
console.log(machine.expresso()); // => true
console.log(machine.expresso()); // => false

module.exports = machine;
