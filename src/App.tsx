import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import FilterBar from './components/FilterBar';
import StatsBar from './components/StatsBar';
import { LuNotepadText } from 'react-icons/lu';
import './index.css';
import { useSelector } from 'react-redux';
import type { RootState } from './app/store';

const App = () => {
  const { items, filter } = useSelector((state: RootState) => state.todos);

  const filteredTodos = items.filter((todo) => {
    if (filter === 'Completed') return todo.completed;
    if (filter === 'Active') return !todo.completed;
    return true;
  });

  return (
    <div className="app">
      <h1 className="app-title"><LuNotepadText className="title-icon" />To-Do App</h1>
      <TodoForm />
      <FilterBar />
      <StatsBar />
      <div className="todo-list">
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default App;