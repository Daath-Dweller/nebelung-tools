import React, { useState } from "react";
import { fehlschluesse } from "@/data/logikdata"; // Importiere die Daten

export default function Gedankenexperiment() {

    return (
        <div className="md:p-12 bg-black text-white m-3 text-center rounded-lg shadow-lg">
            <span className="text-3xl font-extrabold mb-4 p-4">Cogitarium</span><br/>
            <span className="text-sm italic">
            (Von cogitare = „denken“ im Lateinischen, mit der Endung, die an ein Gefäß oder einen Ort erinnert – „Ort des Denkens“.)
            </span>
            <p className="text-2xl font-bold mt-14 mb-8">Gedankenexperimente</p>



        </div>
    );
}
