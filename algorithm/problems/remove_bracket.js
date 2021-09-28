// 괄호 문자 제거
// 입력 문자열에서 () 소괄호 사이에 존재하는 모든 문자를 제거하고 남는 문자
function solution(str) {
  const stack = [];
  for (const x of str) {
    if (x === ')') {
      while (stack.pop() !== '(');
    } else stack.push(x);
  }
  return stack.join('');
}

console.log(solution('(A(BC)D)EF(G(H)(IJ)K)LM(N)')); // EFLM
