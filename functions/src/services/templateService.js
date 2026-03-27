import { defaultProductVideoTemplate } from '../templates/defaultProductVideoTemplate.js';
import { resolveEventStyle } from '../skills/eventStylingSkill.js';
import { resolveProductTheme } from '../skills/productThemeSkill.js';

export function buildTemplateContext(product = {}) {
  const eventStyle = resolveEventStyle(new Date());
  const theme = resolveProductTheme({ product, eventStyle });

  return {
    template: defaultProductVideoTemplate,
    theme,
    variables: {
      title: product.title || 'Untitled product',
      price: product.price || '$0.00',
      featuredImage: product.featuredImage || '',
    },
  };
}
