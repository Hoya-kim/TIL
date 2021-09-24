# 20210924

## programmers - Level3

### 여행경로

- [문제링크](https://programmers.co.kr/learn/courses/30/lessons/43164)

- [소스코드](./source_code/travel_route.js)

<br>

#### 문제개요

> DFS 문제

- 출발지와 도착지가 담긴 배열들의 리스트가 주어짐
- 출발지 'ICN'으로부터 도착지까지의 여행경로를 구해낸다.
- 가능한 경로가 2개 이상일 때, 알파벳 순서가 앞서는 경로를 반환.
- 모든 도시를 방문할 수 있는 리스트가 주어진다.

<br>

#### 입출력 예시

> tickets : [["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]]<br>
> return : ["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"]

<br>

#### 접근방법

- 출발지를 key로 갖고, 출발지와 연결된 도착지들을 배열 값으로 하는 객체를 만든다.
- 이때, 알파벳 순으로 정렬을 해둔다.
- 정렬을 해두면, 최초로 발견된 경로가 주어진 조건에 부합하는 정답경로.
- DFS간, 방문지를 체크할 객체도 필요

<br>

```js
// 필요 변수
const answer = []; // 정답 리스트
const routes = {}; // 시작점을 key로 하는 배열들을 저장할 객체
const check = {}; // 방문 확인
const tmp = ['ICN']; // 경로를 담아둘 임시 배열
```

<br>

```js
// 객체 초기화 및 정렬
tickets.forEach(([start, end]) => {
  // 객체 초기화
  if (!routes[start]) {
    routes[start] = [];
    check[start] = [];
  }
  routes[start].push(end);
  check[start].push(0);
});

Object.keys(routes).forEach(key => {
  // 정렬 후 DFS -> 첫 번째 경로가 정답
  routes[key].sort();
});
```

<br>

```js
const DFS = (n, cur) => {
  if (answer.length) return; // cut edge
  if (n === tickets.length + 1) {
    // 경로 완성 조건
    answer.push(tmp.slice());
    return;
  }
  // key값이 존재할 때 -> 종착지가 아닐 경우
  if (routes[cur]) {
    for (let i = 0; i < routes[cur].length; i++) {
      // 방문하지 않은 노드일 경우
      if (check[cur][i] === 0) {
        check[cur][i] = 1;
        tmp.push(routes[cur][i]);
        DFS(n + 1, routes[cur][i]);
        check[cur][i] = 0;
        tmp.pop();
      }
    }
  }
};
DFS(1, 'ICN');
```
