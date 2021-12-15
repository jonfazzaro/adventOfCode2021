
module.exports = function path(input) {
    const grid = input.split('\n').map(s=> s.trim().split('').map(i => parseInt(i)));

    const flat = grid.flat();
    const last = flat.length-1;
    const end = flat[last];
    const middle = flat.slice(1,last);

    return [Math.min(...middle), end]
}