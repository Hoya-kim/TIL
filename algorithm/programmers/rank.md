# 20210927

## programmers - Level3

### 순위

- [문제링크](https://programmers.co.kr/learn/courses/30/lessons/49191)

- [소스코드](./source_code/rank.js)

<br>

#### 문제개요

> 그래프 문제 - 플루이드 와샬

- n명의 경기 결과가 담긴 배열이 주어진다.
- `[{승리자}, {패배자}]`의 배열 형태로 담겨서 주어진다.
- 몇몇 경기의 결과가 누락되어 있다.
- 등 수를 확정적으로 매길 수 있는 선수의 수를 반환한다.

<br>

#### 입출력 예시

> n : 5
> results : [[4, 3], [4, 2], [3, 2], [1, 2], [2, 5]]

<br>

#### 접근방법

- 승리의 결과를 확정할 수 있다는 것은
- 특정 사람의 승리, 패배의 합이 n-1이 되면, 모든 경기의 결과를 알 수 있다는 것
- 플루이드 와샬을 이용하여, 이미 알고 있는 결과를 기반으로 거쳐서 알 수 있는 결과를 누적
- 최종 거쳐 갈 수 있는 경로(경기 결과)를 기반으로 승패의 수가 n-1인 선수의 경기 결과를 누적하여 반환

<br>

```js
// 경로를 저장할 2차원 배열
const dist = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
// 초기화
for (let i = 1; i <= n; i++) dist[i][i] = 0;
for (let [a, b] of results) {
  dist[a][b] = 1;
}
```

<br>

```js
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
```

<br>

```js
let answer = 0;
for (let i = 1; i <= n; i++) {
  let cnt = 0;
  for (let j = 1; j <= n; j++) {
    // 승패 합산
    if (dist[i][j] || dist[j][i]) cnt += 1;
  }
  if (cnt === n - 1) answer += 1;
}
```

> 다시 풀어보기, 처음에 접근 잘못함<br>
> BFS로 각 선수별 승리루트, 패배루트를 구해 더해서 n-1이 나오는 결과를 정답으로 체크하는 방법도 있음<br>
> 플루이드 와샬이 더 직관적인 풀이가 나오긴 함
