// 침몰하는 타이타닉
// 2명 이하로 탈 수 있는 구명보트는 Mkg 이하로 무게가 제한되어 있음
// N명의 승객 몸무게가 주어질 떄, 필요한 구명보트의 최소 개수

const solution = (nums, m) => {
  let answer = 0;
  nums.sort((a, b) => b - a);
  while (nums.length) {
    const heavy = nums.shift();
    let op = -1;
    for (let i = 0; i < nums.length; i++) {
      if (m - heavy >= nums[i]) op = i;
    }
    if (op !== -1) {
      nums.splice(op, 1);
    }
    answer += 1;
  }
  return answer;
};

console.log(solution([90, 50, 70, 100, 60], 140)); // 3
