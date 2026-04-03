import fs from "fs";
import path from "path";

const WEEKLYS_DIR = path.join(process.cwd(), "weeklys");

export interface WeeklyPost {
  slug: string;
  date: string;
  title: string;
  content: string;
}

function extractContent(raw: string): string {
  // Some files have preamble before the actual report.
  // The report always starts with "# ⛓️"
  const marker = "# ⛓️";
  const idx = raw.indexOf(marker);
  return idx >= 0 ? raw.slice(idx) : raw;
}

function extractDate(filename: string): string {
  const match = filename.match(/(\d{4}-\d{2}-\d{2})/);
  return match ? match[1] : "";
}

function formatDate(dateStr: string): string {
  const [y, m, d] = dateStr.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function getAllWeeklys(): WeeklyPost[] {
  const files = fs
    .readdirSync(WEEKLYS_DIR)
    .filter((f) => f.endsWith(".md"))
    .sort()
    .reverse();

  return files.map((filename) => {
    const raw = fs.readFileSync(path.join(WEEKLYS_DIR, filename), "utf-8");
    const content = extractContent(raw);
    const date = extractDate(filename);
    const slug = filename.replace(/\.md$/, "");

    return {
      slug,
      date,
      title: `Weekly Crypto Research — ${formatDate(date)}`,
      content,
    };
  });
}

export function getWeeklyBySlug(slug: string): WeeklyPost | undefined {
  const filename = `${slug}.md`;
  const filepath = path.join(WEEKLYS_DIR, filename);

  if (!fs.existsSync(filepath)) return undefined;

  const raw = fs.readFileSync(filepath, "utf-8");
  const content = extractContent(raw);
  const date = extractDate(filename);

  return {
    slug,
    date,
    title: `Weekly Crypto Research — ${formatDate(date)}`,
    content,
  };
}
