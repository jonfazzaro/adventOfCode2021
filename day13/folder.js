module.exports = {parse,print, read} 

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
      .map(x => printedLine(coordinates, x, y))
      .join("")
  );
}

function read(input){
    return input
        .map((line, y) => line.split("")
            .map((c, x) => readCharacter(c, x, y))
            .filter(i => !!i))
                .filter(i => !!i)
                .flat();
}

function outNullValues(i) {
    return !!i;
}

function readCharacter(character, x, y) {
    return character == "#" ? [x,y] : null;
}

function printedLine(coordinates, x, y) {
    return isIn(coordinates, [x, y]) ? "#" : ".";
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