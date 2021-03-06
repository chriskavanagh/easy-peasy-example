import React, { useState } from "react";
import { useActions } from "easy-peasy";

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const add = useActions(actions => actions.model.add);

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          add({
            title
          });
          setTitle("");
        }}
      >
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Add Todo Title..."
        />
        <input type="submit" value="Add Todo" />
      </form>
    </div>
  );
};

export default AddTodo;
