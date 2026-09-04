import type { APIRoute } from 'astro';

const pages = [
  { url: '/', lastmod: '2026-09-04', changefreq: 'monthly', priority: '1.0' },
  { url: '/biography', lastmod: '2026-09-04', changefreq: 'monthly', priority: '0.8' },
  { url: '/portfolio', lastmod: '2026-09-04', changefreq: 'monthly', priority: '0.9' },
  { url: '/teaching', lastmod: '2026-09-04', changefreq: 'monthly', priority: '0.8' },
  { url: '/contact', lastmod: '2026-09-04', changefreq: 'yearly', priority: '0.7' },
  { url: '/fr/', lastmod: '2026-09-04', changefreq: 'monthly', priority: '1.0' },
  { url: '/fr/biography', lastmod: '2026-09-04', changefreq: 'monthly', priority: '0.8' },
  { url: '/fr/portfolio', lastmod: '2026-09-04', changefreq: 'monthly', priority: '0.9' },
  { url: '/fr/teaching', lastmod: '2026-09-04', changefreq: 'monthly', priority: '0.8' },
  { url: '/fr/contact', lastmod: '2026-09-04', changefreq: 'yearly', priority: '0.7' },
];

export const GET: APIRoute = ({ site }) => {
  const baseUrl = site?.toString().replace(/\/$/, '') || 'https://emilesavoie.com';
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(body, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
