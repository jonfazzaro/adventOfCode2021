module.exports = function bingo(input) {
  if (!input) return null;
  const drawings = parseDrawings(input);
  const boardsInput = input.split("\n").slice(1).join("\n");
  const boards = parseBoards(boardsInput);

  let winner = null;
  let i = 0;
  while (winner == null && i < drawings.length) {
    const drawn = drawings[i];

    for (let b = 0; b < boards.length; b++) {
      mark(boards[b], drawn);

      if (hasWon(boards[b])) {
        winner = boards[b];
        winner.draw = drawn;
        break;
      }
    }

    i++;
  }

  return winner;
};

function mark(board, drawn) {
    board.elements = marked(board.elements, drawn);
}

function hasWon(board) {
  return (
    rows(board).some((row) => row.every((n) => n.endsWith("*"))) ||
    columns(board).some((col) => col.every((n) => n.endsWith("*")))
  );
}

function marked(elements, drawn) {
  return elements.map((e) => (e === drawn ? e + "*" : e));
}

function parseBoards(input) {
  if (!input) return [];
  return input.split(/\n\n/).map(parseBoard);
}

function parseBoard(input, index) {
  return {
    index,
    elements: elements(input, /\s/),
  };
}

function rows(board) {
  return range(5).map((i) => board.elements.slice(i * 5, i * 5 + 5));
}

function columns(board) {
  const boardRows = rows(board);
  return range(5).map((i) => boardRows.map((r) => r[i]));
}

function parseDrawings(input) {
  const firstLine = elements(input, "\n")[0];
  return elements(firstLine, ",").map((i) => i.trim());
}

function elements(input, by) {
  if (!input) return [];
  return input
    .trim()
    .split(by)
    .map((s) => s.trim())
    .filter((s) => !!s);
}

function range(size) {
  return [...Array(size).keys()];
}
