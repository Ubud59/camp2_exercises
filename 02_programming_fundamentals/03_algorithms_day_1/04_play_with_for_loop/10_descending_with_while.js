// ## Decreasing Iteration on arrays using while
//
// -  Using `length`, write on `stdout` each values of the `litteralDigits` array, descending.

const litteralDigits = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
let i = 0;

litteralDigits.reverse();

while (i <= litteralDigits.length - 1) {
  process.stdout.write(litteralDigits[i]);
  i++;
}
