import React from 'react';
import type { Todo } from '@/types/todo';
import { FaTrashAlt } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '@/features/todos/todoSlice';


const TodoItem = ({ todo }: { todo: Todo }) => {
  const dispatch = useDispatch();

  return (
    <div className="todo-item">
      <input type="checkbox" checked={todo.completed} onChange={() => dispatch(toggleTodo(todo.id))} />
      <span
        className={todo.completed ? 'completed' : ''}
        onClick={() => dispatch(toggleTodo(todo.id))}>{todo.text}</span>
      <button
        className="delete-btn"
        onClick={() => dispatch(deleteTodo(todo.id))}><FaTrashAlt /></button>
    </div>
  );
};

export default React.memo(TodoItem);