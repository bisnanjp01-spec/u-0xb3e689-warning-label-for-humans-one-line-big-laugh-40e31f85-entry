// Warning Label for Humans: One Line, Big Laugh.
// Writes one original single-line safety warning label for human beings
// (1-160 characters) to /output/entry.txt. No input, no network, no secrets.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LABEL =
  "WARNING: This human read the terms and conditions in full, understood none of them, and clicked 'I agree' anyway.";

const chars = [...LABEL].length;
if (chars < 1 || chars > 160) {
  throw new Error(`label must be 1-160 characters, got ${chars}`);
}
if (LABEL.trim().length === 0 || LABEL.includes("\n")) {
  throw new Error("label must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LABEL, "utf8");
if (readFileSync("/output/entry.txt", "utf8") !== LABEL) {
  throw new Error("read-back of /output/entry.txt does not match the label");
}
console.log(`wrote ${chars} characters to /output/entry.txt`);
