import React, { useState } from 'react';

const EditToDoForm = ({ task, saveEdit, cancelEdit }) => {
  const [newText, setNewText] = useState(task.text);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newText.trim() !== '') {
      saveEdit(task.id, newText); // Save the edited task
    }
  };

  return (
    <form onSubmit={handleSubmit} className="edit-form">
      <input
        type="text"
        value={newText}
        onChange={(e) => setNewText(e.target.value)} // Update edited text
        className="edit-input"
      />
      <button type="submit" className="save-btn">
        Save
      </button>
      <button type="button" className="cancel-btn" onClick={cancelEdit}>
        Cancel
      </button>
    </form>
  );
};

export default EditToDoForm;
