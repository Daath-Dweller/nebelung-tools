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
        Italian: { name: 'Italian', kcal: 200, fett: 666, kohlenhydrate: 666, protein: 666 },
        Vollkorn: { name: 'Vollkorn', kcal: 222, fett: 666, kohlenhydrate: 666, protein: 666 },
        CheeseOregano: { name: 'Cheese Oregano', kcal: 221, fett: 666, kohlenhydrate: 666, protein: 666 },
        HoneyOat: { name: 'Honey Oat', kcal: 229, fett: 666, kohlenhydrate: 666, protein: 666 },
        Sesam: { name: 'Sesam', kcal: 223, fett: 666, kohlenhydrate: 666, protein: 666 },
    },
    belag: {
        ChickenFajita: { name: 'Chicken Fajita', kcal: 85, fett: 666, kohlenhydrate: 666, protein: 666 },
        RoastedChickenBreast: { name: 'Roasted Chicken Breast', kcal: 75, fett: 666, kohlenhydrate: 666, protein: 666 },
        ChickenTeriyaki: { name: 'Chicken Teriyaki', kcal: 97, fett: 666, kohlenhydrate: 666, protein: 666 },
        Ham: { name: 'Ham', kcal: 66, fett: 666, kohlenhydrate: 666, protein: 666 },
        Turkey: { name: 'Turkey', kcal: 75, fett: 666, kohlenhydrate: 666, protein: 666 },
        TurkeyHam: { name: 'Turkey & Ham', kcal: 89, fett: 666, kohlenhydrate: 666, protein: 666 },
        TurkeyHamBeef: { name: 'Turkey, Ham & Beef', kcal: 95, fett: 666, kohlenhydrate: 666, protein: 666 },
        Beef: { name: 'Beef', kcal: 84, fett: 666, kohlenhydrate: 666, protein: 666 },
        VeggieDelite: { name: 'Veggie Delite', kcal: 15, fett: 666, kohlenhydrate: 666, protein: 666 },
        BBQ_Rib: { name: 'BBQ Rib', kcal: 301, fett: 666, kohlenhydrate: 666, protein: 666 },
        ItalianBMT: { name: 'Italian BMT®', kcal: 194, fett: 666, kohlenhydrate: 666, protein: 666 },
        Salami: { name: 'Salami', kcal: 111, fett: 666, kohlenhydrate: 666, protein: 666 },
        TurkeyHamBaconMelt: { name: 'Turkey, Ham & Bacon Melt', kcal: 170, fett: 666, kohlenhydrate: 666, protein: 666 },
        SteakCheese: { name: 'Steak & Cheese / Philly Beef', kcal: 127, fett: 666, kohlenhydrate: 666, protein: 666 },
        Tuna: { name: 'Tuna', kcal: 150, fett: 666, kohlenhydrate: 666, protein: 666 },
        VeggiePatty: { name: 'Veggie Patty', kcal: 175, fett: 666, kohlenhydrate: 666, protein: 666 },
    },
    sosse: {
        Asiago: { name: 'Asiago', kcal: 101, fett: 666, kohlenhydrate: 666, protein: 666 },
        ChipotleSouthwest: { name: 'Chipotle Southwest', kcal: 90, fett: 666, kohlenhydrate: 666, protein: 666 },
        HoneyMustard: { name: 'Honey Mustard', kcal: 25, fett: 666, kohlenhydrate: 666, protein: 666 },
        LiteMayonnaise: { name: 'Lite Mayonnaise', kcal: 50, fett: 666, kohlenhydrate: 666, protein: 666 },
        HotSauce: { name: 'Hot Sauce', kcal: 21, fett: 666, kohlenhydrate: 666, protein: 666 },
        SweetOnion: { name: 'Sweet Onion', kcal: 46, fett: 666, kohlenhydrate: 666, protein: 666 },
        BBQ: { name: 'BBQ', kcal: 37, fett: 666, kohlenhydrate: 666, protein: 666 },
    },
    kaese: {
        Streichkaese: { name: 'Streichkäse', kcal: 27, fett: 666, kohlenhydrate: 666, protein: 666 },
        Scheibenkaese: { name: 'Scheibenkäse', kcal: 40, fett: 666, kohlenhydrate: 666, protein: 666 },
        Cheddar: { name: 'Cheddar', kcal: 57, fett: 666, kohlenhydrate: 666, protein: 666 },
        Mozarella_Mix: { name: 'Mozzarella Mix', kcal: 46, fett: 666, kohlenhydrate: 666, protein: 666 },
    },
    gemuese: {
        Salat: { name: 'Salat', kcal: 1, fett: 0.1, kohlenhydrate: 0.2, protein: 0.1 },
        Oliven: { name: 'Oliven', kcal: 3, fett: 0.3, kohlenhydrate: 0.2, protein: 0.1 },
        Paprika: { name: 'Paprika', kcal: 4, fett: 0.1, kohlenhydrate: 1, protein: 0.2 },
        Jalapeno: { name: 'Jalapeno', kcal: 5, fett: 0.1, kohlenhydrate: 1.2, protein: 0.2 },
        Spinat: { name: 'Spinat', kcal: 2, fett: 0.1, kohlenhydrate: 0.3, protein: 0.3 },
        Mais: { name: 'Mais', kcal: 12, fett: 0.2, kohlenhydrate: 2.7, protein: 0.6 },
        Zwiebel: { name: 'Zwiebel', kcal: 3, fett: 0.1, kohlenhydrate: 0.7, protein: 0.1 },
        Rucola: { name: 'Rucola', kcal: 3, fett: 0.1, kohlenhydrate: 0.4, protein: 0.3 },
        Gurke: { name: 'Gurke', kcal: 2, fett: 0.1, kohlenhydrate: 0.4, protein: 0.2 },
        Tomate: { name: 'Tomate', kcal: 4, fett: 0.2, kohlenhydrate: 1, protein: 0.2 },
        SaureGurke: { name: 'Saure Gurke', kcal: 7, fett: 0.2, kohlenhydrate: 1.7, protein: 0.2 },
        Roestzwiebeln: { name: 'Röstzwiebeln', kcal: 30, fett: 2, kohlenhydrate: 3, protein: 0.5 },
        Guacamole: { name: 'Guacamole', kcal: 50, fett: 4.5, kohlenhydrate: 3, protein: 0.6 }
    },
}

