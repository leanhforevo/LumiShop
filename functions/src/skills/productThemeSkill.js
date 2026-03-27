export function resolveProductTheme({ product = {}, eventStyle = {} } = {}) {
  const tags = Array.isArray(product.tags) ? product.tags : [];

  if (tags.includes('beauty')) {
    return {
      templateCode: 'default-product-video',
      tone: 'premium-soft',
      ...eventStyle,
    };
  }

  if (tags.includes('fashion')) {
    return {
      templateCode: 'default-product-video',
      tone: 'energetic-clean',
      ...eventStyle,
    };
  }

  return {
    templateCode: 'default-product-video',
    tone: 'clean-commerce',
    ...eventStyle,
  };
}
