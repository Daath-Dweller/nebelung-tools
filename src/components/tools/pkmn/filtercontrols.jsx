// FilterControls.js
import React from 'react';
import {typenData} from "../../../data/pkmntypedata";
import {generationRanges} from '../../../data/pkmndata';

const FilterControls = ({
                            selectedGeneration,
                            handleGenerationChange,
                            selectedType1,
                            handleType1Change,
                            selectedType2,
                            handleType2Change,
                            selectedTypeAny,
                            handleTypeAnyChange,
                            typeCombinationOption,
                            handleTypeCombinationOptionChange,
                            evMode,
                            setEvMode,
                            ignoreHP,
                            setIgnoreHP,
                        }) => (
    <div className="flex flex-col gap-y-2 items-center">
    <div className="mt-2 grid sm:grid-cols-2 md:grid-cols-3 sd:grid-cols-5 items-center gap-2">


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

        <select
            id="type1"
            value={selectedType1}
            onChange={handleType1Change}
            className="bg-gray-700 text-white p-2 rounded"
        >
            <option value="beliebig">[Beliebiger Typ]</option>
            {typenData.map((type) => (
                <option key={type.name} value={type.name}>
                    {type.name}
                </option>
            ))}
        </select>

        <select
            id="type2"
            value={selectedType2}
            onChange={handleType2Change}
            className="bg-gray-700 text-white p-2 rounded"
        >
            <option value="beliebig">[Beliebiger Typ]</option>
            <option value="keiner">[Keiner]</option>
            {/* Neue Option */}
            {typenData.map((type) => (
                <option key={type.name} value={type.name}>
                    {type.name}
                </option>
            ))}
        </select>
        <select
            id="typeAny"
            value={selectedTypeAny}
            onChange={handleTypeAnyChange}
            className="bg-gray-700 text-white p-2 rounded"
        >
            <option value="beliebig">[Typ an beliebiger Stelle]</option>
            {typenData.map((type) => (
                <option key={type.name} value={type.name}>
                    {type.name}
                </option>
            ))}
        </select>

        {/* NEU: Pulldown-Menü für Typenkombinationen */}
        <select
            id="typeCombinationOption"
            value={typeCombinationOption}
            onChange={handleTypeCombinationOptionChange}
            className="bg-gray-700 text-white p-2 rounded"
        >
            <option value="">[Typenkombinationen]</option>
            <option value="nonexistent">Nicht existierende Typenkombinationen</option>
            <option value="unique">Einmalige Typenkombinationen</option>
        </select>
    </div>

        <div className="flex flex-col md:flex-row items-center gap-2 my-4">
            <label className="font-bold">EV-Punkte verteilen:</label>
            <select value={evMode} onChange={(e) => setEvMode(e.target.value)}
                    className="bg-gray-700 text-white p-1 rounded">
                <option value="keine">Keine</option>
                <option value="schwaechen">Schwächen ausgleichen</option>
                <option value="staerken">Stärken betonen</option>
            </select>
            <label className="ml-4 flex items-center gap-2">
                <input
                    type="checkbox"
                    checked={ignoreHP}
                    onChange={() => setIgnoreHP(!ignoreHP)}
                />
                HP ignorieren
            </label>
        </div>
    </div>
);

export default FilterControls;
