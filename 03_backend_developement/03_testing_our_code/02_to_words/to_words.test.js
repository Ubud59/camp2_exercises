const to_words = require("./to_words");


test("To_Words", () => {
  expect(to_words("Hello Ro;mu")).toEqual(["Hello", "Ro", "mu"]);
  expect(to_words()).toEqual(undefined);
});
