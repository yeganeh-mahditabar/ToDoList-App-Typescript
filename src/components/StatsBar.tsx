import { useSelector } from "react-redux";
import type { RootState } from "../app/store";


const StatsBar = () => {
  const todos = useSelector((state: RootState) => state.todos.items);
  const total = todos.length;
  const completed = todos.filter((t) => t.completed).length;
  const remaining = total - completed;

  return (
    <div className="stats-bar">
      <p>Completed: <strong>{completed}</strong></p>
      <p>Remaining: <strong>{remaining}</strong></p>
      <p>Total Tasks: <strong>{total}</strong></p>
    </div>
  );
};

export default StatsBar;