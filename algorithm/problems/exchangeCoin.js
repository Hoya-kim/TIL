// 문제 설명
// N개 종류의 동전단위가 주어져 있을때 이 동전들을 이용해서 합이 M원을 만든다.
// 만들 수 있는 경우의 수를 구하세요. 각 단위의 동전은 무한정 쓸 수 있다.

// 동전의 구성요소가 같고, 순서가 다른 것은 같은 경우로 본다
// ex) m = 7, nums = [2,3,5] / (2, 2, 3), (2, 3, 2), (3, 2, 2)경우들은 같은 경우

// 만들 수 있는 경우의 수를 반환

// 효율성 실패
// function solution(nums, m) {
//     let answer = 0;
//     const DFS = (s, sum) => {
//         if(sum > m) return;
//         if(sum === m) {
//             answer++
//             return;
//         }
//         for(let i=s;i<nums.length;i++) {
//             DFS(i, sum + nums[i])
//         }
//     }
//     DFS(0, 0)
//     return answer;
// }

// DP 냅색
function solution(nums, m) {
  const dy = Array.from({ length: m + 1 }, () => 0);
  dy[0] = 1;
  for (const coin of nums) {
    for (let i = coin; i <= m; i++) {
      dy[i] += dy[i - coin];
    }
  }
  return dy[m];
}

console.log(solution([2, 3, 5], 10)); // 4
