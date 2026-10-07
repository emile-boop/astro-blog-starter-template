import type { APIRoute } from 'astro';

export const GET: APIRoute = async ({ site }) => {
  const pages = [
    '',
    'portfolio',
    'biography',
    'teaching',
    'blog',
    'fr',
    'fr/portfolio',
    'fr/biography',
    'fr/teaching',
    'fr/blog',
  ];

  const lastmod = new Date().toISOString();
  const origin = site?.origin ?? 'https://emilesavoie.com';

  const urls = pages
    .map(
      (page) =>
        `  <url>\n    <loc>${origin}/${page}</loc>\n    <lastmod>${lastmod}</lastmod>\n  </url>`
    )
    .join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
