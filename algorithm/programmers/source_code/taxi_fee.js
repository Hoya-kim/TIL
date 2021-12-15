function solution(n, s, a, b, fares) {
  let answer = Number.MAX_SAFE_INTEGER;
  const dist = Array.from({ length: n + 1 }, () => Array(n + 1).fill(Number.MAX_SAFE_INTEGER));

  for (let i = 1; i <= n; i++) dist[i][i] = 0;
  for (let [a, b, c] of fares) {
    dist[a][b] = c;
    dist[b][a] = c;
  }
  for (let k = 1; k <= n; k++) {
    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= n; j++) {
        dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
      }
    }
  }

  for (let i = 1; i <= n; i++) {
    answer = Math.min(answer, dist[s][i] + dist[i][a] + dist[i][b]);
  }
  return answer;
}

console.log(
  solution(6, 4, 6, 2, [
    [4, 1, 10],
    [3, 5, 24],
    [5, 6, 2],
    [3, 1, 41],
    [5, 1, 24],
    [4, 6, 50],
    [2, 4, 66],
    [2, 3, 22],
    [1, 6, 25],
  ])
); //82

// 7	3	4	1	[[5, 7, 9], [4, 6, 4], [3, 6, 1], [3, 2, 3], [2, 1, 6]]	 -> 14
// 6	4	5	6	[[2,6,6], [6,3,7], [4,6,7], [6,5,11], [2,5,12], [5,3,20], [2,4,8], [4,3,9]]	 -> 18
