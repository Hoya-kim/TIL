const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false },
];

// using reduce
const render = todos =>
  todos.reduce((acc, cur) => {
    return (
      acc +
      `<li id=${cur.id}>\n  <label><input type="checkbox"${cur.completed ? ' checked' : ''}>${
        cur.content
      }</input></label>\n</li>\n`
    );
  }, '');

// using map => Best
const render2 = todos =>
  todos
    .map(
      ({ id, content, completed }) => `
      <li id=${id}>
        <label><input type="checkbox"${completed ? ' checked' : ''}>${content}</input></label>
      </li>
      `
    )
    .join('');

// 변수명 변경 및 디스터럭쳐링 활용
const render3 = todos =>
  todos.reduce((html, { id, content, completed }) => {
    html +
      `<li id=${id}>\n  <label><input type="checkbox"${
        completed ? ' checked' : ''
      }>${content}</input></label>\n</li>\n`;
  }, '');

console.log(render(todos));
console.log(render2(todos));
console.log(render3(todos));
