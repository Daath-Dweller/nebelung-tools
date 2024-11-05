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
    const [themeSelection, setThemeSelection] = useState("");
    const [judgmentSelection, setJudgmentSelection] = useState("");

    const handleCategorySelection = (e) => {
        setCategorySelection(e.target.value);
        setSubcategorySelection("");
        setThemeSelection("");
        setJudgmentSelection("");
    };

    const handleSubcategorySelection = (e) => {
        setSubcategorySelection(e.target.value);
        setThemeSelection("");
        setJudgmentSelection("");
    };

    const handleThemeSelection = (e) => {
        setThemeSelection(e.target.value);
        setJudgmentSelection("");
    };

    const handleJudgmentSelection = (e) => {
        setJudgmentSelection(e.target.value);
    };

    const filteredEntries = Object.entries(logosEntries)
        .filter(([_, entry]) => {
            const detail = entry.details[themeSelection];
            if (!detail) return false;

            if (judgmentSelection === "Klare Ablehnung") return detail.position === 1;
            if (judgmentSelection === "Uneindeutig") return detail.position === 2;
            if (judgmentSelection === "Klare Zustimmung") return detail.position === 3;

            return false;
        })
        .map(([name]) => name)
        .join(", ");

    const thumbPosition =
        themeSelection && subcategorySelection
            ? logosEntries[subcategorySelection]?.details[themeSelection]?.position
            : null;

    const thumbIcon = thumbPosition === 1 ? "👎" : thumbPosition === 2 ? "👈" : thumbPosition === 3 ? "👍" : null;

    return (
        <div className="p-12 bg-black text-white m-3">
            <h1 className="text-2xl font-bold mb-4">Wer sagt eigentlich was?</h1>

            {/* First Dropdown */}
            <div className="mb-4">
                <label className="block mb-2">Kategorie auswählen:</label>
                <select
                    className="text-black p-2 mr-4"
                    value={categorySelection}
                    onChange={handleCategorySelection}
                >
                    <option value="">Bitte auswählen</option>
                    {categoryOptions.map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>

            {/* Second Dropdown */}
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

            {/* Description after Second Dropdown */}
            {subcategorySelection && (
                <div className="mt-4 p-4 bg-gray-800 rounded mb-4">
                    <p>{logosEntries[subcategorySelection]?.description}</p>
                </div>
            )}

            {/* Third Dropdown */}
            {subcategorySelection && (
                <div className="mb-4">
                    <label className="block mb-2">Thema auswählen:</label>
                    <select
                        className="text-black p-2 mr-4"
                        value={themeSelection}
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
            )}

            {/* Slider */}
            <div className="mt-8 relative mb-4">
                <div className="flex h-10 w-full">
                    <div className="flex-1 bg-red-500"></div>
                    <div className="flex-1 bg-yellow-200"></div>
                    <div className="flex-1 bg-green-500"></div>
                </div>

                {themeSelection && (
                    <div
                        className={`absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 
                w-12 h-12 flex items-center justify-center 
                bg-black bg-opacity-80 border-2 border-white rounded-full 
                shadow-lg ${thumbPosition === 1 ? "left-[16.66%]" : thumbPosition === 2 ? "left-1/2" : "left-[83.33%]"}`}
                    >
                        <span className="text-4xl text-white">{thumbIcon}</span>
                    </div>

                )}
            </div>

            {/* Description text after Third Dropdown */}
            {themeSelection && (
                <div className="mt-4 p-4 bg-gray-800 rounded">
                    <p>{logosEntries[subcategorySelection]?.details[themeSelection]?.description}</p>
                </div>
            )}

            {/* Judgment Selection */}
            {themeSelection && (
                <div className="mb-4 mt-16">
                    <label className="block mb-2">Alle DB-Einträge nach Position zum ausgewählten Aspekt filtern:</label>
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

            {/* List of filtered names */}
            {judgmentSelection && (
                <div className="mt-4 p-4 bg-gray-800 rounded">
                    <p>{filteredEntries || "Keine passenden Einträge gefunden."}</p>
                </div>
            )}
        </div>
    );
}
