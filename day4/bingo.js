module.exports = function bingo(input) {
    const drawings = (input || '').split('\n')[0];
    if (!!drawings)
        return { 
            board: 0
        }
    return null;
}