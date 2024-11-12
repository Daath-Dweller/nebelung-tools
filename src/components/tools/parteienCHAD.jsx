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
        const regionId = parseInt(e.target.value, 10);
        setSelectedRegionId(regionId);
    };

    const filteredRegions = regions.filter((region) => region.countryId === selectedCountryId);
    const filteredParties = parties.filter((party) => party.countryId === selectedCountryId);

    const seatDistributionForSelectedRegion = seatDistributions.filter(
        (seat) => seat.regionId === selectedRegionId
    );

    return (
        <div className="p-12 bg-black text-white m-3">
            <h1>Select a Country</h1>
            {/* Country Selection */}
            <select onChange={handleCountryChange} value={selectedCountryId || ''}>
                <option value="">--Select Country--</option>
                {countries.map((country) => (
                    <option key={country.id} value={country.id}>
                        {country.name}
                    </option>
                ))}
            </select>

            {/* Region Selection */}
            {selectedCountryId && (
                <>
                    <h2>Select a Region</h2>
                    <select onChange={handleRegionChange} value={selectedRegionId || ''}>
                        <option value="">--Select Region--</option>
                        {filteredRegions.map((region) => (
                            <option key={region.id} value={region.id}>
                                {region.name}
                            </option>
                        ))}
                    </select>
                </>
            )}

            {/* Display Parties and Seat Distribution */}
            {selectedRegionId && (
                <div>
                    <h3>Latest Seat Distribution in {regions.find((r) => r.id === selectedRegionId)?.name}</h3>
                    <ul>
                        {seatDistributionForSelectedRegion.map((seat) => {
                            const party = parties.find((p) => p.id === seat.partyId);
                            return (
                                <li key={seat.id}>
                                    <span style={{ color: party?.color || '#FFFFFF' }}>
                                        {party?.name} ({party?.abbreviation}): {seat.seats} seats
                                    </span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Parteien;
