function solution(weights, head2head) {
  let len = head2head.length;
  let boxers = [];
  for (let i = 0; i < len; i++) {
    let win = 0;
    let winBigger = 0;
    let cnt = 0;
    for (let j = 0; j < len; j++) {
      if (head2head[i][j] === 'N') continue;
      cnt++;
      if (head2head[i][j] === 'W') {
        if (weights[j] > weights[i]) winBigger++;
        win++;
      }
    }
    let rate = cnt === 0 ? 0 : win / cnt;
    boxers.push({ i, win: rate, winBigger, weight: weights[i] });
  }
  console.log(boxers);

  boxers.sort((a, b) => {
    if (a.win === b.win) {
      if (a.winBigger === b.winBigger) {
        if (a.weight === b.weight) {
          return a.i - b.i;
        }
        return b.weight - a.weight;
      } else return b.winBigger - a.winBigger;
    } else return b.win - a.win;
  });
  console.log(boxers);
  return boxers.map(el => el.i + 1);
}

console.log(solution([50, 82, 75, 120], ['NLWL', 'WNLL', 'LWNW', 'WWLN'], [3, 4, 1, 2]));
console.log(solution([145, 92, 86], ['NLW', 'WNL', 'LWN'], [2, 3, 1]));
console.log(solution([60, 70, 60], ['NNN', 'NNN', 'NNN'], [2, 1, 3]));
