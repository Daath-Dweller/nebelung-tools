// treeoflifedata.ts
export interface TaxonomyNode {
    name: string;
    rank?: string; // Optionales Rang-Feld
    children?: TaxonomyNode[];
}

export const taxonomyData: TaxonomyNode = {
    name: "Entitaeten",
    rank: "überkategorie",
    children: [
        {
            name: "Lebewesen",
            rank: "Klassifikation",
            children: [
                {
                    name: "Eukaryoten (Eukaryota)",
                    rank: "Domäne",
                    children: [
                        {
                            name: "Amorphea",
                            rank: "ohne Rang",
                            children: [
                                {
                                    name: "Obazoa",
                                    rank: "ohne Rang",
                                    children: [
                                        {
                                            name: "Opisthokonta",
                                            rank: "ohne Rang",
                                            children: [
                                                {
                                                    name: "Holozoa",
                                                    rank: "ohne Rang",
                                                    children: [
                                                        {
                                                            name: "Filozoa",
                                                            rank: "ohne Rang",
                                                            children: [
                                                                {
                                                                    name: "Choanozoa",
                                                                    rank: "ohne Rang",
                                                                    children: [
                                                                        {
                                                                            name: "Vielzellige Tiere (Metazoa)",
                                                                            rank: "Reich",
                                                                            children: [
                                                                                {
                                                                                    name: "Gewebetiere (Eumetazoa)",
                                                                                    rank: "ohne Rang",
                                                                                    children: [
                                                                                        {
                                                                                            name: "Bilateria",
                                                                                            rank: "ohne Rang",
                                                                                            children: [
                                                                                                {
                                                                                                    name: "Neumuender (Deuterostomia)",
                                                                                                    rank: "Überstamm",
                                                                                                    children: [
                                                                                                        {
                                                                                                            name: "Chordatiere (Chordata)",
                                                                                                            rank: "Stamm",
                                                                                                            children: [
                                                                                                                {
                                                                                                                    name: "Wirbeltiere (Vertebrata)",
                                                                                                                    rank: "Unterstamm",
                                                                                                                    children: [
                                                                                                                        {
                                                                                                                            name: "Kiefermaeuler (Gnathostomata)",
                                                                                                                            rank: "Überklasse",
                                                                                                                            children: [
                                                                                                                                {
                                                                                                                                    name: "Landwirbeltiere (Tetrapoda)",
                                                                                                                                    rank: "Reihe",
                                                                                                                                    children: [
                                                                                                                                        {
                                                                                                                                            name: "Amnioten (Amniota)",
                                                                                                                                            rank: "ohne Rang",
                                                                                                                                            children: [
                                                                                                                                                {
                                                                                                                                                    name: "Synapsiden (Synapsida)",
                                                                                                                                                    rank: "ohne Rang",
                                                                                                                                                    children: [
                                                                                                                                                        {
                                                                                                                                                            name: "Saeugetiere (Mammalia)",
                                                                                                                                                            rank: "Klasse",
                                                                                                                                                            children: [
                                                                                                                                                                {
                                                                                                                                                                    name: "Hoehere Saeugetiere (Eutheria)",
                                                                                                                                                                    rank: "Unterklasse",
                                                                                                                                                                    children: [
                                                                                                                                                                        {
                                                                                                                                                                            name: "Laurasiatheria",
                                                                                                                                                                            rank: "Überordnung",
                                                                                                                                                                            children: [
                                                                                                                                                                                {
                                                                                                                                                                                    name: "Scrotifera",
                                                                                                                                                                                    rank: "ohne Rang",
                                                                                                                                                                                    children: [
                                                                                                                                                                                        {
                                                                                                                                                                                            name: "Ferae",
                                                                                                                                                                                            rank: "ohne Rang",
                                                                                                                                                                                            children: [
                                                                                                                                                                                                {
                                                                                                                                                                                                    name: "Raubtiere (Carnivora)",
                                                                                                                                                                                                    rank: "Ordnung",
                                                                                                                                                                                                    children: [
                                                                                                                                                                                                        {
                                                                                                                                                                                                            name: "Katzenartige (Feliformia)",
                                                                                                                                                                                                            rank: "Unterordnung",
                                                                                                                                                                                                            children: [
                                                                                                                                                                                                                {
                                                                                                                                                                                                                    name: "Katzen (Felidae)",
                                                                                                                                                                                                                    rank: "Familie",
                                                                                                                                                                                                                    children: [
                                                                                                                                                                                                                        {
                                                                                                                                                                                                                            name: "Kleinkatzen (Felinae)",
                                                                                                                                                                                                                            rank: "Unterfamilie",
                                                                                                                                                                                                                            children: [
                                                                                                                                                                                                                                {
                                                                                                                                                                                                                                    name: "Echte Katzen (Felis)",
                                                                                                                                                                                                                                    rank: "Gattung",
                                                                                                                                                                                                                                    children: [
                                                                                                                                                                                                                                        {
                                                                                                                                                                                                                                            name: "Hauskatze (Felis catus)",
                                                                                                                                                                                                                                            rank: "Art"
                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                        {
                                                                                                                                                                                                                                            name: "Europäische Wildkatze (Felis silvestris)",
                                                                                                                                                                                                                                            rank: "Art"
                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                        {
                                                                                                                                                                                                                                            name: "Afrikanische Wildkatze (Felis lybica lybica)",
                                                                                                                                                                                                                                            rank: "Art"
                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                        {
                                                                                                                                                                                                                                            name: "Asiatische Wildkatze (Felis lybica ornata)",
                                                                                                                                                                                                                                            rank: "Art"
                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                    ]
                                                                                                                                                                                                                                }
                                                                                                                                                                                                                            ]
                                                                                                                                                                                                                        }
                                                                                                                                                                                                                    ]
                                                                                                                                                                                                                }
                                                                                                                                                                                                            ]
                                                                                                                                                                                                        }
                                                                                                                                                                                                    ]
                                                                                                                                                                                                }
                                                                                                                                                                                            ]
                                                                                                                                                                                        }
                                                                                                                                                                                    ]
                                                                                                                                                                                }
                                                                                                                                                                            ]
                                                                                                                                                                        }
                                                                                                                                                                    ]
                                                                                                                                                                }
                                                                                                                                                            ]
                                                                                                                                                        }
                                                                                                                                                    ]
                                                                                                                                                }
                                                                                                                                            ]
                                                                                                                                        }
                                                                                                                                    ]
                                                                                                                                }
                                                                                                                            ]
                                                                                                                        }
                                                                                                                    ]
                                                                                                                }
                                                                                                            ]
                                                                                                        }
                                                                                                    ]
                                                                                                }
                                                                                            ]
                                                                                        }
                                                                                    ]
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        },
    ],
};

