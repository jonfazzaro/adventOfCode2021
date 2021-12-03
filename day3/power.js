module.exports = {gamma, epsilon}

function epsilon(data = `0`){
    const most = median(data.split(`\n`));
    console.log(most)
    return most.trim() === '0' ? 1 : 0;
}

function gamma(data = `0`) {
  return toDecimal(median(data.split(`\n`)));
};

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