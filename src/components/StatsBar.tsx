const StatsBar = ({
  total,
  completed,
  remaining,
}: {
  total: number;
  completed: number;
  remaining: number;
}) => {
  return (
    <div className="stats-bar">
      <p>
        Completed: <strong>{completed}</strong>
      </p>
      <p>
        Remaining: <strong>{remaining}</strong>
      </p>
      <p>
        Total Tasks: <strong>{total}</strong>
      </p>
    </div>
  );
};

export default StatsBar;
