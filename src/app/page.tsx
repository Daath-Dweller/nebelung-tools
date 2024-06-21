"use client";
import React, { useState } from "react";
import AnagramGenerator from "@/app/components/anagramgenerator";
import Rechner from "@/app/components/calc";

export default function Home() {
    const [activeTab, setActiveTab] = useState("rechner");

    return (
        <div className="bg-gray-700">
            <nav className="bg-black p-12 h-28 select-none flex items-center">
                <ul className="flex space-x-4 items-center">
                    <li className="relative w-16">
                        <a
                            href="#"
                            className={`text-white text-2xl tracking-wider relative transition-all font-bold duration-300 
                                ${activeTab === "home" ? "text-4xl font-extrabold text-teal-500 -translate-y-2" : ""}`}
                            onClick={() => setActiveTab("home")}
                        >
                            NT
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className={`text-white tracking-wider relative after:absolute after:inset-x-0 after:bottom-[-10px] 
                                after:h-px after:bg-gray-500 after:transform after:scale-x-0 
                                after:origin-center after:transition-transform after:duration-300 
                                ${activeTab === "nutritionalmanac" ? "font-bold after:scale-x-100 hover:after:bg-white" : "hover:after:scale-x-100"}`}
                            onClick={() => setActiveTab("nutritionalmanac")}
                        >
                            Nutrition-Almanac
                        </a>
                    </li>
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
                {activeTab === "home" && "Home"}
                {activeTab === "nutritionalmanac" && "Test"}
                {activeTab === "anagram" && <AnagramGenerator />}
                {activeTab === "rechner" && <Rechner />}
            </div>
        </div>
    );
}
