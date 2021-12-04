module.exports = function bingo(input) {
  if (!input) return null;
  const drawings = parseDrawings(input);
  const boardsInput = input.split('\n').slice(1).join('\n')
  return parseBoards(boardsInput)
    .filter(hasBingo(drawings));
};

function parseBoards(input) {
  if (!input) return [];
  const boards = input.split(/\n\n/).map(parseBoard);
  return boards;
}

function parseBoard(input, index) {
  const board = {
    index,
    rows: elements(input, "\n").map(row),
  };
  board.columns = parseColumns(board);
  return board;
}

function row(line) {
  return elements(line, " ").map((e) => parseInt(e.trim()));
}

function parseColumns(board) {
    return range(5).map((i) => board.rows.map((r) => r[i]));
}

function hasBingo(drawings) {
  return (board) => 
    board.rows.some(r => arrayEquals(r, drawings)) || 
    board.columns.some(c => arrayEquals(c, drawings));
}

function parseDrawings(input) {
    const firstLine =elements(input, "\n")[0];
  return elements(firstLine, ",").map(i => parseInt(i.trim()));
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

function arrayEquals(a, b) {
    return a.every(e => b.includes(e))
        && b.every(e => a.includes(e));
}