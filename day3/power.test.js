const power = require('./power');

describe('The power consumption reader', () => {
    it('given nothing, returns zero', () => {
        expect(power()).toEqual(0);
    });

    it('given 1, returns 1', () => {
        expect(power(`1`)).toEqual(1);
    });
});
