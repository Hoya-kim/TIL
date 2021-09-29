// 최대 부분 증가수열
// N개의 자연수 수열,
// 그 중에서 가장 길게 증가하는(작은 수 -> 큰 수) 원소들의 집합

const solution = nums => {
  let answer = 0;
  // dy[i] : i번이 마지막 항이 되는 최대부분증가수열의 길이
  const dy = Array.from({ length: nums.length }, () => 0);
  dy[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    let max = 0;
    for (let j = 0; j < i; j++) {
      // 이전까지 중에 nums[i]보다 작으면서, dy[j]가 가장 큰 것
      if (nums[j] < nums[i]) max = Math.max(max, dy[j]);
    }
    dy[i] = max + 1;
    answer = Math.max(dy[i], answer);
  }
  return answer;
};

console.log(solution([5, 3, 7, 8, 6, 2, 9, 4]));
