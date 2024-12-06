// treeoflifedata.ts
export interface TaxonomyNode {
    name: string;
    children?: TaxonomyNode[];
}

export const taxonomyData: TaxonomyNode = {
    name: "Entitaeten",
    children: [
        {
            name: "Lebewesen",
            children: [
                {
                    name: "Eukaryoten (Eukaryota)",
                    children: [
                        {
                            name: "Amorphea",
                            children: [
                                {
                                    name: "Obazoa",
                                    children: [
                                        {
                                            name: "Opisthokonta",
                                            children: [
                                                {
                                                    name: "Holozoa",
                                                    children: [
                                                        {
                                                            name: "Filozoa",
                                                            children: [
                                                                {
                                                                    name: "Choanozoa",
                                                                    children: [
                                                                        {
                                                                            name: "Vielzellige Tiere (Metazoa)",
                                                                            children: [
                                                                                {
                                                                                    name: "Gewebetiere (Eumetazoa)",
                                                                                    children: [
                                                                                        {
                                                                                            name: "Bilateria",
                                                                                            children: [
                                                                                                {
                                                                                                    name: "Neumuender (Deuterostomia)",
                                                                                                    children: [
                                                                                                        {
                                                                                                            name: "Chordatiere (Chordata)",
                                                                                                            children: [
                                                                                                                {
                                                                                                                    name: "Wirbeltiere (Vertebrata)",
                                                                                                                    children: [
                                                                                                                        {
                                                                                                                            name: "Kiefermaeuler (Gnathostomata)",
                                                                                                                            children: [
                                                                                                                                {
                                                                                                                                    name: "Landwirbeltiere (Tetrapoda)",
                                                                                                                                    children: [
                                                                                                                                        {
                                                                                                                                            name: "Amnioten (Amniota)",
                                                                                                                                            children: [
                                                                                                                                                {
                                                                                                                                                    name: "Synapsiden (Synapsida)",
                                                                                                                                                    children: [
                                                                                                                                                        {
                                                                                                                                                            name: "Saeugetiere (Mammalia)",
                                                                                                                                                            children: [
                                                                                                                                                                {
                                                                                                                                                                    name: "Hoehere Saeugetiere (Eutheria)",
                                                                                                                                                                    children: [
                                                                                                                                                                        {
                                                                                                                                                                            name: "Laurasiatheria",
                                                                                                                                                                            children: [
                                                                                                                                                                                {
                                                                                                                                                                                    name: "Scrotifera",
                                                                                                                                                                                    children: [
                                                                                                                                                                                        {
                                                                                                                                                                                            name: "Ferae",
                                                                                                                                                                                            children: [
                                                                                                                                                                                                {
                                                                                                                                                                                                    name: "Raubtiere (Carnivora)",
                                                                                                                                                                                                    children: [
                                                                                                                                                                                                        {
                                                                                                                                                                                                            name: "Katzenartige (Feliformia)",
                                                                                                                                                                                                            children: [
                                                                                                                                                                                                                {
                                                                                                                                                                                                                    name: "Katzen (Felidae)",
                                                                                                                                                                                                                    children: [
                                                                                                                                                                                                                        {
                                                                                                                                                                                                                            name: "Kleinkatzen (Felinae)",
                                                                                                                                                                                                                            children: [
                                                                                                                                                                                                                                {
                                                                                                                                                                                                                                    name: "Echte Katzen (Felis)",
                                                                                                                                                                                                                                    children: [
                                                                                                                                                                                                                                        {
                                                                                                                                                                                                                                            name: "Hauskatze (Felis catus)"
                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                        {
                                                                                                                                                                                                                                            name: "Europäische Wildkatze (Felis silvestris)"
                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                        {
                                                                                                                                                                                                                                            name: "Afrikanische Wildkatze (Felis lybica lybica)"
                                                                                                                                                                                                                                        },
                                                                                                                                                                                                                                        {
                                                                                                                                                                                                                                            name: "Asiatische Wildkatze (Felis lybica ornata)"
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
        }
    ]
};
