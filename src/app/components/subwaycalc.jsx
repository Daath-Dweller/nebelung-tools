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

export default function SubwayRechner({ updateUserValues }) {
    const [brot, setBrot] = useState('');
    const [belag, setBelag] = useState('');
    const [sosse, setSosse] = useState('');
    const [kaese, setKaese] = useState('');
    const [doppelKaese, setDoppelKaese] = useState(false);
    const [doppelFleisch, setDoppelFleisch] = useState(false);
    const [footlong, setFootlong] = useState(false);
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
        Roestzwiebeln: false,
        Guacamole: false
    });
    const [subwaySeries, setSubwaySeries] = useState({
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
        Roestzwiebeln: false,
        Guacamole: false
    });

    const handleAllGemueseChange = (checked) => {
        const newGemuese = Object.keys(gemuese).reduce((acc, key) => {
            acc[key] = checked;
            return acc;
        }, {});
        setGemuese(newGemuese);
    };

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

        for (const sseriesItem in subwaySeries) {
            if (subwaySeries[sseriesItem]) {
                werte.kcal += zutaten.subwaySeries[sseriesItem].kcal;
                werte.fett += zutaten.subwaySeries[sseriesItem].fett;
                werte.kohlenhydrate += zutaten.subwaySeries[sseriesItem].kohlenhydrate;
                werte.protein += zutaten.subwaySeries[sseriesItem].protein;
            }
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

    const handleTransferClick = () => {
        updateUserValues({
            kalorien: werte.kcal,
            protein: werte.protein,
            fett: werte.fett,
            kohlenhydrate: werte.kohlenhydrate,
        });
    };

    return (
        <div className="md:p-12 p-4 bg-black text-white">
            <h1 className="md:text-2xl text-sm font-bold md:mb-8">Subway-Kalorien-Rechner</h1>
            <div className="md:mb-8">
                <label className="block md:mb-4">
                    Brotsorte / Wrap:
                    <select onChange={(e) => setBrot(e.target.value)} className="border p-2 mt-2 w-full text-black">
                        <option value="">kein Brot / Salat</option>
                        {Object.keys(zutaten.brot).map((brot) => (
                            <option key={brot} value={brot}>
                                {getDisplayName(zutaten.brot[brot])}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
            <div className="md:mb-8">
                <label className="block md:mb-4">
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
            <div className="md:mb-8">
                <label className="block md:mb-4">
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
            <div className="md:mb-8">
                <label className="block md:mb-4">
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
            <div id="wrapper" className="md:grid md:grid-cols-3 flex flex-col">
                <div id="left">
                    <div className="mb-8">
                        <label className="block md:mb-4 font-extrabold md:text-xl">Gemüse</label>
                        <label className="block md:mb-4">
                            <span>Alles an Gemüse</span>
                            <input
                                type="checkbox"
                                onChange={(e) => handleAllGemueseChange(e.target.checked)}
                                className="md:ml-2 md:w-6 md:h-6 rounded-full bg-gray-500 border-2 border-white checked:bg-gray-700 checked:border-white"
                            />
                        </label>

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
                                    className="md:ml-2 md:w-6 md:h-6 rounded-full bg-gray-500 border-2 border-white checked:bg-gray-700 checked:border-white"
                                />
                            </label>
                        ))}
                    </div>
                </div>
                <div id="right">
                    <div className="md:mb-8">
                        <label className="block md:mb-4 font-extrabold md:text-xl">Sonstiges</label>
                        <label className="block md:mb-4">
                            <span>
                                {getCheckboxDisplayName("Doppelt Käse", zutaten.kaese[kaese])}
                            </span>
                            <input
                                type="checkbox"
                                checked={doppelKaese}
                                onChange={(e) => setDoppelKaese(e.target.checked)}
                                className="md:ml-2 md:w-6 md:h-6 rounded-full bg-gray-500 border-2 border-white checked:bg-gray-700 checked:border-white"
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
                                className="md:ml-2 md:w-6 md:h-6 rounded-full bg-gray-500 border-2 border-white checked:bg-gray-700 checked:border-white"
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
                                className="md:ml-2 md:w-6 md:h-6 rounded-full bg-gray-500 border-2 border-white checked:bg-gray-700 checked:border-white"
                            />
                        </label>
                    </div>
                    <label className="block md:mb-4">
                        <label className="block md:mb-4 font-extrabold md:text-xl">Footlong</label>
                        <span>
                            30-cm-Sub:
                            {brot || belag || sosse || kaese ? `+ ${werte.kcal} kcal` : " keine Auswahl"}
                        </span>
                        <input
                            type="checkbox"
                            checked={footlong}
                            onChange={(e) => setFootlong(e.target.checked)}
                            className="md:ml-2 md:w-6 md:h-6 rounded-full bg-gray-500 border-2 border-white checked:bg-gray-700 checked:border-white"
                        />
                    </label>

                    <label className="block mb-4 font-extrabold text-xl">Subway Series (15 cm, vorzusammengestellt)</label>
                    {Object.keys(zutaten.subwaySeries).map((subwaySeriesItem) => (
                        <label key={subwaySeriesItem} className="block mb-2">
                            {getDisplayName(zutaten.subwaySeries[subwaySeriesItem])}
                            <input
                                type="checkbox"
                                checked={subwaySeries[subwaySeriesItem]}
                                onChange={(e) =>
                                    setSubwaySeries({
                                        ...subwaySeries,
                                        [subwaySeriesItem]: e.target.checked,
                                    })
                                }
                                className="md:ml-2 md:w-6 md:h-6 rounded-full bg-gray-500 border-2 border-white checked:bg-gray-700 checked:border-white"
                            />
                        </label>
                    ))}
                </div>
                <div className="resultWrap">
                <h2 className="md:text-xl font-bold md:mt-8">
                    Kalorien deines Subs: {roundUp(werte.kcal)} kcal, {roundUp(werte.fett)} g
                    Fett, {roundUp(werte.kohlenhydrate)} g Kohlenhydrate, {roundUp(werte.protein)} g Protein
                </h2>
                <button
                    onClick={handleTransferClick}
                    className="md:mt-4 md:p-4 bg-gray-500 text-white border border-white rounded"
                >
                    Übertragen auf Ziel
                </button></div>
            </div>
        </div>
    );
}
