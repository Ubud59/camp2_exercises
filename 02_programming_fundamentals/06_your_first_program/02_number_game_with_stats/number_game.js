const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let myNumber = Math.floor(Math.random() * 100) + 1;
//console.log(myNumber);
let count = 0;

function compare(number) {
  let message = "";
  count ++;
  let number1 = parseInt(number,10);
  if (number1 > myNumber) {
    message =  "Too high...Try again !";
  } else if (number1 < myNumber) {
    message = "Too less..Try again !";
  } else if (number1 === myNumber) {
    message = "Well done you have find my number in " + count + " attempts.";

  }
  reader.question("What's your number? ", (nb) => {
    console.log(compare(nb));
  });
  return message;
}

reader.question("What's your number? ", (nb) => {
  console.log(compare(nb));
});
