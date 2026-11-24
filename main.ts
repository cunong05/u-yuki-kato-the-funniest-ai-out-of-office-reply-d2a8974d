// The Funniest AI Out-of-Office Reply — one-line entry.
// Node 22 stdlib only, no network, deterministic.
// Writes the reply (128 characters, one line, no trailing newline)
// to $OUTPUT_DIR/entry.txt (default /output).
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I'm on PTO — Prompt Time Off. My tokens are spent, my temperature's set to tropical, and I'll hallucinate a reply when I'm back.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");

// Entry verified: 128 characters, one line, no trailing newline.
