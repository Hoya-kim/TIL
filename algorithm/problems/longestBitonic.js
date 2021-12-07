const solution = (arr) => {
  const len = arr.length;
  const distLeft = Array(len).fill(0);
  const distRight = Array(len).fill(0);
  for (let i = 1, j = len - 2; i < len; i++, j--) {
    if (arr[i - 1] < arr[i]) distLeft[i] = distLeft[i - 1] + 1;
    else distLeft[i] = 0;
    if (arr[j] > arr[j + 1]) distRight[j] = distRight[j + 1] + 1;
    else distRight[j] = 0;
  }

  let max = 0;
  for (let i = 0; i < len; i++) {
    max = Math.max(max, distLeft[i] + distRight[i] + 1);
  }
  return max;
};

console.log(solution([10, 8, 9, 15, 12, 6, 7]));
console.log(solution([5, 1, 2, 1, 4, 5]));
console.log(solution([9, 7, 6, 2, 1]));
