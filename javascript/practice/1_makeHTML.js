const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false },
];

const render = todos => {
  return todos.reduce((acc, cur) => {
    return (
      acc +
      `<li id=${cur.id}>\n  <label><input type="checkbox"${cur.completed ? ' checked' : ''}>${
        cur.content
      }</input></label>\n</li>\n`
    );
  }, '');
};

console.log(render(todos));
