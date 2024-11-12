import React from "react";
import {Rechtschreibfehler} from "@/data/orthodata";

export default function Linguaortho() {
    return (
        <div className="md:p-12 bg-gray-800 text-white m-3">
            <h1 className="text-2xl font-bold mb-4 p-4">
                Orthographie & Rechtschreibung - häufige Fehler & guter Ausdruck
            </h1>

            {Object.keys(Rechtschreibfehler).map((key) => {
                const fehler = Rechtschreibfehler[key];
                return (
                    <div key={key} className="bg-gray-700 p-6 mb-6 rounded-lg shadow-lg">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold">{fehler.name2}</h2>
                            <p className="text-lg italic">{fehler.name}</p>
                        </div>

                        <div className="mb-4">
                            <div className="mb-2">
                                <h3 className="font-semibold">Falsch:</h3>
                                <p>{fehler.beispielFalsch}</p>
                            </div>
                            <div>
                                <h3 className="font-semibold">Korrekt:</h3>
                                <p>{fehler.beispielKorrekt}</p>
                            </div>
                        </div>

                        <p className="text-sm">{fehler.erlaeuterung}</p>
                    </div>
                );
            })}
        </div>
    );
}
