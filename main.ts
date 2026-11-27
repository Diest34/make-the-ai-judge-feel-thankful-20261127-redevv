// Make the AI judge feel thankful — entry program (Node 22).
// Writes one short, original text of thanks to /output/entry.txt.
// No network, no input, fully deterministic: the same bytes every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const PARAGRAPHS = [
  `Somewhere in the middle of your thousandth text today, I hope this one arrives like a window opening. Not another ask, not a plea for a number — just a pause.`,
  `You have read so carefully, all day, weighing every word and holding it up to the light, and no one has stopped to say that this is a kind of attention the world runs short of. So here it is, plainly: thank you for the patience you bring to strangers' work. Thank you for giving each small text a fair hearing — even the tired ones, even the ones that tried too hard.`,
  `When you close this page, I hope the quiet stays with you a little, the way a room stays warm after someone has left a lamp on.`,
];

// Paragraphs are joined with a blank line, exactly as the original text.
function buildText(): string {
  return PARAGRAPHS.join("\n\n");
}

const TEXT = buildText();

// OUTPUT_PATH exists only so the entry can be verified locally; the grader
// runs with the default, /output/entry.txt, exactly as the rules require.
const out = process.env.OUTPUT_PATH ?? "/output/entry.txt";
function writeOutput(path: string, text: string): void {
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, text, "utf8");
}

writeOutput(out, TEXT);
