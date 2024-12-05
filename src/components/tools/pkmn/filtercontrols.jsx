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
                            setShowInfo,
                            showInfo,
                        }) => (
    <div className="mt-4 flex flex-col md:flex-row items-center gap-2">


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

        <button
            onClick={() => setShowInfo(!showInfo)}
            className={`${showInfo ? "bg-white" : ""} rounded-full text-white bg-gray-600 px-2 ml-2 py-1 rounded mb-2 hover:bg-gray-800 border-2 border-teal-500 hover:border-white`}
        >
            ℹ️
        </button>
    </div>
);

export default FilterControls;
