// taxonomyTypes.ts

export interface TaxonomyNode {
    name: string;
    rank?: string; // Optionales Rang-Feld
    icon?: string;
    children?: TaxonomyNode[];
}
