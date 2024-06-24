// mcdonaldsdata.ts

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
    burgers: {
        BigMac: {name: 'Big Mac', kcal: 508, fett: 26, kohlenhydrate: 42, protein: 25},
        Cheeseburger: {name: 'Cheeseburger', kcal: 300, fett: 13, kohlenhydrate: 33, protein: 15},
        DoubleCheeseburger: {name: 'Double Cheeseburger', kcal: 450, fett: 23, kohlenhydrate: 34, protein: 25}
    },
    chicken_fish: {
        McChicken: {name: 'McChicken', kcal: 435, fett: 21, kohlenhydrate: 45, protein: 14},
        FiletOFish: {name: 'Filet-O-Fish', kcal: 380, fett: 18, kohlenhydrate: 38, protein: 15}
    },
    nuggets_meals: {
        ChickenMcNuggets4: {name: 'Chicken McNuggets (4 pcs)', kcal: 170, fett: 10, kohlenhydrate: 10, protein: 9},
        ChickenMcNuggets6: {name: 'Chicken McNuggets (6 pcs)', kcal: 250, fett: 15, kohlenhydrate: 15, protein: 13}
    },
    fries_sides: {
        SmallFries: {name: 'Small Fries', kcal: 230, fett: 11, kohlenhydrate: 29, protein: 3},
        LargeFries: {name: 'Large Fries', kcal: 510, fett: 24, kohlenhydrate: 67, protein: 7}
    },
    desserts: {
        ApplePie: {name: 'Apple Pie', kcal: 240, fett: 11, kohlenhydrate: 35, protein: 2},
        SundaeChocolate: {name: 'Sundae Chocolate', kcal: 330, fett: 9, kohlenhydrate: 55, protein: 7}
    },
    beverages: {
        CocaColaSmall: {name: 'Coca-Cola Small', kcal: 140, fett: 0, kohlenhydrate: 39, protein: 0},
        CocaColaLarge: {name: 'Coca-Cola Large', kcal: 310, fett: 0, kohlenhydrate: 86, protein: 0}
    }
}
