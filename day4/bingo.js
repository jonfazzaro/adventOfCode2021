module.exports = function bingo(input) {
    if (!!drawings(input))
        return { 
            board: 1
        }
    return null;
}

function drawings(input) {
    const result = (input || '').split('\n')[0]; 
    console.log(result);
    return result;
}