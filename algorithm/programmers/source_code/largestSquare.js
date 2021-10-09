// 가장 큰 정사각형 찾기
// 0과 1로 채워진 board가 주어짐
// 1로만 채워진 공간으로 가장 큰 정사각형을 만들 수 있는 경우의 정사각형의 넓이
function solution(board) {
  var answer = 0;
  const width = board.length;
  const height = board[0].length;
  const dy = Array.from({ length: width + 1 }, () => Array(height + 1).fill(0));
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      dy[i + 1][j + 1] = board[i][j];
    }
  }

  for (let i = 1; i < width + 1; i++) {
    for (let j = 1; j < height + 1; j++) {
      if (dy[i][j] === 0) continue;
      dy[i][j] = Math.min(dy[i - 1][j - 1], dy[i][j - 1], dy[i - 1][j]) + 1;
      answer = Math.max(answer, dy[i][j]);
    }
  }

  return answer * answer;
}
