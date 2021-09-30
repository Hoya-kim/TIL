// 연속 부분집합 - 홀수 개수
// 홀수의 개수가 k개인 연속 부분집합을 구해라
function solution(nums, k) {
  let answer = 0;
  let odd = 0; // 계속 누적
  let nH = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 1) odd += 1;
    if (odd === k) answer += 1;
    if (nH.has(odd - k)) answer += nH.get(odd - k);
    nH.set(odd, nH.get(odd) + 1 || 1); // 누적 합을 저장
  }
  return answer;
}

console.log(solution([1, 2, 1, 1, 2], 2));
console.log(solution([2, 2, 2, 1, 2, 2, 1, 2, 2, 2], 2)); // 16
