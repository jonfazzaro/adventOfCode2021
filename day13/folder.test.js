const {parse,print} = require('./folder');

describe("The grid parser", () => {
  it("given empty, returns empty", () => {
    expect(parse(``)).toEqual([]);
  });

  it("given string input, returns coordinates", () => {
    const input = `0,0
                     1,1`;
    expect(parse(input)).toEqual([
      [0, 0],
      [1, 1],
    ]);
  });

  it("given coordinates, paints a grid", () => {
    const coordinates = [
      [2, 3],
      [4, 5],
    ];

    expect(print(coordinates)).toEqual([
      ".....",
      ".....",
      ".....",
      "..#..",
      ".....",
      "....#",
    ]);
  });
});
