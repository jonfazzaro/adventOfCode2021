module.exports = function increaseCount(sequence, window = 1) {
  return sequence.filter(isIncreased).length;

  function isIncreased(n, i) {
    return window <= i 
        && sequence[i - window] < n;
  }
};
