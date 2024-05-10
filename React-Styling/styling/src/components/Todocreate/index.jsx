import React, { useState } from "react";

function TodoCreate({ onCreateTodo }) {
  const [newTodo, setNewTodo] = useState("");
  const clearInput = () => {
    setNewTodo("");
  };

  const createTodo = () => {
    if (!newTodo) return;

    const request = {
      id: Math.floor(Math.random() * 999999999),
      content: newTodo,
    };
    onCreateTodo(request);
    clearInput();
  };
  return (
    <div>
      <div style={{ height: "50px" }} className="todo-create">
        <input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          style={{ width: "300px", height: "30px", borderRadius: "5px" }}
          className="todo-input"
          type="text"
          placeholder="Todo daxil edin..."
        />
        <button onClick={createTodo} className="todo-button">
          Todo yarat
        </button>
      </div>
    </div>
  );
}

export default TodoCreate;