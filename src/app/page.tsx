"use client";
import React, { useState } from "react";
import AnagramGenerator from "@/app/components/anagramgenerator";
import Rechner from "@/app/components/calc";
import NutritianAlmanac from "@/app/components/nutrition-almanac";
import Logik from "@/app/components/logik";

export default function Home() {
    const [activeTab, setActiveTab] = useState("rechner");

    return (
        <div className="bg-gray-700">
            <nav className="bg-black pl-6 pr-12 py-12 h-28 select-none flex items-center">
                <ul className="flex space-x-4 items-center">
                    <li className="relative w-16">
                        <a
                            href="#"
                            className={`text-4xl tracking-wider
                                ${activeTab === "home" ? "text-teal-500 font-extrabold" : "text-white font-bold"}`}
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
                                ${activeTab === "nutritionalmanac" ? "font-bold after:scale-x-100 after:bg-white" : "hover:after:scale-x-100"}`}
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
                                ${activeTab === "anagram" ? "font-bold after:scale-x-100 after:bg-white" : "hover:after:scale-x-100"}`}
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
                                ${activeTab === "rechner" ? "font-bold after:scale-x-100 after:bg-white" : "hover:after:scale-x-100"}`}
                            onClick={() => setActiveTab("rechner")}
                        >
                            Kalorien-Rechner
                        </a>
                    </li>
                    <li>
                        <a
                            href="#"
                            className={`text-white tracking-wider relative after:absolute after:inset-x-0 after:bottom-[-10px] 
                                after:h-px after:bg-gray-500 after:transform after:scale-x-0 
                                after:origin-center after:transition-transform after:duration-300 
                                ${activeTab === "logik" ? "font-bold after:scale-x-100 after:bg-white" : "hover:after:scale-x-100"}`}
                            onClick={() => setActiveTab("logik")}
                        >
                            Logik
                        </a>
                    </li>
                </ul>
            </nav>
            <div className="p-4">
                {activeTab === "home" && "Home"}
                {activeTab === "nutritionalmanac" && <NutritianAlmanac/>}
                {activeTab === "anagram" && <AnagramGenerator/>}
                {activeTab === "rechner" && <Rechner/>}
                {activeTab === "logik" && <Logik/>}
            </div>
        </div>
    );
}
