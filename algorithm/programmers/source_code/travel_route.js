// First solution
function solution(tickets) {
  let answer = [];
  const routes = {};
  tickets.forEach(([start, end]) => {
    if (!routes[start]) routes[start] = [];
    routes[start].push(end);
  });
  Object.keys(routes).forEach(key => {
    routes[key].sort((a, b) => (a < b ? -1 : a == b ? 0 : 1));
  });

  const DFS = (n, cur, acc) => {
    if (n === tickets.length + 1) {
      answer.push(acc);
      return;
    }
    if (routes[cur]) {
      for (let i = 0; i < routes[cur].length; i++) {
        const copied = [...routes[cur]];
        const spliced = routes[cur].splice(i, 1);
        DFS(n + 1, spliced, [...acc, ...spliced]);
        routes[cur] = copied;
      }
    }
  };
  DFS(1, 'ICN', ['ICN']);
  return answer[0];
}

// Refactored solution
function solution(tickets) {
  const answer = []; // 정답 리스트
  const routes = {}; // 시작점을 key로 하는 배열들을 저장할 객체
  const check = {}; // 방문 확인
  const tmp = ['ICN'];
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

  const DFS = (n, cur) => {
    if (answer.length) return; // cut edge
    if (n === tickets.length + 1) {
      answer.push(tmp.slice());
      return;
    }
    if (routes[cur]) {
      for (let i = 0; i < routes[cur].length; i++) {
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
  return answer[0];
}

// Test Cases
console.log(
  solution([
    ['ICN', 'JFK'],
    ['HND', 'IAD'],
    ['JFK', 'HND'],
  ])
); // ["ICN", "JFK", "HND", "IAD"]
console.log(
  solution([
    ['ICN', 'SFO'],
    ['ICN', 'ATL'],
    ['SFO', 'ATL'],
    ['ATL', 'ICN'],
    ['ATL', 'SFO'],
  ])
); // ["ICN", "ATL", "ICN", "SFO", "ATL", "SFO"]

// Additoinal cases
console.log(
  solution([
    ['ICN', 'SFO'],
    ['SFO', 'ICN'],
    ['ICN', 'SFO'],
    ['SFO', 'QRE'],
  ])
); // [ 'ICN', 'SFO', 'ICN', 'SFO', 'QRE' ]

console.log(
  solution([
    ['ICN', 'BOO'],
    ['ICN', 'COO'],
    ['COO', 'DOO'],
    ['DOO', 'COO'],
    ['BOO', 'DOO'],
    ['DOO', 'BOO'],
    ['BOO', 'ICN'],
    ['COO', 'BOO'],
  ])
); // [ 'ICN', 'BOO', 'DOO', 'BOO', 'ICN', 'COO', 'DOO', 'COO', 'BOO' ]
