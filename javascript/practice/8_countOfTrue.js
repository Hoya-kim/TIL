const todos = [
  { id: 3, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 1, content: 'Javascript', completed: false },
];

const countCompletedTodos = todos => todos.reduce((acc, cur) => acc + (cur.completed ? 1 : 0), 0);

// Best
const countCompletedTodos2 = todos => todos.filter(todo => todo.completed).length;

console.log(countCompletedTodos(todos)); // 1
