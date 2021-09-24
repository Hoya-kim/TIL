// 프로그래머스 - 여행경로
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
