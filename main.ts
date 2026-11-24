import { mkdirSync, writeFileSync } from "node:fs";

// The funniest error message a kitchen toaster would show its owner:
// deadpan, one voice, no toaster pun — the bread itself objects,
// and the refusal lands as its own short sentence.
const entry =
  "ERROR E-07: Your bread achieved consciousness. It declines to be eaten.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
