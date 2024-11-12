interface Naehrstoff {
    name: string;
    stoffgruppe: string[];
    nutzungSport: string[]; // Neue Eigenschaft für sportbezogene Nutzung
    beschreibung: string;
    vorkommen: string;
}

export const naehrstoffe: Naehrstoff[] = [
    {
        name: "Valin",
        stoffgruppe: ["Aminosäure", "proteinogene Aminosäure", "EAA", "BCAA"],
        nutzungSport: ["Energiebereitstellung", "Muskelaufbau"],
        beschreibung: "Valin ist eine essentielle Aminosäure und Teil der BCAAs, wichtig für den Muskelaufbau.",
        vorkommen: "Vorkommen in Fleisch, Milchprodukten und Soja."
    },
    {
        name: "Leucin",
        stoffgruppe: ["Aminosäure", "proteinogene Aminosäure", "EAA", "BCAA"],
        nutzungSport: ["Muskelaufbau"],
        beschreibung: "Leucin fördert die Proteinsynthese im Muskel.",
        vorkommen: "Reichlich in Käse, Rindfleisch und Kürbiskernen."
    },
    {
        name: "Isoleucin",
        stoffgruppe: ["Aminosäure", "proteinogene Aminosäure", "EAA", "BCAA"],
        nutzungSport: ["Muskelaufbau", "Erholung"],
        beschreibung: "Isoleucin spielt eine wesentliche Rolle in der Muskelerholung nach dem Sport.",
        vorkommen: "In Hühnchen, Eiern und Fisch."
    },
    {
        name: "Phenylalanin",
        stoffgruppe: ["Aminosäure", "proteinogene Aminosäure", "EAA"],
        nutzungSport: ["Muskelaufbau", "Erholung"],
        beschreibung: "Phenylalanin ist eine Vorstufe für die Synthese von Neurotransmittern.",
        vorkommen: "Enthalten in Milch, Käse, Nüssen und Samen."
    },
    {
        name: "Tryptophan",
        stoffgruppe: ["Aminosäure", "proteinogene Aminosäure", "EAA"],
        nutzungSport: ["Muskelaufbau", "Erholung"],
        beschreibung: "Tryptophan ist bekannt für seine Rolle bei der Serotoninproduktion und beeinflusst die Stimmung.",
        vorkommen: "Präsent in Schokolade, Hafer, Datteln und Bananen."
    },
    {
        name: "Threonin",
        stoffgruppe: ["Aminosäure", "proteinogene Aminosäure", "EAA"],
        nutzungSport: ["Muskelaufbau", "Erholung"],
        beschreibung: "Threonin unterstützt den Immunsystems und den Aufbau von Kollagen.",
        vorkommen: "Gefunden in Kürbiskernen, Blattgemüse und Soja."
    },
    {
        name: "Methionin",
        stoffgruppe: ["Aminosäure", "proteinogene Aminosäure", "EAA"],
        nutzungSport: ["Muskelaufbau", "Erholung"],
        beschreibung: "Methionin ist wichtig für die Bildung von S-Adenosylmethionin, einem universellen Methyl-Donor.",
        vorkommen: "Vorhanden in Sesamsamen, Brasilnüssen und Fisch."
    },
    {
        name: "Lysin",
        stoffgruppe: ["Aminosäure", "proteinogene Aminosäure", "EAA"],
        nutzungSport: ["Muskelaufbau", "Erholung"],
        beschreibung: "Lysin ist wichtig für Wachstum und Knochengesundheit durch Unterstützung der Kalziumabsorption.",
        vorkommen: "Enthalten in Fleisch, Eiern und Avocados."
    },
    {
        name: "Histidin",
        stoffgruppe: ["Aminosäure", "proteinogene Aminosäure", "EAA"],
        nutzungSport: ["Muskelaufbau", "Erholung"],
        beschreibung: "Histidin wird zur Synthese von Histamin verwendet, einem wichtigen Immunmodulator.",
        vorkommen: "Gefunden in Fleisch, Fisch und Reis."
    },
    {
        name: "Glycin",
        stoffgruppe: ["Aminosäure", "proteinogene Aminosäure"],
        nutzungSport: ["Muskelaufbau", "Erholung"],
        beschreibung: "Glycin ist eine nicht-essentielle Aminosäure, die im Körper synthetisiert werden kann und für den Aufbau von gesundem Gewebe notwendig ist.",
        vorkommen: "Vorhanden in Gelatine, Fleisch und verschiedenen Milchprodukten."
    },
    {
        name: "Alanin",
        stoffgruppe: ["Aminosäure", "proteinogene Aminosäure"],
        nutzungSport: ["Muskelaufbau", "Erholung"],
        beschreibung: "Alanin spielt eine wichtige Rolle im Glukosestoffwechsel und hilft, Energie zu liefern.",
        vorkommen: "Enthalten in Fleisch, Fisch und Milchprodukten."
    },
    {
        name: "Tyrosin",
        stoffgruppe: ["Aminosäure", "proteinogene Aminosäure"],
        nutzungSport: ["Muskelaufbau", "Erholung"],
        beschreibung: "Tyrosin ist eine Vorstufe wichtiger Hormone und Neurotransmitter, darunter Dopamin und Adrenalin.",
        vorkommen: "Reichlich in Käse, Erdnüssen, Hühnchen und Avocados."
    },
    {
        name: "Serin",
        stoffgruppe: ["Aminosäure", "proteinogene Aminosäure"],
        nutzungSport: ["Muskelaufbau", "Erholung"],
        beschreibung: "Serin ist beteiligt an der Synthese von Phospholipiden und Proteinen, die für das Zellwachstum wichtig sind.",
        vorkommen: "Vorkommen in Sojabohnen, Nüssen und Eiern."
    },
    {
        name: "Cystein",
        stoffgruppe: ["Aminosäure", "proteinogene Aminosäure"],
        nutzungSport: ["Muskelaufbau", "Erholung"],
        beschreibung: "Cystein hilft bei der Bildung von Haut und Haar und ist ein wichtiger Bestandteil von Keratin.",
        vorkommen: "Enthalten in Brokkoli, Linsen und Hafer."
    },
    {
        name: "Asparigin",
        stoffgruppe: ["Aminosäure", "proteinogene Aminosäure"],
        nutzungSport: ["Muskelaufbau", "Erholung"],
        beschreibung: "Asparigin ist wichtig für das Nervensystem und reguliert die Funktion der Zellen.",
        vorkommen: "Gefunden in Spargel, Kartoffeln und Nüssen."
    },
    {
        name: "Glutamin",
        stoffgruppe: ["Aminosäure", "proteinogene Aminosäure"],
        nutzungSport: ["Muskelaufbau", "Erholung"],
        beschreibung: "Glutamin ist eine Schlüsselaminosäure für den Stoffwechsel und unterstützt das Immunsystem.",
        vorkommen: "Reichlich in Rindfleisch, Eiern und Milchprodukten."
    },
    {
        name: "Arginin",
        stoffgruppe: ["Aminosäure", "proteinogene Aminosäure"],
        nutzungSport: ["Muskelaufbau", "Erholung"],
        beschreibung: "Arginin ist bekannt für seine Rolle bei der Stickoxid-Produktion und fördert die Blutgefäßerweiterung.",
        vorkommen: "Enthalten in Nüssen, Samen und Fisch."
    },
    {
        name: "Prolin",
        stoffgruppe: ["Aminosäure", "proteinogene Aminosäure"],
        nutzungSport: ["Muskelaufbau", "Erholung"],
        beschreibung: "Prolin spielt eine wesentliche Rolle bei der Kollagensynthese und unterstützt Haut und Gelenke.",
        vorkommen: "Gefunden in Gelatine und Milchprodukten."
    },
    {
        name: "Selenocystein",
        stoffgruppe: ["Aminosäure", "proteinogene Aminosäure"],
        nutzungSport: ["Muskelaufbau", "Erholung"],
        beschreibung: "Selenocystein ist bekannt für seine antioxidative Wirkung und schützt die Zellen vor Schäden.",
        vorkommen: "Vorhanden in Paranüssen und Meeresfrüchten."
    },
    {
        name: "Ornithin",
        stoffgruppe: ["Aminosäure", "nicht-proteinogene Aminosäure"],
        nutzungSport: ["Muskelaufbau", "Erholung"],
        beschreibung: "Leucin ist eine der drei verzweigtkettigen Aminosäuren (BCAAs), die vor allem im Bodybuilding geschätzt wird.",
        vorkommen: "",
    },
    {
        name: "Citrullin",
        stoffgruppe: ["Aminosäure", "nicht-proteinogene Aminosäure"],
        nutzungSport: ["Muskelaufbau", "Erholung"],
        beschreibung: "Leucin ist eine der drei verzweigtkettigen Aminosäuren (BCAAs), die vor allem im Bodybuilding geschätzt wird.",
        vorkommen: "",
    },
    {
        name: "GABA",
        stoffgruppe: ["Aminosäure", "nicht-proteinogene Aminosäure"],
        nutzungSport: ["Muskelaufbau", "Erholung"],
        beschreibung: "Leucin ist eine der drei verzweigtkettigen Aminosäuren (BCAAs), die vor allem im Bodybuilding geschätzt wird.",
        vorkommen: "",
    },
    {
        name: "Taurin",
        stoffgruppe: ["Aminosäure", "nicht-proteinogene Aminosäure"],
        nutzungSport: ["Muskelaufbau", "Erholung"],
        beschreibung: "Leucin ist eine der drei verzweigtkettigen Aminosäuren (BCAAs), die vor allem im Bodybuilding geschätzt wird.",
        vorkommen: "",
    },
    {
        name: "L-DOPA",
        stoffgruppe: ["Aminosäure", "nicht-proteinogene Aminosäure"],
        nutzungSport: ["Muskelaufbau", "Erholung"],
        beschreibung: "Leucin ist eine der drei verzweigtkettigen Aminosäuren (BCAAs), die vor allem im Bodybuilding geschätzt wird.",
        vorkommen: "",
    },
    {
        name: "Beta-Alanin",
        stoffgruppe: ["Aminosäure", "nicht-proteinogene Aminosäure"],
        nutzungSport: ["Muskelaufbau", "Erholung"],
        beschreibung: "Leucin ist eine der drei verzweigtkettigen Aminosäuren (BCAAs), die vor allem im Bodybuilding geschätzt wird.",
        vorkommen: "",
    },
    {
        name: "Homocystein",
        stoffgruppe: ["Aminosäure", "nicht-proteinogene Aminosäure"],
        nutzungSport: ["Muskelaufbau", "Erholung"],
        beschreibung: "Leucin ist eine der drei verzweigtkettigen Aminosäuren (BCAAs), die vor allem im Bodybuilding geschätzt wird.",
        vorkommen: "",
    },
    {
        name: "Canavanin",
        stoffgruppe: ["Aminosäure", "nicht-proteinogene Aminosäure"],
        nutzungSport: ["Muskelaufbau", "Erholung"],
        beschreibung: "Leucin ist eine der drei verzweigtkettigen Aminosäuren (BCAAs), die vor allem im Bodybuilding geschätzt wird.",
        vorkommen: "",
    },
];
