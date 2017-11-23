// ## Decreasing Iteration on arrays
//
// -  Using `length`, write on `stdout` each values of the `litteralDigits` array, descending.

const litteralDigits = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

litteralDigits.reverse();

for (let i = 0; i <= litteralDigits.length-1; i++ ) {
  process.stdout.write(litteralDigits[i]+ "\n");
}
