/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  const answer = [];
  while (columnNumber > 26) {
    const remainder = columnNumber % 26 === 0 ? 26 : columnNumber % 26;
    const next = Math.floor(columnNumber / 26);
    answer.unshift(String.fromCharCode(remainder + 64));
    columnNumber = columnNumber % 26 === 0 ? next - 1 : next;
  }
  answer.unshift(String.fromCharCode(columnNumber + 64));
  return answer.join('');
};

// console.log(convertToTitle(1));
// console.log(convertToTitle(26));
// console.log(convertToTitle(28));
console.log(convertToTitle(52));
// console.log(convertToTitle(701));
// console.log(convertToTitle(2147483647));

console.log(52 / 26);
console.log(52 % 26);
