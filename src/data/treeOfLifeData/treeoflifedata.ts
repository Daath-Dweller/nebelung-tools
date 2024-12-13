// treeoflifedata.ts

import { taxons } from "@/data/treeOfLifeData/taxons";
import { TaxonomyNode } from "@/data/treeOfLifeData/taxonomyTypes";
import { mammalia } from "@/data/treeOfLifeData/mammalia";
import {embryophyta} from "@/data/treeOfLifeData/embryophyta";

export const taxonomyData: TaxonomyNode = {
    name: "Entitaeten",
    rank: taxons.ENTITAETEN,
    children: [
        {
            name: "Lebewesen",
            rank: taxons.KLASSIFIKATION,
            icon: "IoWater",
            info: "Ein Individuum, das durch Eigenschaften wie Stoffwechsel, Wachstum, Fortpflanzung und Reaktionsfähigkeit auf seine Umwelt charakterisiert ist.",
            children: [
                {
                    name: "Eukaryoten (Eukaryota)",
                    rank: taxons.DOMAENE,
                    info: "Lebewesen, deren Zellen (Eucyten) einen echten Kern und eine reiche Kompartimentierung haben.",
                    children: [
                        {
                            name: "Amorphea",
                            rank: taxons.OHNE_RANG,
                            children: [
                                {
                                    name: "Obazoa",
                                    rank: taxons.SUPERGRUPPE,
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
                                                                                            name: "Zweiseitentiere (Bilateria)",
                                                                                            rank: taxons.OHNE_RANG,
                                                                                            children: [
                                                                                                {
                                                                                                    name: "Neumünder (Deuterostomia)",
                                                                                                    rank: taxons.UEBERSTAMM,
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
                                                                                                                            name: "Kiefermäuler (Gnathostomata)",
                                                                                                                            rank: taxons.KLASSE, // Angepasst falls notwendig
                                                                                                                            children: [
                                                                                                                                {
                                                                                                                                    name: "Landwirbeltiere (Tetrapoda)",
                                                                                                                                    rank: taxons.REIHE,
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
                                },
                                {
                                    name: "Amoebozoa",
                                    rank: taxons.SUPERGRUPPE,
                                    icon: "IoWater",
                  },
                            ]
                        },
                        {
                            name: "Diaphoretickes",
                            rank: taxons.OHNE_RANG,
                            children: [
                                {
                                    name: "Archaeplastida",
                                    rank: taxons.SUPERGRUPPE,
                                    info: "Archaeplastida besitzen photosynthetisch aktive Plastiden mit Chlorophyll a als Hauptfarbstoff. Die Plastiden stammen von einer primären Endosymbiose mit einem Cyanobakterium. Die Plastiden können in manchen Gruppen sekundär verloren gegangen oder reduziert sein. Meist besitzen sie eine Zellwand aus Zellulose. ",
                                    children: [
                                        {
                                            name: "Glaucophyta",
                                            rank: "Abteilung",
                    
                                        },
                                        {
                                            name: "Rotalgen (Rhodophyceae)",
                                            rank: "Abteilung",
                      
                                        },
                                        {
                                            name: "Pflanzen (Chloroplastida / Viridiplantae)",
                                            rank: "Abteilung",
                                            children: [
                                                {
                                                    name: "Grünalgen (Chlorophyta)",
                                                    rank: taxons.OHNE_RANG,
                                  
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
                                                                        embryophyta,
                                                                        {
                                                                            name: "Armleuchteralgen (Charophyceae)",
                                                                            rank: taxons.OHNE_RANG,
                                                          
                                                                        },

                                                                    ]
                                                                },
                                                                {
                                                                    name: "Schmuckalgen (Zygnematophyceae)",
                                                                    rank: taxons.OHNE_RANG,

                                                                },

                                                            ]
                                                        },
                                                        {
                                                            name: "Klebsormidiophyceae",
                                                            rank: taxons.GATTUNG,

                                                        },
                                                    ]
                                                },

                                            ]
                                        },
                                    ]
                                },
                                {
                                    name: "Sar",
                                    rank: taxons.SUPERGRUPPE,

                  },
                            ]
                        },
                    ]
                },
                {
                    name: "Prokaryoten",
                    rank: taxons.OHNE_RANG,
                    info: "Lebewesen, deren Zellen keinen Zellkern besitzen (Protocyten).",
                    children: [
                {
                    name: "Archaeen (Archae)",
                    rank: taxons.DOMAENE,
                    info : "Einzellige, prokaryotische Mikroorganismen, die durch einzigartige Membranlipide mit Etherbindungen, Zellwände ohne Peptidoglykan, genetische Ähnlichkeiten mit Eukaryoten und häufig das Leben in extremen Umweltbedingungen gekennzeichnet sind.",

                },
                {
                    name: "Bakterien (Bacteria)",
                    rank: taxons.DOMAENE,
                    info: "Einzellige, prokaryotische Mikroorganismen, die durch vielfältige Formen (wie Kokken oder Stäbchen), eine Zellwand aus Peptidoglykan, fehlende membranständige Organellen und hohe Stoffwechselvielfalt gekennzeichnet sind.",

                },
                    ]},
            ]
        },
    ],
};
