module.exports = function bingo(input) {
  if (!input) return null;
  const drawings = parseDrawings(input);
  const winners = parseBoards(input).filter(hasBingo(drawings));
  return winners;
};

function parseBoards(input) {
  if (!input) return [];
  return input.split("\n\n").map(parseBoard);
}

function parseBoard(input, index) {
  const boards = elements(input, "\n")[1];
  return {
      index,
    rows: boards
      .trim()
      .split("\n")
      .map((row) => row.split(" ").filter((s) => !!s)),
  };
}

function hasBingo(drawings) {
  return (board) => true;
}

function parseDrawings(input) {
  return elements(elements(input, "\n")[0], ",");
}

function elements(input, by) {
  if (!input) return [];
  return input
    .trim()
    .split(by)
    .map((s) => s.trim())
    .filter((s) => !!s);
}
