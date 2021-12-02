const navigate = require("./navigate");

describe("The navigate function", () => {
  describe("given a zero location", () => {
      let zero;
      beforeEach(() => {
          zero = navigate();
      });

    it("moves forward", () => {
      expect(navigate(zero, "forward 1"))
        .toEqual({position: 1, depth:0});
    });

    it("moves down", () => {
      expect(navigate(zero, "down 1"))
        .toEqual({position: 0, depth:1});
    });

    it("moves down more", () => {
      expect(navigate(zero, "down 3"))
        .toEqual({position: 0, depth:3});
    });

    it("moves forward more", () => {
      expect(navigate(zero, "forward 5"))
        .toEqual({position: 5, depth:0});
    });

    xit('moves both ways', () => {
      expect(navigate(zero, "forward 6\ndown 2"))
        .toEqual({position: 6, depth:2});
    });

  });
});
