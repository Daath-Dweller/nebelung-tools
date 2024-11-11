// orthodata.ts

interface Rechtschreibfehler {
    name: string;
    name2: string;
    beispielFalsch: string;
    beispielKorrekt: string;
    erlaeuterung: string;

}

export const Rechtschreibfehler: { [key: string]: Rechtschreibfehler } = {
    Flexionsendungen: {
        name: 'Flexionsendungen',
        name2: "'n, 'ne, 'nen",
        beispielFalsch: "Ich hab 'nen Pferd. Ich hab 'n Hase. Ich hab 'ne Joghurt." ,
        beispielKorrekt: "Ich hab 'n Pferd. Ich hab 'nen Hasen. Ich hab 'nen Joghurt..",
        erlaeuterung: "Ein wird zu 'n gekürzt. Einen wird zu 'nen gekürzt. Eine wird zu 'ne gekürzt. Die Flexionsendungen " +
            "gehören hier zu neutrum (das Bier - ich hab ei'n Bier), maskulinum (der Hase - ich hab ei'nen Hasen) und femininum (die Katze - ei'ne Katze).",
    },
    Deppenapostroph: {
        name: 'Deppenapostroph',
        name2: "Bernd's Haus oder Bernds Haus?",
        beispielFalsch: "Wir gehen in's Haus. Vor Bernd's Haus stehen LKW's." ,
        beispielKorrekt: "Wir gehen ins Haus. Vor Bernds Haus stehen LKW.",
        erlaeuterung: "Der Apostroph zeigt nur beim Genitiv-S im Englischen den Fall bzw. ein Besitzverhältnis an. Im Standarddeutschen gibt es keinen Genitivapostroph." +
            " Akronyme die Mehrzahlen meinen, wie LKW oder CD benötigen keinen Apostroph, weder mit noch ohne Apostroph. Lastkraftwagens ist genauso Unsinn wie Lastkraftwagen's. " +
            "Ins ist eine gebräuchliche zusammengezogene Form von in das und wird nicht apostrophiert.",
    },
    GenitivTot: {
        name: 'Der Dativ ist dem Genitiv sein Tod',
        name2: "Dem Bernd sein Haus.",
        beispielFalsch: "Das ist der Tanja ihre Tasche. Und dem Alfred sein Geld. Wegen dem Regen ist er nass. Laut dem Wetterbericht ..." ,
        beispielKorrekt: "Das ist Tanjas Tasche und Alfreds Geld. Wegen des Regens ist er nass. Laut des Wetteberichts ...",
        erlaeuterung: "Wessen Tasche und wessen Geld? Tanjas, Alfreds. Genitiv statt Dativ. Sehr viele Präpositionen erfordern im Standarddeutschen den Genitiv: U.a. wegen, während, " +
            "anstatt, trotz, infolge, laut, ... ",
    }
};
