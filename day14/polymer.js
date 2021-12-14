module.exports = function formula(polymer, key) {
  const lookup = toLookup(key);

  return polymer
    .split("")
    .map(toPairs)
    .filter(outFalsies)
    .map(inserted)
    .join("");

  function inserted(pair, index, list) {
      if (index === 0 || index === list.length - 1)
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
  if (index < list.length - 1) {
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
