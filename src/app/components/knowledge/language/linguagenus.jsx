import React, {useState} from "react";
import {words} from "@/app/data/genusdata";

export default function Linguagenus() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [score, setScore] = useState(0);
    const [isQuizCompleted, setIsQuizCompleted] = useState(false);
    const [showAllEntries, setShowAllEntries] = useState(false);

    const currentWord = words[currentIndex];

    const handleArticleClick = (article) => {
        if (!isAnswered) {
            setSelectedArticle(article);
            setIsAnswered(true);

            if (article === currentWord.article) {
                setScore(score + 1);
            }
        }
    };

    const handleNextWord = () => {
        setSelectedArticle(null);
        setIsAnswered(false);

        if (currentIndex < words.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            // Quiz abgeschlossen
            setIsQuizCompleted(true);
        }
    };

    const handleRestartQuiz = () => {
        setCurrentIndex(0);
        setScore(0);
        setSelectedArticle(null);
        setIsAnswered(false);
        setIsQuizCompleted(false);
        setShowAllEntries(false);
    };

    const toggleShowAllEntries = () => {
        setShowAllEntries(!showAllEntries);
    };

    const isCorrect = selectedArticle === currentWord.article;

    return (
        <div className="md:p-12 bg-gray-800 text-white m-3">
            <h1 className="text-2xl font-bold mb-4 p-4 text-center">
                Wortgeschlecht-Raten (Der, Die oder Das?)
            </h1>
            {!isQuizCompleted ? (
                <div className="text-center">
                    <p className="text-xl mb-2">
                        {score} von {words.length} richtig
                    </p>
                    <p className="text-3xl mb-8">{currentWord.word}</p>
                    {!isAnswered ? (
                        <div className="flex justify-center space-x-4">
                            {['der', 'die', 'das'].map((article) => (
                                <button
                                    key={article}
                                    className="text-lg font-bold py-2 px-4 bg-gray-700 hover:bg-gray-600 text-white rounded-lg"
                                    onClick={() => handleArticleClick(article)}
                                >
                                    {article}
                                </button>
                            ))}
                        </div>
                    ) : (
                        <div>
                            <p className="text-xl mb-4">
                                {isCorrect ? 'Richtig!' : 'Das ist nicht korrekt.'}
                            </p>
                            <p className="text-lg mb-4">{currentWord.explanation}</p>
                            <button
                                className="text-lg font-bold py-2 px-4  bg-gray-500 hover:bg-gray-700 text-white rounded-lg"
                                onClick={handleNextWord}
                            >
                                Nächstes Wort
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

            {/* Button to toggle all entries */}
            <div className="text-center mt-8">
                <button
                    className="text-lg font-bold py-2 px-4  bg-gray-500 hover:bg-gray-700  text-white rounded-lg"
                    onClick={toggleShowAllEntries}
                >
                    {showAllEntries ? "Antworten ausblenden" : "Alle Antworten anzeigen"}
                </button>
            </div>

            {/* Display all entries if showAllEntries is true */}
            {showAllEntries && (
                <div className="mt-8 bg-gray-700 p-6 rounded-lg">
                    {words.map((word, index) => (
                        <div key={index} className="mb-4 border-b border-gray-600 pb-2">
                            <p className="text-xl font-semibold">
                                {word.article} {word.word}
                            </p>
                            <p className="text-sm text-gray-300">{word.explanation}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
