import { action, thunk } from "easy-peasy";
import uuid from "uuid";

export default {
  todos: [
    {
      id: 1,
      title: "Take Out Trash",
      completed: true
    },
    {
      id: 2,
      title: "Pick Up Kids",
      completed: false
    },
    {
      id: 3,
      title: "Dinner With Boss",
      completed: false
    }
  ],
  // Actions
  add: action((state, todo) => {
    todo.id = uuid.v4();
    todo.completed = false;
    state.todos = [...state.todos, todo];
  }),
  toggle: action((state, id) => {
    state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
  }),
  remove: action((state, id) => {
    state.todos = state.todos.filter(todo => todo.id !== id);
  })
};
