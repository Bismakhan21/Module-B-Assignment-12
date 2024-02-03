import React from 'react';

const TodoItem = ({ todo, onDelete, onEdit }) => {
  return (
    <li className="todo-item">
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
      <button onClick={onDelete}>Delete</button>
      <button onClick={onEdit}>Edit</button>
    </li>
  );
};

export default TodoItem;