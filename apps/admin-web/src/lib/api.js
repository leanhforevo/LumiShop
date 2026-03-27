import { config } from './config.js';

export async function fetchHealth() {
  const response = await fetch(`${config.apiBaseUrl}/health`);
  return response.json();
}

export async function fetchJobs() {
  const response = await fetch(`${config.apiBaseUrl}/jobs`);
  return response.json();
}

export async function fetchShops() {
  const response = await fetch(`${config.apiBaseUrl}/shops`);
  return response.json();
}
