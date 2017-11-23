// ## Inverted Right triangle of size 5
//
// ```
// *****
//  ****
//   ***
//    **
//     *
// ```
let i = 0;
for (let j = 5; j > 0; j--) {
  while (i < j) {
    process.stdout.write("*");
    i++;
  }
  process.stdout.write("\n");
  i = 0;
}
