import React, { useState } from "react";
import { pokemonData, typenData } from "@/app/data/pkmndata.ts";

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Funktioniert für Scrollen nach oben
}

const PokeTable = () => {
    const [displayedCount, setDisplayedCount] = useState(100);
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'asc' });
    const [showInfo, setShowInfo] = useState(false);
    const [showStats, setShowStats] = useState(true); // Neuer State für die Anzeige der Statuswerte
    const [hideLegendary, setHideLegendary] = useState(false); // Neuer State für das Ausblenden legendärer Pokémon

    const loadMorePokemon = () => {
        setDisplayedCount((prevCount) => prevCount + 100);
    };

    const loadAllPokemon = () => {
        setDisplayedCount(pokemonData.length);
    };

    const toggleHideLegendary = () => {
        setHideLegendary((prev) => !prev);
    };

    const getTypeDataSum = (type1, type2) => {
        const type1Data = typenData.find(t => t.name === type1) || { offensiv: 0, defensiv: 0 };
        const type2Data = typenData.find(t => t.name === type2) || { offensiv: 0, defensiv: 0 };

        const offensivSum = type1Data.offensiv + type2Data.offensiv;
        const defensivSum = type1Data.defensiv + type2Data.defensiv;

        return { offensivSum, defensivSum };
    };

    const calculateGD = (defensivSum, defense, specialDefense, hp) => {
        let gd = defensivSum + defense + specialDefense;
        if (defense <= 252 || specialDefense <= 252) {
            gd -= 150;
        }
        if (defense >= specialDefense) {
            gd += defense;
            gd += defensivSum * defense;
        } else {
            gd += specialDefense;
            gd += defensivSum * specialDefense;
        }
        gd += hp * 6;
        gd = gd / 10;
        return Math.round(gd);
    };

    const calculateGO = (offensivSum, attack, specialAttack, speed) => {
        let go = offensivSum + attack + specialAttack;
        if (attack <= 252 || specialAttack <= 252) {
            go -= 150;
        }
        if (attack >= specialAttack) {
            go += attack;
            go += offensivSum * attack;
        } else {
            go += specialAttack;
            go += offensivSum * specialAttack;
        }
        go += speed * 6;
        go = go / 10;
        return Math.round(go);
    };

    const filteredPokemon = pokemonData.filter(pokemon => !hideLegendary || pokemon.id < 5000);

    const sortedPokemon = [...filteredPokemon.slice(0, displayedCount)].sort((a, b) => {
        if (!sortConfig.key) return 0;

        const getComparableValue = (pokemon) => {
            if (sortConfig.key === "GD") {
                const { defensivSum } = getTypeDataSum(pokemon.type1, pokemon.type2);
                return calculateGD(defensivSum, pokemon.stats.defense, pokemon.stats.specialDefense, pokemon.stats.hp);
            }
            if (sortConfig.key === "GO") {
                const { offensivSum } = getTypeDataSum(pokemon.type1, pokemon.type2);
                return calculateGO(offensivSum, pokemon.stats.attack, pokemon.stats.specialAttack, pokemon.stats.speed);
            }
            if (sortConfig.key === "offensivSum" || sortConfig.key === "defensivSum") {
                const { offensivSum, defensivSum } = getTypeDataSum(pokemon.type1, pokemon.type2);
                return sortConfig.key === "offensivSum" ? offensivSum : defensivSum;
            }
            if (sortConfig.key === "sumStats") {
                return pokemon.stats.hp + pokemon.stats.attack + pokemon.stats.defense +
                    pokemon.stats.specialAttack + pokemon.stats.specialDefense + pokemon.stats.speed;
            }
            if (sortConfig.key.includes("stats")) {
                return pokemon.stats[sortConfig.key.split('.')[1]];
            }
            return pokemon[sortConfig.key];
        };

        const aValue = getComparableValue(a);
        const bValue = getComparableValue(b);

        if (typeof aValue === "string") {
            return sortConfig.direction === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
        } else {
            return sortConfig.direction === 'asc' ? aValue - bValue : bValue - aValue;
        }
    });

    const handleSort = (key) => {
        setSortConfig((prevConfig) => {
            if (prevConfig.key === key && prevConfig.direction === 'asc') {
                return { key, direction: 'desc' };
            }
            return { key, direction: 'asc' };
        });
    };

    const renderSortArrow = (key) => {
        if (sortConfig.key === key) {
            return sortConfig.direction === 'asc' ? '↑' : '↓';
        }
        return '⇅';
    };

    return (
        <div className="md:p-12 p-4 bg-black text-white m-3">
            <div className="flex justify-between items-center mb-2">
                <h1 className="text-2xl font-bold pl-4 pt-2">Pokemon</h1>
                <button onClick={() => setShowInfo(!showInfo)} className="text-white bg-gray-600 px-2 py-1 rounded">
                    ℹ️
                </button>
                <button onClick={() => setShowStats(!showStats)} className="text-white bg-gray-600 px-2 py-1 rounded">
                    {showStats ? "Basiswerte zuklappen" : "Basiswerte anzeigen"}
                </button>
                <button onClick={toggleHideLegendary}
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                    {hideLegendary ? "Legendäre und Sonderformen anzeigen" : "Legendäre und Sonderformen ausblenden"}
                </button>
            </div>
            {showInfo && (
                <div className="bg-gray-800 text-white p-4 rounded-md m-6 mx-auto">
                    Typ-Offensive und Typ-Defensive ergeben sich aus der Summe von sehr effektiven, nicht effektiven und
                    wirkungslosen Angriffen gegen ein Pokemon oder von einem Pokemon ausgehend.
                    Normale Effektivität gibt 1 Punkt. Sehr effektiv 2 Punkte. Nicht effektiv 2 Punkte Abzug und wirkungslos 6 Punkte Abzug. Gleichsam negativ angewendet für Abwehr gegen Typen.<br/>
                    Weitere Erklärungen
                </div>
            )}
            <div className="flex gap-4">
                {displayedCount < pokemonData.length && (
                    <button onClick={loadAllPokemon} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Alle Einträge laden ({pokemonData.length})
                    </button>
                )}

            </div>
            <div className="text-center mt-12">
                <h2 className="text-lg mb-4">Pokémon Liste (Deutsch) - inklusive aller Sonderformen</h2>

                <table className="table-auto w-full border-collapse">
                    <thead>
                    <tr>
                        {[
                            { key: "id", label: "Nr." },
                            { key: "name_de", label: "Name" },
                            { key: "type1", label: "Typ 1" },
                            { key: "type2", label: "Typ 2" },
                            { key: "offensivSum", label: "Typ-Off" },
                            { key: "defensivSum", label: "Typ-Def" },
                            ...(showStats ? [
                                { key: "stats.hp", label: "HP" },
                                { key: "stats.attack", label: "Angr." },
                                { key: "stats.defense", label: "Vert." },
                                { key: "stats.specialAttack", label: "Sp-Angr." },
                                { key: "stats.specialDefense", label: "Sp-Vert." },
                                { key: "stats.speed", label: "Init." },
                                { key: "sumStats", label: "Summe" },
                            ] : []),
                            { key: "GD", label: "GD" },
                            { key: "GO", label: "GO" },
                        ].map((col) => (
                            <th
                                key={col.key}
                                onClick={() => handleSort(col.key)}
                                className="border border-gray-600 p-2 cursor-pointer text-left"
                            >
                                {col.label} {renderSortArrow(col.key)}
                            </th>
                        ))}
                    </tr>
                    </thead>
                    <tbody>
                    {sortedPokemon.map((pokemon) => {
                        const sumStats = pokemon.stats.hp + pokemon.stats.attack + pokemon.stats.defense +
                            pokemon.stats.specialAttack + pokemon.stats.specialDefense + pokemon.stats.speed;

                        const { offensivSum, defensivSum } = getTypeDataSum(pokemon.type1, pokemon.type2);
                        const gd = calculateGD(defensivSum, pokemon.stats.defense, pokemon.stats.specialDefense, pokemon.stats.hp);
                        const go = calculateGO(offensivSum, pokemon.stats.attack, pokemon.stats.specialAttack, pokemon.stats.speed);

                        return (
                            <tr key={pokemon.id} className="border-t border-gray-600">
                                <td className="border border-gray-600 p-2">{pokemon.id}</td>
                                <td className="border border-gray-600 p-2">
                                    {pokemon.id >= 10033 && pokemon.id <= 10090 ? `Mega-${pokemon.name_de}` :
                                        pokemon.id >= 10091 && pokemon.id <= 10115 ? `Alola-${pokemon.name_de}` :
                                            pokemon.id >= 10195 && pokemon.id <= 10228 ? `G-Max-${pokemon.name_de}` :
                                                pokemon.id >= 10229 && pokemon.id <= 10244 ? `Hisui-${pokemon.name_de}` :
                                                    pokemon.id >= 10250 && pokemon.id <= 10253 ? `Paldea-${pokemon.name_de}` :

                                                        pokemon.id >= 10161 && pokemon.id <= 10180 ? `Galar-${pokemon.name_de}` :

                                                            pokemon.name_de}
                                </td>

                                <td className="border border-gray-600 p-2">{pokemon.type1}</td>
                                <td className="border border-gray-600 p-2">{pokemon.type2 || "-"}</td>
                                <td className="border border-gray-600 p-2">{offensivSum}</td>
                                <td className="border border-gray-600 p-2">{defensivSum}</td>
                                {showStats && (
                                    <>
                                        <td className="border border-gray-600 p-2">{pokemon.stats.hp}</td>
                                        <td className="border border-gray-600 p-2">{pokemon.stats.attack}</td>
                                        <td className="border border-gray-600 p-2">{pokemon.stats.defense}</td>
                                        <td className="border border-gray-600 p-2">{pokemon.stats.specialAttack}</td>
                                        <td className="border border-gray-600 p-2">{pokemon.stats.specialDefense}</td>
                                        <td className="border border-gray-600 p-2">{pokemon.stats.speed}</td>
                                        <td className="border border-gray-600 p-2">{sumStats}</td>
                                    </>
                                )}

                                <td className="border border-gray-600 p-2">{gd}</td>
                                <td className="border border-gray-600 p-2">{go}</td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>

                <div className="flex justify-center gap-2 mt-4">
                    {displayedCount < filteredPokemon.length && (
                        <button onClick={loadMorePokemon} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Mehr laden
                        </button>
                    )}
                </div>

                <div className="flex justify-center mt-4">
                    <button onClick={scrollToTop} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Nach oben
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PokeTable;
