import { env } from '../config/env.js';

function buildUrl(path, params = {}) {
  const url = new URL(`${env.kingMmoBaseUrl}/${path}`);
  Object.entries({ ...params, api_key: env.kingMmoApiKey }).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      url.searchParams.set(key, String(value));
    }
  });
  return url.toString();
}

async function getJson(path, params = {}) {
  const response = await fetch(buildUrl(path, params));
  return response.json();
}

async function postForm(path, body = {}) {
  const response = await fetch(`${env.kingMmoBaseUrl}/${path}`, {
    method: 'POST',
    headers: {
      'content-type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      ...Object.fromEntries(
        Object.entries(body).map(([key, value]) => [key, String(value)]),
      ),
      api_key: env.kingMmoApiKey,
    }),
  });

  return response.json();
}

export const kingMmoClient = {
  getProfile: () => getJson('profile.php'),
  getProducts: () => getJson('products.php'),
  getProduct: (product) => getJson('product.php', { product }),
  getOrder: (order) => getJson('order.php', { order }),
  buyProduct: ({ id, amount, coupon = '' }) =>
    postForm('buy_product', {
      action: 'buyProduct',
      id,
      amount,
      coupon,
    }),
};
