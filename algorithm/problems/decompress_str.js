// 문자열 압축 해제
// 압축된 문자열을 원 상태로 압축 해제
// 3(ab)로 압축된 문자열을 압축 해제하면, ababab

const solution = str => {
  let stack = [];
  for (const x of str) {
    if (x === ')') {
      let poped = stack.pop();
      const inner = [];
      while (poped !== '(') {
        inner.unshift(poped);
        poped = stack.pop();
      }

      const n = stack.pop();
      const n10 = stack.pop();
      let num = parseInt(n);
      if (!Number.isInteger(n10)) stack.push(n10);
      else num = parseInt(n10) * 10 + parseInt(n);

      for (let i = 0; i < num; i++) {
        stack = [...stack, ...inner];
      }
    } else stack.push(x);
  }
  return stack.join('');
};

console.log(solution('2(ab)k3(bc)')); // ababkbcbcbc
console.log(solution('3(a2(b))ef')); // abbabbabbef
console.log(solution('aabb3(3(a)b)')); // aabbaaabaaabaaab
