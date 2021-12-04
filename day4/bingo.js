module.exports = function bingo(input) {
    if (!!drawings(input))
        return { 
            board: 1
        }
    return null;
}

function drawings(input) {
    return (input || '').split('\n')[0]; 
}