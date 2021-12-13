describe("The grid parser", () => {
  it("given empty, returns empty", () => {
    expect(parse(``)).toEqual([]);
  });

  it("given string input, returns coordinates", () => {
    const input = `0,0
                     1,1`;
    const result = parse(input);
    expect(result)
        .toEqual([[0, 0],[1, 1]]);
  });
});

function parse(input) {
  const lines = input.split("\n").map(s => s.trim()).filter(s=>!!s);
  return lines.map(line => ([ parseInt(line.split(",")[0]), parseInt(line.split(",")[1])]));
}
