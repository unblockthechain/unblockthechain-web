import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const weeklysDir = path.join(root, "weeklys");
const publicDir = path.join(root, "public");

const site = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://unblockthechain.com"
).replace(/\/$/, "");

const entries = [
  { loc: `${site}/`, changefreq: "weekly", priority: "1.0" },
  { loc: `${site}/research`, changefreq: "weekly", priority: "0.9" },
  { loc: `${site}/llms.txt`, changefreq: "monthly", priority: "0.4" },
];

if (fs.existsSync(weeklysDir)) {
  const files = fs
    .readdirSync(weeklysDir)
    .filter((f) => f.endsWith(".md"))
    .sort()
    .reverse();
  for (const f of files) {
    const slug = f.replace(/\.md$/, "");
    entries.push({
      loc: `${site}/research/${encodeURIComponent(slug)}`,
      changefreq: "monthly",
      priority: "0.7",
    });
  }
}

const lastmod = new Date().toISOString().slice(0, 10);

const urlset = entries
  .map(
    (e) => `  <url>
    <loc>${e.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`
  )
  .join("\n");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlset}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Disallow: /studio

Sitemap: ${site}/sitemap.xml
`;

fs.mkdirSync(publicDir, { recursive: true });
fs.writeFileSync(path.join(publicDir, "sitemap.xml"), xml);
fs.writeFileSync(path.join(publicDir, "robots.txt"), robots);
console.log(
  `Wrote public/sitemap.xml (${entries.length} URLs) and public/robots.txt for ${site}`
);
