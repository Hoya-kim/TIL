/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const disappeared = new Set(Array.from({ length: nums.length }, (_, i) => i + 1));
  const set = new Set(nums);
  for (const x of set) {
    disappeared.delete(x);
  }
  return [...disappeared];
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]));
console.log(findDisappearedNumbers([1, 1]));
