module.exports = function power(data = '') {
  const bits = data.split('\n')
  bits.sort();
  const mode = bits[Math.floor(bits.length/2)];

  return toDecimal(mode);
};

function toDecimal(value) {
    return parseInt(value.trim() || '0', 2);
}
