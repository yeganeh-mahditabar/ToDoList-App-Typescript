
interface FilterBarProps {
  currentFilter: string;
  onChangeFilter: (filter: string) => void;
}

const FilterBar = ({ currentFilter, onChangeFilter }: FilterBarProps) => {
  return (
    <div className="filter-bar">
      {['All', 'Completed', 'Pending'].map((item) => (
        <button
          key={item}
          onClick={() => onChangeFilter(item)}
          className={`filter-btn ${item === currentFilter ? 'active' : ''}`}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;