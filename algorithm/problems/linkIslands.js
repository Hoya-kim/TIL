// 섬연결
const solution = board => {
  const n = board.length;
  const ch = Array.from({ length: n }, () => Array(n).fill(0));
  const dist = Array.from({ length: n }, () => Array(n).fill(0));
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];
  const queue = [];

  const DFS = ([x, y]) => {
    if (board[x][y] === 0) return;
    console.log(x, y);
    queue.push([x, y]);
    ch[x][y] = 1;
    for (let i = 0; i < 4; i++) {
      const nx = x + dx[i];
      const ny = y + dy[i];
      if (nx >= 0 && ny >= 0 && nx < n && ny < n && ch[nx][ny] === 0) {
        DFS([nx, ny]);
      }
    }
  };

  let flag = false;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === 1) {
        ch[i][j] = 1;
        DFS([i, j]);
        flag = true;
        break;
      }
    }
    if (flag) break;
  }

  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i++) {
      let [cx, cy] = queue.shift();
      for (let j = 0; j < 4; j++) {
        const nx = cx + dx[j];
        const ny = cy + dy[j];
        if (nx >= 0 && ny >= 0 && nx < n && ny < n) {
          if (board[nx][ny] === 1) {
            // 정답
            return dist[cx][cy] + 1;
          }
          if (board[nx][ny] === 0) {
            dist[nx][ny] = dist[cx][cy] + 1;
            board[nx][ny] = -1;
            queue.push([nx, ny]);
          }
        }
      }
    }
  }
  return -1;
};

console.log(
  solution([
    [1, 1, 0, 0, 0],
    [0, 1, 1, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1],
  ])
);

// function solution(board) {
//   const n = board.length;
//   let dx = [-1, 0, 1, 0];
//   let dy = [0, 1, 0, -1];
//   let Q = [];
//   let L = 0;
//   outerLoop: for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (board[i][j] === 1) {
//         DFS(i, j);
//         break outerLoop;
//       }
//     }
//   }
//   function DFS(i, j) {
//     Q.push([i, j]);
//     board[i][j] = -1;
//     for (let k = 0; k < 4; k++) {
//       let ni = i + dx[k];
//       let nj = j + dy[k];
//       if (ni >= 0 && ni < n && nj >= 0 && nj < n && board[ni][nj] === 1) {
//         DFS(ni, nj);
//       }
//     }
//   }
//   while (Q.length) {
//     let len = Q.length;
//     for (let i = 0; i < len; i++) {
//       let [x, y] = Q.shift();
//       for (let k = 0; k < 4; k++) {
//         let nx = x + dx[k];
//         let ny = y + dy[k];
//         if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) return L;
//         if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 0) {
//           board[nx][ny] = -1;
//           Q.push([nx, ny]);
//         }
//       }
//     }
//     L++;
//   }
// }
// console.log(
//   solution([
//     [1, 1, 0, 0, 0],
//     [0, 1, 1, 0, 0],
//     [0, 1, 0, 0, 0],
//     [0, 0, 0, 0, 0],
//     [0, 0, 1, 1, 1],
//   ])
// );
