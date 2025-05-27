// src/components/language/linguacasus.jsx
// (Stelle sicher, dass der Pfad zu casusdata korrekt ist und die Komponente so exportiert wird)

import React, {useEffect, useState} from "react";
// Du hattest hier "casusdata" stehen, ich nehme an, es ist die Datei mit den Konjunktiv-Daten.
// Wenn deine Datei anders heißt (z.B. konjunktivdata.ts), bitte anpassen.
import {verbsKonjunktivII} from "@/data/casusdata";

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

// Nenne die Funktion LinguaCasus, wenn die Datei linguacasus.jsx heißt
export default function LinguaCasus() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOptionIndex, setSelectedOptionIndex] = useState(null); // Speichert den Index der gewählten Option
    const [isAnswered, setIsAnswered] = useState(false);
    const [score, setScore] = useState(0);
    const [isQuizCompleted, setIsQuizCompleted] = useState(false);
    const [showAllEntries, setShowAllEntries] = useState(false);

    // Diese States halten die aktuell angezeigten Optionen und den Index der korrekten Option darin
    const [currentDisplayOptions, setCurrentDisplayOptions] = useState([]);
    const [correctOptionIndex, setCorrectOptionIndex] = useState(null);

    // Daten laden und verarbeiten für die aktuelle Frage
    useEffect(() => {
        if (verbsKonjunktivII.length > 0 && currentIndex < verbsKonjunktivII.length) {
            const verbData = verbsKonjunktivII[currentIndex];
            // Kombiniere korrekte Form und falsche Optionen
            const allPossibleOptions = [verbData.correctForm, ...verbData.options];
            const shuffledOptions = shuffleArray(allPossibleOptions);

            setCurrentDisplayOptions(shuffledOptions);
            // Finde den Index der korrekten Antwort in den gemischten Optionen
            setCorrectOptionIndex(shuffledOptions.indexOf(verbData.correctForm));
        }
    }, [currentIndex, verbsKonjunktivII]); // Abhängigkeit verbsKonjunktivII hinzugefügt für den Fall, dass sich die Daten mal ändern könnten

    if (verbsKonjunktivII.length === 0) {
        return (
            <div className="md:p-12 bg-gray-800 text-white m-3 text-center">
                <p className="text-xl">Keine Daten für das Konjunktiv II-Quiz geladen.</p>
            </div>
        );
    }

    // Sicherstellen, dass currentIndex innerhalb der Grenzen liegt
    // currentItem ist hier currentVerbEntry, um Konsistenz mit Linguatermini zu wahren,
    // können wir es auch currentItem nennen.
    const currentItem = verbsKonjunktivII[Math.min(currentIndex, verbsKonjunktivII.length - 1)];

    const handleOptionClick = (index) => { // Nimmt jetzt den Index der geklickten Option
        if (!isAnswered) {
            setSelectedOptionIndex(index);
            setIsAnswered(true);
            if (index === correctOptionIndex) { // Vergleiche mit dem korrekten Index
                setScore(score + 1);
            }
        }
    };

    const handleNextItem = () => {
        setSelectedOptionIndex(null);
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
        setSelectedOptionIndex(null);
        setIsAnswered(false);
        setIsQuizCompleted(false);
        setShowAllEntries(false);
        // Reset der Optionen für die erste Frage (wird durch useEffect oben gehandhabt)
    };

    const toggleShowAllEntries = () => {
        setShowAllEntries(!showAllEntries);
    };

    // isCorrect prüft nun, ob der ausgewählte Index dem korrekten Index entspricht
    const isCorrect = selectedOptionIndex === correctOptionIndex;

    // Frage-Prompt erstellen
    const questionPrompt = `Konjunktiv II für: ${currentItem.infinitive} (${currentItem.pronoun})`;

    return (
        <div className="md:p-12 bg-gray-800 text-white m-3 text-center">
            <span className="text-sm"> Konjunktiv II Quiz: Teste dein Wissen über oft ungebräuchliche Verbformen. <br/></span>
            <h1 className="text-2xl font-bold mb-2 mt-8 p-4 ">
                Wie lautet die korrekte Form?
            </h1>

            {!isQuizCompleted ? (
                <div className="text-center">
                    {/* Frage / Prompt anzeigen */}
                    <span className="text-lg ">{questionPrompt}</span>

                    <p className="text-xl mt-10 mb-6">
                        {score} von {verbsKonjunktivII.length} richtig
                    </p>

                    {!isAnswered ? (
                        <div className="flex flex-col items-center space-y-4">
                            {currentDisplayOptions.map((optionText, index) => (
                                <button
                                    key={index} // Index als Key, da Optionstexte nicht garantiert eindeutig sein müssen
                                    className="text-lg font-bold py-2 px-4 bg-gray-700 hover:bg-gray-600 text-white rounded-lg w-72 md:w-80" // Breite angepasst
                                    onClick={() => handleOptionClick(index)}
                                >
                                    {optionText}
                                </button>
                            ))}
                        </div>
                    ) : (
                        <div>
                            <p className={`text-xl mb-4 ${isCorrect ? 'bg-teal-700' : 'bg-red-700'} text-white p-2 rounded`}>
                                {isCorrect ? 'Richtig!' : 'Das ist nicht korrekt.'}
                            </p>

                            {!isCorrect && (
                                <p className="text-lg mb-6">
                                    Die richtige Antwort
                                    lautet: <strong>{currentItem.correctForm}</strong> {/* Direkter Zugriff auf correctForm aus den Daten */}
                                </p>
                            )}
                            {/* Erläuterung anzeigen (ersetzt Etymologie/Beispiel aus Linguatermini) */}
                            <p className="text-lg mb-4"><span
                                className="font-extrabold">Erläuterung:</span> {currentItem.explanation}</p>

                            <button
                                className="text-lg font-bold py-2 px-4 mt-4 bg-gray-500 hover:bg-gray-700 text-white rounded-lg"
                                onClick={handleNextItem}
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
                        className="text-lg font-bold py-2 px-4  bg-gray-500 hover:bg-gray-700  text-white rounded-lg"
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
                <div className="mt-8 bg-gray-700 p-6 rounded-lg text-left"> {/* Text linksbündig für bessere Lesbarkeit */}
                    {verbsKonjunktivII.map((entry, index) => (
                        <div key={index} className="mb-4 border-b border-gray-600 pb-2">
                            <p className="text-xl font-semibold">
                                {entry.correctForm}
                            </p>
                            <p className="text-sm text-gray-300"><span className="font-extrabold">Infinitiv: </span>{entry.infinitive} ({entry.pronoun})
                            </p>
                            <p className="text-sm text-gray-300"><span className="font-extrabold">Erläuterung: </span>{entry.explanation}
                            </p>
                            {/* Falls du noch andere Infos pro Eintrag hättest, könntest du sie hier hinzufügen */}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}