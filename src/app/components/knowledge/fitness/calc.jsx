import React, { useState } from "react";
import SubwayRechner from "@/app/components/knowledge/fitness/subwaycalc";
import KfcRechner from "@/app/components/knowledge/fitness/kfccalc";
import McDRechner from "@/app/components/knowledge/fitness/mcdonaldscalc";

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
        <div className="bg-black">
            <nav className="bg-black md:p-4 md:flex md:flex-row md:justify-between">
                <div id="navwrap" className="md:flex md:flex-col md:space-y-4 flex flex-row justify-center ">
                    <ul className="flex md:space-x-4 space-x-2">
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
                    <ul className="flex md:space-x-4 space-x-2">
                        <li>
                            <a
                                href="#"
                                className={`text-white ${activeTab === "BK" ? "underline" : ""}`}
                                onClick={() => setActiveTab("BK")}
                            >
                                BK
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className={`text-white ${activeTab === "Nordsee" ? "underline" : ""}`}
                                onClick={() => setActiveTab("Nordsee")}
                            >
                                Nordsee
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className={`text-white ${activeTab === "????" ? "underline" : ""}`}
                                onClick={() => setActiveTab("????")}
                            >
                                ????
                            </a>
                        </li>
                    </ul>
                </div>
                <div id="valuesNBtns" className="md:flex md:flex-row md:space-x-4 flex flex-col space-x-2">
                    <div id="nutrition"
                         className="text-white md:flex md:flex-row md:space-x-4 md:mb-4 items-center md:m-0 m-2 flex flex-col space-x-2 space-y-2">
                        {["Kalorien", "Protein", "Fett", "Kohlenhydrate"].map((label) => (
                            <div key={label}
                                 className="md:flex md:flex-col items-center md:space-y-2 md:m-0 m-2 flex flex-col space-x-2 space-y-2">
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
                            </div>))}
                    </div>
                    <div className="flex justify-between space-x-2 md:p-0 p-4">
                        <button
                            onClick={resetTargetValues}
                            className="text-sm bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded"
                        >
                            Zielwerte <br/>zurücksetzen
                        </button>
                        <button
                            onClick={resetUserValues}
                            className="text-sm bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded"
                        >
                            Benutzerwerte <br/>zurücksetzen
                        </button>
                    </div>
                </div>
            </nav>
            <div className="p-4">
                {activeTab === "Subway" && <SubwayRechner updateUserValues={updateUserValues}/>}
                {activeTab === "KFC" && <KfcRechner updateUserValues={updateUserValues}/>}
                {activeTab === "McDonalds" && <McDRechner updateUserValues={updateUserValues}/>}
                {activeTab === "BK" && <div>BK Component</div>}
                {activeTab === "Nordsee" && <div>Nordsee Component</div>}
                {activeTab === "????" && <div>???? Component</div>}
            </div>
        </div>
    );
}
