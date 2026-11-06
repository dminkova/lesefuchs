const test = require("node:test"), assert = require("node:assert"), fs = require("fs"), crypto = require("crypto"), path = require("path");
const root = path.join(__dirname, "..");
test("CSS/JS links carry the current version stamp (run: npm run stamp)", () => {
  for (const page of fs.readdirSync(root).filter(f => f.endsWith(".html"))) {
    const src = fs.readFileSync(path.join(root, page), "utf8");
    for (const m of src.matchAll(/(?:src|href)="((?:js|css)\/[^"?]+\.(?:js|css))(?:\?v=([0-9a-f]+))?"/g)) {
      const h = crypto.createHash("sha1").update(fs.readFileSync(path.join(root, m[1]))).digest("hex").slice(0, 8);
      assert.equal(m[2], h, `${page}: ${m[1]} stamp is out of date`);
    }
  }
});
