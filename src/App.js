
import './App.css';
import React, { useState } from 'react';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const editTask = (id, newText) => {
    setTasks(
      tasks.map((task) => 
      task.id === id ? { ...task, text: newText } : task )
    );
  };

  const addTask = (newTask) => {
    setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) => 
      task.id === id ? { ...task, completed: !task.completed } : task )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="todo-app">
      <h1>MY TO-DO LIST</h1>
      <ToDoForm addTask={addTask} />
      <ToDoList
      tasks={tasks}
      toggleTaskCompletion={toggleTaskCompletion}
      deleteTask={deleteTask}
      editTask={editTask}/>
    </div>
  );
};

export default App;

