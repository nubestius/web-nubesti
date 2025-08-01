import parseTomlToJson from "@/lib/utils/parseTomlToJson";
import type { APIRoute } from "astro";
const config = parseTomlToJson("./src/config/config.toml");

const { enable, disallow } = config.seo.robots_txt;

const getRobotsTxt = (
  sitemapURL: URL,
) => `# Robots.txt file for controlling web crawler access
# Security-enhanced configuration for Nubesti

User-agent: *

# Allowed pages
Allow: /

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
Disallow: /.well-known/

# Disallowed pages from configuration
${disallow.map((item: string) => `Disallow: ${item}`).join("\n")}

# Crawl delay for better server performance
Crawl-delay: 1

# Sitemap location
Sitemap: ${sitemapURL.href}
`;

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL("sitemap-index.xml", site);
  return enable
    ? new Response(getRobotsTxt(sitemapURL))
    : new Response(null, { status: 404 });
};
