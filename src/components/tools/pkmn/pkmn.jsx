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
import { dtkData, typenData, TypenBoni } from "@/data/pkmntypedata";
import ButtonGroup from "@/components/tools/pkmn/buttongroup.jsx";
import FilterControls from "@/components/tools/pkmn/filtercontrols";
import { FaBug, FaDragon, FaFireAlt, FaFistRaised, FaGhost, FaRegSnowflake } from "react-icons/fa";
import { TbIrregularPolyhedron, TbPlant } from "react-icons/tb";
import { SiStackblitz } from "react-icons/si";
import { GiArrowWings, GiDustCloud, GiFairy, GiPoisonBottle, GiSteelClaws, GiStonePile } from "react-icons/gi";
import { IoIosWater } from "react-icons/io";
import { MdDarkMode, MdOutlinePsychology } from "react-icons/md";
import { Infotext } from "@/components/tools/pkmn/infotext";
import NameFilter from "@/components/tools/pkmn/namefilter";

const typeIconMap = {
    Eis: <FaRegSnowflake />,
    Normal: <TbIrregularPolyhedron />,
    Pflanze: <TbPlant />,
    Käfer: <FaBug />,
    Elektro: <SiStackblitz />,
    Drache: <FaDragon />,
    Gift: <GiPoisonBottle />,
    Wasser: <IoIosWater />,
    Geist: <FaGhost />,
    Stahl: <GiSteelClaws />,
    Feuer: <FaFireAlt />,
    Psycho: <MdOutlinePsychology />,
    Fee: <GiFairy />,
    Flug: <GiArrowWings />,
    Unlicht: <MdDarkMode />,
    Kampf: <FaFistRaised />,
    Boden: <GiDustCloud />,
    Gestein: <GiStonePile />,
};

// Hilfsfunktionen
const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

const formatNumber = (num) => num.toLocaleString("de-DE");

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

    const getDisplayName = (pokemon) => {
        let displayName = pokemon.name_de;
        let specialChar = "";

        if (pokemon.id >= 10033 && pokemon.id <= 10090) {
            displayName = `${pokemon.name_de}`;
            specialChar = "  Ⓜ️"; // Megaevolution
        } else if (pokemon.id >= 10091 && pokemon.id <= 10115) {
            displayName = `Alola-${pokemon.name_de}`;
        } else if (pokemon.id >= 10229 && pokemon.id <= 10244) {
            displayName = `Hisui-${pokemon.name_de}`;
        } else if (pokemon.id >= 10250 && pokemon.id <= 10253) {
            displayName = `Paldea-${pokemon.name_de}`;
        } else if (pokemon.id >= 10161 && pokemon.id <= 10180) {
            displayName = `Galar-${pokemon.name_de}`;
        }

        // IDs aller legendären Pokémon
        if (legendaryIDs.includes(pokemon.id)) {
            specialChar += " ✴️";
        }

        // IDs aller UB Pokémon
        if (ubIDs.includes(pokemon.id)) {
            specialChar += " 🛸";
        }

        // IDs aller mystischen Pokémon
        if (mysticIDs.includes(pokemon.id)) {
            specialChar += " ✨";
        }

        // IDs aller Paradox-Pokémon
        if (paradoxIDs.includes(pokemon.id)) {
            specialChar += " ⏳";
        }

        return `${displayName} ${specialChar}`;
    };

    const getStatEmoji = (value, statType) => {
        let emoji = "";

        switch (statType) {
            case "hp":
                if (value >= 100) {
                    emoji = "🩸"; // Sehr hoch
                } else if (value <= 45) {
                    emoji = "💀"; // Sehr niedrig
                }
                break;
            case "attack":
                if (value >= 120) {
                    emoji = "⚔️"; // Sehr hoch
                } else if (value < 60) {
                    emoji = "💀"; // Sehr niedrig
                }
                break;
            case "defense":
                if (value >= 105) {
                    emoji = "🧱"; // Sehr hoch
                } else if (value <= 45) {
                    emoji = "💀"; // Sehr niedrig
                }
                break;
            case "specialAttack":
                if (value >= 109) {
                    emoji = "🌀"; // Sehr hoch
                } else if (value < 60) {
                    emoji = "💀️"; // Sehr niedrig
                }
                break;
            case "specialDefense":
                if (value >= 120) {
                    emoji = "🍀"; // Sehr hoch
                } else if (value < 46) {
                    emoji = "💀"; // Sehr niedrig
                }
                break;
            case "speed":
                if (value >= 100) {
                    emoji = "🚀"; // Sehr hoch
                } else if (value < 36) {
                    emoji = "💀"; // Sehr niedrig
                }
                break;
            default:
                emoji = ""; // Kein Emoji, wenn der Typ nicht passt
                break;
        }

        return emoji;
    };

    const getStatWithEmoji = (value, statType) => {
        const emoji = getStatEmoji(value, statType);
        return `${value} ${emoji}`;
    };

    const getTypeDataSum = (type1, type2, pokemonID) => {
        const type1Data = typenData.find((t) => t.name === type1) || {
            offensiv: 0,
            defensiv: 0,
        };

        let defensivSum = 0;

        // Wenn type2 leer oder "keiner" ist
        if (!type2 || type2 === "keiner") {
            defensivSum = type1Data.defensiv + 2;
        } else {
            // Prüfe dtkData für die Kombination
            const typeCombo = dtkData.find(
                (combo) =>
                    (combo.typ1 === type1 && combo.typ2 === type2) ||
                    (combo.typ1 === type2 && combo.typ2 === type1)
            );

            defensivSum = typeCombo ? typeCombo.wert + 2 : type1Data.defensiv;
        }

        // Für offensivSum bleibt die ursprüngliche Logik erhalten
        const type2Data = typenData.find((t) => t.name === type2) || {
            offensiv: 0,
            defensiv: 0,
        };
        let offensivSum = type1Data.offensiv + (type2Data.offensiv || 0);

        // Pokémon-spezifische Boni prüfen
        const pokemonBonus = TypenBoni.find((bonus) => bonus.pokemonID.includes(pokemonID));

        if (pokemonBonus) {
            // Nur ersetzen, wenn der Bonuswert für defensiv ungleich 0 ist
            if (pokemonBonus.defensiv !== 0) {
                defensivSum = pokemonBonus.defensiv + 2;
            }
            // Addiere offensiv-Bonus unabhängig von defensiv
            offensivSum += pokemonBonus.offensiv;
        }

        // Gewichtung der Typenwerte erhöhen
        offensivSum *= 5;
        defensivSum *= 5;

        return { offensivSum, defensivSum };
    };

    const calculateGD = (defensivSum, defense, specialDefense, hp) => {
        let gd = defensivSum + defense + specialDefense;
        if (defense <= 60) {
            gd -= 2000;
            if (specialDefense <= 70) {
                gd -= 2000;
            }
        }

        if (hp >= 100) {
            gd += 3750;
        }
        if (hp < 50) {
            gd -= 3750;
        }

        gd += defense + defensivSum * defense;
        gd += specialDefense + defensivSum * specialDefense;
        gd += hp * 75;
        gd = gd / 100 + 75; // +75 gegen Negativwerte, rein optisch

        return Math.round(gd);
    };

    const calculateGO = (offensivSum, attack, specialAttack, speed) => {
        // Exponentielle Gewichtung
        let adjustedAttack = Math.pow(attack / 100, 2);
        let adjustedSpecialAttack = Math.pow(specialAttack / 100, 2);

        // Dynamische Verstärkung des dominanten Wertes
        if (attack < specialAttack) {
            adjustedSpecialAttack *= 1 + (100 - attack) / 100; // Verstärkung bei niedrigem Angriff
        } else if (specialAttack < attack) {
            adjustedAttack *= 1 + (100 - specialAttack) / 100; // Verstärkung bei niedrigem Spezialangriff
        }

        // Ungleichgewichts-Malus
        const imbalancePenalty = Math.pow(Math.abs(attack - specialAttack) / 100, 2) * 500;

        // Grundberechnung von GO
        let go = offensivSum + adjustedAttack * 100 + adjustedSpecialAttack * 100;

        // Berücksichtigung von Speed
        if (speed >= 100) {
            go += 2000;
        }
        if (speed <= 50) {
            go -= 2000;
        }

        // Weitere Gewichtungen
        go += adjustedAttack * offensivSum;
        go += adjustedSpecialAttack * offensivSum;
        go += speed * 100;

        // Abzug des Ungleichgewichts-Malus
        go -= imbalancePenalty;

        go = go / 100 + 75; // +75 gegen Negativwerte, rein optisch
        return Math.round(go);
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
    const sortedPokemon = useMemo(() => {
        return [...filteredPokemon.slice(0, displayedCount)].sort((a, b) => {
            if (!sortConfig.key) return 0;

            const getComparableValue = (pokemon) => {
                if (sortConfig.key === "GD") {
                    const { defensivSum } = getTypeDataSum(pokemon.type1, pokemon.type2, pokemon.id);
                    return calculateGD(defensivSum, pokemon.stats.defense, pokemon.stats.specialDefense, pokemon.stats.hp);
                }
                if (sortConfig.key === "GO") {
                    const { offensivSum } = getTypeDataSum(pokemon.type1, pokemon.type2, pokemon.id);
                    return calculateGO(offensivSum, pokemon.stats.attack, pokemon.stats.specialAttack, pokemon.stats.speed);
                }
                if (sortConfig.key === "GS") {
                    const { defensivSum, offensivSum } = getTypeDataSum(pokemon.type1, pokemon.type2, pokemon.id);
                    const gd = calculateGD(defensivSum, pokemon.stats.defense, pokemon.stats.specialDefense, pokemon.stats.hp);
                    const go = calculateGO(offensivSum, pokemon.stats.attack, pokemon.stats.specialAttack, pokemon.stats.speed);
                    return gd + go;
                }
                if (sortConfig.key === "offensivSum" || sortConfig.key === "defensivSum") {
                    const { offensivSum, defensivSum } = getTypeDataSum(pokemon.type1, pokemon.type2, pokemon.id);
                    return sortConfig.key === "offensivSum" ? offensivSum : defensivSum;
                }
                if (sortConfig.key === "typeSum") {
                    const { offensivSum, defensivSum } = getTypeDataSum(pokemon.type1, pokemon.type2, pokemon.id);
                    return offensivSum + defensivSum;
                }
                if (sortConfig.key === "sumStats") {
                    return (
                        pokemon.stats.hp +
                        pokemon.stats.attack +
                        pokemon.stats.defense +
                        pokemon.stats.specialAttack +
                        pokemon.stats.specialDefense +
                        pokemon.stats.speed
                    );
                }
                if (sortConfig.key.includes("stats")) {
                    return pokemon.stats[sortConfig.key.split(".")[1]];
                }
                return pokemon[sortConfig.key];
            };

            const aValue = getComparableValue(a);
            const bValue = getComparableValue(b);

            if (typeof aValue === "string") {
                return sortConfig.direction === "asc"
                    ? aValue.localeCompare(bValue)
                    : bValue.localeCompare(aValue);
            } else {
                return sortConfig.direction === "asc" ? aValue - bValue : bValue - aValue;
            }
        });
    }, [filteredPokemon, displayedCount, sortConfig]);

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

    // NEU: Funktion zur Berechnung nicht existierender Typenkombinationen
    const getNonExistentTypeCombinations = () => {
        const allTypes = typenData.map((type) => type.name);
        const existingCombinations = new Set(
            pokemonData.map((pokemon) => `${pokemon.type1}/${pokemon.type2 || "keiner"}`)
        );

        const nonExistentCombinations = [];

        for (let i = 0; i < allTypes.length; i++) {
            for (let j = i + 1; j < allTypes.length; j++) {
                const type1 = allTypes[i];
                const type2 = allTypes[j];
                const combination = `${type1}/${type2}`;
                const reverseCombination = `${type2}/${type1}`;

                if (
                    !existingCombinations.has(combination) &&
                    !existingCombinations.has(reverseCombination)
                ) {
                    nonExistentCombinations.push(combination);
                }
            }
        }

        return nonExistentCombinations;
    };

    // NEU: Funktion zur Berechnung einmaliger Typenkombinationen
    const getUniqueTypeCombinations = () => {
        const combinationMap = {};
        pokemonData.forEach((pokemon) => {
            const combination = `${pokemon.type1}/${pokemon.type2 || "keiner"}`;
            if (combinationMap[combination]) {
                combinationMap[combination].count++;
            } else {
                combinationMap[combination] = {
                    count: 1,
                    pokemonName: pokemon.name_de,
                    pokemonID: pokemon.id,
                };
            }
        });

        return Object.entries(combinationMap)
            .filter(([_, data]) => data.count === 1)
            .map(
                ([combination, data]) =>
                    `${combination} (${data.pokemonName} (${data.pokemonID}))`
            );
    };

    // NEU: Generieren des Info-Textes basierend auf der ausgewählten Option
    const renderTypeCombinationInfo = () => {
        if (typeCombinationOption === "nonexistent") {
            const nonExistentCombinations = getNonExistentTypeCombinations();
            return (
                <div>
                    <h3 className="text-lg font-bold mb-2">
                        Nicht existierende Typenkombinationen:
                    </h3>
                    <p>{nonExistentCombinations.join(", ")}</p>
                </div>
            );
        } else if (typeCombinationOption === "unique") {
            const uniqueCombinations = getUniqueTypeCombinations();
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
        <div className="md:p-12 p-4 bg-black text-white m-2 overflow-scroll">
            {/* Schieberegler */}
            <div className="flex justify-center items-center">
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



            <div className="flex flex-col justify-between items-center mb-4 gap-x-2 gap-y-4">
                <div className="mt-4 flex flex-col md:flex-row items-center gap-2">
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
                        setShowInfo={setShowInfo}
                        showInfo={showInfo}
                    />
                </div>

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
                />

                {/* Namensfilter */}
                <NameFilter setNameFilter={setNameFilter} />
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xlg:grid-cols-8 gap-4">
                        {sortedPokemon.map((pokemon, index) => {
                            const { offensivSum, defensivSum } = getTypeDataSum(
                                pokemon.type1,
                                pokemon.type2,
                                pokemon.id
                            );
                            const typeSum = offensivSum + defensivSum;
                            const gd = calculateGD(
                                defensivSum,
                                pokemon.stats.defense,
                                pokemon.stats.specialDefense,
                                pokemon.stats.hp
                            );
                            const go = calculateGO(
                                offensivSum,
                                pokemon.stats.attack,
                                pokemon.stats.specialAttack,
                                pokemon.stats.speed
                            );
                            const gs = gd + go;

                            // Stat Emojis anpassen
                            const statEmojis = [
                                getStatEmoji(pokemon.stats.hp, "hp"),
                                getStatEmoji(pokemon.stats.attack, "attack"),
                                getStatEmoji(pokemon.stats.defense, "defense"),
                                getStatEmoji(pokemon.stats.specialAttack, "specialAttack"),
                                getStatEmoji(pokemon.stats.specialDefense, "specialDefense"),
                                getStatEmoji(pokemon.stats.speed, "speed"),
                            ].map((emoji) => (emoji ? emoji : "⏺️"));

                            return (
                                <div
                                    key={pokemon.id}
                                    className="bg-gray-800 text-white p-4 rounded-md flex flex-col items-center"
                                >
                                    {/* Name, Nummer und Sonderstatus */}
                                    <div className="text-center font-bold">
                                        #{pokemon.id}
                                        <br />
                                        {getDisplayName(pokemon)}
                                    </div>

                                    {/* Typen-Icons */}
                                    <div className="flex justify-center my-2">
                                        <div className="flex items-center">
                                            <span className="text-2xl">
                                                {typeIconMap[pokemon.type1]}
                                            </span>
                                            {pokemon.type2 && (
                                                <span className="text-2xl ml-2">
                                                    {typeIconMap[pokemon.type2]}
                                                </span>
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
                                                const value = pokemon.stats[stat];
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
                            const { offensivSum, defensivSum } = getTypeDataSum(
                                pokemon.type1,
                                pokemon.type2,
                                pokemon.id
                            );
                            const typeSum = offensivSum + defensivSum;
                            const gd = calculateGD(
                                defensivSum,
                                pokemon.stats.defense,
                                pokemon.stats.specialDefense,
                                pokemon.stats.hp
                            );
                            const go = calculateGO(
                                offensivSum,
                                pokemon.stats.attack,
                                pokemon.stats.specialAttack,
                                pokemon.stats.speed
                            );
                            const gs = gd + go;
                            const sumStats =
                                pokemon.stats.hp +
                                pokemon.stats.attack +
                                pokemon.stats.defense +
                                pokemon.stats.specialAttack +
                                pokemon.stats.specialDefense +
                                pokemon.stats.speed;

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
                                        {getDisplayName(pokemon)}
                                    </td>
                                    <td className="border border-gray-600 p-2 text-center">
                                        <div id="type1" className="flex justify-center items-center">
                                                <span className="text-2xl">
                                                    {typeIconMap[pokemon.type1]}
                                                </span>
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
                                                <span className="text-2xl">
                                                    {pokemon.type2 ? typeIconMap[pokemon.type2] : null}
                                                </span>
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
                                                {getStatWithEmoji(pokemon.stats.hp, "hp")}
                                            </td>
                                            <td className="border border-gray-600 p-2">
                                                {getStatWithEmoji(pokemon.stats.attack, "attack")}
                                            </td>
                                            <td className="border border-gray-600 p-2">
                                                {getStatWithEmoji(pokemon.stats.defense, "defense")}
                                            </td>
                                            <td className="border border-gray-600 p-2">
                                                {getStatWithEmoji(
                                                    pokemon.stats.specialAttack,
                                                    "specialAttack"
                                                )}
                                            </td>
                                            <td className="border border-gray-600 p-2">
                                                {getStatWithEmoji(
                                                    pokemon.stats.specialDefense,
                                                    "specialDefense"
                                                )}
                                            </td>
                                            <td className="border border-gray-600 p-2">
                                                {getStatWithEmoji(pokemon.stats.speed, "speed")}
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
