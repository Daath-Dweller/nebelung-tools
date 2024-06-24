// nordseedata.ts

interface Produkt {
    name: string;
    kcal: number;
    fett: number;
    kohlenhydrate: number;
    protein: number;
}

interface Produkte {
    [key: string]: { [key: string]: Produkt };
}

export const produkte: Produkte = {
    baguettes: {
        Bremer: {name: 'Bremer', kcal: 361, fett: 9.3, kohlenhydrate: 53, protein: 15},
        MatjesBaguette: {name: 'Matjes-Baguette', kcal: 230, fett: 9, kohlenhydrate: 30, protein: 12},
        BackfischBaguette: {name: 'Backfisch-Baguette', kcal: 340, fett: 15, kohlenhydrate: 40, protein: 15}
    },
    main_dishes: {
        FishChips: {name: 'Fish & Chips', kcal: 680, fett: 35, kohlenhydrate: 60, protein: 25},
        AlaskaSeelachsfilet: {name: 'Alaska-Seelachsfilet', kcal: 200, fett: 5, kohlenhydrate: 10, protein: 25}
    },
    boxes: {
        FishNuggetsBox: {name: 'Fish Nuggets Box', kcal: 450, fett: 25, kohlenhydrate: 35, protein: 20},
        GarnelenBox: {name: 'Garnelen-Box', kcal: 250, fett: 15, kohlenhydrate: 10, protein: 20},
        MixBox: {name: 'Mix-Box', kcal: 500, fett: 30, kohlenhydrate: 40, protein: 30}
    },
    sides: {
        PommesFrites: {name: 'Pommes frites', kcal: 320, fett: 15, kohlenhydrate: 45, protein: 5},
        KartoffelBox: {name: 'Kartoffel-Box', kcal: 350, fett: 20, kohlenhydrate: 40, protein: 6}
    }
}
