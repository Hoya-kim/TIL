/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  const result = [];
  if (intervals.length === 0) return [];
  intervals.sort((a, b) => a[0] - b[0]);
  let merged = intervals[0];
  for (let i = 1; i < intervals.length; i++) {
    const [start, end] = intervals[i];
    if (start <= merged[1]) {
      merged[1] = Math.max(merged[1], end);
    } else {
      result.push(merged);
      merged = intervals[i];
    }
  }
  result.push(merged);
  return result;
};

console.log(
  merge([
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
  ])
);
console.log(
  merge([
    [1, 4],
    [4, 5],
  ])
);
