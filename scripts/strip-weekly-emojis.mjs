/**
 * Removes emoji / pictographic characters from weekly research markdown.
 * Run: node scripts/strip-weekly-emojis.mjs
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const WEEKLYS = path.join(__dirname, "..", "weeklys");

function stripEmojis(s) {
  return (
    s
      // Emoji and pictographs (Unicode 15+)
      .replace(/\p{Extended_Pictographic}/gu, "")
      // Leftover joiners / variation selectors often paired with emoji
      .replace(/\uFE0F/g, "")
      .replace(/\u200D/g, "")
      // Normalize spacing after removals
      .replace(/[ \t]{2,}/g, " ")
      .replace(/[ \t]+$/gm, "")
      // Fix bold markers broken when emoji sat inside **...** or before labels
      .replace(/\*\* Risk Notes:\*\*/g, "**Risk Notes:**")
      .replace(/^ \*\*Important:/gm, "**Important:")
      .replace(/ \*\*$/gm, "**")
  );
}

for (const name of fs.readdirSync(WEEKLYS)) {
  if (!name.endsWith(".md")) continue;
  const fp = path.join(WEEKLYS, name);
  const raw = fs.readFileSync(fp, "utf8");
  const next = stripEmojis(raw);
  if (next !== raw) fs.writeFileSync(fp, next, "utf8");
}

console.log("Done. Stripped pictographs from weeklys/*.md");
