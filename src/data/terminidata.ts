// terminidata.ts

interface Fachbegriff {
    name: string;
    erklaerungUndSynonyme: string;
    options: string[];
    korrekt: number; // Index der korrekten Antwort
    etymologie: string;
}

export const Fachbegriffe: { [key: string]: Fachbegriff } = {
    rueckgrat: {
        name: 'Rückgrat',
        erklaerungUndSynonyme: 'Die Wirbelsäule von Menschen oder Tieren. Synonyme: Wirbelsäule, Charakterfestigkeit, Moralische Stärke.',
        options: ['Rückrad', 'Rückgrat', 'Rückgrad', 'Rückrahd'],
        korrekt: 1, // Index der korrekten Antwort im options-Array
        etymologie: 'Das Wort setzt sich aus "Rücken" und "Grat" zusammen, wobei "Grat" eine schmale Kante bezeichnet.'
    },
    portemonnaie: {
        name: 'Portemonnaie',
        erklaerungUndSynonyme: 'Ein kleines Behältnis zur Aufbewahrung von Geld und Karten. Synonyme: Geldbörse, Brieftasche.',
        options: ['Portmonee', 'Portemonnaie', 'Portmonaie', 'Portmone'],
        korrekt: 1,
        etymologie: 'Aus dem Französischen "porte-monnaie", was "Geldträger" bedeutet.'
    },
    euthanasie: {
        name: 'Euthanasie',
        erklaerungUndSynonyme: 'Geplantes Herbeiführen des Todes zur Beendigung von Leiden. Synonyme: Sterbehilfe.',
        options: ['Euthanasie', 'Eutanasie', 'Eutanansie', 'Eutahanasie'],
        korrekt: 0,
        etymologie: 'Aus dem Griechischen "eu" (gut) und "thanatos" (Tod) – bedeutet "guter Tod".'
    },
    stegreif: {
        name: 'Stegreif',
        erklaerungUndSynonyme: 'Etwas spontan und ohne Vorbereitung tun. Synonyme: improvisiert, ad hoc.',
        options: ['Stehgreif', 'Stehgref', 'Stegreif', 'Stehgrihf'],
        korrekt: 2,
        etymologie: 'Vom mittelhochdeutschen „stegereif“, was das „ohne Vorbereitung Handeln“ bedeutet.'
    },
    paria: {
        name: 'Paria',
        erklaerungUndSynonyme: 'Eine ausgestoßene oder gemiedene Person. Synonyme: Ausgestoßener, Außenseiter.',
        options: ['Paria', 'Parya', 'Parie', 'Pariah'],
        korrekt: 0,
        etymologie: 'Aus dem Tamilischen „paraiyar“, bezeichnet eine „niedriggestellte Person“ oder „Ausgestoßener“.'
    },
    faksimile: {
        name: 'Faksimile',
        erklaerungUndSynonyme: 'Eine genaue Nachbildung oder Reproduktion eines Dokuments. Synonyme: Kopie, Nachbildung.',
        options: ['Faximile', 'Faksimile', 'Facsimile', 'Fakzimile'],
        korrekt: 1,
        etymologie: 'Aus dem Lateinischen „fac simile“ – „mach es ähnlich“, heute als genaue Nachbildung verstanden.'
    },
    firnis: {
        name: 'Firnis',
        erklaerungUndSynonyme: 'Ein transparenter Überzug zum Schutz von Oberflächen, insbesondere in der Malerei. Synonyme: Lack, Versiegelung.',
        options: ['Firniss', 'Fernis', 'Fiernis', 'Firnis'],
        korrekt: 3,
        etymologie: 'Vom mittelhochdeutschen „firnisse“ für „Schutzüberzug“, in der Kunst für das Versiegeln von Gemälden verwendet.'
    },
    patina: {
        name: 'Patina',
        erklaerungUndSynonyme: 'Eine durch Alterung entstehende Oberfläche auf Materialien wie Metall oder Holz. Synonyme: Alterungserscheinung, Oxidschicht.',
        options: ['Patina', 'Pattina', 'Patiena', 'Patinah'],
        korrekt: 0,
        etymologie: 'Aus dem Lateinischen „patina“, ursprünglich „Schüssel“, bezieht sich heute auf die Alterserscheinungen von Oberflächen.'
    },
    renegat: {
        name: 'Renegat',
        erklaerungUndSynonyme: 'Eine Person, die ihren Glauben oder ihre Überzeugungen verrät. Synonyme: Abtrünniger, Überläufer.',
        options: ['Renegat', 'Renigat', 'Renegad', 'Rennegat'],
        korrekt: 0,
        etymologie: 'Vom lateinischen „renegatus“, was „Abtrünniger“ oder „Verräter“ bedeutet.'
    },
    elegie: {
        name: 'Elegie',
        erklaerungUndSynonyme: 'Ein melancholisches oder klagendes Gedicht. Synonyme: Klagelied, Trauergedicht.',
        options: ['Elegy', 'Elegje', 'Elegie', 'Elegei'],
        korrekt: 2,
        etymologie: 'Vom griechischen „elegeia“, einer Gedichtform, die Trauer oder Verlust ausdrückt.'
    },
    hasardeur: {
        name: 'Hasardeur',
        erklaerungUndSynonyme: 'Eine Person, die leichtsinnig Risiken eingeht. Synonyme: Draufgänger, Glücksspieler.',
        options: ['Hasardeur', 'Hassardeur', 'Hazardeuer', 'Hasardeuhr'],
        korrekt: 0,
        etymologie: 'Französischen Ursprungs, von „hasard“ für „Wagnis“ oder „Risiko“, bezieht sich auf jemanden, der ein Spieler oder Draufgänger ist.'
    },
    axiom: {
        name: 'Axiom',
        erklaerungUndSynonyme: 'Ein Grundsatz oder eine Annahme, die als gegeben gilt. Synonyme: Grundsatz, Postulat.',
        options: ['Axiom', 'Axiomm', 'Aximom', 'Aksiom'],
        korrekt: 0,
        etymologie: 'Vom griechischen „axioma“ für „Würde“ oder „allgemein anerkannte Wahrheit“; grundlegende Annahme in der Philosophie und Mathematik.'
    },
    moraene: {
        name: 'Moräne',
        erklaerungUndSynonyme: 'Gesteinsmaterial, das von einem Gletscher transportiert und abgelagert wird. Synonyme: Gletscherschutt.',
        options: ['Moraene', 'Moräne', 'Morrene', 'Moraine'],
        korrekt: 1,
        etymologie: 'Aus dem Französischen „moraine“, was sich auf Gesteins- und Erdrückstände von Gletschern bezieht.'
    },
    murgang: {
        name: 'Murgang',
        erklaerungUndSynonyme: 'Ein schnell fließender Strom aus Schlamm und Geröll. Synonyme: Schlammlawine, Erdrutsch.',
        options: ['Murgang', 'Murggang', 'Murgeng', 'Murgangh'],
        korrekt: 0,
        etymologie: '„Mur“ aus dem Althochdeutschen für „Schutt“ und „Gang“, was sich auf ein Erdrutschphänomen bezieht.'
    },
    marter: {
        name: 'Marter',
        erklaerungUndSynonyme: 'Großes Leid oder Qual. Synonyme: Qual, Pein.',
        options: ['Marthyr', 'Marter', 'Martter', 'Marther'],
        korrekt: 1,
        etymologie: 'Vom lateinischen „martyr“, ursprünglich „Märtyrer“, wird heute als „Qual“ oder „Leidensweg“ verstanden.'
    },
    pathos: {
        name: 'Pathos',
        erklaerungUndSynonyme: 'Ausdruck starker Gefühle oder Leidenschaft in Sprache oder Kunst. Synonyme: Leidenschaft, Emphase.',
        options: ['Pathos', 'Pattos', 'Pathoss', 'Pattoss'],
        korrekt: 0,
        etymologie: 'Aus dem Griechischen „pathos“, was „Leiden“ oder „Gefühl“ bedeutet; oft als „erhabenes Gefühl“ verstanden.'
    },
    fronde: {
        name: 'Fronde',
        erklaerungUndSynonyme: 'Historischer Aufstand in Frankreich oder allgemein eine Rebellion. Synonyme: Aufstand, Revolte.',
        options: ['Fronde', 'Frunde', 'Frond', 'Frohnde'],
        korrekt: 0,
        etymologie: 'Vom französischen „fronde“ für „Schleuder“; eine historische Revolte in Frankreich, die als Symbol für Rebellion steht.'
    },
    epitaph: {
        name: 'Epitaph',
        erklaerungUndSynonyme: 'Ein Schriftstück oder Text zu Ehren eines Verstorbenen, oft auf einem Grabstein. Synonyme: Grabinschrift, Gedenkspruch.',
        options: ['Epittaph', 'Epitaph', 'Eppitaph', 'Epitahp'],
        korrekt: 1,
        etymologie: 'Aus dem Griechischen „epi“ (auf) und „taphos“ (Grab) – ein Grabspruch oder eine Grabinschrift.'
    },
    bokeh: {
        name: 'Bokeh',
        erklaerungUndSynonyme: 'Ästhetische Qualität der Unschärfe in unscharfen Bereichen eines Fotos. Synonyme: Unschärfe-Effekt, Hintergrundunschärfe.',
        options: ['Boke', 'Bokeh', 'Bokéh', 'Bokhe'],
        korrekt: 1,
        etymologie: 'Japanisches Wort „boke“ für „Unschärfe“; in der Fotografie für den ästhetischen Unschärfeeffekt im Hintergrund.'
    },
    nimbus: {
        name: 'Nimbus',
        erklaerungUndSynonyme: 'Eine besondere Ausstrahlung oder Aura um eine Person oder Sache. Synonyme: Heiligenschein, Aura.',
        options: ['Nimbuss', 'Nymbus', 'Nimbos', 'Nimbus'],
        korrekt: 3,
        etymologie: 'Vom lateinischen „nimbus“ für „Wolke“ oder „Heiligenschein“, oft für eine Aura des Besonderen verwendet.'
    },
    interregnum: {
        name: 'Interregnum',
        erklaerungUndSynonyme: 'Zeitspanne zwischen zwei Regierungsperioden, in der kein legitimer Herrscher vorhanden ist. Synonyme: Regierungsvakuum, Zwischenherrschaft.',
        options: ['Interegnum', 'Interregnum', 'Interregnun', 'Interegnun'],
        korrekt: 1,
        etymologie: 'Vom Lateinischen „inter-“ (zwischen) und „regnum“ (Herrschaft), eine Zeit ohne Regierung oder Herrscher.'
    },
    standard: {
        name: 'Standard',
        erklaerungUndSynonyme: 'Ein allgemein anerkannter Maßstab oder eine Norm, an der sich andere Dinge messen lassen. Synonyme: Norm, Richtlinie, Maßstab.',
        options: ['Standart', 'Standard', 'Standartt', 'Stantdard'],
        korrekt: 1,
        etymologie: 'Aus dem Englischen „standard“, ursprünglich „feste Norm“ oder „Vorgabe“, zur Festlegung von Qualitäts- und Maßstäben.'
    },
    standarte: {
        name: 'Standarte',
        erklaerungUndSynonyme: 'Ein befestigtes Banner oder Feldzeichen, das oft von militärischen oder königlichen Einheiten getragen wird. Synonyme: Feldzeichen, Fahne, Banner.',
        options: ['Standard', 'Standarte', 'Standart', 'Standerte'],
        korrekt: 1,
        etymologie: 'Vom althochdeutschen „standan“ (stehen) und „arta“ (Art), ursprünglich ein stehendes Feldzeichen für militärische Einheiten.'
    },
    idiotikon: {
        name: 'Idiotikon',
        erklaerungUndSynonyme: 'Ein historisches Wörterbuch oder Lexikon, das die Eigenheiten einer bestimmten Sprache oder eines Dialekts aufzeigt, oft mit regionalem Fokus. Synonyme: Dialektwörterbuch, Sprachlexikon.',
        options: ['Idiotikum', 'Idiothek', 'Idiotikon', 'Idiomikon'],
        korrekt: 2,
        etymologie: 'Vom griechischen „idiotikos“ (eigen, speziell) und „-ikon“ (Endung für Verzeichnisse), also ein Verzeichnis der Eigenheiten einer Sprache.'
    },
    sillage: {
        name: 'Sillage',
        erklaerungUndSynonyme: 'Der Duft, den ein Parfum oder eine Person in der Luft hinterlässt. Synonyme: Duftspur, Parfumspur.',
        options: ['Silage', 'Silhouette', 'Silaj', 'Sillage'],
        korrekt: 3,
        etymologie: 'Aus dem Französischen „sillage“ (Spur, Kielwasser), ursprünglich aus dem Seefahrtsjargon entlehnt und im Duftkontext für die Duftspur verwendet, die ein Parfum hinterlässt.'
    },
   overtonfenster: {
        name: 'Overtonfenster',
        erklaerungUndSynonyme: 'Der Bereich von Ideen und Meinungen, die in einer Gesellschaft zu einer bestimmten Zeit als akzeptabel gelten. Synonyme: Akzeptanzrahmen, Akzeptanzspektrum.',
        options: ['Overten-Fenster', 'Overtton-Fenster', 'Overton-Fenster', 'Overtonn-Fenster'],
        korrekt: 2,
        etymologie: 'Nach Joseph P. Overton, einem US-amerikanischen Politologen, der das Konzept formulierte, wonach der Bereich des gesellschaftlich Akzeptablen durch kulturelle und politische Einflüsse verschoben werden kann.'
    },
    hekatombe: {
        name: 'Hekatombe',
        erklaerungUndSynonyme: 'Ein großes, oft blutiges Opfer oder ein massenhafter Verlust. Synonyme: Massenopfer, Blutbad.',
        options: ['Hecatombe', 'Hekkatombe', 'Hekatombe', 'Heckatombe'],
        korrekt: 2,
        etymologie: 'Aus dem Griechischen „hekatombē“ (Opfer von 100 Rindern), traditionell in der Antike für große Opfergaben verwendet, heute als Metapher für massenhafte Verluste.'
    },
    epigone: {
        name: 'Epigone',
        erklaerungUndSynonyme: 'Ein Nachahmer oder Nachfolger, oft ohne Originalität. Synonyme: Nachfolger, Nachahmer.',
        options: ['Epigonne', 'Epihgone', 'Eppigone', 'Epigone'],
        korrekt: 3,
        etymologie: 'Aus dem Griechischen „epígonos“ (Nachgeborener), ursprünglich für Nachfahren großer Persönlichkeiten verwendet, heute meist abwertend für jemanden ohne kreative Eigenleistung.'
    },
    menetekel: {
        name: 'Menetekel',
        erklaerungUndSynonyme: 'Ein Warnzeichen für ein drohendes Unheil. Synonyme: Warnung, Schicksalszeichen.',
        options: ['Meneteckel', 'Menetekel', 'Menetekl', 'Mennetekel'],
        korrekt: 1,
        etymologie: 'Biblischer Ursprung, aus dem Buch Daniel; das unheilvolle Zeichen „Mene mene tekel upharsin“ kündigte das Ende des babylonischen Reiches an. Heute metaphorisch für ein Vorzeichen des Scheiterns.'
    },
    verballhornung: {
        name: 'Verballhornung',
        erklaerungUndSynonyme: 'Die bewusste oder unbewusste Verfälschung, Verzerrung oder Entstellung eines Ausdrucks, oft humorvoll oder abwertend. Synonyme: Entstellung, Verfälschung.',
        options: ['Werbalhornung', 'Verbahlhornung', 'Verballhornung', 'Verbellhornung'],
        korrekt: 2,
        etymologie: 'Der Begriff geht auf den Buchdrucker Johann Ballhorn zurück, der im 16. Jahrhundert Texte unabsichtlich fehlerhaft druckte. Heute bezeichnet er absichtliche oder unabsichtliche Entstellungen von Sprache.'
    },
    wortklauberei: {
        name: 'Wortklauberei',
        erklaerungUndSynonyme: 'Übertriebene Genauigkeit in der Interpretation von Worten, meist pedantisch oder als Kritik an Kleinlichkeit. Synonyme: Pedanterie, Haarspalterei.',
        options: ['Wortklauberey', 'Wortglauberei', 'Wortklauberei', 'Wortglauberey'],
        korrekt: 2,
        etymologie: 'Wortklauberei leitet sich von „klauben“ ab, was „sorgfältig auswählen“ bedeutet, und beschreibt eine Tendenz, sich an Details in der Wortwahl aufzuhalten.'
    },
    rabulistik: {
        name: 'Rabulistik',
        erklaerungUndSynonyme: 'Einsatz von Spitzfindigkeiten und Haarspalterei, meist mit dem Ziel, die Wahrheit zu verdrehen. Synonyme: Wortklauberei, Haarspalterei.',
        options: ['Rabulistik', 'Rabbulistik', 'Rabulistick', 'Rabullistik'],
        korrekt: 0,
        etymologie: 'Aus dem Lateinischen „rabulista“ (Streithansl), ursprünglich ein abwertender Begriff für Rechtsanwälte, die mit Spitzfindigkeiten arbeiten. Heute synonym für manipulative Argumentation.'
    },
    ueberbordend: {
        name: 'Überbordend',
        erklaerungUndSynonyme: 'Etwas, das im Übermaß vorhanden ist oder alle Grenzen überschreitet. Synonyme: maßlos, exzessiv.',
        options: ['Überborend', 'Überbordernd', 'Überbordend', 'Überbordent'],
        korrekt: 2,
        etymologie: 'Aus dem nautischen Bereich, wo es „über Bord gehen“ bedeutet. Im übertragenen Sinne beschreibt es etwas, das das zulässige Maß überschreitet.'
    },
    sakrosankt: {
        name: 'Sakrosankt',
        erklaerungUndSynonyme: 'Unantastbar oder heilig, etwas, das als unverletzlich gilt. Synonyme: unantastbar, unfehlbar.',
        options: ['Sackrosankt', 'Sakrosankt', 'Sakrosangt', 'Sakrosant'],
        korrekt: 1,
        etymologie: 'Aus dem Lateinischen „sacrosanctus“, das sich aus „sacer“ (heilig) und „sanctus“ (unverletzlich) zusammensetzt. Der Begriff bezeichnet etwas, das als absolut schützenswert oder heilig gilt.'
    },
    hanebuechen: {
        name: 'Hanebüchen',
        erklaerungUndSynonyme: 'Etwas, das extrem grob, unsinnig oder übertrieben ist. Synonyme: absurd, ungeheuerlich.',
        options: ['Hanebüchen', 'Hanebüchern', 'Hahnebüchen', 'Hahnebüchern'],
        korrekt: 0,
        etymologie: 'Ursprünglich abgeleitet von „Hainbuche“, einem besonders zähen Holz, das für grobe Arbeiten verwendet wurde. Im übertragenen Sinne beschreibt es heute etwas, das besonders unsinnig oder plump ist.'
    },
    nebelkerze: {
        name: 'Nebelkerze',
        erklaerungUndSynonyme: 'Ein Mittel, um jemanden abzulenken oder zu täuschen. Synonyme: Ablenkungsmanöver, Täuschung.',
        options: ['Nebelkatze', 'Nebelkerze', 'Nebelkertze', 'Nabelkerze'],
        korrekt: 1,
        etymologie: 'Militärischer Ursprung: Eine Nebelkerze wird gezündet, um ein Gebiet zu verschleiern und Verwirrung zu stiften. Heute im übertragenen Sinne für gezielte Ablenkung verwendet.'
    },
    raeuberpistole: {
        name: 'Räuberpistole',
        erklaerungUndSynonyme: 'Eine übertriebene, unglaubwürdige oder sensationelle Geschichte. Synonyme: Lügengeschichte, Schauermärchen.',
        options: ['Räuberflinte', 'Räubergewehr', 'Räuberpistole', 'Raubpistole'],
        korrekt: 2,
        etymologie: 'Früher waren Räuberpistolen reißerische Abenteuergeschichten über Räuber und Banditen. Heute beschreibt der Begriff eine unglaubwürdige oder spektakulär ausgeschmückte Erzählung.'
    },
    spalier: {
        name: 'Spalier',
        erklaerungUndSynonyme: 'Eine Reihe von Personen oder Objekten, die eine Gasse bilden, durch die jemand hindurchgehen kann. Synonyme: Ehrenreihe, Reihenformation.',
        options: ['Spalier', 'Spahlier', 'Spallier', 'Spalir'],
        korrekt: 0,
        etymologie: 'Aus dem Italienischen „spalliera“ (Schulterhöhe), ursprünglich für Pflanzen an Rankgittern verwendet, die eine Gasse bilden. Heute auch im übertragenen Sinne für eine Reihe von Personen verwendet.'
    },
    maeander: {
        name: 'Mäander',
        erklaerungUndSynonyme: 'Ein gewundener, sich schlängelnder Verlauf, oft von Flüssen oder Wegen. Synonyme: Schlingen, Windungen.',
        options: ['Meander', 'Mäander', 'Mänder', 'Mäender'],
        korrekt: 1,
        etymologie: 'Vom griechischen Fluss „Maiandros“, bekannt für seine vielen Windungen. Heute bezeichnet es allgemein eine geschwungene, gewundene Form.'
    },
    holistisch: {
        name: 'Holistisch',
        erklaerungUndSynonyme: 'Eine Betrachtungsweise, die das Ganze und seine Zusammenhänge in den Fokus stellt, statt einzelner Teile. Synonyme: ganzheitlich, umfassend.',
        options: ['Holistisch', 'Hohlistisch', 'Hollistisch', 'Holistich'],
        korrekt: 0,
        etymologie: 'Vom griechischen „holos“ (ganz), in der Philosophie und Wissenschaft als Ansatz, der das Gesamtsystem betrachtet.'
    },
    kongruent: {
        name: 'Kongruent',
        erklaerungUndSynonyme: 'Etwas, das in Form, Inhalt oder Bedeutung übereinstimmt. Synonyme: übereinstimmend, deckungsgleich.',
        options: ['Kongruent', 'Konkruent', 'Konruent', 'Kongruend'],
        korrekt: 0,
        etymologie: 'Aus dem Lateinischen „congruere“ (zusammenpassen), in Mathematik und Geometrie für deckungsgleiche Formen und allgemein für Übereinstimmung verwendet.'
    },
    diametral: {
        name: 'Diametral',
        erklaerungUndSynonyme: 'Etwas, das in direktem Gegensatz steht oder genau entgegengesetzt ist. Synonyme: gegensätzlich, entgegengesetzt.',
        options: ['Diermetral', 'Diametrahl', 'Diametral', 'Diamettral'],
        korrekt: 2,
        etymologie: 'Vom griechischen „diametros“ (Durchmesser), beschreibt eine Position auf der gegenüberliegenden Seite eines Durchmessers, im übertragenen Sinne für extreme Gegensätze verwendet.'
    },
    oikophob: {
        name: 'Oikophob',
        erklaerungUndSynonyme: 'Die Abneigung oder Feindseligkeit gegenüber der eigenen Kultur oder Heimat. Synonyme: Heimatfeindlich, kulturkritisch.',
        options: ['Eukophob', 'Oikophob', 'Oukophob', 'Oikofob'],
        korrekt: 1,
        etymologie: 'Vom Griechischen „oikos“ (Haus) und „phobos“ (Angst), ein Begriff, der die Abneigung gegen die eigene Kultur oder Heimat beschreibt, meist im politischen Kontext verwendet.'
    },
    duktus: {
        name: 'Duktus',
        erklaerungUndSynonyme: 'Der charakteristische Stil oder die Art und Weise, wie etwas geschrieben oder gezeichnet wird. Synonyme: Stil, Ausdruck.',
        options: ['Ducktus', 'Duktus', 'Duktuss', 'Ducktuss'],
        korrekt: 1,
        etymologie: 'Aus dem Lateinischen „ductus“ (Führung, Zug), beschreibt den individuellen Schreib- oder Zeichenstil einer Person.'
    },
    habitus: {
        name: 'Habitus',
        erklaerungUndSynonyme: 'Die äußere Erscheinung oder typische Haltung einer Person, die oft ihre Persönlichkeit oder sozialen Status widerspiegelt. Synonyme: Auftreten, Haltung.',
        options: ['Habitus', 'Hahbitus', 'Habituss', 'Habbitus'],
        korrekt: 0,
        etymologie: 'Aus dem Lateinischen „habitus“ (Kleidung, Haltung), beschreibt die äußere Erscheinung oder das Auftreten, oft im soziologischen Kontext verwendet.'
    },
    taxonomie: {
        name: 'Taxonomie',
        erklaerungUndSynonyme: 'Ein System zur Klassifizierung und Einordnung von Dingen, häufig in der Biologie oder Wissensordnung verwendet. Synonyme: Klassifikation, Systematik.',
        options: ['Taksonomie', 'Taxonomie', 'Taxonnomie', 'Taxonomi'],
        korrekt: 1,
        etymologie: 'Aus dem Griechischen „taxis“ (Ordnung) und „nomos“ (Gesetz), ursprünglich in der Biologie verwendet, um Lebewesen zu klassifizieren.'
    }

};
