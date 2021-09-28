// 후위식 연산
// 후위식 연산이 주어지면 연산 결과를 반환

const solution = postfix => {
  const stack = [];
  const oper = ['+', '-', '*', '/'];
  for (const x of postfix) {
    if (oper.includes(x)) {
      const rt = stack.pop();
      const lt = stack.pop();
      stack.push(Function(`return ${lt}${x}${rt}`)());
    } else stack.push(x);
  }
  return stack[0];
};

console.log(solution('352+*9-')); // 12
