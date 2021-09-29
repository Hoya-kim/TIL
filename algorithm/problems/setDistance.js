// 거리두기
// 일렬로 되어 있는 좌석 정보가 주어진다.
// 이미 사람이 앉은 좌석은 1, 남은 좌석은 0으로 주어진다.
// 이미 앉은 사람들 중 가장 가까운 사람과 최대한 멀리 떨어져 앉는 좌석을 선택한다.
const solution = nums => {
  let answer = 0;
  const dist = Array(nums.length).fill(0);
  let d = 1000;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) d = 0;
    dist[i] = d++;
  }
  d = 1000;
  for (let i = nums.length - 1; i >= 0; i--) {
    if (nums[i] === 1) d = 0;
    dist[i] = Math.min(dist[i], d++); // 좌우 거리중 짧은 거리
    answer = Math.max(answer, dist[i]); // 가장 먼 거리
  }
  return answer;
};

console.log(solution([1, 0, 0, 0, 1, 0, 0, 1, 0, 1])); // 2
