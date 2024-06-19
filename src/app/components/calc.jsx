import React, { useState, useEffect } from "react";
import SubwayRechner from "@/app/components/subwaycalc";
import KfcRechner from "@/app/components/kfccalc";
import McDRechner from "@/app/components/mcdonaldscalc";

export default function Rechner() {
    const [activeTab, setActiveTab] = useState("Subway");
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

    const resetTargetValues = () => {
        setTargetValues({
            kalorien: 0,
            protein: 0,
            fett: 0,
            kohlenhydrate: 0,
        });
    };

    const resetUserValues = () => {
        setUserValues({
            kalorien: 0,
            protein: 0,
            fett: 0,
            kohlenhydrate: 0,
        });
    };

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
                                className={`text-white ${activeTab === "Subway" ? "underline" : ""}`}
                                onClick={() => setActiveTab("Subway")}
                            >
                                Subway
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className={`text-white ${activeTab === "KFC" ? "underline" : ""}`}
                                onClick={() => setActiveTab("KFC")}
                            >
                                KFC
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className={`text-white ${activeTab === "McDonalds" ? "underline" : ""}`}
                                onClick={() => setActiveTab("McDonalds")}
                            >
                                McDonalds
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
                        <button
                            onClick={resetTargetValues}
                            className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded"
                        >
                            Zielwerte<br/> zurücksetzen
                        </button>
                        <button
                            onClick={resetUserValues}
                            className="text-sm bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded"
                        >
                            Benutzerwerte <br/>zurücksetzen
                        </button>
                    </div>

                </div>

            </nav>
            <div className="p-4">
                {activeTab === "Subway" && <SubwayRechner updateUserValues={updateUserValues}/>}
                {activeTab === "KFC" && <KfcRechner/>}
                {activeTab === "McDonalds" && <McDRechner/>}
                <div className="flex justify-between mt-4">

                </div>
            </div>
        </div>
    );
}
