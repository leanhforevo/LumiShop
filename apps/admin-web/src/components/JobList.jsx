export function JobList({ jobs = [] }) {
  return (
    <ul className="job-list">
      {jobs.map((job) => (
        <li key={job.id}>
          <div>
            <strong>{job.product}</strong>
            <span>{job.id}</span>
          </div>
          <span className={`status status-${job.status}`}>{job.status}</span>
        </li>
      ))}
    </ul>
  );
}
