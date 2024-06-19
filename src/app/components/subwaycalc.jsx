// SubwayRechner.tsx

import { useState } from 'react';
import { zutaten } from '@/app/data/subwaydata.ts'; // Daten importieren

const getDisplayName = (item) => {
    return `${item.name} | + ${item.kcal} Kcal | + ${item.fett} F | + ${item.kohlenhydrate} KH | + ${item.protein} P`;
};

const getCheckboxDisplayName = (label, item) => {
    if (!item) return `${label}: keine Auswahl`;
    return `${label}: + ${item.kcal} kcal | + ${item.fett} F | + ${item.kohlenhydrate} KH | + ${item.protein} P`;
};

const roundUp = (value) => {
    return Math.ceil(value * 10) / 10;
};

export default function SubwayRechner() {
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
        <div className="p-12 bg-black text-white">
            <h1 className="text-2xl font-bold mb-8">Subway-Kalorien-Rechner</h1>
            <div className="mb-8">
                <label className="block mb-4">
                    Brotsorte:
                    <select onChange={(e) => setBrot(e.target.value)} className="border p-2 mt-2 w-full text-black">
                        <option value="">kein Brot</option>
                        {Object.keys(zutaten.brot).map((brot) => (
                            <option key={brot} value={brot}>
                                {getDisplayName(zutaten.brot[brot])}
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
                                {getDisplayName(zutaten.belag[belag])}
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
                                {getDisplayName(zutaten.sosse[sosse])}
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
                                {getDisplayName(zutaten.kaese[kaese])}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
            <div className="mb-8">
                <label className="block mb-4">
                    <span>
                        {getCheckboxDisplayName("Doppelt Käse", zutaten.kaese[kaese])}
                    </span>
                    <input
                        type="checkbox"
                        checked={doppelKaese}
                        onChange={(e) => setDoppelKaese(e.target.checked)}
                        className="ml-2"
                    />
                </label>
                <label className="block mb-4">
                    <span>
                        {getCheckboxDisplayName("Doppelt Fleisch", zutaten.belag[belag])}
                    </span>
                    <input
                        type="checkbox"
                        checked={doppelFleisch}
                        onChange={(e) => setDoppelFleisch(e.target.checked)}
                        className="ml-2"
                    />
                </label>
                <label className="block mb-4">
                    <span>
                        Footlong:
                        {brot || belag || sosse || kaese ? `+ ${werte.kcal} kcal` : " keine Auswahl"}
                    </span>
                    <input
                        type="checkbox"
                        checked={footlong}
                        onChange={(e) => setFootlong(e.target.checked)}
                        className="ml-2"
                    />
                </label>
                <label className="block mb-4">
                    <span>
                        Wrap:
                        {wrap ? ` + 328 Kcal` : "+ 328 Kcal"}
                    </span>
                    <input
                        type="checkbox"
                        checked={wrap}
                        onChange={(e) => setWrap(e.target.checked)}
                        className="ml-2"
                    />
                </label>
                <label className="block mb-4">
                    <span>
                        Bacon:
                        {bacon ? ` + 42 kcal | + 666 F | + 666 KH | + 666 P` : `+ 42 kcal | + 666 F | + 666 KH | + 666 P`}
                    </span>
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
                        {getDisplayName(zutaten.gemuese[gemuesItem])}
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
                Kalorien deines Subs: {roundUp(werte.kcal)} kcal, {roundUp(werte.fett)} g Fett, {roundUp(werte.kohlenhydrate)} g Kohlenhydrate, {roundUp(werte.protein)} g Protein
            </h2>
        </div>
    );
}
