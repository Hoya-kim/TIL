// 연속 부분수열
// N개의 수로 이루어진 수열
// 연속 부분수열의 곱이 특정 숫자 M이하가 되는 경우가 몇 번 있는지 구하는 프로그램

const solution = (seq, m) => {
  let count = 0;
  let lt = 0;
  let mul = 1;

  for (let rt = 0; rt < seq.length; rt++) {
    mul *= seq[rt];
    while (mul > m) mul /= seq[lt++];
    count += rt - lt + 1; // rt를 포함하는 부분집합의 개수
  }

  return count;
};

console.log(solution([1, 2, 3], 1)); // 1
console.log(solution([2, 3, 3, 2, 5], 20)); // 11
console.log(solution([1, 1, 1, 1], 3)); // 10
