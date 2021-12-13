module.exports = {parse,print} 

function parse(input) {
  const lines = input
    .split("\n")
    .map(s => s.trim())
    .filter(s => !!s);
  return lines.map(line => [
    parseInt(line.split(",")[0]),
    parseInt(line.split(",")[1]),
  ]);
}

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