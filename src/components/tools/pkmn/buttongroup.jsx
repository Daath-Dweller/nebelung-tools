
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
                    className="w-1/2 flex justify-center items-center m-1 p-1 border-white bg-black
                    hover:bg-gray-800 rounded-full"
                >
                    {state === 2 ? (
                        <FaMagnifyingGlass className="text-red-500 text-2xl m-3"/>
                    ) : (
                        <FaMagnifyingGlass className="text-blue-500 text-2xl m-3"/>
                    )}
                </button>
                <button
                    onClick={onRightClick}
                    className="w-1/2 flex justify-center items-center p-1 m-1 bg-black
                    hover:bg-gray-800 rounded-full"
                >
                    {state === 0 ? (
                        <FaEye className="text-2xl m-3"/>
                    ) : (
                        <FaEyeSlash className="text-2xl m-3"/>
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
        className="flex flex-col gap-y-2 items-center"
    >

        {!isCardView && (
            <div className="flex md:flex-row flex-col gap-x-4 ">
                <button
                    onClick={() => setShowStats(!showStats)}
                    className={`text-white bg-gray-600 border border-dotted border-white hover:bg-gray-900 px-2 py-1 
                                        rounded mb-2 ${showStats ? "" : "bg-gray-900"}`}
                >
                    {showStats ? (
                        <div className="flex flex-col items-center">
                            Basiswerte <br/>
                            <FaEye className="text-2xl mt-3"/>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center">
                            Basiswerte <br/>
                            <FaEyeSlash className="text-2xl mt-3"/>
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
                            <FaEye className="text-2xl mt-3"/>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center">
                            Typwerte <br/>
                            <FaEyeSlash className="text-2xl mt-3"/>
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
                            <FaEye className="text-2xl mt-3"/>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center">
                            Typentext <br/>
                            <FaEyeSlash className="text-2xl mt-3"/>
                        </div>
                    )}
                </button>
            </div>
        )}

        <div id="buttonsWithStates" className="flex md:flex-row flex-col gap-x-4">
        <ButtonWithStates

            label="Mega"
            state={megaState}
            onLeftClick={handleMegaLeftClick}
            onRightClick={handleMegaRightClick}
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
    </div>

);

export default ButtonGroup;
