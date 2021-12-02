// 동전교환
// N개 종류의 동전
// 동전을 이용해 합이 M원이 되는 경우의 수
// 동전은 무한정 사용 가능,
// 동전의 구성 요소가 같고 순서가 다른 것은 같은 것으로 본다.
// const solution = (n, coins, m) => {
//   let answer = 0;

//   const DFS = (sum, s) => {
//     if (sum === m) {
//       answer += 1;
//       return;
//     }
//     if (sum > m) return;
//     else {
//       for (let i = s; i < coins.length; i++) {
//         DFS(sum + coins[i], i);
//       }
//     }
//   };
//   DFS(0, 0);
//   return answer;
// };

const solution = (n, coins, m) => {
  let answer = 0;

  const DFS = sum => {
    if (sum === m) {
      answer += 1;
      return;
    }
    if (sum > m) return;
    else {
      for (let i = 0; i < coins.length; i++) {
        DFS(sum + coins[i]);
      }
    }
  };
  DFS(0);
  return answer;
};

console.log(solution(3, [2, 3, 5], 10)); // 4
