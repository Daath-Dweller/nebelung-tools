import React, { useState, useEffect } from "react";
import SubwayRechner from "@/app/components/subwaycalc";
import KfcRechner from "@/app/components/kfccalc";
import McDRechner from "@/app/components/mcdonaldscalc";

export default function Rechner() {
    const [activeTab, setActiveTab] = useState("Subway-Rechner");
    const [targetValues, setTargetValues] = useState({
        kalorien: 0,
        protein: 0,
        fett: 0,
        kohlenhydrate: 0,
    });
    const [userValues, setUserValues] = useState({
        kalorien: 0,
        protein: 0,
        fett: 0,
        kohlenhydrate: 0,
    });

    const handleDoubleClick = (key) => {
        const newValue = prompt(`Enter new value for ${key}`, targetValues[key]);
        if (newValue !== null) {
            setTargetValues({ ...targetValues, [key]: parseFloat(newValue) });
        }
    };

    const updateUserValues = (newValues) => {
        setUserValues(newValues);
    };

    useEffect(() => {
        const calculateUserValues = () => {
            // Beispielwerte, hier sollte die eigentliche Berechnungslogik eingefügt werden
            const exampleUserValues = {
                kalorien: 0,
                protein: 0,
                fett: 0,
                kohlenhydrate: 0,
            };
            setUserValues(exampleUserValues);
        };
        calculateUserValues();
    }, [targetValues]);

    const calculatePercentage = (userValue, targetValue) => {
        return targetValue === 0 ? 0 : ((userValue / targetValue) * 100).toFixed(2);
    };

    return (
        <div className="bg-gray-700">
            <nav className="bg-black p-4">
                <div id="navwrap" className="flex flex-row justify-between">
                    <ul className="flex space-x-4">
                        <li>
                            <a
                                href="#"
                                className={`text-white ${activeTab === "Subway-Rechner" ? "underline" : ""}`}
                                onClick={() => setActiveTab("Subway-Rechner")}
                            >
                                Subway-Rechner
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className={`text-white ${activeTab === "KFC-Rechner" ? "underline" : ""}`}
                                onClick={() => setActiveTab("KFC-Rechner")}
                            >
                                KFC-Rechner
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className={`text-white ${activeTab === "Mc-Donalds-Rechner" ? "underline" : ""}`}
                                onClick={() => setActiveTab("Mc-Donalds-Rechner")}
                            >
                                Mc-Donalds-Rechner
                            </a>
                        </li>
                    </ul>
                    <div id="nutrition" className="text-white flex space-x-4 mb-4 items-center">
                        {["Kalorien", "Protein", "Fett", "Kohlenhydrate"].map((label) => (
                            <div key={label} className="flex flex-col items-center space-y-2">
                                <div className="flex items-center space-x-2">
                                    <span>{label} (Ziel): </span>
                                    <span
                                        onDoubleClick={() => handleDoubleClick(label.toLowerCase())}
                                        className="cursor-pointer bg-gray-300 text-black p-1 rounded border border-white"
                                    >
                                        {targetValues[label.toLowerCase()]}
                                    </span>
                                    <button
                                        onClick={() => handleDoubleClick(label.toLowerCase())}
                                        className="text-sm bg-blue-500 hover:bg-blue-700 text-white py-1 px-2 rounded"
                                    >
                                        Edit
                                    </button>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span>Deine {label}: </span>
                                    <span className="bg-gray-300 text-black p-1 rounded border border-white">
                                        {userValues[label.toLowerCase()]} ({calculatePercentage(userValues[label.toLowerCase()], targetValues[label.toLowerCase()])}%)
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </nav>
            <div className="p-4">
                {activeTab === "Subway-Rechner" && <SubwayRechner updateUserValues={updateUserValues} />}
                {activeTab === "KFC-Rechner" && <KfcRechner />}
                {activeTab === "Mc-Donalds-Rechner" && <McDRechner />}
            </div>
        </div>
    );
}
