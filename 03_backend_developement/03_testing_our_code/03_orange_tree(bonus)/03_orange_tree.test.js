const tree = require("./03_orange_tree");

test("pick an orange if some oranges exist", () => {
  tree.seed();
  tree.oranges = 21;

  expect(tree.pickAnOrange()).toEqual(true);
  expect(tree.oranges).toEqual(20);
});

test("orangeTree is dead if age > 99 ", () => {
  tree.age = 99;

  tree.ageOneYear();
  expect(tree.alive).toBeFalsy();
});
