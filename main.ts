// Last Text at One Percent entry (Node 22, standard library only):
// writes one text message, 130 characters, to /output/entry.txt.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The joke: the phone itself narrates its own death at 1% battery. It
// says goodbye to its charger, orders its browser history deleted like a
// dying wish, and then dies mid-sentence — the message literally cuts off
// with an em dash, so the phone's last act is failing to finish its own
// farewell. Funny first, unmistakably a phone's voice second.
// Verified by running the program: the output is exactly 130 characters,
// one line.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

writeFileSync(
  join(OUTPUT_DIR, 'entry.txt'),
  '1% left: tell my charger I loved it, delete my browser history, and remember me as the phone that died mid-text, not the one that—',
);
