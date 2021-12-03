module.exports = function power(data = '') {
  const bits = data.split('\n')
  bits.sort();
  const mode = bits[Math.floor(bits.length/2)];

  return parseInt(mode.trim() || '0', 2);
};

function toDecimal(value) {
    return parseInt(value.trim() || '0', 2);
}
