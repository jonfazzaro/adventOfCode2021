const power = require('./power');

describe('The power consumption reader', () => {
    it('exists', () => {
       power() 
    });
    
    it('given nothing, returns zero', () => {
        expect(power()).toEqual(0);
    });
});
