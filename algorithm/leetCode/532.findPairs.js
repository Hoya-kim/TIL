// 567ms
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
  let temp = {};
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (Math.abs(nums[i] - nums[j]) === k) {
        if (temp[nums[i]] === undefined) temp[nums[i]] = new Set();
        if (temp[nums[j]] === undefined) temp[nums[j]] = new Set();
        temp[nums[i]].add(nums[j]);
        temp[nums[j]].add(nums[i]);
      }
    }
  }
  const answer = Object.values(temp).reduce((acc, cur) => acc + cur.size, 0);
  return k === 0 ? answer : answer / 2;
};

// 117ms
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function (nums, k) {
  var answer = 0;
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    map.set(nums[i], (map.get(nums[i]) || 0) + 1);
  }

  map.forEach((value, key) => {
    if (k === 0) {
      if (value > 1) answer += 1;
    } else {
      if (map.has(key + k)) answer += 1;
    }
  });
  return answer;
};

console.log(findPairs([3, 1, 4, 1, 5], 2)); // 2
console.log(findPairs([1, 2, 3, 4, 5], 1)); // 4
console.log(findPairs([1, 3, 1, 5, 4], 0)); // 1
console.log(findPairs([1, 2, 4, 4, 3, 3, 0, 9, 2, 3], 3)); // 2
console.log(findPairs([-1, -2, -3], 1)); // 2
