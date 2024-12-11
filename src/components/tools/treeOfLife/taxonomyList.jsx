import {iconMappingTOL} from "../../../data/iconMapping";
import React from "react";

export const TaxonomyList = ({ node, onSelect, level }) => {
    return (
        <ul className="list-none text-white font-sans m-2 pl-0">
            {node.children && node.children.map((child, index) => {
                const IconComponent = child.icon ? iconMappingTOL[child.icon] : null;
                return (
                    <li
                        key={`${child.name}-${index}`} // Sicherstellen, dass der Schlüssel eindeutig ist
                        className={`${child.children ? 'cursor-pointer hover:text-gray-400' : 'cursor-default'} 
                                 mb-3 flex items-center`}
                        onClick={() => child.children && onSelect(child)}
                        aria-label={`Level E${level}: ${child.name}`}
                    >
                        <span className="mr-2 border-2 border-white p-2 select-none flex-shrink-0">
                            {/* Anzeige der Ebene und des Rangs */}
                            E{level}: {child.rank ? `${child.rank} ` : ''}
                        </span>
                        <span className="border-2 border-white p-2 select-none flex items-center">
                            {child.name}
                        </span>
                        {IconComponent && (
                            <span className="border-2 border-white p-2 select-none flex items-center ml-2">
                                <IconComponent className="text-2xl" />
                            </span>
                        )}
                    </li>
                );
            })}
        </ul>
    );
};