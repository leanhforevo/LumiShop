export function buildTimeline({ title = 'Untitled product', price = '$0.00' } = {}) {
  return {
    durationSec: 8,
    scenes: [
      { type: 'image_zoom', from: 0, to: 2.5 },
      { type: 'title_overlay', text: title, from: 0.5, to: 3.5 },
      { type: 'price_badge', text: price, from: 2.2, to: 5.5 },
      { type: 'cta', text: 'Shop now', from: 5.5, to: 8 },
    ],
  };
}
