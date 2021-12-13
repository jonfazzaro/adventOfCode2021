const {parse} = require('./folder');

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

function print(coordinates) {
  return range(height(coordinates)).map(y =>
    range(width(coordinates))
      .map(x => (isIn(coordinates, [x, y]) ? "#" : "."))
      .join("")
  );
}

function ys(coordinates) {
  return coordinates.map(c => c[1]);
}

function xs(coordinates) {
  return coordinates.map(c => c[0]);
}

function width(coordinates) {
  return Math.max(...xs(coordinates)) + 1;
}
function height(coordinates) {
  return Math.max(...ys(coordinates)) + 1;
}

function isIn(coordinates, coordinate) {
  return coordinates.some(
    c => c[0] == coordinate[0] && c[1] == coordinate[1]
  );
}

function range(size) {
  return [...Array(size).keys()];
}
