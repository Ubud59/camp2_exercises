/* Implement a fizzBuzz function as such: `fizzBuzz(list)`, where `list` is an array
   of positive integers, for example : `[1, 2, 3, 4, 5, 6]`.
   This function will return a new array where some values will have been modified:

   - if the number is divisible by 3: `Fizz`;
   - if the number is divisible by 5: `Buzz`;
   - if the number is divisible by 3 and 5 : `FizzBuzz`
   - otherwise, the value is preserved.
*/

function fizzBuzz(list) {
  let result = new Array();
  for (let i=0; i <= list.length-1; i++) {
    if (list[i] % 15 === 0) {
      result.push("FizzBuzz");
      console.log("FizzBuzz");
    } else if (list[i] % 3 === 0) {
      result.push("Fizz");
      console.log("Fizz");
    } else if (list[i] % 5 === 0) {
      result.push("Buzz");
      console.log("Buzz");
    } else {
      result.push(list[i]);
      console.log(i);
    }
  }
  return result;
}


module.exports = fizzBuzz;
