import React, { useState } from "react";
import {
    options1,
    options2,
    options3,
    logosEntries,
} from "@/app/data/logosdata"; // Importiere die Daten

export default function Logos() {
    const [firstSelection, setFirstSelection] = useState("");
    const [secondSelection, setSecondSelection] = useState("");
    const [thirdSelection, setThirdSelection] = useState("");

    const handleFirstSelection = (e) => {
        setFirstSelection(e.target.value);
        setSecondSelection("");
        setThirdSelection("");
    };

    const handleSecondSelection = (e) => {
        setSecondSelection(e.target.value);
        setThirdSelection("");
    };

    const handleThirdSelection = (e) => {
        setThirdSelection(e.target.value);
    };

    // Bestimme die Position des Daumens
    const thumbPosition =
        thirdSelection && secondSelection
            ? logosEntries[secondSelection]?.details[thirdSelection]?.position
            : null;

    // Bestimme das Daumensymbol basierend auf der Position
    let thumbIcon = null;
    if (thumbPosition === 1) {
        thumbIcon = "👎"; // Daumen nach unten
    } else if (thumbPosition === 2) {
        thumbIcon = "👈"; // Daumen nach links
    } else if (thumbPosition === 3) {
        thumbIcon = "👍"; // Daumen nach oben
    }

    return (
        <div className="p-12 bg-black text-white m-3">
            <h1 className="text-2xl font-bold mb-4">Logos</h1>

            {/* Erstes Pulldown */}
            <div className="mb-4">
                <label className="block mb-2">Kategorie auswählen:</label>
                <select
                    className="text-black p-2"
                    value={firstSelection}
                    onChange={handleFirstSelection}
                >
                    <option value="">Bitte auswählen</option>
                    {options1.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>

            {/* Zweites Pulldown */}
            {firstSelection && (
                <div className="mb-4">
                    <label className="block mb-2">Option auswählen:</label>
                    <select
                        className="text-black p-2"
                        value={secondSelection}
                        onChange={handleSecondSelection}
                    >
                        <option value="">Bitte auswählen</option>
                        {options2[firstSelection].map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
            )}

            {/* Beschreibung nach Auswahl von Pulldown 2 */}
            {secondSelection && (
                <div className="mt-4 p-4 bg-gray-800 rounded">
                    <p>{logosEntries[secondSelection]?.description}</p>
                </div>
            )}

            {/* Drittes Pulldown */}
            {secondSelection && (
                <div className="mb-4">
                    <label className="block mb-2">Aspekt auswählen:</label>
                    <select
                        className="text-black p-2"
                        value={thirdSelection}
                        onChange={handleThirdSelection}
                    >
                        <option value="">Bitte auswählen</option>
                        {options3.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
            )}

            {/* Slider */}
            <div className="mt-8 relative">
                {/* Slider-Hintergrund */}
                <div className="flex h-10 w-full">
                    <div className="flex-1 bg-red-500"></div>
                    <div className="flex-1 bg-yellow-200"></div> {/* Helleres Gelb */}
                    <div className="flex-1 bg-green-500"></div>
                </div>
                {/* Daumen */}
                {thirdSelection && (
                    <div
                        className="absolute top-1/2"
                        style={{
                            left:
                                thumbPosition === 1
                                    ? "16.66%"
                                    : thumbPosition === 2
                                        ? "50%"
                                        : "83.33%",
                            transform: "translate(-50%, -50%)",
                        }}
                    >
                        <span className="text-4xl">{thumbIcon}</span>
                    </div>
                )}
            </div>

            {/* Beschreibungstext nach Auswahl von Pulldown 3 */}
            {thirdSelection && (
                <div className="mt-4 p-4 bg-gray-800 rounded">
                    <p>
                        {logosEntries[secondSelection]?.details[thirdSelection]?.description}
                    </p>
                </div>
            )}
        </div>
    );
}
