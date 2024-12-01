import React from "react";


export const Infotext = ({

                        }) => (
    <div className="mt-4">
        Typ-Offensive und Typ-Defensive ergeben sich aus der Summe von sehr
        effektiven, nicht effektiven und wirkungslosen Angriffen gegen ein
        Pokémon oder von einem Pokémon ausgehend, gewichtet und skaliert.
            Siehe auch{" "}
        <a
            className="text-teal-400"
            href="https://www.pokewiki.de/Typen#Wechselwirkungen"
            target="_blank"
        >
            PokeWiki
        </a>
        .
        <br/>
        <br/>
        GO (Gesamtoffensive) und GD (Gesamtdefensive) ergeben sich aus
        Skalierung von Typ-Off und Typ-Def in Verbindung mit gewichtetem Angr/SpAngr/Init
        und Vert/SpVert/HP. Typen die sehr oft effektiv sind, oder wenige
        Schwächen haben, nützen umso mehr, umso stärker die
        Offensiv-/Defensivwerte sind. Hohe bzw. niedrige HP-Werte geben
        einen Defensivbonus/-malus, hohe bzw. niedrige Initiativewerte geben
        einen Offensivbonus/-malus. Pokemon mit einem Typ besitzen immer einen Offensivmalus, da sie
            halb so viele STAB-Attacken nutzen könneen, die Doppeltypen.
        <br/>
        <br/>
        Durengard ist durch die Typenkombination Stahl/Geist defensiv
        stärker als offensiv, wodurch die Schildform mehr Punkte, als die
        Klingenform, bekommt. Duokles wiederum ist rechnerisch sogar besser als die Durengards Klingenform,
        da im Mittel ausgeglichene Werte meist vorteilhafter sind, als einige
        hohe und einige sehr niedrige Werte - wie es bei Durengards zwei
        Formen der Fall ist.
        <br/>
        <br/>
        Weiterhin gibt es einen Malus, falls einer der Angriffs- oder
        Verteidigungswerte sehr klein ist, was Spezial- oder -angriffe, bzw
        Abwehr gegen diese, enorm ineffektiv werden lässt.
        <br/>
        <br/>
        Nicht berücksichtigt werden Fähigkeiten und Wesen, die die
        Offensive und Defensive beträchtlich beeinflussen können.
        <br/>
        <br/>
        Ebenso findet der Attackenpool eines Pokemon keine Entsprechung in
        der Berechnung. Attacken die Heilen oder Statuswerte verändern,
        sowie vergiften, verbrennen etc., sind damit komplett ausgeblendet,
        obwohl sie taktisch entscheidend sein können.
        <br/>
        <br/>
        Der Monotypenbonus verdoppelt die Typenoffensive und Defensive, da
        Pokémon mit einem Typ sonst einen starken Nachteil in der
        Berechnung haben. Je nach Situation kann ein Doppeltyp vorteilhaft
        oder nachteilig sein.
        <br/>
        <br/>
        Die Werte sind rein statistisch zu sehen: Umso diverser der
        Gegnerpool und umso mehr Gegner, umso aussagekräftiger ist der Wert.
        Es werden Mittelwerte berechnet, die nichts über einen einzelnen
        Kampf aussagen. Im Schnitt sind Geist- und Stahlpokemon defensiv
        sehr gut aufgestellt, das ändert nichts an der Tatsache, dass sie
        schwächeren Unlicht- oder Feuerpokemon tendenziell unterlegen sind.
        <br/>
        <br/>
        Emojis für hohe Basiswerte (HP: 🩸, ANGR: ⚔️, VER: 🧱, SPANGR: 🌀, SPVER: 🍀, INIT: 🚀 ) für die oberen 15% und niedrige Basiswerte (💀) für die unteren 15%.
        <br/>
        <br/>
        Ⓜ️: Megaevolution
        <br/>
        ⬆️: Gigadynamax
        <br/>
        ✴️️: Legendär
        <br/>
        🛸: Ultra-Bestie
        <br/>
        ✨: Mysteriös
        <br/>
        ⏳: Paradox-Pokémon
    </div>);