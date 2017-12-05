
let litersOfCoffee = 0;

function putLitersOfCoffee(numberOfLiters) {
  litersOfCoffee += numberOfLiters;
  // return true;
}

function consumeLitersOfCoffee(numberOfLiters){
  if (numberOfLiters <= litersOfCoffee) {
    litersOfCoffee -= numberOfLiters;
    return true;
  } else {return false; }
}

module.exports = {
  putLitersOfCoffee : putLitersOfCoffee,
  consumeLitersOfCoffee : consumeLitersOfCoffee
};
