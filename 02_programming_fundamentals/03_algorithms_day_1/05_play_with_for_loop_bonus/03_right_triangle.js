// ## Right triangle of size 5
//
//
// ```
// *
// **
// ***
// ****
// *****
// ```
let j = 0;
while (j < 5) {
  for (let i = 0; i <= j; i++) {
    process.stdout.write("*");
  }
  process.stdout.write("\n");
  j++;
}
