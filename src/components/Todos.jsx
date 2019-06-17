import React, { Fragment, useEffect } from "react";
import TodoItem from "./TodoItem";
import { useStore, useActions } from "easy-peasy";

const Todos = () => {
  //const todos = useStore(state => state.model.todos);
  //const title = useStore(state => state.model.title);

  const { todos, title } = useStore(state => ({
    todos: state.model.todos,
    title: state.model.title
  }));

  const fetchTodos = useActions(actions => actions.model.fetchTodos);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <Fragment>
      <h1>Todos: {title}</h1>
      <p>Click todo item to toggle completed</p>
      <hr />
      {todos.map(todo => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </Fragment>
  );
};

export default Todos;
