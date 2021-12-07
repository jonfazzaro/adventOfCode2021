const bingo = require("./bingo");

describe("The bingo game", () => {
  it("given no boards, returns null", () => {
    expect(bingo()).toBeNull();
  });

  it("given one board and no drawings, returns null", () => {
    expect(
      bingo(`
      
       1  2  3  4  5 
       6  7  8  9 10 
      11 12 13 14 15
      16 17 18 19 20
      21 22 23 24 25
      `)
    ).toBeNull()
  });

  it("given two boards and winning drawings, returns the winning board", () => {
      const winner = bingo(`  1,5,4,8,2 
    
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
     `);

    expect(winner.index).toEqual(0);
    expect(winner.draw).toEqual("2");
  });

  it("given three boards and a winning row, returns the winning board", () => {
    const winner = bingo(`  23, 7, 1,5,19,20,  4,3,2 
    
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
    expect(winner.index).toEqual(2);
    expect(winner.draw).toEqual("2");
  });

  it("given three boards and a winning column, returns the winning board", () => {
    const winner = bingo(`  3,  8, 13, 23,  18
    
    1  2  9  4  5 
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
    expect(winner.index).toEqual(2);
    expect(winner.draw).toEqual("18");
  });

});
