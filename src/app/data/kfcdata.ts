// Data.ts

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
    haehnchen: {
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
    burger: {
        ChickenFajita: {
            name: 'Chicken Fajita (Hähnchenbrustfiletstreifen mit mexikanischer Würzung)',
            kcal: 85,
            fett: 1.2,
            kohlenhydrate: 3.6,
            protein: 14
        },

    },
    beilagen: {
        Asiago: {name: 'Asiago', kcal: 101, fett: 666, kohlenhydrate: 666, protein: 666},
        ChipotleSouthwest: {name: 'Chipotle Southwest', kcal: 90, fett: 666, kohlenhydrate: 666, protein: 666},
        HoneyMustard: {name: 'Honey Mustard', kcal: 25, fett: 666, kohlenhydrate: 666, protein: 666},
        LiteMayonnaise: {name: 'Lite Mayonnaise', kcal: 50, fett: 666, kohlenhydrate: 666, protein: 666},
        HotSauce: {name: 'Hot Sauce', kcal: 21, fett: 666, kohlenhydrate: 666, protein: 666},
        SweetOnion: {name: 'Sweet Onion', kcal: 46, fett: 666, kohlenhydrate: 666, protein: 666},
        BBQ: {name: 'BBQ', kcal: 37, fett: 666, kohlenhydrate: 666, protein: 666},
    },
    desserts: {
        Streichkaese: {name: 'Streichkäse', kcal: 27, fett: 666, kohlenhydrate: 666, protein: 666},
        Scheibenkaese: {name: 'Scheibenkäse', kcal: 40, fett: 666, kohlenhydrate: 666, protein: 666},
        Cheddar: {name: 'Cheddar', kcal: 57, fett: 666, kohlenhydrate: 666, protein: 666},
        Mozarella_Mix: {name: 'Mozzarella Mix', kcal: 46, fett: 666, kohlenhydrate: 666, protein: 666},
    },
}

