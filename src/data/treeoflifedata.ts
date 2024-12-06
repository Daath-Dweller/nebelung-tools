// treeoflifedata.ts
export interface TaxonomyNode {
    name: string;
    children?: TaxonomyNode[];
}

// Hilfsfunktion zur Erstellung von Knoten
const createNode = (name: string, children?: TaxonomyNode[]): TaxonomyNode => ({ name, children });

// Definieren der Daten in modularen Abschnitten
const felisCatus: TaxonomyNode = createNode("Hauskatze (Felis catus)");
const felisSilvestris: TaxonomyNode = createNode("Europäische Wildkatze (Felis silvestris)");
const felisLybicaLybica: TaxonomyNode = createNode("Afrikanische Wildkatze (Felis lybica lybica)");
const felisLybicaOrnata: TaxonomyNode = createNode("Asiatische Wildkatze (Felis lybica ornata)");

const felinae: TaxonomyNode = createNode("Kleinkatzen (Felinae)", [
    createNode("Echte Katzen (Felis)", [felisCatus, felisSilvestris, felisLybicaLybica, felisLybicaOrnata]),
]);

const felidae: TaxonomyNode = createNode("Katzen (Felidae)", [felinae]);

const feliformia: TaxonomyNode = createNode("Katzenartige (Feliformia)", [felidae]);

// Weitere Knoten folgen in ähnlicher Weise...

export const taxonomyData: TaxonomyNode = createNode("Entitaeten", [
    createNode("Lebewesen", [
        createNode("Eukaryoten (Eukaryota)", [
            createNode("Amorphea", [
                createNode("Obazoa", [
                    createNode("Opisthokonta", [
                        createNode("Holozoa", [
                            createNode("Filozoa", [
                                createNode("Choanozoa", [
                                    createNode("Vielzellige Tiere (Metazoa)", [
                                        createNode("Gewebetiere (Eumetazoa)", [
                                            createNode("Bilateria", [
                                                createNode("Neumuender (Deuterostomia)", [
                                                    createNode("Chordatiere (Chordata)", [
                                                        createNode("Wirbeltiere (Vertebrata)", [
                                                            createNode("Kiefermaeuler (Gnathostomata)", [
                                                                createNode("Landwirbeltiere (Tetrapoda)", [
                                                                    createNode("Amnioten (Amniota)", [
                                                                        createNode("Synapsiden (Synapsida)", [
                                                                            createNode("Saeugetiere (Mammalia)", [
                                                                                createNode("Hoehere Saeugetiere (Eutheria)", [
                                                                                    createNode("Laurasiatheria", [
                                                                                        createNode("Scrotifera", [
                                                                                            createNode("Ferae", [
                                                                                                createNode("Raubtiere (Carnivora)", [
                                                                                                    feliformia,
                                                                                                    // Weitere Raubtier-Untergruppen...
                                                                                                ]),
                                                                                            ]),
                                                                                        ]),
                                                                                    ]),
                                                                                ]),
                                                                            ]),
                                                                        ]),
                                                                    ]),
                                                                ]),
                                                            ]),
                                                        ]),
                                                    ]),
                                                ]),
                                            ]),
                                        ]),
                                    ]),
                                ]),
                            ]),
                        ]),
                    ]),
                ]),
            ]),
        ]),
    ]),
]);
