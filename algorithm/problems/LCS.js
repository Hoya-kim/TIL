// 최대 공통 부분 문자열(LCS)
// 두 문자열 공통의 부분 문자열 중에 가장 긴 것을 의미
// 두 문자열이 주어지면 두 문자열의 LCS의 길이를 출력
const solution = (s1, s2) => {
  s1 = ' ' + s1;
  s2 = ' ' + s2;
  const n = s1.length;
  const m = s2.length;
  // dy[i][j]: s1[0~i] s2[0~j]의 최대 공통 부분 문자열의 길이
  const dy = Array.from({ length: n }, () => Array(m).fill(0));
  for (let i = 1; i < n; i++) {
    for (let j = 1; j < m; j++) {
      if (s1[i] === s2[j]) {
        // 두 문자가 같으면 대각위의 LCS길이 + 1
        dy[i][j] = dy[i - 1][j - 1] + 1;
      } else {
        // 다르면 전 LCS 중에 긴 문자의 길이
        dy[i][j] = Math.max(dy[i - 1][j], dy[i][j - 1]);
      }
    }
  }
  return dy[n - 1][m - 1];
};

console.log(solution('acbehf', 'abefc'));
