// See Sparta courses for the exercise summary

// Coffee Machine usage. Insert your code above this comment

const machine = {
  litersOfCoffee: 0,

  expresso: function() {
    if (this.litersOfCoffee < 0.08) {
      return false;
    } else {
      this.litersOfCoffee -= 0.08;
      return true;
    }
  },

  longCoffee: function() {
    if (this.litersOfCoffee < 0.15) {
      return false;
    } else {
      this.litersOfCoffee -= 0.15;
      return true;
    }
  },

  fillWithLitersOfCoffee: function(nb_liters) {
    return this.litersOfCoffee += nb_liters;
  }

}

machine.fillWithLitersOfCoffee(10);
console.log(machine.expresso()) // => true
console.log(machine.litersOfCoffee) // => 9.92
console.log(machine.longCoffee()) // => true
console.log(machine.litersOfCoffee) // => 9.77
// some more people ordering coffee here
console.log(machine.litersOfCoffee) // => 0.02
console.log(machine.expresso()) // => false

module.exports = machine;
