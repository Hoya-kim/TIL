// 선수 능력치가 n으로 주어짐
// 선수 능력치 각 자릿수의 factorial값의 합이 다음 선수의 능력치
// 동일 능력치의 선수는 없음
// "능력치가 가장 큰 선수 * 선수들의 수"를 출력
const solution = (n) => {
  const dy = [1];
  const factorial = (k) => {
    if (dy[k] !== undefined) return dy[k];
    dy[k] = k * factorial(k - 1);
    return dy[k];
  };

  const set = new Set();
  let max = 0;
  let player = n;
  while (!set.has(player)) {
    set.add(player);
    max = Math.max(max, player);
    player = String(player)
      .split('')
      .reduce((acc, cur) => {
        return acc + factorial(parseInt(cur));
      }, 0);
  }

  return max * set.size;
};

console.log(solution(3));
console.log(solution(4));
console.log(solution(5));
console.log(solution(40));
console.log(solution(540));
