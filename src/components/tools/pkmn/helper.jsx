// helper.jsx
export const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

export const formatNumber = (num) => num.toLocaleString("de-DE");

export const getDisplayName = (pokemon, legendaryIDs, ubIDs, mysticIDs, paradoxIDs) => {
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

export const getStatEmoji = (value, statType) => {
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

export const getStatWithEmoji = (value, statType) => {
    const emoji = getStatEmoji(value, statType);
    return `${value} ${emoji}`;
};

export const getTypeDataSum = (
    type1,
    type2,
    pokemonID,
    typenData,
    dtkData,
    TypenBoni
) => {
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

export const calculateSpeedBonus = (speed) => {
    const minSpeed = 5;
    const badSpeed = 50;
    const neutralSpeed = 75;
    const goodSpeed = 100;
    const maxSpeed = 200;
    const maxPenalty = 1000; // Maximale Malus
    const maxBonus = 1000; // Maximale Bonus
    let bonus = 0;

    if (speed <= badSpeed) {
        // Maximaler Malus
        bonus = -maxPenalty;
    } else if (speed <= neutralSpeed) {
        // Malus wird geringer bis neutraler Bereich
        bonus = -maxPenalty * ((neutralSpeed - speed) / (neutralSpeed - badSpeed));
    } else if (speed <= goodSpeed) {
        // Bonus beginnt ab neutralem Bereich
        bonus = maxBonus * ((speed - neutralSpeed) / (goodSpeed - neutralSpeed));
    } else {
        // Bonus steigt weiter bis zum maximalen Speed
        bonus = maxBonus * ((speed - goodSpeed) / (maxSpeed - goodSpeed)) + maxBonus;
    }

    return bonus;
};

export const calculateHPBonus = (hp) => {
    const minHP = 1;
    const badHP = 50;
    const neutralHP = 75;
    const goodHP = 100;
    const maxHP = 255;
    const maxPenalty = 2000; // Maximale Malus
    const maxBonus = 2000; // Maximale Bonus
    let bonus = 0;

    if (hp <= badHP) {
        // Maximaler Malus
        bonus = -maxPenalty;
    } else if (hp <= neutralHP) {
        // Malus wird geringer bis neutraler Bereich
        bonus = -maxPenalty * ((neutralHP - hp) / (neutralHP - badHP));
    } else if (hp <= goodHP) {
        // Bonus beginnt ab neutralem Bereich
        bonus = maxBonus * ((hp - neutralHP) / (goodHP - neutralHP));
    } else {
        // Bonus steigt weiter bis zur maximalen HP
        bonus = maxBonus * ((hp - goodHP) / (maxHP - goodHP)) + maxBonus;
    }

    return bonus;
};

export const calculateGD = (
    defensivSum,
    defense,
    specialDefense,
    hp,
    calculateHPBonusFunc
) => {
    let gd = defensivSum + defense + specialDefense;

    // Bonus/Malus für HP
    gd += calculateHPBonusFunc(hp);

    gd += defense + defensivSum * defense;
    gd += specialDefense + defensivSum * specialDefense;
    gd += hp * 75;
    gd = gd / 100 + 75; // +75 gegen Negativwerte, rein optisch

    return Math.round(gd);
};

export const calculateGO = (
    offensivSum,
    attack,
    specialAttack,
    speed,
    calculateSpeedBonusFunc
) => {
    let adjustedAttack = Math.pow(attack / 100, 2);
    let adjustedSpecialAttack = Math.pow(specialAttack / 100, 2);

    if (attack < specialAttack) {
        adjustedSpecialAttack *= 1 + (100 - attack) / 100;
    } else if (specialAttack < attack) {
        adjustedAttack *= 1 + (100 - specialAttack) / 100;
    }

    const imbalancePenalty = Math.pow(Math.abs(attack - specialAttack) / 100, 2) * 500;

    let go = offensivSum * 10 + adjustedAttack * 50 + adjustedSpecialAttack * 50;

    // Bonus/Malus für Speed
    go += calculateSpeedBonusFunc(speed);

    go += adjustedAttack * offensivSum * 5;
    go += adjustedSpecialAttack * offensivSum * 5;
    go += speed * 20;

    go -= imbalancePenalty;

    go = go / 20 + 40;
    return Math.round(go);
};

export const getNonExistentTypeCombinations = (
    typenData,
    pokemonData
) => {
    const allTypes = typenData.map((type) => type.name);
    const existingCombinations = new Set(
        pokemonData.map(
            (pokemon) => `${pokemon.type1}/${pokemon.type2 || "keiner"}`
        )
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

export const getUniqueTypeCombinations = (pokemonData) => {
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
