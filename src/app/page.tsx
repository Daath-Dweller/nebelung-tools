"use client";
import React, { useState } from "react";
import AnagramGenerator from "@/app/components/anagramgenerator";
import Rechner from "@/app/components/calc";
import NutritianAlmanac from "@/app/components/nutrition-almanac";
import Logik from "@/app/components/logik";
import Logos from "@/app/components/logos";
import Lingua from "@/app/components/lingua";
import About from "@/app/components/about";
import { FaBrain, FaTools } from "react-icons/fa";
import { IoIosBody } from "react-icons/io";
import { SlSpeech } from "react-icons/sl";

export default function Home() {
    const [activeTab, setActiveTab] = useState("logos");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});

    const menuItems = [
        {
            icon: <FaBrain />,
            label: "Wissenschaft",
            subItems: [{ key: "logos", label: "Philoskop" }],
        },
        {
            icon: <SlSpeech />,
            label: "Sprache",
            subItems: [
                { key: "logik", label: "Logigramm" },
                { key: "lingua", label: "Verbastrum" },
            ],
        },
        {
            icon: <IoIosBody />,
            label: "Gesundheit",
            subItems: [
                { key: "rechner", label: "Kalorien-Rechner" },
                { key: "nutritionalmanac", label: "Nutrition-Almanac" },
            ],
        },
        {
            icon: <FaTools />,
            label: "Sonstige Tools",
            subItems: [{ key: "anagram", label: "Anagramm-Generator" }],
        },
    ];

    const openMenu = (label: string) => {
        setOpenMenus({ [label]: true });
    };

    return (
        <div className="bg-gray-700 min-h-screen">
            <nav className="bg-black select-none">
                <div className="md:pl-6 md:pr-12 md:py-12 md:h-28 flex items-center justify-between md:justify-start">
                    <div className="ml-4 md:ml-0 w-16 text-center md:text-left">
                        <a
                            href="#"
                            className={`text-4xl tracking-wider ${
                                activeTab === "home"
                                    ? "text-teal-500 font-extrabold"
                                    : "text-white font-bold"
                            }`}
                            onClick={() => {
                                setActiveTab("home");
                            }}
                        >
                            DA
                        </a>
                    </div>
                    <div className="md:hidden mr-6 mt-4 mb-4">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white focus:outline-none"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
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
                        {menuItems.map((menuItem, index) => (
                            <li key={index} className="relative">
                                <button
                                    onClick={() => openMenu(menuItem.label)}
                                    className="text-white tracking-wider focus:outline-none flex items-center space-x-2" // Flex layout für Icon und Label
                                >
                                    {menuItem.icon}
                                    <span>{menuItem.label}</span>
                                </button>
                                {openMenus[menuItem.label] && (
                                    <ul className="absolute left-0 mt-2 bg-black">
                                        {menuItem.subItems.map((subItem) => (
                                            <li key={subItem.key}>
                                                <a
                                                    href="#"
                                                    className={`block px-4 py-2 text-white whitespace-no-wrap ${
                                                        activeTab === subItem.key
                                                            ? "bg-gray-800"
                                                            : "hover:bg-gray-700"
                                                    }`}
                                                    onClick={() => {
                                                        setActiveTab(subItem.key);
                                                        setOpenMenus({});
                                                    }}
                                                >
                                                    {subItem.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Mobiles Menü */}
                {isMenuOpen && (
                    <ul className="md:hidden bg-black">
                        {menuItems.map((menuItem, index) => (
                            <li key={index} className="border-b border-gray-700">
                                <span className="block px-4 py-2 text-white font-bold flex items-center space-x-2">
                                    {menuItem.icon}
                                    <span>{menuItem.label}</span>
                                </span>
                                {menuItem.subItems.map((subItem) => (
                                    <a
                                        key={subItem.key}
                                        href="#"
                                        className={`block pl-8 pr-4 py-2 text-white ${
                                            activeTab === subItem.key ? "bg-gray-800" : ""
                                        }`}
                                        onClick={() => {
                                            setActiveTab(subItem.key);
                                            setIsMenuOpen(false);
                                        }}
                                    >
                                        {subItem.label}
                                    </a>
                                ))}
                            </li>
                        ))}
                    </ul>
                )}
            </nav>

            {/* Inhalt */}
            <div className="p-4">
                {activeTab === "home" && <About />}
                {activeTab === "nutritionalmanac" && <NutritianAlmanac />}
                {activeTab === "anagram" && <AnagramGenerator />}
                {activeTab === "lingua" && <Lingua />}
                {activeTab === "rechner" && <Rechner />}
                {activeTab === "logik" && <Logik />}
                {activeTab === "logos" && <Logos />}
            </div>
        </div>
    );
}
