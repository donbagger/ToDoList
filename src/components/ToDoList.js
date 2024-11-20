import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ tasks, toggleTaskCompletion, deleteTask, editTask }) => {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <ToDoItem
          key={task.id}
          task={task}
          toggleTaskCompletion={toggleTaskCompletion}
          editTask={editTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
};

export default ToDoList;
