"use client";
import React, {useState} from "react";
import {Inter} from "next/font/google";
import "./globals.css";
import Link from "next/link";
import {FaBrain, FaTools} from "react-icons/fa";
import {SlSpeech} from "react-icons/sl";
import {IoIosBody} from "react-icons/io";
import {usePathname} from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  // States must be declared within the function
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(null);

  // Current path to highlight active tabs
  const pathname = usePathname();

  // Menu items with corresponding routes
  const menuItems = [
    {
      icon: <FaBrain />,
      label: "Wissen",
      subItems: [{key: "/philoskop", label: "Philoskop", href: "/philoskop"}, {
        key: "/cogitarium",
        label: "Cogitarium",
        href: "/cogitarium"
      }],
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
      subItems: [
        { key: "/politikdach", label: "Parteien-CHAD", href: "/politikdach" },
        { key: "/pkmn", label: "Poké-Tabula", href: "/pkmn" },
        { key: "/omnimutator", label: "Omnimutator", href: "/omnimutator" },
        { key: "/anagram", label: "Anagramm-Generator", href: "/anagram" },
      ],
    },
  ];

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
                            ? "text-gray-100 font-extrabold"
                            : "text-gray-300 font-bold hover:text-gray-100"
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

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-4 ml-4">
            {menuItems.map((menuItem) => {
              const isParentActive = menuItem.subItems.some(
                  (subItem) => pathname === subItem.href
              );

              return (
                  <li key={menuItem.label} className="relative group">
                    <div
                        className={"tracking-wider flex items-center space-x-2 cursor-pointer"}
                    >
                      <span  className={`tracking-wider flex items-center space-x-2 cursor-pointer ${
                          isParentActive
                              ? "text-teal-800 font-bold"
                              : "text-gray-300 font-bold hover:text-gray-100"
                      }`}> {menuItem.icon}</span>
                        <span  className={`tracking-wider flex items-center space-x-2 cursor-pointer ${
                            isParentActive
                                ? "text-white font-bold"
                                : "text-gray-300 font-bold hover:text-gray-100"
                        }`}>{menuItem.label}</span>
                    </div>
                    <ul className="absolute left-0 top-full bg-black hidden group-hover:block z-10 border border-gray-700">
                      {menuItem.subItems.map((subItem) => (
                          <li key={subItem.key}>
                            <Link
                                href={subItem.href}
                                className={`block px-4 py-2 ${
                                    pathname === subItem.href
                                        ? "text-gray-100 font-bold bg-gray-800"
                                        : "text-gray-300 hover:text-gray-100 hover:bg-gray-700"
                                }`}
                            >
                              {subItem.label}
                            </Link>
                          </li>
                      ))}
                    </ul>
                  </li>
              );
            })}
          </ul>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
            <ul className="md:hidden bg-black border-t border-gray-700">
              {menuItems.map((menuItem) => {
                const isParentActive = menuItem.subItems.some(
                    (subItem) => pathname === subItem.href
                );

                return (
                    <li key={menuItem.label} className="border-b border-gray-700">
                      <button
                          onClick={() => {
                            if (openMobileMenu === menuItem.label) {
                              setOpenMobileMenu(null);
                            } else {
                              setOpenMobileMenu(menuItem.label);
                            }
                          }}
                          className={`block w-full text-left px-4 py-2 font-bold flex items-center space-x-2 focus:outline-none ${
                              isParentActive
                                  ? "text-gray-100"
                                  : "text-gray-300 hover:text-gray-100"
                          }`}
                      >
                        {menuItem.icon}
                        <span>{menuItem.label}</span>
                      </button>
                      {openMobileMenu === menuItem.label &&
                          menuItem.subItems.map((subItem) => (
                              <Link
                                  href={subItem.href}
                                  key={subItem.key}
                                  className={`block pl-8 pr-4 py-2 ${
                                      pathname === subItem.href
                                          ? "text-gray-100 font-bold bg-gray-800"
                                          : "text-gray-300 hover:text-gray-100 hover:bg-gray-700"
                                  }`}
                                  onClick={() => setIsMenuOpen(false)} // Close menu
                              >
                                {subItem.label}
                              </Link>
                          ))}
                    </li>
                );
              })}
            </ul>
        )}
      </nav>
      {children}
      </body>
      </html>
  );
}
