import React, { useState } from "react";

export default function Linguaortho() {
    const [activeContent, setActiveContent] = useState(null);

    return (
        <div className="md:p-12 bg-gray-800 text-white m-3">
            <h1 className="text-2xl font-bold mb-4 p-4">
              Rechtschreibfehler
            </h1>

        </div>
    );
}
