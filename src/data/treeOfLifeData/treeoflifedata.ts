// treeoflifedata.ts

import { taxons } from "@/data/treeOfLifeData/taxons";
import { TaxonomyNode } from "@/data/treeOfLifeData/taxonomyTypes";
import { mammalia } from "@/data/treeOfLifeData/mammalia";

export const taxonomyData: TaxonomyNode = {
    name: "Entitaeten",
    rank: taxons.ENTITAETEN,
    children: [
        {
            name: "Lebewesen",
            rank: taxons.KLASSIFIKATION,
            icon: "IoWater",
            children: [
                {
                    name: "Eukaryoten (Eukaryota)",
                    rank: taxons.DOMAENE,
                    children: [
                        {
                            name: "Amorphea",
                            rank: taxons.OHNE_RANG,
                            children: [
                                {
                                    name: "Obazoa",
                                    rank: taxons.OHNE_RANG,
                                    children: [
                                        {
                                            name: "Opisthokonta",
                                            rank: taxons.OHNE_RANG,
                                            children: [
                                                {
                                                    name: "Holozoa",
                                                    rank: taxons.OHNE_RANG,
                                                    children: [
                                                        {
                                                            name: "Filozoa",
                                                            rank: taxons.OHNE_RANG,
                                                            children: [
                                                                {
                                                                    name: "Choanozoa",
                                                                    rank: taxons.OHNE_RANG,
                                                                    children: [
                                                                        {
                                                                            name: "Vielzellige Tiere (Metazoa)",
                                                                            rank: taxons.REICH,
                                                                            children: [
                                                                                {
                                                                                    name: "Gewebetiere (Eumetazoa)",
                                                                                    rank: taxons.OHNE_RANG,
                                                                                    children: [
                                                                                        {
                                                                                            name: "Bilateria",
                                                                                            rank: taxons.OHNE_RANG,
                                                                                            children: [
                                                                                                {
                                                                                                    name: "Neumuender (Deuterostomia)",
                                                                                                    rank: taxons.STAMM,
                                                                                                    children: [
                                                                                                        {
                                                                                                            name: "Chordatiere (Chordata)",
                                                                                                            rank: taxons.STAMM,
                                                                                                            children: [
                                                                                                                {
                                                                                                                    name: "Wirbeltiere (Vertebrata)",
                                                                                                                    rank: taxons.UNTERSTAMM,
                                                                                                                    children: [
                                                                                                                        {
                                                                                                                            name: "Kiefermaeuler (Gnathostomata)",
                                                                                                                            rank: taxons.KLASSE, // Angepasst falls notwendig
                                                                                                                            children: [
                                                                                                                                {
                                                                                                                                    name: "Landwirbeltiere (Tetrapoda)",
                                                                                                                                    rank: taxons.ORDE,
                                                                                                                                    children: [
                                                                                                                                        {
                                                                                                                                            name: "Amnioten (Amniota)",
                                                                                                                                            rank: taxons.OHNE_RANG,
                                                                                                                                            children: [
                                                                                                                                                {
                                                                                                                                                    name: "Synapsiden (Synapsida)",
                                                                                                                                                    rank: taxons.OHNE_RANG,
                                                                                                                                                    children: [
                                                                                                                                                        mammalia // Importierter Säugetiere-Knoten
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
                {
                    name: "Diaphoretickes",
                    rank: taxons.OHNE_RANG,
                    children: [
                        {
                            name: "Archaeplastida",
                            rank: "Supergruppe",
                            children: [
                                {
                                    name: "Glaucophyta",
                                    rank: "Abteilung",
                                    children: []
                                },
                                {
                                    name: "Rotalgen (Rhodophyceae)",
                                    rank: "Abteilung",
                                    children: []
                                },
                                {
                                    name: "Pflanzen (Chloroplastida)",
                                    rank: "Abteilung",
                                    children: [
                                        {
                                            name: "Chlorophyta",
                                            rank: taxons.OHNE_RANG,
                                            children: []
                                        },
                                        {
                                            name: "Charophyta",
                                            rank: taxons.OHNE_RANG,
                                            children: [
                                                {
                                                    name: "Phragmoplastophyta",
                                                    rank: taxons.OHNE_RANG,
                                                    children: [
                                                        {
                                                            name: "Streptophyta",
                                                            rank: taxons.OHNE_RANG,
                                                            children: [
                                                                {
                                                                    name: "Landpflanzn (Embryophyta)",
                                                                    rank: taxons.REICH,
                                                                    children: []
                                                                },
                                                            ]
                                                        },
                                                    ]
                                                },
                                            ]
                                        },
                                    ]
                                },
                            ]
                        },
                    ]
                },
                {
                    name: "Archaeen (Archae)",
                    rank: taxons.DOMAENE,
                    children: []
                },
                {
                    name: "Bakterien (Bacteria)",
                    rank: taxons.DOMAENE,
                    children: []
                },
            ]
        },
    ],
};
