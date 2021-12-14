const {formula,differential} = require('./polymer');

describe("The polymer inserter", () => {
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

  it.only('given two pairs and a key, inserts according to the key', () => {
    expect(formula("NNCB", key)).toEqual("NCNBCHB");
  });

  it('applies formula insertion multiple times', () => {
      expect(formula("NNCB", key, 6)).toEqual("NBBNBNBBCCNBCNCCNBBNBBNBBBNBBNBBCBHCBHHNHCBBCBHCB")
  });

  it('computes the differential of a polymer', () => {
      expect(differential("NBBBCNCCNBBNBNBBCHBHHBCHB")).toEqual(11-4);
  });
});
