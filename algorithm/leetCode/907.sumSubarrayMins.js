/**
 * TIME LIMIT EXCEEDED
 * @param {number[]} arr
 * @return {number}
 */
// var sumSubarrayMins = function (arr) {
//   let answer = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j < arr.length; j++) {
//       answer += Math.min(...arr.slice(i, j + 1));
//     }
//   }
//   const MOD = 1e9 + 7;
//   return answer * MOD;
// };

/**
 * @param {number[]} arr
 * @return {number}
 */
var sumSubarrayMins = function (arr) {
  let sum = 0;
  const stack = [];

  for (let i = 0; i < arr.length; i++) {
    const cur = arr[i];
    let rightCount = 1;

    while (stack.length > 0 && stack[stack.length - 1][0] > cur) {
      const [prev, leftCount] = stack.pop();
      const subArrCount = leftCount * rightCount;
      sum += prev * subArrCount;
      rightCount += leftCount;
    }
    stack.push([cur, rightCount]);
  }

  let rightCount = 1;

  while (stack.length > 0) {
    const [num, leftCount] = stack.pop();
    const subArrCount = leftCount * rightCount;

    sum += num * subArrCount;
    rightCount += leftCount;
  }

  const MOD = 1e9 + 7;
  return sum % MOD;
};

console.log(sumSubarrayMins([3, 1, 2, 4]));
