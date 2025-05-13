
interface StatsBarProps {
  total: number;
  completed: number;
}

const StatsBar = ({ total, completed }: StatsBarProps) => {
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