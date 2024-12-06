// TreeOfLife.jsx
'use client';
import React, { useState, useEffect } from 'react';
import { taxonomyData } from '@/data/treeoflifedata';

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

const TaxonomyList = ({ node, onSelect, level = 1 }) => {
    return (
        <ul style={{ listStyleType: 'none', paddingLeft: `${level * 10}px`, color: 'white', fontFamily: 'sans-serif' }}>
            {node.children && node.children.map((child) => (
                <li
                    key={child.name}
                    style={{ cursor: child.children ? 'pointer' : 'default', marginBottom: '4px' }}
                    onClick={() => child.children && onSelect(child)}
                >
                    <span style={{ marginRight: '8px' }}>{`E${level}`}</span>
                    {child.name}
                </li>
            ))}
        </ul>
    );
};

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
        <div className="bg-black m-2 pt-6 pb-4 px-4">
            <h1 className="text-white mb-4 italic">Phylogenetischer Stammbaum der Lebewesen</h1>
            <div style={{ marginBottom: '10px' }}>
                <button
                    onClick={handleReset}
                    disabled={path.length === 1}
                    style={{
                        marginRight: '10px',
                        padding: '5px 10px',
                        cursor: path.length === 1 ? 'not-allowed' : 'pointer',
                        backgroundColor: '#444',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                    }}
                >
                    Zum Anfang
                </button>
                <button
                    onClick={handleBack}
                    disabled={path.length === 1}
                    style={{
                        padding: '5px 10px',
                        cursor: path.length === 1 ? 'not-allowed' : 'pointer',
                        backgroundColor: '#444',
                        color: 'white',
                        border: 'none',
                        borderRadius: '4px',
                    }}
                >
                    ← Zurück
                </button>
            </div>
            <TaxonomyList node={currentNode} onSelect={handleSelect} level={currentLevel} />
        </div>
    );
};

export default TreeOfLife;
