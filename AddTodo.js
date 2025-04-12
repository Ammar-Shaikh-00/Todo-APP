import React, { useState, useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const AddTodo = () => {
  const [text, setText] = useState('');
  const { addTodo } = useContext(TodoContext);

  return (
    <div style={{ display: 'flex', gap: 10 }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add task"
      />
      <button
        onClick={() => {
          if (text.trim()) {
            addTodo(text);
            setText('');
          }
        }}
      >
        Add
      </button>
    </div>
  );
};

export default AddTodo;
