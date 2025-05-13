import React from 'react';
import type { Todo } from '../types/todo';
import { FaTrashAlt } from 'react-icons/fa';


interface TodoItemProps {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  return (
    <div className="todo-item">
      <input type="checkbox" checked={todo.completed} onChange={() => onToggle(todo.id)} />
      <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
      <button className="delete-btn" onClick={() => onDelete(todo.id)}><FaTrashAlt /></button>
    </div>
  );
};

export default React.memo(TodoItem);