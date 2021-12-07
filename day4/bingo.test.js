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

  it.only("given three boards and a winning column, returns the winning board", () => {
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
    expect(winner.score).toEqual(4680);
  });

  it('matches the example case', () => {
    const winner = bingo(`7,4,9,5,11,17,23,2,0,14,21,24,10,16,13,6,15,25,12,22,18,20,8,19,3,26,1

    22 13 17 11  0
     8  2 23  4 24
    21  9 14 16  7
     6 10  3 18  5
     1 12 20 15 19
    
     3 15  0  2 22
     9 18 13 17  5
    19  8  7 25 23
    20 11 10 24  4
    14 21 16 12  6
    
    14 21 17 24  4
    10 16 15  9 19
    18  8 23 26 20
    22 11 13  6  5
     2  0 12  3  7`);
    
    expect(winner.index).toEqual(2);
    expect(winner.score).toEqual(4512);
  });

});
