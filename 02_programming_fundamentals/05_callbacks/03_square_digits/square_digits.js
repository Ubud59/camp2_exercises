// Your task is to square **EACH** digit of a number via a squareDigits function.
//
// squareDigits(9) === 81
// squareDigits(9129) === 811481
// squareDigits(99) === 8181
//
// Note: This is not just the square of a number but the square of each digits
// Note: The function accepts an integer and returns an integer

function squareDigits(number) {
  let nombre = number.toString();
  let nb = 0;
  let nb_square = 0;
  let chaine_nb_square = "";
  // console.log("nombre :" + nombre);
  for (let i=0; i < nombre.length; i++) {
    nb = parseInt(nombre[i], 10);
    // console.log("nb :" + nb);
    nb_square=nb*nb;
    // console.log("nb_square :" + nb_square);
    chaine_nb_square = chaine_nb_square + nb_square.toString();
  }
  // console.log("chaine_nb_square :" + chaine_nb_square);
  // console.log("nb_square :" + parseInt(chaine_nb_square,10));
  return parseInt(chaine_nb_square, 10);
}

// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = squareDigits;
