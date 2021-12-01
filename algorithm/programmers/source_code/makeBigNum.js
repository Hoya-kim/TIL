// 큰 수 만들기
// https://programmers.co.kr/learn/courses/30/lessons/42883

function solution(number, k) {
  const stack = [];
  for (const s of number) {
    while (stack.length && s > stack[stack.length - 1] && k) {
      stack.pop();
      k--;
    }
    stack.push(s);
  }
  stack.splice(stack.length - k, k);
  return stack.join('');
}

console.log(solution('1924', 2));
console.log(solution('1231234', 3));
console.log(solution('4177252841', 4));
