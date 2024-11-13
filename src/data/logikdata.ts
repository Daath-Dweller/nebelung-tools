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
            bgcolor: 'bg-gray-800'
        },
        CumHocErgoPropterHoc: {
            name: 'Cum Hoc Ergo Propter Hoc',
            name2: 'mit diesem, also deswegen',
            beispiel: 'Du bist nur ständig krank, weil du dich vegetarisch ernährst!',
            erlaeuterung: 'Scheinkausalität durch zeitgleiches Auftreten: Es ist möglich, aber keine logische Schlussfolgerung.',
            bgcolor: 'bg-gray-800'
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
            beispiel: '"Das Gesetz / der Vater / Chef / Experte sagt das aber so!"',
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
            bgcolor: 'bg-gray-600'
        },
        argumentFromIgnorance: {
            name: 'Argumentum ad ignorantiam',
            name2: 'Ignoranzargument',
            beispiel: '"Es gibt keine Beweise dafür, dass Geister nicht existieren, also müssen sie existieren."',
            erlaeuterung: 'Ein Argument wird damit gestützt, dass das Gegenteil nicht bewiesen wurde.',
            bgcolor: 'bg-gray-600'
        },
        genfehlschluss: {
            name: 'genetischer Fehlschluss',
            name2: "genetic fallacy",
            beispiel: 'Der ist ja auch ein deutscher Politiker, na klar belügt er das Volk!',
            erlaeuterung: 'Moralistischer Fehlschluss der 2 Ebenen vermischt (Herkunft & Moral) und eine Reduktion darauf, dass jemand nur nach seiner Herkunft zugeschriebenen Eigenschaften handelt.',
            bgcolor: 'bg-blue-800'
        },
        guiltfehlschluss: {
            name: 'Schuld durch Assoziation',
            name2: "Guilt by association fallacy",
            beispiel: 'Der ist ja auch mit Person X befreundet, klar, dass er lügt!',
            erlaeuterung: 'Moralistischer Fehlschluss der 2 Ebenen vermischt (Sozialer Umgang & Moral) und eine Reduktion darauf, dass jemand die Eigenschaften zwingend teilt, die seine Bekanntschaften haben.',
            bgcolor: 'bg-blue-800'
        },
        fallacyOfOrigins: {
            name: 'Genetischer Fehlschluss 2',
            name2: 'fallacy of origins',
            beispiel: '"Diese Theorie kann nicht stimmen, sie stammt aus dem Mittelalter!"',
            erlaeuterung: 'Hier wird die Gültigkeit einer Aussage oder Idee aufgrund ihrer Herkunft oder Geschichte angezweifelt.',
            bgcolor: 'bg-blue-800'
        },
        texasSharpshooter: {
            name: 'Texas Sharpshooter Fallacy',
            name2: 'Schütze-von-Texas-Fehlschluss',
            beispiel: 'Ein Unternehmen hebt nur positive Daten in einer Studie hervor und ignoriert die negativen Ergebnisse.',
            erlaeuterung: 'Daten werden so ausgewählt oder interpretiert, dass sie eine Hypothese unterstützen.',
            bgcolor: 'bg-blue-800'
        },
        middleGround: {
            name: 'Middle Ground Fallacy',
            name2: 'Fehlschluss des goldenen Mittelwegs',
            beispiel: '"Einer sagt, die Erde ist flach, der andere sagt, sie ist rund – die Wahrheit liegt wahrscheinlich dazwischen."',
            erlaeuterung: 'Es wird davon ausgegangen, dass die Wahrheit immer in der Mitte liegt.',
            bgcolor: 'bg-blue-800'
        },
        appealToNature: {
            name: 'Appeal to Nature',
            name2: 'Appell an die Natur',
            beispiel: '"Chemikalien im Essen sind schlecht, weil sie unnatürlich sind."',
            erlaeuterung: 'Es wird davon ausgegangen, dass etwas "natürliches" automatisch gut oder richtig ist.',
            bgcolor: 'bg-gray-700'
        },
        appealToEmotion: {
            name: 'Appeal to Emotion',
            name2: 'Appell an Emotionen',
            beispiel: '"Wenn du diese Spendenkampagne nicht unterstützt, hilfst du dabei, dass Kinder hungern müssen."',
            erlaeuterung: 'Anstatt rationale Gründe vorzubringen, wird versucht, das Gegenüber emotional zu beeinflussen.',
            bgcolor: 'bg-gray-700'
        },
        circularReasoning: {
            name: 'Circular Reasoning',
            name2: 'Zirkelschluss',
            beispiel: '"Gott existiert, weil die Bibel es sagt, und die Bibel ist wahr, weil sie von Gott inspiriert ist."',
            erlaeuterung: 'Das Argument stützt sich auf eine Aussage, die sich selbst als Beweis verwendet.',
            bgcolor: 'bg-blue-800'
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
            bgcolor: 'bg-gray-900'
        },
        anecdotalEvidence: {
            name: 'Anecdotal Evidence',
            name2: 'Anekdotischer Fehlschluss',
            beispiel: '"Ich kenne jemanden, der in einem Flugzeugabsturz überlebt hat. Fliegen ist also sicher."',
            erlaeuterung: 'Einzelne Erlebnisse werden als Beweis für eine allgemeine Aussage verwendet.',
            bgcolor: 'bg-blue-800'
        },
        cherryPicking: {
            name: 'Cherry Picking',
            name2: 'Rosinenpicken',
            beispiel: 'Ein Unternehmen stellt nur die besten Bewertungen für seine Produkte online, obwohl es viele schlechte gibt.',
            erlaeuterung: 'Es werden nur die Daten oder Beispiele ausgewählt, die das eigene Argument stützen.',
            bgcolor: 'bg-gray-900'
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
            bgcolor: 'bg-gray-900'
        },
        redHerring: {
            name: 'Scheinargument',
            name2: 'red herring',
            beispiel: 'Whatabouthism wie: "Warum sollten wir uns um Umweltverschmutzung kümmern?"',
            erlaeuterung: 'Ein Ablenkungsmanöver, bei dem ein irrelevantes Thema eingeführt wird.',
            bgcolor: 'bg-gray-900'
        },
        derailing: {
            name: 'Derailing',
            name2: 'Themaabweichung',
            beispiel: 'Whatabouthism wie: "Person A: Wir sollten über die Diskriminierung von Frauen sprechen. Person B: Aber Männer werden auch diskriminiert!"',
            erlaeuterung: 'Das Thema wird gewechselt, um von einem schwierigen Thema abzulenken.',
            bgcolor: 'bg-gray-900'
        },
        poisoningTheWell: {
            name: 'Vergiftung des Brunnens',
            name2: 'poisoning the well',
            beispiel: '"Bevor du ihm zuhörst, wisse, dass er schon oft gelogen hat."',
            erlaeuterung: 'Negative Informationen über eine Person werden vorab präsentiert, um deren Glaubwürdigkeit zu untergraben.',
            bgcolor: 'bg-gray-900'
        },
        reductioAdHitlerum: {
            name: 'Reductio ad Hitlerum',
            name2: 'Nazivergleich',
            beispiel: '"Du bist für eine Geschwindigkeitsbegrenzung? Das hat Hitler auch eingeführt!"',
            erlaeuterung: 'Ein Fehlschluss, bei dem ein Argument durch den Bezug auf Hitler diskreditiert wird.',
            bgcolor: 'bg-gray-900'
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
            name2: 'representation bias',
            beispiel: '"Dieser Mann trägt einen Anzug und eine Aktentasche. Er muss ein Manager sein."',
            erlaeuterung: 'Die Wahrscheinlichkeit eines Ereignisses wird danach beurteilt, wie stark es bestimmten Prototypen entspricht.',
            bgcolor: 'bg-gray-400'
        },
        confirmationsbias: {
            name: 'Bestätigungsfehler',
            name2: 'Confirmation bias',
            beispiel: 'Ich wusste doch, dass diese Partei nur schlechte Entscheidungen trifft, schau dir nur diese eine neue Maßnahme an!',
            erlaeuterung: 'Kognitive Verzerrung, bei der Menschen dazu neigen, Informationen zu suchen, auszuwählen und zu interpretieren, die ihre bestehenden Überzeugungen oder Vorurteile bestätigen, während gegenteilige Informationen ignoriert oder abgewertet werden.',
            bgcolor: 'bg-gray-400'
        },
        ankerfehler: {
            name: 'Anker-Effekt',
            name2: 'Anchoring Bias',
            beispiel: 'Der erste genannte Preis liegt bei 200 Euro. Dann ist ein Angebot von 150 Euro ein Schnäppchen, obwohl es vorher ohne Anker als zu hoch eingeschätzt worden wäre.',
            erlaeuterung: 'Kognitive Verzerrung, bei der Menschen zu stark auf die erste erhaltene Information (den „Anker“) fixiert sind und spätere Entscheidungen davon beeinflussen lassen.',
            bgcolor: 'bg-gray-400'
        },
        verfuegbarkeitsheuristik: {
            name: 'Verfügbarkeitsheuristik',
            name2: 'Availability Bias',
            beispiel: 'Nach einem Flugzeugabsturz schätzen Menschen die Wahrscheinlichkeit eines Absturzes viel höher ein, weil das Ereignis präsent ist.',
            erlaeuterung: 'Neigung, die Wahrscheinlichkeit von Ereignissen aufgrund ihrer leichten Abrufbarkeit im Gedächtnis zu überschätzen, unabhängig von ihrer tatsächlichen Häufigkeit.',
            bgcolor: 'bg-gray-400'
        },
        rueckschaufehler: {
            name: 'Rückschaufehler',
            name2: 'Hindsight Bias',
            beispiel: 'Nach einem Unfall behaupten viele, dass sie das Ergebnis schon vorhergesehen hätten, obwohl sie es zuvor nicht geäußert haben.',
            erlaeuterung: 'Die Tendenz, nach einem Ereignis zu glauben, dass man es vorhergesehen hätte, was oft zu einer Verzerrung der Erinnerung führt.',
            bgcolor: 'bg-gray-400'
        },
        selbstwertdienlicher_fehlers: {
            name: 'Selbstwertdienliche Verzerrung',
            name2: 'Self-Serving Bias',
            beispiel: 'Ich habe das Projekt erfolgreich abgeschlossen, weil ich gut bin; es scheiterte, weil andere Fehler gemacht haben.',
            erlaeuterung: 'Neigung, Erfolge dem eigenen Können und Misserfolge äußeren Umständen zuzuschreiben, um das Selbstwertgefühl zu schützen.',
            bgcolor: 'bg-gray-400'
        },
        optimismus_bias: {
            name: 'Optimismus-Bias',
            name2: 'Optimism Bias',
            beispiel: 'Mir wird schon nichts Schlechtes passieren, ich bin sicher.',
            erlaeuterung: 'Kognitive Verzerrung, bei der Menschen die Wahrscheinlichkeit positiver Ereignisse für sich selbst überschätzen und negative Ereignisse unterschätzen.',
            bgcolor: 'bg-gray-400'
        },
        sunk_cost_fallacy: {
            name: 'Sunk-Cost-Fallacy',
            name2: 'Sunk Cost Fallacy',
            beispiel: 'Ein Projekt, das sich als unprofitabel erwiesen hat, wird weitergeführt, weil bereits viel Geld hineingeflossen ist.',
            erlaeuterung: 'Neigung, an Investitionen festzuhalten, nur weil bereits Ressourcen investiert wurden, selbst wenn es rational wäre, das Projekt abzubrechen.',
            bgcolor:  'bg-gray-900',
        },
        fundamentaler_attributionsfehler: {
            name: 'Fundamentaler Attributionsfehler',
            name2: 'Fundamental Attribution Error',
            beispiel: 'Jemand, der im Stau ungeduldig hupt, wird als aggressiv bezeichnet, anstatt die Möglichkeit von Zeitdruck zu berücksichtigen.',
            erlaeuterung: 'Tendenz, das Verhalten anderer eher auf deren Persönlichkeit als auf situative Faktoren zurückzuführen.',
            bgcolor:  'bg-gray-900',
        },
        halo_effekt: {
            name: 'Halo-Effekt',
            name2: 'Halo Effect',
            beispiel: 'Eine attraktive Person wird automatisch auch als kompetent eingeschätzt, ohne nähere Informationen zur Fähigkeit zu haben.',
            erlaeuterung: 'Neigung, aufgrund einer positiven Eigenschaft eines Menschen auch andere Eigenschaften als positiv zu bewerten.',
            bgcolor:  'bg-gray-900',
        },
        kognitiv_dissonanz: {
            name: 'Kognitive Dissonanz',
            name2: 'Cognitive Dissonance',
            beispiel: 'Ein Raucher ignoriert gesundheitliche Risiken des Rauchens, um sein Verhalten nicht ändern zu müssen.',
            erlaeuterung: 'Neigung, widersprüchliche Informationen zu vermeiden oder umzudeuten, um kognitive Dissonanz zu reduzieren.',
            bgcolor:  'bg-gray-900',
        },
        planungsfehlschluss: {
            name: 'Planungsfehlschluss',
            name2: 'Planning Fallacy',
            beispiel: 'Ein Projekt wird als „schnell erledigt“ eingeschätzt, obwohl es sich am Ende viel länger hinzieht.',
            erlaeuterung: 'Die Neigung, die zur Vollendung einer Aufgabe benötigte Zeit systematisch zu unterschätzen.',
            bgcolor:  'bg-gray-900',
        },
        framing_effekt: {
            name: 'Framing-Effekt',
            name2: 'Framing Effect',
            beispiel: 'Eine Erfolgsquote von 90 % wird als positiver wahrgenommen als eine Misserfolgsquote von 10 %, obwohl beides dasselbe bedeutet.',
            erlaeuterung: 'Die Art und Weise, wie Informationen präsentiert werden, beeinflusst die Wahrnehmung und Entscheidung des Empfängers.',
            bgcolor:  'bg-gray-900',
        },
        dunning_kruger_effekt: {
            name: 'Dunning-Kruger-Effekt',
            name2: 'Dunning-Kruger Effect',
            beispiel: 'Ein Anfänger denkt, er sei sehr gut, während ein Experte eher Zweifel an seiner eigenen Perfektion hat.',
            erlaeuterung: 'Die Fähigkeit zu einem korrekten Ergebnis zu gelangen ist identisch mit der Fähigkeit, dieses korrekte Ergebnis andernorts als richtig zu erkennen. Menschen mit geringer Kompetenz in einem Bereich neigen dazu, ihre Fähigkeiten zu überschätzen, während Experten ihre Fähigkeiten oft unterschätzen.',
            bgcolor:  'bg-gray-900',
        },
        status_quo_bias: {
            name: 'Status-quo-Bias',
            name2: 'Status-quo Bias',
            beispiel: 'Menschen bleiben bei ihrem bestehenden Mobilfunkanbieter, auch wenn es bessere Alternativen gibt.',
            erlaeuterung: 'Die Vorliebe für den aktuellen Zustand und die Tendenz, Veränderungen zu vermeiden.',
            bgcolor: 'bg-gray-400'
        },
        ingroup_bias: {
            name: 'In-Group Bias',
            name2: 'In-Group Bias',
            beispiel: 'Ein Mitglied des eigenen Teams wird eher unterstützt als ein Externer, auch wenn letzterer objektiv besser qualifiziert wäre.',
            erlaeuterung: 'Die Tendenz, Mitglieder der eigenen Gruppe gegenüber Außenstehenden zu bevorzugen und positivere Eigenschaften zuzuschreiben.',
            bgcolor: 'bg-gray-400'
        },
        ingroup_bias: {
            name: 'Falsche Übereinstimmung-Effekt',
            name2: 'False Consensus Bias',
            beispiel: 'Ja, aber denken doch alle so!',
            erlaeuterung: 'Die Annahme, dass die meisten Menschen genauso denken, wie man selbst, ohne sichere Grundlage für diese Annahme.',
            bgcolor: 'bg-gray-400'
        }
    }
};
