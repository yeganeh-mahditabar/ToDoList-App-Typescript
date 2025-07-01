import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import FilterBar from "./components/FilterBar";
import StatsBar from "./components/StatsBar";
import { LuNotepadText } from "react-icons/lu";
import "./index.css";
import { useSelector } from "react-redux";
import {
  completedTodoItemCountSelector,
  remainingTodoItemCountSelector,
  todoFilteredItemsSelector,
  totalTodoItemCountSelector,
} from "@/features/todos/todoSelectors";

const App = () => {
  const total = useSelector(totalTodoItemCountSelector);
  const completed = useSelector(completedTodoItemCountSelector);
  const remaining = useSelector(remainingTodoItemCountSelector);
  const filteredTodos = useSelector(todoFilteredItemsSelector);

  return (
    <div className="app">
      <h1 className="app-title">
        <LuNotepadText className="title-icon" />
        To-Do App
      </h1>
      <TodoForm />
      <FilterBar />
      <StatsBar total={total} completed={completed} remaining={remaining} />
      <div className="todo-list">
        {filteredTodos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </div>
  );
};

export default App;
