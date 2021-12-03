const power = require('./power');

describe('The power consumption reader', () => {
    it('given nothing, returns zero', () => {
        expect(power()).toEqual(0);
    });

    it('given 1, returns 1', () => {
        expect(power(`1`)).toEqual(1);
    });

    it('given more readings, returns the most common', () => {
       const readings = `1
       0
       0
       0
       1`;
       
       expect(power(readings)).toEqual(0);
    });

    it('given readings with multiple digits, returns the most common for each digit', () => {
       const readings = `11010
       01110
       00110
       01010
       10110`;
       
       expect(power(readings)).toEqual(14);
    });

    it('passes the example', () => {
        const readings = `00100
        11110
        10110
        10111
        10101
        01111
        00111
        11100
        10000
        11001
        00010
        01010`

       expect(power(readings)).toEqual(22);
    });


});
