export interface Typen {
    id: number;
    name: string;
    offensiv: number;
    defensiv: number;
}


export const typenData: Typen[] = [
    {
        id: 1,
        name: "Eis",
        offensiv: 10,
        defensiv: 7,

    },
    {
        id: 2,
        name: "Normal",
        offensiv: 5,
        defensiv: 20,

    },
    {
        id: 3,
        name: "Pflanze",
        offensiv: 0,
        defensiv: 7,

    },
    {
        id: 4,
        name: "Käfer",
        offensiv: 0,
        defensiv: 12,

    },
    {
        id: 5,
        name: "Elektro",
        offensiv: 4,
        defensiv: 18,

    },
    {
        id: 6,
        name: "Drache",
        offensiv: 9,
        defensiv: 13,

    },
    {
        id: 7,
        name: "Gift",
        offensiv: 1,
        defensiv: 17,

    },
    {
        id: 8,
        name: "Wasser",
        offensiv: 12,
        defensiv: 16,

    },
    {
        id: 9,
        name: "Geist",
        offensiv: 10,
        defensiv: 24,

    },
    {
        id: 10,
        name: "Stahl",
        offensiv: 9,
        defensiv: 24,

    },
    {
        id: 11,
        name: "Feuer",
        offensiv: 10,
        defensiv: 15,

    },
    {
        id: 12,
        name: "Psycho",
        offensiv: 7,
        defensiv: 11,

    },
    {
        id: 13,
        name: "Fee",
        offensiv: 12,
        defensiv: 20,

    },
    {
        id: 14,
        name: "Flug",
        offensiv: 12,
        defensiv: 17,

    },
    {
        id: 15,
        name: "Unlicht",
        offensiv: 11,
        defensiv: 16,

    },
    {
        id: 16,
        name: "Kampf",
        offensiv: 1,
        defensiv: 12,

    },
    {
        id: 17,
        name: "Boden",
        offensiv: 10,
        defensiv: 16,

    },
    {
        id: 18,
        name: "Gestein",
        offensiv: 13,
        defensiv: 11,

    }
]

export interface defTypenKombo {
    id: number;
    typ1: string;
    typ2: string;
    wert: number;
}


export const dtkData: defTypenKombo[] = [
    {
        id: 1,
        typ1: "Eis",
        typ2: "Pflanze",
        wert: -1,
    },
    {
        id: 2,
        typ1: "Eis",
        typ2: "Käfer",
        wert: 5,
    },
    {
        id: 3,
        typ1: "Eis",
        typ2: "Elektro",
        wert: 9,
    },
    {
        id: 4,
        typ1: "Eis",
        typ2: "Drache",
        wert: 6,
    },
    {
        id: 5,
        typ1: "Eis",
        typ2: "Wasser",
        wert: 10,
    },
    {
        id: 6,
        typ1: "Eis",
        typ2: "Stahl",
        wert: 20,
    },
    {
        id: 7,
        typ1: "Eis",
        typ2: "Geist",
        wert: 16,
    },
    {
        id: 8,
        typ1: "Eis",
        typ2: "Psycho",
        wert: 2,
    },
    {
        id: 9,
        typ1: "Eis",
        typ2: "Fee",
        wert: 12,
    },
    {
        id: 10,
        typ1: "Eis",
        typ2: "Feuer",
        wert: 10,
    },
    {
        id: 11,
        typ1: "Eis",
        typ2: "Flug",
        wert: 11,
    },
    {
        id: 12,
        typ1: "Eis",
        typ2: "Unlicht",
        wert: 6,
    },
    {
        id: 13,
        typ1: "Eis",
        typ2: "Kampf",
        wert: 3,
    },
    {
        id: 14,
        typ1: "Eis",
        typ2: "Boden",
        wert: 9,
    },
    {
        id: 15,
        typ1: "Eis",
        typ2: "Gestein",
        wert: 0,
    },
    {
        id: 16,
        typ1: "Normal",
        typ2: "Pflanze",
        wert: 9,
    },
    {
        id: 17,
        typ1: "Normal",
        typ2: "Elektro",
        wert: 20,
    },
    {
        id: 18,
        typ1: "Normal",
        typ2: "Drache",
        wert: 15,
    },
    {
        id: 19,
        typ1: "Normal",
        typ2: "Gift",
        wert: 21,
    },
    {
        id: 20,
        typ1: "Normal",
        typ2: "Wasser",
        wert: 18,
    },
    {
        id: 21,
        typ1: "Normal",
        typ2: "Geist",
        wert: 32,
    },
    {
        id: 22,
        typ1: "Normal",
        typ2: "Psycho",
        wert: 18,
    },
    {
        id: 23,
        typ1: "Normal",
        typ2: "Fee",
        wert: 24,
    },
    {
        id: 24,
        typ1: "Normal",
        typ2: "Feuer",
        wert: 17,
    },
    {
        id: 25,
        typ1: "Normal",
        typ2: "Flug",
        wert: 21,
    },
    {
        id: 26,
        typ1: "Normal",
        typ2: "Unlicht",
        wert: 18,
    },
    {
        id: 27,
        typ1: "Normal",
        typ2: "Kampf",
        wert: 14,
    },
    {
        id: 28,
        typ1: "Normal",
        typ2: "Boden",
        wert: 18,
    },
    {
        id: 29,
        typ1: "Pflanze",
        typ2: "Käfer",
        wert: 5,
    },
    {
        id: 30,
        typ1: "Pflanze",
        typ2: "Elektro",
        wert: 12,
    },
    {
        id: 31,
        typ1: "Pflanze",
        typ2: "Drache",
        wert: 8,
    },
    {
        id: 32,
        typ1: "Pflanze",
        typ2: "Gift",
        wert: 13,
    },
    {
        id: 33,
        typ1: "Pflanze",
        typ2: "Wasser",
        wert: 14,
    },
    {
        id: 34,
        typ1: "Pflanze",
        typ2: "Stahl",
        wert: 26,
    },
    {
        id: 35,
        typ1: "Pflanze",
        typ2: "Geist",
        wert: 17,
    },
    {
        id: 36,
        typ1: "Pflanze",
        typ2: "Psycho",
        wert: 1,
    },
    {
        id: 37,
        typ1: "Pflanze",
        typ2: "Fee",
        wert: 12,
    },
    {
        id: 38,
        typ1: "Pflanze",
        typ2: "Feuer",
        wert: 15,
    },
    {
        id: 39,
        typ1: "Pflanze",
        typ2: "Flug",
        wert: 11,
    },
    {
        id: 40,
        typ1: "Pflanze",
        typ2: "Unlicht",
        wert: 6,
    },
    {
        id: 41,
        typ1: "Pflanze",
        typ2: "Kampf",
        wert: 4,
    },
    {
        id: 42,
        typ1: "Pflanze",
        typ2: "Boden",
        wert: 11,
    },
    {
        id: 43,
        typ1: "Pflanze",
        typ2: "Gestein",
        wert: 8,
    },
    {
        id: 44,
        typ1: "Käfer",
        typ2: "Elektro",
        wert: 20,
    },
    {
        id: 45,
        typ1: "Käfer",
        typ2: "Gift",
        wert: 15,
    },
    {
        id: 46,
        typ1: "Käfer",
        typ2: "Wasser",
        wert: 14,
    },
    {
        id: 47,
        typ1: "Käfer",
        typ2: "Stahl",
        wert: 28,
    },
    {
        id: 48,
        typ1: "Käfer",
        typ2: "Geist",
        wert: 6,
    },
    {
        id: 49,
        typ1: "Käfer",
        typ2: "Psycho",
        wert: 6,
    },
    {
        id: 50,
        typ1: "Käfer",
        typ2: "Fee",
        wert: 15,
    },
    {
        id: 51,
        typ1: "Käfer",
        typ2: "Feuer",
        wert: 15,
    },
    {
        id: 52,
        typ1: "Käfer",
        typ2: "Flug",
        wert: 13,
    },
    {
        id: 53,
        typ1: "Käfer",
        typ2: "Unlicht",
        wert: 10,
    },
    {
        id: 54,
        typ1: "Käfer",
        typ2: "Kampf",
        wert: 9,
    },
    {
        id: 55,
        typ1: "Käfer",
        typ2: "Boden",
        wert: 14,
    },
    {
        id: 56,
        typ1: "Käfer",
        typ2: "Gestein",
        wert: 11,
    },
    {
        id: 57,
        typ1: "Elektro",
        typ2: "Drache",
        wert: 14,
    },
    {
        id: 58,
        typ1: "Elektro",
        typ2: "Gift",
        wert: 18,
    },
    {
        id: 59,
        typ1: "Elektro",
        typ2: "Wasser",
        wert: 19,
    },
    {
        id: 60,
        typ1: "Elektro",
        typ2: "Stahl",
        wert: 27,
    },
    {
        id: 61,
        typ1: "Elektro",
        typ2: "Geist",
        wert: 27,
    },
    {
        id: 62,
        typ1: "Elektro",
        typ2: "Psycho",
        wert: 11,
    },
    {
        id: 63,
        typ1: "Elektro",
        typ2: "Fee",
        wert: 22,
    },
    {
        id: 64,
        typ1: "Elektro",
        typ2: "Feuer",
        wert: 19,
    },
    {
        id: 65,
        typ1: "Elektro",
        typ2: "Flug",
        wert: 22,
    },
    {
        id: 66,
        typ1: "Elektro",
        typ2: "Unlicht",
        wert: 16,
    },
    {
        id: 67,
        typ1: "Elektro",
        typ2: "Kampf",
        wert: 14,
    },
    {
        id: 68,
        typ1: "Elektro",
        typ2: "Boden",
        wert: 15,
    },
    {
        id: 69,
        typ1: "Elektro",
        typ2: "Gestein",
        wert: 11,
    },
    {
        id: 70,
        typ1: "Drache",
        typ2: "Gift",
        wert: 15,
    },
    {
        id: 71,
        typ1: "Drache",
        typ2: "Wasser",
        wert: 19,
    },
    {
        id: 72,
        typ1: "Drache",
        typ2: "Stahl",
        wert: 28,
    },
    {
        id: 73,
        typ1: "Drache",
        typ2: "Geist",
        wert: 19,
    },
    {
        id: 74,
        typ1: "Drache",
        typ2: "Psycho",
        wert: 6,
    },
    {
        id: 75,
        typ1: "Drache",
        typ2: "Fee",
        wert: 18,
    },
    {
        id: 76,
        typ1: "Drache",
        typ2: "Feuer",
        wert: 18,
    },
    {
        id: 77,
        typ1: "Drache",
        typ2: "Flug",
        wert: 16,
    },
    {
        id: 78,
        typ1: "Drache",
        typ2: "Unlicht",
        wert: 12,
    },
    {
        id: 79,
        typ1: "Drache",
        typ2: "Kampf",
        wert: 8,
    },
    {
        id: 80,
        typ1: "Drache",
        typ2: "Boden",
        wert: 15,
    },
    {
        id: 81,
        typ1: "Drache",
        typ2: "Gestein",
        wert: 7,
    },
    {
        id: 82,
        typ1: "Gift",
        typ2: "Wasser",
        wert: 17,
    },
    {
        id: 83,
        typ1: "Gift",
        typ2: "Stahl",
        wert: 30,
    },
    {
        id: 84,
        typ1: "Gift",
        typ2: "Geist",
        wert: 24,
    },
    {
        id: 85,
        typ1: "Gift",
        typ2: "Psycho",
        wert: 15,
    },
    {
        id: 86,
        typ1: "Gift",
        typ2: "Fee",
        wert: 23,
    },
    {
        id: 87,
        typ1: "Gift",
        typ2: "Feuer",
        wert: 18,
    },
    {
        id: 88,
        typ1: "Gift",
        typ2: "Flug",
        wert: 22,
    },
    {
        id: 89,
        typ1: "Gift",
        typ2: "Unlicht",
        wert: 24,
    },
    {
        id: 90,
        typ1: "Gift",
        typ2: "Kampf",
        wert: 15,
    },
    {
        id: 91,
        typ1: "Gift",
        typ2: "Boden",
        wert: 18,
    },
    {
        id: 92,
        typ1: "Gift",
        typ2: "Gestein",
        wert: 12,
    },
    {
        id: 93,
        typ1: "Wasser",
        typ2: "Stahl",
        wert: 28,
    },
    {
        id: 94,
        typ1: "Wasser",
        typ2: "Geist",
        wert: 22,
    },
    {
        id: 95,
        typ1: "Wasser",
        typ2: "Psycho",
        wert: 9,
    },
    {
        id: 96,
        typ1: "Wasser",
        typ2: "Fee",
        wert: 20,
    },
    {
        id: 97,
        typ1: "Wasser",
        typ2: "Feuer",
        wert: 20,
    },
    {
        id: 98,
        typ1: "Wasser",
        typ2: "Flug",
        wert: 20,
    },
    {
        id: 99,
        typ1: "Wasser",
        typ2: "Unlicht",
        wert: 14,
    },
    {
        id: 100,
        typ1: "Wasser",
        typ2: "Kampf",
        wert: 10,
    },
    {
        id: 101,
        typ1: "Wasser",
        typ2: "Boden",
        wert: 22,
    },
    {
        id: 102,
        typ1: "Wasser",
        typ2: "Gestein",
        wert: 11,
    },
    {
        id: 103,
        typ1: "Stahl",
        typ2: "Geist",
        wert: 32,
    },
    {
        id: 104,
        typ1: "Stahl",
        typ2: "Psycho",
        wert: 22,
    },
    {
        id: 105,
        typ1: "Stahl",
        typ2: "Fee",
        wert: 33,
    },
    {
        id: 106,
        typ1: "Stahl",
        typ2: "Feuer",
        wert: 31,
    },
    {
        id: 107,
        typ1: "Stahl",
        typ2: "Flug",
        wert: 34,
    },
    {
        id: 108,
        typ1: "Stahl",
        typ2: "Unlicht",
        wert: 26,
    },
    {
        id: 109,
        typ1: "Stahl",
        typ2: "Kampf",
        wert: 26,
    },
    {
        id: 110,
        typ1: "Stahl",
        typ2: "Boden",
        wert: 26,
    },
    {
        id: 111,
        typ1: "Stahl",
        typ2: "Gestein",
        wert: 22,
    },
    {
        id: 112,
        typ1: "Geist",
        typ2: "Psycho",
        wert: 20,
    },
    {
        id: 113,
        typ1: "Geist",
        typ2: "Fee",
        wert: 30,
    },
    {
        id: 114,
        typ1: "Geist",
        typ2: "Feuer",
        wert: 22,
    },
    {
        id: 115,
        typ1: "Geist",
        typ2: "Flug",
        wert: 24,
    },
    {
        id: 116,
        typ1: "Geist",
        typ2: "Unlicht",
        wert: 31,
    },
    {
        id: 117,
        typ1: "Geist",
        typ2: "Kampf",
        wert: 21,
    },
    {
        id: 118,
        typ1: "Geist",
        typ2: "Boden",
        wert: 23,
    },
    {
        id: 119,
        typ1: "Psycho",
        typ2: "Fee",
        wert: 18,
    },
    {
        id: 120,
        typ1: "Psycho",
        typ2: "Feuer",
        wert: 10,
    },
    {
        id: 121,
        typ1: "Psycho",
        typ2: "Flug",
        wert: 13,
    },
    {
        id: 122,
        typ1: "Psycho",
        typ2: "Unlicht",
        wert: 15,
    },
    {
        id: 123,
        typ1: "Psycho",
        typ2: "Kampf",
        wert: 11,
    },
    {
        id: 124,
        typ1: "Psycho",
        typ2: "Boden",
        wert: 10,
    },
    {
        id: 125,
        typ1: "Psycho",
        typ2: "Gestein",
        wert: 2,
    },
    {
        id: 126,
        typ1: "Fee",
        typ2: "Flug",
        wert: 21,
    },
    {
        id: 127,
        typ1: "Fee",
        typ2: "Unlicht",
        wert: 23,
    },
    {
        id: 128,
        typ1: "Fee",
        typ2: "Kampf",
        wert: 16,
    },
    {
        id: 129,
        typ1: "Fee",
        typ2: "Gestein",
        wert: 14,
    },
    {
        id: 130,
        typ1: "Feuer",
        typ2: "Flug",
        wert: 22,
    },
    {
        id: 131,
        typ1: "Feuer",
        typ2: "Unlicht",
        wert: 17,
    },
    {
        id: 132,
        typ1: "Feuer",
        typ2: "Kampf",
        wert: 14,
    },
    {
        id: 133,
        typ1: "Feuer",
        typ2: "Boden",
        wert: 24,
    },
    {
        id: 134,
        typ1: "Feuer",
        typ2: "Gestein",
        wert: 11,
    },
    {
        id: 135,
        typ1: "Flug",
        typ2: "Unlicht",
        wert: 19,
    },
    {
        id: 136,
        typ1: "Flug",
        typ2: "Kampf",
        wert: 14,
    },
    {
        id: 137,
        typ1: "Flug",
        typ2: "Boden",
        wert: 23,
    },
    {
        id: 138,
        typ1: "Flug",
        typ2: "Gestein",
        wert: 13,
    },
    {
        id: 139,
        typ1: "Unlicht",
        typ2: "Kampf",
        wert: 17,
    },
    {
        id: 140,
        typ1: "Unlicht",
        typ2: "Boden",
        wert: 14,
    },
    {
        id: 141,
        typ1: "Unlicht",
        typ2: "Gestein",
        wert: 6,
    },
    {
        id: 142,
        typ1: "Kampf",
        typ2: "Boden",
        wert: 9,
    },
    {
        id: 143,
        typ1: "Kampf",
        typ2: "Gestein",
        wert: 3,
    },
    {
        id: 144,
        typ1: "Boden",
        typ2: "Gestein",
        wert: 8,
    },
]