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
        options: ['Standarte', 'Standard', 'Standart', 'Standerte'],
        korrekt: 0,
        etymologie: 'Vom althochdeutschen „standan“ (stehen) und „arta“ (Art), ursprünglich ein stehendes Feldzeichen für militärische Einheiten.'
    },
    idiotikon: {
        name: 'Idiotikon',
        erklaerungUndSynonyme: 'Ein historisches Wörterbuch oder Lexikon, das die Eigenheiten einer bestimmten Sprache oder eines Dialekts aufzeigt, oft mit regionalem Fokus. Synonyme: Dialektwörterbuch, Sprachlexikon.',
        options: ['Idiotikon', 'Idiotikum', 'Idiothek', 'Idiomikon'],
        korrekt: 0,
        etymologie: 'Vom griechischen „idiotikos“ (eigen, speziell) und „-ikon“ (Endung für Verzeichnisse), also ein Verzeichnis der Eigenheiten einer Sprache.'
    },
    sillage: {
        name: 'Sillage',
        erklaerungUndSynonyme: 'Der Duft, den ein Parfum oder eine Person in der Luft hinterlässt. Synonyme: Duftspur, Parfumspur.',
        options: ['Sillage', 'Silage', 'Silhouette', 'Silaj'],
        korrekt: 0,
        etymologie: 'Aus dem Französischen „sillage“ (Spur, Kielwasser), ursprünglich aus dem Seefahrtsjargon entlehnt und im Duftkontext für die Duftspur verwendet, die ein Parfum hinterlässt.'
    }
};
