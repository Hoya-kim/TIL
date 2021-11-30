/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate, words) {
  const letters = [...licensePlate.toLowerCase().replace(/[^a-z]/g, '')].reduce((acc, cur) => {
    acc[cur] = acc[cur] + 1 || 1;
    return acc;
  }, {});

  const answers = [];
  for (const word of words) {
    const wordObj = [...word].reduce((acc, cur) => {
      acc[cur] = acc[cur] + 1 || 1;
      return acc;
    }, {});
    const check = Object.entries(letters).every(([key, value]) => value <= wordObj[key]);
    if (check) answers.push(word);
  }
  return answers.sort((a, b) => a.length - b.length)[0];
};

console.log(shortestCompletingWord('1s3 PSt', ['step', 'steps', 'stripe', 'stepple']));
console.log(shortestCompletingWord('1s3 456', ['looks', 'pest', 'stew', 'show']));
console.log(
  shortestCompletingWord('Ah71752', [
    'suggest',
    'letter',
    'of',
    'husband',
    'easy',
    'education',
    'drug',
    'prevent',
    'writer',
    'old',
  ])
);
