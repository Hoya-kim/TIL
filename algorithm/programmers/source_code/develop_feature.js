function solution(progresses, speeds) {
  var answer = [];
  let dueDate = progresses.map((v, i) => {
    let rest = 100 - v;
    return rest % speeds[i] > 0 ? parseInt(rest / speeds[i]) + 1 : parseInt(rest / speeds[i]);
  });

  let max = dueDate[0];
  let count = 1;
  for (let i = 1; i < dueDate.length; i++) {
    if (dueDate[i] > max) {
      answer.push(count);
      count = 1;
      max = dueDate[i];
    } else {
      count += 1;
    }
  }
  answer.push(count);

  return answer;
}

function solution2(progresses, speeds) {
  var answer = [];
  let dueDate = progresses.map((v, i) => {
    let rest = 100 - v;
    return rest % speeds[i] > 0 ? parseInt(rest / speeds[i]) + 1 : parseInt(rest / speeds[i]);
  });
  let max = dueDate.shift();
  let features = [max];

  while (dueDate.length) {
    let feat = dueDate.shift();
    if (feat > max) {
      answer.push(features.length);
      features = [feat];
      max = feat;
    } else {
      features.push(feat);
    }
  }
  if (features.length) answer.push(features.length);
}

console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));
