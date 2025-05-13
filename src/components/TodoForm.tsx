import React, { useState } from 'react';
import { FaPlus } from 'react-icons/fa';


interface TodoFormProps {
  onAdd: (text: string) => void;
}

const TodoForm = ({ onAdd }: TodoFormProps) => {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onAdd(text);
      setText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Add a new task..." />
      <button className="add-btn" type="submit"><FaPlus /> Add Task</button>
    </form>
  );
};

export default TodoForm;