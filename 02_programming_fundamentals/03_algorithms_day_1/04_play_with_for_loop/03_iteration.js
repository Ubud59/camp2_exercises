// ## Iteration on arrays
//
// -  Create an array called `litteralDigits` from `zero` to `nine` where each array entry is a spelled-out number;
// -  Using `length`, write on `stdout` each values of the table.
let litteralDigits = [];
litteralDigits.push("zero","one","two","three","four","five","six","seven","eight","nine");

for (let i = 0; i <= litteralDigits.length-1; i++ ) {
  process.stdout.write(litteralDigits[i]+ "\n");
}
