module.exports = {gamma, epsilon}

function epsilon(){
    return 0;
}

function gamma(data = '') {
  return toDecimal(mode(data.split(`\n`)));
};

function toDecimal(value) {
    return parseInt(value.trim() || '0', 2);
}

function mode(values) {
    values.sort();
    return middle(values); 
}

function middle(value) {
    return value[Math.floor(value.length/2)];
}