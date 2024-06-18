// src/App.js

import React, { useState } from 'react';

// Funktion zur Generierung aller Anagramme
const generateAnagrams = (str) => {
    if (str.length <= 1) {
        return [str]; // Wenn der String nur einen Buchstaben oder weniger hat, gib den String zurück
    }

    const allAnagrams = [];
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const remainingChars = str.slice(0, i) + str.slice(i + 1); // Entfernt den aktuellen Buchstaben und erstellt den Rest des Strings
        const remainingAnagrams = generateAnagrams(remainingChars); // Generiert Anagramme für den Rest des Strings
        for (const anagram of remainingAnagrams) {
            allAnagrams.push(char + anagram); // Fügt den aktuellen Buchstaben zu jedem der restlichen Anagramme hinzu
        }
    }
    return Array.from(new Set(allAnagrams)); // Entfernt Duplikate und gibt die Anagramme zurück
};

const AnagramGenerator = () => {
    const [input, setInput] = useState(''); // State für das Eingabefeld des Hauptwortes
    const [filter, setFilter] = useState(''); // State für das Filtereingabefeld
    const [anagrams, setAnagrams] = useState([]); // State für die Liste der Anagramme

    const handleChangeInput = (event) => {
        const value = event.target.value;
        setInput(value);
        if (value) {
            const generatedAnagrams = generateAnagrams(value); // Generiert Anagramme für das eingegebene Wort
            setAnagrams(generatedAnagrams);
        } else {
            setAnagrams([]); // Setzt die Anagrammliste zurück, wenn das Eingabefeld leer ist
        }
    };

    const handleChangeFilter = (event) => {
        const value = event.target.value;
        setFilter(value); // Aktualisiert den Filterstate
    };

    const filteredAnagrams = anagrams.filter((anagram) =>
        filter ? anagram.startsWith(filter) : true // Filtert die Anagramme basierend auf dem eingegebenen Filter
    );

    return (
        <div className="p-12 bg-black text-white" style={{ margin: '3rem' }}>
            <h1 className="text-2xl font-bold mb-4">Anagramm-Generator</h1>
            <input
                type="text"
                value={input}
                onChange={handleChangeInput}
                placeholder="Gib ein Wort ein"
                className="border p-2 mb-4 w-full text-black"
            />
            <input
                type="text"
                value={filter}
                onChange={handleChangeFilter}
                placeholder="Filtere nach Buchstaben"
                className="border p-2 mb-4 w-full text-white"
            />
            <div>
                <h2 className="text-xl mb-2">Anzahl der Anagramme: {filteredAnagrams.length}</h2>
                <h2 className="text-xl mb-2">Mögliche Anagramme:</h2>
                <table className="table-auto border-collapse w-full">
                    <tbody>
                    {filteredAnagrams.length > 0 && (
                        filteredAnagrams.map((anagram, index) => {
                            if (index % 4 === 0) {
                                return (
                                    <tr key={index}>
                                        <td className="border p-2">{anagram}</td>
                                        {filteredAnagrams[index + 1] && <td className="border p-2">{filteredAnagrams[index + 1]}</td>}
                                        {filteredAnagrams[index + 2] && <td className="border p-2">{filteredAnagrams[index + 2]}</td>}
                                        {filteredAnagrams[index + 3] && <td className="border p-2">{filteredAnagrams[index + 3]}</td>}
                                    </tr>
                                );
                            }
                            return null; // Gibt null zurück, wenn der Index nicht durch 4 teilbar ist, um eine neue Zeile zu beginnen
                        })
                    )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AnagramGenerator;
