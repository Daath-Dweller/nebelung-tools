// ButtonGroup.js

import React from 'react';
import {FaEye, FaEyeSlash} from "react-icons/fa";
import {FaMagnifyingGlass} from "react-icons/fa6";

const ButtonWithStates = ({ label, state, onLeftClick, onRightClick }) => {
    return (
        <div className="flex flex-col items-center bg-gray-600 border border-dotted border-white rounded mb-2 p-2">
            <div className="font-bold py-1">{label}</div>
            <div className="flex w-full">
                <button
                    onClick={onLeftClick}
                    className="w-1/2 flex justify-center items-center m-1 p-1 border-white"
                >
                    {state === 2 ? (
                        <FaMagnifyingGlass className="text-red-500 text-2xl"/>
                    ) : (
                        <FaMagnifyingGlass className="text-blue-500 text-2xl"/>
                    )}
                </button>
                <button
                    onClick={onRightClick}
                    className="w-1/2 flex justify-center items-center p-1 m-1"
                >
                    {state === 0 ? (
                        <FaEye className="text-2xl"/>
                    ) : (
                        <FaEyeSlash className="text-2xl"/>
                    )}
                </button>
            </div>
        </div>

    );
};

const ButtonGroup = ({
                         showStats,
                         setShowStats,
                         showTypeValues,
                         setShowTypeValues,
                         showTypeText,
                         toggleShowTypeText,
                         isCardView,
                         legendaryState,
                         ubState,
                         mysticState,
                         paradoxState,
                         localsState,
                         megaState,
                         dynamaxState,
    handleDynaLeftClick,
    handleDynaRightClick,
    handleMegaLeftClick,
    handleMegaRightClick,
                         handleLegendaryLeftClick,
                         handleLegendaryRightClick,
                         handleUbLeftClick,
                         handleUbRightClick,
                         handleMysticLeftClick,
                         handleMysticRightClick,
                         handleParadoxLeftClick,
                         handleParadoxRightClick,
                         handleLocalsLeftClick,
                         handleLocalsRightClick,
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
                            <FaEye className="mt-2"/>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center">
                            Basiswerte <br/>
                            <FaEyeSlash className="mt-2"/>
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
                            <FaEye className="mt-2"/>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center">
                            Typwerte <br/>
                            <FaEyeSlash className="mt-2"/>
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
                            <FaEye className="mt-2"/>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center">
                            Typentext <br/>
                            <FaEyeSlash className="mt-2"/>
                        </div>
                    )}
                </button>
            </>
        )}

        <ButtonWithStates

            label="Mega"
            state={megaState}
            onLeftClick={handleMegaLeftClick}
            onRightClick={handleMegaRightClick}
        />

        <ButtonWithStates
            label="Dynamax"
            state={dynamaxState}
            onLeftClick={handleDynaLeftClick}
            onRightClick={handleDynaRightClick}
        />

        <ButtonWithStates
            label="Legendäre"
            state={legendaryState}
            onLeftClick={handleLegendaryLeftClick}
            onRightClick={handleLegendaryRightClick}
        />

        <ButtonWithStates
            label="UB"
            state={ubState}
            onLeftClick={handleUbLeftClick}
            onRightClick={handleUbRightClick}
        />

        <ButtonWithStates
            label="Mysteriöse"
            state={mysticState}
            onLeftClick={handleMysticLeftClick}
            onRightClick={handleMysticRightClick}
        />

        <ButtonWithStates
            label="Paradox"
            state={paradoxState}
            onLeftClick={handleParadoxLeftClick}
            onRightClick={handleParadoxRightClick}
        />

        <ButtonWithStates
            label="Lokal"
            state={localsState}
            onLeftClick={handleLocalsLeftClick}
            onRightClick={handleLocalsRightClick}
        />

    </div>

);

export default ButtonGroup;
