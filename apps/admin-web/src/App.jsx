import { useEffect, useState } from 'react';
import {
  Badge,
  BlockStack,
  Box,
  Button,
  Card,
  InlineGrid,
  InlineStack,
  Layout,
  LegacyCard,
  Page,
  Text,
  DataTable,
  List,
} from '@shopify/polaris';
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

function MetricCard({ label, value }) {
  return (
    <Card>
      <BlockStack gap="200">
        <Text as="span" tone="subdued" variant="bodySm">
          {label}
        </Text>
        <Text as="h3" variant="headingLg">
          {value}
        </Text>
      </BlockStack>
    </Card>
  );
}

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
        // keep fallback UI until API is fully wired
      }
    }

    bootstrap();
  }, []);

  const productRows = products.map((product) => [
    product.title,
    product.status,
    product.theme,
  ]);

  return (
    <Page
      title="LumiShop"
      subtitle="Generate lightweight, event-aware product videos for Shopify product detail pages."
      primaryAction={{ content: 'Generate videos' }}
    >
      <Layout>
        <Layout.Section>
          <Card>
            <InlineStack align="space-between" blockAlign="center">
              <Text as="h2" variant="headingMd">
                Admin status
              </Text>
              <Badge tone={health?.status === 'healthy' ? 'success' : 'attention'}>
                API {health?.status || 'unknown'}
              </Badge>
            </InlineStack>
            <Box paddingBlockStart="300">
              <InlineGrid columns={{ xs: 1, md: 3 }} gap="300">
                <Card>
                  <Text as="p" variant="bodySm" tone="subdued">
                    Installed shops
                  </Text>
                  <Text as="p" variant="headingMd">
                    {shops.length}
                  </Text>
                </Card>
                <Card>
                  <Text as="p" variant="bodySm" tone="subdued">
                    Jobs tracked
                  </Text>
                  <Text as="p" variant="headingMd">
                    {jobs.length}
                  </Text>
                </Card>
                <Card>
                  <Text as="p" variant="bodySm" tone="subdued">
                    Videos tracked
                  </Text>
                  <Text as="p" variant="headingMd">
                    {videos.length}
                  </Text>
                </Card>
              </InlineGrid>
            </Box>
          </Card>
        </Layout.Section>

        <Layout.Section>
          <InlineGrid columns={{ xs: 1, md: 4 }} gap="300">
            <MetricCard label="Products synced" value="124" />
            <MetricCard label="Videos draft/live" value={String(videos.length)} />
            <MetricCard label="Jobs queued" value={String(jobs.length)} />
            <MetricCard label="Installed shops" value={String(shops.length)} />
          </InlineGrid>
        </Layout.Section>

        <Layout.Section>
          <InlineGrid columns={{ xs: 1, md: 2 }} gap="300">
            <LegacyCard title="Products" sectioned>
              <BlockStack gap="300">
                <InlineStack align="space-between">
                  <Text as="span" variant="bodyMd" tone="subdued">
                    Product candidates for video generation
                  </Text>
                  <Button size="slim">Sync</Button>
                </InlineStack>
                <DataTable
                  columnContentTypes={['text', 'text', 'text']}
                  headings={['Product', 'Status', 'Theme']}
                  rows={productRows}
                />
              </BlockStack>
            </LegacyCard>

            <LegacyCard title="Recent jobs" sectioned>
              <List>
                {jobs.map((job) => (
                  <List.Item key={job.id}>
                    <InlineStack align="space-between">
                      <Text as="span" variant="bodyMd">
                        {job.product}
                      </Text>
                      <Badge>{job.status}</Badge>
                    </InlineStack>
                  </List.Item>
                ))}
              </List>
            </LegacyCard>
          </InlineGrid>
        </Layout.Section>

        <Layout.Section>
          <InlineGrid columns={{ xs: 1, md: 2 }} gap="300">
            <LegacyCard title="Video publishing" sectioned>
              <BlockStack gap="300">
                {videos.map((video) => (
                  <Card key={video.id}>
                    <InlineStack align="space-between" blockAlign="center">
                      <BlockStack gap="100">
                        <Text as="h3" variant="bodyMd" fontWeight="semibold">
                          {video.productTitle}
                        </Text>
                        <Text as="span" variant="bodySm" tone="subdued">
                          {video.id}
                        </Text>
                      </BlockStack>
                      <Badge tone={video.status === 'published' ? 'success' : 'info'}>
                        {video.status}
                      </Badge>
                    </InlineStack>
                  </Card>
                ))}
              </BlockStack>
            </LegacyCard>

            <LegacyCard title="Storefront preview" sectioned>
              <BlockStack gap="300">
                <InlineStack align="space-between" blockAlign="center">
                  <Text as="span" variant="bodyMd">
                    Product detail page only
                  </Text>
                  <Badge tone="magic">Storefront</Badge>
                </InlineStack>
                <Box
                  background="bg-surface-secondary"
                  borderRadius="300"
                  padding="600"
                  minHeight="180px"
                >
                  <BlockStack gap="200" align="center">
                    <Text as="h3" variant="headingMd" alignment="center">
                      LumiShop video block area
                    </Text>
                    <Text as="p" variant="bodyMd" tone="subdued" alignment="center">
                      This clip is intended to render on the product detail page
                      without replacing the merchant&apos;s base media gallery.
                    </Text>
                  </BlockStack>
                </Box>
              </BlockStack>
            </LegacyCard>
          </InlineGrid>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
