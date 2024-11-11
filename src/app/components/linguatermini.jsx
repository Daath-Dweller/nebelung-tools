import React, { useState } from "react";
import { Fachbegriffe } from "@/app/data/terminidata";

export default function Linguatermini() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [score, setScore] = useState(0);
    const [isQuizCompleted, setIsQuizCompleted] = useState(false);
    const [showAllEntries, setShowAllEntries] = useState(false);

    const fachbegriffList = Object.values(Fachbegriffe);
    const currentItem = fachbegriffList[currentIndex];

    const handleOptionClick = (index) => {
        if (!isAnswered) {
            setSelectedOption(index);
            setIsAnswered(true);

            if (index === currentItem.korrekt) {
                setScore(score + 1);
            }
        }
    };

    const handleNextItem = () => {
        setSelectedOption(null);
        setIsAnswered(false);

        if (currentIndex < fachbegriffList.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setIsQuizCompleted(true);
        }
    };

    const handleRestartQuiz = () => {
        setCurrentIndex(0);
        setScore(0);
        setSelectedOption(null);
        setIsAnswered(false);
        setIsQuizCompleted(false);
        setShowAllEntries(false);
    };

    const toggleShowAllEntries = () => {
        setShowAllEntries(!showAllEntries);
    };

    const isCorrect = selectedOption === currentItem.korrekt;

    return (
        <div className="md:p-12 bg-gray-800 text-white m-3 text-center">
            <span className="text-sm"> Wortschatzquiz zu Bildungssprache, Fachbegriffen und Fremdworten. <br/></span>
            <h1 className="text-2xl font-bold mb-2 mt-8 p-4 ">
                 Wie heißt es richtig?
            </h1>

            {!isQuizCompleted ? (
                <div className="text-center">
                    {/* Erkärung und Synonyme anzeigen */}
                    <span className="text-lg ">{currentItem.erklaerungUndSynonyme}</span>

                    <p className="text-xl mt-10 mb-6">
                        {score} von {fachbegriffList.length} richtig
                    </p>

                    {!isAnswered ? (
                        <div className="flex flex-col items-center space-y-4">
                            {currentItem.options.map((optionText, index) => (
                                <button
                                    key={index}
                                    className="text-lg font-bold py-2 px-4 bg-gray-700 hover:bg-gray-600 text-white rounded-lg w-64"
                                    onClick={() => handleOptionClick(index)}
                                >
                                    {optionText}
                                </button>
                            ))}
                        </div>
                    ) : (
                        <div>
                            <p className="text-xl mb-4">
                                {isCorrect ? 'Richtig!' : 'Das ist nicht korrekt.'}
                            </p>
                            {!isCorrect && (
                                <p className="text-lg mb-2">
                                    Die richtige Antwort ist: <strong>{currentItem.options[currentItem.korrekt]}</strong>
                                </p>
                            )}
                            <p className="text-lg mb-4">{currentItem.etymologie}</p>
                            <button
                                className="text-lg font-bold py-2 px-4  bg-gray-500 hover:bg-gray-700  text-white rounded-lg"
                                onClick={handleNextItem}
                            >
                                Weiter
                            </button>
                        </div>
                    )}
                </div>
            ) : (
                <div className="text-center">
                    <p className="text-3xl mb-4">Quiz beendet!</p>
                    <p className="text-xl mb-8">
                        Du hast {score} von {fachbegriffList.length} richtig beantwortet.
                    </p>
                    <button
                        className="text-lg font-bold py-2 px-4  bg-gray-500 hover:bg-gray-700  text-white rounded-lg"
                        onClick={handleRestartQuiz}
                    >
                        Von vorne beginnen
                    </button>
                </div>
            )}

            {/* Button zum Anzeigen aller Einträge */}
            <div className="text-center mt-8">
                <button
                    className="text-lg font-bold py-2 px-4 bg-gray-500 hover:bg-gray-700 text-white rounded-lg"
                    onClick={toggleShowAllEntries}
                >
                    {showAllEntries ? "Antworten ausblenden" : "Alle Antworten anzeigen"}
                </button>
            </div>

            {/* Alle Einträge anzeigen, wenn showAllEntries true ist */}
            {showAllEntries && (
                <div className="mt-8 bg-gray-700 p-6 rounded-lg">
                    {fachbegriffList.map((item, index) => (
                        <div key={index} className="mb-4 border-b border-gray-600 pb-2">
                            <p className="text-xl font-semibold">
                                {item.options[item.korrekt]}
                            </p>
                            <p className="text-sm text-gray-300">{item.erklaerungUndSynonyme}</p>
                            <p className="text-sm text-gray-300">{item.etymologie}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
