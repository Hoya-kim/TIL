function solution(n, words) {
  const answer = [];
  const used = new Set();
  let last = words[0][0];
  for (let i = 0; i < words.length; i++) {
    if (used.has(words[i]) || last[last.length - 1] !== words[i][0]) {
      answer.push((i % n) + 1);
      answer.push(parseInt(i / n) + 1);
      break;
    }
    used.add(words[i]);
    last = words[i];
  }

  if (!answer.length) return [0, 0];
  return answer;
}

console.log(
  solution(3, ['tank', 'kick', 'know', 'wheel', 'land', 'dream', 'mother', 'robot', 'tank'])
); // [3,3]
console.log(
  solution(5, [
    'hello',
    'observe',
    'effect',
    'take',
    'either',
    'recognize',
    'encourage',
    'ensure',
    'establish',
    'hang',
    'gather',
    'refer',
    'reference',
    'estimate',
    'executive',
  ])
); // [0,0]
console.log(solution(2, ['hello', 'one', 'even', 'never', 'now', 'world', 'draw'])); // [1,3]
