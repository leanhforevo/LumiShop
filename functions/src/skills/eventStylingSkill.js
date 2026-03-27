const seasonalRules = [
  {
    name: 'halloween',
    when: ({ month }) => month === 10,
    apply: {
      theme: 'halloween',
      effects: ['fog', 'orange_glow'],
      palette: ['#ff6600', '#111111'],
    },
  },
  {
    name: 'black-friday',
    when: ({ month, day }) => month === 11 && day >= 1 && day <= 30,
    apply: {
      theme: 'black-friday',
      effects: ['flash', 'price_burst'],
      palette: ['#000000', '#f5c542'],
    },
  },
  {
    name: 'christmas',
    when: ({ month }) => month === 12,
    apply: {
      theme: 'christmas',
      effects: ['snow', 'warm_glow'],
      palette: ['#0f6b3f', '#ffffff', '#d62828'],
    },
  },
];

export function resolveEventStyle(date = new Date()) {
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();

  for (const rule of seasonalRules) {
    if (rule.when({ month, day })) {
      return rule.apply;
    }
  }

  return {
    theme: 'default',
    effects: [],
    palette: ['#111111', '#ffffff'],
  };
}
