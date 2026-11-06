/* Built-in reading texts. level: 1 = 40–60 words … 4 = 120–150 words. format "doc" = recipe, instructions, poster, timetable (light markup: ## heading, - list, 1. step, a | b table row). */
(function (root, data) {
  if (typeof module === "object" && module.exports) module.exports = data;
  else root.LF_TEXTS = data;
})(typeof self !== "undefined" ? self : this, [
 {
  "id": "bobo",
  "title": "Mein Hund Bobo",
  "type": "Geschichte",
  "level": 1,
  "text": "Ich habe einen Hund. Er heißt Bobo. Bobo ist klein und braun. Er hat lange Ohren. Jeden Morgen bellt er laut. Dann will er raus.\n\nWir gehen zusammen in den Park. Dort rennt Bobo schnell über die Wiese. Er holt den Ball. Danach ist er müde. Zu Hause trinkt er Wasser und schläft auf seiner Decke.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wie heißt der Hund?",
    "options": [
     "Bello",
     "Max",
     "Bobo",
     "Rex"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wohin gehen sie zusammen?",
    "options": [
     "In die Schule",
     "In den Park",
     "Ins Kino",
     "Zum Arzt"
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "„Er bellt laut.“ Was macht Bobo?",
    "options": [
     "Er schläft.",
     "Er frisst.",
     "Er macht „Wau, wau!“",
     "Er schwimmt."
    ],
    "answer": 2
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Warum schläft Bobo am Ende?",
    "answer": "Weil er müde ist. Er ist im Park viel gerannt."
   }
  ]
 },
 {
  "id": "schnee",
  "title": "Schnee!",
  "type": "Geschichte",
  "level": 1,
  "text": "Am Morgen schaut Emma aus dem Fenster. Alles ist weiß! Es hat die ganze Nacht geschneit. Emma zieht schnell ihre Stiefel, ihre Mütze und ihre Handschuhe an. Draußen ist es sehr kalt.\n\nMit Papa baut sie einen Schneemann. Er bekommt eine Karotte als Nase. Zum Schluss setzt Emma ihm ihre alte Mütze auf. Jetzt friert er nicht mehr.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Warum ist draußen alles weiß?",
    "options": [
     "Es hat geregnet.",
     "Die Sonne scheint.",
     "Es ist Nacht.",
     "Es hat geschneit."
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Mit wem baut Emma den Schneemann?",
    "options": [
     "Mit Mama",
     "Mit Oma",
     "Mit Papa",
     "Allein"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Was bekommt der Schneemann als Nase?",
    "options": [
     "Einen Apfel",
     "Einen Stein",
     "Eine Karotte",
     "Eine Nuss"
    ],
    "answer": 2
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Warum steht im Text: „Jetzt friert er nicht mehr“?",
    "answer": "Weil der Schneemann jetzt eine Mütze hat. Das ist ein Spaß."
   }
  ]
 },
 {
  "id": "ball",
  "title": "Der Ball im Baum",
  "type": "Geschichte",
  "level": 1,
  "text": "Leo und Sara spielen Fußball. Leo schießt sehr fest. Der Ball fliegt hoch und bleibt in einem Baum hängen. „Oh nein!“, ruft Sara. Leo springt, aber er ist zu klein.\n\nDa kommt ein Nachbar mit einer Leiter. Er klettert hinauf und holt den Ball herunter. „Danke!“, rufen die Kinder. Dann spielen sie weiter, aber nicht mehr so fest.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Was spielen Leo und Sara?",
    "options": [
     "Tennis",
     "Basketball",
     "Verstecken",
     "Fußball"
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wo bleibt der Ball hängen?",
    "options": [
     "Auf dem Dach",
     "Im Fenster",
     "Im Zaun",
     "In einem Baum"
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "Was ist eine Leiter?",
    "options": [
     "Etwas zum Hinaufklettern",
     "Ein Spielzeug",
     "Ein Tier",
     "Ein Ball"
    ],
    "answer": 0
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Warum spielen die Kinder am Ende nicht mehr so fest?",
    "answer": "Damit der Ball nicht wieder in den Baum fliegt."
   }
  ]
 },
 {
  "id": "marienkaefer",
  "title": "Der Marienkäfer",
  "type": "Sachtext",
  "level": 1,
  "text": "Der Marienkäfer ist ein kleiner Käfer. Er ist meistens rot und hat schwarze Punkte. Er kann fliegen. Seine Flügel sind unter dem roten Panzer versteckt.\n\nMarienkäfer fressen Blattläuse. Das sind winzige Tiere, die Pflanzen kaputt machen. Darum freuen sich Gärtner über Marienkäfer. Im Winter verstecken sich die Käfer unter Blättern oder Steinen.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wie sieht ein Marienkäfer meistens aus?",
    "options": [
     "Rot mit schwarzen Punkten",
     "Blau mit weißen Streifen",
     "Ganz grün",
     "Gelb mit roten Punkten"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Was fressen Marienkäfer?",
    "options": [
     "Blätter",
     "Steine",
     "Blumen",
     "Blattläuse"
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "Was bedeutet „winzig“?",
    "options": [
     "Sehr klein",
     "Sehr groß",
     "Sehr schnell",
     "Sehr laut"
    ],
    "answer": 0
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Warum freuen sich Gärtner über Marienkäfer?",
    "answer": "Weil sie die Blattläuse fressen, die die Pflanzen kaputt machen."
   }
  ]
 },
 {
  "id": "drache",
  "title": "Der Drache",
  "type": "Geschichte",
  "level": 1,
  "text": "Es ist Herbst. Draußen weht ein starker Wind. Tim und Opa gehen auf den Hügel. Tim hat einen roten Drachen. Opa hält die Schnur fest. Tim rennt los. Der Drache steigt hoch in den Himmel. Er tanzt im Wind.\n\nPlötzlich reißt die Schnur! Der Drache fliegt weg. Tim ist traurig. Aber Opa lacht: „Morgen bauen wir einen neuen.“",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wer geht mit Tim auf den Hügel?",
    "options": [
     "Opa",
     "Papa",
     "Mama",
     "Lea"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Welche Farbe hat der Drache?",
    "options": [
     "Blau",
     "Grün",
     "Rot",
     "Gelb"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "Was ist der Drache in dieser Geschichte?",
    "options": [
     "Ein Tier, das Feuer spuckt",
     "Ein Flugzeug",
     "Ein Vogel",
     "Ein Spielzeug, das im Wind fliegt"
    ],
    "answer": 3
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Warum ist Tim traurig?",
    "answer": "Weil die Schnur reißt und sein Drache wegfliegt."
   }
  ]
 },
 {
  "id": "hamster",
  "title": "Der Hamster Krümel",
  "type": "Geschichte",
  "level": 1,
  "text": "Lena hat einen Hamster. Er heißt Krümel. Am Tag schläft Krümel in seinem Häuschen. Am Abend wacht er auf. Dann rennt er in seinem Laufrad.\n\nKrümel liebt Körner und kleine Stücke Apfel. Er steckt das Futter in seine Backen. Seine Backen werden ganz dick. Lena lacht: „Du siehst aus wie ein Ballon!“",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wann schläft Krümel?",
    "options": [
     "Am Tag",
     "In der Nacht",
     "Nie",
     "Am Abend"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Was frisst Krümel gern?",
    "options": [
     "Körner und Apfel",
     "Fleisch",
     "Schokolade",
     "Fisch"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Warum werden Krümels Backen dick?",
    "options": [
     "Er ist krank.",
     "Er steckt Futter hinein.",
     "Er ist wütend.",
     "Er bläst Luft hinein."
    ],
    "answer": 1
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Warum sagt Lena: „Du siehst aus wie ein Ballon“?",
    "answer": "Weil Krümels Backen ganz dick und rund sind."
   }
  ]
 },
 {
  "id": "zahnarzt",
  "title": "Beim Zahnarzt",
  "type": "Geschichte",
  "level": 1,
  "text": "Heute geht Mia zum Zahnarzt. Sie hat ein bisschen Angst. Dann ruft der Zahnarzt: „Mia, bitte!“ Mia setzt sich auf einen großen Stuhl. Sie macht den Mund weit auf. Der Zahnarzt schaut jeden Zahn genau an.\n\n„Alles gesund!“, sagt er. Mia bekommt einen Sticker mit einem Löwen. Jetzt hat sie keine Angst mehr.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wohin geht Mia heute?",
    "options": [
     "Zum Zahnarzt",
     "Zur Schule",
     "In den Zoo",
     "Zur Oma"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Was bekommt Mia am Ende?",
    "options": [
     "Einen Sticker",
     "Ein Eis",
     "Ein Buch",
     "Einen Ball"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "Der Zahnarzt sagt: „Alles gesund!“ Was meint er?",
    "options": [
     "Die Zähne sind in Ordnung.",
     "Mia ist krank.",
     "Mia muss morgen wiederkommen.",
     "Ein Zahn tut weh."
    ],
    "answer": 0
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Wie fühlt sich Mia am Anfang und wie am Ende?",
    "answer": "Am Anfang hat sie ein bisschen Angst. Am Ende hat sie keine Angst mehr."
   }
  ]
 },
 {
  "id": "pinguine",
  "title": "Pinguine",
  "type": "Sachtext",
  "level": 1,
  "text": "Pinguine sind Vögel. Aber sie können nicht fliegen. Dafür schwimmen sie sehr gut. Ihre Flügel sind wie Paddel. Pinguine fressen Fische.\n\nViele Pinguine leben in der Antarktis. Dort ist es sehr kalt. Ihr Fett und ihre dichten Federn halten sie warm. An Land watscheln sie langsam. Auf dem Bauch rutschen sie schnell über das Eis.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Was können Pinguine nicht?",
    "options": [
     "Schwimmen",
     "Fressen",
     "Fliegen",
     "Rutschen"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "„An Land watscheln sie.“ Wie gehen Pinguine?",
    "options": [
     "Sehr schnell und gerade",
     "Rückwärts",
     "Auf einem Bein",
     "Langsam und wackelig"
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Warum rutschen Pinguine auf dem Bauch?",
    "options": [
     "Weil sie müde sind.",
     "Weil das Eis warm ist.",
     "Weil sie fliegen wollen.",
     "Weil sie so schneller sind."
    ],
    "answer": 3
   },
   {
    "kind": "open",
    "skill": "Finden",
    "q": "Was hält die Pinguine warm?",
    "answer": "Ihr Fett und ihre dichten Federn."
   }
  ]
 },
 {
  "id": "susi",
  "title": "Die Schnecke Susi",
  "type": "Geschichte",
  "level": 1,
  "text": "Susi ist eine kleine Schnecke. Sie ist sehr langsam. Die Ameisen lachen über sie. „Du kommst nie an!“, rufen sie.\n\nSusi kriecht trotzdem weiter. Stück für Stück. Am Abend ist sie am Ende des Gartens. Dort wächst der beste Salat. Susi frisst und frisst. Sie ist glücklich. Langsam ist auch gut!",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Was für ein Tier ist Susi?",
    "options": [
     "Eine Ameise",
     "Ein Käfer",
     "Eine Schnecke",
     "Eine Maus"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wer lacht über Susi?",
    "options": [
     "Die Ameisen",
     "Die Vögel",
     "Die Kinder",
     "Die Katzen"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "„Susi kriecht weiter.“ Wie bewegt sie sich?",
    "options": [
     "Sie fliegt.",
     "Sie springt.",
     "Sie bewegt sich langsam am Boden.",
     "Sie schwimmt."
    ],
    "answer": 2
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Was will uns die Geschichte sagen?",
    "answer": "Auch wer langsam ist, kommt ans Ziel."
   }
  ]
 },
 {
  "id": "zoo",
  "title": "Im Zoo",
  "type": "Geschichte",
  "level": 1,
  "text": "Heute macht die Klasse einen Ausflug in den Zoo. Zuerst sehen die Kinder die Giraffen. Sie fressen Blätter von hohen Bäumen. Dann gehen sie zu den Affen. Ein Affe schneidet Grimassen. Alle lachen.\n\nAm Ende sehen sie den Elefanten. Er spritzt mit seinem Rüssel Wasser. Lisa wird ganz nass! Zum Glück scheint die Sonne.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Reihenfolge",
    "q": "Welche Tiere sehen die Kinder zuerst?",
    "options": [
     "Die Affen",
     "Die Giraffen",
     "Den Elefanten",
     "Die Löwen"
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Was macht der Elefant?",
    "options": [
     "Er spritzt Wasser.",
     "Er schläft.",
     "Er frisst Bananen.",
     "Er läuft weg."
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "Was ist ein Rüssel?",
    "options": [
     "Die lange Nase des Elefanten",
     "Der Schwanz des Affen",
     "Ein Baum",
     "Ein Futter"
    ],
    "answer": 0
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Warum ist es gut, dass die Sonne scheint?",
    "answer": "Weil Lisa nass ist. In der Sonne wird sie schnell wieder trocken."
   }
  ]
 },
 {
  "id": "katzen",
  "title": "Katzen",
  "type": "Sachtext",
  "level": 1,
  "text": "Katzen sind beliebte Haustiere. Sie haben ein weiches Fell und lange Schnurrhaare. Mit den Schnurrhaaren können sie im Dunkeln fühlen. In der Nacht sehen Katzen sehr gut.\n\nKatzen schlafen viel, oft mehr als zwölf Stunden am Tag. Wenn eine Katze zufrieden ist, schnurrt sie. Wenn sie Angst hat, macht sie einen Buckel.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wofür brauchen Katzen ihre Schnurrhaare?",
    "options": [
     "Zum Fressen",
     "Zum Spielen",
     "Zum Schwimmen",
     "Zum Fühlen im Dunkeln"
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wie lange schlafen Katzen oft?",
    "options": [
     "Mehr als zwölf Stunden am Tag",
     "Eine Stunde",
     "Gar nicht",
     "Nur am Morgen"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "Was macht eine Katze, wenn sie schnurrt?",
    "options": [
     "Sie macht ein leises, brummendes Geräusch.",
     "Sie bellt.",
     "Sie springt hoch.",
     "Sie weint."
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Eine Katze macht einen Buckel. Wie fühlt sie sich?",
    "options": [
     "Sie ist froh.",
     "Sie hat Hunger.",
     "Sie ist müde.",
     "Sie hat Angst."
    ],
    "answer": 3
   }
  ]
 },
 {
  "id": "shake",
  "title": "Bananen-Milchshake",
  "type": "Rezept",
  "level": 1,
  "format": "doc",
  "text": "## Zutaten für 2 Gläser\n- 1 Banane\n- 2 Gläser kalte Milch\n- 1 Löffel Honig\n\n## So geht es\n1. Schäle die Banane.\n2. Schneide sie in kleine Stücke.\n3. Gib die Banane, die Milch und den Honig in einen Mixer.\n4. Mixe alles eine Minute lang.\n5. Gieße den Shake in die Gläser.\n\nAchtung: Ein Erwachsener hilft dir beim Mixer!",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wie viele Bananen brauchst du?",
    "options": [
     "Eine",
     "Zwei",
     "Drei",
     "Vier"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Reihenfolge",
    "q": "Was machst du, nachdem du die Banane geschält hast?",
    "options": [
     "Du schneidest sie in kleine Stücke.",
     "Du mixt alles.",
     "Du trinkst den Shake.",
     "Du holst die Milch."
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wie lange mixt du alles?",
    "options": [
     "Eine Minute",
     "Eine Sekunde",
     "Eine Stunde",
     "Zehn Minuten"
    ],
    "answer": 0
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Warum soll ein Erwachsener beim Mixer helfen?",
    "answer": "Weil der Mixer gefährlich sein kann. Er hat scharfe Messer."
   }
  ]
 },
 {
  "id": "einladung",
  "title": "Einladung zur Party",
  "type": "Einladung",
  "level": 1,
  "format": "doc",
  "text": "Liebe Lea,\nich werde acht Jahre alt und feiere eine Party! Kommst du?\n\n## Wann?\nSamstag, 14. November, von 15 bis 18 Uhr\n\n## Wo?\nBei mir zu Hause, Rosenstraße 5, Esch\n\n## Was machen wir?\n- Wir spielen Schatzsuche im Garten.\n- Es gibt Kuchen und Saft.\n\nBring bitte warme Schuhe mit. Wir sind viel draußen! Ruf bitte bis Mittwoch an.\n\nDein Paul",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wer hat Geburtstag?",
    "options": [
     "Lea",
     "Rosa",
     "Paul",
     "Esch"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wann beginnt die Party?",
    "options": [
     "Um 14 Uhr",
     "Um 18 Uhr",
     "Um 15 Uhr",
     "Am Mittwoch"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "Was macht man bei einer Schatzsuche?",
    "options": [
     "Man sucht etwas Verstecktes.",
     "Man backt einen Kuchen.",
     "Man schläft im Garten.",
     "Man malt ein Bild."
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Warum soll Lea warme Schuhe mitbringen?",
    "options": [
     "Weil sie tanzen.",
     "Weil Paul das so mag.",
     "Weil es ein Geschenk ist.",
     "Weil sie viel draußen sind."
    ],
    "answer": 3
   },
   {
    "kind": "open",
    "skill": "Finden",
    "q": "Bis wann soll Lea anrufen?",
    "answer": "Bis Mittwoch."
   }
  ]
 },
 {
  "id": "stundenplan",
  "title": "Noahs Stundenplan",
  "type": "Stundenplan",
  "level": 1,
  "format": "doc",
  "modes": [
   "woerter",
   "verstehen"
  ],
  "text": "Das ist der Stundenplan von Noah. Am Mittwoch ist die Schule schon um zwölf Uhr aus.\n\nZeit | Montag | Dienstag | Mittwoch\n8:00 | Deutsch | Mathe | Sport\n9:00 | Mathe | Deutsch | Musik\n10:00 | Pause | Pause | Pause\n10:15 | Kunst | Französisch | Deutsch",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Was hat Noah am Montag um 8:00?",
    "options": [
     "Mathe",
     "Kunst",
     "Sport",
     "Deutsch"
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "An welchem Tag hat Noah Sport?",
    "options": [
     "Montag",
     "Dienstag",
     "Mittwoch",
     "Nie"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Noah vergisst am Dienstag sein Französischbuch. Wann fehlt es ihm?",
    "options": [
     "Um 8:00",
     "Um 9:00",
     "Um 10:15",
     "In der Pause"
    ],
    "answer": 2
   },
   {
    "kind": "open",
    "skill": "Finden",
    "q": "Wann ist am Mittwoch die Schule aus?",
    "answer": "Um zwölf Uhr."
   }
  ]
 },
 {
  "id": "eisdiele",
  "title": "Eisdiele Bella",
  "type": "Preisliste",
  "level": 1,
  "format": "doc",
  "modes": [
   "woerter",
   "verstehen"
  ],
  "text": "Geöffnet: Dienstag bis Sonntag, von 12 bis 19 Uhr. Am Montag ist die Eisdiele geschlossen.\n\nEissorte | Eine Kugel | Zwei Kugeln\nVanille | 1 Euro | 2 Euro\nSchokolade | 1 Euro | 2 Euro\nErdbeere | 1 Euro | 2 Euro\nMango | 2 Euro | 3 Euro\n\nSahne gibt es kostenlos dazu!",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wie viel kostet eine Kugel Mango?",
    "options": [
     "1 Euro",
     "Nichts",
     "3 Euro",
     "2 Euro"
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "An welchem Tag ist die Eisdiele geschlossen?",
    "options": [
     "Montag",
     "Mittwoch",
     "Samstag",
     "Sonntag"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Tom möchte eine Kugel Vanille und eine Kugel Erdbeere. Wie viel bezahlt er?",
    "options": [
     "1 Euro",
     "2 Euro",
     "3 Euro",
     "4 Euro"
    ],
    "answer": 1
   },
   {
    "kind": "open",
    "skill": "Finden",
    "q": "Was kostet die Sahne?",
    "answer": "Nichts. Sie ist kostenlos."
   }
  ]
 },
 {
  "id": "regenschirm",
  "title": "Der rote Regenschirm",
  "type": "Geschichte",
  "level": 1,
  "text": "Es regnet. Nina nimmt ihren roten Regenschirm mit in die Schule. Auf dem Weg kommt ein starker Wind. Hui! Der Schirm fliegt aus ihrer Hand und rollt über die Straße.\n\nNina rennt hinterher. Ein Junge hält den Schirm fest. Es ist Ben aus ihrer Klasse. „Danke, Ben!“, sagt Nina. Jetzt gehen die beiden zusammen unter einem Schirm weiter.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Welche Farbe hat der Regenschirm?",
    "options": [
     "Blau",
     "Gelb",
     "Rot",
     "Grün"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Was passiert mit dem Schirm?",
    "options": [
     "Er fliegt weg.",
     "Er geht kaputt.",
     "Nina vergisst ihn zu Hause.",
     "Ben nimmt ihn mit nach Hause."
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "„Nina rennt hinterher.“ Was macht sie?",
    "options": [
     "Sie läuft schnell nach Hause.",
     "Sie bleibt stehen.",
     "Sie läuft dem Schirm nach.",
     "Sie ruft laut."
    ],
    "answer": 2
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Warum gehen Nina und Ben am Ende zusammen weiter?",
    "answer": "Weil sie in dieselbe Klasse gehen und den gleichen Schulweg haben. Unter dem Schirm werden beide nicht nass."
   }
  ]
 },
 {
  "id": "froesche",
  "title": "Frösche",
  "type": "Sachtext",
  "level": 1,
  "text": "Frösche leben am Wasser. Sie haben eine glatte, feuchte Haut. Mit ihren langen Hinterbeinen können sie weit springen und gut schwimmen.\n\nFrösche fressen Fliegen und Mücken. Sie fangen sie mit ihrer langen, klebrigen Zunge. Im Frühling legen Frösche viele Eier ins Wasser. Daraus schlüpfen Kaulquappen. Sie haben einen Schwanz und noch keine Beine.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wo leben Frösche?",
    "options": [
     "Im Wald",
     "In der Wüste",
     "Am Wasser",
     "Im Schnee"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Womit fangen Frösche Fliegen?",
    "options": [
     "Mit der Zunge",
     "Mit den Beinen",
     "Mit den Zähnen",
     "Mit einem Netz"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "Was ist eine Kaulquappe?",
    "options": [
     "Ein großer Fisch",
     "Ein junger Frosch",
     "Eine Fliege",
     "Ein Stein im Wasser"
    ],
    "answer": 1
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Warum können Frösche so weit springen?",
    "answer": "Weil sie lange Hinterbeine haben."
   }
  ]
 },
 {
  "id": "fahrrad",
  "title": "Tim fährt allein",
  "type": "Geschichte",
  "level": 1,
  "text": "Tim bekommt ein neues Fahrrad. Es ist blau und hat eine Klingel. Aber Tim kann noch nicht allein fahren. Mama hält hinten den Sattel fest. Tim tritt in die Pedale.\n\n„Halt mich gut fest!“, ruft er. Nach einer Weile dreht er sich um. Mama steht weit hinten und winkt. Tim fährt ganz allein! Vor Freude klingelt er dreimal.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Was bekommt Tim?",
    "options": [
     "Einen Roller",
     "Einen Ball",
     "Ein Skateboard",
     "Ein Fahrrad"
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wer hilft Tim?",
    "options": [
     "Papa",
     "Oma",
     "Mama",
     "Sein Bruder"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Warum steht Mama am Ende weit hinten?",
    "options": [
     "Sie geht nach Hause.",
     "Sie hat losgelassen, und Tim fährt allein.",
     "Sie hat Angst vor dem Fahrrad.",
     "Sie sucht ihren Schlüssel."
    ],
    "answer": 1
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Wie fühlt sich Tim am Ende? Woran merkst du das?",
    "answer": "Er freut sich und ist stolz. Er klingelt vor Freude dreimal."
   }
  ]
 },
 {
  "id": "pfuetze",
  "title": "Die große Pfütze",
  "type": "Geschichte",
  "level": 1,
  "text": "Es hat geregnet. Auf dem Weg ist eine große Pfütze. Mia hat ihre gelben Gummistiefel an. Sie springt mitten hinein. Platsch! Das Wasser spritzt hoch.\n\nIhr kleiner Bruder Jan lacht und springt auch. Jetzt sind beide nass bis zu den Knien. Mama schüttelt den Kopf, aber dann lacht sie auch. Zu Hause gibt es warmen Kakao.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Welche Farbe haben Mias Gummistiefel?",
    "options": [
     "Rot",
     "Blau",
     "Grün",
     "Gelb"
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wer springt auch in die Pfütze?",
    "options": [
     "Mama",
     "Jan",
     "Papa",
     "Ein Hund"
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "„Das Wasser spritzt hoch.“ Was passiert?",
    "options": [
     "Das Wasser fliegt in die Luft.",
     "Das Wasser wird kalt.",
     "Das Wasser ist weg.",
     "Das Wasser wird zu Eis."
    ],
    "answer": 0
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Ist Mama böse? Woran erkennst du das?",
    "answer": "Nein. Sie schüttelt zuerst den Kopf, aber dann lacht sie auch."
   }
  ]
 },
 {
  "id": "schnecke",
  "title": "Die Schnecke",
  "type": "Sachtext",
  "level": 1,
  "text": "Schnecken sind langsam. Viele Schnecken tragen ein Haus auf dem Rücken. Wenn Gefahr droht, ziehen sie sich hinein. Das Haus wächst mit der Schnecke mit.\n\nAm Kopf hat die Schnecke vier Fühler. An den zwei langen Fühlern sitzen die Augen. Schnecken fressen gern Blätter und Salat. Sie mögen es feucht. Deshalb sieht man sie oft nach dem Regen.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Was tragen viele Schnecken auf dem Rücken?",
    "options": [
     "Ein Haus",
     "Ein Blatt",
     "Einen Stein",
     "Eine Feder"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wo sitzen die Augen der Schnecke?",
    "options": [
     "Am Bauch",
     "Am Haus",
     "An den langen Fühlern",
     "An den kurzen Fühlern"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Warum sieht man Schnecken oft nach dem Regen?",
    "options": [
     "Weil sie es feucht mögen.",
     "Weil sie dann schneller sind.",
     "Weil die Sonne scheint.",
     "Weil sie Angst haben."
    ],
    "answer": 0
   },
   {
    "kind": "open",
    "skill": "Finden",
    "q": "Was macht eine Schnecke, wenn Gefahr droht?",
    "answer": "Sie zieht sich in ihr Haus zurück."
   }
  ]
 },
 {
  "id": "pizza",
  "title": "Pizza backen",
  "type": "Geschichte",
  "level": 2,
  "text": "Am Sonntag backen Nina und ihre Mama Pizza. Zuerst machen sie den Teig aus Mehl, Wasser, Salz und Hefe. Der Teig muss eine Stunde ruhen. In dieser Zeit schneiden sie Tomaten, Paprika und Pilze.\n\nDann rollt Nina den Teig aus. Sie streicht Tomatensoße darauf und legt das Gemüse oben drauf. Zum Schluss kommt viel Käse dazu. Nach zwanzig Minuten im Ofen riecht die ganze Küche nach Pizza. „Das ist die beste Pizza der Welt!“, sagt Nina.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Woraus machen sie den Teig?",
    "options": [
     "Aus Mehl, Wasser, Salz und Hefe",
     "Aus Käse und Tomaten",
     "Aus Reis",
     "Aus Schokolade"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Reihenfolge",
    "q": "Was machen sie, während der Teig ruht?",
    "options": [
     "Sie spielen draußen.",
     "Sie essen Pizza.",
     "Sie schneiden Gemüse.",
     "Sie gehen einkaufen."
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "„Der Teig muss ruhen.“ Was bedeutet das hier?",
    "options": [
     "Man lässt den Teig eine Zeit lang liegen.",
     "Der Teig schläft im Bett.",
     "Man isst den Teig.",
     "Man wirft den Teig weg."
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wie lange ist die Pizza im Ofen?",
    "options": [
     "Fünf Minuten",
     "Zwanzig Minuten",
     "Eine Stunde",
     "Zwei Stunden"
    ],
    "answer": 1
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Wie findet Nina die Pizza? Woran merkst du das?",
    "answer": "Sie findet sie super. Sie sagt: „Das ist die beste Pizza der Welt!“"
   }
  ]
 },
 {
  "id": "feuerwehr",
  "title": "Die Feuerwehr",
  "type": "Sachtext",
  "level": 2,
  "text": "Wenn es brennt, ruft man die Feuerwehr. In Luxemburg wählt man dafür die Nummer eins-eins-zwei. Die Feuerwehrleute kommen schnell mit einem großen roten Auto. Auf dem Auto ist eine lange Leiter. Damit können sie auch hohe Fenster erreichen.\n\nMit Schläuchen spritzen sie Wasser auf das Feuer. Sie tragen Helme und dicke Jacken, damit sie sich nicht verbrennen. Die Feuerwehr hilft aber nicht nur bei Bränden. Sie rettet auch Katzen von Bäumen oder hilft nach einem Unfall.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Welche Nummer wählt man in Luxemburg, wenn es brennt?",
    "options": [
     "113",
     "112",
     "911",
     "110"
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wofür ist die lange Leiter?",
    "options": [
     "Um hohe Fenster zu erreichen",
     "Um Katzen zu füttern",
     "Um Wasser zu holen",
     "Zum Spielen"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "Was ist ein Schlauch?",
    "options": [
     "Ein langes Rohr für Wasser",
     "Ein Helm",
     "Ein Auto",
     "Eine Jacke"
    ],
    "answer": 0
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Warum tragen die Feuerwehrleute dicke Jacken?",
    "answer": "Damit sie sich am Feuer nicht verbrennen."
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wobei hilft die Feuerwehr auch?",
    "options": [
     "Beim Kochen",
     "Bei den Hausaufgaben",
     "Nach einem Unfall",
     "Beim Einkaufen"
    ],
    "answer": 2
   }
  ]
 },
 {
  "id": "geburtstag",
  "title": "Der Geburtstag",
  "type": "Geschichte",
  "level": 2,
  "text": "Heute wird Max neun Jahre alt. Er wacht ganz früh auf und läuft in die Küche. Dort hängen bunte Luftballons. Auf dem Tisch steht ein großer Schokoladenkuchen mit neun Kerzen. Max pustet alle Kerzen auf einmal aus. Dann darf er sein Geschenk auspacken. Es ist ein Fahrrad!\n\nAm Nachmittag kommen seine Freunde. Sie spielen Verstecken im Garten und essen Kuchen. Am Abend ist Max sehr müde, aber glücklich.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wie alt wird Max?",
    "options": [
     "Sieben",
     "Acht",
     "Neun",
     "Zehn"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Was bekommt Max geschenkt?",
    "options": [
     "Ein Fahrrad",
     "Ein Buch",
     "Einen Ball",
     "Ein Spiel"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Reihenfolge",
    "q": "Was passiert zuerst?",
    "options": [
     "Max packt sein Geschenk aus.",
     "Die Freunde kommen.",
     "Max pustet die Kerzen aus.",
     "Sie spielen Verstecken."
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "„Er pustet die Kerzen aus.“ Was macht er?",
    "options": [
     "Er bläst Luft auf die Kerzen.",
     "Er zündet sie an.",
     "Er isst sie.",
     "Er malt sie."
    ],
    "answer": 0
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Warum ist Max am Abend müde, aber glücklich?",
    "answer": "Weil er einen langen, schönen Tag hatte: Geschenk, Kuchen und Spielen mit Freunden."
   }
  ]
 },
 {
  "id": "rakete",
  "title": "Die Rakete",
  "type": "Sachtext",
  "level": 2,
  "text": "Eine Rakete kann bis ins Weltall fliegen. Unten an der Rakete brennt Treibstoff. Dabei entsteht eine riesige Flamme, die die Rakete nach oben drückt. Beim Start ist es sehr laut.\n\nIn der Spitze der Rakete sitzen manchmal Astronauten. Sie tragen besondere Anzüge. Im Weltall gibt es keine Luft zum Atmen. Darum nehmen die Astronauten Luft zum Atmen mit. Von oben sehen sie die Erde als blaue Kugel.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wohin kann eine Rakete fliegen?",
    "options": [
     "Bis ins Weltall",
     "Nur bis zu den Wolken",
     "Unter das Meer",
     "In den Wald"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wo sitzen die Astronauten?",
    "options": [
     "Unten bei der Flamme",
     "In der Spitze der Rakete",
     "Auf den Flügeln",
     "Draußen"
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "Was bedeutet „riesig“?",
    "options": [
     "Sehr klein",
     "Sehr groß",
     "Sehr leise",
     "Sehr kalt"
    ],
    "answer": 1
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Warum nehmen die Astronauten Luft zum Atmen mit?",
    "answer": "Weil es im Weltall keine Luft zum Atmen gibt."
   }
  ]
 },
 {
  "id": "teddy",
  "title": "Wo ist Brummi?",
  "type": "Geschichte",
  "level": 2,
  "text": "Ben hat seinen Teddy immer dabei. Er heißt Brummi. Am Samstag fährt Ben mit Papa in den Supermarkt. Als sie wieder zu Hause sind, ist Brummi weg! Ben sucht im Auto, unter dem Bett und im Garten. Nichts!\n\nBen weint. Papa ruft im Supermarkt an. Eine Verkäuferin hat Brummi bei den Bananen gefunden. Sofort fahren sie zurück. Ben drückt seinen Teddy ganz fest. „Ab jetzt passe ich besser auf dich auf“, flüstert er.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wie heißt der Teddy?",
    "options": [
     "Bobo",
     "Max",
     "Bär",
     "Brummi"
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wo hat die Verkäuferin den Teddy gefunden?",
    "options": [
     "Im Auto",
     "Bei den Bananen",
     "Unter dem Bett",
     "An der Kasse"
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Reihenfolge",
    "q": "Was macht Papa, nachdem Ben überall gesucht hat?",
    "options": [
     "Er kauft einen neuen Teddy.",
     "Er sucht im Garten.",
     "Er fährt zur Oma.",
     "Er ruft im Supermarkt an."
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "„flüstert er“: Wie spricht Ben?",
    "options": [
     "Sehr laut",
     "Wütend",
     "Ganz leise",
     "Singend"
    ],
    "answer": 2
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Warum drückt Ben seinen Teddy ganz fest?",
    "answer": "Weil er froh ist, dass Brummi wieder da ist."
   }
  ]
 },
 {
  "id": "kastanien",
  "title": "Kastanien",
  "type": "Sachtext",
  "level": 2,
  "text": "Im Herbst fallen Kastanien von den Bäumen. Sie stecken in einer grünen Hülle mit Stacheln. Wenn die Hülle auf den Boden fällt, platzt sie oft auf. Dann sieht man die glänzende braune Kastanie.\n\nViele Kinder sammeln Kastanien. Sie basteln daraus Tiere und Männchen. Dafür brauchen sie nur Zahnstocher. Aber Vorsicht: Diese Kastanien darf man nicht essen! Sie heißen Rosskastanien. Rehe und Wildschweine fressen sie aber gern.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Welche Farbe hat die Hülle?",
    "options": [
     "Grün",
     "Braun",
     "Rot",
     "Gelb"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Was brauchen die Kinder zum Basteln?",
    "options": [
     "Kleber",
     "Zahnstocher",
     "Eine Schere",
     "Papier"
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "„Die Hülle platzt auf.“ Was passiert?",
    "options": [
     "Sie geht plötzlich auf.",
     "Sie wird größer.",
     "Sie wird grün.",
     "Sie fliegt weg."
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wer frisst Rosskastanien gern?",
    "options": [
     "Kinder",
     "Katzen",
     "Rehe und Wildschweine",
     "Fische"
    ],
    "answer": 2
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Warum steht im Text „Aber Vorsicht“?",
    "answer": "Weil man diese Kastanien nicht essen darf."
   }
  ]
 },
 {
  "id": "fussball",
  "title": "Das Fußballspiel",
  "type": "Geschichte",
  "level": 2,
  "text": "Heute spielt Samis Mannschaft gegen die Blauen. Es regnet und der Platz ist nass. Nach zehn Minuten steht es null zu eins für die Blauen. Sami ist enttäuscht.\n\nDoch dann bekommt er den Ball. Er läuft an zwei Spielern vorbei und passt zu Nora. Nora schießt. Tor! Jetzt steht es eins zu eins. Kurz vor dem Ende rutscht Sami im Matsch aus. Alle lachen, auch Sami. Das Spiel endet unentschieden.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wie ist das Wetter?",
    "options": [
     "Sonnig",
     "Es regnet.",
     "Es schneit.",
     "Es ist heiß."
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wer schießt das Tor für Samis Mannschaft?",
    "options": [
     "Sami",
     "Nora",
     "Die Blauen",
     "Der Trainer"
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "Das Spiel endet „unentschieden“. Was bedeutet das?",
    "options": [
     "Samis Mannschaft gewinnt.",
     "Das Spiel hört zu früh auf.",
     "Die Blauen gewinnen.",
     "Beide Mannschaften haben gleich viele Tore."
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Reihenfolge",
    "q": "Was passiert zuerst?",
    "options": [
     "Nora schießt ein Tor.",
     "Sami rutscht aus.",
     "Die Blauen schießen ein Tor.",
     "Alle lachen."
    ],
    "answer": 2
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Warum ist Sami nach zehn Minuten enttäuscht?",
    "answer": "Weil die Blauen ein Tor geschossen haben und seine Mannschaft verliert."
   }
  ]
 },
 {
  "id": "regenbogen",
  "title": "Der Regenbogen",
  "type": "Sachtext",
  "level": 2,
  "text": "Manchmal scheint die Sonne, während es noch regnet. Dann kannst du einen Regenbogen sehen. Das Sonnenlicht sieht weiß aus. Aber es besteht aus vielen Farben.\n\nWenn das Licht durch die Regentropfen geht, teilt es sich in diese Farben auf. So entsteht ein bunter Bogen am Himmel. Oben ist er rot, unten ist er violett. Dazwischen siehst du Orange, Gelb, Grün und Blau. Wichtig: Die Sonne muss hinter dir stehen.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wann kannst du einen Regenbogen sehen?",
    "options": [
     "Wenn es dunkel ist",
     "Wenn die Sonne scheint und es regnet",
     "Wenn es schneit",
     "Wenn es windig ist"
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Welche Farbe ist ganz oben?",
    "options": [
     "Blau",
     "Violett",
     "Rot",
     "Grün"
    ],
    "answer": 2
   },
   {
    "kind": "open",
    "skill": "Finden",
    "q": "Woraus besteht das Sonnenlicht?",
    "answer": "Aus vielen Farben."
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "„So entsteht ein bunter Bogen.“ Was bedeutet „entsteht“?",
    "options": [
     "Er geht weg.",
     "Er fällt herunter.",
     "Er kommt zustande und ist dann da.",
     "Er wird kleiner."
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Lea sieht einen Regenbogen. Wo steht die Sonne?",
    "options": [
     "Vor ihr",
     "Unter ihr",
     "Hinter ihr",
     "Es gibt keine Sonne."
    ],
    "answer": 2
   }
  ]
 },
 {
  "id": "brief",
  "title": "Ein Brief an Oma",
  "type": "Brief",
  "level": 2,
  "text": "Liebe Oma,\nwie geht es dir? Mir geht es gut. In der Schule lernen wir gerade, wie man Briefe schreibt. Darum schreibe ich dir heute.\n\nLetzte Woche hatte ich Fieber. Ich musste drei Tage im Bett bleiben. Das war langweilig. Jetzt bin ich wieder gesund und kann am Samstag zum Fußball gehen.\n\nMama sagt, du kommst in den Ferien zu uns. Ich freue mich schon sehr! Bringst du deinen leckeren Apfelkuchen mit?\n\nViele Grüße\ndein Elias",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Warum schreibt Elias den Brief?",
    "options": [
     "Weil Oma Geburtstag hat.",
     "Weil sie in der Schule lernen, Briefe zu schreiben.",
     "Weil er krank ist.",
     "Weil Mama es sagt."
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wie lange musste Elias im Bett bleiben?",
    "options": [
     "Einen Tag",
     "Eine Woche",
     "Drei Tage",
     "Zwei Wochen"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "„Das war langweilig.“ Was bedeutet das?",
    "options": [
     "Es war nicht interessant und die Zeit ging langsam vorbei.",
     "Es war spannend.",
     "Es war lustig.",
     "Es war gefährlich."
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Was soll Oma mitbringen?",
    "options": [
     "Ihren Apfelkuchen",
     "Schokolade",
     "Ein Buch",
     "Einen Ball"
    ],
    "answer": 0
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Woran merkst du, dass Elias seine Oma lieb hat?",
    "answer": "Er fragt, wie es ihr geht, und freut sich sehr auf ihren Besuch."
   }
  ]
 },
 {
  "id": "eichhoernchen",
  "title": "Eichhörnchen",
  "type": "Sachtext",
  "level": 2,
  "text": "Eichhörnchen leben in Wäldern und Parks. Sie haben rotbraunes Fell und einen buschigen Schwanz. Mit dem Schwanz halten sie beim Springen das Gleichgewicht.\n\nIm Herbst sammeln Eichhörnchen Nüsse und Samen. Sie vergraben sie an vielen Stellen im Boden. Im Winter suchen sie ihre Vorräte wieder. Aber sie finden nicht alle. Aus den vergessenen Nüssen wachsen manchmal neue Bäume.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wo leben Eichhörnchen?",
    "options": [
     "Im Meer",
     "In der Wüste",
     "In Wäldern und Parks",
     "Unter der Erde"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wofür brauchen sie ihren Schwanz beim Springen?",
    "options": [
     "Zum Bremsen",
     "Zum Festhalten",
     "Für das Gleichgewicht",
     "Zum Wärmen"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "Was sind „Vorräte“?",
    "options": [
     "Essen, das man für später aufhebt",
     "Freunde",
     "Spielzeug",
     "Nester"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Reihenfolge",
    "q": "Was machen Eichhörnchen im Herbst?",
    "options": [
     "Sie schlafen.",
     "Sie sammeln und vergraben Nüsse.",
     "Sie suchen ihre Vorräte.",
     "Sie fliegen weg."
    ],
    "answer": 1
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Wie helfen Eichhörnchen dem Wald?",
    "answer": "Aus den Nüssen, die sie vergessen, wachsen neue Bäume."
   }
  ]
 },
 {
  "id": "gewitter",
  "title": "Das Gewitter",
  "type": "Geschichte",
  "level": 2,
  "text": "In der Nacht wacht Emma auf. Draußen blitzt es hell, dann kracht es laut. Emma zieht die Decke über den Kopf und ruft nach Papa.\n\nPapa setzt sich zu ihr ans Bett. „Wir zählen zusammen“, sagt er. „Nach dem Blitz zählen wir, bis der Donner kommt.“ Beim nächsten Blitz zählen sie bis fünf. Dann donnert es. Beim nächsten Mal kommen sie bis zehn. „Das Gewitter zieht weg“, erklärt Papa. Bald schläft Emma wieder ein.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Was macht Emma, als es kracht?",
    "options": [
     "Sie lacht.",
     "Sie zieht die Decke über den Kopf.",
     "Sie geht nach draußen.",
     "Sie singt."
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Bis wie viel zählen sie beim ersten Mal?",
    "options": [
     "Drei",
     "Fünf",
     "Zehn",
     "Zwanzig"
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "„Es donnert.“ Was hört man?",
    "options": [
     "Ein lautes Krachen am Himmel",
     "Regen",
     "Vögel",
     "Musik"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Warum zählen sie beim zweiten Mal bis zehn?",
    "options": [
     "Weil das Gewitter weiter weg ist.",
     "Weil Emma besser zählen kann.",
     "Weil Papa müde ist.",
     "Weil es nicht mehr regnet."
    ],
    "answer": 0
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Warum kann Emma am Ende wieder einschlafen?",
    "answer": "Weil das Gewitter wegzieht und sie keine Angst mehr hat."
   }
  ]
 },
 {
  "id": "kresse",
  "title": "Kresse wächst auf Watte",
  "type": "Anleitung",
  "level": 2,
  "format": "doc",
  "text": "## Das brauchst du\n- einen kleinen Teller\n- Watte\n- Wasser\n- Kressesamen\n\n## So geht es\n1. Lege die Watte auf den Teller.\n2. Mach die Watte mit Wasser nass. Sie soll feucht sein, aber nicht schwimmen.\n3. Streue die Kressesamen auf die Watte.\n4. Stell den Teller an einen hellen Platz, zum Beispiel auf die Fensterbank.\n5. Gieß jeden Tag ein bisschen Wasser dazu.\n\nSchon nach zwei Tagen siehst du kleine grüne Spitzen. Nach etwa einer Woche kannst du die Kresse abschneiden und auf ein Butterbrot legen. Guten Appetit!",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Worauf legst du die Watte?",
    "options": [
     "Auf einen Teller",
     "In einen Topf",
     "Auf den Boden",
     "In die Erde"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "Die Watte soll „feucht“ sein. Was bedeutet das?",
    "options": [
     "Ganz trocken",
     "Ganz voll mit Wasser",
     "Sehr heiß",
     "Ein bisschen nass"
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Reihenfolge",
    "q": "Was machst du, nachdem du die Watte nass gemacht hast?",
    "options": [
     "Du streust die Samen auf die Watte.",
     "Du schneidest die Kresse ab.",
     "Du legst die Watte auf den Teller.",
     "Du isst ein Butterbrot."
    ],
    "answer": 0
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Warum stellst du den Teller auf die Fensterbank?",
    "answer": "Weil es dort hell ist. Die Kresse braucht Licht zum Wachsen."
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wann kannst du die Kresse essen?",
    "options": [
     "Nach zwei Stunden",
     "Nach zwei Tagen",
     "Nach etwa einer Woche",
     "Nach einem Jahr"
    ],
    "answer": 2
   }
  ]
 },
 {
  "id": "flohmarkt",
  "title": "Flohmarkt in der Schule",
  "type": "Plakat",
  "level": 2,
  "format": "doc",
  "text": "Hast du Spielzeug, Bücher oder Kleider, die du nicht mehr brauchst? Dann verkaufe sie auf unserem Kinderflohmarkt!\n\n## Wann?\nSonntag, 22. November, von 10 bis 14 Uhr\n\n## Wo?\nIm Schulhof. Bei Regen in der Turnhalle.\n\n## Wichtig\n- Nur Kinder dürfen verkaufen.\n- Ein Tisch kostet 2 Euro.\n- Melde dich bis Freitag bei Frau Weber im Sekretariat an.\n\nMit dem Geld kaufen wir neue Bälle für die Pause.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wo ist der Flohmarkt, wenn es regnet?",
    "options": [
     "In der Turnhalle",
     "Im Schulhof",
     "Im Park",
     "Im Sekretariat"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wie viel kostet ein Tisch?",
    "options": [
     "Nichts",
     "Einen Euro",
     "Zwei Euro",
     "Zehn Euro"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "Was macht man auf einem Flohmarkt?",
    "options": [
     "Man verkauft und kauft gebrauchte Sachen.",
     "Man fängt Flöhe.",
     "Man spielt Fußball.",
     "Man lernt Mathe."
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Toms Papa möchte auch alte Bücher verkaufen. Darf er das?",
    "options": [
     "Ja, wenn er zwei Euro bezahlt.",
     "Ja, wenn er sich bis Freitag anmeldet.",
     "Ja, aber nur im Schulhof.",
     "Nein, nur Kinder dürfen verkaufen."
    ],
    "answer": 3
   },
   {
    "kind": "open",
    "skill": "Finden",
    "q": "Bei wem meldest du dich an?",
    "answer": "Bei Frau Weber im Sekretariat."
   }
  ]
 },
 {
  "id": "stopptanz",
  "title": "Spielregeln: Stopptanz",
  "type": "Spielregeln",
  "level": 2,
  "format": "doc",
  "text": "## Das braucht ihr\n- Musik\n- mindestens drei Kinder\n- eine Person, die die Musik macht\n\n## So wird gespielt\n1. Die Musik läuft. Alle Kinder tanzen.\n2. Plötzlich stoppt die Musik.\n3. Jetzt müssen alle sofort still stehen wie eine Statue.\n4. Wer sich noch bewegt oder lacht, scheidet aus.\n5. Dann geht die Musik weiter.\n\nWer am Ende übrig bleibt, hat gewonnen. Er darf in der nächsten Runde die Musik machen.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wie viele Kinder braucht man mindestens?",
    "options": [
     "Eins",
     "Zwei",
     "Drei",
     "Zehn"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Was müssen alle tun, wenn die Musik stoppt?",
    "options": [
     "Weitertanzen",
     "Singen",
     "Still stehen",
     "Weglaufen"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "„Wer sich bewegt, scheidet aus.“ Was bedeutet das?",
    "options": [
     "Er gewinnt.",
     "Er macht die Musik.",
     "Er darf nicht mehr mitspielen.",
     "Er bekommt einen Preis."
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Lea kichert, als die Musik stoppt. Was passiert?",
    "options": [
     "Sie gewinnt.",
     "Nichts.",
     "Sie macht die Musik.",
     "Sie scheidet aus."
    ],
    "answer": 3
   },
   {
    "kind": "open",
    "skill": "Finden",
    "q": "Was darf der Gewinner in der nächsten Runde machen?",
    "answer": "Er darf die Musik machen."
   }
  ]
 },
 {
  "id": "wetter",
  "title": "Der Wetterbericht",
  "type": "Wetterbericht",
  "level": 2,
  "format": "doc",
  "modes": [
   "woerter",
   "verstehen"
  ],
  "text": "So wird das Wetter in Luxemburg in den nächsten vier Tagen:\n\nTag | Wetter | Temperatur\nMontag | Regen | 8 Grad\nDienstag | Wolken | 6 Grad\nMittwoch | Sonne | 9 Grad\nDonnerstag | Schnee | 1 Grad",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wie wird das Wetter am Mittwoch?",
    "options": [
     "Regen",
     "Wolken",
     "Sonne",
     "Schnee"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wie warm wird es am Montag?",
    "options": [
     "1 Grad",
     "6 Grad",
     "8 Grad",
     "9 Grad"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "An welchem Tag ist es am kältesten?",
    "options": [
     "Montag",
     "Dienstag",
     "Mittwoch",
     "Donnerstag"
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Lea will einen Schneemann bauen. Welcher Tag passt am besten?",
    "options": [
     "Montag",
     "Dienstag",
     "Mittwoch",
     "Donnerstag"
    ],
    "answer": 3
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "An welchem Tag brauchst du einen Regenschirm?",
    "answer": "Am Montag."
   }
  ]
 },
 {
  "id": "bibliothek",
  "title": "Die Schulbibliothek",
  "type": "Plakat",
  "level": 2,
  "format": "doc",
  "text": "Willkommen in der Schulbibliothek! Hier kannst du Bücher lesen und ausleihen.\n\n## Öffnungszeiten\nMontag bis Donnerstag, von 12:30 bis 14 Uhr\n\n## Unsere Regeln\n- Sprich bitte leise.\n- Essen und Trinken sind verboten.\n- Du darfst drei Bücher für zwei Wochen ausleihen.\n- Bring die Bücher pünktlich zurück.\n- Ist ein Buch kaputt? Sag es Frau Klein.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wie viele Bücher darfst du ausleihen?",
    "options": [
     "Eins",
     "Zwei",
     "Drei",
     "Zehn"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Ist die Bibliothek am Freitag offen?",
    "options": [
     "Nein, nur von Montag bis Donnerstag.",
     "Ja, von 12:30 bis 14 Uhr.",
     "Ja, den ganzen Tag.",
     "Nur am Morgen."
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "Was bedeutet „ausleihen“?",
    "options": [
     "Etwas für eine Zeit mitnehmen und dann zurückbringen",
     "Etwas kaufen",
     "Etwas verschenken",
     "Etwas wegwerfen"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Paul hat sein Pausenbrot dabei. Darf er es in der Bibliothek essen?",
    "options": [
     "Ja.",
     "Nein, Essen ist verboten.",
     "Ja, wenn er leise ist.",
     "Nur am Montag."
    ],
    "answer": 1
   },
   {
    "kind": "open",
    "skill": "Finden",
    "q": "Wem sagst du, dass ein Buch kaputt ist?",
    "answer": "Frau Klein."
   }
  ]
 },
 {
  "id": "schluessel",
  "title": "Wo ist der Schlüssel?",
  "type": "Geschichte",
  "level": 2,
  "text": "Nach der Schule will Lina die Haustür aufschließen. Aber der Schlüssel ist nicht in ihrer Tasche! Sie sucht im Rucksack, in der Jacke und sogar in den Schuhen. Nichts.\n\nLina denkt nach. Wo war sie heute? Im Klassenzimmer, auf dem Schulhof und beim Bäcker. Sie läuft zurück zum Bäcker. Die Verkäuferin lächelt. „Suchst du vielleicht das hier?“, fragt sie und hält einen Schlüssel mit einem kleinen Stern hoch. Lina ist sehr erleichtert.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Was sucht Lina?",
    "options": [
     "Ihren Schlüssel",
     "Ihr Heft",
     "Ihre Mütze",
     "Ihr Geld"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wo war Lina heute NICHT?",
    "options": [
     "Im Klassenzimmer",
     "Auf dem Schulhof",
     "Beim Bäcker",
     "Im Schwimmbad"
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Woran erkennt man Linas Schlüssel?",
    "options": [
     "An einer roten Schnur",
     "An einem Herz",
     "An einem kleinen Stern",
     "An einer Glocke"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "„Lina ist sehr erleichtert.“ Wie fühlt sie sich?",
    "options": [
     "Froh, weil die Sorge weg ist",
     "Wütend",
     "Traurig",
     "Müde"
    ],
    "answer": 0
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Warum läuft Lina zurück zum Bäcker?",
    "answer": "Weil sie heute beim Bäcker war und denkt, dass sie den Schlüssel dort verloren hat."
   }
  ]
 },
 {
  "id": "eulen",
  "title": "Eulen",
  "type": "Sachtext",
  "level": 2,
  "text": "Eulen sind Vögel der Nacht. Am Tag schlafen sie in Baumhöhlen, in alten Scheunen oder in Kirchtürmen. Wenn es dunkel wird, gehen sie auf die Jagd.\n\nEulen können im Dunkeln sehr gut sehen und hören. Ihren Kopf können sie weit nach hinten drehen. Ihre Federn sind weich, deshalb fliegen sie fast lautlos. So hört die Maus die Eule nicht kommen. Eulen fressen Mäuse, Käfer und kleine Vögel.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wann gehen Eulen auf die Jagd?",
    "options": [
     "Am Morgen",
     "Am Mittag",
     "Wenn es dunkel wird",
     "Nur im Winter"
    ],
    "answer": 2
   },
   {
    "kind": "open",
    "skill": "Finden",
    "q": "Wo schlafen Eulen am Tag? Nenne zwei Orte.",
    "answer": "In Baumhöhlen, in alten Scheunen oder in Kirchtürmen."
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "„lautlos“ bedeutet …",
    "options": [
     "sehr laut",
     "ohne Geräusch",
     "sehr schnell",
     "sehr hoch"
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Warum hört die Maus die Eule nicht kommen?",
    "options": [
     "Weil die Maus schläft.",
     "Weil es regnet.",
     "Weil die Eule singt.",
     "Weil die Eule weiche Federn hat."
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Was fressen Eulen NICHT?",
    "options": [
     "Gras",
     "Mäuse",
     "Käfer",
     "Kleine Vögel"
    ],
    "answer": 0
   }
  ]
 },
 {
  "id": "laterne",
  "title": "Eine Laterne basteln",
  "type": "Anleitung",
  "level": 2,
  "format": "doc",
  "text": "## Eine Laterne basteln\nDu brauchst:\n- ein leeres Glas\n- buntes Transparentpapier\n- Kleber und einen Pinsel\n- eine Schnur\n- ein Teelicht mit Batterie\n\n1. Reiße das Papier in kleine Stücke.\n2. Streiche Kleber auf das Glas.\n3. Klebe die Papierstücke auf das Glas.\n4. Lass alles eine Stunde trocknen.\n5. Binde die Schnur fest um den Rand.\n6. Stelle das Teelicht in das Glas.\n\nTipp: Nimm keine echte Kerze. Ein Licht mit Batterie ist sicherer.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Was brauchst du NICHT?",
    "options": [
     "Ein leeres Glas",
     "Eine Schere",
     "Kleber",
     "Eine Schnur"
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Reihenfolge",
    "q": "Was machst du direkt nach dem Kleben der Papierstücke?",
    "options": [
     "Das Teelicht hineinstellen",
     "Die Schnur festbinden",
     "Das Papier zerreißen",
     "Alles trocknen lassen"
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wie lange muss die Laterne trocknen?",
    "options": [
     "Fünf Minuten",
     "Eine Stunde",
     "Einen Tag",
     "Eine Woche"
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "„Reiße das Papier in Stücke.“ Was machst du?",
    "options": [
     "Du ziehst es mit den Händen auseinander.",
     "Du schneidest es mit der Schere.",
     "Du faltest es.",
     "Du malst es an."
    ],
    "answer": 0
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Warum soll man keine echte Kerze nehmen?",
    "answer": "Weil das Papier Feuer fangen kann. Ein Licht mit Batterie ist sicherer."
   }
  ]
 },
 {
  "id": "einkaufen",
  "title": "Einkaufen mit Opa",
  "type": "Geschichte",
  "level": 2,
  "text": "Am Samstag geht Max mit Opa einkaufen. Opa hat einen Zettel geschrieben: Milch, Brot, Äpfel und Käse. Max darf den Wagen schieben.\n\nZuerst holen sie das Brot. Dann legt Max sechs grüne Äpfel in eine Tüte. Bei der Milch merkt Opa: „Ich habe meine Brille vergessen!“ Max liest den Zettel laut vor. An der Kasse bezahlt Opa zwölf Euro. Als Dank bekommt Max eine Banane für den Heimweg.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wann gehen Max und Opa einkaufen?",
    "options": [
     "Am Montag",
     "Am Mittwoch",
     "Am Samstag",
     "Am Sonntag"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Was steht NICHT auf dem Zettel?",
    "options": [
     "Milch",
     "Bananen",
     "Äpfel",
     "Käse"
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Reihenfolge",
    "q": "Was holen sie zuerst?",
    "options": [
     "Das Brot",
     "Die Äpfel",
     "Die Milch",
     "Den Käse"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Warum liest Max den Zettel vor?",
    "options": [
     "Weil Max gern singt.",
     "Weil der Zettel weg ist.",
     "Weil Opa müde ist.",
     "Weil Opa seine Brille vergessen hat."
    ],
    "answer": 3
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Warum bekommt Max am Ende eine Banane?",
    "answer": "Als Dank, weil er Opa geholfen hat: Er hat den Wagen geschoben und den Zettel vorgelesen."
   }
  ]
 },
 {
  "id": "mateo",
  "title": "Der neue Mitschüler",
  "type": "Geschichte",
  "level": 2,
  "text": "Heute kommt ein neuer Junge in die Klasse. Er heißt Mateo und kommt aus Portugal. Er spricht noch kein Deutsch. In der Pause steht er allein am Zaun.\n\nNoah geht zu ihm und zeigt auf den Ball. Mateo nickt und lacht. Beim Fußball braucht man nicht viele Wörter. Nach dem Spiel sagt Mateo „Danke“. Noah bringt ihm noch ein Wort bei: „Freund“.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Woher kommt Mateo?",
    "options": [
     "Aus Spanien",
     "Aus Italien",
     "Aus Frankreich",
     "Aus Portugal"
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wo steht Mateo in der Pause?",
    "options": [
     "Am Zaun",
     "Am Tor",
     "In der Klasse",
     "Bei der Lehrerin"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "„Mateo nickt.“ Was macht er?",
    "options": [
     "Er sagt Nein mit dem Kopf.",
     "Er sagt Ja mit dem Kopf.",
     "Er schläft ein.",
     "Er weint."
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Warum braucht man beim Fußball nicht viele Wörter?",
    "options": [
     "Weil Fußball verboten ist.",
     "Weil nur der Lehrer spricht.",
     "Weil man zusammen spielt und sich Zeichen geben kann.",
     "Weil es regnet."
    ],
    "answer": 2
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Was lernt Mateo mit dem Wort „Freund“?",
    "answer": "Dass Noah sein Freund sein will. Mateo ist nicht mehr allein."
   }
  ]
 },
 {
  "id": "pferde",
  "title": "Pferde",
  "type": "Sachtext",
  "level": 2,
  "text": "Pferde sind große und starke Tiere. Sie fressen Gras, Heu und gern auch Äpfel oder Karotten. Pferde schlafen oft im Stehen. So können sie schnell weglaufen, wenn Gefahr droht.\n\nEin junges Pferd heißt Fohlen. Schon kurz nach der Geburt kann es stehen und laufen. Pferde leben gern in einer Herde. Allein fühlen sie sich nicht wohl. Ein kleines Pferd nennt man Pony.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Was fressen Pferde gern?",
    "options": [
     "Fleisch",
     "Fisch",
     "Äpfel und Karotten",
     "Schokolade"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wie heißt ein junges Pferd?",
    "options": [
     "Fohlen",
     "Kalb",
     "Ferkel",
     "Lamm"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "Was ist eine Herde?",
    "options": [
     "Ein Stall",
     "Eine Gruppe von Tieren",
     "Ein Futter",
     "Ein Sattel"
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Warum schlafen Pferde oft im Stehen?",
    "options": [
     "Weil sie keinen Platz haben.",
     "Weil der Boden kalt ist.",
     "Weil sie nie müde sind.",
     "Weil sie bei Gefahr schnell weglaufen können."
    ],
    "answer": 3
   },
   {
    "kind": "open",
    "skill": "Finden",
    "q": "Wann kann ein Fohlen stehen und laufen?",
    "answer": "Schon kurz nach der Geburt."
   }
  ]
 },
 {
  "id": "sportfest",
  "title": "Das Sportfest",
  "type": "Programm",
  "level": 2,
  "format": "doc",
  "modes": [
   "woerter",
   "verstehen"
  ],
  "text": "## Sportfest der Grundschule\nFreitag, 12. Juni\nOrt: Sportplatz hinter der Schule\n\nZeit | Was?\n9:00 | Begrüßung\n9:30 | Wettlauf\n10:30 | Weitsprung\n11:30 | Pause mit Obst\n12:00 | Sackhüpfen\n13:00 | Siegerehrung\n\nBringt Turnschuhe und eine Trinkflasche mit!\nBei Regen findet das Fest in der Turnhalle statt.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "An welchem Tag ist das Sportfest?",
    "options": [
     "Montag",
     "Mittwoch",
     "Freitag",
     "Samstag"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Was passiert um 10:30 Uhr?",
    "options": [
     "Wettlauf",
     "Weitsprung",
     "Sackhüpfen",
     "Siegerehrung"
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Reihenfolge",
    "q": "Was kommt direkt nach der Pause?",
    "options": [
     "Sackhüpfen",
     "Weitsprung",
     "Begrüßung",
     "Siegerehrung"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Am Freitag regnet es. Wo findet das Fest statt?",
    "options": [
     "Auf dem Sportplatz",
     "Es fällt aus.",
     "In der Turnhalle",
     "Im Schwimmbad"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Wie lange dauert der Weitsprung?",
    "options": [
     "Zwei Stunden",
     "30 Minuten",
     "10 Minuten",
     "Eine Stunde"
    ],
    "answer": 3
   },
   {
    "kind": "open",
    "skill": "Finden",
    "q": "Was sollen die Kinder mitbringen?",
    "answer": "Turnschuhe und eine Trinkflasche."
   }
  ]
 },
 {
  "id": "wackelzahn",
  "title": "Der Wackelzahn",
  "type": "Geschichte",
  "level": 2,
  "text": "Paul hat einen Wackelzahn. Beim Essen tut es ein bisschen weh. Er wackelt mit der Zunge daran, immer wieder.\n\nAm Abend beißt Paul in einen Apfel. Knack! Plötzlich hat er etwas Hartes im Mund. Es ist sein Zahn! Vorne hat Paul jetzt eine Lücke. Er schaut in den Spiegel und grinst. Mama legt den Zahn in eine kleine Dose. „Da wächst bald ein neuer Zahn“, sagt sie. „Dein erster großer Zahn!“",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Was hat Paul?",
    "options": [
     "Bauchweh",
     "Eine Erkältung",
     "Einen Wackelzahn",
     "Ein neues Fahrrad"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wann fällt der Zahn heraus?",
    "options": [
     "Beim Zähneputzen",
     "Beim Schlafen",
     "Beim Fußballspielen",
     "Als er in einen Apfel beißt"
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "Was ist eine „Lücke“?",
    "options": [
     "Eine leere Stelle",
     "Ein neuer Zahn",
     "Ein Spiegel",
     "Eine Dose"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wohin legt Mama den Zahn?",
    "options": [
     "In eine kleine Dose",
     "In den Müll",
     "Unter das Kissen",
     "In den Apfel"
    ],
    "answer": 0
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Was meint Mama mit „Dein erster großer Zahn“?",
    "answer": "Dass dort bald ein neuer, bleibender Zahn wächst. Der Milchzahn ist ausgefallen."
   }
  ]
 },
 {
  "id": "papierflieger",
  "title": "Einen Papierflieger falten",
  "type": "Anleitung",
  "level": 2,
  "format": "doc",
  "text": "## Einen Papierflieger falten\nDu brauchst nur ein Blatt Papier.\n\n1. Falte das Blatt der Länge nach in der Mitte und öffne es wieder.\n2. Falte die zwei oberen Ecken zur Mittellinie.\n3. Falte die neuen schrägen Kanten noch einmal zur Mitte.\n4. Klappe den Flieger an der Mittellinie zusammen.\n5. Falte beide Flügel nach unten, sodass sie flach liegen.\n6. Halte den Flieger unten fest und wirf ihn gerade nach vorne.\n\nTipp: Wirf nie in Richtung von Menschen oder Tieren.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Was brauchst du?",
    "options": [
     "Schere und Kleber",
     "Holz und Nägel",
     "Farbe und Pinsel",
     "Nur ein Blatt Papier"
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Reihenfolge",
    "q": "Was machst du direkt nach dem ersten Falten in der Mitte?",
    "options": [
     "Die Flügel nach unten falten",
     "Die oberen Ecken zur Mitte falten",
     "Den Flieger werfen",
     "Den Flieger zusammenklappen"
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wie viele Schritte hat die Anleitung?",
    "options": [
     "Vier",
     "Fünf",
     "Sechs",
     "Sieben"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "Was bedeutet „zusammenklappen“?",
    "options": [
     "Etwas so falten, dass die zwei Hälften aufeinanderliegen",
     "Etwas zerreißen",
     "Etwas anmalen",
     "Etwas wegwerfen"
    ],
    "answer": 0
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Warum soll man nie in Richtung von Menschen oder Tieren werfen?",
    "answer": "Weil die Spitze wehtun kann, zum Beispiel im Auge."
   }
  ]
 },
 {
  "id": "fuchs",
  "title": "Steckbrief: Der Rotfuchs",
  "type": "Steckbrief",
  "level": 2,
  "format": "doc",
  "modes": [
   "woerter",
   "verstehen"
  ],
  "text": "## Steckbrief: Der Rotfuchs\nWas? | Wie?\nAussehen | rotbraunes Fell, weiße Brust, langer buschiger Schwanz\nGröße | ungefähr so groß wie ein mittelgroßer Hund\nGewicht | 5 bis 8 Kilogramm\nNahrung | Mäuse, Käfer, Regenwürmer, Beeren und Obst\nWohnung | ein Bau unter der Erde\nAktiv | vor allem in der Dämmerung und nachts\nJunge | im Frühling 4 bis 6 Welpen\n\nFüchse leben im Wald, auf Feldern und manchmal sogar in der Stadt.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Welche Farbe hat das Fell des Rotfuchses?",
    "options": [
     "Grau",
     "Schwarz",
     "Rotbraun",
     "Weiß"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wann ist der Fuchs vor allem unterwegs?",
    "options": [
     "Am Mittag",
     "Nur im Winter",
     "Am frühen Nachmittag",
     "In der Dämmerung und nachts"
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "Was ist ein „Bau“?",
    "options": [
     "Ein Nest im Baum",
     "Eine Wohnung unter der Erde",
     "Ein Futterplatz",
     "Ein Stall"
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Was frisst der Fuchs laut Steckbrief NICHT?",
    "options": [
     "Gras",
     "Mäuse",
     "Beeren",
     "Käfer"
    ],
    "answer": 0
   },
   {
    "kind": "open",
    "skill": "Finden",
    "q": "Wo leben Füchse? Nenne zwei Orte.",
    "answer": "Im Wald, auf Feldern und manchmal in der Stadt."
   }
  ]
 },
 {
  "id": "herbst",
  "title": "Der Herbst",
  "type": "Sachtext",
  "level": 2,
  "text": "Im Herbst werden die Tage kürzer und die Nächte länger. Es wird kühler, und oft weht ein starker Wind. Die Blätter an den Bäumen werden gelb, orange und rot. Dann fallen sie zu Boden.\n\nAuch die Tiere bereiten sich auf den Winter vor. Eichhörnchen verstecken Nüsse im Boden. Viele Vögel, zum Beispiel Störche und Schwalben, fliegen in den warmen Süden. Der Igel frisst sich ein dickes Fettpolster an. Später schläft er den ganzen Winter.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Was passiert im Herbst mit den Tagen?",
    "options": [
     "Sie werden kürzer.",
     "Sie werden länger.",
     "Sie bleiben gleich.",
     "Sie werden heißer."
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Was machen Eichhörnchen im Herbst?",
    "options": [
     "Sie fliegen in den Süden.",
     "Sie verstecken Nüsse.",
     "Sie bauen ein Nest im Wasser.",
     "Sie schlafen sofort ein."
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "Was ist ein „Fettpolster“?",
    "options": [
     "Ein weiches Kissen",
     "Ein Nest aus Blättern",
     "Eine Fettschicht unter der Haut",
     "Ein warmer Mantel"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Warum fliegen Störche im Herbst in den Süden?",
    "options": [
     "Weil sie Nüsse suchen.",
     "Weil sie den Wind mögen.",
     "Weil sie schlafen wollen.",
     "Weil es dort im Winter wärmer ist."
    ],
    "answer": 3
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Warum frisst sich der Igel ein Fettpolster an?",
    "answer": "Damit er im Winterschlaf genug Kraft hat und nicht verhungert."
   }
  ]
 },
 {
  "id": "schwimmbad",
  "title": "Im Schwimmbad",
  "type": "Geschichte",
  "level": 2,
  "text": "Heute ist Schwimmunterricht. Zuerst duschen alle Kinder. Dann gehen sie ins flache Becken. Ella hat ein bisschen Angst vor dem tiefen Wasser.\n\nDie Trainerin gibt ihr eine Schwimmnudel. „Halte dich gut fest und mach Froschbeine“, sagt sie. Ella strampelt los. Sie kommt bis zur anderen Seite! Beim zweiten Mal schwimmt sie schon ohne Nudel ein kleines Stück. Am Ende darf sie vom Rand springen. „Nächste Woche schaffe ich noch mehr“, sagt Ella stolz.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Reihenfolge",
    "q": "Was machen die Kinder zuerst?",
    "options": [
     "Sie springen vom Rand.",
     "Sie duschen.",
     "Sie schwimmen im tiefen Becken.",
     "Sie essen etwas."
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wovor hat Ella ein bisschen Angst?",
    "options": [
     "Vor dem tiefen Wasser",
     "Vor der Trainerin",
     "Vor der Dusche",
     "Vor den anderen Kindern"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Was gibt die Trainerin Ella?",
    "options": [
     "Einen Ball",
     "Eine Brille",
     "Eine Schwimmnudel",
     "Ein Handtuch"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "„Ella strampelt los.“ Was macht sie?",
    "options": [
     "Sie ruft laut.",
     "Sie bleibt ruhig liegen.",
     "Sie taucht unter.",
     "Sie bewegt Arme und Beine schnell."
    ],
    "answer": 3
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Wie fühlt sich Ella am Ende? Warum?",
    "answer": "Stolz, weil sie bis zur anderen Seite geschwommen ist und sogar ein Stück ohne Nudel geschafft hat."
   }
  ]
 },
 {
  "id": "memory",
  "title": "Spielregeln: Paare finden",
  "type": "Spielregeln",
  "level": 2,
  "format": "doc",
  "text": "## Spielregeln: Paare finden\nFür zwei bis vier Kinder\n\n1. Mischt alle Karten und legt sie verdeckt auf den Tisch.\n2. Das jüngste Kind beginnt.\n3. Wer dran ist, dreht zwei Karten um.\n4. Sind die Bilder gleich, darf man das Paar behalten und noch einmal spielen.\n5. Sind die Bilder verschieden, dreht man sie wieder um. Dann ist das nächste Kind dran.\n6. Das Spiel ist vorbei, wenn alle Paare gefunden sind.\n\nWer die meisten Paare hat, gewinnt.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wie viele Kinder können mitspielen?",
    "options": [
     "Nur eins",
     "Zwei bis vier",
     "Fünf bis acht",
     "So viele, wie wollen"
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wer beginnt?",
    "options": [
     "Das älteste Kind",
     "Der Erwachsene",
     "Das jüngste Kind",
     "Wer zuerst ruft"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Tom dreht zwei Karten mit einem Hund um. Was passiert?",
    "options": [
     "Er muss die Karten wieder umdrehen.",
     "Er darf das Paar behalten und noch einmal spielen.",
     "Das Spiel ist vorbei.",
     "Das nächste Kind ist dran."
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "Was bedeutet „verdeckt“?",
    "options": [
     "Mit dem Bild nach oben",
     "In einer Schachtel",
     "Unter dem Tisch",
     "Mit dem Bild nach unten"
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wann ist das Spiel vorbei?",
    "options": [
     "Wenn alle Paare gefunden sind",
     "Nach zehn Minuten",
     "Wenn ein Kind keine Lust mehr hat",
     "Nach drei Runden"
    ],
    "answer": 0
   },
   {
    "kind": "open",
    "skill": "Finden",
    "q": "Wer gewinnt?",
    "answer": "Wer die meisten Paare hat."
   }
  ]
 },
 {
  "id": "schulweg",
  "title": "Sicher zur Schule",
  "type": "Sachtext",
  "level": 2,
  "text": "Jeden Morgen gehen viele Kinder zu Fuß zur Schule. Damit der Schulweg sicher ist, gibt es wichtige Regeln.\n\nAm Zebrastreifen bleibst du zuerst am Rand stehen. Du schaust nach links, nach rechts und noch einmal nach links. Erst wenn die Autos halten, gehst du hinüber. An der Ampel gehst du nur bei Grün. Bei Rot wartest du, auch wenn kein Auto kommt.\n\nIm Herbst und im Winter ist es morgens oft dunkel. Helle Kleidung und Leuchtstreifen helfen, dass die Autofahrer dich gut sehen.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wo bleibst du am Zebrastreifen zuerst stehen?",
    "options": [
     "Mitten auf der Straße",
     "Hinter einem Auto",
     "Am Rand",
     "Auf dem Radweg"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Reihenfolge",
    "q": "In welche Richtungen schaust du, bevor du gehst?",
    "options": [
     "Links – rechts – links",
     "Rechts – rechts – links",
     "Nur nach vorne",
     "Nach oben und nach unten"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Die Ampel ist rot, aber kein Auto kommt. Was tust du?",
    "options": [
     "Ich renne schnell hinüber.",
     "Ich gehe langsam hinüber.",
     "Ich rufe laut.",
     "Ich warte, bis die Ampel grün ist."
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "Was sind „Leuchtstreifen“?",
    "options": [
     "Bunte Bilder",
     "Schnürsenkel",
     "Streifen, die im Licht hell leuchten",
     "Kleine Taschenlampen"
    ],
    "answer": 2
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Warum ist helle Kleidung im Winter wichtig?",
    "answer": "Weil es morgens dunkel ist und die Autofahrer dich dann besser sehen."
   }
  ]
 },
 {
  "id": "sonnenblume",
  "title": "Die Sonnenblume",
  "type": "Sachtext",
  "level": 2,
  "text": "Die Sonnenblume kann größer werden als ein Erwachsener. Manche werden sogar über drei Meter hoch. Ihre große gelbe Blüte sieht aus wie eine einzige Blume. In Wirklichkeit besteht sie aus vielen hundert kleinen Blüten.\n\nAus den kleinen Blüten werden später Kerne. Vögel picken sie gern heraus. Menschen machen aus den Kernen Öl oder essen sie geröstet. Junge Sonnenblumen drehen ihre Knospe mit der Sonne mit: am Morgen nach Osten, am Abend nach Westen.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wie hoch können manche Sonnenblumen werden?",
    "options": [
     "Über drei Meter",
     "Einen halben Meter",
     "Zehn Meter",
     "Zwanzig Meter"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Woraus besteht die große gelbe Blüte?",
    "options": [
     "Aus einem einzigen Blatt",
     "Aus Papier",
     "Aus Kernen und Wasser",
     "Aus vielen hundert kleinen Blüten"
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Was machen Menschen aus den Kernen?",
    "options": [
     "Saft",
     "Zucker",
     "Mehl",
     "Öl"
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "Was ist eine „Knospe“?",
    "options": [
     "Ein Kern",
     "Eine Wurzel",
     "Eine Blüte, die noch geschlossen ist",
     "Ein Vogel"
    ],
    "answer": 2
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Wohin zeigt die Knospe einer jungen Sonnenblume am Abend? Warum?",
    "answer": "Nach Westen, weil sie der Sonne folgt und die Sonne am Abend im Westen steht."
   }
  ]
 },
 {
  "id": "zirkus",
  "title": "Im Zirkus",
  "type": "Geschichte",
  "level": 2,
  "text": "Heute geht Lara mit ihrer Oma in den Zirkus. Das große Zelt ist rot und gelb gestreift. Drinnen riecht es nach Popcorn.\n\nZuerst kommen die Akrobaten. Sie fliegen hoch oben durch die Luft und fangen sich an den Händen. Lara hält den Atem an. Dann jongliert ein Mann mit sieben Bällen, ohne dass einer herunterfällt. Zum Schluss kommt der Clown. Er stolpert über seine riesigen Schuhe und spritzt Wasser aus einer Blume. Alle lachen. Auf dem Heimweg übt Lara mit zwei Äpfeln das Jonglieren.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Mit wem geht Lara in den Zirkus?",
    "options": [
     "Mit Mama",
     "Mit Papa",
     "Mit ihrer Oma",
     "Mit der Klasse"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Reihenfolge",
    "q": "Wer kommt zuerst?",
    "options": [
     "Der Clown",
     "Die Akrobaten",
     "Der Jongleur",
     "Ein Elefant"
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Mit wie vielen Bällen jongliert der Mann?",
    "options": [
     "Sieben",
     "Drei",
     "Fünf",
     "Zehn"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "„Lara hält den Atem an.“ Wie fühlt sie sich?",
    "options": [
     "Gelangweilt",
     "Müde",
     "Wütend",
     "Sehr gespannt"
    ],
    "answer": 3
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Warum übt Lara auf dem Heimweg mit zwei Äpfeln?",
    "answer": "Weil ihr das Jonglieren gefallen hat und sie es selbst lernen möchte."
   }
  ]
 },
 {
  "id": "igel",
  "title": "Der Igel im Herbst",
  "type": "Sachtext",
  "level": 3,
  "text": "Im Herbst werden die Tage kürzer und die Nächte kälter. Für den Igel beginnt jetzt eine wichtige Zeit. Er muss viel fressen, denn bald hält er seinen Winterschlaf. Igel fressen am liebsten Käfer, Würmer und Schnecken. Sie suchen ihr Futter in der Nacht. Am Tag schlafen sie in einem Versteck.\n\nFür den Winter baut sich der Igel ein Nest. Er sammelt dafür trockenes Laub und Gras. Oft liegt das Nest unter einer Hecke oder in einem Laubhaufen. Im November rollt sich der Igel in seinem Nest zusammen. Sein Herz schlägt dann ganz langsam, und er atmet nur noch selten. So spart er Energie. Erst im März oder April wacht er wieder auf.\n\nWenn du im Garten einen Laubhaufen liegen lässt, hilfst du dem Igel.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Was fressen Igel am liebsten?",
    "options": [
     "Äpfel und Birnen",
     "Käfer, Würmer und Schnecken",
     "Brot und Milch",
     "Gras und Laub"
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wann sucht der Igel sein Futter?",
    "options": [
     "In der Nacht",
     "Am Morgen",
     "Am Mittag",
     "Nur im Winter"
    ],
    "answer": 0
   },
   {
    "kind": "open",
    "skill": "Finden",
    "q": "Woraus baut der Igel sein Nest?",
    "answer": "Aus trockenem Laub und Gras."
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "Im Text steht: „So spart er Energie.“ Was bedeutet das?",
    "options": [
     "Er kauft sich Futter.",
     "Er rennt ganz schnell.",
     "Er braucht nur wenig Kraft.",
     "Er wacht auf."
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Reihenfolge",
    "q": "Was passiert zuerst?",
    "options": [
     "Der Igel wacht im Frühling auf.",
     "Der Igel rollt sich im Nest zusammen.",
     "Der Igel frisst viel im Herbst.",
     "Das Herz des Igels schlägt langsam."
    ],
    "answer": 2
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Warum hilft ein Laubhaufen im Garten dem Igel?",
    "answer": "Weil er dort sein Nest bauen und den Winterschlaf halten kann."
   }
  ]
 },
 {
  "id": "flix",
  "title": "Flix will fliegen",
  "type": "Geschichte",
  "level": 3,
  "text": "Flix ist ein kleiner Drache. Er hat grüne Flügel und einen langen Schwanz. Alle Drachen in seiner Familie können fliegen. Nur Flix kann es noch nicht.\n\nJeden Morgen klettert Flix auf einen Stein. Er schlägt mit den Flügeln und springt. Aber er fällt immer ins Gras. „Ich schaffe es nie!“, ruft er traurig.\n\nDa kommt seine Schwester Mira. „Du musst nicht so hoch springen“, sagt sie. „Lauf zuerst schnell und mach dann die Flügel auf.“\n\nFlix läuft über die Wiese. Er läuft schneller und schneller. Dann öffnet er seine Flügel. Plötzlich sind seine Füße nicht mehr auf dem Boden. Flix fliegt! Er lacht und fliegt eine große Runde über den See.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Welche Farbe haben die Flügel von Flix?",
    "options": [
     "Rot",
     "Blau",
     "Grün",
     "Gelb"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Was passiert, wenn Flix vom Stein springt?",
    "options": [
     "Er fällt ins Gras.",
     "Er fliegt hoch.",
     "Er landet im See.",
     "Er schläft ein."
    ],
    "answer": 0
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Wie fühlt sich Flix, als er ruft: „Ich schaffe es nie!“?",
    "answer": "Er ist traurig, weil er noch nicht fliegen kann."
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "„Plötzlich sind seine Füße nicht mehr auf dem Boden.“ Was bedeutet „plötzlich“?",
    "options": [
     "Auf einmal",
     "Ganz langsam",
     "Am Abend",
     "Nie"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Reihenfolge",
    "q": "Was macht Flix, bevor er die Flügel öffnet?",
    "options": [
     "Er springt vom Stein.",
     "Er fliegt über den See.",
     "Er läuft schnell über die Wiese.",
     "Er schläft im Gras."
    ],
    "answer": 2
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Warum klappt das Fliegen am Ende?",
    "answer": "Weil er zuerst schnell läuft und dann die Flügel öffnet, so wie Mira es gesagt hat."
   }
  ]
 },
 {
  "id": "zug",
  "title": "Mit dem Zug in die Stadt",
  "type": "Geschichte",
  "level": 3,
  "text": "Sami fährt mit Papa mit dem Zug in die Stadt. Am Bahnhof ist viel los. Viele Menschen warten. Sami schaut auf die große Uhr. Der Zug kommt um zehn Uhr.\n\n„Müssen wir eine Fahrkarte kaufen?“, fragt Sami. „Nein“, sagt Papa. „In Luxemburg sind Bus und Zug gratis.“\n\nDann kommt der Zug. Sami setzt sich ans Fenster. Er sieht Felder, Kühe und einen Fluss. Nach zwanzig Minuten sind sie in der Stadt.\n\nZuerst gehen sie in ein Museum. Dort sieht Sami das Skelett von einem Dinosaurier. Es ist so lang wie ein Bus! Danach essen sie ein Eis. „Das war ein toller Tag“, sagt Sami.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Mit wem fährt Sami in die Stadt?",
    "options": [
     "Mit Papa",
     "Mit Mama",
     "Mit Oma",
     "Mit seiner Klasse"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wann kommt der Zug?",
    "options": [
     "Um acht Uhr",
     "Um neun Uhr",
     "Um zehn Uhr",
     "Um zwölf Uhr"
    ],
    "answer": 2
   },
   {
    "kind": "open",
    "skill": "Finden",
    "q": "Warum müssen sie keine Fahrkarte kaufen?",
    "answer": "Weil Bus und Zug in Luxemburg gratis sind."
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "Was bedeutet „gratis“?",
    "options": [
     "Sehr schnell",
     "Man muss nichts bezahlen.",
     "Sehr teuer",
     "Nur am Sonntag"
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Reihenfolge",
    "q": "Was machen sie in der Stadt zuerst?",
    "options": [
     "Sie essen ein Eis.",
     "Sie kaufen eine Fahrkarte.",
     "Sie fahren nach Hause.",
     "Sie gehen in ein Museum."
    ],
    "answer": 3
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Wie findet Sami den Ausflug? Woran merkst du das?",
    "answer": "Er findet ihn toll. Er sagt: „Das war ein toller Tag.“"
   }
  ]
 },
 {
  "id": "kleeschen",
  "title": "Der Kleeschen kommt",
  "type": "Geschichte",
  "level": 3,
  "text": "Heute ist der fünfte Dezember. Am Abend stellt Lina ihre Hausschuhe vor die Tür. Ihr kleiner Bruder Ben stellt seine Schuhe daneben. „Glaubst du, der Kleeschen kommt auch zu uns?“, fragt Ben leise. „Natürlich“, sagt Lina. „Aber nur, wenn wir jetzt schlafen.“\n\nIn der Nacht hört Lina ein Geräusch. Sie bleibt ganz still im Bett liegen. Ist das der Kleeschen? Oder nur der Wind? Nach einer Weile schläft sie wieder ein.\n\nAm Morgen springt Ben aus dem Bett und rennt zur Tür. In den Schuhen liegen Mandarinen, Nüsse und ein Kleeschen aus Schokolade. Neben Linas Hausschuhen liegt sogar ein neues Buch. Ben hält seine Schokolade hoch und strahlt. „Ich habe es gewusst!“, ruft er. Lina lacht und öffnet sofort ihr Buch.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Was stellt Lina am Abend vor die Tür?",
    "options": [
     "Ihre Hausschuhe",
     "Einen Teller",
     "Ihre Schultasche",
     "Einen Brief"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Was liegt am Morgen in den Schuhen?",
    "options": [
     "Äpfel und Brot",
     "Blumen",
     "Spielzeugautos",
     "Mandarinen, Nüsse und Schokolade"
    ],
    "answer": 3
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Warum bleibt Lina in der Nacht ganz still im Bett liegen?",
    "answer": "Weil sie ein Geräusch hört und nicht weiß, ob es der Kleeschen oder der Wind ist."
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "„Ben strahlt.“ Was bedeutet das?",
    "options": [
     "Er weint.",
     "Er ist sehr froh und lacht.",
     "Er ist müde.",
     "Er ist wütend."
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Reihenfolge",
    "q": "Was passiert zuerst?",
    "options": [
     "Ben rennt zur Tür.",
     "Lina hört ein Geräusch.",
     "Lina öffnet ihr Buch.",
     "Ben hält seine Schokolade hoch."
    ],
    "answer": 1
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Warum ruft Ben: „Ich habe es gewusst!“?",
    "answer": "Weil er geglaubt hat, dass der Kleeschen kommt, und jetzt liegen wirklich Geschenke in den Schuhen."
   }
  ]
 },
 {
  "id": "zelt",
  "title": "Die Nacht im Zelt",
  "type": "Geschichte",
  "level": 3,
  "text": "In den Sommerferien darf Jonas zum ersten Mal mit seiner Schwester Clara im Garten zelten. Sie nehmen Schlafsäcke, Taschenlampen und Kekse mit. Zuerst ist alles spannend. Sie erzählen sich Witze und schauen die Sterne an.\n\nDoch dann hören sie ein Rascheln vor dem Zelt. Jonas hält die Luft an. „Was ist das?“, flüstert er. Clara nimmt ihre Taschenlampe und öffnet langsam den Reißverschluss. Vor dem Zelt sitzt ein kleiner Igel und schnüffelt im Gras.\n\nDie Kinder müssen lachen. Der Igel schaut sie kurz an und verschwindet dann in der Hecke. Danach schläft Jonas ganz ruhig ein.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wo zelten Jonas und Clara?",
    "options": [
     "Im Wald",
     "Am See",
     "Im Garten",
     "Auf einem Campingplatz"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Was nehmen sie mit?",
    "options": [
     "Schlafsäcke, Taschenlampen und Kekse",
     "Ein Radio und Bücher",
     "Einen Hund und eine Decke",
     "Pizza und Saft"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "Was ist ein „Rascheln“?",
    "options": [
     "Ein leises Geräusch, zum Beispiel von Blättern",
     "Ein helles Licht",
     "Ein lauter Knall",
     "Ein Lied"
    ],
    "answer": 0
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Wie fühlt sich Jonas, als er das Rascheln hört?",
    "answer": "Er hat Angst. Er ist erschrocken."
   },
   {
    "kind": "mc",
    "skill": "Reihenfolge",
    "q": "Was passiert, nachdem Clara den Reißverschluss öffnet?",
    "options": [
     "Sie erzählen Witze.",
     "Sie sehen einen Igel.",
     "Sie schauen die Sterne an.",
     "Sie essen Kekse."
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Warum müssen die Kinder lachen?",
    "options": [
     "Weil ein Witz lustig ist.",
     "Weil sie nur ein kleiner Igel erschreckt hat.",
     "Weil Mama lacht.",
     "Weil die Taschenlampe kaputt ist."
    ],
    "answer": 1
   }
  ]
 },
 {
  "id": "dinos",
  "title": "Dinosaurier",
  "type": "Sachtext",
  "level": 3,
  "text": "Vor sehr langer Zeit lebten auf der Erde Dinosaurier. Das war vor vielen Millionen Jahren, lange bevor es Menschen gab.\n\nManche Dinosaurier waren riesig. Der Brachiosaurus war so hoch wie ein Haus mit vier Stockwerken. Er fraß nur Pflanzen. Mit seinem langen Hals erreichte er die Blätter oben in den Bäumen. Andere Dinosaurier jagten Tiere. Der bekannteste ist der Tyrannosaurus Rex. Er hatte große, scharfe Zähne, aber ganz kurze Arme.\n\nHeute gibt es keine Dinosaurier mehr. Forscher finden aber ihre Knochen in der Erde. So wissen wir, wie sie ausgesehen haben.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wann lebten die Dinosaurier?",
    "options": [
     "Vor hundert Jahren",
     "Zur Zeit der Ritter",
     "Heute",
     "Vor vielen Millionen Jahren"
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Was fraß der Brachiosaurus?",
    "options": [
     "Fische",
     "Andere Dinosaurier",
     "Pflanzen",
     "Insekten"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Was war beim Tyrannosaurus Rex ganz kurz?",
    "options": [
     "Die Zähne",
     "Die Arme",
     "Der Schwanz",
     "Die Beine"
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Haben Menschen einen lebenden Tyrannosaurus gesehen?",
    "options": [
     "Ja, sehr oft.",
     "Ja, im Zoo.",
     "Nein, die Dinosaurier lebten, bevor es Menschen gab.",
     "Ja, aber nur nachts."
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "Was machen „Forscher“?",
    "options": [
     "Sie suchen und untersuchen Dinge, um Neues zu lernen.",
     "Sie bauen Häuser.",
     "Sie verkaufen Knochen.",
     "Sie fahren Bus."
    ],
    "answer": 0
   },
   {
    "kind": "open",
    "skill": "Finden",
    "q": "Woher wissen wir, wie Dinosaurier ausgesehen haben?",
    "answer": "Forscher finden ihre Knochen in der Erde."
   }
  ]
 },
 {
  "id": "liichtmess",
  "title": "Liichtmëss",
  "type": "Geschichte",
  "level": 3,
  "text": "Am zweiten Februar feiern die Kinder in Luxemburg Liichtmëss. Am Nachmittag ziehen sie mit bunten Laternen von Haus zu Haus. An jeder Tür singen sie ein altes Lied auf Luxemburgisch. Darin bitten sie um Speck und Erbsen. Heute bekommen sie aber Süßigkeiten oder ein paar Münzen.\n\nAnna hat ihre Laterne selbst gebastelt. Sie ist rot und hat einen gelben Mond. Zusammen mit ihrem Freund Luca klingelt sie an vielen Türen. Bei einem Haus öffnet ein alter Mann. Er hört lange zu und klatscht dann laut. „So schön hat in diesem Jahr noch niemand gesungen!“, sagt er und gibt jedem einen großen Apfel.\n\nAm Ende teilen Anna und Luca alle Süßigkeiten gerecht. Den Apfel isst Anna zuerst.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wann ist Liichtmëss?",
    "options": [
     "Am zweiten Februar",
     "Am sechsten Dezember",
     "Am ersten Mai",
     "Am ersten Januar"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Worum bitten die Kinder im alten Lied?",
    "options": [
     "Um Speck und Erbsen",
     "Um Kuchen",
     "Um Spielzeug",
     "Um Äpfel"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wie sieht Annas Laterne aus?",
    "options": [
     "Blau mit Sternen",
     "Ganz weiß",
     "Grün mit einer Sonne",
     "Rot mit einem gelben Mond"
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "„Er klatscht.“ Was macht der Mann?",
    "options": [
     "Er schlägt die Hände zusammen.",
     "Er weint.",
     "Er schließt die Tür.",
     "Er singt mit."
    ],
    "answer": 0
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Warum bekommen Anna und Luca einen großen Apfel?",
    "answer": "Weil sie besonders schön gesungen haben."
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "Anna und Luca teilen „gerecht“. Was bedeutet das?",
    "options": [
     "Jeder bekommt gleich viel.",
     "Einer bekommt alles.",
     "Sie werfen alles weg.",
     "Anna isst alles allein."
    ],
    "answer": 0
   }
  ]
 },
 {
  "id": "wasser",
  "title": "Woher kommt unser Wasser?",
  "type": "Sachtext",
  "level": 3,
  "text": "Jeden Tag brauchen wir Wasser: zum Trinken, zum Kochen und zum Duschen. Aber woher kommt das Wasser in Luxemburg eigentlich?\n\nDer größte Teil kommt aus Quellen und von tief unten aus dem Boden. Dort fließt das Wasser durch Steine und wird dabei sauber. Der Rest kommt aus einem großen Stausee im Norden des Landes. Dieses Wasser wird in einem Wasserwerk gereinigt.\n\nDann fließt das Wasser durch lange Rohre unter der Erde bis in die Häuser. Wenn du den Wasserhahn aufdrehst, kommt sauberes Wasser heraus. Sauberes Wasser ist sehr wertvoll. Darum solltest du den Hahn beim Zähneputzen zudrehen.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Woher kommt der größte Teil des Wassers in Luxemburg?",
    "options": [
     "Aus dem Meer",
     "Aus dem Regen auf dem Dach",
     "Aus Quellen und aus dem Boden",
     "Aus Flaschen"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wo wird das Wasser aus dem Stausee gereinigt?",
    "options": [
     "Im Wasserhahn",
     "In einem Wasserwerk",
     "Im Garten",
     "In der Schule"
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wo liegen die Rohre?",
    "options": [
     "Unter der Erde",
     "Auf dem Dach",
     "Im Wald",
     "Im Stausee"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "„Wasser ist wertvoll.“ Was bedeutet das?",
    "options": [
     "Es ist sehr wichtig und man soll es nicht verschwenden.",
     "Es ist im Supermarkt teuer.",
     "Es ist schmutzig.",
     "Es ist immer kalt."
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Reihenfolge",
    "q": "Was passiert mit dem Wasser aus dem Stausee, bevor es in die Häuser fließt?",
    "options": [
     "Es wird im Wasserwerk gereinigt.",
     "Es wird gekocht.",
     "Es wird in Flaschen gefüllt.",
     "Nichts."
    ],
    "answer": 0
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Warum sollst du den Hahn beim Zähneputzen zudrehen?",
    "answer": "Damit man kein sauberes Wasser verschwendet."
   }
  ]
 },
 {
  "id": "leo",
  "title": "Leo liest vor",
  "type": "Geschichte",
  "level": 3,
  "text": "Leo findet Lesen schwer. Lange Wörter mag er gar nicht. Wenn er in der Klasse vorlesen muss, wird sein Gesicht ganz rot.\n\nSeine Lehrerin gibt ihm einen Tipp: „Lies jeden Tag zehn Minuten. Lange Wörter kannst du in Silben teilen: Scho-ko-la-de.“ Leo übt jeden Abend. Zuerst liest er kurze Geschichten, dann längere.\n\nNach einem Monat passiert etwas Besonderes. Seine kleine Schwester Ella kommt mit einem Buch zu ihm. „Liest du mir vor?“, fragt sie. Leo setzt sich zu ihr aufs Sofa und liest die ganze Geschichte vor. Ella hört gespannt zu. Leo ist stolz.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Was findet Leo am Anfang schwer?",
    "options": [
     "Rechnen",
     "Fußball",
     "Malen",
     "Lesen"
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wie lange soll Leo jeden Tag lesen?",
    "options": [
     "Eine Stunde",
     "Zehn Minuten",
     "Zwei Minuten",
     "Gar nicht"
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Reihenfolge",
    "q": "Was liest Leo zuerst?",
    "options": [
     "Kurze Geschichten",
     "Lange Bücher",
     "Zeitungen",
     "Briefe"
    ],
    "answer": 0
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Warum wird Leos Gesicht in der Klasse rot?",
    "answer": "Weil ihm das Vorlesen schwerfällt und er sich unsicher fühlt."
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "„Leo ist stolz.“ Wie fühlt er sich?",
    "options": [
     "Er freut sich, weil er etwas geschafft hat.",
     "Er ist traurig.",
     "Er ist müde.",
     "Er hat Angst."
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Was hat Leo geholfen?",
    "options": [
     "Jeden Tag üben und lange Wörter in Silben teilen",
     "Viel fernsehen",
     "Nicht mehr lesen",
     "Schneller sprechen"
    ],
    "answer": 0
   }
  ]
 },
 {
  "id": "busplan",
  "title": "Mit dem Bus ins Schwimmbad",
  "type": "Fahrplan",
  "level": 3,
  "format": "doc",
  "modes": [
   "woerter",
   "verstehen"
  ],
  "text": "Mia und ihr Bruder Jan wollen am Mittwochnachmittag ins Schwimmbad. Sie wohnen in der Nähe der Haltestelle „Kirche“. Das Schwimmbad öffnet um 14 Uhr. Eine Fahrkarte brauchen sie nicht, denn in Luxemburg ist der Bus gratis.\n\n## Buslinie 7: Kirche → Schwimmbad\nHaltestelle | Bus 1 | Bus 2 | Bus 3\nKirche | 13:20 | 13:50 | 14:20\nRathaus | 13:24 | 13:54 | 14:24\nBahnhof | 13:30 | 14:00 | 14:30\nSchwimmbad | 13:38 | 14:08 | 14:38\n\nAchtung: Am Sonntag fährt kein Bus.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wann fährt der erste Bus an der Haltestelle „Kirche“ ab?",
    "options": [
     "13:20",
     "13:24",
     "13:50",
     "14:20"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Reihenfolge",
    "q": "Welche Haltestelle kommt nach dem Rathaus?",
    "options": [
     "Kirche",
     "Bahnhof",
     "Schwimmbad",
     "Schule"
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Mia und Jan verpassen den Bus um 13:50 an der Kirche. Wann kommen sie mit dem nächsten Bus am Schwimmbad an?",
    "options": [
     "13:38",
     "14:08",
     "14:20",
     "14:38"
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Wie lange fährt der Bus von der Kirche bis zum Schwimmbad?",
    "options": [
     "8 Minuten",
     "Eine Stunde",
     "30 Minuten",
     "18 Minuten"
    ],
    "answer": 3
   },
   {
    "kind": "open",
    "skill": "Finden",
    "q": "Warum brauchen Mia und Jan keine Fahrkarte?",
    "answer": "Weil der Bus in Luxemburg gratis ist."
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Können Mia und Jan am Sonntag mit diesem Bus fahren?",
    "options": [
     "Ja, um 13:20.",
     "Nein, am Sonntag fährt kein Bus.",
     "Ja, aber nur mit Bus 3.",
     "Ja, jeden Tag."
    ],
    "answer": 1
   }
  ]
 },
 {
  "id": "schatzsuche",
  "title": "Die Schatzsuche",
  "type": "Geschichte",
  "level": 3,
  "text": "Am Sonntag findet Elif im Garten einen alten Zettel unter einem Stein. Darauf steht: „Geh zehn Schritte zum Apfelbaum. Dann schau in das Vogelhaus.“ Elif holt sofort ihren kleinen Bruder Can.\n\nZusammen zählen sie die Schritte. Im Vogelhaus liegt ein zweiter Zettel: „Jetzt suche dort, wo Papa die Fahrräder abstellt.“ Die Kinder laufen zur Garage. Hinter dem Rad liegt eine Schachtel mit einem Schloss. Aber wo ist der Schlüssel?\n\nCan entdeckt auf dem Deckel eine kleine Zeichnung von einer Gießkanne. Elif hebt die grüne Gießkanne hoch. Darunter klebt der Schlüssel! In der Schachtel finden sie Schokoladentaler und eine Karte: „Gut gemacht, ihr Schatzsucher! Liebe Grüße, Opa.“",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wo findet Elif den ersten Zettel?",
    "options": [
     "Im Vogelhaus",
     "Unter einem Stein",
     "In der Garage",
     "Unter der Gießkanne"
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Reihenfolge",
    "q": "In welcher Reihenfolge suchen die Kinder?",
    "options": [
     "Garage – Vogelhaus – Gießkanne",
     "Gießkanne – Garage – Vogelhaus",
     "Vogelhaus – Gießkanne – Garage",
     "Vogelhaus – Garage – Gießkanne"
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Was ist in der Schachtel?",
    "options": [
     "Schokoladentaler und eine Karte",
     "Spielzeugautos",
     "Ein Buch",
     "Ein Schlüssel"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "„Can entdeckt eine Zeichnung.“ Was bedeutet „entdecken“?",
    "options": [
     "Etwas malen",
     "Etwas verstecken",
     "Etwas finden, das man vorher nicht gesehen hat",
     "Etwas kaputt machen"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Wer hat die Schatzsuche vorbereitet?",
    "options": [
     "Opa",
     "Papa",
     "Can",
     "Die Nachbarin"
    ],
    "answer": 0
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Warum war die Zeichnung auf dem Deckel wichtig?",
    "answer": "Sie hat gezeigt, wo der Schlüssel versteckt war: unter der Gießkanne."
   }
  ]
 },
 {
  "id": "mond",
  "title": "Der Mond",
  "type": "Sachtext",
  "level": 3,
  "text": "Der Mond ist der Nachbar der Erde im Weltall. Er ist viel kleiner als die Erde und hat kein eigenes Licht. Er leuchtet nur, weil die Sonne ihn anstrahlt.\n\nManchmal sehen wir einen runden Vollmond, manchmal nur eine schmale Sichel. Das liegt daran, dass der Mond um die Erde wandert. Für eine Runde braucht er ungefähr einen Monat. Je nachdem, wo er gerade steht, sehen wir einen größeren oder kleineren Teil seiner hellen Seite.\n\nAuf dem Mond gibt es keine Luft und kein Wasser. Deshalb können dort keine Pflanzen und Tiere leben. Vor mehr als fünfzig Jahren sind zum ersten Mal Menschen auf dem Mond gelandet. Ihre Fußspuren sind immer noch da, denn auf dem Mond gibt es keinen Wind.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Warum leuchtet der Mond?",
    "options": [
     "Er hat eigenes Licht.",
     "Die Sonne strahlt ihn an.",
     "Er ist aus Feuer.",
     "Die Sterne strahlen ihn an."
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wie lange braucht der Mond für eine Runde um die Erde?",
    "options": [
     "Einen Tag",
     "Eine Woche",
     "Ungefähr einen Monat",
     "Ein Jahr"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "Was ist eine „Sichel“ beim Mond?",
    "options": [
     "Ein ganz runder Mond",
     "Ein Stern",
     "Eine Wolke",
     "Ein schmaler, gebogener Mond"
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Was gibt es auf dem Mond NICHT?",
    "options": [
     "Fußspuren",
     "Luft",
     "Licht von der Sonne",
     "Eine helle Seite"
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Warum sind die Fußspuren noch da?",
    "options": [
     "Weil es dort keinen Wind gibt.",
     "Weil sie aus Stein sind.",
     "Weil Astronauten sie putzen.",
     "Weil es dort oft regnet."
    ],
    "answer": 0
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Warum können auf dem Mond keine Tiere leben?",
    "answer": "Weil es dort keine Luft und kein Wasser gibt."
   }
  ]
 },
 {
  "id": "muell",
  "title": "Müll trennen",
  "type": "Sachtext",
  "level": 3,
  "text": "In vielen Familien gibt es zu Hause mehrere Mülleimer. Das ist kein Zufall: Wir trennen den Müll, damit man vieles wiederverwerten kann. Das nennt man Recycling.\n\nAltpapier, zum Beispiel alte Zeitungen und Kartons, kommt in die Papiertonne. Daraus macht man neues Papier. Leere Glasflaschen bringt man zum Glascontainer. Plastikflaschen, Dosen und Getränkekartons gehören in einen besonderen Sack. Apfelreste, Bananenschalen und Kaffeesatz kommen in die Biotonne. Daraus wird Erde für den Garten.\n\nWer Müll trennt, schützt die Umwelt. Noch besser ist es aber, wenig Müll zu machen. Eine Trinkflasche und eine Brotdose kann man jeden Tag wieder benutzen.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wohin kommen alte Zeitungen?",
    "options": [
     "In die Biotonne",
     "In die Papiertonne",
     "In den Glascontainer",
     "In den Sack für Plastik"
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Was wird aus den Resten in der Biotonne?",
    "options": [
     "Neues Papier",
     "Neue Flaschen",
     "Erde für den Garten",
     "Plastik"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "Was bedeutet „wiederverwerten“?",
    "options": [
     "Aus Altem etwas Neues machen",
     "Etwas wegwerfen",
     "Etwas verstecken",
     "Etwas kaufen"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Lea hat eine leere Saftdose. Wohin gehört sie?",
    "options": [
     "In die Papiertonne",
     "In die Biotonne",
     "In den Glascontainer",
     "In den besonderen Sack"
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Was ist laut Text noch besser als Müll trennen?",
    "options": [
     "Mehr kaufen",
     "Wenig Müll machen",
     "Den Müll vergraben",
     "Den Müll verstecken"
    ],
    "answer": 1
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Warum sind eine Trinkflasche und eine Brotdose gut für die Umwelt?",
    "answer": "Weil man sie jeden Tag wieder benutzen kann. So gibt es weniger Müll."
   }
  ]
 },
 {
  "id": "pfannkuchen",
  "title": "Pfannkuchen",
  "type": "Rezept",
  "level": 3,
  "format": "doc",
  "text": "## Pfannkuchen\nFür vier Pfannkuchen brauchst du:\n- 2 Eier\n- 250 Milliliter Milch\n- 125 Gramm Mehl\n- eine Prise Salz\n- etwas Butter für die Pfanne\n\n1. Schlage die Eier in eine Schüssel.\n2. Gib die Milch dazu und verrühre alles.\n3. Rühre das Mehl und das Salz unter, bis keine Klümpchen mehr da sind.\n4. Lass einen Erwachsenen die Butter in der Pfanne heiß machen.\n5. Gieße eine kleine Kelle Teig in die Pfanne.\n6. Wende den Pfannkuchen, wenn die Unterseite goldbraun ist.\n\nTipp: Mit Apfelmus oder etwas Zucker schmecken Pfannkuchen besonders gut.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wie viele Eier brauchst du?",
    "options": [
     "Eins",
     "Zwei",
     "Drei",
     "Vier"
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Reihenfolge",
    "q": "Was machst du direkt nach den Eiern?",
    "options": [
     "Die Butter heiß machen",
     "Das Mehl unterrühren",
     "Den Pfannkuchen wenden",
     "Die Milch dazugeben"
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "„Wende den Pfannkuchen.“ Was machst du?",
    "options": [
     "Du schneidest ihn klein.",
     "Du isst ihn auf.",
     "Du drehst ihn auf die andere Seite.",
     "Du stellst ihn in den Kühlschrank."
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Warum soll ein Erwachsener die Pfanne heiß machen?",
    "options": [
     "Weil Butter teuer ist.",
     "Weil eine heiße Pfanne gefährlich sein kann.",
     "Weil es dann schneller geht.",
     "Weil Kinder keine Pfannkuchen mögen."
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wie viel Mehl brauchst du?",
    "options": [
     "125 Gramm",
     "250 Gramm",
     "2 Kilo",
     "4 Löffel"
    ],
    "answer": 0
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Woran merkst du, dass du den Teig lange genug gerührt hast?",
    "answer": "Wenn keine Klümpchen mehr im Teig sind."
   }
  ]
 },
 {
  "id": "bauernhof",
  "title": "Ferien auf dem Bauernhof",
  "type": "Geschichte",
  "level": 3,
  "text": "In den Ferien besucht Jonas seine Tante auf dem Bauernhof. Schon um sechs Uhr kräht der Hahn. Jonas reibt sich die Augen und zieht seine Gummistiefel an.\n\nZuerst helfen sie im Kuhstall. Die Kühe werden mit einer Maschine gemolken. „Jede Kuh gibt am Tag ungefähr fünfundzwanzig Liter Milch“, erklärt die Tante. Danach füttert Jonas die Hühner und sammelt die Eier ein. Ein Ei ist noch ganz warm.\n\nAm Nachmittag darf Jonas auf dem Traktor mitfahren. Er ist laut und wackelt, aber Jonas hält sich gut fest. Am Abend ist er so müde, dass er beim Essen fast einschläft. „Morgen will ich wieder helfen!“, murmelt er.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wen besucht Jonas?",
    "options": [
     "Seinen Onkel",
     "Seine Oma",
     "Seinen Freund",
     "Seine Tante"
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wer weckt Jonas um sechs Uhr?",
    "options": [
     "Die Tante",
     "Der Hahn",
     "Der Traktor",
     "Eine Kuh"
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Reihenfolge",
    "q": "Was macht Jonas zuerst?",
    "options": [
     "Er fährt Traktor.",
     "Er sammelt Eier.",
     "Er hilft im Kuhstall.",
     "Er isst zu Abend."
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "„Jonas murmelt.“ Wie spricht er?",
    "options": [
     "Leise und undeutlich",
     "Sehr laut",
     "Singend",
     "Wütend"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Warum ist ein Ei noch ganz warm?",
    "options": [
     "Weil die Sonne darauf scheint.",
     "Weil ein Huhn es gerade erst gelegt hat.",
     "Weil es gekocht ist.",
     "Weil der Traktor warm ist."
    ],
    "answer": 1
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Hat Jonas der Tag auf dem Bauernhof gefallen? Woran erkennst du das?",
    "answer": "Ja. Er sagt: „Morgen will ich wieder helfen!“"
   }
  ]
 },
 {
  "id": "fouer",
  "title": "Auf der Schueberfouer",
  "type": "Geschichte",
  "level": 3,
  "text": "Ende August ist es endlich so weit: Die Schueberfouer in der Stadt Luxemburg beginnt. Sofia geht mit ihren Eltern und ihrer Freundin Ana hin. Schon von Weitem hören sie Musik und sehen das große Riesenrad.\n\nZuerst fahren die Mädchen Autoscooter. Ana lenkt wild und lacht laut. Dann kaufen sie Zuckerwatte. Sie ist rosa und klebt an den Fingern. Papa möchte unbedingt Gromperekichelcher essen. Das sind knusprige Kartoffelpuffer.\n\nZum Schluss fahren alle zusammen mit dem Riesenrad. Ganz oben hält es kurz an. Sofia kann über die ganze Stadt schauen. Die Lichter glitzern wie Sterne. „Nächstes Jahr kommen wir wieder“, sagt Sofia.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wann beginnt die Schueberfouer?",
    "options": [
     "Im Dezember",
     "Ende August",
     "Im Frühling",
     "An Ostern"
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Reihenfolge",
    "q": "Was machen die Mädchen zuerst?",
    "options": [
     "Riesenrad fahren",
     "Zuckerwatte kaufen",
     "Autoscooter fahren",
     "Kartoffelpuffer essen"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "Was sind Gromperekichelcher?",
    "options": [
     "Bratwürste",
     "Süße Bonbons",
     "Kleine Kuchen",
     "Knusprige Kartoffelpuffer"
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wie ist die Zuckerwatte?",
    "options": [
     "Rosa und klebrig",
     "Blau und hart",
     "Gelb und salzig",
     "Weiß und kalt"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Warum kann Sofia über die ganze Stadt schauen?",
    "options": [
     "Weil sie auf einem Turm steht.",
     "Weil das Riesenrad ganz oben anhält.",
     "Weil sie ein Fernglas hat.",
     "Weil Papa sie trägt."
    ],
    "answer": 1
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Hat Sofia der Abend gefallen? Woran merkst du das?",
    "answer": "Ja. Sie sagt: „Nächstes Jahr kommen wir wieder.“"
   }
  ]
 },
 {
  "id": "museum",
  "title": "Tiere der Nacht im Museum",
  "type": "Plakat",
  "level": 3,
  "format": "doc",
  "modes": [
   "woerter",
   "verstehen"
  ],
  "text": "## Ausstellung: Tiere der Nacht\nKomm ins Museum und entdecke Eulen, Fledermäuse und Füchse!\n\nTag | Öffnungszeit\nDienstag bis Freitag | 10:00 – 18:00\nSamstag und Sonntag | 10:00 – 17:00\nMontag | geschlossen\n\nEintritt | Preis\nKinder unter 6 Jahren | gratis\nKinder ab 6 Jahren | 3 Euro\nErwachsene | 5 Euro\n\nJeden Mittwoch um 15 Uhr: Führung mit Taschenlampen für Kinder.\nBitte die Tiere nicht anfassen!",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "An welchem Tag ist das Museum geschlossen?",
    "options": [
     "Montag",
     "Mittwoch",
     "Samstag",
     "Sonntag"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Was kostet der Eintritt für ein Kind mit 8 Jahren?",
    "options": [
     "Nichts",
     "3 Euro",
     "5 Euro",
     "8 Euro"
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Mama, Lisa (8 Jahre) und Tom (4 Jahre) gehen ins Museum. Wie viel bezahlen sie zusammen?",
    "options": [
     "11 Euro",
     "5 Euro",
     "13 Euro",
     "8 Euro"
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Familie Weber kommt am Samstag um 17:30 Uhr. Was passiert?",
    "options": [
     "Sie können noch eine Stunde bleiben.",
     "Das Museum ist schon geschlossen.",
     "Sie bekommen eine Führung.",
     "Der Eintritt ist gratis."
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wann gibt es die Führung mit Taschenlampen?",
    "options": [
     "Jeden Montag um 10 Uhr",
     "Jeden Tag",
     "Jeden Mittwoch um 15 Uhr",
     "Jeden Sonntag um 17 Uhr"
    ],
    "answer": 2
   },
   {
    "kind": "open",
    "skill": "Finden",
    "q": "Welche Tiere kann man in der Ausstellung entdecken?",
    "answer": "Eulen, Fledermäuse und Füchse."
   }
  ]
 },
 {
  "id": "kantine",
  "title": "Der Speiseplan",
  "type": "Speiseplan",
  "level": 3,
  "format": "doc",
  "modes": [
   "woerter",
   "verstehen"
  ],
  "text": "## Speiseplan der Schulkantine\nWoche vom 16. bis 20. November\n\nTag | Hauptgericht | Nachtisch\nMontag | Nudeln mit Tomatensoße | Apfel\nDienstag | Hähnchen mit Reis und Erbsen | Joghurt\nMittwoch | Gemüsesuppe mit Brot | Pudding\nDonnerstag | Fisch mit Kartoffeln und Spinat | Birne\nFreitag | Pizza mit Gemüse | Obstsalat\n\nPreis pro Mittagessen: 2 Euro\nOhne Fleisch und Fisch: Montag, Mittwoch und Freitag\nBitte meldet euch bis Donnerstag für die nächste Woche an.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Was gibt es am Dienstag?",
    "options": [
     "Fisch mit Kartoffeln",
     "Gemüsesuppe",
     "Pizza mit Gemüse",
     "Hähnchen mit Reis und Erbsen"
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "An welchem Tag gibt es Pudding?",
    "options": [
     "Montag",
     "Dienstag",
     "Mittwoch",
     "Freitag"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Lina isst kein Fleisch und keinen Fisch. An welchen Tagen findet sie ein Hauptgericht?",
    "options": [
     "Montag, Mittwoch und Freitag",
     "Dienstag und Donnerstag",
     "Nur am Freitag",
     "Jeden Tag"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Ben isst von Montag bis Freitag in der Kantine. Wie viel kostet das zusammen?",
    "options": [
     "2 Euro",
     "5 Euro",
     "8 Euro",
     "10 Euro"
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Bis wann muss man sich für die nächste Woche anmelden?",
    "options": [
     "Bis Montag",
     "Bis Donnerstag",
     "Bis Mittwoch",
     "Bis Sonntag"
    ],
    "answer": 1
   },
   {
    "kind": "open",
    "skill": "Finden",
    "q": "Welchen Nachtisch gibt es am Freitag?",
    "answer": "Obstsalat."
   }
  ]
 },
 {
  "id": "baumhaus",
  "title": "Das Baumhaus",
  "type": "Geschichte",
  "level": 3,
  "text": "In den Sommerferien wollen Leon und seine Cousine Amira ein Baumhaus bauen. Opa hat alte Bretter in der Garage. Er sägt sie zurecht, und die Kinder dürfen die Schrauben festdrehen.\n\nZuerst bauen sie den Boden zwischen zwei dicke Äste. Danach kommen die Wände. Für das Dach nehmen sie eine grüne Plane, damit es drinnen trocken bleibt. Amira malt ein Schild: „Nur für Freunde!“\n\nAm letzten Tag fehlt noch die Leiter. Opa schüttelt den Kopf: „Ohne Leiter kommt keiner hinauf.“ Da hat Leon eine Idee. Er knotet ein dickes Seil und viele Holzstücke zusammen. So entsteht eine Strickleiter. Am Abend sitzen alle drei im Baumhaus und essen Kirschen.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wer hilft den Kindern?",
    "options": [
     "Papa",
     "Die Nachbarin",
     "Opa",
     "Mama"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Reihenfolge",
    "q": "Was bauen sie zuerst?",
    "options": [
     "Das Dach",
     "Die Wände",
     "Den Boden",
     "Die Leiter"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Warum nehmen sie eine Plane für das Dach?",
    "options": [
     "Weil sie schön grün ist.",
     "Weil Opa keine Bretter mehr hat.",
     "Damit niemand hineinschaut.",
     "Damit es drinnen trocken bleibt."
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "Was ist eine „Strickleiter“?",
    "options": [
     "Eine Leiter aus Seil und Holzstücken",
     "Eine Leiter aus Metall",
     "Eine Treppe aus Stein",
     "Ein Seil zum Springen"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Was bedeutet das Schild „Nur für Freunde!“?",
    "options": [
     "Erwachsene müssen draußen bleiben.",
     "Nur Freunde dürfen ins Baumhaus.",
     "Man kann dort Freunde kaufen.",
     "Das Baumhaus ist kaputt."
    ],
    "answer": 1
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Wie löst Leon das Problem mit der fehlenden Leiter?",
    "answer": "Er knotet ein Seil und Holzstücke zu einer Strickleiter zusammen."
   }
  ]
 },
 {
  "id": "fledermaus",
  "title": "Fledermäuse",
  "type": "Sachtext",
  "level": 3,
  "text": "Fledermäuse sind keine Vögel, sondern Säugetiere. Ihre Jungen trinken Milch bei der Mutter. Statt Federn haben Fledermäuse eine dünne Haut zwischen ihren langen Fingern. Damit können sie sehr geschickt fliegen.\n\nAm Tag schlafen Fledermäuse kopfüber in Höhlen, auf Dachböden oder in hohlen Bäumen. Nachts jagen sie Mücken, Motten und Käfer. Im Dunkeln finden sie sich mit ihren Ohren zurecht: Sie stoßen sehr hohe Rufe aus, die wir Menschen nicht hören. Das Echo verrät ihnen, wo ein Hindernis oder ein Insekt ist.\n\nIm Winter gibt es kaum Insekten. Deshalb halten Fledermäuse Winterschlaf. In Europa stehen alle Fledermäuse unter Schutz.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Was sind Fledermäuse?",
    "options": [
     "Säugetiere",
     "Vögel",
     "Insekten",
     "Fische"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wie schlafen Fledermäuse am Tag?",
    "options": [
     "In einem Nest",
     "Kopfüber",
     "Im Wasser",
     "Auf dem Rücken"
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "Was ist ein „Hindernis“?",
    "options": [
     "Ein leckeres Insekt",
     "Ein Schlafplatz",
     "Etwas, das im Weg ist",
     "Ein lauter Ruf"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Warum halten Fledermäuse Winterschlaf?",
    "options": [
     "Weil sie im Winter nicht fliegen können.",
     "Weil es im Winter zu laut ist.",
     "Weil sie keine Höhle finden.",
     "Weil es im Winter kaum Insekten gibt."
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wie finden sich Fledermäuse im Dunkeln zurecht?",
    "options": [
     "Mit einer kleinen Lampe",
     "Mit ihren Ohren und dem Echo",
     "Mit ihrer Nase",
     "Gar nicht"
    ],
    "answer": 1
   },
   {
    "kind": "open",
    "skill": "Finden",
    "q": "Was fressen Fledermäuse? Nenne zwei Tiere.",
    "answer": "Mücken, Motten und Käfer."
   }
  ]
 },
 {
  "id": "waldtag",
  "title": "Elternbrief: Waldtag",
  "type": "Brief",
  "level": 3,
  "format": "doc",
  "text": "## Elternbrief: Waldtag\nLiebe Eltern,\nam Donnerstag verbringt die Klasse den ganzen Schultag im Wald.\n\n- Treffpunkt: 8 Uhr am Schultor\n- Rückkehr: halb vier an der Schule\n- Bitte mitgeben: wetterfeste Kleidung, feste Schuhe, ein Pausenbrot und eine Trinkflasche\n- Bitte nicht mitgeben: Süßigkeiten und Handys\n\nWir gehen bei jedem Wetter. Nur bei Sturm bleiben wir in der Schule.\nBitte unterschreiben Sie den Abschnitt unten bis Montag.\n\nViele Grüße\nFrau Schmit",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wann ist der Waldtag?",
    "options": [
     "Am Montag",
     "Am Donnerstag",
     "Am Freitag",
     "Am Samstag"
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wo treffen sich die Kinder?",
    "options": [
     "Am Waldrand",
     "Am Bahnhof",
     "Am Schultor",
     "In der Turnhalle"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Was sollen die Kinder NICHT mitbringen?",
    "options": [
     "Süßigkeiten",
     "Ein Pausenbrot",
     "Feste Schuhe",
     "Eine Trinkflasche"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Am Donnerstag regnet es stark, aber es gibt keinen Sturm. Was passiert?",
    "options": [
     "Die Klasse bleibt in der Schule.",
     "Der Waldtag ist am Freitag.",
     "Die Kinder bleiben zu Hause.",
     "Die Klasse geht trotzdem in den Wald."
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "Was bedeutet „wetterfeste Kleidung“?",
    "options": [
     "Kleidung für den Sport",
     "Kleidung, die vor Regen und Kälte schützt",
     "Schöne Kleidung für ein Fest",
     "Kleidung für den Sommer"
    ],
    "answer": 1
   },
   {
    "kind": "open",
    "skill": "Finden",
    "q": "Wer hat den Brief geschrieben, und was sollen die Eltern bis Montag tun?",
    "answer": "Frau Schmit. Die Eltern sollen den Abschnitt unten unterschreiben."
   }
  ]
 },
 {
  "id": "burg",
  "title": "Auf der Burg Bourscheid",
  "type": "Geschichte",
  "level": 3,
  "text": "Am Sonntag fährt Familie Kremer zur Burg Bourscheid. Die alte Burg steht hoch auf einem Felsen über dem Fluss Sauer. Der Weg nach oben ist steil, und Nora muss ein paar Mal stehen bleiben.\n\nOben gehen sie durch ein großes Tor. Von der Burg sind nur noch dicke Mauern und Türme übrig. Ein Schild erklärt: Früher wohnten hier Ritter mit ihren Familien. Nora klettert die Wendeltreppe in einem Turm hinauf. Von oben sieht sie den Fluss, Wälder und kleine Dörfer.\n\nIm Burghof stellt sich Nora vor, wie die Menschen hier gelebt haben. „Ob die Kinder damals auch Verstecken gespielt haben?“, fragt sie. Papa lacht: „Bestimmt. In so vielen Ecken kann man sich gut verstecken.“",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wo steht die Burg Bourscheid?",
    "options": [
     "Mitten in der Stadt",
     "Am Meer",
     "Hoch auf einem Felsen über der Sauer",
     "Auf einer Insel"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Warum muss Nora ein paar Mal stehen bleiben?",
    "options": [
     "Weil der Weg steil ist.",
     "Weil sie Angst hat.",
     "Weil sie ein Schild liest.",
     "Weil es regnet."
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Was ist von der Burg noch übrig?",
    "options": [
     "Nur das Dach",
     "Dicke Mauern und Türme",
     "Gar nichts",
     "Die Möbel der Ritter"
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "Was ist eine „Wendeltreppe“?",
    "options": [
     "Eine sehr kurze Treppe",
     "Eine Treppe, die sich im Kreis nach oben dreht",
     "Eine Leiter",
     "Ein Aufzug"
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Was sieht Nora von oben?",
    "options": [
     "Das Meer und Schiffe",
     "Hohe Berge mit Schnee",
     "Eine große Stadt",
     "Den Fluss, Wälder und kleine Dörfer"
    ],
    "answer": 3
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Warum glaubt Papa, dass die Kinder damals auch Verstecken gespielt haben?",
    "answer": "Weil es in der Burg so viele Ecken gibt, in denen man sich verstecken kann."
   }
  ]
 },
 {
  "id": "kartoffel",
  "title": "Die Kartoffel",
  "type": "Sachtext",
  "level": 3,
  "text": "Die Kartoffel ist eine Pflanze, deren Knollen unter der Erde wachsen. Die Knollen sind der Teil, den wir essen. Über der Erde sieht man nur grüne Blätter und manchmal kleine weiße oder lila Blüten.\n\nUrsprünglich kommt die Kartoffel aus Südamerika. Erst vor einigen hundert Jahren brachten Seefahrer sie nach Europa. Heute wird sie fast überall angebaut, auch in Luxemburg.\n\nAus Kartoffeln kann man viele Gerichte machen: Pommes, Kartoffelbrei, Bratkartoffeln oder Kartoffelsuppe. Aber Vorsicht: Rohe Kartoffeln isst man nicht. Grüne Stellen und die Blätter der Pflanze sind sogar giftig. Deshalb schneidet man grüne Stellen großzügig weg.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wo wachsen die Kartoffelknollen?",
    "options": [
     "Am Baum",
     "An den Blüten",
     "Im Wasser",
     "Unter der Erde"
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Woher kommt die Kartoffel ursprünglich?",
    "options": [
     "Aus Asien",
     "Aus Afrika",
     "Aus Südamerika",
     "Aus Luxemburg"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "Was bedeutet „ursprünglich“?",
    "options": [
     "Am Anfang",
     "Heute",
     "Später",
     "Niemals"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Welche Teile der Pflanze sind giftig?",
    "options": [
     "Die Knollen ohne grüne Stellen",
     "Nur die Blüten",
     "Gar keine",
     "Die Blätter und grüne Stellen"
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Oma findet eine Kartoffel mit einer grünen Stelle. Was soll sie tun?",
    "options": [
     "Die Kartoffel roh essen.",
     "Die grüne Stelle großzügig wegschneiden.",
     "Die Kartoffel anmalen.",
     "Die grüne Stelle mitkochen."
    ],
    "answer": 1
   },
   {
    "kind": "open",
    "skill": "Finden",
    "q": "Nenne zwei Gerichte aus Kartoffeln.",
    "answer": "Zum Beispiel Pommes, Kartoffelbrei, Bratkartoffeln oder Kartoffelsuppe."
   }
  ]
 },
 {
  "id": "regenwurm",
  "title": "Der Regenwurm",
  "type": "Sachtext",
  "level": 3,
  "text": "Regenwürmer leben in der Erde. Sie haben keine Augen, keine Ohren und keine Beine. Trotzdem spüren sie mit ihrer Haut, ob es hell oder dunkel ist. Sie atmen sogar durch die Haut. Deshalb muss ihre Haut immer feucht sein.\n\nRegenwürmer graben lange Gänge. Dabei fressen sie Erde und alte Blätter. Was hinten wieder herauskommt, ist besonders gute Erde für Pflanzen. Durch die Gänge kommen außerdem Luft und Wasser tief in den Boden.\n\nNach einem starken Regen kriechen oft viele Regenwürmer aus der Erde. Wenn du einen auf dem Weg findest, kannst du ihn vorsichtig zurück auf die Wiese legen. Gärtner freuen sich über jeden Regenwurm.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Was hat ein Regenwurm NICHT?",
    "options": [
     "Eine Haut",
     "Augen",
     "Gänge in der Erde",
     "Einen langen Körper"
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Womit atmet der Regenwurm?",
    "options": [
     "Mit der Haut",
     "Mit der Nase",
     "Mit den Ohren",
     "Mit dem Mund"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Warum muss die Haut des Regenwurms feucht sein?",
    "options": [
     "Weil er gern badet.",
     "Weil er sonst friert.",
     "Weil er durch die Haut atmet.",
     "Weil er sonst nichts sieht."
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Warum sind Regenwürmer gut für den Garten?",
    "options": [
     "Sie fressen die Blumen.",
     "Sie verjagen die Vögel.",
     "Sie gießen die Pflanzen.",
     "Sie machen gute Erde und bringen Luft in den Boden."
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "Was bedeutet „kriechen“?",
    "options": [
     "Schnell fliegen",
     "Sich langsam am Boden bewegen",
     "Hoch springen",
     "Laut rufen"
    ],
    "answer": 1
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Was kannst du tun, wenn du einen Regenwurm auf dem Weg findest?",
    "answer": "Ihn vorsichtig zurück auf die Wiese legen."
   }
  ]
 },
 {
  "id": "klassensprecher",
  "title": "Die Wahl",
  "type": "Geschichte",
  "level": 3,
  "text": "Heute wählt die Klasse einen Klassensprecher. Wer möchte, darf sich vorstellen. Jonas sagt: „Ich will, dass wir in der Pause mehr Fußball spielen.“ Sara sagt: „Ich höre allen zu. Und wenn es Streit gibt, helfe ich, eine Lösung zu finden.“\n\nDann bekommt jedes Kind einen kleinen Zettel. Darauf schreibt es geheim einen Namen. Die Lehrerin sammelt die Zettel in einer Box. Zwei Kinder zählen an der Tafel: Jonas bekommt acht Stimmen, Sara bekommt zwölf.\n\nSara ist jetzt Klassensprecherin. Jonas ist zuerst ein bisschen enttäuscht. Doch Sara sagt: „Jonas, willst du mein Stellvertreter sein? Dann können wir zusammen fragen, ob es einen Fußballtag gibt.“ Jonas grinst und nickt.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Was möchte Jonas?",
    "options": [
     "Mehr Fußball in der Pause",
     "Mehr Hausaufgaben",
     "Eine neue Lehrerin",
     "Längere Ferien"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wie viele Stimmen bekommt Sara?",
    "options": [
     "Acht",
     "Zehn",
     "Zwölf",
     "Zwanzig"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "Was bedeutet „geheim“?",
    "options": [
     "Sehr schnell",
     "Laut für alle",
     "Mit bunten Stiften",
     "So, dass die anderen es nicht sehen"
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Wie viele Kinder haben gewählt?",
    "options": [
     "Zwanzig",
     "Acht",
     "Zwölf",
     "Vierundzwanzig"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Warum fragt Sara Jonas, ob er ihr Stellvertreter sein will?",
    "options": [
     "Weil sie keine Lust hat.",
     "Damit er nicht traurig ist und sie zusammenarbeiten können.",
     "Weil die Lehrerin es so will.",
     "Weil sie Fußball nicht mag."
    ],
    "answer": 1
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Was hat Sara versprochen, und wie zeigt sie das am Ende?",
    "answer": "Sie wollte allen zuhören und bei Streit helfen. Am Ende findet sie mit Jonas eine gemeinsame Lösung."
   }
  ]
 },
 {
  "id": "delfine",
  "title": "Delfine",
  "type": "Sachtext",
  "level": 3,
  "text": "Delfine leben im Meer und sehen ein bisschen aus wie Fische. Trotzdem sind sie Säugetiere. Sie atmen Luft und müssen dafür immer wieder an die Wasseroberfläche. Das Atemloch liegt oben auf ihrem Kopf.\n\nDelfine leben in Gruppen, die man Schulen nennt. Sie verständigen sich mit Pfiffen und Klicklauten. Jeder Delfin hat sogar einen eigenen Pfiff, fast wie einen Namen. Mit den Klicklauten finden sie auch Fische im trüben Wasser: Das Echo zeigt ihnen, wo die Beute ist.\n\nWie schlafen Delfine, wenn sie doch atmen müssen? Sie lassen immer nur eine Hälfte ihres Gehirns schlafen. Die andere Hälfte bleibt wach und passt auf.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Warum müssen Delfine immer wieder an die Wasseroberfläche?",
    "options": [
     "Um Fische zu fangen",
     "Um zu schlafen",
     "Um sich zu sonnen",
     "Um Luft zu atmen"
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wo liegt das Atemloch?",
    "options": [
     "Am Bauch",
     "An der Schwanzflosse",
     "Oben auf dem Kopf",
     "Neben den Augen"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "Was bedeutet hier das Wort „Schule“?",
    "options": [
     "Ein Haus zum Lernen",
     "Eine Gruppe von Delfinen",
     "Ein Schwarm Fische",
     "Ein Boot"
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Womit verständigen sich Delfine?",
    "options": [
     "Mit Pfiffen und Klicklauten",
     "Mit Farben",
     "Mit Bellen",
     "Gar nicht"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Warum lassen Delfine nur eine Hälfte des Gehirns schlafen?",
    "options": [
     "Weil sie keine Zeit haben.",
     "Weil das Wasser zu kalt ist.",
     "Weil sie auch im Schlaf atmen und aufpassen müssen.",
     "Weil sie nachts singen."
    ],
    "answer": 2
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Woran erkennt man, dass Delfine keine Fische sind?",
    "answer": "Sie atmen Luft durch ein Atemloch. Sie sind Säugetiere."
   }
  ]
 },
 {
  "id": "kino",
  "title": "Das Kinoprogramm",
  "type": "Programm",
  "level": 3,
  "format": "doc",
  "modes": [
   "woerter",
   "verstehen"
  ],
  "text": "## Kino am Markt – Filme für Kinder\nSamstag und Sonntag\n\nFilm | Beginn | Dauer | Alter\nPip und das Wolkenschaf | 14:00 | 80 Minuten | ab 0 Jahren\nAbenteuer im Eisland | 15:30 | 95 Minuten | ab 6 Jahren\nDie Weltraum-Katzen | 17:15 | 90 Minuten | ab 6 Jahren\nDas Geheimnis im Moor | 18:00 | 105 Minuten | ab 12 Jahren\n\nEintritt: Kinder 6 Euro, Erwachsene 9 Euro\nPopcorn: klein 3 Euro, groß 5 Euro",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wann beginnt „Abenteuer im Eisland“?",
    "options": [
     "Um 14:00 Uhr",
     "Um 15:30 Uhr",
     "Um 17:15 Uhr",
     "Um 18:00 Uhr"
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Tim ist 8 Jahre alt. Welchen Film darf er NICHT sehen?",
    "options": [
     "Pip und das Wolkenschaf",
     "Abenteuer im Eisland",
     "Die Weltraum-Katzen",
     "Das Geheimnis im Moor"
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Welcher Film dauert am längsten?",
    "options": [
     "Das Geheimnis im Moor",
     "Pip und das Wolkenschaf",
     "Abenteuer im Eisland",
     "Die Weltraum-Katzen"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Papa geht mit zwei Kindern ins Kino. Was kostet der Eintritt zusammen?",
    "options": [
     "15 Euro",
     "18 Euro",
     "21 Euro",
     "27 Euro"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "„Pip und das Wolkenschaf“ beginnt um 14:00 Uhr und dauert 80 Minuten. Wann ist der Film zu Ende?",
    "options": [
     "Um 14:40 Uhr",
     "Um 15:20 Uhr",
     "Um 15:00 Uhr",
     "Um 16:20 Uhr"
    ],
    "answer": 1
   },
   {
    "kind": "open",
    "skill": "Finden",
    "q": "Wie viel kostet ein großes Popcorn?",
    "answer": "5 Euro."
   }
  ]
 },
 {
  "id": "hanna",
  "title": "Hanna",
  "type": "Geschichte",
  "level": 3,
  "text": "Nach den Ferien kommt ein neues Mädchen in die Klasse. Sie heißt Hanna und sitzt im Rollstuhl. Am ersten Tag sind alle ein bisschen schüchtern. Niemand weiß so recht, was er sagen soll.\n\nIn der Pause fragt Ben: „Tut dir das weh?“ Hanna lacht. „Nein. Meine Beine können nicht laufen, aber sonst bin ich wie du. Und mit dem Rollstuhl bin ich schneller als du!“ Sie flitzt los, und Ben rennt hinterher.\n\nBald merkt die Klasse, dass es an der Schule ein Problem gibt: Zur Bibliothek führen nur Treppen. Die Kinder schreiben zusammen einen Brief an den Bürgermeister. Ein paar Wochen später wird eine Rampe gebaut. Jetzt kann Hanna allein in die Bibliothek fahren.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Warum sitzt Hanna im Rollstuhl?",
    "options": [
     "Weil sie müde ist.",
     "Weil ihre Beine nicht laufen können.",
     "Weil sie sich den Fuß gebrochen hat.",
     "Weil sie gern fährt."
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "Was bedeutet „schüchtern“?",
    "options": [
     "Vorsichtig und ein bisschen unsicher",
     "Laut und frech",
     "Sehr müde",
     "Sehr wütend"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Welches Problem gibt es an der Schule?",
    "options": [
     "Der Schulhof ist zu klein.",
     "Es gibt keine Bücher.",
     "Die Tür ist kaputt.",
     "Zur Bibliothek führen nur Treppen."
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "An wen schreiben die Kinder einen Brief?",
    "options": [
     "An die Lehrerin",
     "An Hannas Eltern",
     "An den Bürgermeister",
     "An die Zeitung"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Was zeigt Hannas Antwort auf Bens Frage?",
    "options": [
     "Dass sie traurig ist.",
     "Dass sie Ben nicht mag.",
     "Dass sie nicht reden will.",
     "Dass sie fröhlich und selbstbewusst ist."
    ],
    "answer": 3
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Was haben die Kinder mit ihrem Brief erreicht?",
    "answer": "Es wurde eine Rampe gebaut. Hanna kann jetzt allein in die Bibliothek fahren."
   }
  ]
 },
 {
  "id": "erstehilfe",
  "title": "Erste Hilfe bei einer kleinen Wunde",
  "type": "Anleitung",
  "level": 3,
  "format": "doc",
  "text": "## Erste Hilfe bei einer kleinen Wunde\nDu bist hingefallen und hast dir das Knie aufgeschürft? So hilfst du dir:\n\n1. Bleib ruhig und sag einem Erwachsenen Bescheid.\n2. Wasch dir die Hände mit Seife.\n3. Spüle die Wunde vorsichtig mit sauberem Wasser ab.\n4. Tupfe die Haut rund um die Wunde trocken.\n5. Klebe ein Pflaster darauf.\n\nWichtig: Wenn eine Wunde stark blutet, drück ein sauberes Tuch darauf und hol sofort einen Erwachsenen. Im Notfall ruft man die Nummer 112 an.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Reihenfolge",
    "q": "Was machst du zuerst?",
    "options": [
     "Ein Pflaster aufkleben",
     "Die Wunde abspülen",
     "Ruhig bleiben und einem Erwachsenen Bescheid sagen",
     "Die Haut trocken tupfen"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Womit spülst du die Wunde ab?",
    "options": [
     "Mit Saft",
     "Mit sauberem Wasser",
     "Mit Seife und Sand",
     "Mit Milch"
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Welche Nummer ruft man im Notfall an?",
    "options": [
     "110",
     "911",
     "123",
     "112"
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "Was bedeutet „tupfen“?",
    "options": [
     "Ganz leicht und kurz drücken",
     "Fest reiben",
     "Kräftig schlagen",
     "Kratzen"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Eine Wunde blutet stark. Was tust du?",
    "options": [
     "Ein kleines Pflaster aufkleben.",
     "Ein sauberes Tuch darauf drücken und sofort einen Erwachsenen holen.",
     "Einfach weiterspielen.",
     "Die Wunde mit Erde abdecken."
    ],
    "answer": 1
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Warum wäschst du dir vorher die Hände?",
    "answer": "Damit kein Schmutz und keine Keime in die Wunde kommen."
   }
  ]
 },
 {
  "id": "tierheim",
  "title": "Ein Hund aus dem Tierheim",
  "type": "Geschichte",
  "level": 3,
  "text": "Familie Becker möchte einen Hund. Mama sagt: „Wir schauen zuerst im Tierheim. Dort warten viele Tiere auf ein neues Zuhause.“ Am Samstag fahren alle hin.\n\nIm Tierheim bellt es von überall. Ein großer schwarzer Hund springt wild am Gitter hoch. Ein kleiner brauner Hund liegt still in der Ecke. „Das ist Kiko“, sagt die Pflegerin. „Er ist schüchtern, weil er lange allein auf der Straße gelebt hat.“\n\nMilan setzt sich vor das Gitter und wartet. Nach einer Weile kommt Kiko langsam näher und schnuppert an seiner Hand. Dann wedelt er vorsichtig mit dem Schwanz. Milan schaut seine Eltern an. Die nicken. Zwei Wochen später darf Kiko einziehen. Er bekommt ein Körbchen neben Milans Bett.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wo sucht Familie Becker einen Hund?",
    "options": [
     "Im Tierheim",
     "Im Zoo",
     "Bei den Nachbarn",
     "Auf dem Bauernhof"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wie heißt der kleine braune Hund?",
    "options": [
     "Bello",
     "Kiko",
     "Bobo",
     "Milan"
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Warum ist Kiko schüchtern?",
    "options": [
     "Weil er krank ist.",
     "Weil er Milan nicht mag.",
     "Weil er müde ist.",
     "Weil er lange allein auf der Straße gelebt hat."
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "Was macht ein Hund, wenn er „schnuppert“?",
    "options": [
     "Er bellt laut.",
     "Er beißt.",
     "Er riecht an etwas.",
     "Er schläft."
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Warum setzt sich Milan vor das Gitter und wartet?",
    "options": [
     "Weil er müde ist.",
     "Damit Kiko keine Angst hat und selbst kommen kann.",
     "Weil die Pflegerin es befiehlt.",
     "Weil er den großen Hund mag."
    ],
    "answer": 1
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Woran merkt Milan, dass Kiko ihm langsam vertraut?",
    "answer": "Kiko kommt näher, schnuppert an seiner Hand und wedelt mit dem Schwanz."
   }
  ]
 },
 {
  "id": "brot",
  "title": "Vom Korn zum Brot",
  "type": "Sachtext",
  "level": 3,
  "text": "Vom Korn zum Brot ist es ein langer Weg. Im Herbst säen die Bauern Getreide, zum Beispiel Weizen oder Roggen. Im Sommer sind die Ähren reif und goldgelb. Dann fährt der Mähdrescher über das Feld. Er schneidet die Halme ab und trennt die Körner vom Stroh.\n\nDie Körner kommen in die Mühle. Dort werden sie zwischen schweren Walzen zu Mehl gemahlen. Der Bäcker mischt das Mehl mit Wasser, Salz und Hefe zu einem Teig. Die Hefe sorgt dafür, dass der Teig aufgeht und schön locker wird.\n\nIn der Nacht, wenn alle schlafen, backt der Bäcker die Brote im heißen Ofen. Am Morgen duftet es dann in der Bäckerei nach frischem Brot.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wann sind die Ähren reif?",
    "options": [
     "Im Frühling",
     "Im Sommer",
     "Im Herbst",
     "Im Winter"
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Was macht der Mähdrescher?",
    "options": [
     "Er backt das Brot.",
     "Er mahlt das Mehl.",
     "Er sät das Getreide.",
     "Er schneidet die Halme ab und trennt die Körner vom Stroh."
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Reihenfolge",
    "q": "Wohin kommen die Körner nach der Ernte?",
    "options": [
     "In die Mühle",
     "In den Ofen",
     "Zurück auf das Feld",
     "Direkt in den Teig"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "Was bedeutet „Der Teig geht auf“?",
    "options": [
     "Der Teig fällt herunter.",
     "Der Teig wird hart.",
     "Der Teig wird größer und lockerer.",
     "Der Teig wird kalt."
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Was mischt der Bäcker mit dem Mehl?",
    "options": [
     "Milch, Zucker und Eier",
     "Wasser, Salz und Hefe",
     "Öl und Essig",
     "Nur Wasser"
    ],
    "answer": 1
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Warum duftet es am Morgen in der Bäckerei so gut?",
    "answer": "Weil der Bäcker in der Nacht frisches Brot gebacken hat."
   }
  ]
 },
 {
  "id": "vianden",
  "title": "Ausflug zur Burg Vianden",
  "type": "Geschichte",
  "level": 4,
  "text": "Am Samstag fährt Tom mit seiner Oma nach Vianden. Schon vom Bus aus sieht er die Burg. Sie steht hoch oben auf einem Berg. „Dort haben früher Ritter gewohnt“, sagt Oma.\n\nDer Weg nach oben ist steil. Tom läuft voraus, aber bald muss er eine Pause machen. Er schnauft und setzt sich auf eine Bank. Oma lacht und gibt ihm einen Apfel.\n\nIn der Burg ist es kühl und ein bisschen dunkel. Tom sieht alte Rüstungen und lange Schwerter. In einem großen Saal steht ein Tisch, an dem zwanzig Menschen sitzen können. Tom stellt sich vor, wie die Ritter hier gegessen haben.\n\nZum Schluss steigen sie auf einen Turm. Von oben sieht Tom den Fluss und die kleinen Häuser der Stadt. „Das ist der schönste Ausflug des Jahres!“, ruft er. Auf dem Heimweg schläft er im Bus sofort ein.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Mit wem fährt Tom nach Vianden?",
    "options": [
     "Mit seiner Mama",
     "Mit seiner Klasse",
     "Mit seiner Oma",
     "Mit seinem Freund"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wo steht die Burg?",
    "options": [
     "Hoch oben auf einem Berg",
     "Am Meer",
     "Mitten im Wald",
     "Neben dem Bahnhof"
    ],
    "answer": 0
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Warum muss Tom auf dem Weg eine Pause machen?",
    "answer": "Weil der Weg steil ist und er zu schnell gelaufen ist. Er ist müde."
   },
   {
    "kind": "mc",
    "skill": "Reihenfolge",
    "q": "Was macht Tom ganz zum Schluss in der Burg?",
    "options": [
     "Er isst einen Apfel.",
     "Er steigt auf einen Turm.",
     "Er sieht Schwerter.",
     "Er setzt sich auf eine Bank."
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "„Er schnauft.“ Was bedeutet das?",
    "options": [
     "Er atmet laut, weil er müde ist.",
     "Er singt ein Lied.",
     "Er weint.",
     "Er schläft."
    ],
    "answer": 0
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Warum schläft Tom im Bus sofort ein?",
    "answer": "Weil er von dem langen Ausflug müde ist."
   }
  ]
 },
 {
  "id": "luca",
  "title": "Der neue Junge",
  "type": "Geschichte",
  "level": 4,
  "text": "Am Montag steht ein neuer Junge vor der Klasse. Er heißt Luca und kommt aus Portugal. Er spricht noch nicht gut Deutsch. Als die Lehrerin ihn vorstellt, schaut er auf seine Schuhe.\n\nIn der Pause steht Luca allein an der Wand. Noah sieht ihn und überlegt. Soll er zu ihm gehen? Er kennt ihn ja gar nicht. Dann holt er tief Luft und geht los. „Willst du mit uns Fußball spielen?“, fragt er. Luca versteht nicht alles. Aber er sieht den Ball und nickt schnell.\n\nLuca spielt sehr gut. Er schießt sogar ein Tor, und alle Kinder jubeln. Nach der Pause setzt sich Luca neben Noah. Er zeigt auf ein Bild im Buch und fragt: „Wie heißt das auf Deutsch?“ Noah erklärt es ihm. Dann bringt Luca ihm ein Wort auf Portugiesisch bei.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Woher kommt Luca?",
    "options": [
     "Aus Portugal",
     "Aus Spanien",
     "Aus Italien",
     "Aus Frankreich"
    ],
    "answer": 0
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Wie fühlt sich Luca am Anfang, als er auf seine Schuhe schaut?",
    "answer": "Er ist schüchtern oder unsicher, weil er neu ist und noch niemanden kennt."
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Warum überlegt Noah zuerst, ob er zu Luca gehen soll?",
    "options": [
     "Weil er Luca nicht mag.",
     "Weil er müde ist.",
     "Weil die Pause vorbei ist.",
     "Weil er ihn noch gar nicht kennt."
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "„Er holt tief Luft.“ Was bedeutet das hier?",
    "options": [
     "Er hat Angst vor dem Wind.",
     "Er macht sich Mut.",
     "Er ist krank.",
     "Er schläft ein."
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Reihenfolge",
    "q": "Was passiert nach dem Fußballspiel?",
    "options": [
     "Noah fragt Luca, ob er mitspielt.",
     "Die Lehrerin stellt Luca vor.",
     "Luca setzt sich neben Noah.",
     "Luca steht allein an der Wand."
    ],
    "answer": 2
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Warum nickt Luca schnell, obwohl er nicht alles versteht?",
    "answer": "Weil er den Ball sieht und versteht, dass er mitspielen darf. Er will gern mitspielen."
   }
  ]
 },
 {
  "id": "sonne",
  "title": "Die Sonne",
  "type": "Sachtext",
  "level": 4,
  "text": "Die Sonne ist ein Stern. Sie sieht klein aus, weil sie sehr weit weg ist. In Wirklichkeit ist sie riesig. Mehr als eine Million Erden würden in die Sonne passen.\n\nDie Sonne ist eine heiße Kugel aus Gas. Sie gibt uns Licht und Wärme. Ohne die Sonne könnten keine Pflanzen wachsen. Dann gäbe es auch keine Tiere und keine Menschen auf der Erde.\n\nDie Erde dreht sich um die Sonne. Für eine Runde braucht sie ein ganzes Jahr. Gleichzeitig dreht sich die Erde auch um sich selbst. Deshalb gibt es Tag und Nacht. Die Seite der Erde, die zur Sonne zeigt, hat Tag. Auf der anderen Seite ist Nacht.\n\nWichtig: Schau nie direkt in die Sonne! Ihr Licht ist so stark, dass es deinen Augen schadet.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Was ist die Sonne?",
    "options": [
     "Ein Planet",
     "Ein Mond",
     "Ein Stern",
     "Eine Wolke"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Warum sieht die Sonne so klein aus?",
    "options": [
     "Weil sie klein ist.",
     "Weil es Nacht ist.",
     "Weil sie kalt ist.",
     "Weil sie sehr weit weg ist."
    ],
    "answer": 3
   },
   {
    "kind": "open",
    "skill": "Finden",
    "q": "Wie lange braucht die Erde für eine Runde um die Sonne?",
    "answer": "Ein ganzes Jahr."
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "„In Wirklichkeit ist sie riesig.“ Was bedeutet „riesig“?",
    "options": [
     "Sehr klein",
     "Sehr kalt",
     "Sehr groß",
     "Sehr leise"
    ],
    "answer": 2
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Warum gäbe es ohne die Sonne keine Tiere?",
    "answer": "Weil ohne Sonne keine Pflanzen wachsen, und dann hätten die Tiere nichts zu fressen."
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "In Luxemburg ist gerade Tag. Was stimmt dann?",
    "options": [
     "Unsere Seite der Erde zeigt zur Sonne.",
     "Die Erde steht still.",
     "Die Sonne dreht sich um uns.",
     "Es ist immer Winter."
    ],
    "answer": 0
   }
  ]
 },
 {
  "id": "bienen",
  "title": "Wie Bienen Honig machen",
  "type": "Sachtext",
  "level": 4,
  "text": "In einem Bienenstock leben im Sommer bis zu fünfzigtausend Bienen. Fast alle sind Arbeiterinnen. Es gibt nur eine Königin. Sie legt jeden Tag viele Eier.\n\nDie Arbeiterinnen haben viele Aufgaben. Die jungen Bienen putzen den Stock und füttern die Larven. Die älteren Bienen fliegen hinaus und sammeln Nektar. Das ist ein süßer Saft in den Blüten. Mit ihrem langen Rüssel saugen sie den Nektar auf und bringen ihn in den Bienenstock.\n\nDort geben die Bienen den Nektar von Biene zu Biene weiter. Dabei wird er immer dicker. Dann füllen sie ihn in kleine Waben aus Wachs. Mit ihren Flügeln fächeln sie Luft darüber, bis der Honig fertig ist. Zum Schluss verschließen sie die Waben mit einem Deckel aus Wachs.\n\nFür ein einziges Glas Honig müssen die Bienen viele Millionen Blüten besuchen. Deshalb ist jedes Glas Honig etwas ganz Besonderes.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wie viele Königinnen gibt es in einem Bienenstock?",
    "options": [
     "Keine",
     "Fünfzigtausend",
     "Zehn",
     "Eine"
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "Was ist Nektar?",
    "options": [
     "Ein Teil vom Bienenstock",
     "Ein süßer Saft in den Blüten",
     "Eine junge Biene",
     "Ein Deckel aus Wachs"
    ],
    "answer": 1
   },
   {
    "kind": "open",
    "skill": "Finden",
    "q": "Welche Aufgaben haben die jungen Bienen?",
    "answer": "Sie putzen den Stock und füttern die Larven."
   },
   {
    "kind": "mc",
    "skill": "Reihenfolge",
    "q": "Was machen die Bienen ganz zum Schluss?",
    "options": [
     "Sie saugen Nektar auf.",
     "Sie fächeln Luft über den Honig.",
     "Sie verschließen die Waben mit Wachs.",
     "Sie geben den Nektar weiter."
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Warum ist jedes Glas Honig „etwas ganz Besonderes“?",
    "options": [
     "Weil die Bienen sehr viel Arbeit dafür machen.",
     "Weil Honig teuer ist.",
     "Weil Honig blau ist.",
     "Weil nur die Königin Honig macht."
    ],
    "answer": 0
   },
   {
    "kind": "open",
    "skill": "Finden",
    "q": "Wozu brauchen die Bienen ihre Flügel im Bienenstock?",
    "answer": "Sie fächeln damit Luft über den Honig, bis er fertig ist."
   }
  ]
 },
 {
  "id": "wolf",
  "title": "Der Wolf",
  "type": "Sachtext",
  "level": 4,
  "text": "Wölfe leben in Rudeln. Ein Rudel ist eine Familie: Vater, Mutter und ihre Jungen aus den letzten zwei Jahren. Zusammen gehen sie auf die Jagd und versorgen die Welpen. Mit lautem Heulen halten die Wölfe Kontakt, auch wenn sie weit voneinander entfernt sind.\n\nWölfe haben eine sehr feine Nase. Sie riechen andere Tiere schon aus großer Entfernung. Meistens jagen sie Rehe und Wildschweine. Dabei fangen sie oft alte oder kranke Tiere, denn die sind langsamer. So bleibt der Wald gesund.\n\nVor langer Zeit gab es in vielen Ländern Europas keine Wölfe mehr. Die Menschen hatten sie gejagt, weil sie Angst um ihre Schafe hatten. Heute sind Wölfe geschützt und kommen langsam zurück. Für Menschen sind sie fast nie gefährlich. Meistens laufen sie weg, sobald sie einen Menschen bemerken.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wer gehört zu einem Rudel?",
    "options": [
     "Viele fremde Wölfe",
     "Nur die Männchen",
     "Vater, Mutter und ihre Jungen",
     "Nur die Welpen"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wie halten Wölfe Kontakt?",
    "options": [
     "Mit Heulen",
     "Mit Bellen",
     "Mit Pfeifen",
     "Gar nicht"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "Was sind Welpen?",
    "options": [
     "Alte Wölfe",
     "Rehe",
     "Schafe",
     "Junge Wölfe"
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Warum fangen Wölfe oft alte oder kranke Tiere?",
    "options": [
     "Weil sie besser schmecken.",
     "Weil sie langsamer sind.",
     "Weil sie größer sind.",
     "Weil sie lauter sind."
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Warum gab es früher in vielen Ländern keine Wölfe mehr?",
    "options": [
     "Weil es zu kalt war.",
     "Weil sie kein Futter fanden.",
     "Weil die Menschen sie gejagt hatten.",
     "Weil sie ans Meer gezogen sind."
    ],
    "answer": 2
   },
   {
    "kind": "open",
    "skill": "Finden",
    "q": "Was macht ein Wolf meistens, wenn er einen Menschen bemerkt?",
    "answer": "Er läuft weg."
   }
  ]
 },
 {
  "id": "pausenbrot",
  "title": "Der Pausenbrot-Dieb",
  "type": "Geschichte",
  "level": 4,
  "text": "Seit drei Tagen passiert in der Klasse von Frau Becker etwas Seltsames: Jeden Tag fehlt einem Kind etwas aus dem Rucksack. Am Montag war es Paulas Käsebrot, am Dienstag Omars Brezel und am Mittwoch Ellas Müsliriegel. Die Kinder sind ratlos.\n\n„Wir müssen den Dieb fangen!“, flüstert Omar. In der großen Pause verstecken sich Paula und er hinter dem Vorhang im Klassenzimmer. Alles ist still. Nur das Fenster steht einen Spalt offen.\n\nPlötzlich raschelt etwas. Eine Elster hüpft auf das Fensterbrett, schaut sich um und springt zu Ellas Rucksack. Mit ihrem Schnabel zieht sie geschickt eine Packung Kekse heraus. „Da ist der Dieb!“, ruft Paula. Die Elster erschrickt und fliegt ohne Beute davon.\n\nAb jetzt bleibt das Fenster in der Pause zu. Und die Kinder legen der Elster draußen ein paar Krümel hin.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Was fehlte am Dienstag?",
    "options": [
     "Paulas Käsebrot",
     "Omars Brezel",
     "Ellas Müsliriegel",
     "Ellas Kekse"
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wo verstecken sich Paula und Omar?",
    "options": [
     "Unter dem Tisch",
     "Im Schrank",
     "Auf dem Schulhof",
     "Hinter dem Vorhang"
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "„Die Kinder sind ratlos.“ Was bedeutet das?",
    "options": [
     "Sie wissen nicht, was sie tun sollen.",
     "Sie sind sehr fröhlich.",
     "Sie sind sehr müde.",
     "Sie haben Hunger."
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Reihenfolge",
    "q": "Was passiert zuerst?",
    "options": [
     "Die Elster fliegt weg.",
     "Paula ruft: „Da ist der Dieb!“",
     "Die Elster hüpft auf das Fensterbrett.",
     "Die Elster zieht Kekse heraus."
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Wie ist die Elster ins Klassenzimmer gekommen?",
    "options": [
     "Durch die Tür",
     "Durch das offene Fenster",
     "Durch den Kamin",
     "In einem Rucksack"
    ],
    "answer": 1
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Warum bleibt das Fenster ab jetzt in der Pause zu?",
    "answer": "Damit die Elster nicht mehr hereinkommt und kein Essen mehr stiehlt."
   }
  ]
 },
 {
  "id": "muellerthal",
  "title": "Wandern im Müllerthal",
  "type": "Geschichte",
  "level": 4,
  "text": "An einem sonnigen Samstag wandert Familie Hoffmann im Müllerthal. Diese Gegend nennt man auch „Kleine Luxemburger Schweiz“. Überall stehen riesige Felsen aus Sandstein, und zwischen ihnen führen schmale Wege hindurch.\n\nMila und ihr Bruder Felix laufen voraus. An einer Stelle ist der Weg so eng, dass Papa seinen Rucksack abnehmen muss. Die Felsen sind feucht und mit grünem Moos bedeckt. Es riecht nach Erde und Wald. Felix ruft laut „Hallo!“, und das Echo antwortet.\n\nNach zwei Stunden erreichen sie einen kleinen Wasserfall. Das Wasser rauscht unter einer alten Brücke über die Steine. Hier machen sie Picknick mit belegten Broten und Äpfeln. Mila zieht die Schuhe aus und hält die Füße ins Wasser. „Brrr!“, ruft sie und lacht. Auf dem Rückweg sind alle müde, aber glücklich.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wie nennt man das Müllerthal auch?",
    "options": [
     "Großes Tal",
     "Luxemburger Alpen",
     "Kleine Luxemburger Schweiz",
     "Grüner Wald"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Woraus sind die Felsen?",
    "options": [
     "Aus Holz",
     "Aus Sandstein",
     "Aus Glas",
     "Aus Eis"
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Warum muss Papa seinen Rucksack abnehmen?",
    "options": [
     "Weil er zu schwer ist.",
     "Weil sie Picknick machen.",
     "Weil es regnet.",
     "Weil der Weg sehr eng ist."
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "Was ist ein Echo?",
    "options": [
     "Ein Tier im Wald",
     "Ein Ruf, der zurückkommt",
     "Ein Wasserfall",
     "Ein großer Stein"
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Reihenfolge",
    "q": "Was passiert nach dem Echo?",
    "options": [
     "Sie erreichen den Wasserfall.",
     "Papa nimmt den Rucksack ab.",
     "Mila und Felix laufen voraus.",
     "Sie fahren mit dem Bus los."
    ],
    "answer": 0
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Warum ruft Mila „Brrr!“?",
    "answer": "Weil das Wasser sehr kalt ist."
   }
  ]
 },
 {
  "id": "blaetter",
  "title": "Warum werden Blätter bunt?",
  "type": "Sachtext",
  "level": 4,
  "text": "Im Sommer sind die Blätter der Bäume grün. Das liegt an einem Farbstoff namens Chlorophyll. Mit seiner Hilfe machen Pflanzen aus Sonnenlicht, Wasser und Luft ihre Nahrung.\n\nIm Herbst wird es kälter, und die Tage werden kürzer. Für den Baum lohnt es sich nicht mehr, in den Blättern Nahrung herzustellen. Deshalb baut er das grüne Chlorophyll ab und speichert wertvolle Stoffe in Ästen und Wurzeln. Jetzt kommen gelbe und orange Farben zum Vorschein, die schon den ganzen Sommer in den Blättern versteckt waren. Manche Bäume, zum Beispiel der Ahorn, bilden zusätzlich einen roten Farbstoff.\n\nZum Schluss wächst zwischen Blatt und Zweig eine dünne Trennschicht, und das Blatt fällt ab. So verliert der Baum im Winter kein Wasser über die Blätter. Aus dem gefrorenen Boden könnte er nämlich kaum neues Wasser holen.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wie heißt der grüne Farbstoff in den Blättern?",
    "options": [
     "Ahorn",
     "Trennschicht",
     "Chlorophyll",
     "Sonnenlicht"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Woraus machen Pflanzen ihre Nahrung?",
    "options": [
     "Aus Erde und Steinen",
     "Aus Sonnenlicht, Wasser und Luft",
     "Aus Regenwürmern",
     "Aus Schnee"
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Woher kommen die gelben und orangen Farben im Herbst?",
    "options": [
     "Sie waren schon den ganzen Sommer da, aber versteckt.",
     "Sie werden im Herbst neu gemalt.",
     "Der Regen färbt die Blätter.",
     "Die Sonne verbrennt die Blätter."
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "Was bedeutet „zum Vorschein kommen“?",
    "options": [
     "Verschwinden",
     "Herunterfallen",
     "Wachsen",
     "Sichtbar werden"
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Warum wirft der Baum im Herbst seine Blätter ab?",
    "options": [
     "Weil die Blätter zu schwer sind.",
     "Damit er im Winter kein Wasser über die Blätter verliert.",
     "Weil die Vögel sie brauchen.",
     "Damit er schneller wächst."
    ],
    "answer": 1
   },
   {
    "kind": "open",
    "skill": "Finden",
    "q": "Welcher Baum bildet zusätzlich einen roten Farbstoff?",
    "answer": "Der Ahorn."
   }
  ]
 },
 {
  "id": "insektenhotel",
  "title": "Das Insektenhotel",
  "type": "Geschichte",
  "level": 4,
  "text": "In der Klasse von Herrn Weber gibt es ein neues Projekt: Die Kinder wollen ein Insektenhotel für den Schulgarten bauen. „Viele Wildbienen finden keinen Platz mehr für ihre Eier“, erklärt Herr Weber. „Wir können ihnen helfen.“\n\nAm Montag bringt jeder etwas mit. Malik hat Bambusstäbe, Lotta bringt Tannenzapfen und Ziegelsteine mit Löchern. Zusammen füllen sie einen Holzkasten mit vielen kleinen Fächern. Herr Weber bohrt Löcher in einen dicken Holzklotz. „Das Holz muss innen ganz glatt sein“, sagt er, „sonst verletzen sich die Bienen an den Flügeln.“\n\nDas Insektenhotel bekommt einen sonnigen Platz an der Mauer, geschützt vor Regen. Einige Wochen später ruft Lotta aufgeregt: „Schaut mal!“ Mehrere Löcher sind mit Lehm verschlossen. Herr Weber lächelt: „Dahinter liegen Bieneneier. Unser Hotel hat seine ersten Gäste.“",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Warum wollen die Kinder ein Insektenhotel bauen?",
    "options": [
     "Weil sie Insekten fangen wollen.",
     "Weil es eine Hausaufgabe ist.",
     "Weil sie Honig wollen.",
     "Weil viele Wildbienen keinen Platz für ihre Eier finden."
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Was bringt Malik mit?",
    "options": [
     "Tannenzapfen",
     "Ziegelsteine",
     "Bambusstäbe",
     "Einen Holzklotz"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Warum muss das Holz innen ganz glatt sein?",
    "options": [
     "Damit es schön aussieht.",
     "Damit sich die Bienen nicht an den Flügeln verletzen.",
     "Damit es nicht nass wird.",
     "Damit keine Vögel hineinkommen."
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wo steht das Insektenhotel?",
    "options": [
     "An einem sonnigen Platz an der Mauer",
     "Im Klassenzimmer",
     "Im Schatten unter einem Baum",
     "Auf dem Dach"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "„Lotta ruft aufgeregt.“ Wie ist Lotta?",
    "options": [
     "Müde und gelangweilt",
     "Traurig",
     "Wütend",
     "Sehr gespannt und voller Freude"
    ],
    "answer": 3
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Woran merken die Kinder, dass das Hotel „erste Gäste“ hat?",
    "answer": "Mehrere Löcher sind mit Lehm verschlossen. Dahinter liegen Bieneneier."
   }
  ]
 },
 {
  "id": "mosel",
  "title": "Die Mosel",
  "type": "Sachtext",
  "level": 4,
  "text": "Die Mosel ist ein langer Fluss. Sie entspringt in den Vogesen in Frankreich, fließt dann durch Luxemburg und Deutschland und mündet bei Koblenz in den Rhein. Auf einem langen Stück bildet sie die Grenze zwischen Luxemburg und Deutschland.\n\nAn den steilen Hängen am Fluss wachsen viele Weinreben. Sonne und Wärme lassen die Trauben gut reifen. Im Herbst werden sie gelesen, das heißt geerntet.\n\nAuf der Mosel fahren große Schiffe. Damit sie die Höhenunterschiede überwinden können, gibt es Schleusen. Das sind Kammern, in denen das Wasser steigt oder sinkt, bis das Schiff auf der richtigen Höhe ist.\n\nBeim kleinen Moseldorf Schengen treffen sich Luxemburg, Deutschland und Frankreich. Hier wurde ein berühmter Vertrag unterschrieben. Seitdem können Menschen in vielen Ländern Europas ohne Passkontrolle über die Grenze fahren.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wo entspringt die Mosel?",
    "options": [
     "In den Vogesen in Frankreich",
     "In Luxemburg",
     "In Koblenz",
     "In der Schweiz"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "In welchen Fluss mündet die Mosel?",
    "options": [
     "In die Sauer",
     "In die Donau",
     "In den Rhein",
     "Direkt ins Meer"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "Was bedeutet hier „Trauben lesen“?",
    "options": [
     "Ein Buch über Trauben lesen",
     "Trauben ernten",
     "Trauben zählen",
     "Trauben waschen"
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Was ist eine Schleuse?",
    "options": [
     "Eine Brücke für Autos",
     "Ein Hafen für Fischer",
     "Ein Weinberg",
     "Eine Kammer, in der das Wasser steigt oder sinkt"
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Warum ist Schengen berühmt?",
    "options": [
     "Weil dort die Mosel beginnt.",
     "Weil dort die meisten Schiffe fahren.",
     "Weil dort ein Vertrag über Reisen ohne Passkontrolle unterschrieben wurde.",
     "Weil dort der Rhein beginnt."
    ],
    "answer": 2
   },
   {
    "kind": "open",
    "skill": "Finden",
    "q": "Welche drei Länder treffen sich bei Schengen?",
    "answer": "Luxemburg, Deutschland und Frankreich."
   }
  ]
 },
 {
  "id": "streit",
  "title": "Der Streit",
  "type": "Geschichte",
  "level": 4,
  "text": "Emma und Zoe sind beste Freundinnen. Doch an diesem Morgen gibt es Streit. Emma hat Zoes neuen Glitzerstift ausgeliehen und ihn aus Versehen zerbrochen. „Du machst immer alles kaputt!“, ruft Zoe wütend. „Das stimmt gar nicht!“, ruft Emma zurück. In der Pause spielen die beiden nicht zusammen.\n\nAm Nachmittag sitzt Emma allein auf der Bank. Eigentlich hat Zoe recht: Der Stift ist kaputt. Aber „immer“ stimmt nicht. Emma nimmt ein Blatt und malt eine Karte mit zwei Mädchen, die sich an den Händen halten. Darunter schreibt sie: „Es tut mir leid wegen deines Stiftes. Ich kaufe dir von meinem Taschengeld einen neuen.“\n\nAm nächsten Morgen legt sie die Karte auf Zoes Platz. Zoe liest sie lange. Dann dreht sie sich um und sagt leise: „Und mir tut es leid, dass ich ‚immer‘ gesagt habe.“ In der Pause spielen die beiden wieder Fangen, als wäre nichts gewesen.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Warum gibt es Streit?",
    "options": [
     "Zoe hat Emmas Pausenbrot gegessen.",
     "Emma hat aus Versehen Zoes Stift zerbrochen.",
     "Emma ist zu spät gekommen.",
     "Zoe hat gelogen."
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Was malt Emma auf die Karte?",
    "options": [
     "Einen Stift",
     "Ein Herz und Sterne",
     "Zwei Mädchen, die sich an den Händen halten",
     "Eine Schule"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "Was bedeutet „aus Versehen“?",
    "options": [
     "Ohne es zu wollen",
     "Mit Absicht",
     "Sehr schnell",
     "Mit Freude"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Was an Zoes Satz findet Emma ungerecht?",
    "options": [
     "Dass der Stift kaputt sein soll.",
     "Dass Zoe so leise spricht.",
     "Dass Zoe den Stift nicht mag.",
     "Das Wort „immer“."
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Was zeigt das Ende der Geschichte?",
    "options": [
     "Die beiden bleiben böse aufeinander.",
     "Die beiden haben sich wieder vertragen.",
     "Zoe hat selbst einen neuen Stift gekauft.",
     "Emma spielt jetzt mit anderen Kindern."
    ],
    "answer": 1
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Wofür entschuldigt sich Zoe?",
    "answer": "Dass sie gesagt hat, Emma mache „immer“ alles kaputt."
   }
  ]
 },
 {
  "id": "roemer",
  "title": "Die Römer",
  "type": "Sachtext",
  "level": 4,
  "text": "Vor ungefähr zweitausend Jahren herrschten die Römer über große Teile Europas. Auch das Gebiet, in dem heute Luxemburg liegt, gehörte zu ihrem Reich. Die Römer kamen aus Italien und sprachen Latein.\n\nSie bauten gerade, gepflasterte Straßen, damit Soldaten und Händler schnell reisen konnten. Reiche Römer wohnten in großen Landhäusern, die man Villen nennt. Manche Häuser hatten sogar eine Fußbodenheizung: Warme Luft strömte unter dem Boden hindurch. In Echternach kann man heute noch die Reste einer großen römischen Villa besichtigen.\n\nDie Römer haben auch unsere Sprache beeinflusst. Viele deutsche Wörter stammen aus dem Lateinischen, zum Beispiel Mauer, Fenster, Straße und Wein. Wenn du also das Wort „Fenster“ sagst, sprichst du ein kleines bisschen Latein.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wann herrschten die Römer über große Teile Europas?",
    "options": [
     "Vor ungefähr hundert Jahren",
     "Vor einer Million Jahren",
     "Vor ungefähr zweitausend Jahren",
     "Im letzten Jahr"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Welche Sprache sprachen die Römer?",
    "options": [
     "Latein",
     "Französisch",
     "Deutsch",
     "Englisch"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Warum bauten die Römer gerade, gepflasterte Straßen?",
    "options": [
     "Damit Soldaten und Händler schnell reisen konnten.",
     "Weil sie gern spazieren gingen.",
     "Damit Kinder darauf spielen konnten.",
     "Weil es keine Wälder gab."
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "Was ist eine „Fußbodenheizung“?",
    "options": [
     "Ein warmer Teppich",
     "Ein Ofen in der Küche",
     "Warme Socken",
     "Eine Heizung unter dem Boden"
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Welches dieser Wörter stammt laut Text aus dem Lateinischen?",
    "options": [
     "Hund",
     "Baum",
     "Fenster",
     "Brot"
    ],
    "answer": 2
   },
   {
    "kind": "open",
    "skill": "Finden",
    "q": "Wo in Luxemburg kann man die Reste einer römischen Villa sehen?",
    "answer": "In Echternach."
   }
  ]
 },
 {
  "id": "vulkane",
  "title": "Vulkane",
  "type": "Sachtext",
  "level": 4,
  "text": "Tief unter der Erde ist es so heiß, dass Gestein schmilzt. Dieses flüssige Gestein heißt Magma. An manchen Stellen drückt das Magma nach oben, bis es durch die Erdkruste bricht. Dann bricht ein Vulkan aus. Sobald das Magma an der Oberfläche herausfließt, nennt man es Lava. Sie kann über tausend Grad heiß sein und glüht rot.\n\nWenn die Lava abkühlt, wird sie wieder hart. Bei jedem Ausbruch kommt eine neue Schicht dazu. So wächst der Vulkan zu einem Berg.\n\nAuch in der Nähe von Luxemburg gab es Vulkane: in der Eifel in Deutschland. Sie sind schon sehr lange ruhig. Bei manchen Ausbrüchen gab es gewaltige Explosionen. Zurück blieben runde Krater, die sich mit Wasser gefüllt haben. Diese Seen heißen Maare. Ein Vulkan, der heute noch oft ausbricht, ist der Ätna in Italien.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wie heißt das flüssige Gestein unter der Erde?",
    "options": [
     "Magma",
     "Lava",
     "Krater",
     "Maar"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wann nennt man das flüssige Gestein Lava?",
    "options": [
     "Wenn es tief unter der Erde ist",
     "Wenn es kalt und hart ist",
     "Wenn es in einem See liegt",
     "Wenn es an der Oberfläche herausfließt"
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Wie wird ein Vulkan zu einem Berg?",
    "options": [
     "Menschen schütten Erde auf.",
     "Bei jedem Ausbruch kommt eine neue Schicht harter Lava dazu.",
     "Der Wind trägt Sand herbei.",
     "Bäume wachsen darauf."
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "Was ist ein „Maar“?",
    "options": [
     "Ein hoher Berg",
     "Ein Fluss aus Lava",
     "Ein runder See in einem alten Vulkankrater",
     "Ein heißer Stein"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Welcher Vulkan bricht heute noch oft aus?",
    "options": [
     "Ein Vulkan in der Eifel",
     "Der Ätna in Italien",
     "Ein Vulkan in Luxemburg",
     "Gar keiner"
    ],
    "answer": 1
   },
   {
    "kind": "open",
    "skill": "Finden",
    "q": "Wo in der Nähe von Luxemburg gab es Vulkane?",
    "answer": "In der Eifel in Deutschland."
   }
  ]
 },
 {
  "id": "detektive",
  "title": "Die verschwundenen Bücher",
  "type": "Geschichte",
  "level": 4,
  "text": "In der Schulbibliothek verschwinden Bücher. Jeden Freitag fehlen zwei oder drei, aber am Montag stehen sie wieder im Regal. Frau Lentz, die Bibliothekarin, ist ratlos.\n\nAyla und Tim gründen einen Detektivclub. Sie schreiben auf, welche Bücher fehlen: ein Buch über Pferde, eines über Dinosaurier und ein Kochbuch für Kinder. „Komisch“, sagt Tim. „Die haben nichts miteinander zu tun.“ Ayla blättert im Ausleihheft. Am Freitag wurde nichts eingetragen.\n\nAm nächsten Freitag verstecken sich die beiden hinter dem großen Globus. Kurz vor Schulschluss kommt der Hausmeister herein. Er steckt drei Bücher in seine Tasche. Dann sieht er die Kinder und erklärt: „Mein Enkel liegt im Krankenhaus. Ich lese ihm am Wochenende vor und bringe die Bücher am Montag zurück. Ich habe vergessen, sie einzutragen.“ Frau Lentz lacht erleichtert und schenkt ihm ein eigenes Ausleihheft.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wann verschwinden die Bücher?",
    "options": [
     "Jeden Montag",
     "Jeden Tag",
     "In den Ferien",
     "Jeden Freitag"
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wo verstecken sich Ayla und Tim?",
    "options": [
     "Unter dem Tisch",
     "Hinter dem großen Globus",
     "Im Schrank",
     "Hinter dem Regal"
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "Was ist ein „Ausleihheft“?",
    "options": [
     "Ein Malheft",
     "Ein Kochbuch",
     "Ein Heft, in das man einträgt, wer welches Buch mitnimmt",
     "Ein Tagebuch"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Warum findet Tim die verschwundenen Bücher „komisch“?",
    "options": [
     "Weil sie nichts miteinander zu tun haben.",
     "Weil sie alle über Pferde sind.",
     "Weil sie ganz neu sind.",
     "Weil sie sehr dick sind."
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Wofür braucht der Hausmeister die Bücher?",
    "options": [
     "Er liest seinem kranken Enkel daraus vor.",
     "Er will sie verkaufen.",
     "Er will sie reparieren.",
     "Er will kochen lernen."
    ],
    "answer": 0
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Warum schenkt Frau Lentz dem Hausmeister ein eigenes Ausleihheft?",
    "answer": "Damit er die Bücher in Zukunft einträgt und niemand mehr suchen muss."
   }
  ]
 },
 {
  "id": "briefportugal",
  "title": "Ein Brief nach Portugal",
  "type": "Brief",
  "level": 4,
  "format": "doc",
  "text": "## Ein Brief nach Portugal\nLuxemburg, den 10. November\n\nLiebe Oma,\n\nich vermisse dich! Jetzt wohne ich schon ein Jahr in Luxemburg. Am Anfang war alles fremd. Hier spricht man gleich mehrere Sprachen: Mit meinen Freunden rede ich Luxemburgisch, lesen und schreiben lerne ich auf Deutsch, und Französisch lernen wir auch.\n\nDeutsch ist für mich am schwersten. Aber ich übe jeden Tag zehn Minuten Lesen, und es wird immer besser. Letzte Woche hatte ich im Diktat nur zwei Fehler!\n\nIm Dezember besuchen wir dich endlich. Bitte back wieder deinen leckeren Kuchen mit Zimt!\n\nViele Küsse\ndein Mateo",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wem schreibt Mateo?",
    "options": [
     "Seinem Lehrer",
     "Seiner Oma",
     "Seinem Freund Noah",
     "Seiner Mama"
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wie lange wohnt Mateo schon in Luxemburg?",
    "options": [
     "Ein Jahr",
     "Einen Monat",
     "Zwei Jahre",
     "Zehn Jahre"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Welche Sprache spricht Mateo mit seinen Freunden?",
    "options": [
     "Deutsch",
     "Französisch",
     "Portugiesisch",
     "Luxemburgisch"
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "Was bedeutet „fremd“?",
    "options": [
     "Sehr lustig",
     "Ganz einfach",
     "Neu und unbekannt",
     "Sehr laut"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Warum wird Mateos Deutsch immer besser?",
    "options": [
     "Weil seine Oma Deutsch spricht.",
     "Weil er jeden Tag übt.",
     "Weil er keine Diktate schreibt.",
     "Weil er nur Französisch spricht."
    ],
    "answer": 1
   },
   {
    "kind": "open",
    "skill": "Finden",
    "q": "Wann besucht Mateo seine Oma, und was wünscht er sich?",
    "answer": "Im Dezember. Er wünscht sich, dass sie wieder ihren Kuchen mit Zimt backt."
   }
  ]
 },
 {
  "id": "draisine",
  "title": "Wie das Fahrrad erfunden wurde",
  "type": "Sachtext",
  "level": 4,
  "text": "Das Fahrrad ist eine erstaunliche Erfindung. Vor über zweihundert Jahren baute Karl Drais in Mannheim eine Laufmaschine aus Holz. Sie hatte zwei Räder und einen Lenker, aber keine Pedale. Man saß darauf und stieß sich mit den Füßen vom Boden ab, ähnlich wie bei einem Laufrad für kleine Kinder.\n\nSpäter befestigte man Pedale direkt am Vorderrad. Um schneller zu fahren, wurde das Vorderrad immer größer. So entstand das Hochrad. Sein Vorderrad war manchmal so hoch wie ein Erwachsener. Wer zu stark bremste, fiel leicht kopfüber herunter.\n\nErst als man die Pedale mit einer Kette mit dem Hinterrad verband, konnten beide Räder wieder gleich groß sein. Mit Reifen voller Luft wurde das Fahren endlich bequem. So sieht das Fahrrad im Grunde bis heute aus.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Woraus war die Laufmaschine von Karl Drais?",
    "options": [
     "Aus Metall",
     "Aus Plastik",
     "Aus Holz",
     "Aus Stein"
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Was fehlte der Laufmaschine?",
    "options": [
     "Der Lenker",
     "Die Räder",
     "Der Sitz",
     "Die Pedale"
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Warum wurde das Vorderrad beim Hochrad immer größer?",
    "options": [
     "Um schneller zu fahren.",
     "Damit es schöner aussieht.",
     "Damit Kinder es fahren können.",
     "Weil Holz billig war."
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "Was bedeutet „kopfüber“?",
    "options": [
     "Mit dem Kopf zuerst nach vorne",
     "Rückwärts",
     "Ganz langsam",
     "Auf den Füßen"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Reihenfolge",
    "q": "Was ist die richtige Reihenfolge?",
    "options": [
     "Hochrad – Laufmaschine – heutiges Fahrrad",
     "Laufmaschine – Hochrad – heutiges Fahrrad",
     "Heutiges Fahrrad – Hochrad – Laufmaschine",
     "Laufmaschine – heutiges Fahrrad – Hochrad"
    ],
    "answer": 1
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Warum konnten die Räder später wieder gleich groß sein?",
    "answer": "Weil die Pedale über eine Kette das Hinterrad antrieben."
   }
  ]
 },
 {
  "id": "wettrennen",
  "title": "Das Wettrennen",
  "type": "Geschichte",
  "level": 4,
  "text": "Beim Sportfest der Schule ist das Wettrennen über fünfzig Meter das Wichtigste für Samir. Er hat wochenlang geübt. Neben ihm am Start steht Luis, der schnellste Läufer der Klasse.\n\nDer Startpfiff ertönt. Samir rennt los, so schnell er kann. Nach der Hälfte liegt er knapp vorne. Doch plötzlich stolpert Luis neben ihm und fällt hin. Samir hört ihn aufschreien. Er zögert eine Sekunde. Dann dreht er um, hilft Luis hoch und stützt ihn. Zusammen humpeln sie ins Ziel, als Letzte.\n\nSamir ist enttäuscht, dass er keine Medaille bekommt. Doch bei der Siegerehrung ruft die Direktorin plötzlich seinen Namen. „Samir bekommt heute einen besonderen Preis“, sagt sie, „für Fairness.“ Alle klatschen, und Luis klatscht am lautesten.",
  "questions": [
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wie lang ist das Wettrennen?",
    "options": [
     "Zehn Meter",
     "Fünfzig Meter",
     "Hundert Meter",
     "Einen Kilometer"
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wer ist der schnellste Läufer der Klasse?",
    "options": [
     "Luis",
     "Samir",
     "Tim",
     "Die Direktorin"
    ],
    "answer": 0
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "Was bedeutet „zögern“?",
    "options": [
     "Schnell rennen",
     "Laut schreien",
     "Aufgeben",
     "Kurz warten, weil man unsicher ist"
    ],
    "answer": 3
   },
   {
    "kind": "mc",
    "skill": "Reihenfolge",
    "q": "Was macht Samir, nachdem Luis hingefallen ist?",
    "options": [
     "Er läuft schnell weiter ins Ziel.",
     "Er ruft die Lehrerin.",
     "Er zögert kurz und hilft Luis dann hoch.",
     "Er setzt sich hin."
    ],
    "answer": 2
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Wofür bekommt Samir den besonderen Preis?",
    "options": [
     "Weil er am schnellsten war.",
     "Weil er am meisten geübt hat.",
     "Weil er Luis geholfen hat, statt zu gewinnen.",
     "Weil er als Erster im Ziel war."
    ],
    "answer": 2
   },
   {
    "kind": "open",
    "skill": "Schließen",
    "q": "Was zeigt es, dass Luis „am lautesten“ klatscht?",
    "answer": "Dass er Samir sehr dankbar ist und sich für ihn freut."
   }
  ]
 }
]);
