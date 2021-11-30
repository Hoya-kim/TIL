/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const sH = new Map();
  for (const x of s) {
    sH.set(x, sH.get(x) + 1 || 1);
  }
  const char = [...sH].filter(([key, value]) => value === 1)[0];
  return char === undefined ? -1 : s.indexOf(char[0]);
};

console.log(firstUniqChar('leetcode'));
console.log(firstUniqChar('loveleetcode'));
console.log(firstUniqChar('aabb'));
