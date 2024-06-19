"use client";
import React, { useState } from "react";
import AnagramGenerator from "@/app/components/anagramgenerator";
import Rechner from "@/app/components/calc";

export default function Home() {
  const [activeTab, setActiveTab] = useState("anagram");

  return (
      <div className="bg-gray-700">
        <nav className="bg-black p-4">
          <ul className="flex space-x-4">
            <li>
              <a
                  href="#"
                  className={`text-white ${
                      activeTab === "anagram" ? "underline" : ""
                  }`}
                  onClick={() => setActiveTab("anagram")}
              >
                Anagramm-Generator
              </a>
            </li>
            <li>
              <a
                  href="#"
                  className={`text-white ${
                      activeTab === "rechner" ? "underline" : ""
                  }`}
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
