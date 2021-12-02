const navigate = require("./navigate");

describe('The navigate function', () => {
    it('given a zero location and no instructions, returns a zero location', () => {
        expect(navigate()).toEqual({position: 0, depth: 0});
    });
});