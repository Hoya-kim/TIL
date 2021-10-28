/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (nums) {
  let diff = -1;
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < nums.length; i++) {
    if (min > nums[i]) min = nums[i];
    else if (diff < nums[i] - min) diff = nums[i] - min;
  }
  return diff === 0 ? -1 : diff;
};

console.log(maximumDifference([7, 1, 5, 4])); // 4
console.log(maximumDifference([9, 4, 3, 2])); // -1
console.log(maximumDifference([1, 5, 2, 10])); // 9
