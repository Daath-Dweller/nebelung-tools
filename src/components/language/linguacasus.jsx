// src/components/language/LinguaKonjunktiv.jsx
// Stelle sicher, dass der Pfad korrekt ist.

import React, {useEffect, useState} from "react";
import {verbsKonjunktivII} from "@/data/casusdata"; // Pfad anpassen!

// Hilfsfunktion zum Mischen eines Arrays (Fisher-Yates Shuffle)
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

export default function LinguaKonjunktiv() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedForm, setSelectedForm] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [score, setScore] = useState(0);
    const [isQuizCompleted, setIsQuizCompleted] = useState(false);
    const [showAllEntries, setShowAllEntries] = useState(false);
    const [currentOptions, setCurrentOptions] = useState([]);

    useEffect(() => {
        if (verbsKonjunktivII.length > 0 && currentIndex < verbsKonjunktivII.length) {
            const verbData = verbsKonjunktivII[currentIndex];
            const allOptions = [verbData.correctForm, ...verbData.options];
            setCurrentOptions(shuffleArray(allOptions));
        }
    }, [currentIndex]);

    if (verbsKonjunktivII.length === 0) {
        return (
            <div className="md:p-12 bg-gray-800 text-white m-3 text-center">
                <p className="text-xl">Keine Verben für das Konjunktiv II-Quiz geladen.</p>
            </div>
        );
    }

    const currentVerbEntry = verbsKonjunktivII[Math.min(currentIndex, verbsKonjunktivII.length - 1)];

    const handleOptionClick = (option) => {
        if (!isAnswered) {
            setSelectedForm(option);
            setIsAnswered(true);
            if (option === currentVerbEntry.correctForm) {
                setScore(score + 1);
            }
        }
    };

    const handleNext = () => {
        setSelectedForm(null);
        setIsAnswered(false);
        if (currentIndex < verbsKonjunktivII.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setIsQuizCompleted(true);
        }
    };

    const handleRestartQuiz = () => {
        setCurrentIndex(0);
        setScore(0);
        setSelectedForm(null);
        setIsAnswered(false);
        setIsQuizCompleted(false);
        setShowAllEntries(false);
        if (verbsKonjunktivII.length > 0) {
            const firstVerbData = verbsKonjunktivII[0];
            const allOptions = [firstVerbData.correctForm, ...firstVerbData.options];
            setCurrentOptions(shuffleArray(allOptions));
        }
    };

    const toggleShowAllEntries = () => {
        setShowAllEntries(!showAllEntries);
    };

    const isCorrect = selectedForm === currentVerbEntry.correctForm;

    return (
        <div className="md:p-12 bg-gray-800 text-white m-3">
            <h1 className="text-2xl font-bold mb-4 p-4 text-center">
                Konjunktiv II Raten (Die kniffligen Formen)
            </h1>
            {!isQuizCompleted ? (
                <div className="text-center">
                    <p className="text-xl mb-2">
                        {score} von {verbsKonjunktivII.length} richtig
                    </p>
                    <p className="text-3xl mb-4">
                        Infinitiv: <span className="font-semibold">{currentVerbEntry.infinitive}</span>
                    </p>
                    <p className="text-2xl mb-8">
                        Person: <span className="font-semibold">{currentVerbEntry.pronoun}</span>
                    </p>
                    {!isAnswered ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {currentOptions.map((option) => (
                                <button
                                    key={option}
                                    className="text-lg font-bold py-3 px-6 bg-gray-700 hover:bg-gray-600 text-white rounded-lg"
                                    onClick={() => handleOptionClick(option)}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    ) : (
                        <div>
                            <p className={`text-xl mb-4 ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                                {isCorrect ? 'Richtig!' : `Falsch. Korrekt ist: ${currentVerbEntry.correctForm}`}
                            </p>
                            <p className="text-lg mb-4">{currentVerbEntry.explanation}</p>
                            <button
                                className="text-lg font-bold py-2 px-4 bg-gray-500 hover:bg-gray-700 text-white rounded-lg"
                                onClick={handleNext}
                            >
                                {currentIndex < verbsKonjunktivII.length - 1 ? 'Nächstes Verb' : 'Ergebnis anzeigen'}
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <div className="text-center">
                    <p className="text-3xl mb-4">Quiz beendet!</p>
                    <p className="text-xl mb-8">
                        Du hast {score} von {verbsKonjunktivII.length} richtig beantwortet.
                    </p>
                    <button
                        className="text-lg font-bold py-2 px-4 bg-gray-500 hover:bg-gray-700 text-white rounded-lg"
                        onClick={handleRestartQuiz}
                    >
                        Von vorne beginnen
                    </button>
                </div>
            )}

            <div className="text-center mt-8">
                <button
                    className="text-lg font-bold py-2 px-4 bg-gray-500 hover:bg-gray-700 text-white rounded-lg"
                    onClick={toggleShowAllEntries}
                >
                    {showAllEntries ? "Lösungsliste ausblenden" : "Alle Lösungen anzeigen"}
                </button>
            </div>

            {showAllEntries && (
                <div className="mt-8 bg-gray-700 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Lösungsliste Konjunktiv II:</h3>
                    {verbsKonjunktivII.map((entry, index) => (
                        <div key={index} className="mb-4 border-b border-gray-600 pb-2">
                            <p className="text-lg">
                                Infinitiv: <span className="font-semibold">{entry.infinitive}</span> ({entry.pronoun})
                            </p>
                            <p className="text-lg">
                                Korrekter Konjunktiv II: <span className="font-bold text-green-300">{entry.correctForm}</span>
                            </p>
                            <p className="text-sm text-gray-300 mt-1">Erläuterung: {entry.explanation}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}