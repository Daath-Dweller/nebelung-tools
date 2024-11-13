import React, { useState } from "react";
import Linguagenus from "@/components/language/linguagenus";
import Linguatermini from "@/components/language/linguatermini";
import Linguaortho from "@/components/language/linguaortho";

export default function Lingua() {
    const [activeContent, setActiveContent] = useState(null);

    return (
        <div className="md:p-12 bg-black text-white m-3 text-center">



            <span className="text-2xl font-bold mb-2 p-4">Verbastrum </span><br/>
            <span className="text-sm"> (Verbum für Wort + astrum, „Reich/Umgebung“; eine Art „Wort-Universum“ für Sprach- und
                Wortwissen)</span>

            <div className="flex flex-col md:flex-row justify-center mt-8">
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

                    <Linguagenus/>
                )}
                {activeContent === 'rechtschreibfehler' && (
                    <Linguaortho/>
                )}
                {activeContent === 'fachbegriffe' && (
                    <Linguatermini/>
                )}
            </div>
        </div>
    );
}
