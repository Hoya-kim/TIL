const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false },
];

// const getMaxId = todos => (todos.length ? Math.max(...todos.map(todo => todo.id)) : 0);
// const getMaxId = todos => todos.reduce((acc, cur) => (acc < cur.id ? cur.id : acc), 0);
const getMaxId = todos => todos.length && Math.max(...todos.map(todo => todo.id));

// Best
// 0을 추가해서 인수가 없을 경우를 대비
const getMaxId2 = todos => Math.max(...todos.map(todo => todo.id), 0);

console.log(getMaxId(todos)); // 3
console.log(getMaxId([])); // 0
// Math.max()에 인수 안주면 -Infinity
// Math.min()에 인수 안주면 Infinity
