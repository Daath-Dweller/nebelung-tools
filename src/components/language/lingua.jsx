import React, {useState} from "react";
import Linguagenus from "@/components/language/linguagenus";
import Linguatermini from "@/components/language/linguatermini";
import Linguaortho from "@/components/language/linguaortho";
import Linguanumerus from "@/components/language/linguanumerus";
import LinguaCasus from "@/components/language/linguacasus"; // NEU: Import für dein Konjunktiv-II-Quiz (umbenannt zu LinguaCasus)

export default function Lingua() {
    const [activeContent, setActiveContent] = useState(null);

    return (
        <div className="md:p-12 bg-black text-white m-2 text-center">

            <span className="text-2xl font-bold mb-2 p-4">Verbastrum </span><br/>
            <span className="text-sm italic"> (Verbum für Wort + astrum, „Reich/Umgebung“; eine Art „Wort-Universum“ für Sprach- und
                Wortwissen)</span>

            {/* flex-wrap hinzugefügt für bessere Darstellung bei vielen Buttons */}
            <div className="flex flex-col md:flex-row justify-center flex-wrap mt-8">
                <button
                    className="text-lg font-bold py-4 px-8 m-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg"
                    onClick={() => setActiveContent('fachbegriffe')}
                >
                    Wortschatz-Quiz
                </button>
                <button
                    className="text-lg font-bold py-4 px-8 m-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg"
                    onClick={() => setActiveContent('genus')}
                >
                    Wortgeschlecht-Quiz
                </button>

                <button
                    className="text-lg font-bold py-4 px-8 m-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg"
                    onClick={() => setActiveContent('numerus')}
                >
                    Plural-Quiz
                </button>
                {/* NEU: Button für das Konjunktiv-II-Quiz */}
                <button
                    className="text-lg font-bold py-4 px-8 m-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg"
                    // Wenn der Inhalt Konjunktiv II ist, wäre 'konjunktiv' ein passenderer Key als 'casus'
                    onClick={() => setActiveContent('konjunktiv')}
                >
                    Konjunktiv II-Quiz {/* Textvorschlag für den Button */}
                </button>
                <button
                    className="text-lg font-bold py-4 px-8 m-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg"
                    onClick={() => setActiveContent('rechtschreibfehler')}
                >
                    Rechtschreib-Wissen
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
                {activeContent === 'numerus' && (
                    <Linguanumerus/>
                )}
                {/* NEU: Bedingtes Rendern für das Konjunktiv-II-Quiz */}
                {/* Passe 'konjunktiv' an, falls du einen anderen activeContent Key für linguacasus möchtest */}
                {activeContent === 'konjunktiv' && (
                    <LinguaCasus />
                )}
            </div>
        </div>
    );
}