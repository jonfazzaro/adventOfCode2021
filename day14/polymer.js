module.exports = { formula, differential };

function differential(input) {
  const grouped = breakdown(input);
  const values = Object.values(grouped);

  return Math.max(...values) - Math.min(...values);
}

function formula(polymer, key, depth = 1) {
  const lookup = toLookup(key);

  // return range(depth).reduce((f, i) => {
  //   console.log("Iteration: " + i);
  //   return iterate(f, lookup);
  // }, polymer);

  let result = polymer;
  for (let i = 0; i < depth; i++) {
    result = iterate(result, lookup);
  }
  return result;
}

function iterate(polymer, lookup) {
  // const chars = polymer.split("");
  // const pairs = [];
  // for (let i = 0; i < chars.length-1; i++) {
  //   pairs.push(chars.slice(i, i+2).join(""));
  // }
  return polymer
    .split("")
    .map(toPairs)
    .filter(outFalsies)
    .map(inserted(lookup))
    .join("");
}

function inserted(lookup) {
  return (pair, index) => {
    return (index === 0 ? pair[0] : "") + lookup[pair] + pair[1];
  };
}

function toLookup(key) {
  return key
    .split("\n")
    .map(line => line.split("->").map(e => e.trim()))
    .reduce((o, e) => {
      o[e[0]] = e[1];
      return o;
    }, {});
}

function toPairs(element, index, list) {
  if (index >= list.length - 1) return null;
  return list
    .slice(index, index + 2)
    .join(""); 
}

function outFalsies(e) {
  return !!e;
}

function breakdown(input) {
  return input.split("").reduce((counts, c) => {
    if (c in counts) counts[c]++;
    else counts[c] = 1;
    return counts;
  }, {});
}

function isLast(index, array) {
  return index === array.length - 1;
}

function range(size) {
  return [...Array(size).keys()];
}
