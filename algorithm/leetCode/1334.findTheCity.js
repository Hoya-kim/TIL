/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */

// Time Limit Exceeded (DFS)

// var findTheCity = function (n, edges, distanceThreshold) {
//   const graph = {};
//   for (const [from, to, weight] of edges) {
//     graph[from] = graph[from] || [];
//     graph[to] = graph[to] || [];
//     graph[from].push([to, weight]);
//     graph[to].push([from, weight]);
//   }

//   const neigthbor = Array.from({ length: n }, () => new Set());

//   const visited = Array(n).fill(0);
//   function DFS(node, dist, start) {
//     if (dist > distanceThreshold) return;
//     else {
//       if (start !== node) neigthbor[start].add(node);
//       if (graph[node]) {
//         for (let i = 0; i < graph[node].length; i++) {
//           if (visited[graph[node][i][0]] === 0) {
//             visited[graph[node][i][0]] = 1;
//             DFS(graph[node][i][0], dist + graph[node][i][1], start);
//             visited[graph[node][i][0]] = 0;
//           }
//         }
//       }
//     }
//   }

//   for (let i = 0; i < n; i++) {
//     visited[i] = 1;
//     DFS(i, 0, i);
//     visited[i] = 0;
//   }

//   const min = Math.min(...neigthbor.map((el) => el.size));

//   return parseInt(
//     Object.entries(neigthbor)
//       .filter((el) => el[1].size === min)
//       .sort((a, b) => b[0] - a[0])[0][0]
//   );
// };

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */
var findTheCity = function (n, edges, distanceThreshold) {
  const dist = Array.from({ length: n }, () =>
    Array(n).fill(Number.MAX_SAFE_INTEGER)
  );

  for (let i = 1; i < n; i++) dist[i][i] = 0;
  for (let [from, to, weight] of edges) {
    dist[from][to] = weight;
    dist[to][from] = weight;
  }

  for (let k = 0; k < n; k++) {
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        dist[i][j] = Math.min(dist[i][j], dist[i][k] + dist[k][j]);
      }
    }
  }

  let min = 1000;
  const map = new Map();
  for (let i = 0; i < dist.length; i++) {
    map.set(i, []);
    for (let j = 0; j < dist.length; j++) {
      if (i !== j && dist[i][j] <= distanceThreshold) {
        map.get(i).push(j);
      }
    }
    min = Math.min(min, map.get(i).length);
  }

  return [...map]
    .filter((el) => el[1].length === min)
    .sort((a, b) => b[0] - a[0])[0][0];
};

console.log(
  findTheCity(
    4,
    [
      [0, 1, 3],
      [1, 2, 1],
      [1, 3, 4],
      [2, 3, 1],
    ],
    4
  )
); // 3

console.log(
  findTheCity(
    5,
    [
      [0, 1, 2],
      [0, 4, 8],
      [1, 2, 3],
      [1, 4, 2],
      [2, 3, 1],
      [3, 4, 1],
    ],
    2
  )
); // 0

console.log(
  findTheCity(
    5,
    [
      [0, 1, 2],
      [0, 4, 8],
      [1, 2, 10000],
      [1, 4, 2],
      [2, 3, 10000],
      [3, 4, 1],
    ],
    10000
  )
); // 2
