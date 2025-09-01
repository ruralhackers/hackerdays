import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const baseUrl = 'https://hackerdays.org';
  
  // Define all your pages with their locales
  const pages = [
    { path: '/', locales: ['es', 'en', 'gl'] },
    { path: '/hacker-log', locales: ['es', 'en', 'gl'] }
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages.map(page => {
  return page.locales.map(locale => {
    const url = locale === 'es' ? `${baseUrl}${page.path}` : `${baseUrl}/${locale}${page.path}`;
    const urlClean = url.replace(/\/+$/, '') || baseUrl; // Remove trailing slashes except for root
    
    return `  <url>
    <loc>${urlClean}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${page.path === '/' ? '1.0' : '0.8'}</priority>${page.locales.map(altLocale => {
      const altUrl = altLocale === 'es' ? `${baseUrl}${page.path}` : `${baseUrl}/${altLocale}${page.path}`;
      const altUrlClean = altUrl.replace(/\/+$/, '') || baseUrl;
      return `
    <xhtml:link rel="alternate" hreflang="${altLocale}" href="${altUrlClean}" />`;
    }).join('')}
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}${page.path}" />
  </url>`;
  }).join('\n');
}).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml'
    }
  });
}; 