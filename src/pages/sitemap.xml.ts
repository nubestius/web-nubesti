import type { APIRoute } from "astro";

export const GET: APIRoute = async ({ params, request, site }) => {
  const currentDate = new Date().toISOString();
  
  // Define pages with their priorities and change frequencies
  const pages = [
    // English pages
    { url: "", priority: "1.0", changefreq: "weekly" },
    { url: "pricing", priority: "0.9", changefreq: "monthly" },
    { url: "integration", priority: "0.8", changefreq: "monthly" },
    { url: "contact", priority: "0.8", changefreq: "monthly" },
    { url: "faq", priority: "0.7", changefreq: "monthly" },
    { url: "changelog", priority: "0.6", changefreq: "weekly" },
    { url: "author", priority: "0.5", changefreq: "monthly" },
    { url: "tags", priority: "0.4", changefreq: "weekly" },
    { url: "categories", priority: "0.4", changefreq: "weekly" },
    
    // French pages
    { url: "fr", priority: "1.0", changefreq: "weekly" },
    { url: "fr/pricing", priority: "0.9", changefreq: "monthly" },
    { url: "fr/integration", priority: "0.8", changefreq: "monthly" },
    { url: "fr/contact", priority: "0.8", changefreq: "monthly" },
    { url: "fr/faq", priority: "0.7", changefreq: "monthly" },
    { url: "fr/changelog", priority: "0.6", changefreq: "weekly" },
    { url: "fr/author", priority: "0.5", changefreq: "monthly" },
    { url: "fr/tags", priority: "0.4", changefreq: "weekly" },
    { url: "fr/categories", priority: "0.4", changefreq: "weekly" },
    
    // Spanish pages
    { url: "es", priority: "1.0", changefreq: "weekly" },
    { url: "es/pricing", priority: "0.9", changefreq: "monthly" },
    { url: "es/integration", priority: "0.8", changefreq: "monthly" },
    { url: "es/contact", priority: "0.8", changefreq: "monthly" },
    { url: "es/faq", priority: "0.7", changefreq: "monthly" },
    { url: "es/changelog", priority: "0.6", changefreq: "weekly" },
    { url: "es/author", priority: "0.5", changefreq: "monthly" },
    { url: "es/tags", priority: "0.4", changefreq: "weekly" },
    { url: "es/categories", priority: "0.4", changefreq: "weekly" },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" 
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pages
  .map(
    (page) => `
  <url>
    <loc>${site}${page.url}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`,
  )
  .join("")}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
};
