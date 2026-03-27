import { collections } from '../store/firestore.js';

export async function createVideoRecord({ job, product }) {
  const id = `video_${job.id}`;
  const video = {
    id,
    jobId: job.id,
    productId: product?.id || product?.title || 'unknown-product',
    productTitle: product?.title || 'Untitled product',
    status: 'draft',
    placement: 'product-detail',
    videoUrl: `https://cdn.example.com/videos/${job.id}.mp4`,
    posterUrl: `https://cdn.example.com/posters/${job.id}.jpg`,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  await collections.videos().doc(id).set(video, { merge: true });
  return video;
}

export async function listVideos(limit = 20) {
  const snapshot = await collections.videos().limit(limit).get();
  return snapshot.docs.map((doc) => doc.data());
}

export async function publishVideoToProductDetail({ videoId, productId }) {
  const publishedAt = new Date().toISOString();

  await collections.videos().doc(videoId).set(
    {
      status: 'published',
      updatedAt: publishedAt,
      publishedAt,
    },
    { merge: true },
  );

  const mapping = {
    id: `${productId}__${videoId}`,
    productId,
    videoId,
    placement: 'product-detail',
    isActive: true,
    publishedAt,
  };

  await collections.productVideoMappings().doc(mapping.id).set(mapping, {
    merge: true,
  });

  return mapping;
}

export async function unpublishVideoFromProductDetail({ videoId, productId }) {
  const mappingId = `${productId}__${videoId}`;

  await collections.productVideoMappings().doc(mappingId).set(
    {
      isActive: false,
      unpublishedAt: new Date().toISOString(),
    },
    { merge: true },
  );

  await collections.videos().doc(videoId).set(
    {
      status: 'draft',
      updatedAt: new Date().toISOString(),
    },
    { merge: true },
  );

  return { mappingId, isActive: false };
}

export async function getPublishedVideoForProduct(productId) {
  const mappingSnapshot = await collections.productVideoMappings()
    .where('productId', '==', productId)
    .where('isActive', '==', true)
    .limit(1)
    .get();

  if (mappingSnapshot.empty) {
    return null;
  }

  const mapping = mappingSnapshot.docs[0].data();
  const videoDoc = await collections.videos().doc(mapping.videoId).get();

  if (!videoDoc.exists) {
    return null;
  }

  return {
    mapping,
    video: videoDoc.data(),
  };
}
