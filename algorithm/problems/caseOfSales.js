// 매출액의 종류
// N일 동안의 매출기록이 주어짐
// k일 동안의 매출액의 종류를 각 구간별로 구하라

const solution = (sales, k) => {
  const cases = new Map();
  for (let i = 0; i < k; i++) {
    cases.set(sales[i], cases.get(sales[i]) + 1 || 1);
  }

  const answer = [cases.size];
  for (let i = k; i < sales.length; i++) {
    cases.set(sales[i], cases.get(sales[i]) + 1 || 1);
    cases.set(sales[i - k], cases.get(sales[i - k]) - 1);
    if (cases.get(sales[i - k]) === 0) cases.delete(sales[i - k]);
    answer.push(cases.size);
  }
  return answer;
};

console.log(solution([20, 12, 20, 10, 23, 17, 10], 4));
console.log(solution([1, 2, 3, 2, 2, 3, 3, 3, 3, 2], 3));
