import React, {useState} from 'react';
import {countries, parties, regions, seatDistributions} from '@/data/parteiendata.ts';
import CantonTable from "@/components/tools/parteienCHAD/CantonTable";
import GroupTable from "@/components/tools/parteienCHAD/GroupTable";

const Parteien = () => {
    const [selectedCountryId, setSelectedCountryId] = useState(null);
    const [selectedRegionId, setSelectedRegionId] = useState(null);
    const [selectedGroupAbbr, setSelectedGroupAbbr] = useState(null);
    const [showBarNames, setShowBarNames] = useState(false);
    const [groupDistribution, setGroupDistribution] = useState(null);
    const [isInfoVisible, setIsInfoVisible] = useState(false);
    const [viewGovSeats, setViewGovSeats] = useState(true);
    const [viewComp, setViewComp] = useState(false);
    const [compViewState, setCompViewState] = useState({
        countryId: {view: 'cantons' | 'groups', sortBy: 'name' | 'seats' | 'group', sortDirection: 'asc' | 'desc'}
    });


    const handleCountryChange = (e) => {
        const countryId = parseInt(e.target.value, 10);
        setSelectedCountryId(countryId);
        setSelectedRegionId(null);
        setSelectedGroupAbbr(null);
        setShowBarNames(false);
        setGroupDistribution(null);
        setIsInfoVisible(false);
    };

    const handleRegionChange = (e) => {
        const value = e.target.value;
        const regionId = value === '' ? null : parseInt(value, 10);
        setSelectedRegionId(regionId);
        setSelectedGroupAbbr(null);
        setShowBarNames(false);
        setGroupDistribution(null);
        setIsInfoVisible(false);
    };

    const handleGroupButtonClick = (groupAbbr) => {
        setSelectedGroupAbbr((prevGroupAbbr) =>
            prevGroupAbbr === groupAbbr ? null : groupAbbr
        );
        setIsInfoVisible(false);
    };

    const handleInfoIconClick = () => {
        setIsInfoVisible((prev) => !prev);
    };

    const toggleBarNames = () => {
        setShowBarNames((prev) => !prev);
    };

    const toggleGovSeats = () => {
        setViewGovSeats((prev) => !prev);
        setViewComp(false)
    };

    const toggleComp = () => {
        setViewComp((prev) => !prev);
        setViewGovSeats(false)
    };

    const calculateGroupDistribution = () => {
        if (!seatDistributionForDisplay.length) return;

        const groups = {
            TBR: {seats: 0},
            KMUA: {seats: 0},
            LGP: {seats: 0},
        };

        seatDistributionForDisplay.forEach((seat) => {
            const party = parties.find((p) => p.id === seat.partyId);
            if (party?.groupAbbr && groups[party.groupAbbr]) { // Absicherung gegen undefined
                groups[party.groupAbbr].seats += seat.seats;
            }
        });

        const totalSeats = seatDistributionForDisplay.reduce(
            (sum, seat) => sum + seat.seats,
            0
        );

        const distribution = Object.entries(groups)
            .map(([abbr, data]) => {
                const percentage = totalSeats
                    ? ((data.seats / totalSeats) * 100).toFixed(1)
                    : 0;
                return `${data.seats} Sitze (${percentage}%) ${abbr}`;
            })
            .join(' zu ');

        setGroupDistribution(distribution);
    };


    const filteredRegions = regions.filter(
        (region) => region.countryId === selectedCountryId
    );

    let seatDistributionForDisplay;

    if (selectedRegionId === 0) {
        const regionsInCountry = regions.filter(
            (region) => region.countryId === selectedCountryId
        );
        const regionIdsInCountry = regionsInCountry.map((region) => region.id);

        const seatDistributionsInCountry = seatDistributions.filter((seat) =>
            regionIdsInCountry.includes(seat.regionId)
        );

        const seatsPerParty = {};
        seatDistributionsInCountry.forEach((seat) => {
            if (!seatsPerParty[seat.partyId]) {
                seatsPerParty[seat.partyId] = 0;
            }
            seatsPerParty[seat.partyId] += seat.seats;
        });

        seatDistributionForDisplay = Object.keys(seatsPerParty).map((partyId) => ({
            id: parseInt(partyId, 10),
            partyId: parseInt(partyId, 10),
            seats: seatsPerParty[partyId],
        }));
    } else if (selectedRegionId !== null) {
        seatDistributionForDisplay = seatDistributions.filter(
            (seat) => seat.regionId === selectedRegionId
        );
    } else {
        seatDistributionForDisplay = [];
    }

    const maxSeats =
        seatDistributionForDisplay && seatDistributionForDisplay.length > 0
            ? Math.max(...seatDistributionForDisplay.map((seat) => seat.seats))
            : 0;

    const totalSeats = seatDistributionForDisplay.reduce(
        (sum, seat) => sum + seat.seats,
        0
    );

    const partiesInSelectedGroup = selectedGroupAbbr
        ? parties.filter(
            (party) =>
                party.groupAbbr === selectedGroupAbbr &&
                party.countryId === selectedCountryId
        )
        : [];

    const groupName =
        selectedGroupAbbr && partiesInSelectedGroup.length > 0
            ? partiesInSelectedGroup[0].group
            : '';


    //Funktionen für CompView
    const handleCompViewButtonClick = (countryId, viewType) => {
        setCompViewState((prevState) => ({
            ...prevState, [countryId]: {
                ...prevState[countryId], view: viewType, sortBy: 'name', sortDirection: 'asc',
            },
        }));
    };

    const handleSort = (countryId, viewType, sortBy) => {
        setCompViewState((prevState) => {
            const currentSort = prevState[countryId]?.[viewType]?.sortBy;
            const currentDirection = prevState[countryId]?.[viewType]?.sortDirection;
            let newDirection = 'asc';
            if (currentSort === sortBy && currentDirection === 'asc') {
                newDirection = 'desc';
            } else if (currentSort === sortBy && currentDirection === 'desc') {
                newDirection = 'asc';
            }
            return {
                ...prevState, [countryId]: {
                    ...prevState[countryId], [viewType]: {
                        sortBy, sortDirection: newDirection,
                    },
                },
            };
        });
    };

    const getSortedData = (data, sortBy, sortDirection) => {
        const sorted = [...data];
        sorted.sort((a, b) => {
            if (sortBy === 'name') {
                if (a.name < b.name) return sortDirection === 'asc' ? -1 : 1;
                if (a.name > b.name) return sortDirection === 'asc' ? 1 : -1;
                return 0;
            } else if (sortBy === 'seats') {
                return sortDirection === 'asc' ? a.seats - b.seats : b.seats - a.seats;
            } else if (sortBy === 'group') {
                if (a.group < b.group) return sortDirection === 'asc' ? -1 : 1;
                if (a.group > b.group) return sortDirection === 'asc' ? 1 : -1;
                return 0;
            }
            return 0;
        });
        return sorted;
    };

    return (
        <div className="p-12 bg-black text-white m-3">


            <div id="buttons" className="flex justify-around">
                <button onClick={toggleGovSeats}
                        className="border-2 border-dotted border-white p-4 rounded bg-gray-700 text-white hover:border-black hover:text-black hover:bg-gray-200 hover:cursor-pointer">Regierungsübersichten
                    (Diagramme)
                </button>
                <button onClick={toggleComp}
                        className="border-2 border-dotted border-white p-4 rounded bg-gray-700 text-white hover:border-black hover:text-black hover:bg-gray-200 hover:cursor-pointer">Vergleichstabellen
                </button>
            </div>


            {viewComp && (<div id="compView" className="mt-8 grid grid-cols-1  gap-8">
                    {countries.map((country) => (<div key={country.id} className="bg-gray-800 p-4 rounded shadow">
                            {/* Flagge und Buttons */}
                            <div className="flex flex-col items-center mb-4">
                                <span className="text-4xl">{country.flag}</span>
                                <span className="mt-2 text-lg">{country.name}</span>
                            </div>
                            <div className="flex space-x-2 mb-4 justify-center">
                                <button
                                    onClick={() => handleCompViewButtonClick(country.id, 'cantons')}
                                    className={`px-3 py-1 rounded ${compViewState[country.id]?.view === 'cantons' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-white hover:bg-gray-600'}`}
                                >
                                    Kantone/Bundesländer
                                </button>
                                <button
                                    onClick={() => handleCompViewButtonClick(country.id, 'groups')}
                                    className={`px-3 py-1 rounded ${compViewState[country.id]?.view === 'groups' ? 'bg-blue-500 text-white' : 'bg-gray-700 text-white hover:bg-gray-600'}`}
                                >
                                    Gruppen
                                </button>
                            </div>

                            {/* Inhalt basierend auf ausgewählter Ansicht */}
                            {compViewState[country.id]?.view === 'cantons' && (<CantonTable countryId={country.id}/>)}

                            {compViewState[country.id]?.view === 'groups' && (<GroupTable countryId={country.id}/>)}
                        </div>))}
                </div>)}


            {viewGovSeats && (

                <div id="govSeats">
                    <div id="choose" className="py-8">
                        <h1>Land wählen (CHAD-Region)</h1>
                        <select
                            onChange={handleCountryChange}
                            value={selectedCountryId || ''}
                            className="text-black mt-2 p-1"
                        >
                            <option value="">Land wählen</option>
                            {countries.map((country) => (<option key={country.id} value={country.id}>
                                    {country.name} {country.flag}
                                </option>))}
                        </select>

                        {selectedCountryId && (<>
                                <h2 className="mt-4">Region wählen</h2>
                                <select
                                    onChange={handleRegionChange}
                                    value={selectedRegionId !== null ? selectedRegionId : ''}
                                    className="text-black mt-2 p-1"
                                >
                                    <option value="">Wähle Region</option>
                                    <option value="0">Gesamt</option>
                                    {filteredRegions.map((region) => (<option key={region.id} value={region.id}>
                                            {region.name}
                                        </option>))}
                                </select>
                            </>)}
                    </div>
                    {selectedRegionId !== null && (<div>
                            {selectedRegionId === 5 && (<div className="mt-6">
                                    <p>
                                        Appenzell Innerrhoden verfügt über ein einzigartiges politisches System,
                                        das
                                        sich von anderen Schweizer Kantonen unterscheidet. Die wichtigsten
                                        kantonalen Entscheidungen, einschließlich Wahlen und Abstimmungen,
                                        werden
                                        traditionell an der Landsgemeinde getroffen. Diese jährliche Versammlung
                                        findet unter freiem Himmel statt, wo die Stimmberechtigten durch
                                        Handerheben
                                        oder Zuruf über verschiedene Geschäfte entscheiden. Daher gibt es in
                                        Appenzell Innerrhoden keine klassischen kantonalen Wahlergebnisse, wie
                                        sie in
                                        anderen Kantonen üblich sind.
                                    </p>
                                </div>)}

                            {seatDistributionForDisplay.length > 0 && (<>
                                <h3 className="pb-8 pt-6">
                                    Aktuelle Sitzverteilung in{' '}
                                    {selectedRegionId === 0 ? countries.find((c) => c.id === selectedCountryId)?.name : regions.find((r) => r.id === selectedRegionId)?.name}
                                </h3>

                                <div
                                    className="flex flex-col md:flex-row items-end h-[300px] mt-5 gap-y-1 md:gap-x-2">
                                    {seatDistributionForDisplay.map((seat) => {
                                        const party = parties.find((p) => p.id === seat.partyId);
                                        const heightPercent = (seat.seats / maxSeats) * 100;
                                        const percentage = totalSeats > 0 ? ((seat.seats / totalSeats) * 100).toFixed(1) : 0;

                                        return (<div
                                                key={seat.id}
                                                className="relative group border border-white md:flex-1 w-full mx-1"
                                                style={{
                                                    height: `${heightPercent}%`,
                                                    backgroundColor: party?.color || '#FFFFFF',
                                                }}
                                                title={`${party?.name} (${party?.abbreviation}): ${seat.seats} Sitze (${percentage}%)`}
                                            >
                                                <div
                                                    className={`absolute bottom-full mb-2 left-0 right-0 ${showBarNames ? 'block' : 'hidden group-hover:block'}`}
                                                >
                                                    <div
                                                        className="bg-gray-800 text-white text-xs rounded py-1 px-2">
                                                    <span
                                                        className="md:hidden block"> {party?.abbreviation}: {seat.seats} Sitze ({percentage}%)</span>
                                                        <span
                                                            className="hidden md:block"> {party?.name} ({party?.abbreviation})  <br/> {seat.seats} Sitze ({percentage}%)</span>


                                                    </div>
                                                </div>
                                            </div>);
                                    })}
                                </div>


                                <div
                                    className="mt-6 flex md:flex-row flex-col md:items-center gap-x-2 gap-y-4 md:gap-y-0">
                                    <div className="flex">
                                        <button
                                            onClick={() => handleGroupButtonClick('TBR')}
                                            className={`px-4 py-2 mr-2 ${selectedGroupAbbr === 'TBR' ? 'bg-blue-500' : 'bg-gray-700 hover:bg-gray-600'}`}
                                        >
                                            TBR
                                        </button>
                                        <button
                                            onClick={() => handleGroupButtonClick('KMUA')}
                                            className={`px-4 py-2 mr-2 ${selectedGroupAbbr === 'KMUA' ? 'bg-blue-500' : 'bg-gray-700 hover:bg-gray-600'}`}
                                        >
                                            KMUA
                                        </button>
                                        <button
                                            onClick={() => handleGroupButtonClick('LGP')}
                                            className={`px-4 py-2 mr-4 ${selectedGroupAbbr === 'LGP' ? 'bg-blue-500' : 'bg-gray-700 hover:bg-gray-600'}`}
                                        >
                                            LGP
                                        </button>
                                    </div>


                                    <div className="gap-x-2">
                                        <button
                                            onClick={toggleBarNames}
                                            className="bg-blue-500  px-4 md:py-2 text-white mr-2"
                                        >
                                            {showBarNames ? 'Infos ausblenden' : 'Infos anzeigen'}
                                        </button>
                                        <button
                                            onClick={calculateGroupDistribution}
                                            className="bg-green-500 mt-2 md:mt-0 px-4 md:py-2 text-white md:ml-2"
                                        >
                                            Gruppenverteilung
                                        </button>
                                    </div>

                                    {/* TODO: Mobiles Layout, alles untereinander */}
                                    {/* Info Icon */}
                                    {selectedCountryId === 1 && (<span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                onClick={handleInfoIconClick}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
                                />
                            </svg>
                        </span>)}

                                    {/* Info Text */}


                                    {isInfoVisible && (<div className="text-sm bg-gray-800 p-2 rounded">
                                            Offizielle Einordnung nach&nbsp;
                                            <a
                                                href="https://www.bfs.admin.ch/asset/de/30146543"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-blue-400 underline"
                                            >
                                                BFS
                                            </a>
                                        </div>)}


                                </div>

                                {groupDistribution && (<div className="mt-4">
                                        <p className="font-bold">Gruppenverteilung:</p>
                                        <p>{groupDistribution}</p>
                                    </div>)}

                                {selectedGroupAbbr && partiesInSelectedGroup.length > 0 && (<div className="mt-4">
                                        <p className="font-extrabold">
                                            {selectedGroupAbbr} ({groupName}):
                                        </p>
                                        {partiesInSelectedGroup.map((party) => (<p key={party.id}>
                                                {party.name} ({party.abbreviation})
                                            </p>))}
                                    </div>)}


                            </>)}
                        </div>

                    )}
                </div>


            )}


        </div>

    );
};

export default Parteien;
