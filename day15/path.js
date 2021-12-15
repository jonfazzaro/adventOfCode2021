module.exports = function path(input) {
    const grid = parseGrid(input);

    const flat = grid.flat();
    const last = flat.length-1;
    const end = flat[last];
    const middle = flat.slice(1,last);

    return [Math.min(...middle), end]
}

function parseGrid(input) {
    return input.split('\n')
        .map(toRow);
}

function toRow(line) {
return line.trim().split('').map(toInt)
}

function toInt(i) {
    return parseInt(i);
}