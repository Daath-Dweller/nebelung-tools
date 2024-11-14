import {useEffect, useState} from 'react';
import { zutaten } from '@/data/subwaydata.ts'; // Daten importieren

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

const getCircleColor = (value) => {
    if (value < 5) {
        return 'bg-red-500';
    } else if (value < 10) {
        return 'bg-yellow-500';
    } else {
        return 'bg-green-500';
    }
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

    const initialGemueseState = Object.fromEntries(Object.keys(zutaten.gemuese).map(key => [key, false]));
    const [gemuese, setGemuese] = useState(initialGemueseState);

    const initialSubwaySeriesState = Object.fromEntries(Object.keys(zutaten.subwaySeries).map(key => [key, false]));
    const [subwaySeries, setSubwaySeries] = useState(initialSubwaySeriesState);
    const [subwaySeriesExpanded, setSubwaySeriesExpanded] = useState(false);
    const [footlongSeries, setFootlongSeries] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // Client-only Logik
        }
    }, []);

    const handleAllGemueseChange = (checked) => {
        const newGemuese = Object.keys(gemuese).reduce((acc, key) => {
            acc[key] = checked;
            return acc;
        }, {});
        setGemuese(newGemuese);
    };

    const berechneWerte = () => {
        let werte = { kcal: 0, fett: 0, kohlenhydrate: 0, protein: 0 };

        if (!subwaySeriesExpanded) {
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

            if (bacon) {
                werte.kcal += 42; // Bacon Kalorien
                werte.fett += 2.9;
                werte.kohlenhydrate += 0.2;
                werte.protein += 3.4;
            }

            if (footlong) {
                werte.kcal *= 2;
                werte.fett *= 2;
                werte.kohlenhydrate *= 2;
                werte.protein *= 2;
            }
        }

        if (subwaySeriesExpanded) {
            for (const sseriesItem in subwaySeries) {
                if (subwaySeries[sseriesItem]) {
                    werte.kcal += zutaten.subwaySeries[sseriesItem].kcal;
                    werte.fett += zutaten.subwaySeries[sseriesItem].fett;
                    werte.kohlenhydrate += zutaten.subwaySeries[sseriesItem].kohlenhydrate;
                    werte.protein += zutaten.subwaySeries[sseriesItem].protein;
                }
            }

            if (footlongSeries) {
                werte.kcal *= 2;
                werte.fett *= 2;
                werte.kohlenhydrate *= 2;
                werte.protein *= 2;
            }
        }

        return werte;
    };

    const werte = berechneWerte();
    const proteinPer100Kcal = werte.kcal ? (werte.protein / (werte.kcal / 100)).toFixed(2) : '0';
    const circleColorClass = getCircleColor(proteinPer100Kcal);

    const handleTransferClick = () => {
        updateUserValues({
            kalorien: werte.kcal,
            protein: werte.protein,
            fett: werte.fett,
            kohlenhydrate: werte.kohlenhydrate,
        });
    };



    const resetAll = () => {
        setBrot('');
        setBelag('');
        setSosse('');
        setKaese('');
        setDoppelKaese(false);
        setDoppelFleisch(false);
        setFootlong(false);
        setBacon(false);
        setGemuese(initialGemueseState);
        setSubwaySeries(initialSubwaySeriesState);
        setSubwaySeriesExpanded(false);
        setFootlongSeries(false);
    };


    return (
        <div className="md:p-12 p-4 bg-black text-white">
            <div className="flex md:flex-row md:justify-around flex-col">
                <div className="mb-8">
                    <button
                        onClick={() => setSubwaySeriesExpanded(true)}
                        className={`block font-extrabold text-xl mb-4 w-full p-2 border-2 text-left rounded
        ${subwaySeriesExpanded ? "bg-gray-100 text-black" : "hover:bg-gray-900 hover:text-white bg-gray-700 text-gray-500"}`}
                    >
                        Subway Series (vorzusammengestellt)&nbsp;
                        <span className="float-right">
        {subwaySeriesExpanded ? '▲' : ''}
      </span>
                    </button>
                </div>

                <div className="mb-8">
                    <button
                        onClick={() => setSubwaySeriesExpanded(false)}
                        className={`block font-extrabold text-xl mb-4 w-full p-2 border-2 text-left rounded
        ${!subwaySeriesExpanded ? "bg-gray-100 text-black" : "hover:bg-gray-900 hover:text-white bg-gray-700 text-gray-500"}`}
                    >
                        Selbst zusammenstellen&nbsp;
                        <span className="float-right">
        {!subwaySeriesExpanded ? '▲' : ''}
      </span>
                    </button>
                </div>
            </div>


            {subwaySeriesExpanded && (
                <div className="mb-8">

                    <div>
                        {Object.keys(zutaten.subwaySeries).map((subwaySeriesItem) => (
                            <label key={subwaySeriesItem} className="flex items-center space-x-2 mb-2">
                                <input
                                    type="checkbox"
                                    checked={subwaySeries[subwaySeriesItem]}
                                    onChange={(e) =>
                                        setSubwaySeries({
                                            ...subwaySeries,
                                            [subwaySeriesItem]: e.target.checked,
                                        })
                                    }
                                    className="w-6 h-6 rounded-full bg-gray-500 border-2 border-white checked:bg-gray-700 checked:border-white"
                                />
                                <span>{getDisplayName(zutaten.subwaySeries[subwaySeriesItem])}</span>
                            </label>
                        ))}
                        <label className="flex items-center space-x-2 mt-4">
                            <input
                                type="checkbox"
                                checked={footlongSeries}
                                onChange={(e) => setFootlongSeries(e.target.checked)}
                                className="w-6 h-6 rounded-full bg-gray-500 border-2 border-white checked:bg-gray-700 checked:border-white"
                            />
                            <span>
Footlong (30-cm-Sub)</span>
                        </label>
                    </div>
                </div>
            )}


            {!subwaySeriesExpanded && (
                <div className="md:flex md:items-center md:space-x-2 md:mt-4">
                    <div className="md:mb-8">
                        <label className="block md:mb-4">
                            Brotsorte / Wrap:
                            <select
                                onChange={(e) => setBrot(e.target.value)}
                                className="border p-2 mt-2 w-full text-black"
                                value={brot}
                            >
                                <option value="">kein Brot / Salat</option>
                                {Object.keys(zutaten.brot).map((brotKey) => (
                                    <option key={brotKey} value={brotKey}>
                                        {getDisplayName(zutaten.brot[brotKey])}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>
                    <div className="md:mb-8 ">
                        <label className="block md:mb-4">
                            Belag:
                            <select
                                onChange={(e) => setBelag(e.target.value)}
                                className="border p-2 mt-2 w-full text-black"
                                value={belag}
                            >
                                <option value="">kein Belag</option>
                                {Object.keys(zutaten.belag).map((belagKey) => (
                                    <option key={belagKey} value={belagKey}>
                                        {getDisplayName(zutaten.belag[belagKey])}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>
                    <div className="md:mb-8 ">
                        <label className="block md:mb-4">
                            Sosse:
                            <select
                                onChange={(e) => setSosse(e.target.value)}
                                className="border p-2 mt-2 w-full text-black"
                                value={sosse}
                            >
                                <option value="">keine Sosse</option>
                                {Object.keys(zutaten.sosse).map((sosseKey) => (
                                    <option key={sosseKey} value={sosseKey}>
                                        {getDisplayName(zutaten.sosse[sosseKey])}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>
                    <div className="md:mb-8">
                        <label className="block md:mb-4">
                            Käse:
                            <select
                                onChange={(e) => setKaese(e.target.value)}
                                className="border p-2 mt-2 w-full text-black"
                                value={kaese}
                            >
                                <option value="">kein Käse</option>
                                {Object.keys(zutaten.kaese).map((kaeseKey) => (
                                    <option key={kaeseKey} value={kaeseKey}>
                                        {getDisplayName(zutaten.kaese[kaeseKey])}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>
                </div>
            )}
            <div id="wrapper" className="md:grid md:grid-cols-3 gap-8">
                {!subwaySeriesExpanded && (
                    <div id="left">
                        <div className="mb-8">
                            <label className="block font-extrabold md:text-xl mb-4 mt-2">Gemüse</label>
                            <label className="flex items-center space-x-2 mb-4">
                                <input
                                    type="checkbox"
                                    onChange={(e) => handleAllGemueseChange(e.target.checked)}
                                    className="w-6 h-6 rounded-full bg-gray-500 border-2 border-white checked:bg-gray-700 checked:border-white"
                                />
                                <span>Alles an Gemüse</span>
                            </label>

                            {Object.keys(zutaten.gemuese).map((gemuesItem) => (
                                <label key={gemuesItem} className="flex items-center space-x-2 mb-2">
                                    <input
                                        type="checkbox"
                                        checked={gemuese[gemuesItem]}
                                        onChange={(e) =>
                                            setGemuese({
                                                ...gemuese,
                                                [gemuesItem]: e.target.checked,
                                            })
                                        }
                                        className="w-6 h-6 rounded-full bg-gray-500 border-2 border-white checked:bg-gray-700 checked:border-white"
                                    />
                                    <span>{getDisplayName(zutaten.gemuese[gemuesItem])}</span>
                                </label>
                            ))}
                        </div>
                    </div>
                )}
                {!subwaySeriesExpanded && (
                    <div id="middle">
                        <div className="mb-8">
                            <label className="block font-extrabold md:text-xl mb-4 mt-2">Sonstiges</label>
                            <label className="flex items-center space-x-2 mb-4">
                                <input
                                    type="checkbox"
                                    checked={doppelKaese}
                                    onChange={(e) => setDoppelKaese(e.target.checked)}
                                    className="w-6 h-6 rounded-full bg-gray-500 border-2 border-white checked:bg-gray-700 checked:border-white"
                                />
                                <span>
                                    {getCheckboxDisplayName("Doppelt Käse", zutaten.kaese[kaese])}
                                </span>
                            </label>
                            <label className="flex items-center space-x-2 mb-4">
                                <input
                                    type="checkbox"
                                    checked={doppelFleisch}
                                    onChange={(e) => setDoppelFleisch(e.target.checked)}
                                    className="w-6 h-6 rounded-full bg-gray-500 border-2 border-white checked:bg-gray-700 checked:border-white"
                                />
                                <span>
                                    {getCheckboxDisplayName("Doppelt Fleisch", zutaten.belag[belag])}
                                </span>
                            </label>
                            <label className="flex items-center space-x-2 mb-4">
                                <input
                                    type="checkbox"
                                    checked={bacon}
                                    onChange={(e) => setBacon(e.target.checked)}
                                    className="w-6 h-6 rounded-full bg-gray-500 border-2 border-white checked:bg-gray-700 checked:border-white"
                                />
                                <span>
                                    Bacon: + 42 kcal | + 2.9 F | + 0.2 KH | + 3.2 P
                                </span>
                            </label>
                            <label className="flex items-center space-x-2 mb-4">
                                <input
                                    type="checkbox"
                                    checked={footlong}
                                    onChange={(e) => setFootlong(e.target.checked)}
                                    className="w-6 h-6 rounded-full bg-gray-500 border-2 border-white checked:bg-gray-700 checked:border-white"
                                />
                                <span>
                                    Footlong (30-cm-Sub)
                                </span>
                            </label>
                        </div>

                    </div>
                )}

                <div id="right">
                    <div className="mb-8">
                        <h2 className="text-xl font-bold mb-4 mt-2">
                            Kalorien deines Subs:
                        </h2>
                        <p className="mb-4">
                            {roundUp(werte.kcal)} kcal, {roundUp(werte.fett)} g Fett, {roundUp(werte.kohlenhydrate)} g
                            Kohlenhydrate, {roundUp(werte.protein)} g Protein
                            <span className={`w-4 h-4 rounded-full inline-block ${circleColorClass} ml-2`}></span>
                        </p>
                        <button
                            onClick={handleTransferClick}
                            className="m-2 p-4 bg-gray-500 text-white border border-white rounded"
                        >
                            Übertragen auf Nutzerwerte
                        </button>
                        <button
                            onClick={resetAll}
                            className="m-2 p-4 bg-red-500 text-white border border-white rounded"
                        >
                            Zurücksetzen
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
