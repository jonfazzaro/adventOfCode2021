module.exports = function increaseCount(sequence){
    return sequence
        .filter((n, i) => sequence[i-1] < n)
        .length;
}