import fetch from 'node-fetch';
import { writeFileSync, mkdirSync } from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const dataDir = `${__dirname}/data`;

// Sicherstellen, dass der Ordner `data` existiert
mkdirSync(dataDir, { recursive: true });

const getPokemonData = async (id) => {
    const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const pokemonData = await pokemonResponse.json();

    const speciesResponse = await fetch(pokemonData.species.url);
    const speciesData = await speciesResponse.json();

    const germanNameEntry = speciesData.names.find((name) => name.language.name === 'de');
    const germanName = germanNameEntry ? germanNameEntry.name : pokemonData.name;

    const types = pokemonData.types.map((typeInfo) => typeInfo.type.name);

    const stats = {};
    pokemonData.stats.forEach((stat) => {
        const statName = stat.stat.name;
        const baseStat = stat.base_stat;
        switch (statName) {
            case 'hp':
                stats.hp = baseStat;
                break;
            case 'attack':
                stats.attack = baseStat;
                break;
            case 'defense':
                stats.defense = baseStat;
                break;
            case 'special-attack':
                stats.specialAttack = baseStat;
                break;
            case 'special-defense':
                stats.specialDefense = baseStat;
                break;
            case 'speed':
                stats.speed = baseStat;
                break;
            default:
                break;
        }
    });

    return {
        id: pokemonData.id,
        name_de: germanName,
        name_en: pokemonData.name,
        type1: types[0] || "",
        type2: types[1] || "",
        stats,
    };
};

const fetchAllPokemon = async () => {
    const allPokemon = [];
    let nextUrl = 'https://pokeapi.co/api/v2/pokemon?limit=100';

    while (nextUrl) {
        const response = await fetch(nextUrl);
        const data = await response.json();

        for (const pokemon of data.results) {
            const pokemonId = pokemon.url.split('/').slice(-2, -1)[0]; // Extrahiere die Pokémon-ID aus der URL
            const pokemonDetails = await getPokemonData(pokemonId);
            allPokemon.push(pokemonDetails);
            console.log(`Fetched data for Pokémon ID: ${pokemonId}`);
        }

        nextUrl = data.next; // Setze die nächste URL, falls vorhanden
    }

    return allPokemon;
};

fetchAllPokemon().then((data) => {
    const fileContent = `// pkmndata.ts

export interface Pokemon {
    id: number;
    name_de: string;
    name_en: string;
    type1: string;
    type2?: string;
    stats: {
        hp: number;
        attack: number;
        defense: number;
        specialAttack: number;
        specialDefense: number;
        speed: number;
    };
}

export const pokemonData: Pokemon[] = ${JSON.stringify(data, null, 4)};
`;

    writeFileSync(`${dataDir}/pkmndata.ts`, fileContent);
    console.log('Daten wurden erfolgreich in pkmndata.ts gespeichert.');
});
