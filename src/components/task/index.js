import React, { useState } from "react";

export default function Task({
  id,
  title,
  description,
  status,
  category,
  editedInput,
}) {
  const [isEdit, setIsEdit] = useState(false);
  const [inputValue, setInputValue] = useState(title);

  const handleEdit = () => {
    setIsEdit((prev) => (prev = true));
  };

  const handleInputValue = (newTitle) => {
    setInputValue((prev) => (prev = newTitle));
  };

  return !isEdit ? (
    <div className="wrapper_to_task">
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
        <button onClick={handleEdit}>Edit</button>
      </div>
    </div>
  ) : (
    <div>
      <input
        value={inputValue}
        onChange={(e) => handleInputValue(e.target.value)}
      />

      <button>Save</button>
      <button>Cancel</button>
    </div>
  );
}
