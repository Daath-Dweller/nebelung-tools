// numerusdata.ts
export interface WordEntryNumerus {
    singular: string;       // Das Wort im Singular
    correctPlural: string;  // Die korrekte Pluralform
    options: string[];      // Drei falsche Pluraloptionen
    explanation: string;    // Erklärung zur Pluralbildung oder Bedeutung
}

export const words: WordEntryNumerus[] = [
    {
        singular: 'Plenum',
        correctPlural: 'Plenen',
        options: ['Plenums', 'Plena', 'Plenümer'],
        explanation: 'Das Wort "Plenum" stammt aus dem Lateinischen. Die korrekte Pluralform im Deutschen ist "Plenen". "Plena" ist der lateinische Plural.'
    },
    {
        singular: 'Pensum',
        correctPlural: 'Pensen',
        options: ['Pensa', 'Pensums', 'Pensümer'],
        explanation: '"Pensum" ist ein lateinisches Lehnwort (Neutrum). Der deutsche Plural lautet "Pensen". "Pensa" ist der ursprüngliche lateinische Plural (Neutrum-O-Deklination).'
    },
    {
        singular: 'Status',
        correctPlural: 'Status', // In der Regel unverändert oder "Statusse"
        options: ['Stati', 'Statusse', 'Statūs'],
        explanation: '"Status" (maskulin) ist lateinischen Ursprungs. Der Plural im Deutschen ist meist unverändert "die Status". Maskuline U-Deklination.'
    },
    {
        singular: 'Modus',
        correctPlural: 'Modi',
        options: ['Modusse', 'Moden', 'Modü'],
        explanation: '"Modus" (maskulin) kommt aus dem Lateinischen. Der korrekte deutsche Plural ist "Modi". Maskuline O-Deklination.'
    },

     {
         singular: 'Atlas',
         correctPlural: 'Atlanten',
         options: ['Atlasse', 'Atlei', 'Atlaten'], // "Atlasse" ist auch eine Variante, hier als Falschantwort
         explanation: 'Bei männlichen Substantiven, die auf -as enden (wie Atlas, Ananas), wird der Plural oft mit -anten oder -asse gebildet. "Atlanten" ist gebräuchlicher.'
     },
     {
         singular: 'Kaktus',
         correctPlural: 'Kakteen',
         options: ['Kaktusse', 'Kakti', 'Kaktüsse'],
         explanation: 'Viele Fremdwörter, die auf -us enden, bilden den Plural auf -een (wie Kaktus -> Kakteen) oder -i (wie Globus -> Globen, nicht Globi im Deutschen als Standard).'
     },
    {
        singular: 'Komma',
        correctPlural: 'Kommata', // Der gelehrte, aber korrekte Plural
        options: ['Kommas', 'Kommen', 'Kommi'],
        explanation: '"Komma" (Neutrum) stammt aus dem Griechischen. Der standardsprachlich korrekte Plural ist "Kommata". Umgangssprachlich und häufiger ist auch "Kommas" zulässig und verbreitet.'
    },
    {
        singular: 'Globus',
        correctPlural: 'Globen',
        options: ['Globi', 'Globusse', 'Globüsse'],
        explanation: '"Globus" (maskulin) ist ein lateinisches Wort. Der korrekte deutsche Plural ist "Globen". Der lateinische Plural "Globi" wird im Deutschen standardsprachlich nicht verwendet.'
    },
    {
        singular: 'Visum',
        correctPlural: 'Visa', // Lateinischer Plural, im Deutschen übernommen
        options: ['Visums', 'Visen', 'Visümer'],
        explanation: '"Visum" (Neutrum) kommt aus dem Lateinischen. Der korrekte Plural ist "Visa" (wie im Lateinischen). Die eingedeutschte Form "Visen" ist seltener, aber auch zulässig.'
    },
    {
        singular: 'Index',
        correctPlural: 'Indizes', // Für Verzeichnisse, Register
        options: ['Indexe', 'Indexes', 'Indixe'],
        explanation: '"Index" (maskulin) stammt aus dem Lateinischen. Der Plural für "Verzeichnis" oder "Register" ist "Indizes". Für "Kennzahl" (z.B. Aktienindex) ist auch "Indexes" gebräuchlich.'
    }
];