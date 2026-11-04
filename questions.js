/* ============================================================
   CREAMY.IO QUESTIONS
   ------------------------------------------------------------
   Each question has four lists, most obvious to deepest lore:
     pledge    10 pts
     creamer   35 pts
     aboard    65 pts   (A-Board)
     founder  100 pts   (Founding Father)

   Aliases go after a slash: "jdub/j dub". The first one is how
   it's shown. Capitals, punctuation, plurals, 1-letter typos and
   answers that contain the right word are forgiven automatically.

   The password is set near the bottom of index.html (PASSWORD).
   ============================================================ */

window.GAME = {
  title: "Creamy.io",
  tagline: "How well do you know the creamers? The more obscure your answer, the farther you get around Mission Hill.",
  seconds: 25,
  perRound: 6,

  stops: [
    "Ruggles",
    "Roxbury Crossing",
    "Tobin Center",
    "Fitzgerald Park",
    "Heath Street",
    "Mission Park",
    "Brigham Circle",
    "Mission Church"
  ],

  questions: [
    {
      q: "Name a pledge in the current class (first name only)",
      answers: {
        pledge:  ["TJ", "Nick", "Sam", "Andrew", "Rui", "Ian", "Justin", "Samar", "Ben", "Deebo"],
        creamer: ["Serey", "Noah", "Thomas", "Lucas"],
        aboard:  ["Aran", "Neil"],
        founder: []
      }
    },
    {
      q: "Name a co-op a creamer has held",
      answers: {
        pledge:  ["SimpliSafe/simpli safe", "HarbourVest/harborvest", "Plymouth Rock/plymoth rock", "EMT"],
        creamer: ["UCSF", "Mintz", "GP Bullhound"],
        aboard:  ["DN Tanks", "IDEXX", "AgZen", "Snyk", "Senior Metal Bellows"],
        founder: ["CDD", "Neuren"]
      }
    },
    {
      q: "Name an A-Board position a creamer has held",
      answers: {
        pledge:  ["Social", "Philanthropy", "Brotherhood", "RM", "PM", "Recruitment"],
        creamer: ["Housing"],
        aboard:  ["Social Media", "J-Board"],
        founder: ["Encore chair"]
      }
    },
    {
      q: "Name a dropped brother (first name only)",
      answers: {
        pledge:  ["Kevin", "Lucas", "TQD", "Ody"],
        creamer: ["Max", "Dylan", "JDub/j dub", "Adi"],
        aboard:  ["Joe", "Avi"],
        founder: []
      }
    },
    {
      q: "Name a game creamers enjoy",
      answers: {
        pledge:  ["Krillion", "Chainle", "Wordle", "MapTap/map tap"],
        creamer: ["Sardines", "FarFlung/far flung", "Eraly", "Noillirk"],
        aboard:  ["Jackbox", "GrapeCube/grape cube"],
        founder: ["Lighter in the firepit/lighter in firepit/lighter in the fire pit"]
      }
    },
    {
      q: "Name a creamer (the more the deeper)",
      answers: {
        pledge:  ["Bode"],
        creamer: ["Leo", "Reid", "Wilson", "Alex", "AD", "Josh", "Fitz"],
        aboard:  ["Vish", "Ben", "Shiv", "Dylan", "Vansh", "Tommy"],
        founder: ["Jake"]
      }
    }
  ]
};
