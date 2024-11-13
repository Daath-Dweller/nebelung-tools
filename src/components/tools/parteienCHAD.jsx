import React, { useState } from 'react';
import { countries, regions, parties, seatDistributions } from '@/data/parteiendata.ts';

const Parteien = () => {
    const [selectedCountryId, setSelectedCountryId] = useState(null);
    const [selectedRegionId, setSelectedRegionId] = useState(null);
    const [selectedGroupAbbr, setSelectedGroupAbbr] = useState(null);
    const [isInfoVisible, setIsInfoVisible] = useState(false); // Neuer State für Info-Text

    const handleCountryChange = (e) => {
        const countryId = parseInt(e.target.value, 10);
        setSelectedCountryId(countryId);
        setSelectedRegionId(null); // Reset region selection
        setSelectedGroupAbbr(null); // Reset group selection
        setIsInfoVisible(false); // Reset Info-Text
    };

    const handleRegionChange = (e) => {
        const value = e.target.value;
        const regionId = value === '' ? null : parseInt(value, 10);
        setSelectedRegionId(regionId);
        setSelectedGroupAbbr(null); // Reset group selection
        setIsInfoVisible(false); // Reset Info-Text
    };

    const handleGroupButtonClick = (groupAbbr) => {
        // Toggle group selection
        setSelectedGroupAbbr((prevGroupAbbr) =>
            prevGroupAbbr === groupAbbr ? null : groupAbbr
        );
        setIsInfoVisible(false); // Reset Info-Text when group changes
    };

    const handleInfoIconClick = () => {
        setIsInfoVisible((prev) => !prev);
    };

    const filteredRegions = regions.filter(
        (region) => region.countryId === selectedCountryId
    );

    let seatDistributionForDisplay;

    if (selectedRegionId === 0) {
        // "Durchschnitt" selected
        const regionsInCountry = regions.filter(
            (region) => region.countryId === selectedCountryId
        );
        const regionIdsInCountry = regionsInCountry.map((region) => region.id);

        // Get all seat distributions for the selected country
        const seatDistributionsInCountry = seatDistributions.filter((seat) =>
            regionIdsInCountry.includes(seat.regionId)
        );

        // Sum up seats per party across all regions
        const seatsPerParty = {};
        seatDistributionsInCountry.forEach((seat) => {
            if (!seatsPerParty[seat.partyId]) {
                seatsPerParty[seat.partyId] = 0;
            }
            seatsPerParty[seat.partyId] += seat.seats;
        });

        // Convert to an array for rendering
        seatDistributionForDisplay = Object.keys(seatsPerParty).map((partyId) => ({
            id: parseInt(partyId, 10),
            partyId: parseInt(partyId, 10),
            seats: seatsPerParty[partyId],
        }));
    } else if (selectedRegionId !== null) {
        // Specific region selected
        seatDistributionForDisplay = seatDistributions.filter(
            (seat) => seat.regionId === selectedRegionId
        );
    } else {
        seatDistributionForDisplay = [];
    }

    // Calculate the maximum number of seats for normalization
    const maxSeats =
        seatDistributionForDisplay && seatDistributionForDisplay.length > 0
            ? Math.max(...seatDistributionForDisplay.map((seat) => seat.seats))
            : 0;

    // Calculate the total number of seats
    const totalSeats = seatDistributionForDisplay.reduce(
        (sum, seat) => sum + seat.seats,
        0
    );

    // Filter parties based on selected group abbreviation
    const partiesInSelectedGroup = selectedGroupAbbr
        ? parties.filter(
            (party) =>
                party.groupAbbr === selectedGroupAbbr &&
                party.countryId === selectedCountryId
        )
        : [];

    // Extract the group name from the first party
    const groupName =
        selectedGroupAbbr && partiesInSelectedGroup.length > 0
            ? partiesInSelectedGroup[0].group
            : '';

    return (
        <div className="p-12 bg-black text-white m-3">
            <h1>Land wählen (CHAD-Region)</h1>
            {/* Country Selection */}
            <select
                onChange={handleCountryChange}
                value={selectedCountryId || ''}
                className="text-black mt-2 p-1"
            >
                <option value="">Land wählen</option>
                {countries.map((country) => (
                    <option key={country.id} value={country.id}>
                        {country.name}
                    </option>
                ))}
            </select>

            {/* Region Selection */}
            {selectedCountryId && (
                <>
                    <h2 className="mt-4">Region wählen</h2>
                    <select
                        onChange={handleRegionChange}
                        value={selectedRegionId !== null ? selectedRegionId : ''}
                        className="text-black mt-2 p-1"
                    >
                        <option value="">Wähle Region</option>
                        <option value="0">Durchschnitt</option>
                        {filteredRegions.map((region) => (
                            <option key={region.id} value={region.id}>
                                {region.name}
                            </option>
                        ))}
                    </select>
                </>
            )}

            {/* Sonderfall Appenzell Innerrhoden */}
            {selectedRegionId === 5 && (
                <div className="mt-6">
                    <p>
                        Appenzell Innerrhoden verfügt über ein einzigartiges politisches System, das
                        sich von anderen Schweizer Kantonen unterscheidet. Die wichtigsten
                        kantonalen Entscheidungen, einschließlich Wahlen und Abstimmungen, werden
                        traditionell an der Landsgemeinde getroffen. Diese jährliche Versammlung
                        findet unter freiem Himmel statt, wo die Stimmberechtigten durch Handerheben
                        oder Zuruf über verschiedene Geschäfte entscheiden. Daher gibt es in
                        Appenzell Innerrhoden keine klassischen kantonalen Wahlergebnisse, wie sie in
                        anderen Kantonen üblich sind.
                    </p>
                </div>
            )}

            {/* Display Parties and Seat Distribution */}
            {selectedRegionId !== null && seatDistributionForDisplay.length > 0 && (
                <div>
                    <h3 className="mt-6">
                        Aktuelle Sitzverteilung in{' '}
                        {selectedRegionId === 0
                            ? countries.find((c) => c.id === selectedCountryId)?.name
                            : regions.find((r) => r.id === selectedRegionId)?.name}
                    </h3>
                    <div className="flex items-end h-[300px] mt-5">
                        {seatDistributionForDisplay.map((seat) => {
                            const party = parties.find((p) => p.id === seat.partyId);
                            const heightPercent = (seat.seats / maxSeats) * 100;
                            const percentage =
                                totalSeats > 0
                                    ? ((seat.seats / totalSeats) * 100).toFixed(1)
                                    : 0;

                            return (
                                <div
                                    key={seat.id}
                                    className="flex-1 mx-1 relative group border border-white"
                                    style={{
                                        height: `${heightPercent}%`,
                                        backgroundColor: party?.color || '#FFFFFF',
                                    }}
                                    title={`${party?.name} (${party?.abbreviation}): ${
                                        seat.seats
                                    } Sitze (${percentage}%)`}
                                >
                                    <div className="absolute bottom-full mb-2 left-0 right-0 hidden group-hover:block">
                                        <div className="bg-gray-800 text-white text-xs rounded py-1 px-2">
                                            {party?.name} ({party?.abbreviation}) <br />
                                            <br /> {seat.seats} Sitze ({percentage}%)
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Group Buttons */}
                    <div className="mt-6">
                        <button
                            onClick={() => handleGroupButtonClick('TBR')}
                            className={`px-4 py-2 mr-2 ${
                                selectedGroupAbbr === 'TBR'
                                    ? 'bg-blue-500'
                                    : 'bg-gray-700 hover:bg-gray-600'
                            }`}
                        >
                            TBR
                        </button>
                        <button
                            onClick={() => handleGroupButtonClick('KMUA')}
                            className={`px-4 py-2 mr-2 ${
                                selectedGroupAbbr === 'KMUA'
                                    ? 'bg-blue-500'
                                    : 'bg-gray-700 hover:bg-gray-600'
                            }`}
                        >
                            KMUA
                        </button>
                        <button
                            onClick={() => handleGroupButtonClick('LGP')}
                            className={`px-4 py-2 ${
                                selectedGroupAbbr === 'LGP'
                                    ? 'bg-blue-500'
                                    : 'bg-gray-700 hover:bg-gray-600'
                            }`}
                        >
                            LGP
                        </button>
                    </div>

                    {/* Display Parties in Selected Group */}
                    {selectedGroupAbbr && partiesInSelectedGroup.length > 0 && (
                        <div className="mt-4">
                            <div className="flex items-center">
                                <p className="mr-2 font-extrabold">
                                    {selectedGroupAbbr} ({groupName}):
                                </p>
                                { selectedCountryId === 1 && (  <span
                                    onClick={handleInfoIconClick}
                                    className="cursor-pointer text-blue-500"
                                >
                               {/* Info Icon */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z"
                                        />
                                    </svg>
                                </span>
                                )}
                            </div>
                            {/* Info Text */}
                            {isInfoVisible &&  (
                                <div className="mt-2 text-sm bg-gray-800 p-2 rounded">
                                    Offizielle Einordnung nach&nbsp;
                                    <a
                                        href="https://www.bfs.admin.ch/asset/de/30146543"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-400 underline"
                                    >
                                       BFS
                                    </a>

                                </div>
                            )}
                            {partiesInSelectedGroup.map((party) => (
                                <p key={party.id}>
                                    {party.name} ({party.abbreviation})
                                </p>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Parteien;
