/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rCenter
 * @param {number} cCenter
 * @return {number[][]}
 */
var allCellsDistOrder = function (rows, cols, rCenter, cCenter) {
  const cells = [];
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];
  const ch = Array.from({ length: rows }, () => Array(cols).fill(0));

  const queue = [[rCenter, cCenter]];
  ch[rCenter][cCenter] = 1;
  cells.push([rCenter, cCenter]);

  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const [cR, cC] = queue.shift();
      for (let j = 0; j < 4; j++) {
        const [nR, nC] = [cR + dx[j], cC + dy[j]];
        if (nR >= 0 && nC >= 0 && nR < rows && nC < cols && ch[nR][nC] === 0) {
          ch[nR][nC] = 1;
          queue.push([nR, nC]);
          cells.push([nR, nC]);
        }
      }
    }
  }
  return cells;
};

console.log(allCellsDistOrder(1, 2, 0, 0)); // [[0,0],[0,1]]
console.log(allCellsDistOrder(2, 2, 0, 1)); // [[0,1],[0,0],[1,1],[1,0]]
console.log(allCellsDistOrder(2, 3, 1, 2)); // [[1,2],[0,2],[1,1],[0,1],[1,0],[0,0]]
