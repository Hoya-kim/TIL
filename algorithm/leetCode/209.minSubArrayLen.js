/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
  let min = Number.MAX_SAFE_INTEGER;
  let sum = 0;
  let lt = 0;
  for (let rt = 0; rt < nums.length; rt++) {
    sum += nums[rt];
    while (sum >= target) {
      min = Math.min(min, rt - lt + 1);
      sum -= nums[lt++];
    }
  }
  return min === Number.MAX_SAFE_INTEGER ? 0 : min;
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
console.log(minSubArrayLen(4, [1, 4, 4]));
console.log(minSubArrayLen(11, [1, 1, 1, 1, 1, 1, 1, 1]));
console.log(minSubArrayLen(11, [1, 2, 3, 4, 5]));
