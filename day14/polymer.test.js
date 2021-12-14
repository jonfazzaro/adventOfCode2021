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

  it('given two pairs and a key, inserts according to the key', () => {
    expect(formula("NNCB", key)).toEqual("NCNBCHB");
  });

  it('given two pairs and a key, inserts according to the key', () => {
    expect(formula("NCNBCHB", key)).toEqual("NBCCNBBBCBHCB");
  });

  it('applies formula insertion multiple times', () => {
      expect(formula("NNCB", key, 4)).toEqual("NBBNBNBBCCNBCNCCNBBNBBNBBBNBBNBBCBHCBHHNHCBBCBHCB")
  });

  it('computes the differential of a polymer', () => {
      expect(differential("NBBBCNCCNBBNBNBBCHBHHBCHB")).toEqual(11-4);
  });
  
  it.only('computes the differential of a massive polymer', () => {
    let polymer = formula("NNCB", key, 30);
    // console.log("Calculating differential...")
    // const result = differential(polymer);
      // expect(result).toEqual(2188189693529);
      // FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory
  });


});

const key = `HK -> C
SP -> H
VH -> K
KS -> B
BC -> S
PS -> K
PN -> S
NC -> F
CV -> B
SH -> K
SK -> H
KK -> O
HO -> V
HP -> C
HB -> S
NB -> N
HC -> K
SB -> O
SN -> C
BP -> H
FC -> V
CF -> C
FB -> F
VP -> S
PO -> N
HN -> N
BS -> O
NF -> H
BH -> O
NK -> B
KC -> B
OS -> S
BB -> S
SV -> K
CH -> B
OB -> K
FV -> B
CP -> V
FP -> C
VC -> K
FS -> S
SS -> F
VK -> C
SF -> B
VS -> B
CC -> P
SC -> S
HS -> K
CN -> C
BN -> N
BK -> B
FN -> H
OK -> S
FO -> S
VB -> C
FH -> S
KN -> K
CK -> B
KV -> P
NP -> P
CB -> N
KB -> C
FK -> K
BO -> O
OV -> B
OC -> B
NO -> F
VF -> V
VO -> B
FF -> K
PP -> O
VV -> K
PC -> N
OF -> S
PV -> P
PB -> C
KO -> V
BF -> N
OO -> K
NV -> P
PK -> V
BV -> C
HH -> K
PH -> S
OH -> B
HF -> S
NH -> H
NN -> K
KF -> H
ON -> N
PF -> H
CS -> H
CO -> O
SO -> K
HV -> N
NS -> N
KP -> S
OP -> N
KH -> P
VN -> H`;

// console.log(differential(formula("SHPPPVOFPBFCHHBKBNCV", key, 10)));

