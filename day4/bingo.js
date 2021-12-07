module.exports = function bingo(input) {
  if (!input) return null;
  const drawings = parseDrawings(input);
  const boards = parseBoards(input);
  return game(boards, drawings);
};

const WIDTH = 5;
const MARKER = "*";

function game(boards, drawings) {
  let winner = null;
  let i = 0;
  while (winner == null && i < drawings.length) {
    winner = play(drawings[i], boards);
    i++;
  }
  return winner;
}

function play(drawing, boards) {
  for (let b = 0; b < boards.length; b++) {
    mark(boards[b], drawing);

    if (hasWon(boards[b])) return { ...boards[b], draw: drawing };
  }

  return null;
}

function mark(board, drawing) {
  board.elements = marked(board.elements, drawing);
}

function hasWon(board) {
  return rows(board).some(haveAllMarked) || columns(board).some(haveAllMarked);
}

function haveAllMarked(set) {
  return set.every(valueIsMarked);
}

function valueIsMarked(value) {
  return value.endsWith(MARKER);
}

function marked(elements, drawing) {
  return elements.map((e) => (e === drawing ? e + MARKER : e));
}

function parseBoards(input) {
  const boardsInput = input.split("\n").slice(1).join("\n");
  if (!boardsInput) return [];
  return boardsInput.split(/\n\n/).map(parseBoard);
}

function parseBoard(input, index) {
  return {
    index,
    elements: elements(input, /\s/),
  };
}

function rows(board) {
  return range(WIDTH).map(row(board));
}

function row(board) {
  return (i) => {
    const begin = i * WIDTH;
    const end = begin + WIDTH;
    return board.elements.slice(begin, end);
  };
}

function columns(board) {
  const boardRows = rows(board);
  return range(WIDTH).map((i) => boardRows.map((r) => r[i]));
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
