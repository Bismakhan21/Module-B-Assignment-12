import React, { useState } from 'react';

const TodoForm = ({ addTodo, updateTodo, cancelEdit, editIndex, Title, Description }) => {
  const [title, setTitle] = useState(Title || '');
  const [description, setDescription] = useState(Description || '');

  const handleAction = () => {
    if (editIndex !== null) {
      updateTodo({ title, description });
      cancelEdit();
    } else {
      addTodo({ title, description });
      setTitle('');
      setDescription('');
    }
  };

  return (
    <div className="add-todo-input">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={handleAction}>{editIndex !== null ? 'Update' : 'Add Todo'}</button>
      {editIndex !== null && <button onClick={cancelEdit}>Cancel</button>}
    </div>
  );
};

export default TodoForm;