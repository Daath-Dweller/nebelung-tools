import React, { useState } from "react";
import Linguagenus from "@/app/components/knowledge/language/linguagenus";
import Linguatermini from "@/app/components/knowledge/language/linguatermini";
import Linguaortho from "@/app/components/knowledge/language/linguaortho";

export default function Lingua() {
    const [activeContent, setActiveContent] = useState(null);

    return (
        <div className="md:p-12 bg-black text-white m-3">
            <h1 className="text-2xl font-bold mb-4 p-4">
                Verbastrum (Verbum für Wort + astrum, „Reich/Umgebung“; eine Art „Wort-Universum“ für Sprach- und Wortwissen)
            </h1>
            <div className="flex flex-col md:flex-row justify-center">
                <button
                    className="text-lg font-bold py-4 px-8 m-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg"
                    onClick={() => setActiveContent('genus')}
                >
                    Wortgeschlecht-Raten
                </button>
                <button
                    className="text-lg font-bold py-4 px-8 m-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg"
                    onClick={() => setActiveContent('rechtschreibfehler')}
                >
                    Rechtschreib-Wissen
                </button>
                <button
                    className="text-lg font-bold py-4 px-8 m-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg"
                    onClick={() => setActiveContent('fachbegriffe')}
                >
                  Wortschatz-Quiz
                </button>
            </div>
            <div className="mt-8">
                {activeContent === 'genus' && (

                <Linguagenus />
                )}
                {activeContent === 'rechtschreibfehler' && (
           <Linguaortho />
                )}
                {activeContent === 'fachbegriffe' && (
                  <Linguatermini />
                )}
            </div>
        </div>
    );
}