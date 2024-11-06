import React, { useState } from "react";
import {
    categoryOptions,
    subcategoryOptions,
    themeOptions,
    judgmentOptions,
    logosEntries,
} from "@/app/data/logosdata";

export default function Logos() {
    const [categorySelection, setCategorySelection] = useState("");
    const [subcategorySelection, setSubcategorySelection] = useState("");
    const [judgmentSelection, setJudgmentSelection] = useState("");

    const handleCategorySelection = (value) => {
        setCategorySelection(value);
        setSubcategorySelection("");
        setJudgmentSelection("");
    };

    const handleSubcategorySelection = (e) => {
        setSubcategorySelection(e.target.value);
        setJudgmentSelection("");
    };

    const handleJudgmentSelection = (e) => {
        setJudgmentSelection(e.target.value);
    };

    // Angepasste Logik für gefilterte Einträge
    const filteredEntries = Object.entries(logosEntries)
        .filter(([_, entry]) => {
            if (!subcategorySelection) return false;
            const details = entry.details;
            if (!details) return false;

            // Überprüfen, ob irgendein Thema den ausgewählten Urteilskriterien entspricht
            const matchingThemes = Object.values(details).filter((detail) => {
                if (judgmentSelection === "Klare Ablehnung") return detail.position === 1;
                if (judgmentSelection === "Uneindeutig") return detail.position === 2;
                if (judgmentSelection === "Klare Zustimmung") return detail.position === 3;
                return false;
            });

            return matchingThemes.length > 0;
        })
        .map(([name]) => name)
        .join(" | ");

    return (
        <div className="p-12 bg-black text-white m-3">
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

            {/* Urteilsauswahl */}
            {subcategorySelection && (
                <div className="mb-4 mt-16">
                    <label className="block mb-2">Alle DB-Einträge nach Position filtern:</label>
                    <select
                        className="text-black p-2"
                        value={judgmentSelection}
                        onChange={handleJudgmentSelection}
                    >
                        <option value="">Bitte auswählen</option>
                        {judgmentOptions.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                </div>
            )}

            {/* Liste der gefilterten Namen */}
            {judgmentSelection && (
                <div className="mt-4 p-4 bg-gray-800 rounded">
                    <p>{filteredEntries || "Keine passenden Einträge gefunden."}</p>
                </div>
            )}
        </div>
    );
}
