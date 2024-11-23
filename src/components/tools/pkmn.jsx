"use client";
import React, {useState} from "react";
import {
    generationRanges,
    legendaryIDs,
    mysticIDs,
    paradoxIDs,
    pokemonData,
    typenData,
    ubIDs,
} from "@/data/pkmndata.ts";
import {FaEye, FaEyeSlash} from "react-icons/fa"; // Import der Icons

// Hilfsfunktionen
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}


const formatNumber = (num) => {
    return num.toLocaleString('de-DE');
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

    const handleGenerationChange = (event) => {
        const selectedGen = event.target.value;
        setSelectedGeneration(selectedGen);

        if (selectedGen === "Alle Generationen") {
            setDisplayedCount(pokemonData.length);
        } else {
            const range = generationRanges[selectedGen];
            const count = pokemonData.filter(
                (pokemon) => pokemon.id >= range.min && pokemon.id <= range.max
            ).length;
            setDisplayedCount(count);
        }

        scrollToTop(); // Optional: Nach Generationwechsel nach oben scrollen
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

    const getStatWithEmoji = (value, statType) => {
        let emoji = "";

        //obere 15%
        //untere 15%

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


       // let offensivSumView = type1Data.offensiv + 1 + (type2Data.offensiv + 1 || 0);


        let offensivSum = (type1Data.offensiv + 1 + (type2Data.offensiv + 1 || 0) * 2); //Defensivwerte sind ~doppelt so hoch sonst, aber Abw/Off gleich wichtig
        let defensivSum = type1Data.defensiv + 1 + (type2Data.defensiv + 1 || 0); //+1 weil Käfer sonst 0 hat und man damit nicht rechnen kann

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

        if (hp >= 100){
        gd += 750;
        }
        if (hp < 50){
            gd -= 750;
        }

        gd += hp * 15; //höchter HP-Wert ist 59% höher als höchster Initwert, also /1.59
        gd = gd / 10 + 100;  //kleinere Zahl und keine Minuswerte

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

        if (speed >= 100){
            go += 750 /// die 15% die sehr schnell sind, haben eine bedeutend relevantere Offensive weil Firststrike
        }
        if (speed <= 50){
            go -= 750 /// die 15% die sehr schnell sind, haben eine bedeutend relevantere Offensive weil Firststrike
        }

        go += speed * 25;
        go = go / 10 + 100; //kleinere Zahl und keine Minuswerte

        return Math.round(go);
    };

    // Filter basierend auf Sonderformen, Legendären, UB, Mystik, Paradox und ausgewählter Generation
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
        return pokemon.id >= range.min && pokemon.id <= range.max;
    });

    const sortedPokemon = [...filteredPokemon.slice(0, displayedCount)].sort(
        (a, b) => {
            if (!sortConfig.key) return 0;

            const getComparableValue = (pokemon) => {
                if (sortConfig.key === "GD") {
                    const { defensivSum } = getTypeDataSum(pokemon.type1, pokemon.type2);
                    return calculateGD(
                        defensivSum,
                        pokemon.stats.defense,
                        pokemon.stats.specialDefense,
                        pokemon.stats.hp
                    );
                }
                if (sortConfig.key === "GO") {
                    const { offensivSum } = getTypeDataSum(pokemon.type1, pokemon.type2);
                    return calculateGO(
                        offensivSum,
                        pokemon.stats.attack,
                        pokemon.stats.specialAttack,
                        pokemon.stats.speed
                    );
                }
                if (sortConfig.key === "GS") {
                    const { defensivSum, offensivSum } = getTypeDataSum(
                        pokemon.type1,
                        pokemon.type2
                    );
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
                    return gd + go;
                }
                if (
                    sortConfig.key === "offensivSum" ||
                    sortConfig.key === "defensivSum"
                ) {
                    const { offensivSum, defensivSum } = getTypeDataSum(
                        pokemon.type1,
                        pokemon.type2
                    );
                    return sortConfig.key === "offensivSum"
                        ? offensivSum
                        : defensivSum;
                }
                if (sortConfig.key === "typeSum") {
                    const { offensivSum, defensivSum } = getTypeDataSum(
                        pokemon.type1,
                        pokemon.type2
                    );
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
        }
    );

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

        return sortConfig.key === key
            ? (sortConfig.direction === "asc" ? "↑" : "↓")
            : "⇅";
    };




    return (
        <div className="md:p-12 p-4 bg-black text-white m-2 overflow-scroll">
            <div className="flex flex-col justify-between items-center mb-4 gap-x-2">
                <div
                    id="btndiv"
                    className="flex md:flex-row flex-col gap-y-2 md:gap-y-0 gap-x-2"
                >
                    <button
                        onClick={() => setShowStats(!showStats)}
                        className={`text-white bg-gray-600 border border-dotted border-white hover:bg-gray-900 px-2 py-1 
                                rounded mb-2 ${showStats ? "" : "bg-gray-900"}`}
                    >
                        {showStats ? (
                            <div className="flex flex-col items-center">
                                Basiswerte <br/>
                                <FaEye/>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center">
                                Basiswerte <br/>
                                <FaEyeSlash/>
                            </div>
                        )}
                    </button>
                    <button
                        onClick={() => setShowTypeValues(!showTypeValues)}
                        className={`text-white bg-gray-600 border border-dotted border-white hover:bg-gray-900 px-2 py-1 
                                rounded mb-2 ${showTypeValues ? "" : "bg-gray-900"}`}
                    >
                        {showTypeValues ? (
                            <div className="flex flex-col items-center">
                                Typwerte <br/>
                                <FaEye/>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center">
                                Typwerte <br/>
                                <FaEyeSlash/>
                            </div>
                        )}
                    </button>
                    <button
                        onClick={toggleHideSpecialforms}
                        className={`text-white bg-gray-600 border border-dotted border-white hover:bg-gray-900 px-2 py-1 
                                rounded mb-2 ${hideSpecialforms ? "bg-gray-900" : ""}`}
                    >
                        {hideSpecialforms ? (
                            <div className="flex flex-col items-center">
                                Sonderformen<br/>
                                <FaEyeSlash/>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center">
                                Sonderformen<br/>
                                <FaEye/>
                            </div>
                        )}
                    </button>
                    <button
                        onClick={toggleHideLegendary}
                        className={`text-white bg-gray-600 border border-dotted border-white hover:bg-gray-900 px-2 py-1 
                                rounded mb-2 ${hideLegendary ? "bg-gray-900" : ""}`}
                    >
                        {hideLegendary ? (
                            <div className="flex flex-col items-center">
                                Legendäre<br/>
                                <FaEyeSlash/>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center">
                                Legendäre<br/>
                                <FaEye/>
                            </div>
                        )}
                    </button>
                    <button
                        onClick={toggleHideUB}
                        className={`text-white bg-gray-600 border border-dotted border-white hover:bg-gray-900 px-2 py-1 
                                rounded mb-2 ${hideUB ? "bg-gray-900" : ""}`}
                    >
                        {hideUB ? (
                            <div className="flex flex-col items-center">
                                UB<br/>
                                <FaEyeSlash/>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center">
                                UB<br/>
                                <FaEye/>
                            </div>
                        )}
                    </button>
                    <button
                        onClick={toggleHideMystic}
                        className={`text-white bg-gray-600 border border-dotted border-white hover:bg-gray-900 px-2 py-1 
                                rounded mb-2 ${hideMystic ? "bg-gray-900" : ""}`}
                    >
                        {hideMystic ? (
                            <div className="flex flex-col items-center">
                                Mysteriöse<br/>
                                <FaEyeSlash/>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center">
                                Mysteriöse<br/>
                                <FaEye/>
                            </div>
                        )}
                    </button>
                    <button
                        onClick={toggleHideParadox}
                        className={`text-white bg-gray-600 border border-dotted border-white hover:bg-gray-900 px-2 py-1 
                                rounded mb-2 ${hideParadox ? "bg-gray-900" : ""}`}
                    >
                        {hideParadox ? (
                            <div className="flex flex-col items-center">
                                Paradox<br/>
                                <FaEyeSlash/>
                            </div>
                        ) : (
                            <div className="flex flex-col items-center">
                                Paradox<br/>
                                <FaEye/>
                            </div>
                        )}
                    </button>
                    <button
                        onClick={toggleMonoTypeBonus}
                        className={`text-white bg-gray-600 border border-dotted border-white hover:bg-gray-900 px-2 py-1 
                                rounded mb-2 ${monoTypeBonus ? "bg-gray-900" : ""}`}
                    >
                        {monoTypeBonus ? (
                            "Monotypen-Bonus deaktivieren"
                        ) : (
                            "Monotypen-Bonus aktivieren"
                        )}
                    </button>
                </div>
                {/* Neuer Dropdown für die Generationen */}
                <div className="mt-4">
                    <select
                        id="generation"
                        value={selectedGeneration}
                        onChange={handleGenerationChange}
                        className="bg-gray-700 text-white p-2 rounded"
                    >
                        {Object.keys(generationRanges).map((gen) => (
                            <option key={gen} value={gen}>
                                {gen}
                            </option>
                        ))}
                    </select>

                    <button
                        onClick={() => setShowInfo(!showInfo)}
                        className="text-white bg-gray-600 px-2 ml-2 py-1 rounded mb-2"
                    >
                        ℹ️
                    </button>
                </div>
            </div>

            {showInfo && (
                <div className="bg-gray-800 text-white p-4 rounded-md m-4 mx-auto">
                    Typ-Offensive und Typ-Defensive ergeben sich aus der Summe von sehr
                    effektiven, nicht effektiven und wirkungslosen Angriffen gegen ein
                    Pokémon oder von einem Pokémon ausgehend, gewichtet bzw. angeglichen. Normale Effektivität gibt 1
                    Punkt, sehr effektiv 2 Punkte, nicht effektiv 2 Punkte Abzug und
                    wirkungslos 6 Punkte Abzug. Gleichsam entsprechend angewendet für Abwehr
                    gegen Typen. TO wird verdoppelt, da TD doppelt so hohe Werte hat, Offensive und Defensive aber gleich
                    wichtig sind strategisch und gleichsam mit 3 Werten skalieren.
                    Siehe auch <a className="text-teal-400" href="https://www.pokewiki.de/Typen#Wechselwirkungen" target="_blank">PokeWiki</a>.
                    <br/>
                    <br/>
                    GO (Gesamtoffensive) und GD (Gesamtdefensive) ergeben sich aus Typ-Off
                    und Typ-Def in Verbindung mit gewichtetem Angr/SpAngr/Init und
                    Vert/SpVert/HP. Typen die sehr oft effektiv sind, oder wenige
                    Schwächen haben, nützen umso mehr, umso stärker die
                    Offensiv-/Defensivwerte sind. Hohe bzw. niedrige HP-Werte geben einen Defensivbonus/-malus, hohe bzw. niedrige
                    Initiativewerte geben einen Offensivbonus/-malus.
                    <br/>
                    <br/>
                    Weiterhin gibt es einen Malus (-40), falls einer der Angriffs- oder
                    Verteidigungswerte sehr klein ist, was Spezial- oder -angriffe, bzw
                    Abwehr gegen diese, enorm ineffektiv werden lässt.
                    <br/>
                    <br/>
                    Nicht berücksichtigt werden Fähigkeiten und Wesen, die die Offensive
                    und Defensive beträchtlich beeinflussen können.
                    <br/>
                    <br/>
                    Ebenso findet der Attackenpool eines Pokemon keine Entsprechung in der Berechnung.
                    <br/>
                    <br/>
                    Der Monotypenbonus verdoppelt die Typenoffensive und Defensive, da
                    Pokémon mit einem Typ sonst einen starken Nachteil in der Berechnung
                    haben. Je nach Situation kann ein Doppeltyp vorteilhaft oder
                    nachteilig sein.
                    <br/>
                    <br/>
                    Ⓜ️: Megaevolution
                    <br/>
                    ⬆️: Gigadynamax
                    <br/>
                    ✴️️: Legendär
                    <br/>
                    🛸: Ultra-Bestie
                    <br/>
                    ✨: Mysteriös
                    <br/>
                    ⏳: Paradox-Pokémon
                </div>
            )}

            <div className="text-center mt-12 pr-2">
                <h2 className="text-lg font-extrabold mb-4">
                    Pokémon Liste (aktuell: {displayedCount})
                </h2>

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
                                className="border border-gray-600 p-2 cursor-pointer text-left"
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

                        const { offensivSum, defensivSum } = getTypeDataSum(
                            pokemon.type1,
                            pokemon.type2
                        );
                        const typeSum = offensivSum + defensivSum; // Berechnung von Typ-Sum
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

                        return (
                            <tr key={pokemon.id}
                                className="border-t border-gray-600 hover:border-black hover:bg-white hover:text-black">
                                <td className="border border-gray-600 p-2">{index + 1}</td>
                                <td className="border border-gray-600 p-2">{pokemon.id}</td>
                                <td className="border border-gray-600 p-2">
                                    {getDisplayName(pokemon)}
                                </td>
                                <td className="border border-gray-600 p-2">
                                    {pokemon.type1}
                                </td>
                                <td className="border border-gray-600 p-2">
                                    {pokemon.type2 || "-"}
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
                                <td className="border border-gray-600 p-2">{formatNumber(gs)}</td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>

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
