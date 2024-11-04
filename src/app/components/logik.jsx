import React, { useState } from "react";
import { fehlschluesse } from "@/app/data/logik"; // Importiere die Daten

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
        <div className="p-12 bg-black text-white m-3">
            <h1 className="text-2xl font-bold mb-4">Logische Fehlschlüsse & Heuristika</h1>

            <div className="p-12 bg-black text-white">
                <div id="wrapper" className="md:grid md:grid-cols-3 gap-4 flex flex-col">
                    {Object.keys(fehlschluesse).map((category) =>
                        Object.entries(fehlschluesse[category]).map(([key, fehlschluss]) => {
                            // Aktuellen Zustand für jede Karte holen
                            const viewIndex = currentView[key] || 0;

                            // Inhalt und Design je nach State anpassen
                            const content =
                                viewIndex === 0 ? (
                                        <>
                                            {fehlschluss.name}
                                            <br />
                                            {fehlschluss.name2}
                                        </>
                                    ) :
                                    viewIndex === 1 ? `Beispiel: ${fehlschluss.beispiel}` :
                                        <span className="text-sm"><span className="font-extrabold">Erläuterung:</span> {fehlschluss.erlaeuterung}</span>;



                            return (
                                <div
                                    key={key}
                                    className={`relative w-full min-h-80 flex items-center justify-center text-center p-4 m-2 
                                    ${fehlschluss.bgcolor} text-white rounded-lg`}
                                >
                                    <button
                                        onClick={() => flipBackward(key)}
                                        className="absolute left-2 text-black text-xl font-bold bg-gray-200
                                        hover:bg-gray-400 p-2 rounded-full"
                                    >
                                        {"<"}
                                    </button>

                                    <div className="font-bold px-10">{content}</div>

                                    <button
                                        onClick={() => flipForward(key)}
                                        className="absolute right-2 text-black text-xl font-bold
                                        bg-gray-200 hover:bg-gray-400 p-2 rounded-full"
                                    >
                                        {">"}
                                    </button>
                                </div>
                            );
                        })
                    )}
                </div>
            </div>
        </div>
    );
}
