// mammalia.ts

import { TaxonomyNode } from "@/data/treeOfLifeData/taxonomyTypes";
import { taxons } from "@/data/treeOfLifeData/taxons";

export const embryophyta: TaxonomyNode = {
    name: "Landpflanzen (Embryophyta)",
    rank: taxons.REICH,
    children: [
        {
            name: "Lebermoose (Marchantiophyta)",
            rank: taxons.ABTEILUNG,
            children: [
            ]
        },
        {
            name: "Laubmoose (Bryophyta)",
            rank: taxons.ABTEILUNG,
            children: [
            ]
        },
        {
            name: "Hornmoose (Anthocerotophyta)",
            rank: taxons.ABTEILUNG,
            children: [
            ]
        },
        {
            name: "Gefäßpflanzen (Tracheophyta)",
            rank: taxons.ABTEILUNG,
            children: [
                {
                    name: "Bärlapppflanzen (Lycopodiopsida)",
                    rank: taxons.UNTERABTEILUNG,
                    children: [
                    ]
                },
                {
                    name: "Farne (Monilophyta)",
                    rank: taxons.UNTERABTEILUNG,
                    children: [
                    ]
                },
                {
                    name: "Samenpflanzen (Spermatophytina)",
                    rank: taxons.UNTERABTEILUNG,
                    children: [
                        {
                            name: "Nacktsamer (Gymnospermae)",
                            rank: taxons.OHNE_RANG,
                            children: [{
                                name: "Palmfarne (Cycadopsida)",
                                rank: taxons.KLASSE,
                                children: [
                                    {
                                        name: "Palmfarne (Cycadales) ",
                                        rank: taxons.ORDNUNG,
                                        children: [
                                        ]
                                    },
                                ]
                            },
                                {
                                    name: "Ginkgopflanzen (Ginkgoopsida)",
                                    rank: taxons.KLASSE,
                                    children: [
                                        {
                                            name: "Ginkgoales",
                                            rank: taxons.ORDNUNG,
                                            children: [
                                                {
                                                    name: "Ginkgogewächse (Ginkgoaceae)",
                                                    rank: taxons.FAMILIE,
                                                    children: [
                                                        {
                                                            name: "Ginkgo",
                                                            rank: taxons.GATTUNG,
                                                            children: [
                                                                {
                                                                    name: "Ginkgo (Ginkgo biloba)",
                                                                    rank: taxons.ART,

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
                                    name: "Koniferen (Coniferopsida)",
                                    rank: taxons.KLASSE,
                                    children: [
                                    ]
                                },

                            ]
                        },
                        {
                            name: "Bedecktsamer (Angiospermae)",
                            rank: taxons.KLASSE,
                            children: [
                                {
                                    name: "Nymphaeales (Seerosenartige)",
                                    rank: taxons.KLASSE,
                                    children: [
                                    ]
                                },
                                {
                                    name: "Austrobaileyales",
                                    rank: taxons.KLASSE,
                                    children: [
                                    ]
                                },
                                {
                                    name: "Amborellaceae",
                                    rank: taxons.KLASSE,
                                    children: [
                                    ]
                                },
                                {
                                    name: "Magnoliiden",
                                    rank: taxons.KLASSE,
                                    children: [
                                    ]
                                },
                                {
                                    name: "Chloranthales",
                                    rank: taxons.KLASSE,
                                    children: [
                                    ]
                                },
                                {
                                    name: "Einkeimblättrige (Monokotyledonen)",
                                    rank: taxons.KLASSE,
                                    children: [
                                    ]
                                },
                                {
                                    name: "Hornblattartige (Ceratophyllales)",
                                    rank: taxons.KLASSE,
                                    children: [
                                    ]
                                },
                                {
                                    name: "Eudikotyledonen",
                                    rank: taxons.KLASSE,
                                    children: [
                                    ]
                                },
                            ]
                        },

                    ]
                },
            ]
        },
    ]
};