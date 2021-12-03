module.exports = {gamma, epsilon}

function epsilon(data = `0`){
    const g = median(toArray(data));
    console.log(g);
    console.log(gamma(data));
    console.log(invert(g));
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
    values.sort((a,b) => {
        return toDecimal(a) - toDecimal(b);
    });
    console.log(values);
    return middle(values); 
}

function middle(value) {
    return value[Math.floor(value.length/2)];
}