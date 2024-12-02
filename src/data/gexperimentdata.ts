interface Gedankenexperiment {
    name: string;
    name2: string;
    erlaeuterung: string;
    beispiel: string;
    bgcolor: string;
    erklaerungFuerFuenf: string;
    gebiet: string;
    fragen: string[];
    image: string; // Neuer Schlüssel für das Bild
}

interface GedankenexperimenteCollection {
    [key: string]: { [key: string]: Gedankenexperiment };
}

export const gedankenexperimente: GedankenexperimenteCollection = {
    gedankenexperimente: {
        InfiniteMonkeyTheorem: {
            name: 'Der unendliche Affe',
            name2: 'Infinite Monkey Theorem',
            erlaeuterung: 'Dieses Gedankenexperiment besagt, dass ein Affe, der unendlich lange zufällig auf einer Schreibmaschine tippt, irgendwann die vollständigen Werke Shakespeares reproduzieren wird. Es illustriert Konzepte von Unendlichkeit und Wahrscheinlichkeit.',
            beispiel: 'Stellen Sie sich vor, ein Affe tippt zufällig Buchstaben auf einer Tastatur. Nach unendlich viel Zeit könnte er zufällig den Text eines ganzen Romans erzeugen.',
            bgcolor: 'bg-gray-800',
            erklaerungFuerFuenf: 'Ein Affe tippt auf einer Tastatur und irgendwann schreibt er ein ganzes Buch, weil er unendlich lange tippt. Da mit unendlicher Dauer irgendwann alles eintritt, so auch dass Zeichen nacheinander zufällig bspw. einen uns bekannten Roman ergeben.',
            gebiet: 'Wahrscheinlichkeit',
            fragen: [
                'Was passiert, wenn die Zeit unendlich ist?',
                'Wie beeinflusst Wahrscheinlichkeit die Ergebnisse in realen Szenarien?'
            ],
            image: '/affe.jpg' // Bildpfad
        },
        SchroedingersKatze: {
            name: 'Schrödingers Katze',
            name2: "Schrödinger's Cat",
            erlaeuterung: 'Ein Gedankenexperiment, das die Prinzipien der Quantenmechanik veranschaulicht, insbesondere die Überlagerung von Zuständen. Eine Katze in einer Box ist gleichzeitig lebendig und tot, bis die Box geöffnet wird. Es zielt auf die Annahme hin, dass' +
                'Quanten sich tatsächlich abhängig vom Beobachter verhalten können. Auch eine simplifizierte bekannte Analogie: "Wenn ein Baum im Wald umfällt und keiner ist da um ihn zu sehen, ist er dann wirklich umgefallen?"',
            beispiel: 'Eine Katze befindet sich in einer versiegelten Box mit einer radioaktiven Substanz, die mit einer gewissen Wahrscheinlichkeit zerfällt und ein Gift freisetzt. Solange die Box geschlossen ist, ist die Katze sowohl tot als auch lebendig.',
            bgcolor: 'bg-gray-800',
            erklaerungFuerFuenf: 'Eine Katze ist in einer Kiste und wir wissen nicht, ob sie schläft oder wach ist, bis wir die Kiste öffnen.',
            gebiet: 'Quantenmechanik',
            fragen: [
                'Wie definiert die Beobachtung den Zustand eines Systems?',
                'Was bedeutet Überlagerung in der Quantenmechanik?'
            ],
            image: '/box.jpg' // Bildpfad
        },
        SchiffDesTheseus: {
            name: 'Das Schiff des Theseus',
            name2: 'Ship of Theseus',
            erlaeuterung: 'Dieses Gedankenexperiment stellt die Frage nach der Identität eines Objekts, wenn alle seine Bestandteile nach und nach ersetzt werden. Bleibt es dasselbe Objekt oder wird es zu einem neuen?',
            beispiel: 'Ein altes Schiff wird Stück für Stück restauriert, indem jedes Holzbrett ersetzt wird. Am Ende ist jedes Holzbrett ein anderes und keines mit dem das Schiff ursprünglich gebaut wurde, ist mehr vorhanden, dennoch sieht es identisch aus und funktioniert identisch. Ist es am Ende immer noch dasselbe Schiff, das Theseus besessen hat?',
            bgcolor: 'bg-gray-800',
            erklaerungFuerFuenf: 'Wenn man nach und nach alle Teile eines Spielzeugs ersetzt, ist es dann noch dasselbe Spielzeug?',
            gebiet: 'Philosophie',
            fragen: [
                'Was definiert die Identität eines Objekts?',
                'Kann die Kontinuität der Teile die Kontinuität des Objekts gewährleisten?'
            ],
            image: '/theseus.jpg' // Bildpfad
        },
        Zwillingsparadoxon: {
            name: 'Das Zwillingsparadoxon',
            name2: 'The Twin Paradox',
            erlaeuterung: 'Ein Gedankenexperiment der speziellen Relativitätstheorie zeigt, wie Zeitdilatation bewirkt, dass ein reisender Zwilling langsamer altert als der auf der Erde verbleibende. Gravitation (allgemeine Relativitätstheorie) ' +
                'und Geschwindigkeit (spezielle Relativitätstheorie) beeinflussen die Zeit unterschiedlich. Große Himmelskörper krümmen die Raumzeit, wodurch Zeit langsamer vergeht, da die Raumzeit gedehnt wird (gravitative Zeitdilatation). ' +
                'Bewegung nahe der Lichtgeschwindigkeit verlangsamt die Zeit relativ zum ruhenden Beobachter. ',
            beispiel: 'Ein Zwilling verlässt per Raumschiff die Erde, wodurch die Raumzeit um ihn herum weniger gekrümmt wird. Bei 87 % Lichtgeschwindigkeit bewirkt ein Lorentzfaktor von 2, ' +
                'dass die Zeit für den Reisenden halb so schnell vergeht. Nach 5 Stunden Raumschiffzeit vergehen auf der Erde 10 Stunden. Experimente mit Atomuhren bestätigten Zeitdilatation durch Gravitation und Geschwindigkeit.',
            bgcolor: 'bg-gray-800',
            erklaerungFuerFuenf: 'Ein Zwilling reist mit einem schnellen Raumschiff und wird zurückkehren, wenn sein Bruder auf der Erde viel älter ist.',
            gebiet: 'Physik',
            fragen: [
                'Wie erklärt die Relativitätstheorie die Zeitdilatation?',
                'Welche praktischen Anwendungen hat das Zwillingsparadoxon?'
            ],
            image: '/erde.jpg' // Bildpfad
        },
        TrolleyProblem: {
            name: 'Das Trolley-Problem',
            name2: 'The Trolley Problem',
            erlaeuterung: 'Ein ethisches Dilemma, bei dem man entscheiden muss, ob man aktiv handeln sollte, um mehrere Menschen zu retten, selbst wenn dies bedeutet, eine andere Person zu opfern. Im Kern geht es darum ob man Menschenleben aufwiegen kann' +
                'und ob das Kollektiv wichtiger als das Individuum sein kann.',
            beispiel: 'Eine Straßenbahn rollt auf fünf Arbeiter zu. Sie können einen Hebel ziehen, um die Bahn auf ein anderes Gleis zu lenken, wo sie nur einen Arbeiter töten würde. Ziehen Sie den Hebel?',
            bgcolor: 'bg-gray-800',
            erklaerungFuerFuenf: 'Eine Bahn fährt auf fünf Leute zu. Du kannst sie auf ein anderes Gleis lenken, wo nur eine Person ist. Was machst du?',
            gebiet: 'Ethik',
            fragen: [
                'Ist es ethisch vertretbar, eine Person zu opfern, um mehrere zu retten?',
                'Welche moralischen Prinzipien sollten bei solchen Entscheidungen angewendet werden?'
            ],
            image: '/trolley.jpg' // Bildpfad
        },
        GehirnImTank: {
            name: 'Das Gehirn im Tank',
            name2: 'Brain in a Vat',
            erlaeuterung: 'Ein Szenario, das die Frage der Realität und Wahrnehmung untersucht. Es stellt infrage, ob wir sicher sein können, dass unsere Erfahrungen real sind oder ob wir nur Gehirne in einem Tank sind, die von äußeren Reizen beeinflusst werden.' +
                'Der Film die Matrix stellt das Szenario in ähnlicher Weise dar. Die Frage lautet am Ende: Was kann man Wissen? Kant beantwortet sie mit "Cogito ergo sum", Ich denke, also bin ich. Und das ist die einzige Sicherheit, die man feststellen kann. Alles darüber hinaus' +
                'ist Spekulation.',
            beispiel: 'Sie könnten ein Gehirn sein, das in einem Labor von Wissenschaftlern mit elektrischen Signalen stimuliert wird, die Ihnen eine virtuelle Realität vorgaukeln.',
            bgcolor: 'bg-gray-800',
            erklaerungFuerFuenf: 'Stell dir vor, dein Gehirn ist in einem Tank und jemand zeigt dir eine virtuelle Welt. Du denkst, sie ist echt.',
            gebiet: 'Philosophie',
            fragen: [
                'Wie können wir sicher sein, dass unsere Wahrnehmungen real sind?',
                'Was definiert die Realität für ein Individuum?'
            ],
            image: '/hirn.jpg' // Bildpfad
        },
        ChinesischerRaum: {
            name: 'Der Chinesische Raum',
            name2: 'The Chinese Room',
            erlaeuterung: 'Ein Gedankenexperiment, das argumentiert, dass das Befolgen von syntaktischen Regeln nicht mit dem Verständnis von Bedeutung gleichzusetzen ist, und somit Computer keine echte Intelligenz besitzen. ' +
                'Eine Maschine, die also das Verhalten eines Menschen mithilfe Algorithmen und neuronaler Netze perfekt simulieren kann führt unweigerlich zur Frage, was diese vom Menschen unterscheidet.',
            beispiel: 'Eine Person, die kein Chinesisch spricht, sitzt in einem Raum und folgt einem Regelbuch, um chinesische Zeichen korrekt zu antworten. Für Außenstehende scheint es, als würde sie Chinesisch verstehen, obwohl sie nur Regeln befolgt.',
            bgcolor: 'bg-gray-800',
            erklaerungFuerFuenf: 'Jemand, der kein Chinesisch kann, benutzt ein Buch mit Regeln, um auf chinesische Zeichen zu reagieren, ohne sie zu verstehen.',
            gebiet: 'Künstliche Intelligenz / Philosophie',
            fragen: [
                'Unterscheidet sich syntaktisches Verarbeiten von semantischem Verstehen?',
                'Können Maschinen echtes Verständnis erlangen?',
                'Was unterscheidet perfekte künstliche Intelligenz von menschlicher?'
            ],
            image: '/chinraum.jpg' // Bildpfad (korrigierter Dateiname)
        },
        MarysZimmer: {
            name: 'Marys Zimmer',
            name2: "Mary's Room",
            erlaeuterung: 'Dieses Gedankenexperiment untersucht, ob vollständiges physikalisches Wissen alle Aspekte des Bewusstseins erklären kann, insbesondere das subjektive Erlebnis von Farben. Es zeigt damit den Disput zwischen Reduktionismus' +
                'und Holismus.',
            beispiel: 'Mary kennt alle wissenschaftlichen Fakten über Farben, lebt aber in einem schwarz-weißen Raum. Was erfährt sie Neues, wenn sie zum ersten Mal die Farbe Rot sieht?',
            bgcolor: 'bg-gray-800',
            erklaerungFuerFuenf: 'Mary weiß alles über Farben, aber sie hat noch nie eine Farbe gesehen. Was lernt sie, wenn sie eine Farbe zum ersten Mal sieht?',
            gebiet: 'Philosophie / Bewusstsein',
            fragen: [
                'Kann vollständiges physikalisches Wissen subjektive Erfahrungen erklären?',
                'Ist alles nur die Summe ihrer Teile, oder kann aus einzelnen Dingen etwas Neues entstehen, wie es der Begriff Emergenz beschreibt?',
                'Was ist der Unterschied zwischen Wissensarten im Kontext des Bewusstseins?'
            ],
            image: '/mary.jpg' // Bildpfad
        },
        LaplacesDaemon: {
            name: 'Laplaces Dämon',
            name2: "Laplace's Demon",
            erlaeuterung: 'Ein Wesen, das, wenn es den genauen Zustand des Universums kennt, die Vergangenheit und Zukunft exakt vorhersagen kann, was Diskussionen über Determinismus anregt. Laplaces Dämon ist damit bspw. eine Variante von Schicksalsvorstellungen.',
            beispiel: 'Wenn ein Dämon die Position und Geschwindigkeit aller Teilchen kennt, könnte er jede zukünftige und vergangene Aktion berechnen und somit das Universum deterministisch verstehen.',
            bgcolor: 'bg-gray-800',
            erklaerungFuerFuenf: 'Ein Dämon weiß alles über das Universum und kann deshalb alles vorhersagen, was passieren wird.',
            gebiet: 'Philosophie / Physik',
            fragen: [
                'Ist das Universum vollständig deterministisch, also vorherbestimmt?',
                'Wie beeinflusst das Konzept von freiem Willen die Idee eines allwissenden Wesens?',
                'Was würde ein vollständig vorherbestimmtes Leben für normative Implikationen bspw. im Bereich Eigenverantwortung haben?'
            ],
            image: '/daemon.jpg' // Bildpfad
        },
        SchleierDesNichtwissens: {
            name: 'Der Schleier des Nichtwissens',
            name2: 'The Veil of Ignorance',
            erlaeuterung: 'Ein Konzept zur Gestaltung gerechter Gesellschaften, indem Entscheidungen getroffen werden, ohne zu wissen, welche Position man selbst einnehmen wird.',
            beispiel: 'Wenn Sie nicht wissen, ob Sie in einer Gesellschaft arm oder reich sein werden, würden Sie wahrscheinlich Regeln aufstellen, die für alle fair sind.',
            bgcolor: 'bg-gray-800',
            erklaerungFuerFuenf: 'Stell dir vor, du musst Regeln machen, ohne zu wissen, ob du arm oder reich bist. Du würdest faire Regeln machen.',
            gebiet: 'Ethik / Politische Philosophie',
            fragen: [
                'Wie können wir Gerechtigkeit in einer Gesellschaft definieren?',
                'Welche Rolle spielt persönliche Voreingenommenheit bei der Gestaltung von Gesellschaftsregeln?'
            ],
            image: '/schleier.jpg' // Bildpfad
        }

    },
};
