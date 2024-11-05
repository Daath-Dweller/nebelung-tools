import React, { useState } from "react";
import {
    options1,
    options2,
    options3,
    judgmentOptions,
    logosEntries,
} from "@/app/data/logosdata";

export default function Logos() {
    const [firstSelection, setFirstSelection] = useState("");
    const [secondSelection, setSecondSelection] = useState("");
    const [thirdSelection, setThirdSelection] = useState("");
    const [judgmentSelection, setJudgmentSelection] = useState("");

    const handleFirstSelection = (e) => {
        setFirstSelection(e.target.value);
        setSecondSelection("");
        setThirdSelection("");
        setJudgmentSelection("");
    };

    const handleSecondSelection = (e) => {
        setSecondSelection(e.target.value);
        setThirdSelection("");
        setJudgmentSelection("");
    };

    const handleThirdSelection = (e) => {
        setThirdSelection(e.target.value);
        setJudgmentSelection("");
    };

    const handleJudgmentSelection = (e) => {
        setJudgmentSelection(e.target.value);
    };

    const filteredEntries = Object.entries(logosEntries)
        .filter(([_, entry]) => {
            const detail = entry.details[thirdSelection];
            if (!detail) return false;

            if (judgmentSelection === "Klare Ablehnung") return detail.position === 1;
            if (judgmentSelection === "Uneindeutig") return detail.position === 2;
            if (judgmentSelection === "Klare Zustimmung") return detail.position === 3;

            return false;
        })
        .map(([name]) => name)
        .join(", ");

    const thumbPosition =
        thirdSelection && secondSelection
            ? logosEntries[secondSelection]?.details[thirdSelection]?.position
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

            {/* Second Dropdown */}
            {firstSelection && (
                <div className="mb-4">
                    <label className="block mb-2">Unterkategorie auswählen:</label>
                    <select
                        className="text-black p-2 mr-4"
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

            {/* Description after Second Dropdown */}
            {secondSelection && (
                <div className="mt-4 p-4 bg-gray-800 rounded mb-4">
                    <p>{logosEntries[secondSelection]?.description}</p>
                </div>
            )}

            {/* Third Dropdown */}
            {secondSelection && (
                <div className="mb-4">
                    <label className="block mb-2">Thema auswählen:</label>
                    <select
                        className="text-black p-2 mr-4"
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
            <div className="mt-8 relative mb-4">
                <div className="flex h-10 w-full">
                    <div className="flex-1 bg-red-500"></div>
                    <div className="flex-1 bg-yellow-200"></div>
                    <div className="flex-1 bg-green-500"></div>
                </div>

                {thirdSelection && (
                    <div
                        className="absolute top-1/2"
                        style={{
                            left: thumbPosition === 1 ? "16.66%" : thumbPosition === 2 ? "50%" : "83.33%",
                            transform: "translate(-50%, -50%)",
                        }}
                    >
                        <span className="text-4xl">{thumbIcon}</span>
                    </div>
                )}
            </div>

            {/* Description text after Third Dropdown */}
            {thirdSelection && (
                <div className="mt-4 p-4 bg-gray-800 rounded">
                    <p>{logosEntries[secondSelection]?.details[thirdSelection]?.description}</p>
                </div>
            )}

            {/* Judgment Selection */}
            {thirdSelection && (
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
