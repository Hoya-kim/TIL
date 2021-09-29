// 바이토닉 수열
// 수열이 증가하다가 감소하는 수열
// 수열이 주어지면, 바이토닉 수열인지 아닌지 판별
// 같은 값이 연속으로 있으면, 바이토닉 수열이라 하지 않음

const solution = nums => {
  let i = 1;
  // 증가
  while (nums[i - 1] < nums[i] && i < nums.length) i++;
  // 계속 증가만 하거나 감소만 할 경우
  if (i === 1 || i === nums.length) return 'NO';
  // 감소
  while (nums[i - 1] > nums[i] && i < nums.length) i++;
  // 종점까지 도달 못했을 때
  if (i !== nums.length) return 'NO';
  return 'YES';
};

console.log(solution([1, 2, 3, 4, 5, 3, 1])); // YES
console.log(solution([1, 3, 4, 5, 5, 6, 4, 3])); // NO
console.log(solution([1, 2, 3, 4, 5])); // NO
