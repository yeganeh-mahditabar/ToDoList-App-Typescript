import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "@/features/todos/todoSlice";
import { todoFilterSelector } from "@/features/todos/todoSelectors";

const filters = ["All", "Active", "Completed"] as const;

const FilterBar = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector(todoFilterSelector);

  return (
    <div className="filter-bar">
      {filters.map((item) => (
        <button
          key={item}
          onClick={() => dispatch(changeFilter(item))}
          className={`filter-btn ${item === currentFilter ? "active" : ""}`}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;
