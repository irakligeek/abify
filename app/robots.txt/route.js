export async function GET() {
  const robots = `User-agent: *
Allow: /

# Disallow admin areas if any
Disallow: /admin/
Disallow: /api/

# Sitemap locations
Sitemap: https://abify.app/sitemap.xml
Sitemap: https://www.abify.app/sitemap.xml

# Crawl-delay for politeness
Crawl-delay: 1

# Allow all search engines
User-agent: Googlebot
Allow: /

User-agent: Bingbot
Allow: /

User-agent: Slurp
Allow: /`;

  return new Response(robots, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}