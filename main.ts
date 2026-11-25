import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const NOTE =
  "You opened me 47 times today. The leftovers are still there.";

// The gate: entry.txt must be UTF-8 text of 1 to 200 characters.
if (NOTE.length < 1 || NOTE.length > 200) {
  throw new Error(`entry length ${NOTE.length} is outside the 1-200 gate`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), NOTE, "utf8");
