"use client";
import React, { useState, useEffect } from "react";

const NameFilter = ({ setNameFilter }) => {
    const [inputValue, setInputValue] = useState(""); // Wert im Input-Feld
    const [debouncedValue, setDebouncedValue] = useState(""); // Debounceter Wert

    // Verzögerung von 3 Sekunden
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(inputValue);
        }, 1250);

        return () => {
            clearTimeout(handler); // Bereinigen des Timers bei Änderungen
        };
    }, [inputValue]);

    // Aktualisiere den Filter-Wert im Parent-Component
    useEffect(() => {
        setNameFilter(debouncedValue.toLowerCase());
    }, [debouncedValue, setNameFilter]);

    return (
        <div className="flex flex-row items-center align-middle justify-center mt-2">
            <input
                type="text"
                id="nameFilter"
                placeholder="Name eingeben (Suche)"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="p-2 rounded border border-2 border-teal-500 bg-black text-white"
            />
        </div>
    );
};

export default NameFilter;
