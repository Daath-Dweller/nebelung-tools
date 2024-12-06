// TreeOfLife.jsx
'use client';
import React, { useState, useEffect } from 'react';
import { taxonomyData } from '@/data/treeoflifedata';

const findNodeByName = (node, name) => {
    if (node.name === name) return node;
    if (node.children) {
        for (let child of node.children) {
            const found = findNodeByName(child, name);
            if (found) return found;
        }
    }
    return null;
};

const TaxonomyList = ({ node, onSelect }) => {
    return (
        <ul style={{ listStyleType: 'none', paddingLeft: '20px', color: 'white', fontFamily: 'sans-serif' }}>
            {node.children && node.children.map((child) => (
                <li
                    key={child.name}
                    style={{ cursor: child.children ? 'pointer' : 'default' }}
                    onClick={() => child.children && onSelect(child.name)}
                >
                    {child.name}
                </li>
            ))}
        </ul>
    );
};

const TreeOfLife = () => {
    const [selectedNodeName, setSelectedNodeName] = useState(null);
    const [currentNode, setCurrentNode] = useState(taxonomyData);

    useEffect(() => {
        if (selectedNodeName) {
            const node = findNodeByName(taxonomyData, selectedNodeName);
            if (node && node.children) {
                setCurrentNode(node);
            } else {
                // Wenn der ausgewählte Knoten keine Kinder hat, zurücksetzen
                setSelectedNodeName(null);
                setCurrentNode(taxonomyData);
            }
        } else {
            setCurrentNode(taxonomyData);
        }
    }, [selectedNodeName]);

    const handleSelect = (name) => {
        if (selectedNodeName === name) {
            setSelectedNodeName(null);
        } else {
            setSelectedNodeName(name);
        }
    };

    const handleReset = () => {
        setSelectedNodeName(null);
    };

    return (
        <div className="bg-black m-2 pt-6 pb-4 px-4">
            <h1 className="text-white mb-4 italic">Phylogenetischer Stammbaum der Lebewesen</h1>
            {selectedNodeName ? (
                <div>
                    <div
                        style={{ color: 'white', marginBottom: '10px', cursor: 'pointer' }}
                        onClick={handleReset}
                    >
                        ← Zurück
                    </div>
                    <TaxonomyList node={currentNode} onSelect={handleSelect} />
                </div>
            ) : (
                <TaxonomyList node={taxonomyData} onSelect={handleSelect} />
            )}
        </div>
    );
};

export default TreeOfLife;
