const path = require("./path");

describe("The pathfinder", () => {
  describe("given a 2x2 grid", () => {
    it("return a horizontal path", () => {
      const grid = `23
                      45`;
      expect(path(grid)).toEqual([3, 5]);
    });

    it("return a vertical path", () => {
      const grid = `28
                      47`;
      expect(path(grid)).toEqual([4, 7]);
    });
  });

  describe('given a 3x3 grid', () => {
     it.only('returns a path', () => {
        const grid = `830
                      101
                      789`;
      expect(path(grid)).toEqual([1,0,1,9]); 
     });
  });
});
