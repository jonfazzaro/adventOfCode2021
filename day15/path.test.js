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
    const length = flat.length;
    const end = flat[length-1];

    const middle = flat.slice(1,length-1);

    console.log(flat, middle, end)

    return [Math.min(...middle), end]
}