import React, { useState } from "react";
import { gedankenexperimente } from "@/data/gexperimentdata";

export default function Gedankenexperiment() {
    const experiments = Object.values(gedankenexperimente.gedankenexperimente);

    return (
        <div className="md:p-12 bg-black text-white m-3 text-center rounded-lg shadow-lg">
            <h1 className="text-3xl font-extrabold mb-4 p-4">Cogitarium</h1>
            <p className="text-sm italic mb-8">
                (Von cogitare = „denken“ im Lateinischen, mit der Endung, die an ein
                Gefäß oder einen Ort erinnert – „Ort des Denkens“.)
            </p>
            <h2 className="text-2xl font-bold mt-14 mb-8">Gedankenexperimente</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {experiments.map((experiment) => (
                    <ExperimentCard key={experiment.name} experiment={experiment} />
                ))}
            </div>
        </div>
    );
}

function ExperimentCard({ experiment }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div
            className={`relative p-6 rounded-lg shadow-lg cursor-pointer transform transition duration-500 hover:scale-105 ${experiment.bgcolor}`}
            onClick={() => setIsExpanded(!isExpanded)}
        >
            {/* Hover Info */}
            <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-700 text-white text-xs px-2 py-1 rounded pointer-events-none">
                Für mehr Beispiele und Infos klicken
            </div>

            <h3 className="text-xl font-bold mb-2">{experiment.name}</h3>
            <h4 className="text-md italic mb-2">{experiment.name2}</h4>
            <p className="text-sm mb-2"><strong>Gebiet:</strong> {experiment.gebiet}</p>

            {isExpanded && (
                <div className="mt-4">
                    <p className="text-sm mb-4">{experiment.erlaeuterung}</p>
                    <p className="text-sm mb-4 italic">Simpel erklärt: {experiment.erklaerungFuerFuenf}</p>
                    <p className="text-sm mb-2"><strong>Beispiel:</strong> {experiment.beispiel}</p>
                    <div>
                        <strong>Fragen:</strong>
                        <ul className="list-disc list-inside mt-1">
                            {experiment.fragen.map((frage, index) => (
                                <li key={index} className="text-sm">{frage}</li>
                            ))}
                        </ul>
                    </div>
                    {experiment.name === "Schrödingers Katze" && (
                        <div className="mt-4">
                            <a
                                href="https://i.imgflip.com/4u9jsd.jpg"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 underline"
                            >
                                Meme
                            </a>
<br/>
                            <a
                                href="https://de.wikipedia.org/wiki/Doppelspaltexperiment"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-500 underline"
                            >
                                Wikipedia-Erläuterung
                            </a>


                        </div>
                    )}
                </div>
            )}


        </div>
    );
}
