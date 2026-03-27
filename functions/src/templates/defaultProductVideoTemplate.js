export const defaultProductVideoTemplate = {
  code: 'default-product-video',
  name: 'Default Product Video',
  durationSec: 8,
  scenes: [
    { type: 'image_zoom', asset: 'product_main', from: 0, to: 2.5 },
    { type: 'title_overlay', text: '{{title}}', from: 0.5, to: 3.5 },
    { type: 'price_badge', text: '{{price}}', from: 2.2, to: 5.5 },
    { type: 'cta', text: 'Shop now', from: 5.5, to: 8 },
  ],
};
