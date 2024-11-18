import React, { useState } from 'react';
import CompView from './CompView';
import GovSeats from './GovSeats';

const Parteien = () => {
    const [viewGovSeats, setViewGovSeats] = useState(true);
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
        <div className="p-12 bg-black text-white m-3">
            <div id="buttons" className="flex justify-around">
                <button
                    onClick={toggleGovSeats}
                    className="border-2 border-dotted border-white p-4 rounded bg-gray-700 text-white hover:border-black hover:text-black hover:bg-gray-200 hover:cursor-pointer"
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
