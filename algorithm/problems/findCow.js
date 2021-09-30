// 송아지 찾기
// 사람의 현재위치 s, 송아지의 현재위치 e가 주어짐
// 사람은 1초마다 현재 위치로 부터 앞으로 한칸(+1), 뒤로 한칸(-1), 두배의 위치(*2)로 이동 가능하다
// 송아지는 1초마다 전에 이동한 거리 + 1만큼 이동한다
// 사람과 송아지가 만나게 되는 최소시간을 구하라
// (송아지가 200,000이 넘어가면 못찾는 것으로 간주하고 -1을 반환)
function solution(s, e) {
  if (s === e) return 0;

  let L = 1; // 정답이 될 시간
  e += 1;
  let queue = new Set([s]);
  // BFS
  while (queue.size) {
    // 효율성을 위해 Set으로 중복 position 제거
    const next = new Set();
    for (const v of queue) {
      for (const nv of [v * 2, v + 1, v - 1]) {
        if (nv > 0 && nv < 210000) {
          if (nv === e) {
            return L;
          }
          next.add(nv);
        }
      }
    }
    queue = next;
    L += 1;
    e += L;
    if (e > 200000) return -1;
  }
}

console.log(solution(5, 6));
console.log(solution(10, 3));
console.log(solution(1, 11));
