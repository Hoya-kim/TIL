// 빈도수 정렬
// 문자열이 주어지면 각 문자의 빈도수가 큰 문자부터 차례대로 출력
// 만약 빈도수가 같으면, 아스키번호 순 (알파벳 순)

const solution = str => {
  const chars = new Map();
  for (const x of str) chars.set(x, chars.get(x) + 1 || 1);

  const sorted = [...chars].sort((a, b) => {
    if (a[1] === b[1]) return a[0].charCodeAt(0) - b[0].charCodeAt(0);
    return b[1] - a[1];
  });

  return sorted.map(el => el[0].repeat(el[1])).join('');
};

console.log(solution('aaAAcccbbbBB')); // bbbcccAABBaa
console.log(solution('kdkDKKGkdkgks')); // kkkkkKKddDGgsbbbcccAABBaa
