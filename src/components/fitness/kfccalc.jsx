// kfcdata.ts bleibt unverändert

// Komponente KfcRechner
import {useState} from 'react';
import {produkte} from '@/data/kfcdata.ts';

export default function KfcRechner({updateUserValues}) {
    const [selectedProducts, setSelectedProducts] = useState([]);

    const handleProductClick = (produkt) => {
        setSelectedProducts([...selectedProducts, produkt]);
    };

    const handleTransferValues = () => {
        const totalValues = selectedProducts.reduce(
            (acc, produkt) => ({
                kalorien: acc.kalorien + produkt.kcal,
                fett: acc.fett + produkt.fett,
                kohlenhydrate: acc.kohlenhydrate + produkt.kohlenhydrate,
                protein: acc.protein + produkt.protein,
            }),
            {kalorien: 0, fett: 0, kohlenhydrate: 0, protein: 0}
        );
        updateUserValues(totalValues);
    };

    const handleClearProducts = () => {
        setSelectedProducts([]);
    };

    const totalValues = selectedProducts.reduce(
        (acc, produkt) => ({
            kalorien: acc.kalorien + produkt.kcal,
            fett: acc.fett + produkt.fett,
            kohlenhydrate: acc.kohlenhydrate + produkt.kohlenhydrate,
            protein: acc.protein + produkt.protein,
        }),
        {kalorien: 0, fett: 0, kohlenhydrate: 0, protein: 0}
    );

    const totalProteinPer100Kcal = totalValues.kalorien ? (totalValues.protein / (totalValues.kalorien / 100)).toFixed(2) : '0';

    const getCircleColor = (value) => {
        if (value < 5) {
            return 'bg-red-500';
        } else if (value < 10) {
            return 'bg-yellow-500';
        } else {
            return 'bg-green-500';
        }
    };

    return (
        <div className="p-12 bg-black text-white">
            <h1 className="text-2xl font-bold mb-8">KFC-Kalorien-Rechner</h1>

            <div id="wrapper" className="md:grid md:grid-cols-4 gap-4 flex flex-col">
                {Object.keys(produkte).map((category) =>
                    Object.values(produkte[category]).map((produkt) => {
                        const proteinPer100Kcal = produkt.kcal ? (produkt.protein / (produkt.kcal / 100)).toFixed(2) : '0';
                        const circleColorClass = getCircleColor(proteinPer100Kcal);
                        return (
                            <button
                                key={produkt.name}
                                onClick={() => handleProductClick(produkt)}
                                className={`w-full h-32 flex items-center justify-center text-center p-4 m-2 ${
                                    category === 'haehnchen'
                                        ? 'bg-gray-700'
                                        : category === 'burger'
                                            ? 'bg-gray-500'
                                            : category === 'beilagen'
                                                ? 'bg-gray-300 text-black'
                                                : 'bg-gray-100 text-black'
                                }`}
                            >
                                <div>
                                    <div className="font-bold">
                                        {produkt.name}<br/>
                                        {produkt.fett}g F | {produkt.kohlenhydrate}g KH | {produkt.protein}g P
                                    </div>
                                    <div className="font-extrabold">{produkt.kcal} Kcal</div>
                                    <div className={`w-4 h-4 rounded-full inline-block ${circleColorClass}`}></div>
                                </div>
                            </button>
                        );
                    })
                )}
            </div>

            <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">Deine KFC Produkte:</h2>
                <ul>
                    {selectedProducts.map((produkt, index) => {
                        const proteinPer100Kcal = produkt.kcal ? (produkt.protein / (produkt.kcal / 100)).toFixed(2) : '0';
                        const circleColorClass = getCircleColor(proteinPer100Kcal);
                        return (
                            <li key={index} className="flex items-center">
                                {produkt.name}: {produkt.kcal} Kcal, {produkt.kohlenhydrate}g KH, {produkt.fett}g
                                F, {produkt.protein}g P
                                <div className={`w-4 h-4 rounded-full inline-block ${circleColorClass} ml-2`}></div>
                            </li>
                        );
                    })}
                </ul>
                <h3 className="text-xl font-bold mt-4">Alle deine Produkte zusammen:</h3>
                <p>
                    {totalValues.kalorien} Kcal, {totalValues.kohlenhydrate}g KH, {totalValues.fett}g
                    F, {totalValues.protein}g P
                </p>
                <p className="flex items-center">
                    Protein pro 100 Kcal: {totalProteinPer100Kcal}
                    <div className={`w-4 h-4 rounded-full inline-block ${getCircleColor(totalProteinPer100Kcal)} ml-2`}></div>
                </p>
                <button
                    onClick={handleTransferValues}
                    className="mt-4 bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded"
                >
                    Übertrage Userwerte
                </button>
                <button
                    onClick={handleClearProducts}
                    className="mx-4 my-4 bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded"
                >
                    Alle Produkte entfernen
                </button>
            </div>
        </div>
    );
}
