

class Fish {
  constructor(name,sex,mode) {
    this.name = name;
    this.sex = sex;
    this.mode = mode;
  }
}

class Algae {
  constructor(number) {
    this.number = number;
  }
}

class Aquarium {
  constructor(fishes,algaes) {
    this.fishes= fishes;
    this.algaes = algaes;
  }

  addFish(fish) {
    this.fishes.push(fish);
  }

  addAlgae(algae) {
    this.algaes.push(algae);
  }

  endTurn() {
    this.fishes.map(element => {
      if (element.mode === 0) {
        this.fishes.splice(this.fishes.length-1,1);
      } else {
        this.algaes.splice(this.algaes.length-1,1);
      }
      return true;
    });
  }
}

const newCarnFish = new Fish("Lorem", "M", 0);
const newVeganFish = new Fish("Lorem", "M", 1);

const newAlgae = new Algae(12);

const newAquarium = new Aquarium([newVeganFish, newCarnFish], [newAlgae]);
newAquarium.endTurn();
console.log(newAquarium);
module.exports = {
  aquarium: Aquarium,
  fish: Fish,
  algae: Algae
};
