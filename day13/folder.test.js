describe("The grid parser", () => {
    describe("given empty", () => {
      it("returns empty", () => {
        expect(parse(``)).toEqual([]);
      });
    });
});

function parse() {
    return [];
}
