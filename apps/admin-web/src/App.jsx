import { useEffect, useState } from 'react';
import { SummaryCard } from './components/SummaryCard.jsx';
import { ProductTable } from './components/ProductTable.jsx';
import { JobList } from './components/JobList.jsx';
import { VideoList } from './components/VideoList.jsx';
import { StatusBanner } from './components/StatusBanner.jsx';
import { StorefrontPreviewCard } from './components/StorefrontPreviewCard.jsx';
import { fetchHealth, fetchJobs, fetchShops, fetchVideos } from './lib/api.js';

const products = [
  { title: 'Glow Serum', status: 'Ready', theme: 'Premium Soft' },
  { title: 'Linen Shirt', status: 'Needs video', theme: 'Energetic Clean' },
  { title: 'Coffee Grinder', status: 'Queued', theme: 'Clean Commerce' },
];

const fallbackJobs = [
  { id: 'job_1001', product: 'Glow Serum', status: 'done' },
  { id: 'job_1002', product: 'Linen Shirt', status: 'queued' },
  { id: 'job_1003', product: 'Coffee Grinder', status: 'processing' },
];

const fallbackVideos = [
  { id: 'video_job_1001', productTitle: 'Glow Serum', status: 'draft' },
  { id: 'video_job_1002', productTitle: 'Linen Shirt', status: 'published' },
];

export default function App() {
  const [health, setHealth] = useState(null);
  const [jobs, setJobs] = useState(fallbackJobs);
  const [shops, setShops] = useState([]);
  const [videos, setVideos] = useState(fallbackVideos);

  useEffect(() => {
    async function bootstrap() {
      try {
        const [healthData, jobsData, shopsData, videosData] = await Promise.all([
          fetchHealth(),
          fetchJobs(),
          fetchShops(),
          fetchVideos(),
        ]);

        setHealth(healthData);
        if (Array.isArray(jobsData?.jobs) && jobsData.jobs.length) {
          setJobs(jobsData.jobs);
        }
        if (Array.isArray(shopsData?.shops)) {
          setShops(shopsData.shops);
        }
        if (Array.isArray(videosData?.videos) && videosData.videos.length) {
          setVideos(videosData.videos);
        }
      } catch (_error) {
        // keep UI working with fallback data until API is connected
      }
    }

    bootstrap();
  }, []);

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">LumiShop</div>
        <nav>
          <a href="#">Dashboard</a>
          <a href="#">Products</a>
          <a href="#">Jobs</a>
          <a href="#">Videos</a>
          <a href="#">Storefront</a>
          <a href="#">Settings</a>
        </nav>
      </aside>

      <main className="content">
        <header className="hero">
          <div>
            <h1>Product video admin</h1>
            <p>
              Generate lightweight, event-aware product videos for Shopify.
            </p>
          </div>
          <button className="primary-btn">Generate videos</button>
        </header>

        <StatusBanner
          health={health}
          shopsCount={shops.length}
          jobsCount={jobs.length}
        />

        <section className="summary-grid">
          <SummaryCard label="Products synced" value="124" />
          <SummaryCard label="Videos draft/live" value={String(videos.length)} />
          <SummaryCard label="Jobs queued" value={String(jobs.length)} />
          <SummaryCard label="Installed shops" value={String(shops.length)} />
        </section>

        <section className="panel-grid">
          <div className="panel">
            <div className="panel-header">
              <h2>Products</h2>
              <button>Sync</button>
            </div>
            <ProductTable products={products} />
          </div>

          <div className="panel">
            <div className="panel-header">
              <h2>Recent jobs</h2>
              <button>View all</button>
            </div>
            <JobList jobs={jobs} />
          </div>
        </section>

        <section className="panel-grid lower-grid">
          <div className="panel">
            <div className="panel-header">
              <h2>Video publishing</h2>
              <button>Publish</button>
            </div>
            <VideoList videos={videos} />
          </div>

          <StorefrontPreviewCard />
        </section>
      </main>
    </div>
  );
}
