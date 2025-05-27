// terminidata.ts

interface Fachbegriff {
    name: string;
    erklaerungUndSynonyme: string;
    options: string[];
    korrekt: number; // Index der korrekten Antwort
    etymologie: string;
    beispielSatz: string;
}

export const Fachbegriffe: { [key: string]: Fachbegriff } = {
    rueckgrat: {
        name: 'Rückgrat',
        erklaerungUndSynonyme: 'Die Wirbelsäule von Menschen oder Tieren. Synonyme: Wirbelsäule, Charakterfestigkeit, Moralische Stärke.',
        options: ['Rückrad', 'Rückgrat', 'Rückgrad', 'Rückrahd'],
        korrekt: 1, // Index der korrekten Antwort im options-Array
        etymologie: 'Das Wort setzt sich aus "Rücken" und "Grat" zusammen, wobei "Grat" eine schmale Kante bezeichnet.',
        beispielSatz: 'Er bewies Rückgrat und hielt an seinen Werten fest.'
    },
    portemonnaie: {
        name: 'Portemonnaie',
        erklaerungUndSynonyme: 'Ein kleines Behältnis zur Aufbewahrung von Geld und Karten. Synonyme: Geldbörse, Brieftasche.',
        options: ['Portmonee', 'Portemonnaie', 'Portmonaie', 'Portmone'],
        korrekt: 1,
        etymologie: 'Aus dem Französischen "porte-monnaie", was "Geldträger" bedeutet.',
        beispielSatz: 'Er steckte das Kleingeld in sein Portemonnaie.'
    },
    euthanasie: {
        name: 'Euthanasie',
        erklaerungUndSynonyme: 'Geplantes Herbeiführen des Todes zur Beendigung von Leiden. Synonyme: Sterbehilfe.',
        options: ['Euthanasie', 'Eutanasie', 'Eutanansie', 'Eutahanasie'],
        korrekt: 0,
        etymologie: 'Aus dem Griechischen "eu" (gut) und "thanatos" (Tod) – bedeutet "guter Tod".',
        beispielSatz: 'In einigen Ländern ist Euthanasie legal.'
    },
    stegreif: {
        name: 'Stegreif',
        erklaerungUndSynonyme: 'Etwas spontan und ohne Vorbereitung tun. Synonyme: improvisiert, ad hoc.',
        options: ['Stehgreif', 'Stehgref', 'Stegreif', 'Stehgrihf'],
        korrekt: 2,
        etymologie: 'Vom mittelhochdeutschen „stegereif“, was das „ohne Vorbereitung Handeln“ bedeutet.',
        beispielSatz: 'Sie hielt eine Rede aus dem Stegreif.'
    },
    paria: {
        name: 'Paria',
        erklaerungUndSynonyme: 'Eine ausgestossene oder gemiedene Person. Synonyme: Ausgestossener, Aussenseiter.',
        options: ['Paria', 'Parya', 'Parie', 'Pariah'],
        korrekt: 0,
        etymologie: 'Aus dem Tamilischen „paraiyar“, bezeichnet eine „niedriggestellte Person“ oder „Ausgestossener“.',
        beispielSatz: 'In der Gruppe wurde er zum Paria erklärt.'
    },
    faksimile: {
        name: 'Faksimile',
        erklaerungUndSynonyme: 'Eine genaue Nachbildung oder Reproduktion eines Dokuments. Synonyme: Kopie, Nachbildung.',
        options: ['Faximile', 'Faksimile', 'Facsimile', 'Fakzimile'],
        korrekt: 1,
        etymologie: 'Aus dem Lateinischen „fac simile“ – „mach es ähnlich“, heute als genaue Nachbildung verstanden.',
        beispielSatz: 'Wir haben ein Faksimile des Originaldokuments erhalten.'
    },
    firnis: {
        name: 'Firnis',
        erklaerungUndSynonyme: 'Ein transparenter Überzug zum Schutz von Oberflächen, insbesondere in der Malerei. Synonyme: Lack, Versiegelung.',
        options: ['Firniss', 'Fernis', 'Fiernis', 'Firnis'],
        korrekt: 3,
        etymologie: 'Vom mittelhochdeutschen „firnisse“ für „Schutzüberzug“, in der Kunst für das Versiegeln von Gemälden verwendet.',
        beispielSatz: 'Der Maler trug zum Schluss Firnis auf das Gemälde auf.'
    },
    patina: {
        name: 'Patina',
        erklaerungUndSynonyme: 'Eine durch Alterung entstehende Oberfläche auf Materialien wie Metall oder Holz. Synonyme: Alterungserscheinung, Oxidschicht.',
        options: ['Patina', 'Pattina', 'Patiena', 'Patinah'],
        korrekt: 0,
        etymologie: 'Aus dem Lateinischen „patina“, ursprünglich „Schüssel“, bezieht sich heute auf die Alterserscheinungen von Oberflächen.',
        beispielSatz: 'Die alte Statue hat über die Jahre eine grüne Patina entwickelt.'
    },
    renegat: {
        name: 'Renegat',
        erklaerungUndSynonyme: 'Eine Person, die ihren Glauben oder ihre Überzeugungen verrät. Synonyme: Abtrünniger, Überläufer.',
        options: ['Renegat', 'Renigat', 'Renegad', 'Rennegat'],
        korrekt: 0,
        etymologie: 'Vom lateinischen „renegatus“, was „Abtrünniger“ oder „Verräter“ bedeutet.',
        beispielSatz: 'Ehemalige Parteimitglieder hielten ihn für einen Renegaten.'
    },
    elegie: {
        name: 'Elegie',
        erklaerungUndSynonyme: 'Ein melancholisches oder klagendes Gedicht. Synonyme: Klagelied, Trauergedicht.',
        options: ['Elegy', 'Elegje', 'Elegie', 'Elegei'],
        korrekt: 2,
        etymologie: 'Vom griechischen „elegeia“, einer Gedichtform, die Trauer oder Verlust ausdrückt.',
        beispielSatz: 'Er schrieb eine Elegie über den Verlust seiner Heimat.'
    },
    hasardeur: {
        name: 'Hasardeur',
        erklaerungUndSynonyme: 'Eine Person, die leichtsinnig Risiken eingeht. Synonyme: Draufgänger, Glücksspieler.',
        options: ['Hasardeur', 'Hassardeur', 'Hazardeuer', 'Hasardeuhr'],
        korrekt: 0,
        etymologie: 'Französischen Ursprungs, von „hasard“ für „Wagnis“ oder „Risiko“, bezieht sich auf jemanden, der ein Spieler oder Draufgänger ist.',
        beispielSatz: 'Sein riskantes Geschäftsvorhaben machte ihn zum Hasardeur.'
    },
    moraene: {
        name: 'Moräne',
        erklaerungUndSynonyme: 'Gesteinsmaterial, das von einem Gletscher transportiert und abgelagert wird. Synonyme: Gletscherschutt.',
        options: ['Moraene', 'Moräne', 'Morrene', 'Moraine'],
        korrekt: 1,
        etymologie: 'Aus dem Französischen „moraine“, was sich auf Gesteins- und Erdrückstände von Gletschern bezieht.',
        beispielSatz: 'Der Gletscher hinterliess eine beeindruckende Moräne.'
    },
    murgang: {
        name: 'Murgang',
        erklaerungUndSynonyme: 'Ein schnell fliessender Strom aus Schlamm und Geröll. Synonyme: Schlammlawine, Erdrutsch.',
        options: ['Murgang', 'Murggang', 'Murgeng', 'Murgangh'],
        korrekt: 0,
        etymologie: '„Mur“ aus dem Althochdeutschen für „Schutt“ und „Gang“, was sich auf ein Erdrutschphänomen bezieht.',
        beispielSatz: 'Nach dem starken Regen gab es im Tal einen Murgang.'
    },
    marter: {
        name: 'Marter',
        erklaerungUndSynonyme: 'Grosses Leid oder Qual. Synonyme: Qual, Pein.',
        options: ['Marthyr', 'Marter', 'Martter', 'Marther'],
        korrekt: 1,
        etymologie: 'Vom lateinischen „martyr“, ursprünglich „Märtyrer“, wird heute als „Qual“ oder „Leidensweg“ verstanden.',
        beispielSatz: 'Die lange Wanderung in der Hitze wurde zur Marter.'
    },
    pathos: {
        name: 'Pathos',
        erklaerungUndSynonyme: 'Ausdruck starker Gefühle oder Leidenschaft in Sprache oder Kunst. Synonyme: Leidenschaft, Emphase.',
        options: ['Pathos', 'Pattos', 'Pathoss', 'Pattoss'],
        korrekt: 0,
        etymologie: 'Aus dem Griechischen „pathos“, was „Leiden“ oder „Gefühl“ bedeutet; oft als „erhabenes Gefühl“ verstanden.',
        beispielSatz: 'Seine Rede war voller Pathos und Leidenschaft.'
    },
    fronde: {
        name: 'Fronde',
        erklaerungUndSynonyme: 'Historischer Aufstand in Frankreich oder allgemein eine Rebellion. Synonyme: Aufstand, Revolte.',
        options: ['Fronde', 'Frunde', 'Frond', 'Frohnde'],
        korrekt: 0,
        etymologie: 'Vom französischen „fronde“ für „Schleuder“; eine historische Revolte in Frankreich, die als Symbol für Rebellion steht.',
        beispielSatz: 'Die Fronde in Frankreich war ein adliger Aufstand gegen den Kardinal.'
    },
    epitaph: {
        name: 'Epitaph',
        erklaerungUndSynonyme: 'Ein Schriftstück oder Text zu Ehren eines Verstorbenen, oft auf einem Grabstein. Synonyme: Grabinschrift, Gedenkspruch.',
        options: ['Epittaph', 'Epitaph', 'Eppitaph', 'Epitahp'],
        korrekt: 1,
        etymologie: 'Aus dem Griechischen „epi“ (auf) und „taphos“ (Grab) – ein Grabspruch oder eine Grabinschrift.',
        beispielSatz: 'Auf seinem Grabstein wurde ein berührendes Epitaph eingraviert.'
    },
    bokeh: {
        name: 'Bokeh',
        erklaerungUndSynonyme: 'Ästhetische Qualität der Unschärfe in unscharfen Bereichen eines Fotos. Synonyme: Unschärfe-Effekt, Hintergrundunschärfe.',
        options: ['Boke', 'Bokeh', 'Bokéh', 'Bokhe'],
        korrekt: 1,
        etymologie: 'Japanisches Wort „boke“ für „Unschärfe“; in der Fotografie für den ästhetischen Unschärfeeffekt im Hintergrund.',
        beispielSatz: 'Das Foto zeigt ein wunderschönes Bokeh im Hintergrund.'
    },
    nimbus: {
        name: 'Nimbus',
        erklaerungUndSynonyme: 'Eine besondere Ausstrahlung oder Aura um eine Person oder Sache. Synonyme: Heiligenschein, Aura.',
        options: ['Nimbuss', 'Nymbus', 'Nimbos', 'Nimbus'],
        korrekt: 3,
        etymologie: 'Vom lateinischen „nimbus“ für „Wolke“ oder „Heiligenschein“, oft für eine Aura des Besonderen verwendet.',
        beispielSatz: 'Der Nimbus des Künstlers verblasste mit der Zeit.'
    },
    interregnum: {
        name: 'Interregnum',
        erklaerungUndSynonyme: 'Zeitspanne zwischen zwei Regierungsperioden, in der kein legitimer Herrscher vorhanden ist. Synonyme: Regierungsvakuum, Zwischenherrschaft.',
        options: ['Interegnum', 'Interregnum', 'Interregnun', 'Interegnun'],
        korrekt: 1,
        etymologie: 'Vom Lateinischen „inter-“ (zwischen) und „regnum“ (Herrschaft), eine Zeit ohne Regierung oder Herrscher.',
        beispielSatz: 'Während des Interregnums gab es keine klare Regierung.'
    },
    standard: {
        name: 'Standard',
        erklaerungUndSynonyme: 'Ein allgemein anerkannter Massstab oder eine Norm, an der sich andere Dinge messen lassen. Synonyme: Norm, Richtlinie, Massstab.',
        options: ['Standart', 'Standard', 'Standartt', 'Stantdard'],
        korrekt: 1,
        etymologie: 'Aus dem Englischen „standard“, ursprünglich „feste Norm“ oder „Vorgabe“, zur Festlegung von Qualitäts- und Massstäben.',
        beispielSatz: 'Unser neuer Qualitätsstandard wird nächsten Monat eingeführt.'
    },
    standarte: {
        name: 'Standarte',
        erklaerungUndSynonyme: 'Ein befestigtes Banner oder Feldzeichen, das oft von militärischen oder königlichen Einheiten getragen wird. Synonyme: Feldzeichen, Fahne, Banner.',
        options: ['Standard', 'Standarte', 'Standart', 'Standerte'],
        korrekt: 1,
        etymologie: 'Vom althochdeutschen „standan“ (stehen) und „arta“ (Art), ursprünglich ein stehendes Feldzeichen für militärische Einheiten.',
        beispielSatz: 'Die königliche Standarte wehte über dem Palast.'
    },
    idiotikon: {
        name: 'Idiotikon',
        erklaerungUndSynonyme: 'Ein historisches Wörterbuch oder Lexikon, das die Eigenheiten einer bestimmten Sprache oder eines Dialekts aufzeigt, oft mit regionalem Fokus. Synonyme: Dialektwörterbuch, Sprachlexikon.',
        options: ['Idiotikum', 'Idiothek', 'Idiotikon', 'Idiomikon'],
        korrekt: 2,
        etymologie: 'Vom griechischen „idiotikos“ (eigen, speziell) und „-ikon“ (Endung für Verzeichnisse), also ein Verzeichnis der Eigenheiten einer Sprache.',
        beispielSatz: 'Das Schweizer Idiotikon ist ein Wörterbuch schweizerdeutscher Dialekte.'
    },
    sillage: {
        name: 'Sillage',
        erklaerungUndSynonyme: 'Der Duft, den ein Parfum oder eine Person in der Luft hinterlässt. Synonyme: Duftspur, Parfumspur.',
        options: ['Silage', 'Silhouette', 'Silaj', 'Sillage'],
        korrekt: 3,
        etymologie: 'Aus dem Französischen „sillage“ (Spur, Kielwasser), ursprünglich aus dem Seefahrtsjargon entlehnt und im Duftkontext für die Duftspur verwendet, die ein Parfum hinterlässt.',
        beispielSatz: 'Das Parfüm hinterliess einen starken Sillage im Raum.'
    },
    overtonfenster: {
        name: 'Overtonfenster',
        erklaerungUndSynonyme: 'Der Bereich von Ideen und Meinungen, die in einer Gesellschaft zu einer bestimmten Zeit als akzeptabel gelten. Synonyme: Akzeptanzrahmen, Akzeptanzspektrum.',
        options: ['Overten-Fenster', 'Overtton-Fenster', 'Overton-Fenster', 'Overtonn-Fenster'],
        korrekt: 2,
        etymologie: 'Nach Joseph P. Overton, einem US-amerikanischen Politologen, der das Konzept formulierte, wonach der Bereich des gesellschaftlich Akzeptablen durch kulturelle und politische Einflüsse verschoben werden kann.',
        beispielSatz: 'Die akzeptierten politischen Meinungen verschieben sich innerhalb des Overton-Fensters.'
    },
    hekatombe: {
        name: 'Hekatombe',
        erklaerungUndSynonyme: 'Ein grosses, oft blutiges Opfer oder ein massenhafter Verlust. Synonyme: Massenopfer, Blutbad.',
        options: ['Hecatombe', 'Hekkatombe', 'Hekatombe', 'Heckatombe'],
        korrekt: 2,
        etymologie: 'Aus dem Griechischen „hekatombē“ (Opfer von 100 Rindern), traditionell in der Antike für grosse Opfergaben verwendet, heute als Metapher für massenhafte Verluste.',
        beispielSatz: 'Der Krieg forderte eine Hekatombe an Menschenleben.'
    },
    epigone: {
        name: 'Epigone',
        erklaerungUndSynonyme: 'Ein Nachahmer oder Nachfolger, oft ohne Originalität. Synonyme: Nachfolger, Nachahmer.',
        options: ['Epigonne', 'Epihgone', 'Eppigone', 'Epigone'],
        korrekt: 3,
        etymologie: 'Aus dem Griechischen „epígonos“ (Nachgeborener), ursprünglich für Nachfahren grosser Persönlichkeiten verwendet, heute meist abwertend für jemanden ohne kreative Eigenleistung.',
        beispielSatz: 'Der neue Künstler wurde als blosser Epigone seines Vorbildes betrachtet.'
    },
    menetekel: {
        name: 'Menetekel',
        erklaerungUndSynonyme: 'Ein Warnzeichen für ein drohendes Unheil. Synonyme: Warnung, Schicksalszeichen.',
        options: ['Meneteckel', 'Menetekel', 'Menetekl', 'Mennetekel'],
        korrekt: 1,
        etymologie: 'Biblischer Ursprung, aus dem Buch Daniel; das unheilvolle Zeichen „Mene mene tekel upharsin“ kündigte das Ende des babylonischen Reiches an. Heute metaphorisch für ein Vorzeichen des Scheiterns.',
        beispielSatz: 'Die Warnung war ein wahres Menetekel für das Unternehmen.'
    },
    verballhornung: {
        name: 'Verballhornung',
        erklaerungUndSynonyme: 'Die bewusste oder unbewusste Verfälschung, Verzerrung oder Entstellung eines Ausdrucks, oft humorvoll oder abwertend. Synonyme: Entstellung, Verfälschung.',
        options: ['Werbalhornung', 'Verbahlhornung', 'Verballhornung', 'Verbellhornung'],
        korrekt: 2,
        etymologie: 'Der Begriff geht auf den Buchdrucker Johann Ballhorn zurück, der im 16. Jahrhundert Texte unabsichtlich fehlerhaft druckte. Heute bezeichnet er absichtliche oder unabsichtliche Entstellungen von Sprache.',
        beispielSatz: 'Seine Parodie war eine Verballhornung des Originaltextes.'
    },
    wortklauberei: {
        name: 'Wortklauberei',
        erklaerungUndSynonyme: 'Übertriebene Genauigkeit in der Interpretation von Worten, meist pedantisch oder als Kritik an Kleinlichkeit. Synonyme: Pedanterie, Haarspalterei.',
        options: ['Wortklauberey', 'Wortglauberei', 'Wortklauberei', 'Wortglauberey'],
        korrekt: 2,
        etymologie: 'Wortklauberei leitet sich von „klauben“ ab, was „sorgfältig auswählen“ bedeutet, und beschreibt eine Tendenz, sich an Details in der Wortwahl aufzuhalten.',
        beispielSatz: 'Die Diskussion endete in reiner Wortklauberei.'
    },
    rabulistik: {
        name: 'Rabulistik',
        erklaerungUndSynonyme: 'Einsatz von Spitzfindigkeiten und Haarspalterei, meist mit dem Ziel, die Wahrheit zu verdrehen. Synonyme: Wortklauberei, Haarspalterei.',
        options: ['Rabulistik', 'Rabbulistik', 'Rabulistick', 'Rabullistik'],
        korrekt: 0,
        etymologie: 'Aus dem Lateinischen „rabulista“ (Streithansl), ursprünglich ein abwertender Begriff für Rechtsanwälte, die mit Spitzfindigkeiten arbeiten. Heute synonym für manipulative Argumentation.',
        beispielSatz: 'Seine Rabulistik in der Debatte nervte die Teilnehmer.'
    },
    ueberbordend: {
        name: 'Überbordend',
        erklaerungUndSynonyme: 'Etwas, das im Übermass vorhanden ist oder alle Grenzen überschreitet. Synonyme: masslos, exzessiv.',
        options: ['Überborend', 'Überbordernd', 'Überbordend', 'Überbordent'],
        korrekt: 2,
        etymologie: 'Aus dem nautischen Bereich, wo es „über Bord gehen“ bedeutet. Im übertragenen Sinne beschreibt es etwas, das das zulässige Mass überschreitet.',
        beispielSatz: 'Die Party war überbordend vor guter Laune und Exzess.'
    },
    sakrosankt: {
        name: 'Sakrosankt',
        erklaerungUndSynonyme: 'Unantastbar oder heilig, etwas, das als unverletzlich gilt. Synonyme: unantastbar, unfehlbar.',
        options: ['Sackrosankt', 'Sakrosankt', 'Sakrosangt', 'Sakrosant'],
        korrekt: 1,
        etymologie: 'Aus dem Lateinischen „sacrosanctus“, das sich aus „sacer“ (heilig) und „sanctus“ (unverletzlich) zusammensetzt. Der Begriff bezeichnet etwas, das als absolut schützenswert oder heilig gilt.',
        beispielSatz: 'Die Unabhängigkeit der Justiz gilt als sakrosankt.'
    },
    hanebuechen: {
        name: 'Hanebüchen',
        erklaerungUndSynonyme: 'Etwas, das extrem grob, unsinnig oder übertrieben ist. Synonyme: absurd, ungeheuerlich.',
        options: ['Hanebüchen', 'Hanebüchern', 'Hahnebüchen', 'Hahnebüchern'],
        korrekt: 0,
        etymologie: 'Ursprünglich abgeleitet von „Hainbuche“, einem besonders zähen Holz, das für grobe Arbeiten verwendet wurde. Im übertragenen Sinne beschreibt es heute etwas, das besonders unsinnig oder plump ist.',
        beispielSatz: 'Seine hanebüchene Behauptung überzeugte niemanden.'
    },
    nebelkerze: {
        name: 'Nebelkerze',
        erklaerungUndSynonyme: 'Ein Mittel, um jemanden abzulenken oder zu täuschen. Synonyme: Ablenkungsmanöver, Täuschung.',
        options: ['Nebelkatze', 'Nebelkerze', 'Nebelkertze', 'Nabelkerze'],
        korrekt: 1,
        etymologie: 'Militärischer Ursprung: Eine Nebelkerze wird gezündet, um ein Gebiet zu verschleiern und Verwirrung zu stiften. Heute im übertragenen Sinne für gezielte Ablenkung verwendet.',
        beispielSatz: 'Die Politikerin zündete eine Nebelkerze, um vom eigentlichen Thema abzulenken.'
    },
    raeuberpistole: {
        name: 'Räuberpistole',
        erklaerungUndSynonyme: 'Eine übertriebene, unglaubwürdige oder sensationelle Geschichte. Synonyme: Lügengeschichte, Schauermärchen.',
        options: ['Räuberflinte', 'Räubergewehr', 'Räuberpistole', 'Raubpistole'],
        korrekt: 2,
        etymologie: 'Früher waren Räuberpistolen reisserische Abenteuergeschichten über Räuber und Banditen. Heute beschreibt der Begriff eine unglaubwürdige oder spektakulär ausgeschmückte Erzählung.',
        beispielSatz: 'Die Geschichte, die er erzählte, klang wie eine Räuberpistole.'
    },
    spalier: {
        name: 'Spalier',
        erklaerungUndSynonyme: 'Eine Reihe von Personen oder Objekten, die eine Gasse bilden, durch die jemand hindurchgehen kann. Synonyme: Ehrenreihe, Reihenformation.',
        options: ['Spalier', 'Spahlier', 'Spallier', 'Spalir'],
        korrekt: 0,
        etymologie: 'Aus dem Italienischen „spalliera“ (Schulterhöhe), ursprünglich für Pflanzen an Rankgittern verwendet, die eine Gasse bilden. Heute auch im übertragenen Sinne für eine Reihe von Personen verwendet.',
        beispielSatz: 'Zur Hochzeit standen die Gäste Spalier mit Rosenbögen.'
    },
    maeander: {
        name: 'Mäander',
        erklaerungUndSynonyme: 'Ein gewundener, sich schlängelnder Verlauf, oft von Flüssen oder Wegen. Synonyme: Schlingen, Windungen.',
        options: ['Meander', 'Mäander', 'Mänder', 'Mäender'],
        korrekt: 1,
        etymologie: 'Vom griechischen Fluss „Maiandros“, bekannt für seine vielen Windungen. Heute bezeichnet es allgemein eine geschwungene, gewundene Form.',
        beispielSatz: 'Der Fluss mäandert durch die Landschaft.'
    },
    holistisch: {
        name: 'Holistisch',
        erklaerungUndSynonyme: 'Eine Betrachtungsweise, die das Ganze und seine Zusammenhänge in den Fokus stellt, statt einzelner Teile. Synonyme: ganzheitlich, umfassend.',
        options: ['Holistisch', 'Hohlistisch', 'Hollistisch', 'Holistich'],
        korrekt: 0,
        etymologie: 'Vom griechischen „holos“ (ganz), in der Philosophie und Wissenschaft als Ansatz, der das Gesamtsystem betrachtet.',
        beispielSatz: 'Das Unternehmen verfolgt einen holistischen Ansatz im Management.'
    },
    kongruent: {
        name: 'Kongruent',
        erklaerungUndSynonyme: 'Etwas, das in Form, Inhalt oder Bedeutung übereinstimmt. Synonyme: übereinstimmend, deckungsgleich.',
        options: ['Kongruent', 'Konkruent', 'Konruent', 'Kongruend'],
        korrekt: 0,
        etymologie: 'Aus dem Lateinischen „congruere“ (zusammenpassen), in Mathematik und Geometrie für deckungsgleiche Formen und allgemein für Übereinstimmung verwendet.',
        beispielSatz: 'Seine Taten waren nicht kongruent mit seinen Worten.'
    },
    diametral: {
        name: 'Diametral',
        erklaerungUndSynonyme: 'Etwas, das in direktem Gegensatz steht oder genau entgegengesetzt ist. Synonyme: gegensätzlich, entgegengesetzt.',
        options: ['Diermetral', 'Diametrahl', 'Diametral', 'Diamettral'],
        korrekt: 2,
        etymologie: 'Vom griechischen „diametros“ (Durchmesser), beschreibt eine Position auf der gegenüberliegenden Seite eines Durchmessers, im übertragenen Sinne für extreme Gegensätze verwendet.',
        beispielSatz: 'Ihre Ansichten waren diametral entgegengesetzt.'
    },
    oikophob: {
        name: 'Oikophob',
        erklaerungUndSynonyme: 'Die Abneigung oder Feindseligkeit gegenüber der eigenen Kultur oder Heimat. Synonyme: Heimatfeindlich, kulturkritisch.',
        options: ['Eukophob', 'Oikophob', 'Oukophob', 'Oikofob'],
        korrekt: 1,
        etymologie: 'Vom Griechischen „oikos“ (Haus) und „phobos“ (Angst), ein Begriff, der die Abneigung gegen die eigene Kultur oder Heimat beschreibt, meist im politischen Kontext verwendet.',
        beispielSatz: 'Seine Haltung wurde von vielen als oikophob kritisiert.'
    },
    duktus: {
        name: 'Duktus',
        erklaerungUndSynonyme: 'Der charakteristische Stil oder die Art und Weise, wie etwas geschrieben oder gezeichnet wird. Synonyme: Stil, Ausdruck.',
        options: ['Ducktus', 'Duktus', 'Duktuss', 'Ducktuss'],
        korrekt: 1,
        etymologie: 'Aus dem Lateinischen „ductus“ (Führung, Zug), beschreibt den individuellen Schreib- oder Zeichenstil einer Person.',
        beispielSatz: 'Der Duktus ihrer Schrift ist sehr klar und elegant.'
    },
    habitus: {
        name: 'Habitus',
        erklaerungUndSynonyme: 'Die äussere Erscheinung oder typische Haltung einer Person, die oft ihre Persönlichkeit oder sozialen Status widerspiegelt. Synonyme: Auftreten, Haltung.',
        options: ['Habitus', 'Hahbitus', 'Habituss', 'Habbitus'],
        korrekt: 0,
        etymologie: 'Aus dem Lateinischen „habitus“ (Kleidung, Haltung), beschreibt die äussere Erscheinung oder das Auftreten, oft im soziologischen Kontext verwendet.',
        beispielSatz: 'Sein akademischer Habitus war deutlich erkennbar.'
    },
    taxonomie: {
        name: 'Taxonomie',
        erklaerungUndSynonyme: 'Ein System zur Klassifizierung und Einordnung von Dingen, häufig in der Biologie oder Wissensordnung verwendet. Synonyme: Klassifikation, Systematik.',
        options: ['Taksonomie', 'Taxonomie', 'Taxonnomie', 'Taxonomi'],
        korrekt: 1,
        etymologie: 'Aus dem Griechischen „taxis“ (Ordnung) und „nomos“ (Gesetz), ursprünglich in der Biologie verwendet, um Lebewesen zu klassifizieren.',
        beispielSatz: 'Der Biologe arbeitet an der Taxonomie einer neuen Pflanzenart.'
    },
    petrichor: {
        name: 'Petrichor',
        erklaerungUndSynonyme: 'Der besondere, erdige Geruch, der entsteht, wenn Regen auf trockenen Boden trifft. Synonyme: Erdduft, Regenaroma.',
        options: ['Petricor', 'Petrichor', 'Petrikor', 'Petrychor'],
        korrekt: 1,
        etymologie: 'Aus dem Griechischen „petra“ (Stein) und „ichor“ (Götterblut), ursprünglich verwendet, um den Duft zu beschreiben, der nach Regen auftritt.',
        beispielSatz: 'Nach dem Gewitter lag der Duft des Petrichors in der Luft.'
    },
    phosphene: {
        name: 'Phosphene',
        erklaerungUndSynonyme: 'Die Lichtmuster, die man sieht, wenn die Augen bei geschlossenen Lidern gedrückt werden. Synonyme: Sehhalluzinationen, Druckerscheinungen.',
        options: ['Phosphene', 'Phosfeen', 'Phosfene', 'Fosphen'],
        korrekt: 0,
        etymologie: 'Aus dem Griechischen „phos“ (Licht) und „phainein“ (erscheinen), ursprünglich zur Beschreibung der leuchtenden Empfindungen im Auge.',
        beispielSatz: 'Als sie sanft auf ihre Augen drückte, sah sie bunte Phosphene.'
    },
    vergraemung: {
        name: 'Vergrämung',
        erklaerungUndSynonyme: 'Die gezielte Vermeidung oder Vertreibung von unerwünschten Tieren, meist durch Abschreckungsmittel oder Störmaßnahmen. Synonyme: Tiervertreibung, Wildabwehr.',
        options: ['Verkrämung', 'Vergreimung','Vergrämung', 'Vergrähmung'],
        korrekt: 2,
        etymologie: 'Vom mittelhochdeutschen „græmen“ (sich ärgern, erzürnen), im übertragenen Sinne auf das „Ärgern“ oder „Stören“ von Tieren angewandt.',
        beispielSatz: 'Zur Vergrämung von Wildgänsen setzte der Bauer akustische Signale ein.'
    },
    insinuation: {
        name: 'Insinuation',
        erklaerungUndSynonyme: 'Eine subtile oder indirekte Andeutung, oft mit manipulativer oder beleidigender Absicht. Synonyme: Unterstellung, Andeutung, Anspielung.',
        options: ['Insignation', 'Insinuation', 'Insonation', 'Insulation'],
        korrekt: 1,
        etymologie: 'Vom lateinischen „insinuare“ (hineinführen, einfügen), später im übertragenen Sinn „etwas unterschwellig andeuten“.',
        beispielSatz: 'Die Insinuation, dass er unfähig sei, ließ ihn aufhorchen.'
    },
    binnenmajuskel: {
        name: 'Binnenmajuskel',
        erklaerungUndSynonyme: 'Binnenmajuskel (die) nennt man einen Grossbuchstaben (Versalie, Majuskel) im Innern eines Wortes, das nicht komplett in Großbuchstaben geschrieben ist. Synonyme: der Binnenversal, die Binnenversalie oder Camelcase. ',
        options: ['Binenmmajuskel', 'Binnenmahjuskel', 'Binnenmajuskel', 'Binnenmajusgel'],
        korrekt: 2,
        etymologie: 'Vom lateinischen maiusculus (etwas größer).',
        beispielSatz: 'Die Binnenmajuskel wird in Lateinschriften verwendet, um einzelne semantische Bestandteile (Lexeme) zu betonen,Die Binnenmajuskel wird in Lateinschriften verwendet, um einzelne semantische Bestandteile (Lexeme) zu betonen.'
    },
    kuleschowEffekt: {
    name: "Kuleschow-Effekt",
        erklaerungUndSynonyme: "Filmtheoretisches Phänomen, bei dem Zuschauer emotionale oder inhaltliche Verbindungen zwischen aufeinanderfolgenden, eigentlich unverbundenen Einstellungen herstellen, abhängig vom Kontext. Die Interpretation einer Einstellung (z.B. ein neutrales Gesicht) ändert sich durch die vorherige oder nachfolgende Einstellung. Es werden also vom Kontext abhängig, Emotionen in ein neutrales Gesicht gedeutet.",
        options: ["Kuleschow-Effekt", "Kuleschow-Prinzip", "Kuleschow-Montage", "Kuleschow-Theorie"],
        korrekt: 0,
        etymologie: "Benannt nach dem russischen Filmemacher Lew Kuleschow (1899–1970), der diesen Effekt in Experimenten um 1920 demonstrierte.",
        beispielSatz: "Der Kuleschow-Effekt zeigt, wie die Montage die Wahrnehmung des Zuschauers manipulieren kann, indem ein neutraler Gesichtsausdruck durch den Kontext mal als traurig, mal als hungrig interpretiert wird."
},
    eustress: {
    name: "Eustress",
        erklaerungUndSynonyme: "Positiver Stress, der als anregend, motivierend und leistungsfördernd empfunden wird. Er tritt auf, wenn eine Herausforderung als bewältigbar angesehen wird. Synonyme: Positivstress, guter Stress.",
        options: ["Austress", "Eustress", "Neustress", "Poststress"],
        korrekt: 1,
        etymologie: "Griechisch „eu-“ (gut, wohl) und „Stress“ (englisch, ursprünglich von lateinisch „stringere“ – anspannen, zusammenschnüren). Geprägt von Hans Selye.",
        beispielSatz: "Die Aufregung vor einem wichtigen Wettkampf kann Eustress sein, der zu Höchstleistungen anspornt."
},
    distress: {
    name: "Distress",
        erklaerungUndSynonyme: "Negativer Stress, der als überfordernd, schädlich und unangenehm empfunden wird und zu gesundheitlichen Problemen führen kann. Synonyme: Negativstress, schlechter Stress, Überlastung.",
        options: ["Destress", "Dysstress", "Distress", "De-Stress"],
        korrekt: 2,
        etymologie: "Lateinisch „dis-“ (auseinander, schlecht) und „Stress“ (englisch, ursprünglich von lateinisch „stringere“ – anspannen, zusammenschnüren). Geprägt von Hans Selye.",
        beispielSatz: "Anhaltender Lärm und hohe Arbeitsbelastung können zu chronischem Distress führen."
},
    erker: {
    name: "Erker",
       erklaerungUndSynonyme: "Ein geschlossener, über ein oder mehrere Geschosse reichender Vorbau an der Fassade eines Gebäudes, der aus der Wandflucht hervortritt und oft mit Fenstern versehen ist. Dient der Erweiterung des Wohnraums und der besseren Belichtung. Synonyme: Ausbau, Vorbau (teilweise).",
        options: ["Arker", "Erker", "Orker", "Urker"],
        korrekt: 1,
        etymologie: "Mittelhochdeutsch „erker“, wahrscheinlich verwandt mit althochdeutsch „archo“ (Bogen, Wölbung) oder aus dem Französischen „archière“ (Schießscharte).",
        beispielSatz: "Der Erker im Wohnzimmer bietet einen schönen Ausblick auf den Garten."
},
    gaube: {
    name: "Gaube",
        erklaerungUndSynonyme: "Ein Aufbau im geneigten Dach eines Gebäudes, der dazu dient, den Dachraum zu belichten, zu belüften und zusätzlichen Raum zu gewinnen. Hat ein eigenes kleines Dach und meist ein senkrechtes Fenster. Synonyme: Dachgaube, Dachgaupe, regional Lukarne.",
        options: ["Gabe", "Glaube", "Gaube", "Grube"],
        korrekt: 2,
        etymologie: "Wahrscheinlich von mittelhochdeutsch „gûpe“ (Ausguck, überdachter Vorbau), verwandt mit „gähnen“ oder „gaffen“ im Sinne von Öffnung.",
        beispielSatz: "Durch den Einbau einer Gaube wurde das Dachgeschoss deutlich heller und wohnlicher."
},
    dunningKrugerEffekt: {
    name: "Dunning-Kruger-Effekt",
        erklaerungUndSynonyme: "Kognitive Verzerrung, bei der inkompetente Personen dazu neigen, ihr eigenes Können zu überschätzen, während kompetente Personen ihr Können eher unterschätzen. Inkompetente erkennen das Ausmaß ihrer Inkompetenz nicht. Die Fähigkeit eine richtige Lösung zu finden, ist identisch mit der Fähigkeit die richtige Lösung bei anderen als richtig zu erkennen. Synonyme: Inkompetenz-Illusion.",
        options: ["Kruger-Dunning-Effekt", "Dunning-Kruger-Effekt", "Denning-Kruger-Phänomen", "Downing-Krüger-Tendenz"],
        korrekt: 1,
        etymologie: "Benannt nach den Sozialpsychologen David Dunning und Justin Kruger, die den Effekt 1999 beschrieben.",
        beispielSatz: "Der Dunning-Kruger-Effekt erklärt, warum manche Anfänger sich bereits nach kurzer Zeit für Experten halten."
},
    subsidiaritaet: {
    name: "Subsidiarität",
        erklaerungUndSynonyme: "Gesellschaftspolitisches Prinzip, wonach übergeordnete Einheiten (z.B. Staat) nur dann Aufgaben übernehmen sollen, wenn untergeordnete Einheiten (z.B. Familie, Gemeinde, Individuum) dazu nicht in der Lage sind. Hilfe zur Selbsthilfe steht im Vordergrund. Synonyme: Prinzip der Nachrangigkeit, Unterstützungsprinzip.",
        options: ["Subordinarität", "Subsidarität", "Subsidiartät", "Subsidiarität"],
        korrekt: 3,
        etymologie: "Vom lateinischen „subsidiarius“ (zur Reserve gehörig, helfend) zu „subsidium“ (Hilfe, Reserve, Unterstützung).",
        beispielSatz: "Das Prinzip der Subsidiarität fordert, dass Entscheidungen möglichst bürgernah auf der niedrigsten möglichen Ebene getroffen werden."
},
    ubiquitaer: {
    name: "Ubiquitär",
        erklaerungUndSynonyme: "Überall verbreitet, allgegenwärtig, an jedem Ort vorkommend oder verfügbar. Synonyme: Allgegenwärtig, omnipräsent, weitverbreitet.",
        options: ["Obiquitär", "Uniquitär", "Ubiquitär", "Ibiquitär"],
        korrekt: 2,
        etymologie: "Vom spätlateinischen „ubiquitarius“ (überall befindlich), abgeleitet von lateinisch „ubique“ (überall).",
        beispielSatz: "In der modernen Welt sind Smartphones nahezu ubiquitär geworden."
},
    agogik: {
    name: "Agogik",
        erklaerungUndSynonyme: "Sammelbegriff für die Lehre und Praxis der professionellen Beeinflussung, Begleitung, Bildung und Führung von Menschen zur Entfaltung ihrer Persönlichkeit und Bewältigung von Lebensaufgaben. Umfasst z.B. Pädagogik, Andragogik. Synonyme: Führungskunst, Bildungslehre (i.w.S.).",
        options: ["Agogik", "Akustik", "Agnostik", "Apologetik"],
        korrekt: 0,
        etymologie: "Vom griechischen „agōgē“ (Führung, Leitung, Erziehung), abgeleitet von „agein“ (führen, leiten, treiben).",
        beispielSatz: "Die Agogik beschäftigt sich mit den Prinzipien der Leitung und Begleitung von Lern- und Entwicklungsprozessen."
},
    barnumEffekt: {
    name: "Barnum-Effekt",
        erklaerungUndSynonyme: "Auch Forer-Effekt; die Neigung von Menschen, vage und allgemeingültige Aussagen über die eigene Person als zutreffende Beschreibung zu akzeptieren, besonders wenn sie als spezifisch für sie erstellt wahrgenommen werden. Synonyme: Forer-Effekt, Täuschung durch Allgemeingültigkeit.",
        options: ["Barnum-Effekt", "Barum-Effekt", "Barnam-Effekt", "Burnham-Effekt"],
        korrekt: 0,
        etymologie: "Benannt nach P. T. Barnum (indirekt, wissenschaftlich von Bertram R. Forer), dem der Ausspruch „We've got something for everyone“ zugeschrieben wird.",
        beispielSatz: "Der Barnum-Effekt erklärt, warum viele Menschen von der scheinbaren Genauigkeit von Horoskopen beeindruckt sind."
},
    laizistisch: {
    name: "Laizistisch",
        erklaerungUndSynonyme: "Bezieht sich auf den Laizismus, ein Prinzip der strikten Trennung von Kirche und Staat, bei dem Religion als reine Privatangelegenheit betrachtet wird. Synonyme: Religionsneutral (aber strenger).",
        options: ["Laizistisch", "Laizisstisch", "Luzistisch", "Laizystisch"],
        korrekt: 0,
        etymologie: "Vom französischen „laïcisme“, abgeleitet von „laïque“ (weltlich), vom griechischen „laikos“ (zum Volk gehörig).",
        beispielSatz: "Ein laizistischer Staat duldet keine religiösen Symbole in öffentlichen Schulen."
},
    saekular: {
    name: "Säkular",
        erklaerungUndSynonyme: "Weltlich, nicht-kirchlich, nicht-religiös. Bezieht sich auf Dinge oder Prozesse, die von religiösen Bindungen gelöst sind. Synonyme: Weltlich, profan, religionsfrei.",
        options: ["Säkular", "Sekular", "Zirkular", "Spekular"],
        korrekt: 0,
        etymologie: "Vom lateinischen „saecularis“ (zum Jahrhundert gehörig, weltlich), von „saeculum“ (Zeitalter, Jahrhundert, Welt).",
        beispielSatz: "Die Universität wurde als eine säkulare Bildungseinrichtung gegründet."
},
    pluralisBenevolentiae: {
    name: "Pluralis Benevolentiae",
        erklaerungUndSynonyme: "„Plural der Wohlgesonnenheit“; rhetorische Figur, bei der ein Sprecher „wir“ sagt, obwohl er sich selbst meint, oft aus Bescheidenheit oder um Wohlwollen auszudrücken. Synonyme: Wohlwollensplural.",
        options: ["Pluralis Maiestatis", "Pluralis Modestiae", "Pluralis Benevolentiae", "Pluralis Autoralis"],
        korrekt: 2,
        etymologie: "Lateinisch: „pluralis“ (Mehrzahl), „benevolentiae“ (Genitiv von „benevolentia“ – Wohlwollen, Güte).",
        beispielSatz: "„Wir sind der Meinung, dass diese Maßnahme hilfreich wäre“, sagte der Berater und meinte mit dem Pluralis Benevolentiae eigentlich nur seine eigene Einschätzung."
},
    epistemologisch: {
    name: "Epistemologisch",
        erklaerungUndSynonyme: "Die Erkenntnistheorie betreffend; sich auf die Bedingungen, Möglichkeiten und Grenzen des Wissens und Erkennens beziehend. Synonyme: Erkenntnistheoretisch.",
        options: ["Epistomologisch", "Epistemologisch", "Äpistemologisch", "Epistemiologisch"],
        korrekt: 1,
        etymologie: "Vom griechischen „epistēmē“ (Wissen, Erkenntnis) und „logos“ (Lehre, Wort).",
        beispielSatz: "Die epistemologische Frage lautet hier, wie wir überhaupt zu gesichertem Wissen über die Außenwelt gelangen können."
},
    epistemisch: {
    name: "Epistemisch",
        erklaerungUndSynonyme: "Auf das Wissen oder die Erkenntnis bezogen; das Wissen betreffend oder aus dem Wissen stammend. Bezieht sich oft auf den Zustand oder die Rechtfertigung von Wissen. Synonyme: Wissensbezogen, erkenntnisbezogen.",
        options: ["Epistemisch", "Epistenisch", "Epistymisch", "Apistemisch"],
        korrekt: 0,
        etymologie: "Vom griechischen „epistēmē“ (Wissen, Erkenntnis, Wissenschaft).",
        beispielSatz: "Eine epistemische Rechtfertigung für eine Überzeugung basiert auf guten Gründen und Beweisen."
},
    axiom: {
    name: "Axiom",
        erklaerungUndSynonyme: "Ein grundlegender Lehrsatz oder eine Aussage, die innerhalb eines theoretischen Systems ohne Beweis als wahr angenommen wird und als Ausgangspunkt für weitere Ableitungen dient. Ein nicht-religiöses Dogma. Synonyme: Grundsatz, Postulat, Grundannahme.",
        options: ["Axion", "Axiom", "Axim", "Akion"],
        korrekt: 1,
        etymologie: "Vom griechischen „axíōma“ (das für würdig Gehaltene, Grundsatz), von „axioûn“ (für würdig halten).",
        beispielSatz: "In der euklidischen Geometrie ist „Durch zwei Punkte verläuft genau eine Gerade“ ein grundlegendes Axiom."
},
    usurpation: {
    name: "Usurpation",
        erklaerungUndSynonyme: "Die widerrechtliche Anmaßung oder gewaltsame Inbesitznahme von Herrschaft, Macht, Rechten, Besitz oder eines Amtes. Synonyme: Anmaßung, widerrechtliche Aneignung, Machtergreifung.",
        options: ["Usurpation", "Usupation", "Usupration", "Uzurpation"],
        korrekt: 0,
        etymologie: "Vom lateinischen „usurpatio“ (widerrechtliche Inbesitznahme), zu „usurpare“ (widerrechtlich in Besitz nehmen).",
        beispielSatz: "Die Usurpation des Throns durch den General führte zu einem langjährigen Bürgerkrieg."
},
    wernickeAphasie: {
    name: "Wernicke-Aphasie",
        erklaerungUndSynonyme: "Sprachstörung (Aphasie) durch Schädigung des Wernicke-Areals. Betroffene haben Probleme mit dem Sprachverständnis, produzieren aber oft flüssige, aber inhaltsleere Sprache („Wortsalat“). Synonyme: Sensorische Aphasie, flüssige Aphasie.",
        options: ["Broca-Aphasie", "Globale Aphasie", "Wernicke-Aphasie", "Amnestische Aphasie"],
        korrekt: 2,
        etymologie: "Benannt nach dem Neurologen Carl Wernicke (1848–1905), der sie 1874 beschrieb.",
        beispielSatz: "Patienten mit Wernicke-Aphasie verstehen oft nicht, was zu ihnen gesagt wird, und ihre eigene Sprache kann für andere unverständlich sein."
},
    reziprokerAltruismus: {
    name: "Reziproker Altruismus",
        erklaerungUndSynonyme: "Form des Altruismus, bei der ein Individuum einem anderen hilft in der Erwartung (nicht notwendigerweise bewusst), dass die Hilfe später erwidert wird („Wie du mir, so ich dir“). Synonyme: Gegenseitiger Altruismus, altruistische Kooperation.",
        options: ["Reziproker Egoismus", "Direkter Altruismus", "Reziproker Altruismus", "Nepotistischer Altruismus"],
        korrekt: 2,
        etymologie: "„Reziprok“ von lat. „reciprocus“ (gegenseitig). „Altruismus“ von lat. „alter“ (der andere). Begriff von Robert Trivers 1971.",
        beispielSatz: "Der reziproke Altruismus erklärt, warum nicht verwandte Individuen einander helfen, wenn die Kosten der Hilfe geringer sind als der Nutzen der erwarteten Gegenleistung."
},
    deviant: {
    name: "Deviant",
        erklaerungUndSynonyme: "Von der Norm, dem Durchschnitt oder den Erwartungen abweichend; ein Verhalten oder eine Person, die von akzeptierten sozialen oder statistischen Normen abweicht. Synonyme: Abweichend, normabweichend, nonkonformistisch.",
        options: ["Deviant", "Diviant", "Defiant", "Dezent"],
        korrekt: 0,
        etymologie: "Vom lateinischen „deviare“ (vom Wege abweichen), zu „de-“ (ab-, weg-) und „via“ (Weg).",
        beispielSatz: "Sein deviantes Verhalten führte oft zu Konflikten mit Autoritäten, brachte aber auch neue Perspektiven ein."
},
    intellektuelleRedlichkeit: {
    name: "Intellektuelle Redlichkeit",
        erklaerungUndSynonyme: "Haltung und Praxis, die auf Ehrlichkeit, Aufrichtigkeit und Genauigkeit im Denken, Argumentieren und in der Darstellung von Informationen beruht. Beinhaltet kritische Selbstprüfung und faire Bewertung von Gegenargumenten. Synonyme: Geistige Aufrichtigkeit, wissenschaftliche Ehrlichkeit, akademische Integrität.",
        options: ["Intellektuelle Flexibilität", "Intellektuelle Redlichkeit", "Intellektuelle Kapazität", "Intellektuelle Dominanz"],
        korrekt: 1,
        etymologie: "„Intellektuell“ von lat. „intellectualis“ (den Verstand betreffend). „Redlichkeit“ von ahd. „redîlih“ (vernünftig), zu „reda“ (Rede, Rechenschaft).",
        beispielSatz: "Zur intellektuellen Redlichkeit gehört es, auch Argumente anzuerkennen, die der eigenen Position widersprechen."
},
    spontaneitaet: {
        name: 'Spontaneität',
        erklaerungUndSynonyme: 'Die Fähigkeit oder Eigenschaft, ohne langes Überlegen oder äusseren Anstoss aus eigenem Antrieb zu handeln oder zu entstehen. Das Substantiv zu "spontan". Synonyme: Ungezwungenheit, Impulsivität (teilweise), Eigeninitiative, Unmittelbarkeit.',
        options: ['Spontanität', 'Spontaneität', 'Spontanietät', 'Spontaneitet'],
        korrekt: 1, // Index von "Spontaneität"
        etymologie: 'Abgeleitet vom Adjektiv "spontan" (lat. "spontaneus" – freiwillig, aus eigenem Antrieb). Die korrekte Substantivierung im Deutschen erfolgt mit dem Suffix "-ität". Bei Adjektiven wie "spontan", die auf "-an" enden, wird zur Bildung des Substantivs auf "-ität" ein "e" zwischen Stamm und Suffix eingeschoben ("Spontan-e-ität"), um die Aussprache zu erleichtern und die Wortstruktur zu wahren. Die Form "Spontanität" ohne dieses "e" ist eine verbreitete, aber orthographisch nicht korrekte Vereinfachung.',
        beispielSatz: 'Ihre erfrischende Spontaneität machte sie bei allen beliebt und sorgte oft für unerwartete Abenteuer.'
    },
    sardonisch: {
        name: 'Sardonisch (Lachen/Lächeln)',
        erklaerungUndSynonyme: 'Ein bitteres, höhnisches, boshaft-grinsendes oder gequält wirkendes Lachen oder Lächeln, das oft Spott, Verachtung, Überlegenheit oder auch unterdrückten Schmerz ausdrückt. Es ist kein Ausdruck von Freude. Synonyme: Hohnlächeln, Spottlächeln, grimmiges Grinsen, boshaftes Lächeln.',
        options: ['Sarkastisches Lächeln', 'Sardisches Lächeln', 'Sardonisches Lächeln', 'Sadistisches Lächeln'],
        korrekt: 2, // Index von "Sardonisches Lächeln"
        etymologie: 'Vom lateinischen "risus sardonicus" (sardonisches Lachen), zurückgehend auf griechisch "sardánios gélōs" (σαρδάνιος γέλως). Der Ausdruck soll sich auf die Wirkung einer giftigen Pflanze aus Sardinien ("Herba Sardonica", evtl. ein Hahnenfussgewächs) beziehen, deren Verzehr tödliche Krämpfe mit einer schmerzhaften, grinsenden Gesichtsentstellung verursachte.',
        beispielSatz: 'Mit einem sardonischen Lächeln quittierte er die offensichtliche Lüge seines Gegenübers.'
    },
};

