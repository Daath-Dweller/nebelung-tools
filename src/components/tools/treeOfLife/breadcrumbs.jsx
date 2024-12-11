import React from "react";

export const Breadcrumbs = ({ path }) => {
    // Exclude the last item in the path as it represents the current level
    const previousLevels = path.slice(0, -1);

    return (
        <div className="flex items-center space-x-1 mb-4 overflow-x-auto">
            {previousLevels.map((node, index) => (
                <span
                    key={index}
                    className="w-2 h-2 bg-white rounded-full flex-shrink-0"
                    title={`Level ${index}: ${node.name}`}
                ></span>
            ))}
        </div>
    );
};