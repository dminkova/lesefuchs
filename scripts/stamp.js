// Adds ?v=<content hash> to local CSS/JS links so browsers load updates right after a reload.
const fs = require("fs"), crypto = require("crypto"), path = require("path");
const root = path.join(__dirname, "..");
const pages = fs.readdirSync(root).filter(f => f.endsWith(".html"));
for (const page of pages) {
  const file = path.join(root, page);
  const src = fs.readFileSync(file, "utf8");
  const out = src.replace(/((?:src|href)=")((?:js|css)\/[^"?]+\.(?:js|css))(\?v=[0-9a-f]+)?"/g, (m, a, p) => {
    const h = crypto.createHash("sha1").update(fs.readFileSync(path.join(root, p))).digest("hex").slice(0, 8);
    return `${a}${p}?v=${h}"`;
  });
  if (out !== src) { fs.writeFileSync(file, out); console.log("stamped", page); }
}
