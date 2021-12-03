const power = require('./power');

describe('The power consumption reader', () => {
    it('given nothing, returns zero', () => {
        expect(power()).toEqual('0');
    });

    it('given 1, returns 1', () => {
        expect(power(`1`)).toEqual('1');
    });

    it('given more readings, returns the most common', () => {
       const readings = `1
       0
       0
       0
       1`;
       
       expect(power(readings)).toEqual('0');
    });

    it('given readings with multiple digits, returns the most common for each digit', () => {
       const readings = `110
       011
       001
       010
       101`;
       
       expect(power(readings)).toEqual('011');
    });


});