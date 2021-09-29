// 바둑대회
// N(짝수)명이 출전
// 흰 돌, 검은 돌 선수 각 N/2명
// 각 선수마다 흰 돌로 했을 때 능력, 검은 돌로 했을 때 능력이 주어짐
// 흰 돌팀과 검은 돌팀의 능력차가 최소가 되게 팀을 짠다
// 흰 돌팀과 검은 돌팀의 능력차의 최소를 출력

const solution = players => {
  let answer = 1000;
  const totalBlack = players.reduce((acc, cur) => acc + cur[1], 0);
  const len = players.length;

  const DFS = (L, s, white, black) => {
    if (L === len / 2) {
      // black 팀의 능력치 합 = totalBlack - black
      const diff = Math.abs(white - (totalBlack - black));
      answer = Math.min(answer, diff);
      return;
    }
    for (let i = s; i < players.length; i++) {
      DFS(L + 1, i + 1, white + players[i][0], black + players[i][1]);
    }
  };
  DFS(0, 0, 0, 0);
  return answer;
};

console.log(
  solution([
    [87, 84],
    [66, 78],
    [94, 94],
    [93, 87],
    [72, 92],
    [78, 63],
  ])
);
