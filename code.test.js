const sum = require("./code");

describe("Sum function", () => {
  it("is used to sum items of an array", () => {
    expect(sum([2, 3, 4])).toBe(9);
  });
});
