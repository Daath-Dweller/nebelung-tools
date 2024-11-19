import React, { useState } from 'react';
import CompView from './CompView';
import GovSeats from './GovSeats';

const Parteien = () => {
    const [viewGovSeats, setViewGovSeats] = useState(false);
    const [viewComp, setViewComp] = useState(false);

    const toggleGovSeats = () => {
        setViewGovSeats((prev) => !prev);
        setViewComp(false);
    };

    const toggleComp = () => {
        setViewComp((prev) => !prev);
        setViewGovSeats(false);
    };

    return (
        <div className="px-12 py-4 bg-black text-white m-3">
            <div id="buttons" className="flex md:justify-around md:flex-row flex-col border border-dotted border-white bg-gray-800 p-12">
                <button
                    onClick={toggleGovSeats}
                    className="mb-2 md:mb-0 border-2 border-dotted border-white p-4 rounded bg-gray-700 text-white hover:border-black hover:text-black hover:bg-gray-200 hover:cursor-pointer"
                >
                    Regierungsübersichten (Diagramme)
                </button>
                <button
                    onClick={toggleComp}
                    className="border-2 border-dotted border-white p-4 rounded bg-gray-700 text-white hover:border-black hover:text-black hover:bg-gray-200 hover:cursor-pointer"
                >
                    Vergleichstabellen
                </button>
            </div>

            {viewComp && <CompView />}
            {viewGovSeats && <GovSeats />}
        </div>
    );
};

export default Parteien;
