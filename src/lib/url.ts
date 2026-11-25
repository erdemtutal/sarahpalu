// Prefix an internal path with the site's base path.
// The base is "/" on the real domain, and "/sarahpalu" on the github.io preview.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const u = (path: string) => (path.startsWith('/') ? base + path : path);
export const baseUrl = base;
