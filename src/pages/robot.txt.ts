import parseTomlToJson from "@/lib/utils/parseTomlToJson";
import type { APIRoute } from "astro";
const config = parseTomlToJson("./src/config/config.toml");

const { enable, disallow } = config.seo.robots_txt;

const getRobotsTxt = (
  sitemapURL: URL,
) => `# Robots.txt file for Nubesti - AI-Powered Cybersecurity Platform
# SEO-optimized configuration for better search engine indexing

User-agent: *

# Allowed pages - Prioritize important content
Allow: /
Allow: /en/
Allow: /es/ 
Allow: /fr/
Allow: /pricing/
Allow: /contact/
Allow: /blog/
Allow: /integration/

# Security - Disallow sensitive paths
Disallow: /admin/
Disallow: /api/
Disallow: /.env
Disallow: /config/
Disallow: /logs/
Disallow: /backup/
Disallow: /uploads/
Disallow: /temp/
Disallow: /.git/
Disallow: /.svn/
Disallow: /node_modules/
Disallow: /_astro/

# SEO - Disallow duplicate content and low-value pages
Disallow: /search?
Disallow: /*?utm_*
Disallow: /*?ref=*
Disallow: /*?fbclid=*
Disallow: /404/
Disallow: /draft/

# Disallowed pages from configuration
${disallow.map((item: string) => `Disallow: ${item}`).join("\n")}

# Special crawlers
User-agent: Googlebot
Allow: /
Crawl-delay: 1

User-agent: Bingbot  
Allow: /
Crawl-delay: 1

User-agent: facebookexternalhit
Allow: /

User-agent: Twitterbot
Allow: /

# Block aggressive crawlers
User-agent: AhrefsBot
Disallow: /

User-agent: MJ12bot
Disallow: /

User-agent: SemrushBot
Crawl-delay: 10

# Crawl delay for better server performance and SEO
Crawl-delay: 1

# Sitemap location for search engines
Sitemap: ${sitemapURL.href}
`;

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL("sitemap-index.xml", site);
  return enable
    ? new Response(getRobotsTxt(sitemapURL))
    : new Response(null, { status: 404 });
};
