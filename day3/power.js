module.exports = {gamma, epsilon}

function epsilon(data = `0`){
    return toDecimal(data);
}

function gamma(data = `0`) {
  return toDecimal(mode(data.split(`\n`)));
};

function toDecimal(value) {
    return parseInt(value.trim(), 2);
}

function mode(values) {
    values.sort();
    return middle(values); 
}

function middle(value) {
    return value[Math.floor(value.length/2)];
}