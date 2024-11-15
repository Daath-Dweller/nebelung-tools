'use client';
import React, { useState } from "react";
import { categoryDisplayNames, conversions } from "@/data/allcalcdata.ts"; // Passe den Importpfad bei Bedarf an

export default function AllCalc() {
    const categories = [...new Set(Object.values(conversions).map(item => item.category))];

    const [selectedCategory, setSelectedCategory] = useState("length");
    const [leftValue, setLeftValue] = useState("");
    const [rightValue, setRightValue] = useState("");
    const [leftUnit, setLeftUnit] = useState("meter");
    const [rightUnit, setRightUnit] = useState("zentimeter");
    const [lastChangedSide, setLastChangedSide] = useState("left"); // neu

    // Filtere Einheiten basierend auf der ausgewählten Kategorie
    const unitsForSelectedCategory = Object.keys(conversions).filter(
        unit => conversions[unit].category === selectedCategory
    );

    // Hilfsfunktion zur Berechnung des konvertierten Werts
    const convertValue = (inputValue, fromUnit, toUnit) => {
        // Ersetze eventuell vorhandene ',' durch '.' für die korrekte Parse-Funktion
        const normalizedInput = inputValue.replace(',', '.');
        const value = parseFloat(normalizedInput);
        if (isNaN(value)) return "";

        const fromFactor = conversions[fromUnit]?.factor;
        const toFactor = conversions[toUnit]?.factor;

        if (fromFactor === undefined || toFactor === undefined) return "";

        const converted = value * (toFactor / fromFactor);

        return converted;
    };

    // Hilfsfunktion zur Formatierung von Zahlen
    const formatNumber = (number, decimals) => {
        if (number === "" || number === null) return "";
        const formatter = new Intl.NumberFormat('de-DE', {
            minimumFractionDigits: decimals,
            maximumFractionDigits: decimals,
        });
        return formatter.format(number);
    };

    const getDisplayName = (unit) => {
        const unitData = conversions[unit];
        if (unitData?.displayName) {
            return unitData.displayName;
        }
        // Falls kein displayName angegeben ist, beginne den Key groß
        return unit.charAt(0).toUpperCase() + unit.slice(1);
    };

    const handleLeftValueChange = (e) => {
        const value = e.target.value;
        setLeftValue(value);
        const converted = convertValue(value, leftUnit, rightUnit);
        if (converted !== "") {
            setRightValue(converted.toString());
        } else {
            setRightValue("");
        }
        setLastChangedSide("left");
    };

    const handleRightValueChange = (e) => {
        const value = e.target.value;
        setRightValue(value);
        const converted = convertValue(value, rightUnit, leftUnit);
        if (converted !== "") {
            setLeftValue(converted.toString());
        } else {
            setLeftValue("");
        }
        setLastChangedSide("right");
    };

    const handleLeftUnitChange = (e) => {
        const newUnit = e.target.value;
        setLeftUnit(newUnit);
        if (lastChangedSide === "left") {
            // Behalte den Wert der linken Seite bei und konvertiere rechts
            const converted = convertValue(leftValue, newUnit, rightUnit);
            if (converted !== "") {
                setRightValue(converted.toString());
            } else {
                setRightValue("");
            }
        } else {
            // Behalte den Wert der rechten Seite bei und konvertiere links
            const converted = convertValue(rightValue, rightUnit, newUnit);
            if (converted !== "") {
                setLeftValue(converted.toString());
            } else {
                setLeftValue("");
            }
        }
    };

    const handleRightUnitChange = (e) => {
        const newUnit = e.target.value;
        setRightUnit(newUnit);
        if (lastChangedSide === "right") {
            // Behalte den Wert der rechten Seite bei und konvertiere links
            const converted = convertValue(rightValue, newUnit, leftUnit);
            if (converted !== "") {
                setLeftValue(converted.toString());
            } else {
                setLeftValue("");
            }
        } else {
            // Behalte den Wert der linken Seite bei und konvertiere rechts
            const converted = convertValue(leftValue, leftUnit, newUnit);
            if (converted !== "") {
                setRightValue(converted.toString());
            } else {
                setRightValue("");
            }
        }
    };

    const handleCategoryChange = (e) => {
        const newCategory = e.target.value;
        setSelectedCategory(newCategory);

        // Wähle automatisch die erste Einheit in dieser Kategorie
        const defaultUnits = Object.keys(conversions).filter(
            unit => conversions[unit].category === newCategory
        );

        if (defaultUnits.length > 0) {
            setLeftUnit(defaultUnits[0]);
            // Wenn es mindestens zwei Einheiten in der Kategorie gibt, wähle die zweite als Standard für rechts
            // andernfalls nimm die gleiche Einheit wie links
            setRightUnit(defaultUnits[1] || defaultUnits[0]);
        }

        setLeftValue("");
        setRightValue("");
        setLastChangedSide("left");
    };

    return (
        <div className="bg-black m-2 pt-6 pb-4 px-4">
            <h1 className="text-white mb-4">
                OmniMutator (lat. omni = alles, mutare = verändern)
            </h1>
            {/* Kategorie-Pulldown */}
            <div className="mb-4">
                <label className="text-white mr-2">Kategorie:</label>
                <select
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                    className="bg-gray-900 text-white p-2"
                >
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {categoryDisplayNames[category] || category}
                        </option>
                    ))}
                </select>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4">
                <div>
                    <select
                        value={leftUnit}
                        onChange={handleLeftUnitChange}
                        className="bg-gray-900 text-white md:p-2 md:ml-2 m-4"
                    >
                        {unitsForSelectedCategory.map((unit) => (
                            <option key={unit} value={unit}>
                                {getDisplayName(unit)}
                            </option>
                        ))}
                    </select>
                    <input
                        type="text"
                        value={formatNumber(parseFloat(leftValue) || 0, conversions[leftUnit]?.kommastellen)}
                        onChange={handleLeftValueChange}
                        className="bg-gray-800 text-white md:p-2 md:ml-2 m-4"
                        placeholder="0,00"
                    />
                </div>

                <span className="text-white font-extrabold text-3xl">=</span>

                <div>
                    <select
                        value={rightUnit}
                        onChange={handleRightUnitChange}
                        className="bg-gray-900 text-white md:p-2 md:ml-2 m-4"
                    >
                        {unitsForSelectedCategory.map((unit) => (
                            <option key={unit} value={unit}>
                                {getDisplayName(unit)}
                            </option>
                        ))}
                    </select>
                    <input
                        type="text"
                        value={formatNumber(parseFloat(rightValue) || 0, conversions[rightUnit]?.kommastellen)}
                        onChange={handleRightValueChange}
                        className="bg-gray-800 text-white md:p-2 md:ml-2 m-4"
                        placeholder="0,00"
                    />
                </div>
            </div>
        </div>
    );
}
