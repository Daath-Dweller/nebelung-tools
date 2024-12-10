// mammalia.ts

import { TaxonomyNode } from "@/data/treeOfLifeData/taxonomyTypes";
import { taxons } from "@/data/treeOfLifeData/taxons";

export const mammalia: TaxonomyNode = {
    name: "Säugetiere (Mammalia)",
    rank: taxons.KLASSE,
    children: [
        {
            name: "Höhere Säugetiere (Eutheria)",
            rank: taxons.UNTERKLASSE,
            children: [
                {
                    name: "Laurasiatheria",
                    rank: taxons.SUPERORDNUNG,
                    children: [
                        {
                            name: "Scrotifera",
                            rank: taxons.OHNE_RANG,
                            children: [
                                {
                                    name: "Ferae",
                                    rank: taxons.OHNE_RANG,
                                    children: [
                                        {
                                            name: "Raubtiere (Carnivora)",
                                            rank: taxons.ORDNUNG,
                                            children: [
                                                {
                                                    name: "Katzenartige (Feliformia)",
                                                    rank: taxons.UNTERORDNUNG,
                                                    children: [
                                                        {
                                                            name: "Katzen (Felidae)",
                                                            rank: taxons.FAMILIE,
                                                            children: [
                                                                {
                                                                    name: "Kleinkatzen (Felinae)",
                                                                    rank: taxons.UNTERFAMILIE,
                                                                    children: [
                                                                        {
                                                                            name: "Echte Katzen (Felis)",
                                                                            rank: taxons.GATTUNG,
                                                                            children: [
                                                                                {
                                                                                    name: "Hauskatze (Felis catus)",
                                                                                    rank: taxons.ART
                                                                                },
                                                                                {
                                                                                    name: "Europäische Wildkatze (Felis silvestris)",
                                                                                    rank: taxons.ART
                                                                                },
                                                                                {
                                                                                    name: "Afrikanische Wildkatze (Felis lybica lybica)",
                                                                                    rank: taxons.ART
                                                                                },
                                                                                {
                                                                                    name: "Asiatische Wildkatze (Felis lybica ornata)",
                                                                                    rank: taxons.ART
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
};
