// GroupTable.jsx
import React, { useState, useMemo } from 'react';
import { regions, seatDistributions, parties } from '@/data/parteiendata.ts';

const GroupTable = ({ countryId }) => {
    const [sortConfig, setSortConfig] = useState({ key: 'name', direction: 'asc' });
    const [showSeats, setShowSeats] = useState(true);
    const [showPercentages, setShowPercentages] = useState(true);

    // Definierte Gruppen
    const groups = ['LGP', 'KMUA', 'TBR'];

    // Filtern der Regionen basierend auf dem Land
    const countryRegions = useMemo(() => regions.filter(region => region.countryId === countryId), [countryId]);

    // Aggregieren der Sitzverteilungen pro Region und Gruppe
    const regionData = useMemo(() => {
        return countryRegions.map(region => {
            const seats = seatDistributions.filter(seat => seat.regionId === region.id);
            const totalSeats = seats.reduce((sum, seat) => sum + seat.seats, 0);
            const seatsByGroup = seats.reduce((acc, seat) => {
                const party = parties.find(p => p.id === seat.partyId);
                if (party) {
                    const group = party.groupAbbr;
                    acc[group] = (acc[group] || 0) + seat.seats;
                }
                return acc;
            }, {});
            // Berechnung der Prozentsätze auf eine Dezimalstelle gerundet
            const percentagesByGroup = {};
            groups.forEach(group => {
                percentagesByGroup[group] = totalSeats > 0
                    ? ((seatsByGroup[group] || 0) / totalSeats * 100).toFixed(1) // Änderung hier: von toFixed(2) zu toFixed(1)
                    : '0.0';
            });
            return { ...region, seatsByGroup, percentagesByGroup, totalSeats };
        });
    }, [countryRegions, parties, groups]);

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
                    // Annahme: sortConfig.key ist eine Gruppenabkürzung
                    const aValue = sortConfig.type === 'seats'
                        ? (a.seatsByGroup[sortConfig.key] || 0)
                        : (parseFloat(a.percentagesByGroup[sortConfig.key]) || 0); // Sicherstellen, dass Prozentwerte als Zahl verglichen werden
                    const bValue = sortConfig.type === 'seats'
                        ? (b.seatsByGroup[sortConfig.key] || 0)
                        : (parseFloat(b.percentagesByGroup[sortConfig.key]) || 0);
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
                    {groups.map(group => (
                        <React.Fragment key={group}>
                            {showSeats && (
                                <th
                                    className="px-4 py-2 cursor-pointer "
                                    onClick={() => requestSort(group, 'seats')}
                                >
                                    {group} Sitze {getSortIndicator(group, 'seats')}
                                </th>
                            )}
                            {showPercentages && (
                                <th
                                    className="px-4 py-2 cursor-pointer"
                                    onClick={() => requestSort(group, 'percentages')}
                                >
                                    {group} % {getSortIndicator(group, 'percentages')}
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
                        {groups.map(group => (
                            <React.Fragment key={group}>
                                {showSeats && (
                                    <td className="border px-4 py-2">
                                        {region.seatsByGroup[group] || 0}
                                    </td>
                                )}
                                {showPercentages && (
                                    <td className="border px-4 py-2">
                                        {region.percentagesByGroup[group] || '0.0'}%
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

export default GroupTable;
