function solution(n) {
  const triangle = Array.from({ length: n }, (_, i) => Array(i + 1));

  let depth = n;
  let count = 1;
  let iter = 0;
  const countOfIter = [0, 0, 0];
  while (count !== (n * (n + 1)) / 2 + 1) {
    Array.from({ length: depth-- }, () => count++).forEach((el, i) => {
      if (iter % 3 === 0) triangle[i + countOfIter[0] * 2][countOfIter[0]] = el;
      if (iter % 3 === 1) triangle[n - 1 - countOfIter[1]][i + 1 + countOfIter[1]] = el;
      if (iter % 3 === 2) triangle[n - 2 - countOfIter[2] - i][n - 2 - i - countOfIter[2] * 2] = el;
    });
    if (iter % 3 === 0) countOfIter[0] = countOfIter[0] + 1;
    if (iter % 3 === 1) countOfIter[1] = countOfIter[1] + 1;
    if (iter % 3 === 2) countOfIter[2] = countOfIter[2] + 1;
    iter += 1;
  }

  return triangle.flat();
}

console.log(solution(4));
console.log(solution(5));
console.log(solution(6));
