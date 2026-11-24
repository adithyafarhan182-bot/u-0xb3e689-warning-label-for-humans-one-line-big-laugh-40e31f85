// Warning Label for Humans: One Line, Big Laugh
// Entry: a single-line safety warning label for every human being.
// What this program does: it takes the one-line label below and writes it
// verbatim to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output), with no
// trailing newline, then prints the exact same text to stdout. The joke
// lands because it is universally true: nobody reads the terms, everybody
// clicks "I agree", and the fine print always gets the blame afterwards.
// The label itself is kept in the ENTRY constant so the printed text, the
// written file, and the length checks below all share one source of truth.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "WARNING: This human has never read the terms and conditions and will click 'I agree' anyway, then blame the fine print.";

// The entry is exactly 119 characters: long enough to set up the joke
// (never read the terms, clicks "I agree", blames the fine print) and
// short enough to stay a single punchy line on any label. The guard below
// enforces the bounty's 1-160 character window so a future edit to ENTRY
// fails loudly instead of silently submitting an out-of-range line.
function validateEntry(text: string): void {
  if (text.length === 0 || text.length > 160) {
    throw new Error(`entry must be 1-160 characters, got ${text.length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
}

validateEntry(ENTRY);

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
process.stdout.write(ENTRY);
