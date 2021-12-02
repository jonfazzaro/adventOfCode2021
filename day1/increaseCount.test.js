const increaseCount = require("./increaseCount");

describe("The increase counter", () => {
  expectCount(0, []);
  expectCount(0, [12]);
  expectCount(1, [12, 13]);
  expectCount(1, [12, 13, 13]);
  expectCount(2, [12, 13, 14]);
  expectCount(3, [12, 13, 14, 3, 6, 6]);

  expectCount(3, [1, 2, 3, 4, 1, 5, 6, 0], 3);
  expectCount(5, [1, 2, 3, 4, 3, 5, 6, 4], 3);

  function expectCount(count, sequence, window) {
    it(`given ${JSON.stringify(sequence)} and a window of ${window || 1}, counts ${count} increases`, () => {
      expect(increaseCount(sequence, window)).toEqual(count);
    });
  }
});
