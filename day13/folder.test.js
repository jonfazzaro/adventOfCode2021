const { parse, print, read, fold } = require("./folder");

describe("The grid folding functions", () => {
  describe("when parsing", () => {
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
  });
  describe("when printing", () => {
    it("given coordinates, prints a grid", () => {
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

  describe("when reading", () => {
    it("returns the coordinates", () => {
      const grid = [".....", ".#.#.", "...##", "..#..", "....."];

      expect(JSON.stringify(read(grid))).toEqual(
        JSON.stringify([
          [1, 1],
          [3, 1],
          [3, 2],
          [4, 2],
          [2, 3],
        ])
      );
    });
  });

  describe("when folding", () => {
    it("returns the folded coordinates", () => {
      const coordinates = [
        [2, 3],
        [4, 5],
        [1, 1],
      ];
      const result = fold(coordinates, "y=3");
      expect(result).toEqual([
        [4, 0],
        [1, 1],
        [2, 2],
      ]);
    });
  });
});
