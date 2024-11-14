interface Naehrstoff {
    name: string;
    stoffgruppe: string[];
    nutzungGesundheit: number[]; // Indizes, die auf nutzungSportTags verweisen
    beschreibung: string;
    vorkommen: string;
}

export const nutzungGesundheitTags: string[] = [
    "Energiebereitstellung",
    "Muskelaufbau / Muskelregeneration",
    "Erholung",
    "Hydration / Pump",
    "Stimulans",
    "Adaptogen",
    "Antioxidans",
    "Mineralstoff",
    "Spurenelement",
    "sekundärer Pflanzenstoff",
    "Nootropikum"
];

export const naehrstoffe: Naehrstoff[] = [
    {
        name: "Valin",
        stoffgruppe: ["Aminosäure", "proteinogene Aminosäure", "EAA", "BCAA"],
        nutzungGesundheit: [0, 1],
        beschreibung: "Valin ist eine essentielle Aminosäure und Teil der BCAAs, wichtig für den Muskelaufbau. Im Sportkontext trägt es insbesondere zur Energieversorgung und Muskelregeneration bei.",
        vorkommen: "Vorkommen in Fleisch, Milchprodukten und Soja."
    },
    {
        name: "Leucin",
        stoffgruppe: ["Aminosäure", "proteinogene Aminosäure", "EAA", "BCAA"],
        nutzungGesundheit: [1],
        beschreibung: "Leucin fördert die Proteinsynthese im Muskel. Im Sport spielt es eine entscheidende Rolle beim Muskelaufbau und der Erholung nach dem Training.",
        vorkommen: "Reichlich in Käse, Rindfleisch und Kürbiskernen."
    },
    {
        name: "Isoleucin",
        stoffgruppe: ["Aminosäure", "proteinogene Aminosäure", "EAA", "BCAA"],
        nutzungGesundheit: [1, 2],
        beschreibung: "Isoleucin spielt eine wesentliche Rolle in der Muskelerholung nach dem Sport. Es unterstützt sowohl den Muskelaufbau als auch die Muskelregeneration.",
        vorkommen: "In Poulet, Eiern und Fisch."
    },
    {
        name: "Phenylalanin",
        stoffgruppe: ["Aminosäure", "proteinogene Aminosäure", "EAA"],
        nutzungGesundheit: [1],
        beschreibung: "Phenylalanin ist eine Vorstufe für die Synthese von Neurotransmittern. Im sportlichen Kontext unterstützt es den Muskelaufbau und kann die Stimmung sowie Motivation verbessern.",
        vorkommen: "Enthalten in Milch, Käse, Nüssen und Samen."
    },
    {
        name: "Tryptophan",
        stoffgruppe: ["Aminosäure", "proteinogene Aminosäure", "EAA"],
        nutzungGesundheit: [1, 2],
        beschreibung: "Tryptophan ist bekannt für seine Rolle bei der Serotoninproduktion und beeinflusst die Stimmung. Im Sport kann es helfen, die Schlafqualität zu verbessern und somit die Erholung zu unterstützen.",
        vorkommen: "Präsent in Schokolade, Hafer, Datteln und Bananen."
    },
    {
        name: "Threonin",
        stoffgruppe: ["Aminosäure", "proteinogene Aminosäure", "EAA"],
        nutzungGesundheit: [1],
        beschreibung: "Threonin unterstützt das Immunsystem und den Aufbau von Kollagen. Für Sportler ist es wichtig, da es die Muskelreparatur und -erholung beschleunigen kann.",
        vorkommen: "Gefunden in Kürbiskernen, Blattgemüse und Soja."
    },
    {
        name: "Methionin",
        stoffgruppe: ["Aminosäure", "proteinogene Aminosäure", "EAA"],
        nutzungGesundheit: [1],
        beschreibung: "Methionin ist wichtig für die Bildung von S-Adenosylmethionin, einem universellen Methyl-Donor. Im Sport fördert es den Muskelaufbau und unterstützt die Regeneration.",
        vorkommen: "Vorhanden in Sesamsamen, Brasilnüssen und Fisch."
    },
    {
        name: "Lysin",
        stoffgruppe: ["Aminosäure", "proteinogene Aminosäure", "EAA"],
        nutzungGesundheit: [1],
        beschreibung: "Lysin ist wichtig für Wachstum und Knochengesundheit durch Unterstützung der Kalziumabsorption. Im sportlichen Kontext hilft es beim Muskelaufbau und der Reparatur von Gewebe.",
        vorkommen: "Enthalten in Fleisch, Eiern und Avocados."
    },
    {
        name: "Histidin",
        stoffgruppe: ["Aminosäure", "proteinogene Aminosäure", "EAA"],
        nutzungGesundheit: [1],
        beschreibung: "Histidin wird zur Synthese von Histamin verwendet, einem wichtigen Immunmodulator. Sportlich gesehen unterstützt es die Muskelreparatur und Erholung nach intensiven Trainingseinheiten.",
        vorkommen: "Gefunden in Fleisch, Fisch und Reis."
    },
    {
        name: "Glycin",
        stoffgruppe: ["Aminosäure", "proteinogene Aminosäure"],
        nutzungGesundheit: [1, 2],
        beschreibung: "Glycin ist eine nicht-essentielle Aminosäure, die im Körper synthetisiert werden kann und für den Aufbau von gesundem Gewebe notwendig ist. Für Sportler kann es die Schlafqualität verbessern und die Erholung fördern.",
        vorkommen: "Vorhanden in Gelatine, Fleisch und verschiedenen Milchprodukten."
    },
    {
        name: "Alanin",
        stoffgruppe: ["Aminosäure", "proteinogene Aminosäure"],
        nutzungGesundheit: [0, 1],
        beschreibung: "Alanin spielt eine wichtige Rolle im Glukosestoffwechsel und hilft, Energie zu liefern. Im Sport unterstützt es die Ausdauer und kann Muskelschäden reduzieren.",
        vorkommen: "Enthalten in Fleisch, Fisch und Milchprodukten."
    },
    {
        name: "Tyrosin",
        stoffgruppe: ["Aminosäure", "proteinogene Aminosäure"],
        nutzungGesundheit: [4, 10],
        beschreibung: "Tyrosin ist eine Vorstufe wichtiger Hormone und Neurotransmitter, darunter Dopamin und Adrenalin. Als Nootropikum kann es helfen, Fokus und Energielevels während des Trainings zu verbessern.",
        vorkommen: "Reichlich in Käse, Erdnüssen, Hühnchen und Avocados."
    },
    {
        name: "Serin",
        stoffgruppe: ["Aminosäure", "proteinogene Aminosäure"],
        nutzungGesundheit: [1],
        beschreibung: "Serin ist beteiligt an der Synthese von Phospholipiden und Proteinen, die für das Zellwachstum wichtig sind. Im Sport fördert es den Zell- und Muskelstoffwechsel und unterstützt so den Muskelaufbau.",
        vorkommen: "Vorkommen in Sojabohnen, Nüssen und Eiern."
    },
    {
        name: "Cystein",
        stoffgruppe: ["Aminosäure", "proteinogene Aminosäure"],
        nutzungGesundheit: [6],
        beschreibung: "Cystein hilft bei der Bildung von Haut und Haar und ist ein wichtiger Bestandteil von Keratin. Im sportlichen Kontext unterstützt es die Produktion von Glutathion, welches Zellen vor oxidativem Stress schützt.",
        vorkommen: "Enthalten in Brokkoli, Linsen und Hafer."
    },
    {
        name: "Asparigin",
        stoffgruppe: ["Aminosäure", "proteinogene Aminosäure"],
        nutzungGesundheit: [0, 2],
        beschreibung: "Asparigin ist wichtig für das Nervensystem und reguliert die Funktion der Zellen. Für Sportler kann es die Ausdauer und Erholung verbessern, indem es die Energieproduktion unterstützt.",
        vorkommen: "Gefunden in Spargel, Kartoffeln und Nüssen."
    },
    {
        name: "Glutamin",
        stoffgruppe: ["Aminosäure", "proteinogene Aminosäure"],
        nutzungGesundheit: [1],
        beschreibung: "Glutamin ist eine Schlüsselaminosäure für den Stoffwechsel und unterstützt das Immunsystem. Im Sport ist es bekannt dafür, die Muskelregeneration zu beschleunigen und den Muskelabbau zu verringern.",
        vorkommen: "Reichlich in Rindfleisch, Eiern und Milchprodukten."
    },
    {
        name: "Arginin",
        stoffgruppe: ["Aminosäure", "proteinogene Aminosäure"],
        nutzungGesundheit: [3],
        beschreibung: "Arginin ist bekannt für seine Rolle bei der Stickoxid-Produktion und fördert die Blutgefäßerweiterung. Im Sport wird Arginin genutzt, um den 'Pump' zu verbessern und die Nährstoffversorgung der Muskeln zu steigern.",
        vorkommen: "Enthalten in Nüssen, Samen und Fisch."
    },
    {
        name: "Prolin",
        stoffgruppe: ["Aminosäure", "proteinogene Aminosäure"],
        nutzungGesundheit: [1],
        beschreibung: "Prolin spielt eine wesentliche Rolle bei der Kollagensynthese und unterstützt Haut und Gelenke. Für Sportler ist es wichtig für den Aufbau und die Erhaltung eines starken Bindegewebes und zur Unterstützung der Gelenkgesundheit.",
        vorkommen: "Gefunden in Gelatine und Milchprodukten."
    },
    {
        name: "Selenocystein",
        stoffgruppe: ["Aminosäure", "proteinogene Aminosäure"],
        nutzungGesundheit: [6],
        beschreibung: "Selenocystein ist bekannt für seine antioxidative Wirkung und schützt die Zellen vor Schäden. Im sportlichen Kontext kann es helfen, Muskelschäden durch intensives Training zu reduzieren und die Erholung zu fördern.",
        vorkommen: "Vorhanden in Paranüssen und Meeresfrüchten."
    },
    {
        name: "Ornithin",
        stoffgruppe: ["Aminosäure", "nicht-proteinogene Aminosäure"],
        nutzungGesundheit: [0],
        beschreibung: "Ornithin ist an der Harnstoffsynthese beteiligt und fördert die Entgiftung. Im Sport kann es die Ausdauerleistung verbessern und den Abbau von Ammoniak im Körper unterstützen.",
        vorkommen: "Kommt vor allem in Fleisch, Fisch und Eiern vor."
    },
    {
        name: "Citrullin",
        stoffgruppe: ["Aminosäure", "nicht-proteinogene Aminosäure"],
        nutzungGesundheit: [3],
        beschreibung: "Citrullin verbessert die Durchblutung und Ausdauer, indem es die Stickoxidproduktion anregt. Im sportlichen Bereich wird es häufig zur Verbesserung des Pumps und zur Steigerung der Leistungsfähigkeit eingesetzt.",
        vorkommen: "Häufig in Wassermelonen und Kürbiskernen."
    },
    {
        name: "GABA",
        stoffgruppe: ["Aminosäure", "nicht-proteinogene Aminosäure"],
        nutzungGesundheit: [2],
        beschreibung: "GABA wirkt beruhigend auf das Nervensystem und fördert die Erholung. Sportlern kann es helfen, Stress zu reduzieren und die Schlafqualität zu verbessern, was wiederum die Regeneration unterstützt.",
        vorkommen: "Enthalten in grünem Tee, fermentierten Lebensmitteln wie Kimchi und Miso."
    },
    {
        name: "Taurin",
        stoffgruppe: ["Aminosäure", "nicht-proteinogene Aminosäure"],
        nutzungGesundheit: [3],
        beschreibung: "Taurin unterstützt die Hydration und Muskelkontraktion. Im Sportkontext kann es helfen, Ermüdung hinauszuzögern und die Leistungsfähigkeit während intensiver Trainingseinheiten zu steigern.",
        vorkommen: "Viel in Fisch, Meeresfrüchten, und dunklem Fleisch von Geflügel."
    },
    {
        name: "L-DOPA",
        stoffgruppe: ["Aminosäure", "nicht-proteinogene Aminosäure"],
        nutzungGesundheit: [4, 10],
        beschreibung: "L-DOPA ist eine Vorstufe von Dopamin und kann die Stimmung sowie den Fokus verbessern. Als Nootropikum kann dies bedeuten, dass Motivation und Konzentration beim Training gesteigert werden.",
        vorkommen: "Vorkommen in Samenschoten wie Mucuna Pruriens und geringen Mengen in Sojabohnen."
    },
    {
        name: "Beta-Alanin",
        stoffgruppe: ["Aminosäure", "nicht-proteinogene Aminosäure"],
        nutzungGesundheit: [0],
        beschreibung: "Beta-Alanin steigert die Ausdauer und reduziert Muskelermüdung. Im Sport ist es besonders beliebt, da es den Carnosingehalt in den Muskeln erhöht, was zu einer verbesserten Leistungsfähigkeit führt.",
        vorkommen: "Primär in Geflügel wie Huhn und Pute."
    },
    {
        name: "Homocystein",
        stoffgruppe: ["Aminosäure", "nicht-proteinogene Aminosäure"],
        nutzungGesundheit: [],
        beschreibung: "Homocystein ist ein Zwischenprodukt im Stoffwechsel und kann bei erhöhten Werten gesundheitsschädlich sein. Für Sportler ist es weniger wichtig, da hohe Homocysteinspiegel mit Herz-Kreislauf-Problemen in Verbindung gebracht werden.",
        vorkommen: "Nicht direkt in der Nahrung vorhanden; entsteht im Körper aus Methionin."
    },
    {
        name: "Canavanin",
        stoffgruppe: ["Aminosäure", "nicht-proteinogene Aminosäure"],
        nutzungGesundheit: [],
        beschreibung: "Canavanin ist in einigen Pflanzen als Abwehrstoff enthalten, wird jedoch nicht im Körper produziert. Es spielt kaum eine Rolle im Sport, da es eine toxische Wirkung bei hohen Mengen haben kann.",
        vorkommen: "Hauptsächlich in Hülsenfrüchten wie Alfalfa und Jackbohnen."
    }
];
