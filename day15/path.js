module.exports = function path(input) {
  const grid = parseGrid(input);

  const lastColumn = grid[0].length-1;
  const lastRow = grid.length-1;

  let position = {x:0,y:0};
  const values = [];
  while(!isLast(position)) {
    
    const right = moveRight(position, lastColumn);
    const down = moveDown(position, lastRow); 
    
    if (right && (isLast(right) || value(grid, right) < value(grid, down)))
      position = right;
    else if (down && (isLast(down) || value(grid, down) < value(grid, right)) )
       position = down;
       else break;

    values.push(value(grid, position));
  }

  return values;

  function isLast(position) {
    return !!position 
        && position.x === lastColumn 
        && position.y === lastRow;
  }
};

function parseGrid(input) {
  return input.split("\n").map(toRow);
}

function toRow(line) {
  return line.trim().split("").map(i => parseInt(i));
}

function value(grid, position) {
  if (!position)
    return -1;
  return grid[position.x][position.y];
}

function moveRight(position, limit) {
  if (!position || limit<position.x+1)
    return null;
  return {
    x: position.x+1,
    y: position.y
  }
}

function moveDown(position, limit) {
  if (!position || limit<position.y+1)
    return null;
  return {
    x: position.x,
    y: position.y+1
  }
}
