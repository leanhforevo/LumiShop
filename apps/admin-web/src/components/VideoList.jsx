export function VideoList({ videos = [] }) {
  return (
    <ul className="video-list">
      {videos.map((video) => (
        <li key={video.id}>
          <div>
            <strong>{video.productTitle}</strong>
            <span>{video.id}</span>
          </div>
          <span className={`status status-${video.status}`}>{video.status}</span>
        </li>
      ))}
    </ul>
  );
}
