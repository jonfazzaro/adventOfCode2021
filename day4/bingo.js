module.exports = function bingo(input) {
    const numbers = drawings(input);
    console.log(numbers);
    if (!!numbers.length)
        return { 
            board: 1
        }
    return null;
}

function drawings(input) {
    if (!input)
        return [];
    return input 
        .split('\n')[0].trim()
        .split(',')
        .map(s => s.trim())
        .filter(s => !!s); 
}