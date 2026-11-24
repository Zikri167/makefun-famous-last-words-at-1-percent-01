// Famous Last Words at 1 Percent — make.fun entry.
// Writes the phone's one-line last words to /output/entry.txt
// (or $OUTPUT_DIR/entry.txt when set). Node 22, stdlib only,
// fully deterministic: the same line on every run, no network,
// no randomness, no clock, no environment-dependent output.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My battery died the exact second you needed directions. I planned this for months.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
const outPath = join(outDir, "entry.txt");

// Count characters per code point, so astral characters (if any)
// count as one character each, matching how the gate reads text.
const charCount = Array.from(LINE).length;
if (charCount < 1 || charCount > 199) {
  throw new Error(`entry must be 1-199 characters, got ${charCount}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single line");
}
// No control characters: the line must survive as plain one-line text.
for (const ch of LINE) {
  if (ch.codePointAt(0)! < 0x20 || ch.codePointAt(0) === 0x7f) {
    throw new Error("entry must not contain control characters");
  }
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outPath, LINE, "utf8");

// Round-trip check: what landed on disk must be exactly the line.
const written = readFileSync(outPath, "utf8");
if (written !== LINE) {
  throw new Error("entry.txt round-trip mismatch");
}
