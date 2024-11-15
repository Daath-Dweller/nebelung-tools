import React, { useState } from "react";
import { fehlschluesse } from "@/data/logikdata"; // Importiere die Daten

export default function Logik() {
    // Zustand für die aktuelle Ansicht pro Fehlschluss initialisieren
    const [currentView, setCurrentView] = useState(
        Object.keys(fehlschluesse).reduce((acc, category) => {
            const categoryData = fehlschluesse[category];
            Object.keys(categoryData).forEach(key => {
                acc[key] = 0; // Startet bei 0 (Name)
            });
            return acc;
        }, {})
    );

    // Funktion zur Erhöhung der Ansicht (Rechtsklick)
    const flipForward = (key) => {
        setCurrentView((prevState) => ({
            ...prevState,
            [key]: (prevState[key] + 1) % 3 // Zyklische Navigation 0 -> 1 -> 2 -> 0
        }));
    };

    // Funktion zur Verringerung der Ansicht (Linksklick)
    const flipBackward = (key) => {
        setCurrentView((prevState) => ({
            ...prevState,
            [key]: (prevState[key] - 1 + 3) % 3 // Zyklische Navigation 2 -> 1 -> 0 -> 2
        }));
    };

    return (
        <div className="md:p-12 bg-black text-white m-3 text-center rounded-lg shadow-lg">
            <span className="text-3xl font-extrabold mb-4 p-4">Logigramm</span><br/>
            <span className="text-sm italic">
                (Logik + griech. gramma, „Geschriebenes“; eine strukturierte Sammlung und Darstellung logischer Prinzipien)
            </span>
            <p className="text-2xl font-bold mt-14 mb-8">Logische Fehlschlüsse & Heuristika</p>

            <div className="p-6 bg-black rounded-lg shadow-inner">
                <div id="wrapper" className="md:grid md:grid-cols-3 gap-6 flex flex-col">
                    {Object.keys(fehlschluesse).map((category) =>
                        Object.entries(fehlschluesse[category]).map(([key, fehlschluss]) => {
                            // Aktuellen Zustand für jede Karte holen
                            const viewIndex = currentView[key] || 0;

                            // Inhalt und Design je nach State anpassen
                            const content =
                                viewIndex === 0 ? (
                                        <div>
                                            <h3 className="text-xl font-semibold">{fehlschluss.name}</h3>
                                            <p className="mt-2">{fehlschluss.name2}</p>
                                        </div>
                                    ) :
                                    viewIndex === 1 ? (
                                        <div>
                                            <h3 className="text-xl font-semibold">Beispiel</h3>
                                            <p className="mt-2">{fehlschluss.beispiel}</p>
                                        </div>
                                    ) : (
                                        <div>
                                            <h3 className="text-xl font-semibold">Erläuterung</h3>
                                            <p className="mt-2 text-sm">{fehlschluss.erlaeuterung}</p>
                                        </div>
                                    );

                            return (
                                <div
                                    key={key}
                                    className={`w-full min-h-80 flex flex-col justify-between text-center p-6 ${fehlschluss.bgcolor || 'bg-gray-700'} select-none text-white rounded-lg shadow-md transition transform hover:scale-105 hover:shadow-xl cursor-pointer`}
                                    onClick={() => flipForward(key)}
                                >
                                    <div className="flex justify-between items-center">
                                        <button
                                            onClick={(e) => { e.stopPropagation(); flipBackward(key); }}
                                            className="text-white text-lg font-bold bg-black hover:bg-gray-500 p-2 rounded-full border-2 border-white"
                                        >
                                            &lt;
                                        </button>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); flipForward(key); }}
                                            className="text-white text-lg font-bold bg-black hover:bg-gray-500 p-2 rounded-full border-2 border-white"
                                        >
                                            &gt;
                                        </button>
                                    </div>
                                    <div className="flex-grow flex items-center justify-center mt-4">
                                        {content}
                                    </div>
                                </div>
                            );
                        })
                    )}
                </div>
            </div>
        </div>
    );
}
