const greeting = require("./greeting");


test("Greeting", () => {
  expect(greeting("Romu")).toBe("Hello ROMU!");
  expect(greeting()).toBe("Hello WORLD!");
});
