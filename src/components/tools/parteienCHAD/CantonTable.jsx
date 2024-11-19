// CantonTable.jsx
import React, { useState, useMemo } from 'react';
import { regions, seatDistributions, parties } from '@/data/parteiendata.ts';

const CantonTable = ({ countryId }) => {
    const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'asc', type: 'name' });
    const [showSeats, setShowSeats] = useState(true);
    const [showPercentages, setShowPercentages] = useState(true);

    // Filtern der Regionen basierend auf dem Land
    const countryRegions = useMemo(() => regions.filter(region => region.countryId === countryId), [countryId]);

    // Gesamtzahl der Sitze pro Region berechnen und Prozentsätze berechnen
    const regionData = useMemo(() => {
        return countryRegions.map(region => {
            const seats = seatDistributions.filter(seat => seat.regionId === region.id);
            const totalSeats = seats.reduce((sum, seat) => sum + seat.seats, 0);
            const seatsByParty = seats.reduce((acc, seat) => {
                const party = parties.find(p => p.id === seat.partyId);
                if (party) {
                    acc[party.abbreviation] = (acc[party.abbreviation] || 0) + seat.seats;
                }
                return acc;
            }, {});
            // Berechnung der Prozentsätze auf eine Dezimalstelle gerundet
            const percentagesByParty = {};
            Object.keys(seatsByParty).forEach(abbr => {
                percentagesByParty[abbr] = totalSeats > 0
                    ? ((seatsByParty[abbr] / totalSeats) * 100).toFixed(1) // Änderung hier: von toFixed(2) zu toFixed(1)
                    : '0.0';
            });
            return { ...region, seatsByParty, percentagesByParty, totalSeats };
        });
    }, [countryRegions, parties]);

    // Ermitteln aller Parteien für die Tabellenüberschriften
    const allParties = useMemo(() => parties.filter(party => party.countryId === countryId), [countryId]);

    // Sortieren der Daten
    const sortedData = useMemo(() => {
        let sortableData = [...regionData];
        if (sortConfig !== null) {
            sortableData.sort((a, b) => {
                if (sortConfig.key === 'name') {
                    if (a.name < b.name) return sortConfig.direction === 'asc' ? -1 : 1;
                    if (a.name > b.name) return sortConfig.direction === 'asc' ? 1 : -1;
                    return 0;
                } else {
                    // Annahme: sortConfig.key ist eine Parteiabkürzung
                    const aValue = sortConfig.type === 'seats'
                        ? (a.seatsByParty[sortConfig.key] || 0)
                        : (parseFloat(a.percentagesByParty[sortConfig.key]) || 0); // parseFloat hinzugefügt
                    const bValue = sortConfig.type === 'seats'
                        ? (b.seatsByParty[sortConfig.key] || 0)
                        : (parseFloat(b.percentagesByParty[sortConfig.key]) || 0); // parseFloat hinzugefügt
                    if (aValue < bValue) return sortConfig.direction === 'asc' ? -1 : 1;
                    if (aValue > bValue) return sortConfig.direction === 'asc' ? 1 : -1;
                    return 0;
                }
            });
        }
        return sortableData;
    }, [regionData, sortConfig]);

    const requestSort = (key, type) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc' && sortConfig.type === type) {
            direction = 'desc';
        }
        setSortConfig({ key, direction, type });
    };

    const getSortIndicator = (key, type) => {
        if (sortConfig.key === key && sortConfig.type === type) {
            return sortConfig.direction === 'asc' ? '▲' : '▼';
        }
        return '⇅';
    };

    // Handler für Buttons
    const toggleSeats = () => setShowSeats(prev => !prev);
    const togglePercentages = () => setShowPercentages(prev => !prev);

    return (
        <div className="overflow-x-auto">
            {/* Buttons hinzufügen */}
            <div className="mb-4 flex space-x-2">
                <button
                    onClick={togglePercentages}
                    className={`px-4 py-2 rounded ${showPercentages ? 'bg-red-500' : 'bg-green-500'} text-white`}
                >
                    {showPercentages ? '% Werte ausblenden' : '% Werte anzeigen'}
                </button>
                <button
                    onClick={toggleSeats}
                    className={`px-4 py-2 rounded ${showSeats ? 'bg-red-500' : 'bg-green-500'} text-white`}
                >
                    {showSeats ? 'Sitze ausblenden' : 'Sitze anzeigen'}
                </button>
            </div>
            <table className="min-w-full bg-gray-700 text-white">
                <thead>
                <tr>
                    <th
                        className="px-4 py-2 cursor-pointer"
                        onClick={() => requestSort('name', 'name')}
                    >
                        Kanton/Bundesland {getSortIndicator('name', 'name')}
                    </th>
                    {allParties.map(party => (
                        <React.Fragment key={party.abbreviation}>
                            {showSeats && (
                                <th
                                    className="px-4 py-2 cursor-pointer"
                                    onClick={() => requestSort(party.abbreviation, 'seats')}
                                >
                                    {party.abbreviation} Sitze {getSortIndicator(party.abbreviation, 'seats')}
                                </th>
                            )}
                            {showPercentages && (
                                <th
                                    className="px-4 py-2 cursor-pointer"
                                    onClick={() => requestSort(party.abbreviation, 'percentages')}
                                >
                                    {party.abbreviation} % {getSortIndicator(party.abbreviation, 'percentages')}
                                </th>
                            )}
                        </React.Fragment>
                    ))}
                </tr>
                </thead>
                <tbody>
                {sortedData.map(region => (
                    <tr key={region.id} className="text-center hover:bg-gray-100 hover:text-black">
                        <td className="border px-4 py-2">{region.name}</td>
                        {allParties.map(party => (
                            <React.Fragment key={party.abbreviation}>
                                {showSeats && (
                                    <td className="border px-4 py-2">
                                        {region.seatsByParty[party.abbreviation] || 0}
                                    </td>
                                )}
                                {showPercentages && (
                                    <td className="border px-4 py-2">
                                        {region.percentagesByParty[party.abbreviation] || '0.0'}%
                                    </td>
                                )}
                            </React.Fragment>
                        ))}
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default CantonTable;
