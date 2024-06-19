// Data.ts

interface Zutat {
    name: string;
    kcal: number;
    fett: number;
    kohlenhydrate: number;
    protein: number;
}

interface Zutaten {
    [key: string]: { [key: string]: Zutat };
}

export const zutaten: Zutaten = {
    brot: {
        Italian: {name: 'Italian (Weißbrot)', kcal: 200, fett: 2.1, kohlenhydrate: 37.2, protein: 7.8},
        Vollkorn: {
            name: 'Vollkorn (Vollkornbrot mit Saatenmischung)',
            kcal: 222,
            fett: 4.1,
            kohlenhydrate: 34.6,
            protein: 11.2
        },
        CheeseOregano: {
            name: 'Cheese Oregano (Weißbrot mit Käse und Oregano)',
            kcal: 221,
            fett: 3.2,
            kohlenhydrate: 39.1,
            protein: 9.4
        },
        HoneyOat: {
            name: 'Honey Oat (Vollkornbrot mit Honig und Haferflocken)',
            kcal: 229,
            fett: 2.5,
            kohlenhydrate: 45.2,
            protein: 9.5
        },
        Sesam: {name: 'Sesam (Weißbrot mit Sesam)', kcal: 223, fett: 4.1, kohlenhydrate: 38.2, protein: 8.5},
        Wrap: {name: 'Wrap (Weizentortilla)', kcal: 328, fett: 6.6, kohlenhydrate: 59.5, protein: 7.9},
    },
    belag: {
        ChickenFajita: {
            name: 'Chicken Fajita (Hähnchenbrustfiletstreifen mit mexikanischer Würzung)',
            kcal: 85,
            fett: 1.2,
            kohlenhydrate: 3.6,
            protein: 14
        },
        ChickenTeriyaki: {
            name: 'Chicken Teriyaki (Hähnchenbrustfiletstreifen in Teriyaki-Marinade)',
            kcal: 97,
            fett: 2.4,
            kohlenhydrate: 9.1,
            protein: 14
        },
        Ham: {name: 'Ham', kcal: 40, fett: 1.6, kohlenhydrate: 0, protein: 9.2},
        SlicedChicken: {name: 'Sliced Chicken', kcal: 137, fett: 6.5, kohlenhydrate: 4.8, protein: 14.2},
        Beef: {name: 'Roast Beef', kcal: 84, fett: 666, kohlenhydrate: 666, protein: 666},
        VeggieDelite: {name: 'Veggie Delite', kcal: 15, fett: 666, kohlenhydrate: 666, protein: 666},
        BBQ_Rib: {name: 'BBQ Rib', kcal: 233, fett: 16.9, kohlenhydrate: 6.8, protein: 12.2},
        ItalianBMT: {name: 'Italian BMT®', kcal: 194, fett: 13.5, kohlenhydrate: 3, protein: 12.8},
        Salami: {name: 'Salami', kcal: 111, fett: 666, kohlenhydrate: 666, protein: 666},
        TurkeyHamBaconMelt: {name: 'Turkey, Ham & Bacon Melt', kcal: 170, fett: 666, kohlenhydrate: 666, protein: 666},
        SteakCheese: {name: 'Steak & Cheese / Philly Beef', kcal: 127, fett: 666, kohlenhydrate: 666, protein: 666},
        Tuna: {name: 'Tuna', kcal: 150, fett: 666, kohlenhydrate: 666, protein: 666},
        VeggiePatty: {name: 'Veggie Patty', kcal: 175, fett: 666, kohlenhydrate: 666, protein: 666},
        PlantBasedTeriaki: {
            name: 'Plant-based Chicken Teriyaki',
            kcal: 196,
            fett: 7.9,
            kohlenhydrate: 11.8,
            protein: 13.2
        },
    },
    sosse: {
        Asiago: {name: 'Asiago', kcal: 101, fett: 666, kohlenhydrate: 666, protein: 666},
        ChipotleSouthwest: {name: 'Chipotle Southwest', kcal: 90, fett: 666, kohlenhydrate: 666, protein: 666},
        HoneyMustard: {name: 'Honey Mustard', kcal: 25, fett: 666, kohlenhydrate: 666, protein: 666},
        LiteMayonnaise: {name: 'Lite Mayonnaise', kcal: 50, fett: 666, kohlenhydrate: 666, protein: 666},
        HotSauce: {name: 'Hot Sauce', kcal: 21, fett: 666, kohlenhydrate: 666, protein: 666},
        SweetOnion: {name: 'Sweet Onion', kcal: 46, fett: 666, kohlenhydrate: 666, protein: 666},
        BBQ: {name: 'BBQ', kcal: 37, fett: 666, kohlenhydrate: 666, protein: 666},
    },
    kaese: {
        Streichkaese: {name: 'Streichkäse', kcal: 27, fett: 666, kohlenhydrate: 666, protein: 666},
        Scheibenkaese: {name: 'Scheibenkäse', kcal: 40, fett: 666, kohlenhydrate: 666, protein: 666},
        Cheddar: {name: 'Cheddar', kcal: 57, fett: 666, kohlenhydrate: 666, protein: 666},
        Mozarella_Mix: {name: 'Mozzarella Mix', kcal: 46, fett: 666, kohlenhydrate: 666, protein: 666},
    },
    gemuese: {
        Salat: {name: 'Salat', kcal: 1, fett: 0.1, kohlenhydrate: 0.2, protein: 0.1},
        Oliven: {name: 'Oliven', kcal: 3, fett: 0.3, kohlenhydrate: 0.2, protein: 0.1},
        Paprika: {name: 'Paprika', kcal: 4, fett: 0.1, kohlenhydrate: 1, protein: 0.2},
        Jalapeno: {name: 'Jalapeno', kcal: 5, fett: 0.1, kohlenhydrate: 1.2, protein: 0.2},
        Spinat: {name: 'Spinat', kcal: 2, fett: 0.1, kohlenhydrate: 0.3, protein: 0.3},
        Mais: {name: 'Mais', kcal: 12, fett: 0.2, kohlenhydrate: 2.7, protein: 0.6},
        Zwiebel: {name: 'Zwiebel', kcal: 3, fett: 0.1, kohlenhydrate: 0.7, protein: 0.1},
        Rucola: {name: 'Rucola', kcal: 3, fett: 0.1, kohlenhydrate: 0.4, protein: 0.3},
        Gurke: {name: 'Gurke', kcal: 2, fett: 0.1, kohlenhydrate: 0.4, protein: 0.2},
        Tomate: {name: 'Tomate', kcal: 4, fett: 0.2, kohlenhydrate: 1, protein: 0.2},
        SaureGurke: {name: 'Saure Gurke', kcal: 7, fett: 0.2, kohlenhydrate: 1.7, protein: 0.2},
        Roestzwiebeln: {name: 'Röstzwiebeln', kcal: 30, fett: 2, kohlenhydrate: 3, protein: 0.5},
        Guacamole: {name: 'Guacamole', kcal: 50, fett: 4.5, kohlenhydrate: 3, protein: 0.6}
    },
    subwaySeries: {
        PhillyBoss: {name: 'Philly Boss', kcal: 1, fett: 0.1, kohlenhydrate: 0.2, protein: 0.1},
        LegendaryChicken: {name: 'Legendary Chicken', kcal: 3, fett: 0.3, kohlenhydrate: 0.2, protein: 0.1},
    },
}

