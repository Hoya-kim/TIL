function solution(priorities, location) {
  let shifted = priorities.shift();
  let num = 1;
  while (true) {
    if (Math.max(...priorities) > shifted) {
      priorities.push(shifted);
      location === 0 ? (location = priorities.length - 1) : location--;
    } else {
      if (location === 0) break;
      location--;
      num++;
    }
    shifted = priorities.shift();
  }
  return num;
}

console.log(solution([2, 1, 3, 2], 2)); // 1
console.log(solution([1, 1, 9, 1, 1, 1], 0)); // 5
