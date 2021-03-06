const WIDTH = 5;
const MARKER = "*";

const _data = { boards: null };
module.exports = function bingo(input) {
  if (!input) return [];
  const drawings = parseDrawings(input);
  _data.boards = parseBoards(input);
  return game(drawings);
};

function game(drawings) {
  return drawings
    .map(drawing => play(drawing))
    .flat()
    .filter(w => !!w);
}

function play(drawing) {
  const stillInPlay = _data.boards.filter(b => !hasWon(b));

  stillInPlay.forEach(board => mark(board, drawing));

  return stillInPlay.filter(hasWon).map(b => ({
    ...b,
    draw: drawing,
    score: score(b, drawing),
  }));
}

function score(board, drawing) {
  const unmarked = board.elements
    .filter(e => !valueIsMarked(e))
    .map(e => parseInt(e.trim()));
  const sum = unmarked.reduce((total, e) => total + e, 0);
  return sum * parseInt(drawing);
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
  return elements.map(e => (e === drawing ? e + MARKER : e));
}

function parseBoards(input) {
  const boardsInput = input.split("\n").slice(1).join("\n");
  if (!boardsInput) return [];
  return boardsInput.split(/\n\s*?\n/).map(parseBoard);
}

function parseBoard(input, index) {
  const board = {
    index,
    elements: elements(input, /\s/),
  };
  return board;
}

function rows(board) {
  return range(WIDTH).map(row(board));
}

function row(board) {
  return i => {
    const begin = i * WIDTH;
    const end = begin + WIDTH;
    return board.elements.slice(begin, end);
  };
}

function columns(board) {
  const boardRows = rows(board);
  return range(WIDTH).map(i => boardRows.map(r => r[i]));
}

function parseDrawings(input) {
  const firstLine = elements(input, "\n")[0];
  return elements(firstLine, ",").map(i => i.trim());
}

function elements(input, by) {
  if (!input) return [];
  return input
    .trim()
    .split(by)
    .map(s => s.trim())
    .filter(s => !!s);
}

function range(size) {
  return [...Array(size).keys()];
}
