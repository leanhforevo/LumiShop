export async function renderTemplateVideo(job) {
  return {
    status: 'mocked',
    output: {
      videoUrl: `https://cdn.example.com/videos/${job.id}.mp4`,
      posterUrl: `https://cdn.example.com/posters/${job.id}.jpg`,
    },
  };
}
