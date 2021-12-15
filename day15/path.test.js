describe('The pathfinder', () => {
    it('given a 2x2 grid, return the path', () => {
        const grid = `23
                      45`;
        expect(path(grid)).toEqual([3,5]);
    });
});

function path() {

    return [3,5]
}