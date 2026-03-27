export function resolveCampaignTheme({ month }) {
  if (month === 10) return 'halloween';
  if (month === 11) return 'black-friday';
  if (month === 12) return 'christmas';
  return 'default';
}
