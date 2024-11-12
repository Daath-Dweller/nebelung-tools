// kfcdata.ts

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
        OriginalPouletteil: {name: 'Original Pouletteil', kcal: 234, fett: 14, kohlenhydrate: 9, protein: 19},
        HotWingsOberfluegel: {name: 'Hot Wings Oberflügel', kcal: 322, fett: 22, kohlenhydrate: 12, protein: 19},
        HotWingsUnterfluegel: {name: 'Hot Wings Unterflügel', kcal: 312, fett: 21, kohlenhydrate: 11, protein: 19},
        FiletBite: {name: 'Filet Bite', kcal: 234, fett: 12, kohlenhydrate: 13, protein: 19},
        Crispy: {name: 'Crispy', kcal: 240, fett: 14, kohlenhydrate: 10, protein: 19}
    },
    burger: {
        DoubleCrispyClassicBurger: {name: 'Double Crispy Classic Burger', kcal: 399, fett: 18, kohlenhydrate: 23, protein: 20},
        CrispyCheeseBurger: {name: 'Crispy Cheese Burger', kcal: 277, fett: 9, kohlenhydrate: 31, protein: 13},
        CrispyChiliCheeseBurger: {name: 'Crispy Chili Cheese Burger', kcal: 329, fett: 16, kohlenhydrate: 29, protein: 12},
        ClassicOriginalBurger: {name: 'Classic Original Burger', kcal: 494, fett: 21, kohlenhydrate: 23, protein: 26},
        ClassicZingerBurger: {name: 'Classic Zinger Burger', kcal: 490, fett: 22, kohlenhydrate: 23, protein: 27}
    },
    beilagen: {
        PommesFritesKlein: {name: 'Pommes frites - klein', kcal: 226, fett: 10, kohlenhydrate: 31, protein: 3},
        PommesFritesGross: {name: 'Pommes frites - groß', kcal: 311, fett: 14, kohlenhydrate: 43, protein: 4},
        KartoffelstockOhneGravy: {name: 'Kartoffelstock ohne Gravy', kcal: 99, fett: 1, kohlenhydrate: 20, protein: 3},
        KartoffelstockMitGravy: {name: 'Kartoffelstock mit Gravy', kcal: 112, fett: 1, kohlenhydrate: 23, protein: 3},
        Coleslaw: {name: 'Coleslaw', kcal: 255, fett: 20, kohlenhydrate: 16, protein: 2}
    },
    desserts: {
        DoubleChocolateCookie: {name: 'Double Chocolate Cookie', kcal: 357, fett: 17, kohlenhydrate: 44, protein: 5},
        CookieChocolate: {name: 'Cookie Chocolate', kcal: 366, fett: 18, kohlenhydrate: 48, protein: 4},
        MilkshakeStrawberrySmall: {name: 'Milkshake (Strawberry) 0.18L', kcal: 252, fett: 7, kohlenhydrate: 42, protein: 4},
        MilkshakeStrawberryLarge: {name: 'Milkshake (Strawberry) 0.3L', kcal: 420, fett: 12, kohlenhydrate: 71, protein: 7},
        MilkshakeChocolateSmall: {name: 'Milkshake (Chocolate) 0.18L', kcal: 286, fett: 13, kohlenhydrate: 36, protein: 5}
    },
    dips_dressings: {
        HeinzTomatoKetchup: {name: 'Heinz Tomato Ketchup', kcal: 18, fett: 0, kohlenhydrate: 4, protein: 0},
        HeinzPommesFritesSauce: {name: 'Heinz Pommes-Frites-Sauce', kcal: 63, fett: 6, kohlenhydrate: 2, protein: 0},
        HeinzSalatMayonnaise: {name: 'Heinz Salat Mayonnaise', kcal: 94, fett: 10, kohlenhydrate: 1, protein: 0},
        CreamyCurryDip: {name: 'Creamy Curry Dip', kcal: 93, fett: 8, kohlenhydrate: 4, protein: 0},
        SmokyBBQDip: {name: 'Smoky BBQ Dip', kcal: 41, fett: 0, kohlenhydrate: 10, protein: 0}
    },
    getraenke: {
        PepsiCola300ml: {name: 'Pepsi Cola 300 ml', kcal: 87, fett: 0, kohlenhydrate: 22, protein: 0},
        PepsiCola400ml: {name: 'Pepsi Cola 400 ml', kcal: 116, fett: 0, kohlenhydrate: 29, protein: 0},
        PepsiCola500ml: {name: 'Pepsi Cola 500 ml', kcal: 145, fett: 0, kohlenhydrate: 37, protein: 0},
        PepsiMax300ml: {name: 'Pepsi Max 300 ml', kcal: 1, fett: 0, kohlenhydrate: 0, protein: 0},
        PepsiMax400ml: {name: 'Pepsi Max 400 ml', kcal: 1, fett: 0, kohlenhydrate: 0, protein: 0}
    }
}
