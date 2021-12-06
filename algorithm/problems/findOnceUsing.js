// 문자열에서 한 번만 사용한 문자 찾기
//
// 문자열은 소문자로 이루어짐
// 한 번만 사용한 문자 중 먼저 나타난 문자의 인덱스 반환 (인덱스는 1부터 시작)
// 없으면 -1 반환
const solution = (s) => {
  const map = new Map();
  for (let i = 0; i < s.length; i++) {
    map.get(s[i]) >= -1 ? map.set(s[i], -1) : map.set(s[i], i);
  }
  const useOnce = [...map].filter(([key, value]) => value !== -1);
  return useOnce.length === 0 ? -1 : useOnce[0][1] + 1;
};

console.log(solution('statistics'));
console.log(solution('ssaabbcc'));
console.log(solution('kkkaaabbbccc'));
