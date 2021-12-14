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
  return polymer
    .split("")
    .map(toPairs)
    .filter(outFalsies)
    .map(inserted(lookup))
    .join("");
}

function inserted(lookup) {
  return (pair, index) => {
    // let result = lookup[pair] + pair[1];
    // if (index === 0) result = splice(pair.split(""), 1, lookup[pair]).join("");


    // return result;
    return (index === 0 ? pair[0] : "")
         + lookup[pair]
         + pair[1];
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
  if (!isLast(index, list)) {
    const pair = element + list[index + 1];
    return pair;
  }
}

function outFalsies(e) {
  return !!e;
}

function splice(array, index, item) {
  const cloned = [...array];
  cloned.splice(index, 0, item);
  return cloned;
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
