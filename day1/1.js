module.exports = function increaseCount(sequence, window){
    window = window || 1;
    return sequence
        .filter((n, i) => window <= i && sequence[i-window] < n)
        .length;
}