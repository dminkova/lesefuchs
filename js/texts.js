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
     "Bobo",
     "Max",
     "Rex"
    ],
    "answer": 1
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
     "Er macht „Wau, wau!“",
     "Er frisst.",
     "Er schwimmt."
    ],
    "answer": 1
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
     "Es hat geschneit.",
     "Es ist Nacht.",
     "Die Sonne scheint."
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Mit wem baut Emma den Schneemann?",
    "options": [
     "Mit Mama",
     "Mit Papa",
     "Mit Oma",
     "Allein"
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Was bekommt der Schneemann als Nase?",
    "options": [
     "Einen Apfel",
     "Eine Karotte",
     "Einen Stein",
     "Eine Nuss"
    ],
    "answer": 1
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
     "Fußball",
     "Verstecken",
     "Basketball"
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wo bleibt der Ball hängen?",
    "options": [
     "Auf dem Dach",
     "In einem Baum",
     "Im Zaun",
     "Im Fenster"
    ],
    "answer": 1
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
     "Blau mit weißen Streifen",
     "Rot mit schwarzen Punkten",
     "Ganz grün",
     "Gelb mit roten Punkten"
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Was fressen Marienkäfer?",
    "options": [
     "Blätter",
     "Blattläuse",
     "Blumen",
     "Steine"
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "Was bedeutet „winzig“?",
    "options": [
     "Sehr groß",
     "Sehr klein",
     "Sehr schnell",
     "Sehr laut"
    ],
    "answer": 1
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
     "Papa",
     "Opa",
     "Mama",
     "Lea"
    ],
    "answer": 1
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
     "Ein Spielzeug, das im Wind fliegt",
     "Ein Vogel",
     "Ein Flugzeug"
    ],
    "answer": 1
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
     "Fleisch",
     "Körner und Apfel",
     "Schokolade",
     "Fisch"
    ],
    "answer": 1
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
     "Zur Schule",
     "Zum Zahnarzt",
     "In den Zoo",
     "Zur Oma"
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Was bekommt Mia am Ende?",
    "options": [
     "Ein Eis",
     "Einen Sticker",
     "Ein Buch",
     "Einen Ball"
    ],
    "answer": 1
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
     "Fliegen",
     "Fressen",
     "Rutschen"
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "„An Land watscheln sie.“ Wie gehen Pinguine?",
    "options": [
     "Sehr schnell und gerade",
     "Langsam und wackelig",
     "Auf einem Bein",
     "Rückwärts"
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Warum rutschen Pinguine auf dem Bauch?",
    "options": [
     "Weil sie müde sind.",
     "Weil sie so schneller sind.",
     "Weil sie fliegen wollen.",
     "Weil das Eis warm ist."
    ],
    "answer": 1
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
     "Du mixt alles.",
     "Du schneidest sie in kleine Stücke.",
     "Du trinkst den Shake.",
     "Du holst die Milch."
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wie lange mixt du alles?",
    "options": [
     "Eine Sekunde",
     "Eine Minute",
     "Eine Stunde",
     "Zehn Minuten"
    ],
    "answer": 1
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
     "Paul",
     "Rosa",
     "Esch"
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Wann beginnt die Party?",
    "options": [
     "Um 14 Uhr",
     "Um 15 Uhr",
     "Um 18 Uhr",
     "Am Mittwoch"
    ],
    "answer": 1
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
     "Weil sie viel draußen sind.",
     "Weil es ein Geschenk ist.",
     "Weil Paul das so mag."
    ],
    "answer": 1
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
     "Deutsch",
     "Sport",
     "Kunst"
    ],
    "answer": 1
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
     "Sie schneiden Gemüse.",
     "Sie essen Pizza.",
     "Sie gehen einkaufen."
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "„Der Teig muss ruhen.“ Was bedeutet das hier?",
    "options": [
     "Der Teig schläft im Bett.",
     "Man lässt den Teig eine Zeit lang liegen.",
     "Man isst den Teig.",
     "Man wirft den Teig weg."
    ],
    "answer": 1
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
     "Ein Buch",
     "Ein Fahrrad",
     "Einen Ball",
     "Ein Spiel"
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Reihenfolge",
    "q": "Was passiert zuerst?",
    "options": [
     "Max packt sein Geschenk aus.",
     "Max pustet die Kerzen aus.",
     "Die Freunde kommen.",
     "Sie spielen Verstecken."
    ],
    "answer": 1
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
     "Brummi",
     "Bär",
     "Max"
    ],
    "answer": 1
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
     "Er ruft im Supermarkt an.",
     "Er fährt zur Oma.",
     "Er sucht im Garten."
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "„flüstert er“: Wie spricht Ben?",
    "options": [
     "Sehr laut",
     "Ganz leise",
     "Wütend",
     "Singend"
    ],
    "answer": 1
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
     "Braun",
     "Grün",
     "Rot",
     "Gelb"
    ],
    "answer": 1
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
     "Rehe und Wildschweine",
     "Katzen",
     "Fische"
    ],
    "answer": 1
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
     "Beide Mannschaften haben gleich viele Tore.",
     "Die Blauen gewinnen.",
     "Das Spiel hört zu früh auf."
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Reihenfolge",
    "q": "Was passiert zuerst?",
    "options": [
     "Nora schießt ein Tor.",
     "Die Blauen schießen ein Tor.",
     "Sami rutscht aus.",
     "Alle lachen."
    ],
    "answer": 1
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
     "Er kommt zustande und ist dann da.",
     "Er fällt herunter.",
     "Er wird kleiner."
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Lea sieht einen Regenbogen. Wo steht die Sonne?",
    "options": [
     "Vor ihr",
     "Hinter ihr",
     "Unter ihr",
     "Es gibt keine Sonne."
    ],
    "answer": 1
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
     "Ein bisschen nass",
     "Sehr heiß",
     "Ganz voll mit Wasser"
    ],
    "answer": 1
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
     "Im Schulhof",
     "In der Turnhalle",
     "Im Park",
     "Im Sekretariat"
    ],
    "answer": 1
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
     "Man fängt Flöhe.",
     "Man verkauft und kauft gebrauchte Sachen.",
     "Man spielt Fußball.",
     "Man lernt Mathe."
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Toms Papa möchte auch alte Bücher verkaufen. Darf er das?",
    "options": [
     "Ja, wenn er zwei Euro bezahlt.",
     "Nein, nur Kinder dürfen verkaufen.",
     "Ja, aber nur im Schulhof.",
     "Ja, wenn er sich bis Freitag anmeldet."
    ],
    "answer": 1
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
     "Still stehen",
     "Singen",
     "Weglaufen"
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "„Wer sich bewegt, scheidet aus.“ Was bedeutet das?",
    "options": [
     "Er gewinnt.",
     "Er darf nicht mehr mitspielen.",
     "Er macht die Musik.",
     "Er bekommt einen Preis."
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Schließen",
    "q": "Lea kichert, als die Musik stoppt. Was passiert?",
    "options": [
     "Sie gewinnt.",
     "Sie scheidet aus.",
     "Sie macht die Musik.",
     "Nichts."
    ],
    "answer": 1
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
     "Er braucht nur wenig Kraft.",
     "Er rennt ganz schnell.",
     "Er wacht auf."
    ],
    "answer": 1
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
     "Grün",
     "Blau",
     "Gelb"
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Was passiert, wenn Flix vom Stein springt?",
    "options": [
     "Er fliegt hoch.",
     "Er fällt ins Gras.",
     "Er landet im See.",
     "Er schläft ein."
    ],
    "answer": 1
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
     "Ganz langsam",
     "Auf einmal",
     "Am Abend",
     "Nie"
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Reihenfolge",
    "q": "Was macht Flix, bevor er die Flügel öffnet?",
    "options": [
     "Er springt vom Stein.",
     "Er läuft schnell über die Wiese.",
     "Er fliegt über den See.",
     "Er schläft im Gras."
    ],
    "answer": 1
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
     "Mit Mama",
     "Mit Papa",
     "Mit Oma",
     "Mit seiner Klasse"
    ],
    "answer": 1
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
     "Sie gehen in ein Museum.",
     "Sie fahren nach Hause.",
     "Sie kaufen eine Fahrkarte."
    ],
    "answer": 1
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
     "Mandarinen, Nüsse und Schokolade",
     "Spielzeugautos",
     "Blumen"
    ],
    "answer": 1
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
     "Im Garten",
     "Am See",
     "Auf einem Campingplatz"
    ],
    "answer": 1
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
     "Vor vielen Millionen Jahren",
     "Heute",
     "Zur Zeit der Ritter"
    ],
    "answer": 1
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
     "Nein, die Dinosaurier lebten, bevor es Menschen gab.",
     "Ja, im Zoo.",
     "Ja, aber nur nachts."
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Wortschatz",
    "q": "Was machen „Forscher“?",
    "options": [
     "Sie bauen Häuser.",
     "Sie suchen und untersuchen Dinge, um Neues zu lernen.",
     "Sie verkaufen Knochen.",
     "Sie fahren Bus."
    ],
    "answer": 1
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
     "18 Minuten",
     "30 Minuten",
     "Eine Stunde"
    ],
    "answer": 1
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
     "Am Meer",
     "Hoch oben auf einem Berg",
     "Mitten im Wald",
     "Neben dem Bahnhof"
    ],
    "answer": 1
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
     "Aus Spanien",
     "Aus Portugal",
     "Aus Italien",
     "Aus Frankreich"
    ],
    "answer": 1
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
     "Weil er ihn noch gar nicht kennt.",
     "Weil die Pause vorbei ist.",
     "Weil er müde ist."
    ],
    "answer": 1
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
     "Luca setzt sich neben Noah.",
     "Die Lehrerin stellt Luca vor.",
     "Luca steht allein an der Wand."
    ],
    "answer": 1
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
     "Ein Stern",
     "Ein Mond",
     "Eine Wolke"
    ],
    "answer": 1
   },
   {
    "kind": "mc",
    "skill": "Finden",
    "q": "Warum sieht die Sonne so klein aus?",
    "options": [
     "Weil sie klein ist.",
     "Weil sie sehr weit weg ist.",
     "Weil sie kalt ist.",
     "Weil es Nacht ist."
    ],
    "answer": 1
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
     "Sehr groß",
     "Sehr kalt",
     "Sehr leise"
    ],
    "answer": 1
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
     "Eine",
     "Zehn",
     "Fünfzigtausend"
    ],
    "answer": 1
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
     "Weil Honig teuer ist.",
     "Weil die Bienen sehr viel Arbeit dafür machen.",
     "Weil Honig blau ist.",
     "Weil nur die Königin Honig macht."
    ],
    "answer": 1
   },
   {
    "kind": "open",
    "skill": "Finden",
    "q": "Wozu brauchen die Bienen ihre Flügel im Bienenstock?",
    "answer": "Sie fächeln damit Luft über den Honig, bis er fertig ist."
   }
  ]
 }
]);
