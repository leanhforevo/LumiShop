import { collections } from '../store/firestore.js';

export async function saveShopInstallation({ shop, accessToken = '', scopes = '' }) {
  const ref = collections.shops().doc(shop);
  await ref.set(
    {
      shop,
      accessToken,
      scopes,
      installedAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
    { merge: true },
  );

  return { shop, scopes };
}

export async function listShops() {
  const snapshot = await collections.shops().limit(20).get();
  return snapshot.docs.map((doc) => doc.data());
}
