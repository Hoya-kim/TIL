/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const dx = [1, 0, -1, 0];
  const dy = [0, 1, 0, -1];

  const queue = [];

  let hasFresh = false;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 2) queue.push([i, j]);
      if (grid[i][j] === 1) hasFresh = true;
    }
  }

  if (queue.length === 0) return hasFresh ? -1 : 0;

  let time = -1;
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const [x, y] = queue.shift();
      for (let i = 0; i < 4; i++) {
        const nx = x + dx[i];
        const ny = y + dy[i];
        if (
          nx >= 0 &&
          ny >= 0 &&
          nx < grid.length &&
          ny < grid[0].length &&
          grid[nx][ny] === 1
        ) {
          grid[nx][ny] = 2;
          queue.push([nx, ny]);
        }
      }
    }
    time++;
  }
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) return -1;
    }
  }
  return time;
};

console.log(
  orangesRotting([
    [2, 1, 1],
    [1, 1, 0],
    [0, 1, 1],
  ])
);
console.log(
  orangesRotting([
    [2, 1, 1],
    [0, 1, 1],
    [1, 0, 1],
  ])
);
console.log(orangesRotting([[0, 2]]));
console.log(orangesRotting([[0]]));
console.log(orangesRotting([[1]]));
