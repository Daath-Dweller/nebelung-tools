import { useState } from 'react';

const brotKalorien = {
    Italian: 200,
    Vollkorn: 222,
    CheeseOregano: 221,
    HoneyOat: 229,
    Sesam: 223,
};

const belagKalorien = {
    ChickenFajita: 85,
    RoastedChickenBreast: 75,
    ChickenTeriyaki: 97,
    Ham: 66,
    Turkey: 75,
    TurkeyHam: 89,
    TurkeyHamBeef: 95,
    Beef: 84,
    Fajita: 85,
    VeggieDelite: 15,
    BBQ_Rib: 301,
    ItalianBMT: 194,
    Salami: 111,
    TurkeyHamBaconMelt: 170,
    SteakCheese: 127,
    Tuna: 150,
    VeggiePatty: 175,
};

const belagAnzeigenamen = {
    ChickenFajita: 'Chicken Fajita',
    RoastedChickenBreast: 'Roasted Chicken Breast',
    ChickenTeriyaki: 'Chicken Teriyaki',
    Ham: 'Ham',
    Turkey: 'Turkey',
    TurkeyHam: 'Turkey & Ham',
    TurkeyHamBeef: 'Turkey, Ham & Beef',
    Beef: 'Beef',
    Fajita: 'Chicken Fajita',
    VeggieDelite: 'Veggie Delite',
    BBQ_Rib: 'BBQ Rib',
    ItalianBMT: 'Italian BMT®',
    Salami: 'Salami',
    TurkeyHamBaconMelt: 'Turkey, Ham & Bacon Melt',
    SteakCheese: 'Steak & Cheese / Philly Beef',
    Tuna: 'Tuna',
    VeggiePatty: 'Veggie Patty',
};

const sosseKalorien = {
    Asiago: 101,
    ChipotleSouthwest: 90,
    HoneyMustard: 25,
    LiteMayonnaise: 50,
    HotSauce: 21,
    SweetOnion: 46,
    BBQ: 37,
};

const kaeseKalorien = {
    Streichkaese: 27,
    Scheibenkaese: 40,
    Cheddar: 57,
    Mozarella_Mix: 46,
};

const gemueseKalorien = {
    Salat: 1,
    Oliven: 3,
    Paprika: 4,
    Jalapeno: 5,
    Spinat: 2,
    Mais: 12,
    Zwiebel: 3,
    Rucola: 3,
    Gurke: 2,
    Tomate: 4,
    SaureGurke: 7,
    Roestzwiebeln: 30,
    Guacamole: 50,
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

    const berechneKalorien = () => {
        let kalorien = 0;
        kalorien += brot ? brotKalorien[brot] : 0;
        kalorien += belag ? belagKalorien[belag] : 0;
        kalorien += sosse ? sosseKalorien[sosse] : 0;
        kalorien += kaese ? kaeseKalorien[kaese] : 0;

        if (doppelKaese) kalorien += kaeseKalorien[kaese];
        if (doppelFleisch) kalorien += belagKalorien[belag];

        for (const gemuesItem in gemuese) {
            if (gemuese[gemuesItem]) kalorien += gemueseKalorien[gemuesItem];
        }


        if (wrap) kalorien += 328; // Wrap Kalorien
        if (bacon) kalorien += 42; // Bacon Kalorien
        //Footlong immer als letztes
        if (footlong) kalorien *= 2;

        return kalorien;
    };

    return (
        <div className="p-12 bg-black text-white" style={{ margin: '3rem' }}>
            <h1 className="text-2xl font-bold mb-8">Kalorien Rechner</h1>
            <div className="mb-8">
                <label className="block mb-4">
                    Brotsorte:
                    <select onChange={(e) => setBrot(e.target.value)} className="border p-2 mt-2 w-full text-black">
                        <option value="">kein Brot</option>
                        {Object.keys(brotKalorien).map((brot) => (
                            <option key={brot} value={brot}>
                                {brot}
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
                        {Object.keys(belagKalorien).map((belag) => (
                            <option key={belag} value={belag}>
                                {belagAnzeigenamen[belag]}
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
                        {Object.keys(sosseKalorien).map((sosse) => (
                            <option key={sosse} value={sosse}>
                                {sosse}
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
                        {Object.keys(kaeseKalorien).map((kaese) => (
                            <option key={kaese} value={kaese}>
                                {kaese}
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
                {Object.keys(gemueseKalorien).map((gemuesItem) => (
                    <label key={gemuesItem} className="block mb-2">
                        {gemuesItem}
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
            <h2 className="text-xl font-bold mt-8">Kalorien deines Subs: {berechneKalorien()}</h2>
        </div>
    );
}
