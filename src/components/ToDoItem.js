import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import EditToDoForm from './EditToDoForm';

const ToDoItem = ({ task, toggleTaskCompletion, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveEdit = (id, newText) => {
    editTask(id, newText); // Save changes
    setIsEditing(false); // Exit edit mode
  };

  const cancelEdit = () => {
    setIsEditing(false); // Exit edit mode without saving
  };

  return (
    <li className={`todo-item ${task.completed && !isEditing ? 'completed' : ''}`}>
      {isEditing ? (
        <EditToDoForm task={task} saveEdit={saveEdit} cancelEdit={cancelEdit} />
      ) : (
        <>
          <span
            className="task-text"
            onClick={() => toggleTaskCompletion(task.id)}
            style={{
              textDecoration: task.completed ? 'line-through' : 'none',
              cursor: 'pointer',
            }}
          >
            {task.text}
          </span>
          <div className="task-actions">
            <button className="edit-btn" onClick={() => setIsEditing(true)}>
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button
              className="complete-btn"
              onClick={() => toggleTaskCompletion(task.id)}
            >
              <FontAwesomeIcon icon={faCheck} />
            </button>
            <button className="delete-btn" onClick={() => deleteTask(task.id)}>
              <FontAwesomeIcon icon={faTrash} />
            </button>
          </div>
        </>
      )}
    </li>
  );
};

export default ToDoItem;
