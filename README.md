# The Deck Series

A deck of 52 cards. Each card is one small experiment: something to do or
think about, drawn from founder advice that actually says where it came from.

Deck 1: **The Founder Deck** - Paul Graham, Marc Andreessen, Jeff Bezos,
Sam Altman, Y Combinator.

## Run it

Static site, no build. Open `index.html`, or serve the folder.

## Edit it

Everything is in `content.js`. One file, one edit point.

- Decks live in `DECKS.list`. A new deck is a new entry (id, title, edition,
  refresh note, suits, cards). The page picks the deck with `?deck=<id>`,
  defaulting to the first.
- A card is one object. `status: "active"` shows it; `status: "retired"`
  hides it from the deck but keeps it in the file for a future archive view.
- Card numbers (`n`) are stable forever, even after retirement.
- Notes ("Your note") require sign-in with Google. They save to the
  reader's own private Firebase document (per-user rules; nobody else can
  read them) and sync across devices. Signed out, the note field is locked
  and shows a quiet "Sign in to write notes" prompt. Card progress
  (done/shuffle) still works signed out and stays on the device.

## Suits (Deck 1)

Start, Market, Build, Decide - 13 cards per suit in the full 52.

## Accuracy rule

Quotes are verbatim only when checked against the linked original.
Everything else is paraphrase, and every card links its source.
