import React, { Fragment, useEffect } from "react";
import TodoItem from "./TodoItem";
import { useStore, useActions } from "easy-peasy";

const Todos = () => {
  const todos = useStore(state => state.model.todos);
  const fetchTodos = useActions(actions => actions.model.fetchTodos);

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <Fragment>
      <h1>Todos</h1>
      <p>Click todo item to toggle completed</p>
      <hr />
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </Fragment>
  );
};

export default Todos;
