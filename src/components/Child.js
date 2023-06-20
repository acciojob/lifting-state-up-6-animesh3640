import React from "react";

function Child({ todos, handleComplete }) {
  return (
    <ul>
      <h2>Child Component</h2>
      {todos.map((todo) => (
        <li key={todo.id}>
          {todo.text}
          {!todo.completed && (
            <button onClick={() => handleComplete(todo.id)}>Complete</button>
          )}
        </li>
      ))}
    </ul>
  );
}

export default Child;