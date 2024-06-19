import React, { useState } from "react";
import SubwayRechner from "@/app/components/subwaycalc";

export default function Rechner() {
    const [activeTab, setActiveTab] = useState("SubwayRechner");

    return (
        <div className="bg-gray-700">
            <nav className="bg-black p-4">
                <ul className="flex space-x-4">
                    <li>
                        <a
                            href="#"
                            className={`text-white ${
                                activeTab === "SubwayRechner" ? "underline" : ""
                            }`}
                            onClick={() => setActiveTab("SubwayRechner")}
                        >
                            SubwayRechner
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className={`text-white ${
                                activeTab === " KFC-Rechner" ? "underline" : ""
                            }`}
                            onClick={() => setActiveTab(" KFC-Rechner")}
                        >
                           KFC-Rechner
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="p-4">

                {activeTab === "SubwayRechner" && <SubwayRechner />}
            </div>
        </div>
    );
}
