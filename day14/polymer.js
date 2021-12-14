module.exports = {formula, mode, antimode}

function antimode(input) {
    const grouped = breakdown(input);
    console.log(grouped)
    return Object.keys(grouped)
        .reduce((a, b) => grouped[a] < grouped[b] ? a : b);
}

function mode(input) {
    const grouped = breakdown(input);
    console.log(grouped)
    return Object.keys(grouped)
        .reduce((a, b) => grouped[a] > grouped[b] ? a : b);
}

function formula(polymer, key) {
  const lookup = toLookup(key);

  return polymer
    .split("")
    .map(toPairs)
    .filter(outFalsies)
    .map(inserted)
    .join("");

  function inserted(pair, index, list) {
    if (index === 0 || isLast(index, list)) 
      return splice(pair.split(""), 1, lookup[pair]).join("");

    return lookup[pair];
  }
};

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
return input.split("").reduce((counts, c) =>{
    if (c in counts)
        counts[c]++;
    else
        counts[c] = 1;
    return counts;
}, {});
}

function isLast(index, array) {
    return index === array.length - 1;
}