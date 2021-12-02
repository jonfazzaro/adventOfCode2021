const navigate = require("./navigate");

describe("The navigate function", () => {
  describe("given a zero location", () => {
    let zero;
    beforeEach(() => {
      zero = navigate();
    });

    it("moves forward", () => {
      expect(navigate(zero, "forward 1")).toEqual({ position: 1, depth: 0 });
    });

    it("ignores an up move", () => {
      expect(navigate(zero, "up 1")).toEqual(zero);
    });

    it("moves down", () => {
      expect(navigate(zero, "down 1")).toEqual({ position: 0, depth: 1 });
    });

    it("moves down more", () => {
      expect(navigate(zero, "down 3")).toEqual({ position: 0, depth: 3 });
    });

    it("moves forward more", () => {
      expect(navigate(zero, "forward 5")).toEqual({ position: 5, depth: 0 });
    });

    it("moves both ways", () => {
      expect(navigate(zero, "forward 6\ndown 2")).toEqual({
        position: 6,
        depth: 2,
      });
    });
  });

  describe("given a non-zero location", () => {
    it("moves up", () => {
      expect(navigate({ position: 5, depth: 9 }, "up 4")).toEqual({
        position: 5,
        depth: 5,
      });
    });
  });

  describe("given multiple instructions", () => {
    it("blank lines do not cause error", () => {
      expect(
        navigate(
          navigate(),
          `
      forward 9
      down 13

      up 9

      `
        )
      ).toEqual({ position: 9, depth: 4 });
    });

    it('increases the aim as we go deeper', () => {
      expect(navigate(navigate(), `
      forward 3
      down 12
      forward 5
      `)).toEqual({ position: 8, depth: 72 })
    });
  });
});
