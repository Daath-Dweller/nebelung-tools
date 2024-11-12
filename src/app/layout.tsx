// app/layout.tsx
"use client";
import React, { useState } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { FaBrain, FaTools } from "react-icons/fa";
import { SlSpeech } from "react-icons/sl";
import { IoIosBody } from "react-icons/io";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  // Zustände müssen innerhalb der Funktion deklariert werden
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});

  // Aktueller Pfad, um aktive Tabs zu markieren
  const pathname = usePathname();

  // Menüelemente mit den entsprechenden Routen
  const menuItems = [
    {
      icon: <FaBrain />,
      label: "Wissen",
      subItems: [{ key: "/philoskop", label: "Philoskop", href: "/philoskop" }],
    },
    {
      icon: <SlSpeech />,
      label: "Sprache",
      subItems: [
        { key: "/logigramm", label: "Logigramm", href: "/logigramm" },
        { key: "/verbastrum", label: "Verbastrum", href: "/verbastrum" },
      ],
    },
    {
      icon: <IoIosBody />,
      label: "Gesundheit",
      subItems: [
        { key: "/kcalrechner", label: "Kalorien-Rechner", href: "/kcalrechner" },
        { key: "/nutritionalmanac", label: "Nutrition-Almanac", href: "/nutritionalmanac" },
      ],
    },
    {
      icon: <FaTools />,
      label: "Sonstige Tools",
      subItems: [  { key: "/politikdach", label: "Parteien DACH", href: "/politikdach" },
        { key: "/anagram", label: "Anagramm-Generator", href: "/anagram" },
        { key: "/pkmn", label: "Pokemontabelle", href: "/pkmn" },
      ],
    },
  ];

  const openMenu = (label: string) => {
    setOpenMenus((prevOpenMenus) => ({
      ...prevOpenMenus,
      [label]: !prevOpenMenus[label],
    }));
  };

  return (
      <html lang="de">
      <body className={inter.className}>
      <nav className="bg-black select-none">
        <div className="md:pl-6 md:pr-12 md:py-12 md:h-28 flex items-center justify-between md:justify-start">
          <div className="ml-4 md:ml-0 w-16 text-center md:text-left">
            <Link href="/">
                <span
                    className={`text-4xl tracking-wider cursor-pointer ${
                        pathname === "/"
                            ? "text-teal-500 font-extrabold"
                            : "text-white font-bold"
                    }`}
                >
                  DA
                </span>
            </Link>
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

          {/* Desktop-Menü */}
          <ul className="hidden md:flex space-x-4 ml-4">
            {menuItems.map((menuItem, index) => (
                <li key={index} className="relative">
                  <button
                      onClick={() => openMenu(menuItem.label)}
                      className="text-white tracking-wider focus:outline-none flex items-center space-x-2"
                  >
                    {menuItem.icon}
                    <span>{menuItem.label}</span>
                  </button>
                  {openMenus[menuItem.label] && (
                      <ul className="absolute left-0 mt-2 bg-black">
                        {menuItem.subItems.map((subItem) => (
                            <li key={subItem.key}>
                              <Link
                                  href={subItem.href}
                                  className={`block px-4 py-2 text-white whitespace-no-wrap cursor-pointer ${
                                      pathname === subItem.href
                                          ? "bg-gray-800"
                                          : "hover:bg-gray-700"
                                  }`}
                                  onClick={() => setOpenMenus({})} // Menü schließen
                              >
                                {subItem.label}
                              </Link>
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
                        <Link
                            href={subItem.href}
                            key={subItem.key}
                            className={`block pl-8 pr-4 py-2 text-white ${
                                pathname === subItem.href ? "bg-gray-800" : ""
                            }`}
                            onClick={() => setIsMenuOpen(false)} // Menü schließen
                        >
                          {subItem.label}
                        </Link>
                    ))}
                  </li>
              ))}
            </ul>
        )}
      </nav>
      {children}
      </body>
      </html>
  );
}
