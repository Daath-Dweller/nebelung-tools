import {useState} from 'react';
import {produkte} from '@/app/data/kfcdata.ts';

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

    return (
        <div className="p-12 bg-black text-white">
            <h1 className="text-2xl font-bold mb-8">KFC-Kalorien-Rechner</h1>

            <div id="wrapper" className="md:grid md:grid-cols-4 gap-4 flex flex-col">
                {Object.keys(produkte).map((category) =>
                    Object.values(produkte[category]).map((produkt) => (
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
                                    {produkt.fett}g Fett | {produkt.kohlenhydrate}g Kohlenhydrate | {produkt.protein}g
                                    Protein
                                </div>
                                <div className="font-extrabold">{produkt.kcal} kcal</div>
                            </div>
                        </button>
                    ))
                )}
            </div>

            <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">Deine KFC Produkte:</h2>
                <ul>
                    {selectedProducts.map((produkt, index) => (
                        <li key={index}>
                            {produkt.name}: {produkt.kcal} kcal, {produkt.kohlenhydrate}g Kohlenhydrate, {produkt.fett}g
                            Fett, {produkt.protein}g Protein
                        </li>
                    ))}
                </ul>
                <h3 className="text-xl font-bold mt-4">Alle deine Produkte zusammen:</h3>
                <p>
                    {totalValues.kalorien} kcal, {totalValues.kohlenhydrate}g Kohlenhydrate, {totalValues.fett}g
                    Fett, {totalValues.protein}g Protein
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
