"use client";
import React, { useState } from "react";
import AnagramGenerator from "@/app/components/anagramgenerator";
import Rechner from "@/app/components/calc";
import NutritianAlmanac from "@/app/components/nutrition-almanac";
import Logik from "@/app/components/logik";
import Logos from "@/app/components/logos";

export default function Home() {
    const [activeTab, setActiveTab] = useState("logos");
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

    return (
        <div className="bg-gray-700 min-h-screen">
            {/* Navigation */}
            <nav className="bg-black select-none">
                <div className="md:pl-6 md:pr-12 md:py-12 md:h-28 flex items-center justify-between md:justify-start">
                    {/* Logo */}
                    <div className="w-16 text-center md:text-left">
                        <a
                            href="#"
                            className={`text-4xl tracking-wider ${
                                activeTab === "home"
                                    ? "text-teal-500 font-extrabold"
                                    : "text-white font-bold"
                            }`}
                            onClick={() => setActiveTab("home")}
                        >
                            NT
                        </a>
                    </div>

                    {/* Hamburger Icon */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white focus:outline-none"
                        >
                            {/* Simple Hamburger Icon */}
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-4 ml-4">
                        {/* Menu Items */}
                        {["logos", "logik", "rechner", "nutritionalmanac", "anagram"].map(
                            (tab) => (
                                <li key={tab}>
                                    <a
                                        href="#"
                                        className={`text-white tracking-wider relative after:absolute after:inset-x-0 after:bottom-[-10px] 
                                        after:h-px after:bg-gray-500 after:transform after:scale-x-0 
                                        after:origin-center after:transition-transform after:duration-300 
                                        ${
                                            activeTab === tab
                                                ? "font-bold after:scale-x-100 after:bg-white"
                                                : "hover:after:scale-x-100"
                                        }`}
                                        onClick={() => setActiveTab(tab)}
                                    >
                                        {tab === "logos"
                                            ? "PhiloScope"
                                            : tab === "logik"
                                                ? "Sprachlogik"
                                                : tab === "rechner"
                                                    ? "Kalorien-Rechner"
                                                    : tab === "nutritionalmanac"
                                                        ? "Nutrition-Almanac"
                                                        : "Anagramm-Generator"}
                                    </a>
                                </li>
                            )
                        )}
                    </ul>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <ul className="md:hidden bg-black">
                        {/* Menu Items */}
                        {["logos", "logik", "rechner", "nutritionalmanac", "anagram"].map(
                            (tab) => (
                                <li key={tab} className="border-b border-gray-700">
                                    <a
                                        href="#"
                                        className={`block px-4 py-2 text-white ${
                                            activeTab === tab ? "bg-gray-800" : ""
                                        }`}
                                        onClick={() => {
                                            setActiveTab(tab);
                                            setIsMenuOpen(false); // Close menu after selection
                                        }}
                                    >
                                        {tab === "logos"
                                            ? "PhiloScope"
                                            : tab === "logik"
                                                ? "Sprachlogik"
                                                : tab === "rechner"
                                                    ? "Kalorien-Rechner"
                                                    : tab === "nutritionalmanac"
                                                        ? "Nutrition-Almanac"
                                                        : "Anagramm-Generator"}
                                    </a>
                                </li>
                            )
                        )}
                    </ul>
                )}
            </nav>

            {/* Content */}
            <div className="p-4">
                {activeTab === "home" && "Home"}
                {activeTab === "nutritionalmanac" && <NutritianAlmanac />}
                {activeTab === "anagram" && <AnagramGenerator />}
                {activeTab === "rechner" && <Rechner />}
                {activeTab === "logik" && <Logik />}
                {activeTab === "logos" && <Logos />}
            </div>
        </div>
    );
}
