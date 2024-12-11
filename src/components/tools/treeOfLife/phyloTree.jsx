// PhyloTree.jsx
import React from 'react';

const PhyloTree = ({ ancestors, current, descendants, additionalDescendants }) => {
    return (
        <div className="flex flex-col items-center space-y-8">
            {/* Vorfahren-Abschnitt */}
            <div className="flex flex-col items-center">
                {ancestors.map((node, index) => (
                    <div key={index} className="flex flex-col items-center">
                        {/* Linie nach unten */}
                        {index < ancestors.length - 1 && (
                            <div className="w-px h-8 bg-white"></div>
                        )}
                        <div className="w-px h-8 bg-white"></div>
                        <div className="flex items-center justify-center bg-teal-100 text-black
                         border-2 border-white font-bold px-4 py-2 rounded-full shadow">
                            <span className="text-sm">{node.name}</span>

                        </div>
                    </div>
                ))}
            </div>

            {/* Aktueller Node */}
            <div className="flex flex-col items-center">
                {/* Linie nach oben */}
                {ancestors.length > 0 && (
                    <div className="w-px h-8 bg-white"></div>
                )}
                <div className="flex items-center justify-center bg-teal-600 border-2 border-white font-bold  text-white px-4 py-2 rounded-full shadow-lg">
                    <span className="text-base">{current.name}</span>

                </div>
                {/* Linie nach unten, wenn Nachkommen vorhanden */}
                {descendants.length > 0 && (
                    <div className="w-px h-8 bg-white"></div>

                )}
            </div>

            {/* Nachkommen */}
            {descendants.length > 0 && (
                <div className="flex flex-col items-center mt-6">
                    {/* Horizontale Linie */}
                    <div className="flex items-center justify-center relative w-40">
                        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-px bg-white"></div>
                    </div>
                    {/* Zweige der Nachkommen */}
                    <div className="flex space-x-20 mt-6">
                        {descendants.map((child, idx) => (
                            <div key={idx} className="flex flex-col items-center">
                                {/* Vertikale Linie nach unten */}
                                <div className="w-px h-8 bg-white"></div>
                                <div className="flex items-center justify-center bg-teal-900 border-2 border-white font-bold  text-white px-4 py-2 rounded-full shadow">
                                    <span className="text-sm">{child.name}</span>
                                </div>
                            </div>
                        ))}
                        {/* Anzeige für zusätzliche Nachkommen */}
                        {additionalDescendants > 0 && (
                            <div className="flex flex-col items-center">
                                {/* Vertikale Linie nach unten */}
                                <div className="w-px h-8 bg-white"></div>
                                {/* Nicht-anklickbare Anzeige für zusätzliche Kinder */}
                                <div className="flex items-center justify-center bg-gray-600 border-2 border-white font-bold text-white px-4 py-2 rounded-full">
                                    <span className="text-sm">+ {additionalDescendants} mehr</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default PhyloTree;
