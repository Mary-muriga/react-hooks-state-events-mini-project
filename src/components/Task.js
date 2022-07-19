import React from "react";

function Task({category, text, handleDelete}) {
  return (
    <div className="tasks">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button 
      className="delete"
      onClick={e => handleDelete(text)}>X</button>
    </div>
  );
}

export default Task;
