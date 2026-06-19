const assert = require("node:assert/strict");
const fs = require("node:fs");

const html = fs.readFileSync("index.html", "utf8");
const script = fs.readFileSync("site.js", "utf8");

const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map((match) => match[1]);
const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
assert.deepEqual([...new Set(duplicateIds)], [], "HTML IDs must be unique.");

const localReferences = [...html.matchAll(/(?:src|href)="([^"]+)"/g)]
  .map((match) => match[1])
  .filter((value) => !/^(?:https?:|#|mailto:)/.test(value))
  .map((value) => value.split("?")[0]);
const missingFiles = localReferences.filter((value) => !fs.existsSync(value));
assert.deepEqual(missingFiles, [], "Every local HTML asset must exist.");

const translationKeys = [
  ...html.matchAll(/data-i18n(?:-alt)?="([^"]+)"/g)
].map((match) => match[1]);
const missingTranslations = [...new Set(
  translationKeys.filter((key) => !new RegExp(`\\b${key}\\s*:`).test(script))
)];
assert.deepEqual(missingTranslations, [], "Every data-i18n key must exist in site.js.");

assert.match(html, /softwareVersion": "0\.3\.0"/);
assert.match(html, /SignalWallPortable-v0\.3\.0-win-x64\.zip/);
assert.match(script, /SignalWallPortable-v0\.3\.0-win-x64\.zip/);
assert.ok(fs.existsSync(".well-known/security.txt"));
assert.ok(fs.existsSync("robots.txt"));
assert.ok(fs.existsSync("sitemap.xml"));

console.log(`Site checks passed with ${new Set(translationKeys).size} translation keys.`);
