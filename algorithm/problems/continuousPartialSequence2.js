// 연속 부분수열 2
// N개의 수로 이루어진 수열 (-1000 < 원소값 < 1000)
// 이 수열에서 연속부분수열의 합이 특정숫자 M이 되는 경우가 몇 번인가?
const solution = (nums, m) => {
  let answer = 0;
  let sum = 0; // 누적합
  const nH = new Map();

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum === m) answer += 1;
    if (nH.has(sum - m)) answer += nH.get(sum - m);
    nH.set(sum, nH.get(sum) + 1 || 1);
  }
  return answer;
};

// Point : sum - m
// target_sum(m)만큼 제거한 값이, 기존 누적합과 같다는 것은
// 그 누적합 idx 이후 부터의 현재 idx까지의 부분합이 target_sum(m)과 같다는 말

console.log(solution([1, 2, 3, -3, 1, 2], 3)); // 6
console.log(solution([-1, 0, 1], 0)); // 2
console.log(solution([-1, -1, -1, 1], 0)); // 1
