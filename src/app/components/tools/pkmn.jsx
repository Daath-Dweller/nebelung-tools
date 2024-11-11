import React, { useState } from "react";
import { pokemonData } from "@/app/data/pkmndata.ts";

const PokeTable = () => {
    const [displayedCount, setDisplayedCount] = useState(100); // Anfangs nur 100 anzeigen

    // Funktion zum Laden weiterer 100 Pokémon
    const loadMorePokemon = () => {
        setDisplayedCount((prevCount) => prevCount + 100);
    };

    return (
        <div className="md:p-12 p-4 bg-black text-white m-3">
            <h1 className="text-2xl font-bold mb-2 pl-4 pt-2">Pokemon</h1>

            <div style={{ textAlign: "center", marginTop: "50px" }}>
                <h2>Pokémon Liste (Deutsch)</h2>

                <table style={{ margin: "0 auto", borderCollapse: "collapse", width: "100%" }}>
                    <thead>
                    <tr>
                        <th style={{ border: "1px solid black", padding: "8px" }}>Nummer</th>
                        <th style={{ border: "1px solid black", padding: "8px" }}>Name Deutsch</th>

                        <th style={{ border: "1px solid black", padding: "8px" }}>Erster Typ</th>
                        <th style={{ border: "1px solid black", padding: "8px" }}>Zweiter Typ</th>
                        <th style={{ border: "1px solid black", padding: "8px" }}>HP</th>
                        <th style={{ border: "1px solid black", padding: "8px" }}>Angriff</th>
                        <th style={{ border: "1px solid black", padding: "8px" }}>Verteidigung</th>
                        <th style={{ border: "1px solid black", padding: "8px" }}>Spezial-Angriff</th>
                        <th style={{ border: "1px solid black", padding: "8px" }}>Spezial-Verteidigung</th>
                        <th style={{ border: "1px solid black", padding: "8px" }}>Geschwindigkeit</th>
                    </tr>
                    </thead>
                    <tbody>
                    {pokemonData.slice(0, displayedCount).map((pokemon) => (
                        <tr key={pokemon.id}>
                            <td style={{ border: "1px solid black", padding: "8px" }}>{pokemon.id}</td>
                            <td style={{ border: "1px solid black", padding: "8px" }}>{pokemon.name_de}</td>

                            <td style={{ border: "1px solid black", padding: "8px" }}>{pokemon.type1}</td>
                            <td style={{ border: "1px solid black", padding: "8px" }}>{pokemon.type2 || "-"}</td>
                            <td style={{ border: "1px solid black", padding: "8px" }}>{pokemon.stats.hp}</td>
                            <td style={{ border: "1px solid black", padding: "8px" }}>{pokemon.stats.attack}</td>
                            <td style={{ border: "1px solid black", padding: "8px" }}>{pokemon.stats.defense}</td>
                            <td style={{ border: "1px solid black", padding: "8px" }}>{pokemon.stats.specialAttack}</td>
                            <td style={{ border: "1px solid black", padding: "8px" }}>{pokemon.stats.specialDefense}</td>
                            <td style={{ border: "1px solid black", padding: "8px" }}>{pokemon.stats.speed}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>

                {displayedCount < pokemonData.length && (
                    <button
                        onClick={loadMorePokemon}
                        style={{ padding: "10px", marginTop: "20px", cursor: "pointer" }}
                    >
                        Mehr laden
                    </button>
                )}
            </div>
        </div>
    );
};

export default PokeTable;
