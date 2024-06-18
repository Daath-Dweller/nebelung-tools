import { useState } from 'react';

const brotKalorien = {
    Italian: 150,
    Vollkorn: 160,
    CheeseOregano: 170,
    HoneyOat: 180,
    Sesam: 140,
};

const belagKalorien = {
    ChickenFajita: 200,
    RoastedChickenBreast: 180,
    ChickenTeriyaki: 220,
    Ham: 100,
    Turkey: 90,
    TurkeyHam: 150,
    TurkeyHamBeef: 180,
    Beef: 200,
    VeggieDelite: 50,
    BBQ_Rib: 240,
    ItalianBMT: 250,
    Salami: 300,
    TurkeyHamBaconMelt: 280,
    SteakCheese: 320,
    Tuna: 250,
    VeggiePatty: 180,
};

const sosseKalorien = {
    Asiago: 50,
    ChipotleSouthwest: 70,
    HoneyMustard: 60,
    LiteMayonnaise: 35,
    HotSauce: 40,
    SweetOnion: 30,
    BBQ: 80,
};

const kaeseKalorien = {
    Streichkaese: 70,
    Scheibenkaese: 50,
    Cheddar: 80,
};

const gemueseKalorien = {
    Salat: 30,
    Oliven: 30,
    Paprika: 30,
    Jalapeno: 30,
    Spinat: 30,
    Mais: 30,
    Zwiebel: 30,
    Rucola: 30,
    Gurke: 30,
    Tomate: 30,
    SaureGurke: 30,
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

        if (footlong) kalorien *= 2;
        if (wrap) kalorien += 150; // Wrap Kalorien

        return kalorien;
    };

    return (
        <div className="p-12 bg-black text-white" style={{ margin: '3rem' }}>
            <h1 className="text-2xl font-bold mb-8">Kalorien Rechner</h1>
            <div className="mb-8">
                <label className="block mb-4">
                    Brotsorte:
                    <select onChange={(e) => setBrot(e.target.value)} className="border p-2 mt-2 w-full text-black">
                        <option value="">Wählen</option>
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
                        <option value="">Wählen</option>
                        {Object.keys(belagKalorien).map((belag) => (
                            <option key={belag} value={belag}>
                                {belag}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
            <div className="mb-8">
                <label className="block mb-4">
                    Sosse:
                    <select onChange={(e) => setSosse(e.target.value)} className="border p-2 mt-2 w-full text-black">
                        <option value="">Wählen</option>
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
                        <option value="">Wählen</option>
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
