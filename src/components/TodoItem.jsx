import React from "react";
import { useActions } from "easy-peasy";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const TodoItem = ({ todo }) => {
  const toggle = useActions(actions => actions.toggle);
  const remove = useActions(actions => actions.remove);

  return (
    <div
      className="todo"
      style={{ textDecoration: todo.completed ? "line-through" : "none" }}
    >
      <span onClick={() => toggle(todo.id)} style={{ cursor: "pointer" }}>
        {todo.title}
      </span>
      <button onClick={() => remove(todo.id)}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};

export default TodoItem;
