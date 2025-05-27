import React, {useEffect, useState} from "react"; // useEffect hinzugefügt
import {words} from "@/data/numerusdata"; // Sicherstellen, dass der Pfad korrekt ist

// Hilfsfunktion zum Mischen eines Arrays (Fisher-Yates Shuffle)
function shuffleArray(array) {
    const newArray = [...array]; // Kopie erstellen, um das Original nicht zu verändern
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

export default function Linguanumerus() { // Korrekter Komponentenname
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedPlural, setSelectedPlural] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [score, setScore] = useState(0);
    const [isQuizCompleted, setIsQuizCompleted] = useState(false);
    const [showAllEntries, setShowAllEntries] = useState(false);
    const [currentOptions, setCurrentOptions] = useState([]); // Zustand für die gemischten Optionen

    // Lade das aktuelle Wort und mische die Optionen, wenn sich der Index ändert
    useEffect(() => {
        if (words.length > 0 && currentIndex < words.length) {
            const wordData = words[currentIndex];
            const allOptions = [wordData.correctPlural, ...wordData.options];
            setCurrentOptions(shuffleArray(allOptions));
        }
    }, [currentIndex]); // Abhängigkeit: currentIndex

    // Überprüfen, ob Wörter vorhanden sind, um Fehler zu vermeiden
    if (words.length === 0) {
        return (
            <div className="md:p-12 bg-gray-800 text-white m-3 text-center">
                <p className="text-xl">Keine Wörter für das Plural-Quiz geladen.</p>
            </div>
        );
    }

    // Sicherstellen, dass currentIndex innerhalb der Grenzen liegt
    const currentWord = words[Math.min(currentIndex, words.length - 1)];


    const handleOptionClick = (option) => {
        if (!isAnswered) {
            setSelectedPlural(option);
            setIsAnswered(true);

            if (option === currentWord.correctPlural) {
                setScore(score + 1);
            }
        }
    };

    const handleNextWord = () => {
        setSelectedPlural(null);
        setIsAnswered(false);

        if (currentIndex < words.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setIsQuizCompleted(true);
        }
    };

    const handleRestartQuiz = () => {
        setCurrentIndex(0);
        setScore(0);
        setSelectedPlural(null);
        setIsAnswered(false);
        setIsQuizCompleted(false);
        setShowAllEntries(false);
        // Optionen für das erste Wort neu laden und mischen
        if (words.length > 0) {
            const firstWordData = words[0];
            const allOptions = [firstWordData.correctPlural, ...firstWordData.options];
            setCurrentOptions(shuffleArray(allOptions));
        }
    };

    const toggleShowAllEntries = () => {
        setShowAllEntries(!showAllEntries);
    };

    const isCorrect = selectedPlural === currentWord.correctPlural;

    return (
        <div className="md:p-12 bg-gray-800 text-white m-3">
            <h1 className="text-2xl font-bold mb-4 p-4 text-center">
                Pluralformen-Raten (Welcher Plural ist richtig?)
            </h1>
            {!isQuizCompleted ? (
                <div className="text-center">
                    <p className="text-xl mb-2">
                        {score} von {words.length} richtig
                    </p>
                    <p className="text-3xl mb-8">{currentWord.singular}</p>
                    {!isAnswered ? (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> {/* Flexibleres Layout für Optionen */}
                            {currentOptions.map((option) => (
                                <button
                                    key={option} // Optionen sollten eindeutig sein für den key
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
                                {isCorrect ? 'Richtig!' : `Falsch. Der korrekte Plural ist: ${currentWord.correctPlural}`}
                            </p>
                            <p className="text-lg mb-4">{currentWord.explanation}</p>
                            <button
                                className="text-lg font-bold py-2 px-4  bg-gray-500 hover:bg-gray-700 text-white rounded-lg"
                                onClick={handleNextWord}
                            >
                                {currentIndex < words.length - 1 ? 'Nächstes Wort' : 'Ergebnis anzeigen'}
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <div className="text-center">
                    <p className="text-3xl mb-4">Quiz beendet!</p>
                    <p className="text-xl mb-8">
                        Du hast {score} von {words.length} richtig beantwortet.
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
                    className="text-lg font-bold py-2 px-4  bg-gray-500 hover:bg-gray-700  text-white rounded-lg"
                    onClick={toggleShowAllEntries}
                >
                    {showAllEntries ? "Lösungsliste ausblenden" : "Alle Lösungen anzeigen"}
                </button>
            </div>

            {showAllEntries && (
                <div className="mt-8 bg-gray-700 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold mb-4">Lösungsliste:</h3>
                    {words.map((wordEntry, index) => (
                        <div key={index} className="mb-4 border-b border-gray-600 pb-2">
                            <p className="text-xl font-semibold">
                                Singular: {wordEntry.singular}
                            </p>
                            <p className="text-lg">
                                Korrekter Plural: <span className="font-bold text-green-300">{wordEntry.correctPlural}</span>
                            </p>
                            <p className="text-sm text-gray-300 mt-1">Erläuterung: {wordEntry.explanation}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}