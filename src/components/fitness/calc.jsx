'use client';
import React, { useState } from "react";
import SubwayRechner from "@/components/fitness/subwaycalc";
import KfcRechner from "@/components/fitness/kfccalc";
import McDRechner from "@/components/fitness/mcdonaldscalc";

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
        const newValue = prompt(`Neuen Wert für ${key} eingeben:`, targetValues[key]);
        if (newValue !== null) {
            setTargetValues({ ...targetValues, [key]: parseFloat(newValue) });
        }
    };

    const updateUserValues = (newValues) => {
        setUserValues((prevValues) => ({
            kalorien: parseFloat((prevValues.kalorien + newValues.kalorien).toFixed(1)),
            protein: parseFloat((prevValues.protein + newValues.protein).toFixed(1)),
            fett: parseFloat((prevValues.fett + newValues.fett).toFixed(1)),
            kohlenhydrate: parseFloat((prevValues.kohlenhydrate + newValues.kohlenhydrate).toFixed(1)),
        }));
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
        <div className="bg-black m-2 pt-6 px-2">
            <div id="navwrap" className="flex md:flex-row justify-center pb-4 mb-2 text-center">
                <ul className="flex md:flex-row flex-col gap-x-2 md:gap-y-0 gap-y-8">
                    <li>
                        <button
                            className={`border-white p-2 border-2 ${activeTab === "Subway" ? "text-black bg-gray-100 hover:bg-gray-800 hover:text-white" : "text-white bg-gray-800  hover:bg-gray-100 hover:text-black"}`}
                            onClick={() => setActiveTab("Subway")}
                        >
                            Subway
                        </button>
                    </li>
                    <li>
                        <button
                            className={`border-white p-2 border-2 ${activeTab === "KFC" ?  "text-black bg-gray-100 hover:bg-gray-800 hover:text-white" : "text-white bg-gray-800  hover:bg-gray-100 hover:text-black"}`}
                            onClick={() => setActiveTab("KFC")}
                        >
                            KFC
                        </button>
                    </li>
                    <li>
                        <button
                            className={`border-white p-2 border-2 ${activeTab === "McDonalds" ?  "text-black bg-gray-100 hover:bg-gray-800 hover:text-white" : "text-white bg-gray-800  hover:bg-gray-100 hover:text-black"}`}
                            onClick={() => setActiveTab("McDonalds")}
                        >
                            McDonalds
                        </button>
                    </li>
                    <li>
                        <button
                            className={`border-white p-2 border-2 ${activeTab === "BK" ?  "text-black bg-gray-100 hover:bg-gray-800 hover:text-white" : "text-white bg-gray-800  hover:bg-gray-100 hover:text-black"}`}
                            onClick={() => setActiveTab("BK")}
                        >
                            BK
                        </button>
                    </li>
                    <li>
                        <button
                            className={`border-white p-2 border-2 ${activeTab === "Nordsee" ?  "text-black bg-gray-100 hover:bg-gray-800 hover:text-white" : "text-white bg-gray-800  hover:bg-gray-100 hover:text-black"}`}
                            onClick={() => setActiveTab("Nordsee")}
                        >
                            Nordsee
                        </button>
                    </li>
                    <li>
                        <button
                            className={`border-white p-2 border-2 ${activeTab === "????" ?  "text-black bg-gray-100 hover:bg-gray-800 hover:text-white" : "text-white bg-gray-800  hover:bg-gray-100 hover:text-black"}`}
                            onClick={() => setActiveTab("????")}
                        >
                            ????
                        </button>
                    </li>
                </ul>
            </div>

            <nav className="bg-black md:p-4 md:flex md:flex-row md:justify-around">
                <div id="valuesNBtns" className="md:flex md:flex-row md:space-x-10 flex flex-col space-x-2">
                    <div id="nutrition" className="text-white md:flex md:flex-row md:space-x-4 md:mb-4 items-center md:m-0 m-2 flex flex-col space-x-2 space-y-2">
                        {["Kalorien", "Protein", "Fett", "Kohlenhydrate"].map((label) => (
                            <div key={label} className="md:flex md:flex-col items-center md:space-y-2 md:m-0 m-2 flex flex-col space-x-2 space-y-2">
                                <div className="flex items-center space-x-2">
                                    <span>{label} (Ziel): </span>
                                    <span
                                        onDoubleClick={() => handleDoubleClick(label.toLowerCase())}
                                        className="cursor-pointer bg-gray-700 text-white p-1 rounded border border-white"
                                    >
                                        {targetValues[label.toLowerCase()]}
                                    </span>
                                    <button
                                        onClick={() => handleDoubleClick(label.toLowerCase())}
                                        className="text-sm bg-gray-600 hover:bg-gray-700 text-white py-1 px-2 rounded"
                                    >
                                        Edit
                                    </button>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <span>Deine {label}: </span>
                                    <span className="bg-gray-700 text-white p-1 rounded border border-white">
                                        {userValues[label.toLowerCase()]} ({calculatePercentage(userValues[label.toLowerCase()], targetValues[label.toLowerCase()])}%)
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between space-x-2 md:p-0 p-4">
                        <button
                            onClick={resetTargetValues}
                            className="text-sm bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded"
                        >
                            Zielwerte <br />zurücksetzen
                        </button>
                        <button
                            onClick={resetUserValues}
                            className="text-sm bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded"
                        >
                            Benutzerwerte <br />zurücksetzen
                        </button>
                    </div>
                </div>
            </nav>
            <div>
                {activeTab === "Subway" && <SubwayRechner updateUserValues={updateUserValues} />}
                {activeTab === "KFC" && <KfcRechner updateUserValues={updateUserValues} />}
                {activeTab === "McDonalds" && <McDRechner updateUserValues={updateUserValues} />}
                {activeTab === "BK" && <div>BK Component</div>}
                {activeTab === "Nordsee" && <div>Nordsee Component</div>}
                {activeTab === "????" && <div>???? Component</div>}
            </div>
        </div>
    );
}
