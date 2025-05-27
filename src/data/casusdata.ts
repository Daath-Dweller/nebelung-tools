// src/data/konjunktivdata.ts
// Stelle sicher, dass der Pfad zu dieser Datei in deiner Komponente korrekt ist.

export interface KonjunktivIIEntry {
    infinitive: string;    // Der Infinitiv des Verbs
    pronoun: string;       // Das Pronomen, für das die Form gesucht wird (z.B. "ich", "er/sie/es")
    correctForm: string;   // Die korrekte Konjunktiv-II-Form mit Pronomen (z.B. "ich büke")
    options: string[];     // Drei falsche Optionen, ebenfalls mit Pronomen
    explanation: string;   // Erklärung zur Bildung oder Besonderheit
}

export const verbsKonjunktivII: KonjunktivIIEntry[] = [
    {
        infinitive: 'backen',
        pronoun: 'ich',
        correctForm: 'ich büke',
        options: ['ich backte', 'ich böke', 'ich backete'],
        explanation: "Starke Form des Konjunktiv II von 'backen'. 'backte' ist Präteritum/schwacher KII, 'böke' eine seltenere Variante."
    },
    {
        infinitive: 'helfen',
        pronoun: 'er/sie/es',
        correctForm: 'er/sie/es hülfe',
        options: ['er/sie/es helfte', 'er/sie/es halfte', 'er/sie/es helfen würde'],
        explanation: "Starke Verben mit Stammvokal 'e' bilden den KII oft mit Umlaut (Präteritum 'half' -> KII 'hülfe')."
    },
    {
        infinitive: 'wachsen',
        pronoun: 'ich',
        correctForm: 'ich wüchse',
        options: ['ich wachste', 'ich wüchste', 'ich wachsen würde'],
        explanation: "Starke Verben mit Präteritumstamm auf -s, -ß, -chs (Präteritum 'wuchs') bilden KII oft mit Umlaut + -(s)e."
    },
    {
        infinitive: 'schelten',
        pronoun: 'du',
        correctForm: 'du schöltest',
        options: ['du scheltetest', 'du schaltst', 'du schältest'],
        explanation: "KII von 'schelten' (Präteritum 'schalt'). Die Form 'schöltest' ist die starke Variante."
    },
    {
        infinitive: 'stehen',
        pronoun: 'wir',
        correctForm: 'wir stünden',
        options: ['wir stehten', 'wir ständen', 'wir stehen würden'],
        explanation: "'stehen' bildet den KII als 'stünden' oder 'ständen'. 'stünden' ist oft für irreale Bedingungen gebräuchlicher."
    },
    {
        infinitive: 'essen',
        pronoun: 'ich',
        correctForm: 'ich äße',
        options: ['ich essete', 'ich aßte', 'ich essen würde'],
        explanation: "Starker Konjunktiv II von 'essen' (Präteritum 'aß'). Der Umlaut 'ä' und die Endung '-e' sind typisch."
    },
    {
        infinitive: 'trinken',
        pronoun: 'ihr',
        correctForm: 'ihr tränket',
        options: ['ihr trinktet', 'ihr tranket', 'ihr trunkenet'],
        explanation: "Starker Konjunktiv II von 'trinken' (Präteritum 'trank'). Umlaut 'ä' und die typische Konjunktivendung '-et' für die 2. Person Plural."
    },
    {
        infinitive: 'bergen',
        pronoun: 'er/sie/es',
        correctForm: 'er/sie/es bärge',
        options: ['er/sie/es bergte', 'er/sie/es bürge', 'er/sie/es bargte'],
        explanation: "Von 'bergen' (Präteritum 'barg'). Der KII wird mit Umlaut des Präteritum-Stammvokals gebildet."
    }
];