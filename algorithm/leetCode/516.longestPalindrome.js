/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function (s) {
  const dy = Array.from({ length: s.length }, () => Array(s.length).fill(0));
  for (let i = 0; i < s.length; i++) {
    dy[i][i] = 1;
  }
  for (let i = 0; i < s.length - 1; i++) {
    dy[i][i + 1] = s[i] === s[i + 1] ? 2 : 1;
  }

  for (let k = 2; k < s.length; k++) {
    for (let i = 0; i < s.length - k; i++) {
      dy[i][i + k] =
        s[i] === s[i + k]
          ? dy[i + 1][i + k - 1] + 2
          : Math.max(dy[i + 1][i + k], dy[i][i + k - 1]);
    }
  }
  return dy[0][s.length - 1];
};

console.log(longestPalindromeSubseq('bbbab'));
console.log(longestPalindromeSubseq('cbbd'));
