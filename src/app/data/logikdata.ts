// logikdata.ts

interface Fehlschluss {
    name: string;
    name2: string;
    beispiel: string;
    erlaeuterung: string;
    bgcolor: string;
}

interface FehlschluesseUndHeuristika {
    [key: string]: { [key: string]: Fehlschluss };
}

export const fehlschluesse: FehlschluesseUndHeuristika = {
    fehlschluesse: {
        PostHocErgoPropterHoc: {
            name: 'Post Hoc Ergo Propter Hoc',
            name2: 'danach, also deswegen',
            beispiel: '"Meine Oma raucht seit 80 Jahren und ist noch top gesund!"',
            erlaeuterung: 'Scheinkausalität durch Abfolge. Nur weil eine Einzelperson nach langem Rauchen gesund ist, heisst das nicht, dass Rauchen generell nicht krank machen kann.',
            bgcolor: 'bg-gray-400'
        },
        CumHocErgoPropterHoc: {
            name: 'Cum Hoc Ergo Propter Hoc',
            name2: 'mit diesem, also deswegen',
            beispiel: 'Du bist nur ständig krank, weil du dich vegetarisch ernährst!',
            erlaeuterung: 'Scheinkausalität durch zeitgleiches Auftreten: Es ist möglich, aber keine logische Schlussfolgerung.',
            bgcolor: 'bg-gray-400'
        },
        ArgumentumAdAntiquitatem: {
            name: 'Argumentum ad antiquitatem',
            name2: "Traditionsfehlschluss",
            beispiel: '"Es war aber schon immer so!" / "Es ist eine Tradition!"',
            erlaeuterung: 'Moralistischer Fehlschluss der 2 Ebenen vermischt (traditionell & moralisch) und eine Reduktion darauf, dass eine Tradition inhärent gut sein muss.',
            bgcolor: 'bg-gray-600'
        },
        argumentumAdVerecundiam: {
            name: 'Argumentum ad verecundiam',
            name2: "Autoritätsargument",
            beispiel: '"Das Gesetzt / der Vater / Chef / Experte sagt das aber so!"',
            erlaeuterung: 'Moralistischer Fehlschluss der 2 Ebenen vermischt (Autorität & Moral) und eine Reduktion darauf, dass eine Autorität immer Recht haben muss.',
            bgcolor: 'bg-gray-600'
        },
        argumentumAdPopulum: {
            name: 'Argumentum ad populum',
            name2: "Mehrheitsargument",
            beispiel: '"Alle machen es so!"',
            erlaeuterung: 'Moralistischer Fehlschluss der 2 Ebenen vermischt (Gruppengrösse & Moral) und eine Reduktion darauf, dass eine grosse Anzahl von Personen immer Recht haben muss.',
            bgcolor: 'bg-gray-600'
        },
        adHominem: {
            name: 'Argumentum ad hominem',
            name2: 'Argument gegen die Person',
            beispiel: '"Dein Argument für Steuererhöhungen ist Unsinn – du bist ja nur ein Student und zahlst gar keine Steuern!"',
            erlaeuterung: 'Anstatt sich mit dem Argument des Gegenübers auseinanderzusetzen, greift man die Person direkt an.',
            bgcolor: 'bg-gray-800'
        },
        argumentFromIgnorance: {
            name: 'Argumentum ad ignorantiam',
            name2: 'Ignoranzargument',
            beispiel: '"Es gibt keine Beweise dafür, dass Geister nicht existieren, also müssen sie existieren."',
            erlaeuterung: 'Ein Argument wird damit gestützt, dass das Gegenteil nicht bewiesen wurde.',
            bgcolor: 'bg-gray-800'
        },
        genfehlschluss: {
            name: 'genetischer Fehlschluss',
            name2: "genetic fallacy",
            beispiel: 'Der ist ja auch ein deutscher Politiker, na klar belügt er das Volk!',
            erlaeuterung: 'Moralistischer Fehlschluss der 2 Ebenen vermischt (Herkunft & Moral) und eine Reduktion darauf, dass jemand nur nach seiner Herkunft zugeschriebenen Eigenschaften handelt.',
            bgcolor: 'bg-gray-600'
        },
        guiltfehlschluss: {
            name: 'Schuld durch Assoziation',
            name2: "Guilt by association fallacy",
            beispiel: 'Der ist ja auch mit Person X befreundet, klar, dass er lügt!',
            erlaeuterung: 'Moralistischer Fehlschluss der 2 Ebenen vermischt (Sozialer Umgang & Moral) und eine Reduktion darauf, dass jemand die Eigenschaften zwingend teilt, die seine Bekanntschaften haben.',
            bgcolor: 'bg-gray-600'
        },
        fallacyOfOrigins: {
            name: 'Genetischer Fehlschluss 2',
            name2: 'fallacy of origins',
            beispiel: '"Diese Theorie kann nicht stimmen, sie stammt aus dem Mittelalter!"',
            erlaeuterung: 'Hier wird die Gültigkeit einer Aussage oder Idee aufgrund ihrer Herkunft oder Geschichte angezweifelt.',
            bgcolor: 'bg-gray-600'
        },
        texasSharpshooter: {
            name: 'Texas Sharpshooter Fallacy',
            name2: 'Schütze-von-Texas-Fehlschluss',
            beispiel: 'Ein Unternehmen hebt nur positive Daten in einer Studie hervor und ignoriert die negativen Ergebnisse.',
            erlaeuterung: 'Daten werden so ausgewählt oder interpretiert, dass sie eine Hypothese unterstützen.',
            bgcolor: 'bg-gray-400'
        },
        middleGround: {
            name: 'Middle Ground Fallacy',
            name2: 'Fehlschluss des goldenen Mittelwegs',
            beispiel: '"Einer sagt, die Erde ist flach, der andere sagt, sie ist rund – die Wahrheit liegt wahrscheinlich dazwischen."',
            erlaeuterung: 'Es wird davon ausgegangen, dass die Wahrheit immer in der Mitte liegt.',
            bgcolor: 'bg-gray-800'
        },
        appealToNature: {
            name: 'Appeal to Nature',
            name2: 'Appell an die Natur',
            beispiel: '"Chemikalien im Essen sind schlecht, weil sie unnatürlich sind."',
            erlaeuterung: 'Es wird davon ausgegangen, dass etwas "natürliches" automatisch gut oder richtig ist.',
            bgcolor: 'bg-gray-600'
        },
        appealToEmotion: {
            name: 'Appeal to Emotion',
            name2: 'Appell an Emotionen',
            beispiel: '"Wenn du diese Spendenkampagne nicht unterstützt, hilfst du dabei, dass Kinder hungern müssen."',
            erlaeuterung: 'Anstatt rationale Gründe vorzubringen, wird versucht, das Gegenüber emotional zu beeinflussen.',
            bgcolor: 'bg-gray-800'
        },
        circularReasoning: {
            name: 'Circular Reasoning',
            name2: 'Zirkelschluss',
            beispiel: '"Gott existiert, weil die Bibel es sagt, und die Bibel ist wahr, weil sie von Gott inspiriert ist."',
            erlaeuterung: 'Das Argument stützt sich auf eine Aussage, die sich selbst als Beweis verwendet.',
            bgcolor: 'bg-gray-400'
        },
        falseDichotomy: {
            name: 'False Dichotomy',
            name2: 'Falsches Dilemma',
            beispiel: '"Entweder bist du für uns, oder du bist gegen uns."',
            erlaeuterung: 'Es wird fälschlicherweise dargestellt, dass es nur zwei Möglichkeiten gibt.',
            bgcolor: 'bg-gray-800'
        },
        hastyGeneralization: {
            name: 'Hasty Generalization',
            name2: 'Voreilige Verallgemeinerung',
            beispiel: '"Alle Franzosen sind unhöflich; ich habe letzte Woche einen unfreundlichen Franzosen getroffen."',
            erlaeuterung: 'Es wird eine allgemeine Schlussfolgerung aus unzureichenden Daten gezogen.',
            bgcolor: 'bg-gray-400'
        },
        anecdotalEvidence: {
            name: 'Anecdotal Evidence',
            name2: 'Anekdotischer Fehlschluss',
            beispiel: '"Ich kenne jemanden, der in einem Flugzeugabsturz überlebt hat. Fliegen ist also sicher."',
            erlaeuterung: 'Einzelne Erlebnisse werden als Beweis für eine allgemeine Aussage verwendet.',
            bgcolor: 'bg-gray-400'
        },
        cherryPicking: {
            name: 'Cherry Picking',
            name2: 'Rosinenpicken',
            beispiel: 'Ein Unternehmen stellt nur die besten Bewertungen für seine Produkte online, obwohl es viele schlechte gibt.',
            erlaeuterung: 'Es werden nur die Daten oder Beispiele ausgewählt, die das eigene Argument stützen.',
            bgcolor: 'bg-gray-400'
        },
        strohmannargument: {
            name: 'Strohmannargument',
            name2: 'straw man argument',
            beispiel: '"Person A: Wir sollten die Ausgaben für das Militär reduzieren. Person B: Du willst also, dass unser Land wehrlos ist?"',
            erlaeuterung: 'Hier wird die Position des Gegenübers verzerrt oder übertrieben dargestellt.',
            bgcolor: 'bg-gray-800'
        },
        slipperySlope: {
            name: 'Dammbruchargument',
            name2: 'slippery slope',
            beispiel: '"Wenn wir Cannabis legalisieren, wird das dazu führen, dass bald alle Drogen legal sind."',
            erlaeuterung: 'Es wird behauptet, dass eine Handlung zwangsläufig zu einer Kette von Ereignissen führt.',
            bgcolor: 'bg-gray-800'
        },
        redHerring: {
            name: 'Scheinargument',
            name2: 'red herring',
            beispiel: 'Whatabouthism wie: "Warum sollten wir uns um Umweltverschmutzung kümmern?"',
            erlaeuterung: 'Ein Ablenkungsmanöver, bei dem ein irrelevantes Thema eingeführt wird.',
            bgcolor: 'bg-gray-800'
        },
        derailing: {
            name: 'Derailing',
            name2: 'Themaabweichung',
            beispiel: 'Whatabouthism wie: "Person A: Wir sollten über die Diskriminierung von Frauen sprechen. Person B: Aber Männer werden auch diskriminiert!"',
            erlaeuterung: 'Das Thema wird gewechselt, um von einem schwierigen Thema abzulenken.',
            bgcolor: 'bg-gray-800'
        },
        poisoningTheWell: {
            name: 'Vergiftung des Brunnens',
            name2: 'poisoning the well',
            beispiel: '"Bevor du ihm zuhörst, wisse, dass er schon oft gelogen hat."',
            erlaeuterung: 'Negative Informationen über eine Person werden vorab präsentiert, um deren Glaubwürdigkeit zu untergraben.',
            bgcolor: 'bg-gray-800'
        },
        reductioAdHitlerum: {
            name: 'Reductio ad Hitlerum',
            name2: 'Nazivergleich',
            beispiel: '"Du bist für eine Geschwindigkeitsbegrenzung? Das hat Hitler auch eingeführt!"',
            erlaeuterung: 'Ein Fehlschluss, bei dem ein Argument durch den Bezug auf Hitler diskreditiert wird.',
            bgcolor: 'bg-gray-800'
        },
        ignoratioElenchi: {
            name: 'Ignoratio elenchi',
            name2: 'Thema verfehlt',
            beispiel: '"Wir sollten die Bildung verbessern. Antwort: Aber ohne Wirtschaftswachstum können wir uns Bildungsausgaben nicht leisten."',
            erlaeuterung: 'Ein Argument wird widerlegt, das nicht das eigentliche Thema ist.',
            bgcolor: 'bg-gray-800'
        },
        nonSequitur: {
            name: 'Non sequitur',
            name2: 'Folgt nicht',
            beispiel: '"Er trägt teure Schuhe, also muss er ein erfolgreicher Geschäftsmann sein."',
            erlaeuterung: 'Eine Schlussfolgerung, die nicht logisch aus den Prämissen folgt.',
            bgcolor: 'bg-gray-400'
        },
        baseRateNeglect: {
            name: 'Basisratenvernachlässigung',
            name2: 'base rate neglect',
            beispiel: '"In einem Test für seltene Krankheit X ist das Ergebnis positiv. Daher ist es sehr wahrscheinlich, dass ich die Krankheit habe."',
            erlaeuterung: 'Die Grundwahrscheinlichkeit eines Ereignisses wird ignoriert.',
            bgcolor: 'bg-gray-400'
        },
        repraesentativitaetsheuristik: {
            name: 'Repräsentativitätsheuristik',
            name2: 'representativeness heuristic',
            beispiel: '"Dieser Mann trägt einen Anzug und eine Aktentasche. Er muss ein Manager sein."',
            erlaeuterung: 'Die Wahrscheinlichkeit eines Ereignisses wird danach beurteilt, wie stark es bestimmten Prototypen entspricht.',
            bgcolor: 'bg-gray-400'
        }
    }
};
