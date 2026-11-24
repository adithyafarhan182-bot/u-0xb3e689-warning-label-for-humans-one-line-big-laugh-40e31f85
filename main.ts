// Warning Label for Humans: One Line, Big Laugh
// Entry: a single-line safety warning label for every human being.
// Writes the label to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output),
// with no trailing newline, and prints it to stdout.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "WARNING: This human has never read the terms and conditions and will click 'I agree' anyway, then blame the fine print.";

if (ENTRY.length === 0 || ENTRY.length > 160) {
  throw new Error(`entry must be 1-160 characters, got ${ENTRY.length}`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
process.stdout.write(ENTRY);
