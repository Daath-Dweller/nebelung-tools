// burgerkingdata.ts

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
        Whopper: {name: 'Whopper', kcal: 630, fett: 35, kohlenhydrate: 49, protein: 28},
        DoubleWhopper: {name: 'Double Whopper', kcal: 900, fett: 57, kohlenhydrate: 49, protein: 45},
        Cheeseburger: {name: 'Cheeseburger', kcal: 300, fett: 14, kohlenhydrate: 30, protein: 15},
        BaconKing: {name: 'Bacon King', kcal: 1200, fett: 79, kohlenhydrate: 50, protein: 63}
    },
    chicken_fish: {
        ChickenRoyal: {name: 'Chicken Royal', kcal: 620, fett: 33, kohlenhydrate: 56, protein: 25},
        FishKing: {name: 'Fish King', kcal: 500, fett: 25, kohlenhydrate: 49, protein: 18}
    },
    nuggets_meals: {
        ChickenNuggets6: {name: 'Chicken Nuggets (6 pcs)', kcal: 270, fett: 15, kohlenhydrate: 17, protein: 14},
        ChickenNuggets9: {name: 'Chicken Nuggets (9 pcs)', kcal: 400, fett: 22, kohlenhydrate: 25, protein: 20}
    },
    fries_sides: {
        SmallFries: {name: 'Small Fries', kcal: 320, fett: 15, kohlenhydrate: 42, protein: 4},
        LargeFries: {name: 'Large Fries', kcal: 450, fett: 20, kohlenhydrate: 62, protein: 6}
    },
    desserts: {
        SundaeChocolate: {name: 'Sundae Chocolate', kcal: 280, fett: 8, kohlenhydrate: 45, protein: 5},
        KingFusionOreo: {name: 'King Fusion Oreo', kcal: 370, fett: 15, kohlenhydrate: 52, protein: 6}
    },
    beverages: {
        CocaColaSmall: {name: 'Coca-Cola Small', kcal: 140, fett: 0, kohlenhydrate: 39, protein: 0},
        CocaColaLarge: {name: 'Coca-Cola Large', kcal: 310, fett: 0, kohlenhydrate: 86, protein: 0}
    }
}
