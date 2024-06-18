import { useState } from 'react';

const zutaten = {
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
        Salat: { name: 'Salat', kcal: 1, fett: 666, kohlenhydrate: 666, protein: 666 },
        Oliven: { name: 'Oliven', kcal: 3, fett: 666, kohlenhydrate: 666, protein: 666 },
        Paprika: { name: 'Paprika', kcal: 4, fett: 666, kohlenhydrate: 666, protein: 666 },
        Jalapeno: { name: 'Jalapeno', kcal: 5, fett: 666, kohlenhydrate: 666, protein: 666 },
        Spinat: { name: 'Spinat', kcal: 2, fett: 666, kohlenhydrate: 666, protein: 666 },
        Mais: { name: 'Mais', kcal: 12, fett: 666, kohlenhydrate: 666, protein: 666 },
        Zwiebel: { name: 'Zwiebel', kcal: 3, fett: 666, kohlenhydrate: 666, protein: 666 },
        Rucola: { name: 'Rucola', kcal: 3, fett: 666, kohlenhydrate: 666, protein: 666 },
        Gurke: { name: 'Gurke', kcal: 2, fett: 666, kohlenhydrate: 666, protein: 666 },
        Tomate: { name: 'Tomate', kcal: 4, fett: 666, kohlenhydrate: 666, protein: 666 },
        SaureGurke: { name: 'Saure Gurke', kcal: 7, fett: 666, kohlenhydrate: 666, protein: 666 },
        Roestzwiebeln: { name: 'Röstzwiebeln', kcal: 30, fett: 666, kohlenhydrate: 666, protein: 666 },
        Guacamole: { name: 'Guacamole', kcal: 50, fett: 666, kohlenhydrate: 666, protein: 666 },
    },
};

export default function Rechner() {
    const [brot, setBrot] = useState('');
    const [belag, setBelag] = useState('');
    const [sosse, setSosse] = useState('');
    const [kaese, setKaese] = useState('');
    const [doppelKaese, setDoppelKaese] = useState(false);
    const [doppelFleisch, setDoppelFleisch] = useState(false);
    const [footlong, setFootlong] = useState(false);
    const [wrap, setWrap] = useState(false);
    const [bacon, setBacon] = useState(false);
    const [gemuese, setGemuese] = useState({
        Salat: false,
        Oliven: false,
        Paprika: false,
        Jalapeno: false,
        Spinat: false,
        Mais: false,
        Zwiebel: false,
        Rucola: false,
        Gurke: false,
        Tomate: false,
        SaureGurke: false,
    });

    const berechneWerte = () => {
        let werte = { kcal: 0, fett: 0, kohlenhydrate: 0, protein: 0 };

        if (brot) {
            werte.kcal += zutaten.brot[brot].kcal;
            werte.fett += zutaten.brot[brot].fett;
            werte.kohlenhydrate += zutaten.brot[brot].kohlenhydrate;
            werte.protein += zutaten.brot[brot].protein;
        }
        if (belag) {
            werte.kcal += zutaten.belag[belag].kcal;
            werte.fett += zutaten.belag[belag].fett;
            werte.kohlenhydrate += zutaten.belag[belag].kohlenhydrate;
            werte.protein += zutaten.belag[belag].protein;
        }
        if (sosse) {
            werte.kcal += zutaten.sosse[sosse].kcal;
            werte.fett += zutaten.sosse[sosse].fett;
            werte.kohlenhydrate += zutaten.sosse[sosse].kohlenhydrate;
            werte.protein += zutaten.sosse[sosse].protein;
        }
        if (kaese) {
            werte.kcal += zutaten.kaese[kaese].kcal;
            werte.fett += zutaten.kaese[kaese].fett;
            werte.kohlenhydrate += zutaten.kaese[kaese].kohlenhydrate;
            werte.protein += zutaten.kaese[kaese].protein;
        }

        if (doppelKaese && kaese) {
            werte.kcal += zutaten.kaese[kaese].kcal;
            werte.fett += zutaten.kaese[kaese].fett;
            werte.kohlenhydrate += zutaten.kaese[kaese].kohlenhydrate;
            werte.protein += zutaten.kaese[kaese].protein;
        }
        if (doppelFleisch && belag) {
            werte.kcal += zutaten.belag[belag].kcal;
            werte.fett += zutaten.belag[belag].fett;
            werte.kohlenhydrate += zutaten.belag[belag].kohlenhydrate;
            werte.protein += zutaten.belag[belag].protein;
        }

        for (const gemuesItem in gemuese) {
            if (gemuese[gemuesItem]) {
                werte.kcal += zutaten.gemuese[gemuesItem].kcal;
                werte.fett += zutaten.gemuese[gemuesItem].fett;
                werte.kohlenhydrate += zutaten.gemuese[gemuesItem].kohlenhydrate;
                werte.protein += zutaten.gemuese[gemuesItem].protein;
            }
        }

        if (wrap) {
            werte.kcal += 328; // Wrap Kalorien
            werte.fett += 666;
            werte.kohlenhydrate += 666;
            werte.protein += 666;
        }
        if (bacon) {
            werte.kcal += 42; // Bacon Kalorien
            werte.fett += 666;
            werte.kohlenhydrate += 666;
            werte.protein += 666;
        }

        if (footlong) {
            werte.kcal *= 2;
            werte.fett *= 2;
            werte.kohlenhydrate *= 2;
            werte.protein *= 2;
        }

        return werte;
    };

    const werte = berechneWerte();

    return (
        <div className="p-12 bg-black text-white" style={{ margin: '3rem' }}>
            <h1 className="text-2xl font-bold mb-8">Kalorien Rechner</h1>
            <div className="mb-8">
                <label className="block mb-4">
                    Brotsorte:
                    <select onChange={(e) => setBrot(e.target.value)} className="border p-2 mt-2 w-full text-black">
                        <option value="">kein Brot</option>
                        {Object.keys(zutaten.brot).map((brot) => (
                            <option key={brot} value={brot}>
                                {zutaten.brot[brot].name}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
            <div className="mb-8">
                <label className="block mb-4">
                    Belag:
                    <select onChange={(e) => setBelag(e.target.value)} className="border p-2 mt-2 w-full text-black">
                        <option value="">kein Belag</option>
                        {Object.keys(zutaten.belag).map((belag) => (
                            <option key={belag} value={belag}>
                                {zutaten.belag[belag].name}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
            <div className="mb-8">
                <label className="block mb-4">
                    Sosse:
                    <select onChange={(e) => setSosse(e.target.value)} className="border p-2 mt-2 w-full text-black">
                        <option value="">keine Sosse</option>
                        {Object.keys(zutaten.sosse).map((sosse) => (
                            <option key={sosse} value={sosse}>
                                {zutaten.sosse[sosse].name}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
            <div className="mb-8">
                <label className="block mb-4">
                    Käse:
                    <select onChange={(e) => setKaese(e.target.value)} className="border p-2 mt-2 w-full text-black">
                        <option value="">kein Käse</option>
                        {Object.keys(zutaten.kaese).map((kaese) => (
                            <option key={kaese} value={kaese}>
                                {zutaten.kaese[kaese].name}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
            <div className="mb-8">
                <label className="block mb-4">
                    Doppelt Käse:
                    <input
                        type="checkbox"
                        checked={doppelKaese}
                        onChange={(e) => setDoppelKaese(e.target.checked)}
                        className="ml-2"
                    />
                </label>
                <label className="block mb-4">
                    Doppelt Fleisch:
                    <input
                        type="checkbox"
                        checked={doppelFleisch}
                        onChange={(e) => setDoppelFleisch(e.target.checked)}
                        className="ml-2"
                    />
                </label>
                <label className="block mb-4">
                    Footlong:
                    <input
                        type="checkbox"
                        checked={footlong}
                        onChange={(e) => setFootlong(e.target.checked)}
                        className="ml-2"
                    />
                </label>
                <label className="block mb-4">
                    Wrap:
                    <input
                        type="checkbox"
                        checked={wrap}
                        onChange={(e) => setWrap(e.target.checked)}
                        className="ml-2"
                    />
                </label>
                <label className="block mb-4">
                    Bacon:
                    <input
                        type="checkbox"
                        checked={bacon}
                        onChange={(e) => setBacon(e.target.checked)}
                        className="ml-2"
                    />
                </label>
            </div>
            <div className="mb-8">
                <label className="block mb-4">Gemüse:</label>
                {Object.keys(zutaten.gemuese).map((gemuesItem) => (
                    <label key={gemuesItem} className="block mb-2">
                        {zutaten.gemuese[gemuesItem].name}
                        <input
                            type="checkbox"
                            checked={gemuese[gemuesItem]}
                            onChange={(e) =>
                                setGemuese({
                                    ...gemuese,
                                    [gemuesItem]: e.target.checked,
                                })
                            }
                            className="ml-2"
                        />
                    </label>
                ))}
            </div>
            <h2 className="text-xl font-bold mt-8">
                Kalorien deines Subs: {werte.kcal} kcal, {werte.fett} g Fett, {werte.kohlenhydrate} g Kohlenhydrate, {werte.protein} g Protein
            </h2>
        </div>
    );
}
