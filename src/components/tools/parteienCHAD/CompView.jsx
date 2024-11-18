import React, { useState } from 'react';
import { countries } from '@/data/parteiendata.ts';
import CantonTable from "@/components/tools/parteienCHAD/CantonTable";
import GroupTable from "@/components/tools/parteienCHAD/GroupTable";

const CompView = () => {
    const [compViewState, setCompViewState] = useState({});

    const handleCompViewButtonClick = (countryId, viewType) => {
        setCompViewState((prevState) => ({
            ...prevState,
            [countryId]: {
                ...prevState[countryId],
                view: viewType,
                sortBy: 'name',
                sortDirection: 'asc',
            },
        }));
    };

    return (
        <div id="compView" className="mt-8 flex flex-col gap-8">
            {countries.map((country) => (
                <div key={country.id} className="bg-gray-800 p-4 rounded shadow">
                    {/* Flagge und Buttons */}
                    <div className="flex flex-col items-center mb-4">
                        <span className="text-4xl">{country.flag}</span>
                        <span className="mt-2 text-lg">{country.name}</span>
                    </div>
                    <div className="flex md:space-x-2 mb-4 justify-center md:flex-row md:gap-y-0 gap-y-4 flex-col">
                        <button
                            onClick={() => handleCompViewButtonClick(country.id, 'cantons')}
                            className={`px-3 py-1 rounded ${
                                compViewState[country.id]?.view === 'cantons'
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-700 text-white hover:bg-gray-600'
                            }`}
                        >
                            Kantone/Bundesländer
                        </button>
                        <button
                            onClick={() => handleCompViewButtonClick(country.id, 'groups')}
                            className={`px-3 py-1 rounded ${
                                compViewState[country.id]?.view === 'groups'
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-700 text-white hover:bg-gray-600'
                            }`}
                        >
                            Gruppen
                        </button>
                    </div>

                    {/* Inhalt basierend auf ausgewählter Ansicht */}
                    {compViewState[country.id]?.view === 'cantons' && (
                        <CantonTable countryId={country.id} />
                    )}

                    {compViewState[country.id]?.view === 'groups' && (
                        <GroupTable countryId={country.id} />
                    )}
                </div>
            ))}
        </div>
    );
};

export default CompView;
