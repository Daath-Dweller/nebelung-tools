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

// Funktion zur Anwendung der Ersetzungen basierend auf den Checkbox-Optionen
const applyReplacements = (anagrams, replacements) => {
    return anagrams.map(anagram => {
        let modifiedAnagram = anagram;
        if (replacements.ss) {
            modifiedAnagram = modifiedAnagram.replace(/ß/g, 'ss');
        }
        if (replacements.ae) {
            modifiedAnagram = modifiedAnagram.replace(/ä/g, 'ae');
        }
        if (replacements.ue) {
            modifiedAnagram = modifiedAnagram.replace(/ü/g, 'ue');
        }
        if (replacements.oe) {
            modifiedAnagram = modifiedAnagram.replace(/ö/g, 'oe');
        }
        return modifiedAnagram;
    });
};

const AnagramGenerator = () => {
    const [input, setInput] = useState(''); // State für das Eingabefeld des Hauptwortes
    const [filter, setFilter] = useState(''); // State für das Filtereingabefeld
    const [anagrams, setAnagrams] = useState([]); // State für die Liste der Anagramme
    const [displayLimit, setDisplayLimit] = useState(1000); // Neues State für die Anzeigegrenze
    const [replacements, setReplacements] = useState({
        ss: false,
        ae: false,
        ue: false,
        oe: false
    });

    const handleChangeInput = (event) => {
        const value = event.target.value.replace(/\s+/g, '').toLowerCase(); // Entfernt Leerzeichen und macht alles klein
        setInput(value);
        if (value) {
            const generatedAnagrams = generateAnagrams(value); // Generiert Anagramme für das eingegebene Wort
            setAnagrams(generatedAnagrams);
            setDisplayLimit(1000); // Reset der Anzeigegrenze
        } else {
            setAnagrams([]); // Setzt die Anagrammliste zurück, wenn das Eingabefeld leer ist
            setDisplayLimit(1000); // Reset der Anzeigegrenze
        }
    };

    const handleChangeFilter = (event) => {
        const value = event.target.value.toLowerCase(); // Macht alles klein
        setFilter(value); // Aktualisiert den Filterstate
        setDisplayLimit(500); // Reset der Anzeigegrenze
    };

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setReplacements(prevState => ({
            ...prevState,
            [name]: checked
        }));
        setDisplayLimit(1000); // Reset der Anzeigegrenze
    };

    const handleLoadMore = () => {
        setDisplayLimit(prevLimit => prevLimit + 1000);
    };

    // Filtere und ersetze Anagramme, ohne sie zu begrenzen
    const allFilteredAnagrams = applyReplacements(
        anagrams.filter((anagram) =>
            filter ? anagram.startsWith(filter) : true // Filtert die Anagramme basierend auf dem eingegebenen Filter
        ), replacements
    );

    // Begrenze die angezeigten Anagramme auf die aktuelle Anzeigegrenze
    const displayedAnagrams = allFilteredAnagrams.slice(0, displayLimit);

    return (
        <div className="p-12 bg-black text-white m-3">
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
                className="border p-2 mb-4 w-full text-black"
            />

            <div className="mt-4 mb-4 flex space-x-4">
                <label>
                    <input
                        type="checkbox"
                        name="ss"
                        checked={replacements.ss}
                        onChange={handleCheckboxChange}
                        className="mr-2"
                    />
                    ss anstatt ß
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="ae"
                        checked={replacements.ae}
                        onChange={handleCheckboxChange}
                        className="mr-2"
                    />
                    ae anstatt ä
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="ue"
                        checked={replacements.ue}
                        onChange={handleCheckboxChange}
                        className="mr-2"
                    />
                    ue anstatt ü
                </label>
                <label>
                    <input
                        type="checkbox"
                        name="oe"
                        checked={replacements.oe}
                        onChange={handleCheckboxChange}
                        className="mr-2"
                    />
                    oe anstatt ö
                </label>
            </div>

            <div>
                <h2 className="text-xl mb-2">
                    Gesamtanzahl der möglichen Anagramme: {allFilteredAnagrams.length}
                </h2>
                <h2 className="text-xl mb-2">Mögliche Anagramme:</h2>
                <table className="table-auto border-collapse w-full">
                    <tbody>
                    {displayedAnagrams.length > 0 && (
                        displayedAnagrams.map((anagram, index) => {
                            if (index % 4 === 0) {
                                return (
                                    <tr key={index}>
                                        <td className="border p-2">{anagram}</td>
                                        {displayedAnagrams[index + 1] &&
                                            <td className="border p-2">{displayedAnagrams[index + 1]}</td>}
                                        {displayedAnagrams[index + 2] &&
                                            <td className="border p-2">{displayedAnagrams[index + 2]}</td>}
                                        {displayedAnagrams[index + 3] &&
                                            <td className="border p-2">{displayedAnagrams[index + 3]}</td>}
                                    </tr>
                                );
                            }
                            return null; // Gibt null zurück, wenn der Index nicht durch 4 teilbar ist, um eine neue Zeile zu beginnen
                        })
                    )}
                    </tbody>
                </table>
                {displayLimit < allFilteredAnagrams.length && (
                    <button
                        onClick={handleLoadMore}
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
                    >
                        500 weitere laden
                    </button>
                )}
            </div>

        </div>
    );
};

export default AnagramGenerator;
