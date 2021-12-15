module.exports = function path(input) {
    const grid = parseGrid(input);

    const flat = grid.flat();
    const last = flat.length-1;
    const end = flat[last];
    const middle = flat.slice(1,last);

    return [Math.min(...middle), end]
}

function parseGrid(input) {
    return input.split('\n').map(s=> s.trim().split('').map(i => parseInt(i)));
}