const path = require('./path');
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
