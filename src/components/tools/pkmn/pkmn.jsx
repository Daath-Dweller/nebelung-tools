"use client";
import React, {useEffect, useState} from "react";
import {
    generationRanges,
    legendaryIDs,
    mysticIDs,
    paradoxIDs,
    pokemonData,
    typenData,
    ubIDs,
} from "@/data/pkmndata.ts";
import ButtonGroup from "@/components/tools/pkmn/buttongroup.jsx";
import FilterControls from "@/components/tools/pkmn/filtercontrols";
import {FaBug, FaDragon, FaFireAlt, FaFistRaised, FaGhost, FaRegSnowflake} from "react-icons/fa";
import {TbIrregularPolyhedron, TbPlant} from "react-icons/tb";
import {SiStackblitz} from "react-icons/si";
import {GiArrowWings, GiDustCloud, GiFairy, GiPoisonBottle, GiSteelClaws, GiStonePile} from "react-icons/gi";
import {IoIosWater} from "react-icons/io";
import {MdDarkMode, MdOutlinePsychology} from "react-icons/md";
import {Infotext} from "@/components/tools/pkmn/infotext";

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
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

const formatNumber = (num) => {
    return num.toLocaleString("de-DE");
};

const PokeTable = () => {
    const [displayedCount, setDisplayedCount] = useState(151); // Standard auf Gen 1 (151)
    const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
    const [showInfo, setShowInfo] = useState(false);
    const [showStats, setShowStats] = useState(true);
    const [showTypeValues, setShowTypeValues] = useState(false); // Neuer State für Typwerte
    const [hideSpecialforms, setHideSpecialForms] = useState(false);
    const [hideLegendary, setHideLegendary] = useState(false);
    const [hideUB, setHideUB] = useState(false);
    const [hideMystic, setHideMystic] = useState(false);
    const [hideParadox, setHideParadox] = useState(false); // Neuer State für Paradox-Pokémon
    const [monoTypeBonus, setMonoTypeBonus] = useState(false);
    const [selectedGeneration, setSelectedGeneration] = useState("Generation 1");
    const [selectedType1, setSelectedType1] = useState("beliebig");
    const [selectedType2, setSelectedType2] = useState("beliebig");
    const [showTypeText, setShowTypeText] = useState(true);
    const [typeCombinationOption, setTypeCombinationOption] = useState("");
    const [showUniqueTypes, setShowUniqueTypes] = useState(false);
    const [selectedTypeAny, setSelectedTypeAny] = useState("beliebig");
    const [isCardView, setIsCardView] = useState(false); // Neuer State für die Ansicht

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

    const toggleHideSpecialforms = () => {
        setHideSpecialForms((prev) => !prev);
    };

    const toggleHideLegendary = () => {
        setHideLegendary((prev) => !prev);
    };

    const toggleHideUB = () => {
        setHideUB((prev) => !prev);
    };

    const toggleHideMystic = () => {
        setHideMystic((prev) => !prev);
    };

    const toggleHideParadox = () => {
        setHideParadox((prev) => !prev);
    };

    const toggleMonoTypeBonus = () => {
        setMonoTypeBonus((prev) => !prev);
    };

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
            const count = pokemonData.filter((pokemon) => pokemon.id >= range.min && pokemon.id <= range.max).length;
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
        setShowUniqueTypes(true); // Info-Bereich anzeigen
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
        } else if (pokemon.id >= 10195 && pokemon.id <= 10228) {
            displayName = `${pokemon.name_de}`;
            specialChar = "  ⬆️"; // Gigadynamax
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

    const getTypeDataSum = (type1, type2) => {
        const type1Data = typenData.find((t) => t.name === type1) || {
            offensiv: 0,
            defensiv: 0,
        };
        const type2Data = typenData.find((t) => t.name === type2) || {
            offensiv: 0,
            defensiv: 0,
        };

        let offensivSum = type1Data.offensiv + 1 + ((type2Data.offensiv + 1 || 0) * 2); // Defensivwerte sind ~doppelt so hoch sonst, aber Abw/Off gleich wichtig
        let defensivSum = type1Data.defensiv + 1 + (type2Data.defensiv + 1 || 0); // +1 weil Käfer sonst 0 hat und man damit nicht rechnen kann

        // Monotypen-Bonus aktivieren, wenn nur ein Typ vorhanden ist und der Bonus aktiviert ist
        if (monoTypeBonus && (!type2 || type2 === "")) {
            offensivSum *= 2;
            defensivSum *= 2;
        }

        return { offensivSum, defensivSum };
    };

    const calculateGD = (defensivSum, defense, specialDefense, hp) => {
        let gd = defensivSum + defense + specialDefense;
        if (defense <= 60 || specialDefense <= 70) {
            gd -= 400;
        }

        if (defense >= specialDefense) {
            gd += defense;
            gd += defensivSum * defense;
        } else {
            gd += specialDefense;
            gd += defensivSum * specialDefense;
        }

        if (hp >= 100) {
            gd += 750;
        }
        if (hp < 50) {
            gd -= 750;
        }

        gd += hp * 15;
        gd = gd / 10 + 100;

        return Math.round(gd);
    };

    const calculateGO = (offensivSum, attack, specialAttack, speed) => {
        let go = offensivSum + attack + specialAttack;
        if (attack <= 60 || specialAttack <= 70) {
            go -= 400;
        }

        if (attack >= specialAttack) {
            go += attack;
            go += offensivSum * attack;
        } else {
            go += specialAttack;
            go += offensivSum * specialAttack;
        }

        if (speed >= 100) {
            go += 750;
        }
        if (speed <= 50) {
            go -= 750;
        }

        go += speed * 25;
        go = go / 10 + 100;

        return Math.round(go);
    };

    // Filter basierend auf Sonderformen, Legendären, UB, Mystik, Paradox, ausgewählter Generation und Typen
    const filteredPokemon = pokemonData.filter((pokemon) => {
        // Filter für Sonderformen
        if (hideSpecialforms && pokemon.id >= 5000) return false;

        // Filter für Legendäre
        if (hideLegendary && legendaryIDs.includes(pokemon.id)) return false;

        // Filter für UB
        if (hideUB && ubIDs.includes(pokemon.id)) return false;

        // Filter für Mystik
        if (hideMystic && mysticIDs.includes(pokemon.id)) return false;

        // Filter für Paradox-Pokémon
        if (hideParadox && paradoxIDs.includes(pokemon.id)) return false;

        // Filter für Generationen
        const range = generationRanges[selectedGeneration];
        if (pokemon.id < range.min || pokemon.id > range.max) return false;

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

        return true;
    });

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
            if (sortConfig.key === "GS") {
                const { defensivSum, offensivSum } = getTypeDataSum(pokemon.type1, pokemon.type2);
                const gd = calculateGD(defensivSum, pokemon.stats.defense, pokemon.stats.specialDefense, pokemon.stats.hp);
                const go = calculateGO(offensivSum, pokemon.stats.attack, pokemon.stats.specialAttack, pokemon.stats.speed);
                return gd + go;
            }
            if (sortConfig.key === "offensivSum" || sortConfig.key === "defensivSum") {
                const { offensivSum, defensivSum } = getTypeDataSum(pokemon.type1, pokemon.type2);
                return sortConfig.key === "offensivSum" ? offensivSum : defensivSum;
            }
            if (sortConfig.key === "typeSum") {
                const { offensivSum, defensivSum } = getTypeDataSum(pokemon.type1, pokemon.type2);
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
            return sortConfig.direction === "asc" ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
        } else {
            return sortConfig.direction === "asc" ? aValue - bValue : bValue - aValue;
        }
    });

    const handleSort = (key) => {
        if (key === "Pos") {
            return; // Keine Aktion für "Pos"
        }
        setSortConfig((prevConfig) => {
            if (prevConfig.key === key && prevConfig.direction === "asc") {
                return { key, direction: "desc" };
            }
            return { key, direction: "asc" };
        });
    };

    const renderSortArrow = (key) => {
        if (key === "Pos") {
            return ""; // Zeige nichts für den "Pos"-Key
        }

        return sortConfig.key === key ? (sortConfig.direction === "asc" ? "↑" : "↓") : "⇅";
    };

    // NEU: Funktion zur Berechnung nicht existierender Typenkombinationen
    const getNonExistentTypeCombinations = () => {
        const allTypes = typenData.map((type) => type.name);
        const existingCombinations = new Set(pokemonData.map((pokemon) => `${pokemon.type1}/${pokemon.type2 || "keiner"}`));

        const nonExistentCombinations = [];

        for (let i = 0; i < allTypes.length; i++) {
            for (let j = i + 1; j < allTypes.length; j++) {
                const type1 = allTypes[i];
                const type2 = allTypes[j];
                const combination = `${type1}/${type2}`;
                const reverseCombination = `${type2}/${type1}`;

                if (!existingCombinations.has(combination) && !existingCombinations.has(reverseCombination)) {
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
            .map(([combination, data]) => `${combination} (${data.pokemonName} (${data.pokemonID}))`);
    };

    // NEU: Generieren des Info-Textes basierend auf der ausgewählten Option
    const renderTypeCombinationInfo = () => {
        if (typeCombinationOption === "nonexistent") {
            const nonExistentCombinations = getNonExistentTypeCombinations();
            return (
                <div>
                    <h3 className="text-lg font-bold mb-2">Nicht existierende Typenkombinationen:</h3>
                    <p>{nonExistentCombinations.join(", ")}</p>
                </div>
            );
        } else if (typeCombinationOption === "unique") {
            const uniqueCombinations = getUniqueTypeCombinations();
            return (
                <div>
                    <h3 className="text-lg font-bold mb-2">Einmalige Typenkombinationen:</h3>
                    <p>{uniqueCombinations.join(", ")}</p>
                </div>
            );
        } else if (typeCombinationOption === "") {
            setShowUniqueTypes(!showUniqueTypes);
        }
        return null;
    };

    return (
        <div className="md:p-12 p-4 bg-black text-white m-2 overflow-scroll">
            {/* Schieberegler */}
            <div className="flex justify-center items-center mb-6">
                <span className="text-2xl mr-2">📋</span> {/* Tabellenansicht */}
                <div
                    className={`relative inline-block w-16 h-8 rounded-full cursor-pointer transition-colors duration-300 ${
                        isCardView ? "bg-teal-500" : "bg-gray-300"
                    }`}
                    onClick={() => setIsCardView(!isCardView)}
                >
                    <div
                        className={`absolute top-1 ${isCardView ? "right-1" : "left-1"} w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300`}
                    ></div>
                </div>
                <span className="text-2xl ml-2">📊</span> {/* Kachelansicht */}
            </div>

            <div className="flex flex-col justify-between items-center mb-4 gap-x-2">

                    <ButtonGroup
                        showStats={showStats}
                        setShowStats={setShowStats}
                        showTypeValues={showTypeValues}
                        setShowTypeValues={setShowTypeValues}
                        showTypeText={showTypeText}
                        toggleShowTypeText={toggleShowTypeText}
                        hideSpecialforms={hideSpecialforms}
                        toggleHideSpecialforms={toggleHideSpecialforms}
                        hideLegendary={hideLegendary}
                        toggleHideLegendary={toggleHideLegendary}
                        hideUB={hideUB}
                        toggleHideUB={toggleHideUB}
                        hideMystic={hideMystic}
                        toggleHideMystic={toggleHideMystic}
                        hideParadox={hideParadox}
                        toggleHideParadox={toggleHideParadox}
                        monoTypeBonus={monoTypeBonus}
                        toggleMonoTypeBonus={toggleMonoTypeBonus}
                        isCardView={isCardView}
                    />


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
            </div>

            {showUniqueTypes && (
                <div className="bg-gray-800 text-white p-4 rounded-md m-4 mx-auto">
                    <div className="mt-4">{renderTypeCombinationInfo()}</div>
                </div>
            )}

            {showInfo && (
                <div className="bg-gray-800 text-white p-4 rounded-md m-4 mx-auto">
                    <Infotext />
                </div>
            )}

            <div className="text-center mt-12 pr-2">
                <h2 className="text-lg font-extrabold mb-4">Pokémon Liste (aktuell: {displayedCount})</h2>

                {isCardView ? (
                    // Kartenansicht
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xlg:grid-cols-8 gap-4">
                        {sortedPokemon.map((pokemon, index) => {
                            const sumStats =
                                pokemon.stats.hp +
                                pokemon.stats.attack +
                                pokemon.stats.defense +
                                pokemon.stats.specialAttack +
                                pokemon.stats.specialDefense +
                                pokemon.stats.speed;

                            const { offensivSum, defensivSum } = getTypeDataSum(pokemon.type1, pokemon.type2);
                            const typeSum = offensivSum + defensivSum;
                            const gd = calculateGD(defensivSum, pokemon.stats.defense, pokemon.stats.specialDefense, pokemon.stats.hp);
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
                            ].map((emoji) => {
                                if (!emoji) {
                                    return "⏺️"; // Ersetze leere Emojis durch ⏺️
                                } else {
                                    return emoji;
                                }
                            });

                            return (
                                <div key={pokemon.id} className="bg-gray-800 text-white p-4 rounded-md flex flex-col items-center">
                                    {/* Name, Nummer und Sonderstatus */}
                                    <div className="text-center font-bold">#{pokemon.id}<br/>{getDisplayName(pokemon)} </div>

                                    {/* Typen-Icons */}
                                    <div className="flex justify-center my-2">
                                        <div className="flex items-center">
                                            <span className="text-2xl">{typeIconMap[pokemon.type1]}</span>
                                            {pokemon.type2 && <span className="text-2xl ml-2">{typeIconMap[pokemon.type2]}</span>}
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
                                        {["hp", "attack", "defense", "specialAttack", "specialDefense", "speed"].map((stat) => {
                                            const value = pokemon.stats[stat];
                                            const maxSegments = 13; // Maximale Anzahl an Segmenten
                                            const maxValue = maxValues[stat]; // Maximalwert für diesen Wert
                                            const segmentValue = maxValue / maxSegments; // Wert pro Segment
                                            const segments = Math.ceil(value / segmentValue); // Anzahl der gefüllten Segmente

                                            const segmentHeight = 100 / maxSegments; // Prozentuale Höhe jedes Segments

                                            return (
                                                <div className="flex flex-col-reverse items-center" key={stat}>
                                                    <div className="relative flex flex-col-reverse h-24">
                                                        {[...Array(maxSegments)].map((_, idx) => (
                                                            <div
                                                                key={idx}
                                                                className={`w-4 ${idx < segments ? "bg-teal-500" : "bg-gray-600"} border-t border-black`}
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
                                        })}

                                    </div>

                                    {/* GD, GO, GS */}
                                    <div className="flex justify-around mt-3 w-full">
                                        <div>GD: <br/> {gd}</div>
                                        <div>GO: <br/> {go}</div>
                                        <div>GS: <br/> {gs}</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    // Tabellenansicht
                    <table className="table-auto w-full border-collapse">
                        <thead className="">
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
                            const sumStats =
                                pokemon.stats.hp +
                                pokemon.stats.attack +
                                pokemon.stats.defense +
                                pokemon.stats.specialAttack +
                                pokemon.stats.specialDefense +
                                pokemon.stats.speed;

                            const { offensivSum, defensivSum } = getTypeDataSum(pokemon.type1, pokemon.type2);
                            const typeSum = offensivSum + defensivSum;
                            const gd = calculateGD(defensivSum, pokemon.stats.defense, pokemon.stats.specialDefense, pokemon.stats.hp);
                            const go = calculateGO(
                                offensivSum,
                                pokemon.stats.attack,
                                pokemon.stats.specialAttack,
                                pokemon.stats.speed
                            );
                            const gs = gd + go;

                            return (
                                <tr
                                    key={pokemon.id}
                                    className="border-t border-gray-600 hover:border-black hover:bg-white hover:text-black text-center"
                                >
                                    <td className="border border-gray-600 p-2 text-center">{index + 1}</td>
                                    <td className="border border-gray-600 p-2 text-center">{pokemon.id}</td>
                                    <td className="border border-gray-600 p-2 text-center">{getDisplayName(pokemon)}</td>
                                    <td className="border border-gray-600 p-2  text-center">
                                        <div id="type1" className="flex justify-center items-center ">
                                            <span className="text-2xl text-center">{typeIconMap[pokemon.type1]}</span>
                                            &nbsp;&nbsp;
                                            {showTypeText && <span className="hidden md:flex text-center">{pokemon.type1}</span>}
                                        </div>
                                    </td>
                                    <td className="border border-gray-600 p-2 text-center">
                                        <div id="type2" className="flex justify-center items-center">
                        <span className="text-2xl">
                          {pokemon.type2 ? typeIconMap[pokemon.type2] : null}
                        </span>
                                            &nbsp;&nbsp;
                                            {showTypeText && <span className="hidden md:flex">{pokemon.type2 || "-"}</span>}
                                        </div>
                                    </td>
                                    {showTypeValues && (
                                        <>
                                            <td className="border border-gray-600 p-2">{offensivSum}</td>
                                            <td className="border border-gray-600 p-2">{defensivSum}</td>
                                            <td className="border border-gray-600 p-2">{typeSum}</td>
                                        </>
                                    )}
                                    {showStats && (
                                        <>
                                            <td className="border border-gray-600 p-2">{getStatWithEmoji(pokemon.stats.hp, "hp")}</td>
                                            <td className="border border-gray-600 p-2">
                                                {getStatWithEmoji(pokemon.stats.attack, "attack")}
                                            </td>
                                            <td className="border border-gray-600 p-2">
                                                {getStatWithEmoji(pokemon.stats.defense, "defense")}
                                            </td>
                                            <td className="border border-gray-600 p-2">
                                                {getStatWithEmoji(pokemon.stats.specialAttack, "specialAttack")}
                                            </td>
                                            <td className="border border-gray-600 p-2">
                                                {getStatWithEmoji(pokemon.stats.specialDefense, "specialDefense")}
                                            </td>
                                            <td className="border border-gray-600 p-2">
                                                {getStatWithEmoji(pokemon.stats.speed, "speed")}
                                            </td>

                                            <td className="border border-gray-600 p-2">{formatNumber(sumStats)}</td>
                                        </>
                                    )}
                                    <td className="border border-gray-600 p-2">{formatNumber(gd)}</td>
                                    <td className="border border-gray-600 p-2">{formatNumber(go)}</td>
                                    <td className="border border-gray-600 p-2 ">{formatNumber(gs)}</td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                )}

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
