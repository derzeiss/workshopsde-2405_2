/** 04 Arrow Functions and reduce */
function task4() {
  function doubleAndSquareAndSum(nums) {
    return nums
      .map((n) => n * 2)
      .map((n) => n ** 2)
      .reduce((sum, n) => sum + n, 0);
  }
  // Readability vs. Performance

  const doubleAndSquareAndSumOneLine = (nums) =>
    nums.reduce((sum, n) => sum + Math.pow(n * 2, 2), 0);

  const nums = [2, 4, 5];
  console.log(doubleAndSquareAndSum(nums));
  console.log(doubleAndSquareAndSumOneLine(nums));
}
