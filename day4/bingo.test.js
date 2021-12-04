const bingo = require("./bingo");

describe("The bingo game", () => {
  it("exists", () => {
    bingo();
  });

  it("given no boards, returns null", () => {
    expect(bingo()).toBeNull();
  });
});
