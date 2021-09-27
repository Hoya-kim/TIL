// 플루이드 와샬
function solution(n, results) {
  const dist = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

  for (let i = 1; i <= n; i++) dist[i][i] = 0;
  for (let [a, b] of results) {
    dist[a][b] = 1;
  }

  for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        if (dist[i][k] && dist[k][j]) {
          // 거쳐 가는 경로가 있을
          dist[i][j] = 1;
        }
      }
    }
  }

  let answer = 0;
  for (let i = 1; i <= n; i++) {
    let cnt = 0;
    for (let j = 1; j <= n; j++) {
      // 승패 합산
      if (dist[i][j] || dist[j][i]) cnt += 1;
    }
    if (cnt === n - 1) answer += 1;
  }
  return answer;
}

console.log(
  solution(5, [
    [4, 3],
    [4, 2],
    [3, 2],
    [1, 2],
    [2, 5],
  ])
); // 2
