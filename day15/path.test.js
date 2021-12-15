describe('The pathfinder', () => {

    it('given a 2x2 grid, return the path', () => {
        const grid = `23
                      45`;
        expect(path(grid)).toEqual([3,5]);
    });

    it('given a different 2x2 grid, return the path', () => {
        const grid = `28
                      47`;
        expect(path(grid)).toEqual([4,7]);
    });

});

function path(input) {
    const grid = input.split('\n').map(s=> s.trim().split('').map(i => parseInt(i)));

    const flat = grid.flat();
    const last = flat.length-1;
    const end = flat[last];
    const middle = flat.slice(1,last);

    return [Math.min(...middle), end]
}