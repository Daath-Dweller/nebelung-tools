// src/components/language/Linguanumerus.jsx

import React, {useEffect, useState} from "react";
import {words as numerusWords} from "@/data/numerusdata"; // Umbenannt, um Konflikt mit 'words' Variable zu vermeiden

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

export default function Linguanumerus() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOptionIndex, setSelectedOptionIndex] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [score, setScore] = useState(0);
    const [isQuizCompleted, setIsQuizCompleted] = useState(false);
    const [showAllEntries, setShowAllEntries] = useState(false);

    const [currentDisplayOptions, setCurrentDisplayOptions] = useState([]);
    const [correctOptionIndex, setCorrectOptionIndex] = useState(null);

    useEffect(() => {
        if (numerusWords.length > 0 && currentIndex < numerusWords.length) {
            const wordData = numerusWords[currentIndex];
            const allPossibleOptions = [wordData.correctPlural, ...wordData.options]; // options sind die falschen
            const shuffledOptions = shuffleArray(allPossibleOptions);

            setCurrentDisplayOptions(shuffledOptions);
            setCorrectOptionIndex(shuffledOptions.indexOf(wordData.correctPlural));
        }
    }, [currentIndex, numerusWords]);

    if (numerusWords.length === 0) {
        return (
            <div className="md:p-12 bg-gray-800 text-white m-3 text-center">
                <p className="text-xl">Keine Wörter für das Plural-Quiz geladen.</p>
            </div>
        );
    }

    const currentItem = numerusWords[Math.min(currentIndex, numerusWords.length - 1)];

    const handleOptionClick = (index) => {
        if (!isAnswered) {
            setSelectedOptionIndex(index);
            setIsAnswered(true);
            if (index === correctOptionIndex) {
                setScore(score + 1);
            }
        }
    };

    const handleNextItem = () => { // Umbenannt von handleNextWord für Konsistenz
        setSelectedOptionIndex(null);
        setIsAnswered(false);
        if (currentIndex < numerusWords.length - 1) {
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
    };

    const toggleShowAllEntries = () => {
        setShowAllEntries(!showAllEntries);
    };

    const isCorrect = selectedOptionIndex === correctOptionIndex;
    const questionPrompt = `Welcher Plural ist richtig für: ${currentItem.singular}?`;

    return (
        <div className="md:p-12 bg-gray-800 text-white m-3 text-center">
            <span className="text-sm"> Plural-Quiz: Finde die korrekte Mehrzahlform. <br/></span>
            <h1 className="text-2xl font-bold mb-2 mt-8 p-4 ">
                Wie lautet der korrekte Plural?
            </h1>

            {!isQuizCompleted ? (
                <div className="text-center">
                    <span className="text-lg ">{questionPrompt}</span>
                    <p className="text-xl mt-10 mb-6">
                        {score} von {numerusWords.length} richtig
                    </p>

                    {!isAnswered ? (
                        <div className="flex flex-col items-center space-y-4">
                            {currentDisplayOptions.map((optionText, index) => (
                                <button
                                    key={index}
                                    className="text-lg font-bold py-2 px-4 bg-gray-700 hover:bg-gray-600 text-white rounded-lg w-72 md:w-80"
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
                                    lautet: <strong>{currentItem.correctPlural}</strong>
                                </p>
                            )}
                            <p className="text-lg mb-4"><span
                                className="font-extrabold">Erläuterung:</span> {currentItem.explanation}</p>

                            <button
                                className="text-lg font-bold py-2 px-4 mt-4 bg-gray-500 hover:bg-gray-700  text-white rounded-lg"
                                onClick={handleNextItem}
                            >
                                {currentIndex < numerusWords.length - 1 ? 'Nächstes Wort' : 'Ergebnis anzeigen'}
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <div className="text-center">
                    <p className="text-3xl mb-4">Quiz beendet!</p>
                    <p className="text-xl mb-8">
                        Du hast {score} von {numerusWords.length} richtig beantwortet.
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
                <div className="mt-8 bg-gray-700 p-6 rounded-lg text-left">
                    {numerusWords.map((entry, index) => (
                        <div key={index} className="mb-4 border-b border-gray-600 pb-2">
                            <p className="text-xl font-semibold">
                                {entry.singular} &rarr; {entry.correctPlural}
                            </p>
                            <p className="text-sm text-gray-300"><span className="font-extrabold">Erläuterung: </span>{entry.explanation}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}