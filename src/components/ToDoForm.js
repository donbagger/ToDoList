import React, { useState } from 'react';

const ToDoForm = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    if (task.trim() === '') return; // Avoid empty task submissions
    addTask(task); // Call the `addTask` function passed as a prop
    setTask(''); // Clear the input field after submission
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input
        type="text"
        placeholder="Add a task"
        value={task}
        onChange={(e) => setTask(e.target.value)} // Update state with input value
        className="todo-input"
      />
      <button type="submit" className="todo-button">
        ADD TASK
      </button>
    </form>
  );
};

export default ToDoForm;
