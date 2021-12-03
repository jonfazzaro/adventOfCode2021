module.exports = {gamma, epsilon}

function epsilon(data = `0`){
    const g = median(toArray(data));
    return toDecimal(invert(g));
}

function gamma(data = `0`) {
  return toDecimal(median(toArray(data)));
};

function invert(binary) {
    return binary.split('').map(flip).join('');
    
    function flip(bit) {
        return bit.trim() === '0' ? '1' : '0';
    }
}

function toArray(data) {
    return data.split('\n').map(s => s.trim());
}

function toDecimal(value) {
    return parseInt(value.trim(), 2);
}

function median(values) {
    values.sort();
    return middle(values); 
}

function middle(value) {
    return value[Math.floor(value.length/2)];
}