// ButtonGroup.js
import React from 'react';
import { FaEye, FaEyeSlash } from "react-icons/fa";

const ButtonGroup = ({
                         showStats,
                         setShowStats,
                         showTypeValues,
                         setShowTypeValues,
                         showTypeText,
                         toggleShowTypeText,
                         hideSpecialforms,
                         toggleHideSpecialforms,
                         hideLegendary,
                         toggleHideLegendary,
                         hideUB,
                         toggleHideUB,
                         hideMystic,
                         toggleHideMystic,
                         hideParadox,
                         toggleHideParadox,
                         monoTypeBonus,
                         toggleMonoTypeBonus,
    isCardView
                     }) => (

        <div
            id="btndiv"
            className="flex md:flex-row flex-col gap-y-2 md:gap-y-0 gap-x-2"
        >

            {!isCardView && (
                <>
            <button
                onClick={() => setShowStats(!showStats)}
                className={`text-white bg-gray-600 border border-dotted border-white hover:bg-gray-900 px-2 py-1 
                                    rounded mb-2 ${showStats ? "" : "bg-gray-900"}`}
            >
                {showStats ? (
                    <div className="flex flex-col items-center">
                        Basiswerte <br/>
                        <FaEye/>
                    </div>
                ) : (
                    <div className="flex flex-col items-center">
                        Basiswerte <br/>
                        <FaEyeSlash/>
                    </div>
                )}
            </button>
            <button
                onClick={() => setShowTypeValues(!showTypeValues)}
                className={`text-white bg-gray-600 border border-dotted border-white hover:bg-gray-900 px-2 py-1 
                                    rounded mb-2 ${showTypeValues ? "" : "bg-gray-900"}`}
            >
                {showTypeValues ? (
                    <div className="flex flex-col items-center">
                        Typwerte <br/>
                        <FaEye/>
                    </div>
                ) : (
                    <div className="flex flex-col items-center">
                        Typwerte <br/>
                        <FaEyeSlash/>
                    </div>
                )}
            </button>

            {/* NEU: Button zum Anzeigen/Ausblenden des Typentextes */}
            <button
                onClick={toggleShowTypeText}
                className={`text-white bg-gray-600 border border-dotted border-white hover:bg-gray-900 px-2 py-1 
                                    rounded mb-2 ${showTypeText ? "" : "bg-gray-900"}`}
            >
                {showTypeText ? (
                    <div className="flex flex-col items-center">
                        Typentext <br/>
                        <FaEye/>
                    </div>
                ) : (
                    <div className="flex flex-col items-center">
                        Typentext <br/>
                        <FaEyeSlash/>
                    </div>
                )}
            </button></>
)}



            <button
                onClick={toggleHideSpecialforms}
                className={`text-white bg-gray-600 border border-dotted border-white hover:bg-gray-900 px-2 py-1 
                                    rounded mb-2 ${hideSpecialforms ? "bg-gray-900" : ""}`}
            >
                {hideSpecialforms ? (
                    <div className="flex flex-col items-center">
                        Sonderformen
                        <br/>
                        <FaEyeSlash/>
                    </div>
                ) : (
                    <div className="flex flex-col items-center">
                        Sonderformen
                        <br/>
                        <FaEye/>
                    </div>
                )}
            </button>
            <button
                onClick={toggleHideLegendary}
                className={`text-white bg-gray-600 border border-dotted border-white hover:bg-gray-900 px-2 py-1 
                                    rounded mb-2 ${hideLegendary ? "bg-gray-900" : ""}`}
            >
                {hideLegendary ? (
                    <div className="flex flex-col items-center">
                        Legendäre
                        <br/>
                        <FaEyeSlash/>
                    </div>
                ) : (
                    <div className="flex flex-col items-center">
                        Legendäre
                        <br/>
                        <FaEye/>
                    </div>
                )}
            </button>
            <button
                onClick={toggleHideUB}
                className={`text-white bg-gray-600 border border-dotted border-white hover:bg-gray-900 px-2 py-1 
                                    rounded mb-2 ${hideUB ? "bg-gray-900" : ""}`}
            >
                {hideUB ? (
                    <div className="flex flex-col items-center">
                        UB
                        <br/>
                        <FaEyeSlash/>
                    </div>
                ) : (
                    <div className="flex flex-col items-center">
                        UB
                        <br/>
                        <FaEye/>
                    </div>
                )}
            </button>
            <button
                onClick={toggleHideMystic}
                className={`text-white bg-gray-600 border border-dotted border-white hover:bg-gray-900 px-2 py-1 
                                    rounded mb-2 ${hideMystic ? "bg-gray-900" : ""}`}
            >
                {hideMystic ? (
                    <div className="flex flex-col items-center">
                        Mysteriöse
                        <br/>
                        <FaEyeSlash/>
                    </div>
                ) : (
                    <div className="flex flex-col items-center">
                        Mysteriöse
                        <br/>
                        <FaEye/>
                    </div>
                )}
            </button>
            <button
                onClick={toggleHideParadox}
                className={`text-white bg-gray-600 border border-dotted border-white hover:bg-gray-900 px-2 py-1 
                                    rounded mb-2 ${hideParadox ? "bg-gray-900" : ""}`}
            >
                {hideParadox ? (
                    <div className="flex flex-col items-center">
                        Paradox
                        <br/>
                        <FaEyeSlash/>
                    </div>
                ) : (
                    <div className="flex flex-col items-center">
                        Paradox
                        <br/>
                        <FaEye/>
                    </div>
                )}
            </button>
            <button
                onClick={toggleMonoTypeBonus}
                className={`text-white bg-gray-600 border border-dotted border-white hover:bg-gray-900 px-2 py-1 
                                    rounded mb-2 ${monoTypeBonus ? "bg-gray-900" : ""}`}
            >
                {monoTypeBonus
                    ? "Monotypen-Bonus deaktivieren"
                    : "Monotypen-Bonus aktivieren"}
            </button>
        </div>

        );

        export default ButtonGroup;
