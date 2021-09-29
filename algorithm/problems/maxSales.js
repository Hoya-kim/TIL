// 최대 매출
// N일 동안의 매출 기록이 주어짐
// k일 동안의 매출액의 합 중에서 최대값이 얼마인지 구하라
const solution = (sales, k) => {
  let sum = 0;
  for (let i = 0; i < k; i++) {
    sum += sales[i];
  }
  let answer = sum;
  for (let i = k; i < sales.length; i++) {
    sum += sales[i] - sales[i - k];
    answer = Math.max(answer, sum);
  }
  return answer;
};

console.log(solution([12, 15, 11, 20, 25, 10, 20, 19, 13, 15], 3)); // 56
console.log(solution([1, 2, 3, 5, 6, 7, 1, 3, 9], 5)); // 26
console.log(solution([12, 34, 56, 72, 93, 121, 33, 11, 23, 52], 4)); // 342
