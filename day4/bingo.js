module.exports = function bingo(input) {
    if (!!drawings())
        return { 
            board: 0
        }
    return null;
}

function drawings(input) {
    return (input || '').split('\n')[0]; 
}