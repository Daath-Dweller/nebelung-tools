import React, { useState, useEffect } from 'react';
import { naehrstoffe } from '@/app/data/nadata.ts';

const NutritionAlmanac = () => {
    const [popup, setPopup] = useState({ active: false, content: '' });
    const [filters, setFilters] = useState([]);
    const [showAllFilters, setShowAllFilters] = useState(false);
    const [allTags, setAllTags] = useState([]);

    useEffect(() => {
        const tags = new Set();
        naehrstoffe.forEach(item => {
            item.stoffgruppe.forEach(tag => tags.add(tag));
            item.nutzungSport.forEach(tag => tags.add(tag));
        });
        setAllTags([...tags]);
    }, []);

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

    const filteredNaehrstoffe = filters.length > 0
        ? naehrstoffe.filter(n => filters.every(f => (n.stoffgruppe.includes(f) || n.nutzungSport.includes(f))))
        : naehrstoffe;



    const toggleAllFilters = () => setShowAllFilters(!showAllFilters);

    return (
        <div className="p-12 bg-black text-white m-3">
            <h1 className="text-2xl font-bold mb-4">Nutrition Almanac</h1>
            <button onClick={toggleAllFilters} className="bg-blue-500 text-white p-1 mb-4">
                {showAllFilters ? "Weniger Filter anzeigen" : "Alle Filter anzeigen"}
            </button>
            {showAllFilters && (
                <div className="mb-4 grid grid-cols-3 gap-2">
                    {allTags.map(tag => (
                        <span key={tag} className={`cursor-pointer p-1 ${filters.includes(tag) ? 'bg-gray-500' : 'bg-gray-200'} text-white`}
                              onClick={() => toggleFilter(tag)}>
                            {tag}
                        </span>
                    ))}
                </div>
            )}
            <div className="mb-4">
                Aktive Filter: {filters.length > 0 ? filters.map(filter => (
                <span key={filter} className="bg-gray-500 text-white p-1 mr-2 cursor-pointer" onClick={() => toggleFilter(filter)}>
                        {filter}
                    </span>
            )) : 'Keine'}
            </div>
            <table className="w-full border-2 text-left">
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
                                <button key={tag} className="bg-gray-500 text-white p-1 m-1" onClick={() => toggleFilter(tag)}>
                                    {tag}
                                </button>
                            ))}
                        </td>
                        <td className="border-2 p-2">
                            {item.nutzungSport.map(tag => (
                                <button key={tag} className="bg-gray-500 text-white p-1 m-1" onClick={() => toggleFilter(tag)}>
                                    {tag}
                                </button>
                            ))}
                        </td>
                        <td className="border-2 p-2"><button className="bg-gray-300 p-1" onClick={() => handlePopup(item.beschreibung)}>Beschreibung</button></td>
                        <td className="border-2 p-2">{item.vorkommen}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            {popup.active && (
                <div className="absolute top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white text-black p-4">
                        <p>{popup.content}</p>
                        <button className="bg-gray-300 p-1" onClick={closePopup}>Schließen</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NutritionAlmanac;
