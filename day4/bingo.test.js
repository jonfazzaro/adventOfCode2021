const bingo = require("./bingo");

describe("The bingo game", () => {
  it("given no boards, returns null", () => {
    expect(bingo()).toBeNull();
  });

  it('given one board and no drawings, returns null', () => {
      expect(bingo(`
      
       1  2  3  4  5 
       6  7  8  9 10 
      11 12 13 14 15
      16 17 18 19 20
      21 22 23 24 25
      `)).toBeNull();
  });
});
