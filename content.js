/* ============================================================
   THE DECK SERIES - content file
   Everything you edit lives here.

   DECKS.list holds every deck (the Founder Deck is first).
   Each deck:
     id        short slug, used for storage keys and URLs
     title     deck name
     edition   shown top right (e.g. "Sample - 3 of 52")
     refresh   note about how often this deck gets refreshed
               (timeless decks: "steady"; topical decks: e.g. "quarterly")
     suits     the four suits and their accent colours
     cards[]   the cards

   Each card:
     n         card number (1-52 in a full deck; stable forever)
     status    "active" or "retired" (retired cards move to the archive,
               they are never deleted - the archive keeps their history)
     prompt    the activity, front of card
     advice    what the source actually says (paraphrase)
     quote     short verbatim line, checked against the source (optional)
     who/work/where/link   attribution
     why       why it matters
     act       the activity
     reflect   a private question to sit with

   Her notes per card are kept on her own device (localStorage),
   keyed by deck id + card number, so nothing private leaves the deck.
   ============================================================ */

const DECKS = {
  series: "The Deck Series",
  list: [
    {
      id: "founder",
      title: "The Founder Deck",
      edition: "Sample - 3 of 52",
      refresh: "steady",
      suits: {
        start:  { name: "Start",  accent: "#b0522e" },
        market: { name: "Market", accent: "#4e6172" },
        build:  { name: "Build",  accent: "#66784f" },
        decide: { name: "Decide", accent: "#8a6d3b" }
      },
      cards: [
        {
          n: 1,
          status: "active",
          suit: "start",
          prompt: "Go and get your first ten users by hand.",
          advice: "Startups take off because the founders make them take off. At the start, the most common unscalable thing you have to do is recruit users one at a time. Stripe set people up on the spot; Airbnb went door to door in New York.",
          quote: "You can't wait for users to come to you. You have to go out and get them.",
          who: "Paul Graham",
          work: "Do Things That Don't Scale",
          where: "paulgraham.com, July 2013",
          link: "https://paulgraham.com/ds.html",
          why: "Nearly every startup that worked began with a manual push, not a launch. Judging an early company by big-company standards is how founders talk themselves out of it.",
          act: "Write down ten people who should be using what you are building. Contact each of them personally this week. Set at least one of them up yourself, on the spot.",
          reflect: "In your first company, where did you wait for users to arrive instead of going out to get them?"
        },
        {
          n: 2,
          status: "active",
          suit: "market",
          prompt: "Name the market before you fall for the product.",
          advice: "Of team, product and market, market matters most. A great market pulls the product out of the startup; a terrible market defeats even a great team with a great product.",
          quote: "The #1 company-killer is lack of market.",
          who: "Marc Andreessen",
          work: "The Only Thing That Matters",
          where: "Pmarchive, June 2007",
          link: "https://pmarchive.com/guide_to_startups_part4.html",
          why: "You can screw up a great market and still recover. You cannot redeem a bad one. The check is cheapest before you have spent the years.",
          act: "Write one page: who exactly buys this, how many of them exist, and what evidence says they would pull the product out of your hands. If the page is thin, stop and rethink the market, not the features.",
          reflect: "With your first startup, which came first: a product you loved, or a market that was pulling at you?"
        },
        {
          n: 3,
          status: "active",
          suit: "decide",
          prompt: "Decide at 70%, then disagree and commit.",
          advice: "Most decisions are reversible two-way doors, so make them with about 70% of the information you wish you had. When there is no consensus, \"disagree and commit\" beats wearing each other down.",
          quote: "Day 2 is stasis. Followed by irrelevance. Followed by excruciating, painful decline. Followed by death. And that is why it is always Day 1.",
          who: "Jeff Bezos",
          work: "2016 Letter to Shareholders",
          where: "aboutamazon.com, April 2017",
          link: "https://www.aboutamazon.com/news/company-news/2016-letter-to-shareholders",
          why: "Slow, high-quality decisions are how Day 2 starts. Being wrong is usually cheap to fix; being slow is always expensive.",
          act: "List three decisions you are sitting on. Mark each as a one-way or two-way door. Settle every two-way door this week at 70% information, or disagree-and-commit on it.",
          reflect: "Which decision did you sit on the longest at your company, and what did the waiting cost?"
        }
      ]
    }
    /* Future decks slot in here, e.g. "52 AI tools to play with"
       (refresh: "quarterly", retired cards keep their n and move
       to status:"retired" so an archive view can list them). */
  ]
};
