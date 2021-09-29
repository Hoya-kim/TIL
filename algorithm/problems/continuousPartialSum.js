// 연속된 자연수의 합
// 양의 정수 N이 입려되면,
// 2개 이상의 연속된 자연수의 합으로 정수 N을 표현하는 가지수

const solution = n => {
  let answer = 0;
  let sum = 0;
  let lt = 1;
  for (let rt = 1; rt < n / 2 + 1; rt++) {
    sum += rt;
    if (sum === n) answer += 1;
    while (sum > n) {
      sum -= lt++;
      if (sum === n) answer += 1;
    }
  }
  return answer;
};

console.log(solution(15)); // 3
console.log(solution(45678)); // 7
console.log(solution(98765)); // 3
