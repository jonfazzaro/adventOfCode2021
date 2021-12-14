const formula = require('./polymer');

describe("The polymer inserter", () => {
  it('given two pairs and a key, inserts according to the key', () => {
      const key = `CH -> B
      HH -> N
      CB -> H
      NH -> C
      HB -> C
      HC -> B
      HN -> C
      NN -> C
      BH -> H
      NC -> B
      NB -> B
      BN -> B
      BB -> N
      BC -> B
      CC -> N
      CN -> C`;
    expect(formula("NNCB", key)).toEqual("NCNBCHB");
  });
});
