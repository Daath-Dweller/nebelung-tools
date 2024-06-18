"use client";
import React, { useState } from "react";
import Link from "next/link";
import AnagramGenerator from "@/app/components/anagramgenerator";
import Rechner from "@/app/components/subwaycalc";

export default function Home() {
  const [activeTab, setActiveTab] = useState("anagram");

  return (
      <div className="bg-white">
        <nav className="bg-gray-800 p-4">
          <ul className="flex space-x-4">
            <li>
              <a
                  href="#"
                  className={`text-white ${
                      activeTab === "anagram" ? "underline" : ""
                  }`}
                  onClick={() => setActiveTab("anagram")}
              >
                Anagram Generator TEST
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
                Rechner
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
