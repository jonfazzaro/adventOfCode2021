module.exports = function power(data = '') {
  const bits = data.split('\n')
  bits.sort();
  const mode = middle(bits);

  return toDecimal(mode);
};

function toDecimal(value) {
    return parseInt(value.trim() || '0', 2);
}

function middle(value) {
    return value[Math.floor(value.length/2)];
}

function mode(values) {
    values.sort();
    return middle(values); 
}
