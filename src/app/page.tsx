"use client";
import React, { useState } from "react";
import AnagramGenerator from "@/app/components/anagramgenerator";
import Rechner from "@/app/components/calc";

export default function Home() {
    const [activeTab, setActiveTab] = useState("anagram");

    return (
        <div className="bg-gray-700">
            <nav className="bg-black p-8">
                <ul className="flex space-x-4">
                    <li>
                        <a
                            href="#"
                            className={`text-white tracking-wider relative after:absolute after:inset-x-0 after:bottom-[-10px] 
                                after:h-px after:bg-gray-500 after:transform after:scale-x-0 
                                after:origin-center after:transition-transform after:duration-300 
                                ${activeTab === "anagram" ? "font-bold after:scale-x-100 hover:after:bg-white" : "hover:after:scale-x-100"}`}
                            onClick={() => setActiveTab("anagram")}
                        >
                            Anagramm-Generator
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className={`text-white tracking-wider relative after:absolute after:inset-x-0 after:bottom-[-10px] 
                                after:h-px after:bg-gray-500 after:transform after:scale-x-0 
                                after:origin-center after:transition-transform after:duration-300 
                                ${activeTab === "rechner" ? "font-bold after:scale-x-100 hover:after:bg-white" : "hover:after:scale-x-100"}`}
                            onClick={() => setActiveTab("rechner")}
                        >
                            Kalorien-Rechner
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="p-4">
                {activeTab === "anagram" && <AnagramGenerator />}
                {activeTab === "rechner" && <Rechner />}
            </div>
        </div>
    );
}
