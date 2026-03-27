import { SummaryCard } from './components/SummaryCard.jsx';
import { ProductTable } from './components/ProductTable.jsx';
import { JobList } from './components/JobList.jsx';

const products = [
  { title: 'Glow Serum', status: 'Ready', theme: 'Premium Soft' },
  { title: 'Linen Shirt', status: 'Needs video', theme: 'Energetic Clean' },
  { title: 'Coffee Grinder', status: 'Queued', theme: 'Clean Commerce' },
];

const jobs = [
  { id: 'job_1001', product: 'Glow Serum', status: 'done' },
  { id: 'job_1002', product: 'Linen Shirt', status: 'queued' },
  { id: 'job_1003', product: 'Coffee Grinder', status: 'processing' },
];

export default function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">LumiShop</div>
        <nav>
          <a href="#">Dashboard</a>
          <a href="#">Products</a>
          <a href="#">Jobs</a>
          <a href="#">Themes</a>
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

        <section className="summary-grid">
          <SummaryCard label="Products synced" value="124" />
          <SummaryCard label="Videos live" value="53" />
          <SummaryCard label="Jobs queued" value="12" />
          <SummaryCard label="Active theme" value="Black Friday" />
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
      </main>
    </div>
  );
}
