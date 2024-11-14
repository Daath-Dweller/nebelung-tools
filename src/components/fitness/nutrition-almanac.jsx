import React, { useState, useEffect } from 'react';
import { naehrstoffe } from '@/data/nadata.ts';
import { nutzungGesundheitTags } from "@/data/nadata.ts";

const NutritionAlmanac = () => {
    const [popup, setPopup] = useState({ active: false, content: '' });
    const [filters, setFilters] = useState([]);
    const [showAllFilters, setShowAllFilters] = useState(false);

    // Berechnung von allTags außerhalb von useEffect
    const tags = new Set();
    naehrstoffe.forEach(item => {
        item.stoffgruppe.forEach(tag => tags.add(tag));
        item.nutzungGesundheit.forEach(index => {
            if (index < nutzungGesundheitTags.length) {
                tags.add(nutzungGesundheitTags[index]);
            }
        });
    });
    const allTags = [...tags];

    const handlePopup = (description) => {
        setPopup({ active: true, content: description });
    };

    const closePopup = () => {
        setPopup({ active: false, content: '' });
    };

    const toggleFilter = (tag) => {
        if (filters.includes(tag)) {
            setFilters(filters.filter(f => f !== tag));
        } else {
            setFilters([...filters, tag]);
        }
    };

    const filteredNaehrstoffe = filters.length > 0 ? naehrstoffe.filter(n =>
        filters.every(f =>
            n.stoffgruppe.includes(f) || n.nutzungGesundheit.some(index => nutzungGesundheitTags[index] === f)
        )
    ) : naehrstoffe;

    const toggleAllFilters = () => setShowAllFilters(!showAllFilters);

    return (
        <div className="p-12 bg-black text-white m-3">
            <h1 className="text-2xl font-bold mb-4">Nutrition Almanac</h1>
            <button onClick={toggleAllFilters} className="bg-gray-500 text-white p-1 mb-4 hover:bg-gray-800">
                {showAllFilters ? "Weniger Filter anzeigen" : "Alle Filter anzeigen"}
            </button>
            {showAllFilters && (
                <div className="md:mb-4 md:grid md:grid-cols-3 flex flex-col gap-2">
                    {allTags.map(tag => (
                        <span
                            key={tag}
                            className={`cursor-pointer p-1 ${filters.includes(tag) ? 'bg-gray-700' : 'bg-gray-500'} text-white hover:bg-gray-800`}
                            onClick={() => toggleFilter(tag)}
                        >
                            {tag}
                        </span>
                    ))}
                </div>
            )}
            <div className="mb-4">
                Aktive Filter: {filters.length > 0 ? filters.map(filter => (
                <span
                    key={filter}
                    className="bg-gray-500 text-white p-1 mr-2 cursor-pointer hover:bg-gray-800"
                    onClick={() => toggleFilter(filter)}
                >
                        {filter}
                    </span>
            )) : 'Keine'}
            </div>

            <div id="mobileLayout" className="md:hidden">
                {filteredNaehrstoffe.map((item, index) => (
                    <div key={index} className="border-2">
                        <div className="p-2">
                            <strong>{item.name}</strong>
                        </div>
                        <div className="p-2">
                            <strong>Stoffgruppe (Tags):</strong><br />
                            {item.stoffgruppe.map(tag => (
                                <button
                                    key={tag}
                                    className="bg-gray-500 text-white p-1 m-1 hover:bg-gray-800"
                                    onClick={() => toggleFilter(tag)}
                                >
                                    {tag}
                                </button>
                            ))}
                        </div>
                        <div className="p-2">
                            <strong>Nutzen / Stoffgruppe:</strong><br />
                            {item.nutzungGesundheit.map(index => (
                                <button
                                    key={index}
                                    className="bg-gray-500 text-white p-1 m-1 hover:bg-gray-800"
                                    onClick={() => toggleFilter(nutzungGesundheitTags[index])}
                                >
                                    {nutzungGesundheitTags[index]}
                                </button>
                            ))}
                        </div>
                        <div className="p-2">
                            <button
                                className="bg-gray-300 text-black p-1 hover:bg-gray-800 hover:text-white"
                                onClick={() => handlePopup(item.beschreibung)}
                            >
                                Beschreibung
                            </button>
                        </div>
                        <div className="p-2">
                            <strong>Vorkommen:</strong><br />
                            {item.vorkommen}
                        </div>
                    </div>
                ))}
            </div>

            <table className="md:table hidden w-full border-2 text-left">
                <thead>
                <tr className="border-2 p-2">
                    <th className="border-2 p-2">Bezeichnung</th>
                    <th className="border-2 p-2">Stoffgruppe (Tags)</th>
                    <th className="border-2 p-2">Nutzung (Sport)</th>
                    <th className="border-2 p-2">Beschreibung</th>
                    <th className="border-2 p-2">Vorkommen</th>
                </tr>
                </thead>
                <tbody>
                {filteredNaehrstoffe.map((item, index) => (
                    <tr key={index}>
                        <td className="border-2 p-2">{item.name}</td>
                        <td className="border-2 p-2">
                            {item.stoffgruppe.map(tag => (
                                <button
                                    key={tag}
                                    className="bg-gray-500 text-white p-1 m-1 hover:bg-gray-800"
                                    onClick={() => toggleFilter(tag)}
                                >
                                    {tag}
                                </button>
                            ))}
                        </td>
                        <td className="border-2 p-2">
                            {item.nutzungGesundheit.map(sportIndex => (
                                <button
                                    key={sportIndex}
                                    className="bg-gray-500 text-white p-1 m-1 hover:bg-gray-800"
                                    onClick={() => toggleFilter(nutzungGesundheitTags[sportIndex])}
                                >
                                    {nutzungGesundheitTags[sportIndex]}
                                </button>
                            ))}
                        </td>
                        <td className="border-2 p-2">
                            <button
                                className="bg-gray-300 text-black p-1 hover:bg-gray-800 hover:text-white"
                                onClick={() => handlePopup(item.beschreibung)}
                            >
                                Beschreibung
                            </button>
                        </td>
                        <td className="border-2 p-2">{item.vorkommen}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            {popup.active && (
                <div className="popup-overlay text-center">
                    <div className="popup-content bg-white text-black border-2 p-4 w-2/3">
                        <p>{popup.content}</p>
                        <button className="bg-gray-300 p-2 mt-4 hover:bg-gray-800 hover:text-white rounded" onClick={closePopup}>Schließen</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NutritionAlmanac;
