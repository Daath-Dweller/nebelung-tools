// TreeOfLife.jsx
'use client';
import React, { useState } from 'react';
import { taxonomyData } from '@/data/treeoflifedata';

/**
 * Recursive function to find the path from the root to a specific node.
 */
const findPath = (node, name, path = []) => {
    if (node.name === name) return [...path, node];
    if (node.children) {
        for (let child of node.children) {
            const result = findPath(child, name, [...path, node]);
            if (result) return result;
        }
    }
    return null;
};

/**
 * Component to display the list of taxonomy nodes.
 */
const TaxonomyList = ({ node, onSelect, level = 1 }) => {
    return (
        <ul className={`list-none pl-[${level * 10}px] text-white font-sans m-2`}>
            {node.children && node.children.map((child) => (
                <li
                    key={child.name}
                    className={`${child.children ? 'cursor-pointer hover:text-gray-400' : 'cursor-default'} mb-3`}
                    onClick={() => child.children && onSelect(child)}
                >
                    <span className="mr-2 border-2 border-white p-2">{`E${level}`}</span>
                   <span className="border-2 border-white p-2 select-none"> {child.name}</span>
                </li>
            ))}
        </ul>
    );
};

/**
 * Component to display breadcrumbs as small dots representing each previous level.
 */
const Breadcrumbs = ({ path }) => {
    // Exclude the last item in the path as it represents the current level
    const previousLevels = path.slice(0, -1);

    return (
        <div className="flex items-center space-x-1 mb-4 overflow-x-auto">
            {previousLevels.map((node, index) => (
                <span
                    key={index}
                    className="w-2 h-2 bg-white rounded-full flex-shrink-0"
                    title={node.name}
                ></span>
            ))}
        </div>
    );
};

/**
 * Main TreeOfLife component.
 */
const TreeOfLife = () => {
    const [path, setPath] = useState([taxonomyData]);

    const currentNode = path[path.length - 1];
    const currentLevel = path.length;

    const handleSelect = (node) => {
        setPath([...path, node]);
    };

    const handleBack = () => {
        if (path.length > 1) {
            setPath(path.slice(0, path.length - 1));
        }
    };

    const handleReset = () => {
        setPath([taxonomyData]);
    };

    return (
        <div className="bg-black m-2 pt-6 pb-4 px-4 rounded-md">
            <h1 className="text-white mb-4 italic text-xl">Phylogenetischer Stammbaum der Lebewesen</h1>


            {currentLevel > 1 && <Breadcrumbs path={path} />}

            <div className="mb-5 flex">
                <button
                    onClick={handleReset}
                    disabled={path.length === 1}
                    className={`mr-2 py-1 px-2.5 cursor-pointer bg-gray-700 text-white border-0 rounded-md disabled:cursor-not-allowed disabled:bg-gray-700`}
                >
                    Zum Anfang
                </button>
                <button
                    onClick={handleBack}
                    disabled={path.length === 1}
                    className={`py-1 px-2.5 cursor-pointer bg-gray-700 text-white border-0 rounded-md disabled:cursor-not-allowed disabled:bg-gray-700`}
                >
                    ← Zurück
                </button>
            </div>
            <TaxonomyList node={currentNode} onSelect={handleSelect} level={currentLevel} />
        </div>
    );
};

export default TreeOfLife;
