import React from "react";

export const TaxonPath = ({ path, setPath }) => {
    // Holen Sie sich die letzten vier Taxone, ausschliesslich vor dem aktuellen
    const lastFour = path.length > 1 ? path.slice(-5, -1).reverse() : [];

    const handleClick = (index) => {
        // Setze den Pfad bis zu dem geklickten Taxon
        const newPath = path.slice(0, path.length - (lastFour.length - index));
        setPath(newPath);
    };

    return (
        <div className="text-sm text-white mb-2">
            {lastFour.map((node, index) => (
                <span key={index}>
                    <button
                        onClick={() => handleClick(index)}
                        className="text-blue-400 hover:underline focus:outline-none"
                        aria-label={`Gehe zu ${node.name}`}
                    >
                        {node.name}
                    </button>
                    {index < lastFour.length - 1 && ' > '}
                </span>
            ))}
        </div>
    );
};