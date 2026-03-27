export function StatusBanner({ health, shopsCount, jobsCount }) {
  return (
    <div className="status-banner">
      <div>
        <strong>API:</strong> {health?.status || 'unknown'}
      </div>
      <div>
        <strong>Shops:</strong> {shopsCount}
      </div>
      <div>
        <strong>Jobs:</strong> {jobsCount}
      </div>
    </div>
  );
}
