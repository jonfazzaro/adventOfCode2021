module.exports = { gamma, epsilon, oxygen, co2 };

function oxygen(data) {
  const readings = toArray(data);
  const filtered = range(width(readings)).reduce((result, i) => {
    if (result.length == 1) return result;
    return result.filter((r) => r[i] == median(slice(result, i)));
  }, readings);

  return toDecimal(filtered[0]);
}

function co2(data) {
  const readings = toArray(data);
  const filtered = range(width(readings)).reduce((result, i) => {
    if (result.length == 1) return result;
    return result.filter((r) => r[i] == flip(mostCommonValue(result, i)));
  }, readings);

  return toDecimal(filtered[0]);
}

function mostCommonValue(readings, digit) {
    return median(slice(readings, digit));
}

function leastCommonValue(readings, digit) {
    return flip(mostCommonValue(readings, digit));
}

function epsilon(data = `0`) {
  return toDecimal(invert(mode(toArray(data))));
}

function gamma(data = `0`) {
  return toDecimal(mode(toArray(data)));
}

function mode(readings) {
  return range(width(readings)).reduce((result, i) => {
    return result + median(slice(readings, i));
  }, "");
}

function width(readings) {
  return readings[0].trim().length;
}

function slice(values, index) {
  return values.map((r) => r.split("")[index]);
}

function invert(binary) {
  return binary.split("").map(flip).join("");
}

function flip(bit) {
  return bit.trim() === "0" ? "1" : "0";
}

function toArray(data) {
  return data.split("\n").map((s) => s.trim());
}

function toDecimal(value) {
  return parseInt(value.trim(), 2);
}

function median(values) {
  values.sort((a, b) => {
    return toDecimal(a) - toDecimal(b);
  });
  return middle(values);
}

function middle(value) {
  return value[Math.floor(value.length / 2)];
}

function range(size) {
  return [...Array(size).keys()];
}
