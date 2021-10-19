function solution(board, moves) {
  let answer = 0;
  const boardList = Array.from({ length: board[0].length }, () => new Array());
  const basket = [];
  board.forEach(row => row.forEach((col, i) => col && boardList[i].unshift(col)));

  moves.forEach(pos => {
    const doll = boardList[pos - 1].pop();
    if (doll === undefined) return;
    if (basket[basket.length - 1] === doll) {
      basket.pop();
      answer += 2;
    } else basket.push(doll);
  });
  return answer;
}

console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
