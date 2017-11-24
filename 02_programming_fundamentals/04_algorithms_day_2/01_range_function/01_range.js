// Write a function that takes two input parameters, and returns a new array with defaults values between the start
// number and the end number.
//
// This function should work in both ascending or descending order.

// Complete this function.
function range(number1,number2) {
  let tabnumber = new Array();
  if (number1 >= number2) {
    for (let i=number1; i>=number2; i--) {
      tabnumber.push(i);
    }
  } else if (number1 < number2) {
    for (let i=number1; i<=number2; i++) {
      tabnumber.push(i);
    }
  }
  console.log(tabnumber);
  return tabnumber;
}

range(5,-2);

// Do not remove last lines, it is for tests
// eslint-disable-next-line
module.exports = range;
