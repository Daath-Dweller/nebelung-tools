// PokeTable.jsx
"use client";
import React, { useEffect, useState, useMemo } from "react";
import {
    generationRanges,
    legendaryIDs,
    lokalIDs,
    megaID,
    mysticIDs,
    paradoxIDs,
    pokemonData,
    ubIDs,
} from "@/data/pkmndata.ts";
import {
    scrollToTop,
    formatNumber,
    getDisplayName,
    getStatEmoji,
    getStatWithEmoji,
    getTypeDataSum,
    calculateSpeedBonus,
    calculateHPBonus,
    calculateGD,
    calculateGO,
    getNonExistentTypeCombinations,
    getUniqueTypeCombinations,
} from "@/components/tools/pkmn/helper.jsx";
import { dtkData, typenData, TypenBoni } from "@/data/pkmntypedata";
import ButtonGroup from "@/components/tools/pkmn/buttongroup.jsx";
import FilterControls from "@/components/tools/pkmn/filtercontrols";
import {FaBug, FaDragon, FaEye, FaEyeSlash, FaFireAlt, FaFistRaised, FaGhost, FaRegSnowflake} from "react-icons/fa";
import { TbIrregularPolyhedron, TbPlant } from "react-icons/tb";
import { SiStackblitz } from "react-icons/si";
import { GiArrowWings, GiDustCloud, GiFairy, GiPoisonBottle, GiSteelClaws, GiStonePile } from "react-icons/gi";
import { IoIosWater } from "react-icons/io";
import { MdDarkMode, MdOutlinePsychology } from "react-icons/md";
import { Infotext } from "@/components/tools/pkmn/infotext";
import NameFilter from "@/components/tools/pkmn/namefilter";
import {iconMappingPKMN} from "@/data/iconMapping";

const PokeTable = () => {
    // States
    const [displayedCount, setDisplayedCount] = useState(151); // Standard auf Gen 1 (151)
    const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
    const [showInfo, setShowInfo] = useState(false);
    const [showStats, setShowStats] = useState(true);
    const [showTypeValues, setShowTypeValues] = useState(false);
    const [selectedGeneration, setSelectedGeneration] = useState("Generation 1");
    const [selectedType1, setSelectedType1] = useState("beliebig");
    const [selectedType2, setSelectedType2] = useState("beliebig");
    const [showTypeText, setShowTypeText] = useState(true);
    const [typeCombinationOption, setTypeCombinationOption] = useState("");
    const [showUniqueTypes, setShowUniqueTypes] = useState(false);
    const [selectedTypeAny, setSelectedTypeAny] = useState("beliebig");
    const [isCardView, setIsCardView] = useState(false);
    const [legendaryState, setLegendaryState] = useState(0);
    const [ubState, setUbState] = useState(0);
    const [mysticState, setMysticState] = useState(0);
    const [paradoxState, setParadoxState] = useState(0);
    const [localsState, setLocalsState] = useState(0);
    const [megaState, setMegaState] = useState(0);
    const [nameFilter, setNameFilter] = useState(""); // State für Namensfilter
    const [showTypeFilter, setShowTypeFilter] = useState(true);
    const [showTextFilter, setShowTextFilter] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [evMode, setEvMode] = useState("keine"); // "keine", "schwaechen", "staerken"
    const [ignoreHP, setIgnoreHP] = useState(false);

    const maxValues = {
        hp: 255,
        attack: 190,
        defense: 250,
        specialAttack: 194,
        specialDefense: 250,
        speed: 200,
    };

    // Effekt, um die Buttons zurückzusetzen und auszublenden
    useEffect(() => {
        if (isCardView) {
            setShowStats(true);
            setShowTypeValues(false);
            setShowTypeText(true);
        }
    }, [isCardView]);

    // NEU: Funktion zum Umschalten des Typentextes
    const toggleShowTypeText = () => {
        setShowTypeText((prev) => !prev);
    };

    const toggleShowTypeFilter = () => {
        setShowTypeFilter((prev) => !prev);
    };

    const toggleShowTextFilter = () => {
        setShowTextFilter((prev) => !prev);
    };

    const toggleShowSearch = () => {
        setShowSearch((prev) => !prev);
    };

    const handleGenerationChange = (event) => {
        const selectedGen = event.target.value;
        setSelectedGeneration(selectedGen);

        if (selectedGen === "Alle Generationen") {
            setDisplayedCount(pokemonData.length);
        } else {
            const range = generationRanges[selectedGen];
            const count = pokemonData.filter(
                (pokemon) =>
                    (pokemon.id >= range.min && pokemon.id <= range.max) ||
                    range.extraIDs.includes(pokemon.id)
            ).length;
            setDisplayedCount(count);
        }

        scrollToTop(); // Optional: Nach Generationwechsel nach oben scrollen
    };

    // Neue Handler für Typfilter
    const handleType1Change = (event) => {
        setSelectedType1(event.target.value);
        scrollToTop(); // Optional: Nach Filterwechsel nach oben scrollen
    };

    const handleType2Change = (event) => {
        setSelectedType2(event.target.value);
        scrollToTop(); // Optional: Nach Filterwechsel nach oben scrollen
    };

    const handleTypeAnyChange = (event) => {
        setSelectedTypeAny(event.target.value);
        scrollToTop(); // Optional: Nach Filterwechsel nach oben scrollen
    };

    // NEU: Handler für die Typenkombinationsoption
    const handleTypeCombinationOptionChange = (event) => {
        setTypeCombinationOption(event.target.value);
        scrollToTop();
    };

    // Handlers für Sonderformen
    const handleLegendaryLeftClick = () => setLegendaryState((prev) => (prev === 2 ? 0 : 2));
    const handleLegendaryRightClick = () => setLegendaryState((prev) => (prev === 0 ? 1 : 0));

    const handleUbLeftClick = () => setUbState((prev) => (prev === 2 ? 0 : 2));
    const handleUbRightClick = () => setUbState((prev) => (prev === 0 ? 1 : 0));

    const handleMysticLeftClick = () => setMysticState((prev) => (prev === 2 ? 0 : 2));
    const handleMysticRightClick = () => setMysticState((prev) => (prev === 0 ? 1 : 0));

    const handleParadoxLeftClick = () => setParadoxState((prev) => (prev === 2 ? 0 : 2));
    const handleParadoxRightClick = () => setParadoxState((prev) => (prev === 0 ? 1 : 0));

    const handleLocalsLeftClick = () => setLocalsState((prev) => (prev === 2 ? 0 : 2));
    const handleLocalsRightClick = () => setLocalsState((prev) => (prev === 0 ? 1 : 0));

    const handleMegaLeftClick = () => setMegaState((prev) => (prev === 2 ? 0 : 2));
    const handleMegaRightClick = () => setMegaState((prev) => (prev === 0 ? 1 : 0));

    // useEffect für Typenkombinationsoption
    useEffect(() => {
        if (typeCombinationOption === "") {
            setShowUniqueTypes(false);
        } else {
            setShowUniqueTypes(true);
        }
    }, [typeCombinationOption]);

    // Beispielhafte Handler-Funktion für das EV-Verteilen:
    function distributeEVs(pokemon) {
        // Kopie der Stats holen
        const baseStats = {...pokemon.stats};

        // HP ignorieren, falls ausgewählt
        const statsToConsider = Object.entries(baseStats)
            .filter(([key]) => !ignoreHP || key !== "hp")
            .map(([key, value]) => ({ stat: key, val: value }));

        // Sortierung der Stats nach Wert
        statsToConsider.sort((a, b) => a.val - b.val);

        // 510 Gesamt-EV, 2x 252 + 8
        // Für "Schwächen ausgleichen" die schwächsten Stats maximieren
        // Für "Stärken betonen" die stärksten Stats maximieren (gleiche Logik, nur Reverse)
        let sortedStats;
        if (evMode === "schwaechen") {
            sortedStats = statsToConsider; // schwächste zuerst
        } else if (evMode === "staerken") {
            sortedStats = [...statsToConsider].reverse(); // stärkste zuerst
        } else {
            // Keine Verteilung
            return { ...pokemon.stats };
        }

        // EV-Verteilung: Erster Wert 252, zweiter 252, dritter 8. Rest 0.
        // Achtung: max 252 pro Wert und nur volle 8er Schritte zählen.
        // 8 Punkte = +1 Statuspunkt
        // 252 EV = +31 Statuspunkte
        // 8 EV = +1 Statuspunkt
        const evDistribution = {
            hp: 0,
            attack: 0,
            defense: 0,
            specialAttack: 0,
            specialDefense: 0,
            speed: 0
        };

        if (sortedStats.length > 0) evDistribution[sortedStats[0].stat] = 252;
        if (sortedStats.length > 1) evDistribution[sortedStats[1].stat] = 252;
        if (sortedStats.length > 2) evDistribution[sortedStats[2].stat] = 8;

        // Neuen Status berechnen:
        // Pro vollem 8er-Schritt EV gibt es +1 auf den Stat.
        // EV/4 bei Gen3-5 war relevant, hier aber nach Angabe: 8 EV = 1 Punkt.
        // Basis + (EV/8) aufgerundet ohne Reste
        const newStats = { ...pokemon.stats };
        for (const statKey in newStats) {
            const ev = evDistribution[statKey];
            if (ev > 0) {
                const increment = Math.floor(ev / 8);
                newStats[statKey] += increment;
            }
        }
        return newStats;
    }

    // Memoized Filtered Pokémon
    const filteredPokemon = useMemo(() => {
        return pokemonData.filter((pokemon) => {
            // Überprüfen von Sonderformen
            const isLegendary = legendaryIDs.includes(pokemon.id);
            const isUB = ubIDs.includes(pokemon.id);
            const isMystic = mysticIDs.includes(pokemon.id);
            const isParadox = paradoxIDs.includes(pokemon.id);
            const isLocal = lokalIDs.includes(pokemon.id);
            const isMega = megaID.includes(pokemon.id);

            // Nur bestimmte Filter aktiv
            const showOnlyFilters = [];
            if (legendaryState === 2) showOnlyFilters.push(isLegendary);
            if (ubState === 2) showOnlyFilters.push(isUB);
            if (mysticState === 2) showOnlyFilters.push(isMystic);
            if (paradoxState === 2) showOnlyFilters.push(isParadox);
            if (localsState === 2) showOnlyFilters.push(isLocal);
            if (megaState === 2) showOnlyFilters.push(isMega);

            if (showOnlyFilters.length > 0) {
                if (!showOnlyFilters.some((condition) => condition)) {
                    return false;
                }
            } else {
                // Ausschlussfilter
                if (legendaryState === 1 && isLegendary) return false;
                if (ubState === 1 && isUB) return false;
                if (mysticState === 1 && isMystic) return false;
                if (paradoxState === 1 && isParadox) return false;
                if (localsState === 1 && isLocal) return false;
                if (megaState === 1 && isMega) return false;
            }

            // Filter für Generationen
            const range = generationRanges[selectedGeneration];
            if (
                (pokemon.id < range.min || pokemon.id > range.max) &&
                !range.extraIDs.includes(pokemon.id)
            ) {
                return false;
            }

            // Filter für Typ 1
            if (selectedType1 !== "beliebig" && pokemon.type1 !== selectedType1) return false;

            // Filter für Typ 2
            if (selectedType2 === "keiner") {
                if (pokemon.type2) return false; // Pokémon hat einen zweiten Typ, also ausschließen
            } else if (selectedType2 !== "beliebig" && pokemon.type2 !== selectedType2) {
                return false; // Pokémon hat einen anderen zweiten Typ, also ausschließen
            }

            // Filter für Typ an beliebiger Stelle
            if (selectedTypeAny !== "beliebig") {
                if (pokemon.type1 !== selectedTypeAny && pokemon.type2 !== selectedTypeAny) return false;
            }

            // Filter für Namenssuche
            if (nameFilter && !pokemon.name_de.toLowerCase().includes(nameFilter)) return false;

            return true;
        });
    }, [
        legendaryState,
        ubState,
        mysticState,
        paradoxState,
        localsState,
        megaState,
        selectedGeneration,
        selectedType1,
        selectedType2,
        selectedTypeAny,
        nameFilter,
    ]);

    // Sortierte Pokémon
    // Im sortedPokemon useMemo: adjustedStats in die Sortierlogik integrieren
    const sortedPokemon = useMemo(() => {
        return [...filteredPokemon.slice(0, displayedCount)].sort((a, b) => {
            if (!sortConfig.key) return 0;

            // Verteile EVs, falls EV-Modus aktiv ist:
            const aStats = evMode !== "keine" ? distributeEVs(a) : a.stats;
            const bStats = evMode !== "keine" ? distributeEVs(b) : b.stats;

            const getComparableValue = (pokemon, stats) => {
                if (sortConfig.key === "GD") {
                    const { defensivSum } = getTypeDataSum(
                        pokemon.type1,
                        pokemon.type2,
                        pokemon.id,
                        typenData,
                        dtkData,
                        TypenBoni
                    );
                    return calculateGD(
                        defensivSum,
                        stats.defense,
                        stats.specialDefense,
                        stats.hp,
                        calculateHPBonus
                    );
                }
                if (sortConfig.key === "GO") {
                    const { offensivSum } = getTypeDataSum(
                        pokemon.type1,
                        pokemon.type2,
                        pokemon.id,
                        typenData,
                        dtkData,
                        TypenBoni
                    );
                    return calculateGO(
                        offensivSum,
                        stats.attack,
                        stats.specialAttack,
                        stats.speed,
                        calculateSpeedBonus
                    );
                }
                if (sortConfig.key === "GS") {
                    const { defensivSum, offensivSum } = getTypeDataSum(
                        pokemon.type1,
                        pokemon.type2,
                        pokemon.id,
                        typenData,
                        dtkData,
                        TypenBoni
                    );
                    const gd = calculateGD(
                        defensivSum,
                        stats.defense,
                        stats.specialDefense,
                        stats.hp,
                        calculateHPBonus
                    );
                    const go = calculateGO(
                        offensivSum,
                        stats.attack,
                        stats.specialAttack,
                        stats.speed,
                        calculateSpeedBonus
                    );
                    return gd + go;
                }
                if (sortConfig.key === "offensivSum" || sortConfig.key === "defensivSum") {
                    const { offensivSum, defensivSum } = getTypeDataSum(
                        pokemon.type1,
                        pokemon.type2,
                        pokemon.id,
                        typenData,
                        dtkData,
                        TypenBoni
                    );
                    return sortConfig.key === "offensivSum" ? offensivSum : defensivSum;
                }
                if (sortConfig.key === "typeSum") {
                    const { offensivSum, defensivSum } = getTypeDataSum(
                        pokemon.type1,
                        pokemon.type2,
                        pokemon.id,
                        typenData,
                        dtkData,
                        TypenBoni
                    );
                    return offensivSum + defensivSum;
                }
                if (sortConfig.key === "sumStats") {
                    return (
                        stats.hp +
                        stats.attack +
                        stats.defense +
                        stats.specialAttack +
                        stats.specialDefense +
                        stats.speed
                    );
                }
                if (sortConfig.key.includes("stats")) {
                    const statKey = sortConfig.key.split(".")[1];
                    return stats[statKey];
                }
                return pokemon[sortConfig.key];
            };

            const aValue = getComparableValue(a, aStats);
            const bValue = getComparableValue(b, bStats);

            if (typeof aValue === "string") {
                return sortConfig.direction === "asc"
                    ? aValue.localeCompare(bValue)
                    : bValue.localeCompare(aValue);
            } else {
                return sortConfig.direction === "asc" ? aValue - bValue : bValue - aValue;
            }
        });
    }, [filteredPokemon, displayedCount, sortConfig, evMode]);


    const handleSort = (key) => {
        if (key === "Pos") return; // Keine Aktion für "Pos"
        setSortConfig((prevConfig) => {
            if (prevConfig.key === key && prevConfig.direction === "asc") {
                return { key, direction: "desc" };
            }
            return { key, direction: "asc" };
        });
    };

    const renderSortArrow = (key) => {
        if (key === "Pos") return ""; // Zeige nichts für den "Pos"-Key

        return sortConfig.key === key
            ? sortConfig.direction === "asc"
                ? "↑"
                : "↓"
            : "⇅";
    };

    // NEU: Funktion zur Berechnung einmaliger Typenkombinationen
    const renderTypeCombinationInfo = () => {
        if (typeCombinationOption === "nonexistent") {
            const nonExistentCombinations = getNonExistentTypeCombinations(
                typenData,
                pokemonData
            );
            return (
                <div>
                    <h3 className="text-lg font-bold mb-2">
                        Nicht existierende Typenkombinationen:
                    </h3>
                    <p>{nonExistentCombinations.join(", ")}</p>
                </div>
            );
        } else if (typeCombinationOption === "unique") {
            const uniqueCombinations = getUniqueTypeCombinations(pokemonData);
            return (
                <div>
                    <h3 className="text-lg font-bold mb-2">
                        Einmalige Typenkombinationen:
                    </h3>
                    <p>{uniqueCombinations.join(", ")}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="md:p-12 p-4 relative bg-black text-white m-2 overflow-scroll items-center text-center">
            <button
                id="infoBtn"
                onClick={() => setShowInfo(!showInfo)}
                className={`absolute top-2 right-2 ${showInfo ? "bg-white" : ""} rounded-full text-white bg-gray-600 px-2 py-1 m-2 hover:bg-gray-800 border-2 border-teal-500 hover:border-white`}
            >
                ℹ️
            </button>

            <span className="font-extrabold">Ansicht</span>
            <div className="flex justify-center items-center mt-3">

                <span className="text-2xl mr-2">📋</span> {/* Tabellenansicht */}
                <div
                    className={`relative inline-block w-16 h-8 rounded-full cursor-pointer transition-colors duration-300 ${
                        isCardView ? "bg-teal-500" : "bg-gray-300"
                    }`}
                    onClick={() => setIsCardView(!isCardView)}
                >
                    <div
                        className={`absolute top-1 ${
                            isCardView ? "right-1" : "left-1"
                        } w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300`}
                    ></div>
                </div>
                <span className="text-2xl ml-2">📊</span> {/* Kachelansicht */}
            </div>

            <div className="flex flex-col justify-between items-center my-4 gap-x-2 gap-y-4">

                <span className="font-extrabold">Filter & Suche</span>
                <div className="flex flex-col md:flex-row  justify-center gap-2 items-center  ">
                    <div className="flex flex-col items-center">


                        <button onClick={toggleShowTypeFilter}
                                className={`p-2 ${showTypeFilter ? "bg-teal-500" : "bg-gray-400"} rounded`}>
                            {showTypeFilter ? <FaEye className="text-3xl"/> : <FaEyeSlash className="text-3xl"/>}
                        </button>
                    </div>
                    <div className="flex flex-col items-center">

                        <button onClick={toggleShowTextFilter}
                                className={`p-2 ${showTextFilter ? "bg-teal-500" : "bg-gray-400"} rounded`}>
                            {showTextFilter ? <FaEye className="text-3xl"/> : <FaEyeSlash className="text-3xl"/>}
                        </button>
                    </div>
                    <div className="flex flex-col items-center">

                        <button onClick={toggleShowSearch}
                                className={`p-2 ${showSearch ? "bg-teal-500" : "bg-gray-400"} rounded`}>
                            {showSearch ? <FaEye className="text-3xl"/> : <FaEyeSlash className="text-3xl"/>}
                        </button>
                    </div>
                </div>


                <div className={`${showTypeFilter ? "" : "hidden"} mt-1 flex flex-col md:flex-row items-center gap-2`}>
                    <FilterControls
                        selectedGeneration={selectedGeneration}
                        handleGenerationChange={handleGenerationChange}
                        selectedType1={selectedType1}
                        handleType1Change={handleType1Change}
                        selectedType2={selectedType2}
                        handleType2Change={handleType2Change}
                        selectedTypeAny={selectedTypeAny}
                        handleTypeAnyChange={handleTypeAnyChange}
                        typeCombinationOption={typeCombinationOption}
                        handleTypeCombinationOptionChange={handleTypeCombinationOptionChange}
                        evMode = {evMode}
                        setEvMode={setEvMode}
                        ignoreHP={ignoreHP}
                        setIgnoreHP={setIgnoreHP}
                    />
                </div>

                <div className={`${showTextFilter ? "" : "hidden"} mt-1 flex flex-col md:flex-row items-center gap-2`}>
                    <ButtonGroup
                        showStats={showStats}
                        setShowStats={setShowStats}
                        showTypeValues={showTypeValues}
                        setShowTypeValues={setShowTypeValues}
                        showTypeText={showTypeText}
                        toggleShowTypeText={toggleShowTypeText}
                        isCardView={isCardView}
                        legendaryState={legendaryState}
                        ubState={ubState}
                        mysticState={mysticState}
                        paradoxState={paradoxState}
                        localsState={localsState}
                        megaState={megaState}
                        handleMegaRightClick={handleMegaRightClick}
                        handleMegaLeftClick={handleMegaLeftClick}
                        handleLegendaryLeftClick={handleLegendaryLeftClick}
                        handleLegendaryRightClick={handleLegendaryRightClick}
                        handleUbLeftClick={handleUbLeftClick}
                        handleUbRightClick={handleUbRightClick}
                        handleMysticLeftClick={handleMysticLeftClick}
                        handleMysticRightClick={handleMysticRightClick}
                        handleParadoxLeftClick={handleParadoxLeftClick}
                        handleParadoxRightClick={handleParadoxRightClick}
                        handleLocalsLeftClick={handleLocalsLeftClick}
                        handleLocalsRightClick={handleLocalsRightClick}
                    /></div>

                <div className={`${showSearch ? "" : "hidden"} mt-1 flex flex-col md:flex-row items-center gap-2`}>
                    <NameFilter setNameFilter={setNameFilter}/></div>
            </div>

            {/* Einmalige Typenkombinationen Info */}
            {showUniqueTypes && (
                <div className="bg-gray-800 text-white p-4 rounded-md m-4 mx-auto">
                    <div className="mt-4">{renderTypeCombinationInfo()}</div>
                </div>
            )}

            {/* Info-Text */}
            {showInfo && (
                <div className="bg-gray-800 text-white p-4 rounded-md m-4 mx-auto">
                    <Infotext />
                </div>
            )}

            <div className="text-center mt-12 pr-2">
                <h2 className="text-lg font-extrabold mb-4">
                    Pokémon Liste (aktuell: {displayedCount})
                </h2>

                {isCardView ? (
                    // Kartenansicht
                    <div
                        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xlg:grid-cols-8 gap-4"
                    >
                        {sortedPokemon.map((pokemon, index) => {
                            // Angepasste EV-Stats berechnen:
                            const adjustedStats = distributeEVs(pokemon);

                            const { offensivSum, defensivSum } = getTypeDataSum(
                                pokemon.type1,
                                pokemon.type2,
                                pokemon.id,
                                typenData,
                                dtkData,
                                TypenBoni
                            );
                            const typeSum = offensivSum + defensivSum;
                            const gd = calculateGD(
                                defensivSum,
                                adjustedStats.defense,
                                adjustedStats.specialDefense,
                                adjustedStats.hp,
                                calculateHPBonus
                            );
                            const go = calculateGO(
                                offensivSum,
                                adjustedStats.attack,
                                adjustedStats.specialAttack,
                                adjustedStats.speed,
                                calculateSpeedBonus
                            );
                            const gs = gd + go;

                            // Stat Emojis anpassen
                            const statEmojis = [
                                getStatEmoji(adjustedStats.hp, "hp"),
                                getStatEmoji(adjustedStats.attack, "attack"),
                                getStatEmoji(adjustedStats.defense, "defense"),
                                getStatEmoji(adjustedStats.specialAttack, "specialAttack"),
                                getStatEmoji(adjustedStats.specialDefense, "specialDefense"),
                                getStatEmoji(adjustedStats.speed, "speed"),
                            ].map((emoji) => (emoji ? emoji : "⏺️"));

                            // Icons als Komponenten instanziieren
                            const TypeIcon1 = iconMappingPKMN[pokemon.type1] || FallbackIcon;
                            const TypeIcon2 = pokemon.type2 ? (iconMappingPKMN[pokemon.type2] || FallbackIcon) : null;

                            return (
                                <div
                                    key={pokemon.id}
                                    className="bg-gray-800 text-white p-4 rounded-md flex flex-col items-center"
                                >
                                    {/* Name, Nummer und Sonderstatus */}
                                    <div className="text-center font-bold">
                                        #{pokemon.id}
                                        <br />
                                        {getDisplayName(pokemon, legendaryIDs, ubIDs, mysticIDs, paradoxIDs)}
                                    </div>

                                    {/* Typen-Icons */}
                                    <div className="flex justify-center my-2">
                                        <div className="flex items-center">
                                            {TypeIcon1 && <TypeIcon1 className="text-2xl" />}
                                            {TypeIcon2 && (
                                                <TypeIcon2 className="text-2xl ml-2" />
                                            )}
                                        </div>
                                    </div>

                                    {/* TD, TO, TS */}
                                    <div className="flex justify-around my-2 w-full">
                                        <div>TD: {defensivSum}</div>
                                        <div>TO: {offensivSum}</div>
                                        <div>TS: {typeSum}</div>
                                    </div>

                                    {/* Symbole für Basiswerte */}
                                    <div className="flex justify-center mt-2">
                                        {statEmojis.map((emoji, idx) => (
                                            <span key={idx} className="text-xl mx-1">
                                                {emoji}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Balkendiagramme */}
                                    <div className="flex justify-around mt-2 w-full">
                                        {["hp", "attack", "defense", "specialAttack", "specialDefense", "speed"].map(
                                            (stat) => {
                                                const value = adjustedStats[stat];
                                                const maxSegments = 13; // Maximale Anzahl an Segmenten
                                                const maxValue = maxValues[stat]; // Maximalwert für diesen Wert
                                                const segmentValue = maxValue / maxSegments; // Wert pro Segment
                                                const segments = Math.ceil(value / segmentValue); // Anzahl der gefüllten Segmente

                                                const segmentHeight = 100 / maxSegments; // Prozentuale Höhe jedes Segments

                                                return (
                                                    <div
                                                        className="flex flex-col-reverse items-center"
                                                        key={stat}
                                                    >
                                                        <div className="relative flex flex-col-reverse h-24">
                                                            {[...Array(maxSegments)].map((_, idx) => (
                                                                <div
                                                                    key={idx}
                                                                    className={`w-4 ${
                                                                        idx < segments
                                                                            ? "bg-teal-500"
                                                                            : "bg-gray-600"
                                                                    } border-t border-black`}
                                                                    style={{ height: `${segmentHeight}%` }}
                                                                ></div>
                                                            ))}
                                                        </div>
                                                        {/* Tooltip */}
                                                        <div className="text-xs mt-1">
                                                            <span className="cursor-help" title={stat}>
                                                                &nbsp;
                                                            </span>
                                                        </div>
                                                    </div>
                                                );
                                            }
                                        )}
                                    </div>

                                    {/* GD, GO, GS */}
                                    <div className="flex justify-around mt-3 w-full">
                                        <div>GD: <br />{gd}</div>
                                        <div>GO: <br />{go}</div>
                                        <div>GS: <br />{gs}</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    // Tabellenansicht
                    <table className="table-auto w-full border-collapse">
                        <thead>
                        <tr>
                            {[
                                { key: "Pos", label: "Pos." },
                                { key: "id", label: "Nr." },
                                { key: "name_de", label: "Name" },
                                { key: "type1", label: "Typ 1" },
                                { key: "type2", label: "Typ 2" },
                                ...(showTypeValues
                                    ? [
                                        { key: "offensivSum", label: "Typ-Off" },
                                        { key: "defensivSum", label: "Typ-Def" },
                                        { key: "typeSum", label: "Typ-Sum" },
                                    ]
                                    : []),
                                ...(showStats
                                    ? [
                                        { key: "stats.hp", label: "HP" },
                                        { key: "stats.attack", label: "Angr." },
                                        { key: "stats.defense", label: "Vert." },
                                        { key: "stats.specialAttack", label: "Sp-Angr." },
                                        { key: "stats.specialDefense", label: "Sp-Vert." },
                                        { key: "stats.speed", label: "Init." },
                                        { key: "sumStats", label: "Summe" },
                                    ]
                                    : []),
                                { key: "GD", label: "GD" },
                                { key: "GO", label: "GO" },
                                { key: "GS", label: "GS" },
                            ].map((col) => (
                                <th
                                    key={col.key}
                                    onClick={() => handleSort(col.key)}
                                    className="border border-gray-600 p-2 cursor-pointer text-center"
                                >
                                    {col.label} {renderSortArrow(col.key)}
                                </th>
                            ))}
                        </tr>
                        </thead>
                        <tbody>
                        {sortedPokemon.map((pokemon, index) => {
                            // Angepasste EV-Stats berechnen:
                            const adjustedStats = distributeEVs(pokemon);

                            const { offensivSum, defensivSum } = getTypeDataSum(
                                pokemon.type1,
                                pokemon.type2,
                                pokemon.id,
                                typenData,
                                dtkData,
                                TypenBoni
                            );
                            const typeSum = offensivSum + defensivSum;
                            const gd = calculateGD(
                                defensivSum,
                                adjustedStats.defense,
                                adjustedStats.specialDefense,
                                adjustedStats.hp,
                                calculateHPBonus
                            );
                            const go = calculateGO(
                                offensivSum,
                                adjustedStats.attack,
                                adjustedStats.specialAttack,
                                adjustedStats.speed,
                                calculateSpeedBonus
                            );
                            const gs = gd + go;
                            const sumStats =
                                adjustedStats.hp +
                                adjustedStats.attack +
                                adjustedStats.defense +
                                adjustedStats.specialAttack +
                                adjustedStats.specialDefense +
                                adjustedStats.speed;

                            // Icons als Komponenten instanziieren
                            const TypeIcon1 = iconMappingPKMN[pokemon.type1] || FallbackIcon;
                            const TypeIcon2 = pokemon.type2 ? (iconMappingPKMN[pokemon.type2] || FallbackIcon) : null;

                            return (
                                <tr
                                    key={pokemon.id}
                                    className="border-t border-gray-600 hover:border-black hover:bg-white hover:text-black text-center"
                                >
                                    <td className="border border-gray-600 p-2 text-center">
                                        {index + 1}
                                    </td>
                                    <td className="border border-gray-600 p-2 text-center">
                                        {pokemon.id}
                                    </td>
                                    <td className="border border-gray-600 p-2 text-center">
                                        {getDisplayName(pokemon, legendaryIDs, ubIDs, mysticIDs, paradoxIDs)}
                                    </td>
                                    <td className="border border-gray-600 p-2 text-center">
                                        <div id="type1" className="flex justify-center items-center">
                                            {TypeIcon1 && <TypeIcon1 className="text-2xl" />}
                                            &nbsp;&nbsp;
                                            {showTypeText && (
                                                <span className="hidden md:flex text-center">
                                                        {pokemon.type1}
                                                    </span>
                                            )}
                                        </div>
                                    </td>
                                    <td className="border border-gray-600 p-2 text-center">
                                        <div id="type2" className="flex justify-center items-center">
                                            {TypeIcon2 && <TypeIcon2 className="text-2xl" />}
                                            &nbsp;&nbsp;
                                            {showTypeText && (
                                                <span className="hidden md:flex">
                                                        {pokemon.type2 || "-"}
                                                    </span>
                                            )}
                                        </div>
                                    </td>
                                    {showTypeValues && (
                                        <>
                                            <td className="border border-gray-600 p-2">
                                                {offensivSum}
                                            </td>
                                            <td className="border border-gray-600 p-2">
                                                {defensivSum}
                                            </td>
                                            <td className="border border-gray-600 p-2">
                                                {typeSum}
                                            </td>
                                        </>
                                    )}
                                    {showStats && (
                                        <>
                                            <td className="border border-gray-600 p-2">
                                                {getStatWithEmoji(adjustedStats.hp, "hp")}
                                            </td>
                                            <td className="border border-gray-600 p-2">
                                                {getStatWithEmoji(adjustedStats.attack, "attack")}
                                            </td>
                                            <td className="border border-gray-600 p-2">
                                                {getStatWithEmoji(adjustedStats.defense, "defense")}
                                            </td>
                                            <td className="border border-gray-600 p-2">
                                                {getStatWithEmoji(
                                                    adjustedStats.specialAttack,
                                                    "specialAttack"
                                                )}
                                            </td>
                                            <td className="border border-gray-600 p-2">
                                                {getStatWithEmoji(
                                                    adjustedStats.specialDefense,
                                                    "specialDefense"
                                                )}
                                            </td>
                                            <td className="border border-gray-600 p-2">
                                                {getStatWithEmoji(adjustedStats.speed, "speed")}
                                            </td>
                                            <td className="border border-gray-600 p-2">
                                                {formatNumber(sumStats)}
                                            </td>
                                        </>
                                    )}
                                    <td className="border border-gray-600 p-2">
                                        {formatNumber(gd)}
                                    </td>
                                    <td className="border border-gray-600 p-2">
                                        {formatNumber(go)}
                                    </td>
                                    <td className="border border-gray-600 p-2">
                                        {formatNumber(gs)}
                                    </td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                )}

                {/* Scroll-To-Top Button */}
                <div className="flex justify-center mt-4">
                    <button
                        onClick={scrollToTop}
                        className="fixed bottom-4 right-8 bg-teal-500 hover:bg-teal-700 text-white flex items-center justify-center w-12 h-12 rounded-full shadow-lg z-50 transition-colors duration-300"
                        aria-label="Nach oben"
                    >
                        {/* SVG für den Pfeil nach oben */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PokeTable;
