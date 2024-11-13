// Parteien.jsx
import React, { useState } from 'react';
import { countries, regions, parties, seatDistributions } from '@/data/parteiendata.ts';

const Parteien = () => {
    const [selectedCountryId, setSelectedCountryId] = useState(null);
    const [selectedRegionId, setSelectedRegionId] = useState(null);

    const handleCountryChange = (e) => {
        const countryId = parseInt(e.target.value, 10);
        setSelectedCountryId(countryId);
        setSelectedRegionId(null); // Reset region selection
    };

    const handleRegionChange = (e) => {
        const value = e.target.value;
        const regionId = value === '' ? null : parseInt(value, 10);
        setSelectedRegionId(regionId);
    };

    const filteredRegions = regions.filter((region) => region.countryId === selectedCountryId);

    let seatDistributionForDisplay;

    if (selectedRegionId === 0) {
        // "Gesamt" selected
        const regionsInCountry = regions.filter((region) => region.countryId === selectedCountryId);
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
            id: parseInt(partyId, 10), // Using partyId as id
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
                        <option value="0">Gesamt</option>
                        {filteredRegions.map((region) => (
                            <option key={region.id} value={region.id}>
                                {region.name}
                            </option>
                        ))}
                    </select>
                </>
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

                            return (
                                <div
                                    key={seat.id}
                                    className="flex-1 mx-1 relative group border border-white"
                                    style={{
                                        height: `${heightPercent}%`,
                                        backgroundColor: party?.color || '#FFFFFF',
                                    }}
                                    title={`${party?.name} (${party?.abbreviation}): ${seat.seats} Sitze`}
                                >
                                    {/* Tooltip on hover */}
                                    <div className="absolute bottom-full mb-2 left-0 right-0 hidden group-hover:block">
                                        <div className="bg-gray-800 text-white text-xs rounded py-1 px-2">
                                            {party?.name} ({party?.abbreviation}): {seat.seats} Sitze
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Parteien;
