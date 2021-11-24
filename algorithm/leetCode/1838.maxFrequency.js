// 1838. Frequency of the Most Frequent Element
// https://leetcode.com/problems/frequency-of-the-most-frequent-element/

// Two Pointers
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function (nums, k) {
  let answer = Number.MIN_SAFE_INTEGER;
  nums.sort((a, b) => a - b);
  let lt = 0;
  let sum = 0;
  for (let rt = 0; rt < nums.length; rt++) {
    sum += nums[rt];
    while (nums[rt] * (rt - lt + 1) > sum + k) sum -= nums[lt++];
    answer = Math.max(answer, rt - lt + 1);
  }
  return answer;
};

console.log(solution([5, 7, 8, 2, 9, 6, 3], 10)); // 5
console.log(solution([-1, 1, 2, 4, 0, -2], 6)); // 4
