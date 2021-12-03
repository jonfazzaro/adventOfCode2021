const { gamma, epsilon } = require("./power");

describe("The power consumption reader", () => {
  describe("when computing gamma rate", () => {
    it("given nothing, returns zero", () => {
      expect(gamma()).toEqual(0);
    });

    it("given 1, returns 1", () => {
      expect(gamma(`1`)).toEqual(1);
    });

    it("given more readings, returns the most common", () => {
      const readings = `1
       0
       0
       0
       1`;

      expect(gamma(readings)).toEqual(0);
    });

    it("given readings with multiple digits, returns the most common for each digit", () => {
      const readings = `11010
       01110
       00110
       01010
       10110`;

      expect(gamma(readings)).toEqual(14);
    });

    it("passes the example", () => {
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
        01010`;

      expect(gamma(readings)).toEqual(22);
    });
  });

  describe('when computing the epsilon rate', () => {
      it('given nothing, returns zero', () => {
          expect(epsilon()).toEqual(0);
      });

      it('given 1, returns 1', () => {
          expect(epsilon(`1`)).toEqual(1);
      });

      it.only('given more data, returns the least common bit for each digit', () => {
          const readings = `0
          0
          0
          0
          0
          1`;

          expect(epsilon(readings)).toEqual(1);
      });


      
  });
});
