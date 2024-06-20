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
        Italian: {name: 'Italian (Weißbrot)', kcal: 185, fett: 2.1, kohlenhydrate: 37.2, protein: 7.8},
        Vollkorn: {
            name: 'Vollkorn (Vollkornbrot mit Saatenmischung)',
            kcal: 198,
            fett: 4.1,
            kohlenhydrate: 34.6,
            protein: 11.2
        },
        CheeseOregano: {
            name: 'Cheese Oregano (Weißbrot mit Käse und Oregano)',
            kcal: 196,
            fett: 3.2,
            kohlenhydrate: 39.1,
            protein: 9.4
        },
        HoneyOat: {
            name: 'Honey Oat (Vollkornbrot mit Honig und Haferflocken)',
            kcal: 204,
            fett: 2.5,
            kohlenhydrate: 45.2,
            protein: 9.5
        },
        Sesam: {name: 'Sesam (Weißbrot mit Sesam)', kcal: 198, fett: 4.1, kohlenhydrate: 38.2, protein: 8.5},
        Wrap: {name: 'Wrap (Weizentortilla)', kcal: 310, fett: 6.6, kohlenhydrate: 59.5, protein: 7.9},
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
        Beef: {name: 'Roast Beef', kcal: 84, fett: 1.9, kohlenhydrate: 0, protein: 15.2},
        VeggieDelite: {name: 'Veggie Delite', kcal: 15, fett: 0.2, kohlenhydrate: 2.3, protein: 0.8},
        BBQ_Rib: {name: 'BBQ Rib', kcal: 233, fett: 16.9, kohlenhydrate: 6.8, protein: 12.2},
        ItalianBMT: {name: 'Italian BMT®', kcal: 194, fett: 13.5, kohlenhydrate: 3, protein: 12.8},
        Salami: {name: 'Salami', kcal: 83, fett: 7.6, kohlenhydrate: 0, protein: 6.2},
        SteakCheese: {name: 'Steak & Cheese / Philly Beef', kcal: 127, fett: 6.4, kohlenhydrate: 3.9, protein: 14.1},
        Tuna: {name: 'Tuna', kcal: 150, fett: 8.5, kohlenhydrate: 3.8, protein: 11.9},
        VeggiePatty: {name: 'Spicy Veggie Patty', kcal: 158, fett: 8.9, kohlenhydrate: 7.8, protein: 12.2},
        PlantBasedTeriaki: {
            name: 'Plant-based Chicken Teriyaki',
            kcal: 196,
            fett: 7.9,
            kohlenhydrate: 11.8,
            protein: 13.2
        },
    },
    sosse: {
        Asiago: {name: 'Asiago', kcal: 101, fett: 9.4, kohlenhydrate: 1.8, protein: 0.7},
        ChipotleSouthwest: {name: 'Chipotle Southwest', kcal: 90, fett: 9.1, kohlenhydrate: 1.5, protein: 0.2},
        HoneyMustard: {name: 'Honey Mustard', kcal: 25, fett: 0.2, kohlenhydrate: 5.3, protein: 0.2},
        LiteMayonnaise: {name: 'Lite Mayonnaise', kcal: 50, fett: 5.1, kohlenhydrate: 0.8, protein: 0},
        HotSauce: {name: 'Hot Sauce', kcal: 1, fett: 0, kohlenhydrate: 0.3, protein: 0},
        Olivenoel: {name: 'Olivenöl', kcal: 45, fett: 5, kohlenhydrate: 0, protein: 0},
        Rotweinessig: {name: 'Essig', kcal: 0, fett: 0, kohlenhydrate: 0.1, protein: 0},
        SweetOnion: {name: 'Sweet Onion', kcal: 46, fett: 0.2, kohlenhydrate: 11.1, protein: 0.1},
        Yoghurt: {name: 'Yoghurt', kcal: 31, fett: 2.3, kohlenhydrate: 2.1, protein: 0.3},
        BBQ: {name: 'BBQ', kcal: 37, fett: 0, kohlenhydrate: 8.7, protein: 0.2},
    },
    kaese: {
        Streichkaese: {name: 'Streichkäse', kcal: 27, fett: 2.3, kohlenhydrate: 0.4, protein: 2.3},
        Scheibenkaese: {name: 'Scheibenkäse', kcal: 40, fett: 3.5, kohlenhydrate: 0.4, protein: 1.9},
        Cheddar: {name: 'Cheddar', kcal: 57, fett: 4.4, kohlenhydrate: 0.3, protein: 3.5},
        Mozarella_Mix: {name: 'Mozzarella Mix', kcal: 46, fett: 666, kohlenhydrate: 666, protein: 666},
    },
    gemuese: {
        Salat: {name: 'Salat', kcal: 1, fett: 0, kohlenhydrate: 0.3, protein: 0},
        Oliven: {name: 'Oliven', kcal: 3, fett: 0.5, kohlenhydrate: 0.1, protein: 0},
        Paprika: {name: 'Paprika', kcal: 2, fett: 0, kohlenhydrate: 1, protein: 0},
        Jalapeno: {name: 'Jalapeno', kcal: 3, fett: 0, kohlenhydrate: 1.2, protein: 0},
        Spinat: {name: 'Spinat', kcal: 1, fett: 0, kohlenhydrate: 0.3, protein: 0},
        Mais: {name: 'Mais', kcal: 7, fett: 0, kohlenhydrate: 2.7, protein: 0},
        Zwiebel: {name: 'Zwiebel', kcal: 1, fett: 0, kohlenhydrate: 0.7, protein: 0},
        Rucola: {name: 'Rucola', kcal: 1, fett: 0, kohlenhydrate: 0.4, protein: 0},
        Gurke: {name: 'Gurke', kcal: 1, fett: 0, kohlenhydrate: 0.4, protein: 0},
        Tomate: {name: 'Tomate', kcal: 2, fett: 0, kohlenhydrate: 1, protein: 0},
        SaureGurke: {name: 'Saure Gurke', kcal: 5, fett: 0.2, kohlenhydrate: 1.7, protein: 0},
        Roestzwiebeln: {name: 'Röstzwiebeln', kcal: 22, fett: 2, kohlenhydrate: 3, protein: 0},
        Guacamole: {name: 'Guacamole', kcal: 41, fett: 4.5, kohlenhydrate: 3, protein: 0.1}
    },
    subwaySeries: {
        PhillyBoss: {name: 'Philly Boss', kcal: 472, fett: 22, kohlenhydrate: 39, protein: 27},
        FiestaFajita: {name: 'Fiesta Fajita', kcal: 550, fett: 25, kohlenhydrate: 53, protein: 27},
        BBQMaster: {name: 'The BBQ Master', kcal: 622, fett: 32, kohlenhydrate: 56, protein: 26},
        LegendaryChicken: {name: 'Legendary Teriyaki', kcal: 390, fett: 10, kohlenhydrate: 45, protein: 29},
        NotoriousBMT: {name: 'Notorious B.M.T.', kcal: 462, fett: 23, kohlenhydrate: 36, protein: 28},
        PlantBasedLegendary: {name: 'Plant-based Legendary Teriyaki', kcal: 389, fett: 6.7, kohlenhydrate: 49, protein: 19},
        GreatCaesar: {name: 'Great Caesar', kcal: 483, fett: 22, kohlenhydrate: 36, protein: 31},
        FuriousChicken: {name: 'Furious Chicken', kcal: 522, fett: 23, kohlenhydrate: 50, protein: 27},
        TheCaptain: {name: 'The Captain', kcal: 551, fett: 27, kohlenhydrate: 49, protein: 27},
        ChimichurriBeef: {name: 'Chimichurri Beef', kcal: 432, fett: 18, kohlenhydrate: 43, protein: 27},
        BBQRotisserie: {name: 'BBQ Rotisserie-Style Chicken', kcal: 444, fett: 17, kohlenhydrate: 43, protein: 29},
    },
}

