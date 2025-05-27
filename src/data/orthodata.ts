// orthodata.ts

interface Rechtschreibfehler {
    name: string;
    name2: string;
    beispielFalsch: string;
    beispielKorrekt: string;
    erlaeuterung: string;

}

export const Rechtschreibfehler: { [key: string]: Rechtschreibfehler } = {
    Flexionsendungen: {
        name: 'Flexionsendungen',
        name2: "'n, 'ne, 'nen",
        beispielFalsch: "Ich hab 'nen Pferd. Ich hab 'n Hase. Ich hab 'ne Joghurt." ,
        beispielKorrekt: "Ich hab 'n Pferd. Ich hab 'nen Hasen. Ich hab 'nen Joghurt..",
        erlaeuterung: "Ein wird zu 'n gekürzt. Einen wird zu 'nen gekürzt. Eine wird zu 'ne gekürzt. Die Flexionsendungen " +
            "gehören hier zu neutrum (das Bier - ich hab ei'n Bier), maskulinum (der Hase - ich hab ei'nen Hasen) und femininum (die Katze - ei'ne Katze).",
    },
    Deppenapostroph: {
        name: 'Deppenapostroph',
        name2: "Bernd's Haus oder Bernds Haus?",
        beispielFalsch: "Wir gehen in's Haus. Vor Bernd's Haus stehen LKW's." ,
        beispielKorrekt: "Wir gehen ins Haus. Vor Bernds Haus stehen LKW.",
        erlaeuterung: "Der Apostroph zeigt nur beim Genitiv-S im Englischen den Fall bzw. ein Besitzverhältnis an. Im Standarddeutschen gibt es keinen Genitivapostroph." +
            " Akronyme die Mehrzahlen meinen, wie LKW oder CD benötigen kein Plural-S, weder mit noch ohne Apostroph. Lastkraftwagens ist genauso Unsinn wie Lastkraftwagen's. " +
            "Ins ist eine gebräuchliche zusammengezogene Form von in das und wird nicht apostrophiert.",
    },
    GenitivTot: {
        name: 'Der Dativ ist dem Genitiv sein Tod',
        name2: "Dem Bernd sein Haus.",
        beispielFalsch: "Das ist der Tanja ihre Tasche. Und dem Alfred sein Geld. Wegen dem Regen ist er nass. Laut dem Wetterbericht ..." ,
        beispielKorrekt: "Das ist Tanjas Tasche und Alfreds Geld. Wegen des Regens ist er nass. Laut des Wetteberichts ...",
        erlaeuterung: "Wessen Tasche und wessen Geld? Tanjas, Alfreds. Genitiv statt Dativ. Sehr viele Präpositionen erfordern im Standarddeutschen den Genitiv: U.a. wegen, während, " +
            "anstatt, trotz, infolge, laut, ... ",
    },
    Deppenleerzeichen: {
        name: 'Deppenleerzeichen',
        name2: "Bernds Garten Haus.",
        beispielFalsch: "Das ist ein Hochsicherheits Gefängnis mit vielen Stein mauern. Das Benutzer Erlebnis des LSD Schmuggels bereitet den Nachtwächtern Probleme." ,
        beispielKorrekt: "Das ist ein Hochsicherheitsgefängnis mit vielen Steinmauern. Das Benutzererlebnis des LSD-Schmuggels bereitet den Nachtwächtern Probleme.",
        erlaeuterung: "Leerzeichen innerhalb Komposita (zusammengesetzten Worten) sind ein grammatischer Anglizismus. Im Standarddeutschen werden Worte quasi unendlich lange zusammengeschrieben." +
            " Der Lesbarkeit halber sind auch Bindestriche erlaubt. Das längste Wort in offiziellen Dokumenten lautet Rindfleischetikettierungsüberwachungsaufgabenübertragungsgesetz.",
    },
    DasUndDass: {
        name: 'Das und Dass',
        name2: '"das" oder "dass"?',
        beispielFalsch: "Ich hoffe, das du kommst. Das Auto, dass dort steht.",
        beispielKorrekt: "Ich hoffe, dass du kommst. Das Auto, das dort steht.",
        erlaeuterung: '„Das“ ist ein Artikel oder ein Relativpronomen, „dass“ ist eine Konjunktion. Wenn man „dieses“, „jenes“ oder „welches“ einsetzen kann, wird „das“ verwendet.',
    },
    SeidUndSeit: {
        name: 'Seid und Seit',
        name2: '"seid" oder "seit"?',
        beispielFalsch: "Ihr seit spät dran. Seit ihr schon fertig?",
        beispielKorrekt: "Ihr seid spät dran. Seid ihr schon fertig?",
        erlaeuterung: "„Seid“ ist die 2. Person Plural von „sein“, „seit“ bezieht sich auf Zeitangaben.",
    },
    WiederUndWider: {
        name: 'Wieder und Wider',
        name2: '"wieder" oder "wider"?',
        beispielFalsch: "Er handelte wieder besseres Wissen.",
        beispielKorrekt: "Er handelte wider besseren Wissens.",
        erlaeuterung: "„Wieder“ bedeutet „noch einmal“, „wider“ bedeutet „gegen“.",
    },
    GetrenntZusammenSchreibung: {
        name: 'Getrennt- und Zusammenschreibung',
        name2: 'Verbindungen aus Verb und Verb oder Präfix',
        beispielFalsch: "Ich möchte dich kennen lernen. Sie wusste Bescheid, das kann ich zu Gute halten.",
        beispielKorrekt: "Ich möchte dich kennenlernen. Sie wusste Bescheid, das kann ich zugute halten.",
        erlaeuterung: "Bei bestimmten Verbindungen, wie Verb + Verb oder Präfixe, schreibt man zusammen, z. B. 'kennenlernen', 'zusammenschreiben' und  'zugutekommen'.",
    },
    EffektivUndEffizient: {
        name: 'Effektiv und effizient',
        name2: '"effektiv" oder "effizient"?',
        beispielFalsch: "Um die Aufgabe schnell zu erledigen, brauchen wir eine effektive Lösung, die wenig Zeit kostet.",
        beispielKorrekt: "Um die Aufgabe schnell zu erledigen, brauchen wir eine effiziente Lösung. Die Maßnahme war effektiv, das Problem wurde gelöst.",
        erlaeuterung: "Effektiv bedeutet wirksam, also dass ein Ziel erreicht wird. Effizient bedeutet wirtschaftlich oder leistungsfähig, also dass ein Ziel mit möglichst geringem Aufwand (Zeit, Kosten, Ressourcen) erreicht wird.",
    },
    SelbeUndGleich: {
        name: 'Dasselbe und das Gleiche', // Name angepasst für Konsistenz
        name2: '"dasselbe Auto" oder "das gleiche Auto"?',
        beispielFalsch: "Meine Schwester und ich haben dasselbe Fahrrad, nur ihres ist blau und meins ist rot.",
        beispielKorrekt: "Meine Schwester und ich haben das gleiche Fahrradmodell, aber verschiedene Exemplare. Wenn wir uns ein einziges Fahrrad teilen würden, führen wir dasselbe Fahrrad.",
        erlaeuterung: "'Dasselbe' (derselbe, dieselbe) bezieht sich auf ein und dasselbe identische Exemplar oder Einzelstück. 'Das Gleiche' (der Gleiche, die Gleiche) bezieht sich auf ein Exemplar derselben Art, Sorte oder Modells; es gibt aber mehrere davon.",
    },
    WieUndAls: {
        name: 'Wie und als',
        name2: 'Größer "wie" oder "als" du?',
        beispielFalsch: "Dieses Buch ist spannender wie das andere. Er ist genauso alt als sein Freund.",
        beispielKorrekt: "Dieses Buch ist spannender als das andere. Er ist genauso alt wie sein Freund.",
        erlaeuterung: "Für Vergleiche bei Ungleichheit (Komparativ, z.B. schneller, besser, mehr) verwendet man 'als'. Für Vergleiche bei Gleichheit (Positiv mit 'so', 'ebenso', 'genauso') verwendet man 'wie'.",
    },
    FugenS: {
        name: 'Fugen-s',
        name2: "Verkehrszeichen oder Verkehrzeichen?",
        beispielFalsch: "Der Schadenersatz wurde gezahlt. Die Regierung plant eine Einkommensteuer Senkung.",
        beispielKorrekt: "Der Schadensersatz wurde gezahlt. Die Regierung plant eine Einkommenssteuersenkung.",
        erlaeuterung: "Das Fugen-s ist ein Verbindungslaut in Komposita (zusammengesetzten Wörtern). Es gibt keine allgemeingültigen, einfachen Regeln, aber häufige Muster (z.B. nach Substantiven auf -ung, -heit, -keit, -schaft, -ion, -tät, -at, bei vielen femininen Substantiven als Genitiv-s, oder zur Verbesserung der Aussprache). Oft hat sich eine Form etabliert (z.B. Hochzeitstag, aber nicht Hochzeitsfest). Im Zweifel hilft der Duden.",
    },
};
