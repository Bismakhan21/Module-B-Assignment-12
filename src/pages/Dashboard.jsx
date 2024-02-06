import { Button } from "@mui/material";
import React from "react";
import { useState } from "react";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import { useNavigate } from "react-router-dom";
import { Logout } from "@mui/icons-material";

export const Dashboard = () => {


  const [todos, setTodos] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  // const [remove, setRemove] =useState(localStorage.getItem('removeData') === 'true');

 

  const navigate = useNavigate();

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  const editTodo = (index) => {
    setEditingIndex(index);
  };

  const updateTodo = (updatedTodo) => {
    const updatedTodos = [...todos];
    updatedTodos[editingIndex] = updatedTodo;
    setTodos(updatedTodos);
    setEditingIndex(null);
  };

  const cancelEdit = () => {
    setEditingIndex(null);
  };

  const logout = () => {
   
    localStorage.removeItem('isLoggedIn');
    navigate("/login");
    
  }


  return (
    <>
    <div className="container">
      <h1>Todo App</h1>
      <Button sx={{width:'80px', marginBottom:'10px',}} onClick={logout}>Logout</Button>
      
      <TodoForm
        addTodo={addTodo}
        updateTodo={updateTodo}
        cancelEdit={cancelEdit}
        editIndex={editingIndex}
        Title={editingIndex !== null ? todos[editingIndex].title : ''}
        Description={editingIndex !== null ? todos[editingIndex].description : ''}
      />
      <TodoList todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
    </div>
  
    </>
  );
};