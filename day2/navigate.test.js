const { navigate, navigateWithAim } = require("./navigate");

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

    describe("when aiming", () => {
      it("adjusts the aim as we go down or up", () => {
        const instructions = `
          forward 3
          down 12
          up 6
          forward 5
          `;
        const result = navigateWithAim(navigate(), instructions);
        expect(result.position).toEqual(8);
        expect(result.depth).toEqual(30);
      });

      it("checks out with the sample problem", () => {
        const instructions = `forward 5
          down 5
          forward 8
          up 3
          down 8
          forward 2`;
        const result = navigateWithAim(navigate(), instructions);
        expect(result.position).toEqual(15);
        expect(result.depth).toEqual(60);
      });
    });

    console.log(navigateWithAim(navigate(), `
    forward 7
forward 9
forward 3
down 5
down 9
forward 6
down 2
forward 2
forward 8
forward 3
forward 5
forward 5
forward 8
down 6
forward 8
forward 2
up 8
down 8
forward 6
down 4
down 5
forward 2
down 6
forward 7
down 9
forward 9
down 2
down 7
up 6
up 3
up 7
down 9
forward 1
forward 1
down 4
down 9
forward 4
up 4
forward 8
forward 9
down 7
down 4
up 6
down 8
down 2
forward 8
forward 6
down 3
forward 2
forward 6
down 3
forward 1
forward 8
down 8
down 9
forward 5
forward 4
forward 8
down 7
forward 4
forward 3
forward 6
down 3
forward 6
forward 6
down 9
down 9
down 9
down 2
down 7
down 4
forward 3
up 7
up 3
down 1
forward 4
up 9
forward 4
forward 2
down 2
forward 9
up 4
forward 5
down 8
up 7
down 5
down 1
up 7
up 4
forward 5
up 8
up 3
down 2
down 1
down 2
forward 3
up 1
forward 1
forward 1
down 1
down 6
down 6
up 4
down 4
down 4
forward 6
down 6
forward 7
forward 5
up 7
down 9
down 6
forward 5
forward 6
forward 2
down 4
forward 5
forward 8
down 8
down 6
forward 2
forward 8
down 3
forward 6
down 1
forward 5
down 8
up 1
forward 6
down 7
forward 4
down 8
down 8
forward 8
down 6
down 3
forward 2
forward 8
forward 9
forward 4
forward 3
down 4
forward 3
down 9
down 1
forward 2
forward 3
forward 7
down 1
forward 6
forward 8
forward 6
forward 2
down 8
up 9
forward 6
forward 8
down 7
down 5
up 4
forward 9
up 7
up 3
forward 3
down 6
forward 4
forward 2
down 3
forward 9
forward 5
up 7
down 9
up 4
down 3
forward 8
up 1
forward 2
forward 8
forward 8
forward 5
down 7
up 6
down 9
down 4
forward 2
down 5
down 2
down 2
forward 6
down 2
forward 9
forward 1
up 1
forward 4
down 1
forward 3
down 3
forward 4
up 5
up 3
forward 6
forward 8
forward 2
forward 6
up 5
down 9
down 8
forward 3
down 5
forward 8
forward 1
down 9
up 3
down 2
down 9
up 8
down 2
up 7
up 2
up 3
down 9
down 1
down 7
down 1
forward 1
down 9
down 6
forward 3
up 7
up 8
down 5
down 6
up 2
forward 8
down 4
up 1
forward 4
up 4
forward 2
down 4
forward 4
down 9
up 4
forward 8
up 7
forward 1
down 3
up 7
forward 5
down 5
forward 2
forward 7
forward 3
down 8
forward 4
forward 9
up 2
down 4
down 5
forward 4
down 4
up 6
down 8
up 1
down 1
up 6
up 6
down 7
down 7
forward 2
forward 4
forward 8
down 8
down 4
down 4
down 7
forward 4
down 3
forward 5
forward 5
forward 7
down 7
forward 1
down 8
up 4
up 9
up 3
up 6
forward 5
forward 5
forward 4
forward 9
down 9
forward 4
forward 1
up 8
up 2
down 9
up 4
forward 2
up 8
forward 6
forward 2
up 9
down 3
forward 3
up 7
down 7
forward 4
forward 7
forward 3
down 4
down 5
forward 7
up 3
up 1
down 4
forward 6
down 1
forward 1
down 4
down 3
forward 9
forward 4
down 9
down 3
forward 2
forward 5
forward 6
down 3
forward 5
down 9
forward 2
forward 9
down 7
down 4
down 3
down 1
up 2
forward 6
forward 4
down 9
down 2
forward 2
forward 9
down 3
forward 8
down 8
forward 5
down 4
forward 4
up 6
up 3
down 3
down 9
forward 5
forward 8
down 2
forward 9
forward 5
up 9
forward 2
forward 3
forward 4
up 8
up 1
up 6
down 5
down 8
down 4
forward 6
up 2
forward 1
forward 7
up 8
forward 5
up 9
forward 7
down 6
up 5
up 7
up 1
down 3
up 6
forward 1
up 1
forward 2
forward 4
forward 5
up 3
up 8
up 1
up 6
up 3
down 5
down 4
up 8
down 9
up 7
down 6
down 9
forward 5
forward 3
down 9
down 3
down 6
up 3
up 8
down 4
down 1
up 9
up 9
forward 8
down 7
forward 1
forward 4
down 8
forward 2
down 4
forward 7
forward 3
forward 5
forward 1
up 2
down 9
down 5
up 6
down 3
forward 1
up 9
forward 6
forward 1
forward 4
up 7
forward 6
down 1
forward 9
forward 1
forward 3
down 9
down 8
down 5
forward 4
down 7
up 1
forward 8
up 4
forward 6
down 2
forward 4
forward 7
down 8
forward 6
down 7
forward 7
up 7
forward 4
down 8
down 8
forward 8
forward 6
down 9
down 8
down 6
down 2
down 4
forward 7
forward 3
down 8
down 5
forward 2
down 9
down 7
up 1
up 5
forward 6
up 8
up 7
up 4
down 6
down 6
down 8
down 9
down 2
forward 6
forward 6
forward 2
up 9
forward 6
forward 9
forward 8
down 5
down 3
forward 1
forward 8
forward 1
forward 3
down 4
forward 5
forward 1
forward 6
down 8
down 9
forward 3
forward 2
forward 1
forward 3
up 7
down 7
down 2
forward 3
down 5
down 2
down 7
down 9
down 5
down 7
down 9
up 7
forward 7
forward 9
forward 8
forward 5
down 1
up 6
up 6
forward 5
up 6
down 8
up 6
forward 2
down 9
down 5
up 8
up 7
down 8
down 7
up 3
down 5
forward 6
forward 2
down 6
forward 6
forward 1
forward 5
forward 3
down 4
forward 3
down 1
up 7
forward 3
forward 9
forward 3
forward 4
down 9
forward 6
down 1
up 6
forward 2
forward 1
down 2
down 1
down 9
forward 1
up 8
down 1
up 3
forward 3
forward 1
up 6
down 1
down 7
down 2
forward 5
down 4
forward 4
forward 9
down 7
forward 6
down 4
forward 8
down 5
forward 6
down 6
down 6
down 9
forward 3
forward 2
forward 7
forward 6
forward 8
up 6
forward 7
down 2
up 4
forward 6
forward 3
forward 9
down 1
forward 9
down 1
forward 6
down 9
forward 7
forward 9
forward 6
up 3
down 3
forward 3
up 1
down 8
forward 7
down 4
forward 7
forward 7
down 1
forward 5
down 6
forward 6
down 8
down 2
down 7
forward 9
forward 7
forward 2
down 5
forward 7
forward 8
forward 5
forward 5
up 1
down 1
up 4
forward 5
forward 8
down 4
up 8
forward 8
up 2
down 1
down 9
up 9
down 9
forward 3
forward 1
down 7
down 2
forward 5
up 7
forward 9
forward 1
down 4
down 8
down 2
up 1
up 6
forward 9
down 3
down 2
forward 5
forward 4
down 5
down 4
up 4
forward 4
down 3
up 3
down 7
down 7
forward 1
forward 4
forward 7
forward 5
down 4
down 7
forward 1
forward 9
down 4
forward 8
up 4
down 9
down 9
up 6
up 3
forward 2
forward 3
up 7
forward 7
down 4
forward 5
forward 5
up 2
down 5
down 9
forward 9
forward 7
forward 1
up 5
up 5
forward 8
forward 3
forward 2
down 4
down 6
down 2
forward 5
down 3
down 9
forward 8
forward 7
forward 7
down 1
up 3
down 8
down 9
forward 6
up 6
down 6
forward 2
forward 3
forward 7
up 8
down 8
down 7
forward 2
down 2
up 7
up 9
forward 1
forward 1
forward 1
forward 1
forward 1
up 8
down 3
up 8
down 5
down 3
up 4
forward 4
down 3
down 4
down 3
up 3
down 3
up 2
up 6
down 9
down 6
up 8
up 7
down 1
down 7
down 3
forward 3
forward 5
down 4
down 7
forward 1
forward 8
up 9
up 2
forward 3
up 1
forward 7
down 7
down 5
forward 9
up 9
forward 3
down 2
up 4
down 2
down 1
down 9
down 9
forward 3
forward 4
down 2
down 6
up 8
down 5
forward 7
forward 4
up 3
forward 2
down 4
down 8
forward 4
forward 6
forward 8
down 6
down 8
up 2
forward 5
up 7
down 9
down 6
forward 7
up 3
down 9
forward 2
down 6
up 6
down 6
down 3
down 2
down 8
down 4
forward 8
up 7
forward 9
forward 4
down 3
forward 3
down 9
down 2
forward 2
forward 1
down 4
down 3
down 8
up 6
down 4
forward 3
down 7
forward 8
down 7
forward 6
forward 2
forward 7
forward 6
forward 4
up 4
forward 2
down 4
down 2
forward 3
down 2
up 9
down 6
forward 5
up 6
forward 1
up 1
down 3
up 4
forward 1
down 6
forward 9
up 2
forward 4
up 9
up 5
down 5
forward 3
down 9
forward 5
down 3
forward 7
forward 5
forward 9
up 5
down 4
down 2
forward 9
down 3
down 8
down 9
forward 2
down 8
up 6
down 4
down 2
up 9
forward 8
forward 8
down 8
forward 4
down 7
forward 2
up 7
forward 7
down 4
forward 4
down 3
forward 9
down 9
forward 6
down 5
down 9
up 5
forward 7
forward 2
down 3
down 7
down 2
forward 3
down 4
up 3
down 1
forward 9
down 4
down 8
up 9
forward 7
down 8
forward 9
down 2
up 2
down 1
down 1
forward 6
forward 2
forward 3
down 5
down 1
down 1
up 4
forward 8
down 3
down 1
forward 9
forward 7
forward 2
up 8
up 6
down 7
down 6
forward 3
down 2
down 9
up 7
forward 5
up 9
down 9
down 4
down 8
down 5
down 8
down 8
forward 6
forward 1
forward 4
forward 7
down 7
down 6
forward 4
forward 7
forward 6
down 7
forward 4
forward 9
up 3
forward 9
forward 5
forward 1
up 2
down 1
down 5
forward 9
up 4
forward 6
up 3
up 6
forward 8
down 6
forward 5
down 3
forward 2
forward 7
down 4
up 8
forward 6
up 7
up 9
forward 3
down 3
down 7
down 7
down 1
down 6
down 9
up 1
forward 6
forward 6
down 3
forward 7
down 8
forward 1
down 7
down 4
down 3
down 4
down 4
forward 7
down 3
forward 6
up 9
forward 3
    `))
  });
});
