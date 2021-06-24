const fn = require("./SmallestOfThreeNumbers");

test("find the smallest of three numbers", () => {
  expect(fn(1, 2, 3)).toBe(1);
  expect(fn(-4, -6, -8)).toBe(-8);
  expect(fn(3, -2, 10)).toBe(-2);
});
