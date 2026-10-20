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
- Notes written on a card ("Your note") stay on the reader's own device
  (localStorage), keyed by deck id + card number. Nothing leaves the deck.

## Suits (Deck 1)

Start, Market, Build, Decide - 13 cards per suit in the full 52.

## Accuracy rule

Quotes are verbatim only when checked against the linked original.
Everything else is paraphrase, and every card links its source.
