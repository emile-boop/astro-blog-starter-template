import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ site }) => {
  const baseUrl = site?.toString().replace(/\/$/, '') ?? 'https://emilesavoie.com';
  
  // Vos pages statiques sans barre oblique
  const staticPages = [
    '',
    '/biography',
    '/portfolio',
    '/teaching',
    '/contact',
    '/fr',
    '/fr/biography',
    '/fr/portfolio',
    '/fr/teaching',
    '/fr/contact',
  ];

  const urls = staticPages.map(path => ({
    url: `${baseUrl}${path}`,
    lastmod: new Date().toISOString(),
  }));

  // Ajoutez vos articles de blog si applicable
  const posts = await getCollection('blog');
  for (const post of posts) {
    urls.push({
      url: `${baseUrl}/blog/${post.slug}`,
      lastmod: post.data.updatedDate?.toISOString() ?? post.data.date.toISOString(),
    });
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(u => `  <url>
    <loc>${u.url}</loc>
    <lastmod>${u.lastmod}</lastmod>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: { 'Content-Type': 'application/xml' }
  });
};
