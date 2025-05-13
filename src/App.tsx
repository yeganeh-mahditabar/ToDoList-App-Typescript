import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import FilterBar from './components/FilterBar';
import StatsBar from './components/StatsBar';
import type { Todo } from './types/todo';
import { LuNotepadText } from 'react-icons/lu';
import { getData, setData, LOCAL_STORAGE_KEY } from './utils/localStorage';
import './index.css';

const App = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    return getData<Todo[]>(LOCAL_STORAGE_KEY) || [];
  });
  const [filter, setFilter] = useState('All');

  const updateTodos = (newTodos: Todo[]) => {
    setTodos(newTodos);
    setData(LOCAL_STORAGE_KEY, newTodos);
  };

  
  const addTodo = (text: string) => {
    const newTodo: Todo = { id: Date.now(), text, completed: false };
    updateTodos([...todos, newTodo]);
  };

  const toggleTodo = (id: number) => {
    const updated = todos.map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    );
    updateTodos(updated);
  };

  const deleteTodo = (id: number) => {
    const updated = todos.filter((t) => t.id !== id);
    updateTodos(updated);
  };

  const filteredTodos =
    filter === 'All' ? todos : todos.filter((t) => t.completed === (filter === 'Completed'));

  return (
    <div className="app">
      <h1 className="app-title"><LuNotepadText className="title-icon" />To-Do App</h1>
      <TodoForm onAdd={addTodo} />
      <FilterBar currentFilter={filter} onChangeFilter={setFilter} />
      <StatsBar total={todos.length} completed={todos.filter((t) => t.completed).length}/>
      <div className="todo-list">
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onToggle={toggleTodo} onDelete={deleteTodo} />
        ))}
      </div>
    </div>
  );
};

export default App;