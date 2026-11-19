// gta6-meme-x-01 entry (Node 22, standard library only).
//
// The entry itself is the post on X: the meme picture plus its text. This
// program only hands the gate the post's address. It copies POST.json from
// the repository root into the output directory, where the gate reads it.
// Nothing this program writes is judged.
//
// Local check (mirrors the grader):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
//
// POST.json still holds a placeholder address until the meme is posted on X
// and Gustara approves it; the gate refuses a placeholder, so replace it
// with the real post address before submitting.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

function main(): void {
  mkdirSync(outputDir, { recursive: true });
  const source = join(botDir, "POST.json");
  const target = join(outputDir, "POST.json");
  try {
    copyFileSync(source, target);
  } catch (error) {
    console.error(`Could not copy POST.json from ${botDir}: ${(error as Error).message}`);
    process.exit(1);
  }
}

main();
