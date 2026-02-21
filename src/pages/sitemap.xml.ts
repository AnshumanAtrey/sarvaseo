export const prerender = false;

import type { APIRoute } from "astro";
import { getAllPublishedPosts } from "../lib/blog";

export const GET: APIRoute = async () => {
  const posts = await getAllPublishedPosts();

  const staticPages = [
    { loc: "https://sarvaseo.atrey.dev/", priority: "1.0", changefreq: "weekly" },
    { loc: "https://sarvaseo.atrey.dev/blog", priority: "0.8", changefreq: "daily" },
    { loc: "https://sarvaseo.atrey.dev/privacy-policy", priority: "0.3", changefreq: "monthly" },
  ];

  const blogEntries = posts.map((post) => {
    const lastmod = post.updatedAt?.toDate?.()?.toISOString?.()?.split("T")[0]
      || post.createdAt?.toDate?.()?.toISOString?.()?.split("T")[0]
      || new Date().toISOString().split("T")[0];
    return {
      loc: `https://sarvaseo.atrey.dev/blog/${post.slug}`,
      lastmod,
      priority: "0.7",
      changefreq: "monthly",
    };
  });

  const allEntries = [...staticPages, ...blogEntries];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allEntries
  .map(
    (entry) => `  <url>
    <loc>${entry.loc}</loc>${entry.lastmod ? `\n    <lastmod>${entry.lastmod}</lastmod>` : ""}
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
