import type { RootState } from "@/app/store";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "@/features/todos/todoSlice";


 const filters = ['All', 'Active', 'Completed'] as const;


const FilterBar = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state: RootState) => state.todos.filter);

  return (
    <div className="filter-bar">
      {filters.map((item) => (
        <button
          key={item}
          onClick={() => dispatch(changeFilter(item))}
          className={`filter-btn ${item === currentFilter ? 'active' : ''}`}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;