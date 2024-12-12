import { iconMappingTOL } from "../../../data/iconMapping";
import React, { useState } from "react";

export const TaxonomyList = ({ node, onSelect, level }) => {
    // State zum Verfolgen der geöffneten Elemente
    const [expandedItems, setExpandedItems] = useState({});

    // Funktion zum Umschalten des Zustands
    const toggleExpand = (key) => {
        setExpandedItems(prevState => ({
            ...prevState,
            [key]: !prevState[key],
        }));
    };

    return (
        <ul className="list-none text-white font-sans m-2 pl-0">
            {node.children && node.children.map((child, index) => {
                const IconComponent = child.icon ? iconMappingTOL[child.icon] : null;
                const isExpanded = expandedItems[child.name + index]; // Eindeutiger Schlüssel

                return (
                    <li
                        key={`${child.name}-${index}`} // Sicherstellen, dass der Schlüssel eindeutig ist
                        className="mb-3 flex flex-col"
                        aria-label={`Level E${level}: ${child.name}`}
                    >
                        <div className="flex items-center justify-between">
                            {/* Klickbarer Bereich für den Pfad */}
                            <div
                                className={`${child.children ? 'cursor-pointer hover:text-gray-400 flex items-center flex-grow' : 'cursor-default flex items-center flex-grow'}`}
                                onClick={() => child.children && onSelect(child)}
                            >
                                <span className="mr-2 border-2 border-white p-2 select-none flex-shrink-0">
                                    {/* Anzeige der Ebene und des Rangs */}
                                    E{level}: {child.rank ? `${child.rank} ` : ''}
                                </span>
                                <span
                                    className={`border-2 border-white p-2 select-none flex items-center ${!child.children ? 'text-red-500' : ''}`}
                                >
                                    {child.name}
                                </span>
                                {IconComponent && (
                                    <span className="border-2 border-white p-2 select-none flex items-center ml-2">
                                        <IconComponent className="text-2xl" />
                                    </span>
                                )}
                            </div>
                            {/* Separater Info-Button */}
                            {child.info && (
                                <button
                                    className="border-dotted border-white border-2 p-2 rounded-full
                                    text-sm text-gray-400 hover:text-teal-400 focus:outline-none"
                                    onClick={(e) => {
                                        e.stopPropagation(); // Verhindert das Auslösen des onClick des Listenelements
                                        toggleExpand(child.name + index);
                                    }}
                                    aria-label="Info umschalten"
                                >
                                    {isExpanded ? '▲' : '▼'}
                                </button>
                            )}
                        </div>
                        {isExpanded && (
                            <div className="mt-2 p-2 border border-gray-400 rounded bg-gray-800 text-sm ml-4">
                                {child.info}
                            </div>
                        )}
                    </li>
                );
            })}
        </ul>
    );
};
