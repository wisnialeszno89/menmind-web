import test from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function visit(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return visit(full);
    return /\.(tsx?|jsx?|md)$/.test(entry.name) ? [full] : [];
  });
}

test("MenMind source does not embed or redirect to NaviMind", () => {
  const files = [...visit(path.join(root, "src")), path.join(root, "Header.tsx")];
  const forbidden = [
    /navimind\.app/i,
    /(?:href|src)\s*=\s*["'`]\/navimind(?:[?"'`]|$)/i,
    /\bNavimindEmbed\b/,
    /\bNaviMindButton\b/,
    /\bnavimindLink\b/,
    /\bmenmind_navimind_uid\b/,
  ];
  const matches = [];
  for (const filename of files) {
    const text = fs.readFileSync(filename, "utf8");
    for (const pattern of forbidden) {
      if (pattern.test(text)) matches.push(path.relative(root, filename));
    }
  }
  assert.deepEqual([...new Set(matches)].sort(), []);
});

test("Former NaviMind URL now stays within MenMind", () => {
  const content = fs.readFileSync(
    path.join(root, "src/app/navimind/page.tsx"), "utf8"
  );
  assert.match(content, /redirect\("\/narzedzia"\)/);
  assert.doesNotMatch(content, /https?:\/\//);
});

test("Navimind-specific integration modules are absent", () => {
  for (const rel of [
    "src/features/navimind/NaviMindButton.tsx",
    "src/features/navimind/NavimindEmbed.tsx",
    "src/lib/navimind.ts",
  ]) {
    assert.equal(fs.existsSync(path.join(root, rel)), false, rel);
  }
});
