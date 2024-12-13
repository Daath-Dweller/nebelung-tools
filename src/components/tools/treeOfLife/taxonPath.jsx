import React from "react";

export const TaxonPath = ({ path, setPath }) => {
    // Alle Ebenen ausser der aktuellen
    const nodes = path.length > 1 ? path.slice(1, path.length) : [];

    const handleClick = (index) => {
        const newPath = path.slice(0, index + 1);
        setPath(newPath);
    };

    return (
        <div className="text-sm text-white mb-2">
            {nodes.map((node, index) => (
                <span key={index}>
                    <button
                        onClick={() => handleClick(index)}
                        className="text-blue-400 hover:underline focus:outline-none"
                        aria-label={`Gehe zu ${node.name}`}
                    >
                       <span className="font-bold"> {node.rank}:</span> {node.name}
                    </button>
                    <br/>
                    {index < nodes.length - 1 && ' > '}
                </span>
            ))}
        </div>
    );
};
