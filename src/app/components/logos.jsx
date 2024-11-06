import React, { useState } from "react";
import {
    categoryOptions,
    subcategoryOptions,
    themeOptions,
    logosEntries,
} from "@/app/data/logosdata";

export default function Logos() {
    const [categorySelection, setCategorySelection] = useState("");
    const [subcategorySelection, setSubcategorySelection] = useState("");
    const [selectedTheme, setSelectedTheme] = useState("");
    const [selectedJudgment, setSelectedJudgment] = useState(null);

    const handleCategorySelection = (value) => {
        setCategorySelection(value);
        setSubcategorySelection("");
    };

    const handleSubcategorySelection = (e) => {
        setSubcategorySelection(e.target.value);
    };

    const handleThemeSelection = (e) => {
        setSelectedTheme(e.target.value);
    };

    const handleJudgmentSelection = (value) => {
        setSelectedJudgment(value);
    };

    // Angepasste Logik für gefilterte Einträge
    const filteredEntries = Object.entries(logosEntries)
        .filter(([_, entry]) => {
            if (!selectedTheme || selectedJudgment === null) return false;
            const detail = entry.details[selectedTheme];
            if (!detail) return false;
            return detail.position === selectedJudgment;
        })
        .map(([name]) => name)
        .join(" | ");

    return (
        <div className="p-12 bg-black text-white m-3">
            <div className="flex flex-col md:flex-row md:justify-between">
                {/* Linke Seite mit Kategorie und Unterkategorie */}
                <div>
                    <span className="text-l font-bold mb-2">Wer sagt eigentlich was?</span><br />
                    <span className="text-xs">Die 5 Kernfragen der Philosophie: Was ist Wirklichkeit? Was können wir wissen? Wie sollten wir leben?
                        Was ist Bewusstsein? Was ist der Sinn des Lebens?</span><br />

                    {/* Kategorie-Buttons */}
                    <div className="mb-4 mt-4">
                        <label className="block mb-2">Kategorie auswählen:</label>
                        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
                            {categoryOptions.map((option) => (
                                <button
                                    key={option}
                                    onClick={() => handleCategorySelection(option)}
                                    className={`p-2 ${categorySelection === option ? "bg-blue-500" : "bg-gray-600"} 
                                    hover:bg-blue-700 text-white rounded`}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Zweites Dropdown */}
                    {categorySelection && (
                        <div className="mb-4">
                            <label className="block mb-2">Unterkategorie auswählen:</label>
                            <select
                                className="text-black p-2 mr-4"
                                value={subcategorySelection}
                                onChange={handleSubcategorySelection}
                            >
                                <option value="">Bitte auswählen</option>
                                {subcategoryOptions[categorySelection].map((option) => (
                                    <option key={option} value={option}>
                                        {option}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}
                </div>


            </div>

            {/* Beschreibung nach dem zweiten Dropdown */}
            {subcategorySelection && (
                <div className="mt-4 p-4 bg-gray-800 rounded mb-4">
                    <p>{logosEntries[subcategorySelection]?.description}</p>
                </div>
            )}

            {/* Slider und Beschreibungen für jedes Thema */}
            {subcategorySelection && themeOptions.map((theme) => {
                const detail = logosEntries[subcategorySelection]?.details[theme];
                if (!detail) return null; // Überspringen, wenn keine Details für dieses Thema vorhanden sind

                const thumbPosition = detail.position ?? null;
                const thumbIcon = thumbPosition === null
                    ? "?"
                    : thumbPosition === 1
                        ? "👎"
                        : thumbPosition === 2
                            ? "👈"
                            : "👍";
                const thumbStyle = thumbPosition === null
                    ? "left-1/2"
                    : thumbPosition === 1
                        ? "left-[16.66%]"
                        : thumbPosition === 2
                            ? "left-1/2"
                            : "left-[83.33%]";

                return (
                    <div key={theme} className="mb-8">
                        {/* Box um Slider, Thema und Beschreibung */}
                        <div className="p-4 bg-gray-700 border border-dashed border-gray-500 rounded">
                            <h3 className="text-xl font-bold mb-4">{theme}</h3>
                            <div className="mt-4 relative mb-4">
                                <div className="flex h-4 w-full">
                                    <div className="flex-1 bg-red-500"></div>
                                    <div className="flex-1 bg-yellow-200"></div>
                                    <div className="flex-1 bg-green-500"></div>
                                </div>

                                <div
                                    className={`absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 
                                    w-8 h-8 flex items-center justify-center 
                                    bg-black bg-opacity-80 border-2 border-white rounded-full 
                                    shadow-lg ${thumbStyle}`}
                                >
                                    <span className="text-2xl text-white">{thumbIcon}</span>
                                </div>
                            </div>

                            {/* Beschreibungstext */}
                            <div className="mt-4 p-4 bg-gray-800 rounded">
                                <p>{detail.description}</p>
                            </div>
                        </div>
                    </div>
                );
            })}


            {/* Rechte Seite mit Urteilsauswahl */}
            <div className="mt-4 md:mt-0">
                {/* Themenauswahl */}
                <div className="mb-4">
                    <span className="font-extrabold"> Gesamte Datenbank filtern:</span>
                    <label className="block mb-2">Thema auswählen:</label>
                    <select
                        className="text-black p-2 w-full"
                        value={selectedTheme}
                        onChange={handleThemeSelection}
                    >
                        <option value="">Bitte auswählen</option>
                        {themeOptions.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Urteilsauswahl mit Buttons */}
                {selectedTheme && (
                    <div className="mb-4">
                        <label className="block mb-2">Position auswählen:</label>
                        <div className="flex space-x-4">
                            <button
                                onClick={() => handleJudgmentSelection(1)}
                                className={`p-2 ${selectedJudgment === 1 ? "bg-blue-500" : "bg-gray-600"} 
                                    hover:bg-blue-700 text-white rounded flex items-center`}
                            >
                                <span className="text-2xl">👎</span>
                            </button>
                            <button
                                onClick={() => handleJudgmentSelection(2)}
                                className={`p-2 ${selectedJudgment === 2 ? "bg-blue-500" : "bg-gray-600"} 
                                    hover:bg-blue-700 text-white rounded flex items-center`}
                            >
                                <span className="text-2xl">👈</span>
                            </button>
                            <button
                                onClick={() => handleJudgmentSelection(3)}
                                className={`p-2 ${selectedJudgment === 3 ? "bg-blue-500" : "bg-gray-600"} 
                                    hover:bg-blue-700 text-white rounded flex items-center`}
                            >
                                <span className="text-2xl">👍</span>
                            </button>
                        </div>

                    </div>
                )}
                {/* Liste der gefilterten Namen */}
                {selectedTheme && selectedJudgment !== null && (
                    <div className="mt-4 p-4 bg-gray-800 rounded">
                        <p>{filteredEntries || "Keine passenden Einträge gefunden."}</p>
                    </div>
                )}
            </div>
        </div>
    );
}
