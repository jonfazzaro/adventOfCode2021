const { parse, print, read, fold, folded,unique } = require("./folder");

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
    describe("along y", () => {
      it.only("returns the folded coordinates", () => {
        const coordinates = [
          [2, 4],
          [4, 5],
          [1, 1],
        ];
        const result = fold(coordinates, "y=3");
        console.log(result);
        expect(result).toEqual([
          [1, 1],
          [4, 1],
          [2, 2],
        ]);
      });
    });

    describe("along x", () => {
      it("returns the folded coordinates", () => {
        const coordinates = [
          [4, 1],
          [1,2],
          [3, 4]
        ];

        const result = fold(coordinates, "x=2");
        expect(result).toEqual([
          [0,1],
          [1,2],
          [1,4]
        ]);
      });
    });
  });

  it('passes the example', () => {
    const input = `6,10
    0,14
    9,10
    0,3
    10,4
    4,11
    6,0
    6,12
    4,1
    0,13
    10,12
    3,4
    3,0
    8,4
    1,10
    2,14
    8,10
    9,0`;

    const result = fold(parse(input), "y=7");
    expect(result.length).toEqual(17)
  });

  it('calculates the fold', () => {
    expect(folded(10, 7)).toEqual(4)
    expect(folded(11, 7)).toEqual(3)
    expect(folded(13, 7)).toEqual(1)
    expect(folded(14, 7)).toEqual(0)
  });
});
