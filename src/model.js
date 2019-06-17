import { action, thunk } from "easy-peasy";
import axios from "axios";
import uuid from "uuid";

export default {
  todos: [],
  // thunk
  fetchTodos: thunk(async actions => {
    const { data: todos } = await axios.get(
      "https://jsonplaceholder.typicode.com/todos?_limit=5"
    );
    actions.setTodos(todos);
  }),
  // Actions
  setTodos: action((state, todos) => {
    state.todos = todos;
  }),
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
