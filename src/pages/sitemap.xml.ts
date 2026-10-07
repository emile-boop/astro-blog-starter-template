---
const site = Astro.site?.toString() ?? 'https://emilesavoie.com/';

const pages = [
  { url: '', priority: 1.0 },
  { url: 'about', priority: 0.8 },
  { url: 'biography', priority: 0.8 },
  { url: 'portfolio', priority: 0.9 },
  { url: 'teaching', priority: 0.8 },
  { url: 'contact', priority: 0.7 },
  { url: 'fr/biography', priority: 0.8 },
  { url: 'fr/portfolio', priority: 0.9 },
];

const lastmod = new Date().toISOString();
---
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  {pages.map((page) => (
    <url>
      <loc>{site}{page.url}</loc>
      <lastmod>{lastmod}</lastmod>
      <priority>{page.priority}</priority>
    </url>
  ))}
</urlset>
