
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
                    {state === 1 ? (
                        <FaEyeSlash className="text-2xl m-3"/>
                    ) : (
                        <FaEye className="text-2xl m-3"/>
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

    <div className="mt-4">
        {!isCardView && (
            <div className="flex flex-wrap justify-center items-center gap-4">
                <button onClick={() => setShowStats(!showStats)}
                        className={`p-2 ${showStats ? "bg-teal-500" : "bg-gray-400"} rounded`}>
                    Basiswerte {showStats ? <FaEye/> : <FaEyeSlash/>}
                </button>
                <button onClick={() => setShowTypeValues(!showTypeValues)}
                        className={`p-2 ${showTypeValues ? "bg-teal-500" : "bg-gray-400"} rounded`}>
                    Typwerte {showTypeValues ? <FaEye/> : <FaEyeSlash/>}
                </button>
                <button onClick={toggleShowTypeText}
                        className={`p-2 ${showTypeText ? "bg-teal-500" : "bg-gray-400"} rounded`}>
                    Typentext {showTypeText ? <FaEye/> : <FaEyeSlash/>}
                </button>
            </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
            <ButtonWithStates label="Mega" state={megaState} onLeftClick={handleMegaLeftClick}
                              onRightClick={handleMegaRightClick}/>
            <ButtonWithStates label="Legendäre" state={legendaryState} onLeftClick={handleLegendaryLeftClick}
                              onRightClick={handleLegendaryRightClick}/>
            <ButtonWithStates label="UB" state={ubState} onLeftClick={handleUbLeftClick}
                              onRightClick={handleUbRightClick}/>
            <ButtonWithStates label="Mysteriöse" state={mysticState} onLeftClick={handleMysticLeftClick}
                              onRightClick={handleMysticRightClick}/>
            <ButtonWithStates label="Paradox" state={paradoxState} onLeftClick={handleParadoxLeftClick}
                              onRightClick={handleParadoxRightClick}/>
            <ButtonWithStates label="Lokal" state={localsState} onLeftClick={handleLocalsLeftClick}
                              onRightClick={handleLocalsRightClick}/>
        </div>
    </div>

);

export default ButtonGroup;
