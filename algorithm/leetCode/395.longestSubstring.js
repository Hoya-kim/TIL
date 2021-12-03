/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
  if (k === 1) return s.length;

  let maxUnique = new Set(s).size;
  let maxLen = 0;

  for (let i = 1; i < maxUnique; i++) {
    const freq = new Map();
    let lt = 0;
    let cur = 0;
    let countAtLeastK = 0;

    for (let rt = 0; rt < s.length; rt++) {
      freq.set(s[rt], freq.get(s[rt]) + 1 || 1);
      freq.get(s[rt]) === k && countAtLeastK++;
      freq.get(s[rt]) === 1 && cur++;

      while (cur > i) {
        freq.get(s[lt]) === k && countAtLeastK--;
        freq.set(s[lt], freq.get(s[lt]) - 1);
        !freq.get(s[lt]) && cur--;
        lt++;
      }
      if (cur === countAtLeastK) {
        maxLen = Math.max(maxLen, rt - lt + 1);
      }
    }
  }

  return maxLen;
};

console.log(longestSubstring('aaabb', 3));
console.log(longestSubstring('ababbc', 2));
