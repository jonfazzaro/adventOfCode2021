module.exports = {gamma, epsilon}

function epsilon(data = `0`){
    const g = median(toArray(data));
    return toDecimal(invert(g));
}

function gamma(data = `0`) {

    const readings = toArray(data);
    let result = '';
    for(let i = 0; i < readings[0].length; i++){
result += median(slice(readings, i));
    }

  return toDecimal(result);
};

function slice(values, index) {
    return values.map(r => r.split('')[index]);
}

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