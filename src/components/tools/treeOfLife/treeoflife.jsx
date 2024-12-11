// TreeOfLife.jsx
'use client';
import React, { useState } from 'react';
import { taxonomyData } from '@/data/treeOfLifeData/treeoflifedata';
import { TaxonPath } from "@/components/tools/treeOfLife/taxonPath";
import { TaxonomyList } from "@/components/tools/treeOfLife/taxonomyList";
import { Breadcrumbs } from "@/components/tools/treeOfLife/breadcrumbs";
import PhyloTree from "@/components/tools/treeOfLife/phyloTree";

const TreeOfLife = () => {
    const [path, setPath] = useState([taxonomyData]);
    const currentNode = path[path.length - 1];
    const currentLevel = path.length - 1; // E0 für Root, E1 für erste Ebene, etc.
    const maxAncestors = 3;
    const startIndex = Math.max(0, path.length - maxAncestors - 1);
    const ancestors = path.slice(startIndex, path.length - 1);
    const current = path[path.length - 1];
    const descendants = current.children ? current.children.slice(0, 2) : [];
    const additionalDescendants = current.children ? current.children.length - 2 : 0;

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
        <div className="grid gap-x-4 md:gap-x-0 grid-cols-1 md:grid-cols-2 bg-black m-2 pt-6 pb-4 px-4 rounded-md select-none">
            <div id="links" className="select-none">
                <h1 className="text-white mb-4 italic text-xl">Phylogenetischer Stammbaum der Lebewesen</h1>

                {/* TaxonPath Component */}
                <div className="px-4 py-2">
                    {currentLevel >= 0 && <TaxonPath path={path} setPath={setPath}/>}
                </div>

                {/* Breadcrumbs Component */}
                <div className="px-4 py-2">
                    {currentLevel >= 0 && <Breadcrumbs path={path}/>}
                </div>

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
                <TaxonomyList node={currentNode} onSelect={handleSelect} level={currentLevel + 1}/>
            </div>
            <div id="rechts" className="bg-black p-4">
                <PhyloTree
                    ancestors={ancestors}
                    current={current}
                    descendants={descendants}
                    additionalDescendants={additionalDescendants}
                />
            </div>
        </div>
    );
};

export default TreeOfLife;
