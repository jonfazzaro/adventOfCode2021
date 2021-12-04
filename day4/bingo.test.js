const bingo = require("./bingo");

describe("The bingo game", () => {
  it("given no boards, returns null", () => {
    expect(bingo()).toBeNull();
  });

  it.only("given one board and no drawings, returns null", () => {
    expect(
      bingo(`
      
       1  2  3  4  5 
       6  7  8  9 10 
      11 12 13 14 15
      16 17 18 19 20
      21 22 23 24 25
      `)
    ).toEqual([])
  });

  it("given two boards and winning drawings, returns the winning board", () => {
    expect(
      bingo(`  1,5,4,3,2 
    
     1  2  8  4  5 
     6  7  8  9 10 
    11 12 13 14 15
    16 17 18 19 20
    21 22 23 24 25

    1  2  3  4  5 
    6  7  8  9 10 
   11 12 13 14 15
   16 17 18 19 20
   21 22 23 24 25
    `)
    ).toEqual({
      board: 1,
    });
  });

  it("given three boards and winning drawings, returns the winning board", () => {
    expect(
      bingo(`  1,5,4,3,2 
    
     1  2  8  4  5 
     6  7  8  9 10 
    11 12 13 14 15
    16 17 18 19 20
    21 22 23 24 25

    1  2  12  4  5 
    6  7  8  9 10 
   11 12 13 14 15
   16 17 18 19 20
   21 22 23 24 25

    1  2  3  4  5 
    6  7  8  9 10 
   11 12 13 14 15
   16 17 18 19 20
   21 22 23 24 25
    `)
    ).toEqual({
      board: 2,
    });
  });
});
