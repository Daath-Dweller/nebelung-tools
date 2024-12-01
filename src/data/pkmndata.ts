// pkmndata.ts

export const generationRanges = {
    "Alle Generationen": { min: 1, max: 12000 },
    "Generation 1": { min: 1, max: 151 },
    "Generation 2": { min: 152, max: 251 },
    "Generation 3": { min: 252, max: 386 },
    "Generation 4": { min: 387, max: 493 },
    "Generation 5": { min: 494, max: 649 },
    "Generation 6": { min: 650, max: 721 },
    "Generation 7": { min: 722, max: 809 },
    "Generation 8": { min: 810, max: 905 },
    "Generation 9": { min: 906, max: 1025 },
};

export const legendaryIDs = [
    144, 145, 146, 150, // Gen 1
    243, 244, 245, 249, 250,  // Gen 2
    377, 378, 379, 380, 381, 382, 383, 384,  // Gen 3
    480, 481, 482, 483, 484, 485, 486, 487, 488, // Gen 4
    638, 639, 640, 641, 642, 643, 644, 645, 646, , // Gen 5
    716, 717, 718, // Gen 6
    772, 773, 785, 786, 787, 788, 789, 790, 791, 792, 800, 791, 792, 800, // Gen 7
   894,895, 896, 897, 888, 889, 890, 891, 892, 905, // Gen 8
    1001,1002,1003,1004,1007, 1008, 1014,1015, 1016, 1017, 1024, // Gen 9
    10007, 10019, 10020, 10021, 10022, 10023, 10043, 1044, 10062, 10063, 10079,
    10118, 10119, 10120, 10155, 10156, 10157, 10169,10170,10171, 10188, 10189, 10190, 10191, 10193, 10194, 10226, 10227,
    10245, 10246, 10249, 10273, 10274, 10275, 10276, 10277, 10280, 10279, 10044 // Sonderformen
];

export const mysticIDs = [
  151, // Gen 1
  251, // Gen 2
    385, 386, // Gen 3
    489,490,491,492,493, //Gen 4
    494,647,648,649, // Gen 5
    719,720,721, // Gen 6
    801,802,807,808,809, //Gen 7
    893, //Gen 8
    1025, //Gen 9
    10006, 10278, 10024, 10018
];

export const paradoxIDs = [
984, 985,986,987,988,989,990,991,992,993,994,995,1005, 1006,1009, 1010,1020,1021,1022,1023
];

export const ubIDs = [
    793, 794, 795, 796, 797, 798, 799, 803,804,805,806,
];

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

export interface Pokemon {
    id: number;
    name_de: string;
    name_en: string;
    type1: string;
    type2?: string;
    stats: {
        hp: number;
        attack: number;
        defense: number;
        specialAttack: number;
        specialDefense: number;
        speed: number;
    };
}


export const pokemonData: Pokemon[] = [
    {
        "id": 1,
        "name_de": "Bisasam",
        "name_en": "bulbasaur",
        "type1": "Pflanze",
        "type2": "Gift",
        "stats": {
            "hp": 45,
            "attack": 49,
            "defense": 49,
            "specialAttack": 65,
            "specialDefense": 65,
            "speed": 45
        }
    },
    {
        "id": 2,
        "name_de": "Bisaknosp",
        "name_en": "ivysaur",
        "type1": "Pflanze",
        "type2": "Gift",
        "stats": {
            "hp": 60,
            "attack": 62,
            "defense": 63,
            "specialAttack": 80,
            "specialDefense": 80,
            "speed": 60
        }
    },
    {
        "id": 3,
        "name_de": "Bisaflor",
        "name_en": "venusaur",
        "type1": "Pflanze",
        "type2": "Gift",
        "stats": {
            "hp": 80,
            "attack": 82,
            "defense": 83,
            "specialAttack": 100,
            "specialDefense": 100,
            "speed": 80
        }
    },
    {
        "id": 4,
        "name_de": "Glumanda",
        "name_en": "charmander",
        "type1": "Feuer",
        "type2": "",
        "stats": {
            "hp": 39,
            "attack": 52,
            "defense": 43,
            "specialAttack": 60,
            "specialDefense": 50,
            "speed": 65
        }
    },
    {
        "id": 5,
        "name_de": "Glutexo",
        "name_en": "charmeleon",
        "type1": "Feuer",
        "type2": "",
        "stats": {
            "hp": 58,
            "attack": 64,
            "defense": 58,
            "specialAttack": 80,
            "specialDefense": 65,
            "speed": 80
        }
    },
    {
        "id": 6,
        "name_de": "Glurak",
        "name_en": "charizard",
        "type1": "Feuer",
        "type2": "Flug",
        "stats": {
            "hp": 78,
            "attack": 84,
            "defense": 78,
            "specialAttack": 109,
            "specialDefense": 85,
            "speed": 100
        }
    },
    {
        "id": 7,
        "name_de": "Schiggy",
        "name_en": "squirtle",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 44,
            "attack": 48,
            "defense": 65,
            "specialAttack": 50,
            "specialDefense": 64,
            "speed": 43
        }
    },
    {
        "id": 8,
        "name_de": "Schillok",
        "name_en": "wartortle",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 59,
            "attack": 63,
            "defense": 80,
            "specialAttack": 65,
            "specialDefense": 80,
            "speed": 58
        }
    },
    {
        "id": 9,
        "name_de": "Turtok",
        "name_en": "blastoise",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 79,
            "attack": 83,
            "defense": 100,
            "specialAttack": 85,
            "specialDefense": 105,
            "speed": 78
        }
    },
    {
        "id": 10,
        "name_de": "Raupy",
        "name_en": "caterpie",
        "type1": "Käfer",
        "type2": "",
        "stats": {
            "hp": 45,
            "attack": 30,
            "defense": 35,
            "specialAttack": 20,
            "specialDefense": 20,
            "speed": 45
        }
    },
    {
        "id": 11,
        "name_de": "Safcon",
        "name_en": "metapod",
        "type1": "Käfer",
        "type2": "",
        "stats": {
            "hp": 50,
            "attack": 20,
            "defense": 55,
            "specialAttack": 25,
            "specialDefense": 25,
            "speed": 30
        }
    },
    {
        "id": 12,
        "name_de": "Smettbo",
        "name_en": "butterfree",
        "type1": "Käfer",
        "type2": "Flug",
        "stats": {
            "hp": 60,
            "attack": 45,
            "defense": 50,
            "specialAttack": 90,
            "specialDefense": 80,
            "speed": 70
        }
    },
    {
        "id": 13,
        "name_de": "Hornliu",
        "name_en": "weedle",
        "type1": "Käfer",
        "type2": "Gift",
        "stats": {
            "hp": 40,
            "attack": 35,
            "defense": 30,
            "specialAttack": 20,
            "specialDefense": 20,
            "speed": 50
        }
    },
    {
        "id": 14,
        "name_de": "Kokuna",
        "name_en": "kakuna",
        "type1": "Käfer",
        "type2": "Gift",
        "stats": {
            "hp": 45,
            "attack": 25,
            "defense": 50,
            "specialAttack": 25,
            "specialDefense": 25,
            "speed": 35
        }
    },
    {
        "id": 15,
        "name_de": "Bibor",
        "name_en": "beedrill",
        "type1": "Käfer",
        "type2": "Gift",
        "stats": {
            "hp": 65,
            "attack": 90,
            "defense": 40,
            "specialAttack": 45,
            "specialDefense": 80,
            "speed": 75
        }
    },
    {
        "id": 16,
        "name_de": "Taubsi",
        "name_en": "pidgey",
        "type1": "Normal",
        "type2": "Flug",
        "stats": {
            "hp": 40,
            "attack": 45,
            "defense": 40,
            "specialAttack": 35,
            "specialDefense": 35,
            "speed": 56
        }
    },
    {
        "id": 17,
        "name_de": "Tauboga",
        "name_en": "pidgeotto",
        "type1": "Normal",
        "type2": "Flug",
        "stats": {
            "hp": 63,
            "attack": 60,
            "defense": 55,
            "specialAttack": 50,
            "specialDefense": 50,
            "speed": 71
        }
    },
    {
        "id": 18,
        "name_de": "Tauboss",
        "name_en": "pidgeot",
        "type1": "Normal",
        "type2": "Flug",
        "stats": {
            "hp": 83,
            "attack": 80,
            "defense": 75,
            "specialAttack": 70,
            "specialDefense": 70,
            "speed": 101
        }
    },
    {
        "id": 19,
        "name_de": "Rattfratz",
        "name_en": "rattata",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 30,
            "attack": 56,
            "defense": 35,
            "specialAttack": 25,
            "specialDefense": 35,
            "speed": 72
        }
    },
    {
        "id": 20,
        "name_de": "Rattikarl",
        "name_en": "raticate",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 55,
            "attack": 81,
            "defense": 60,
            "specialAttack": 50,
            "specialDefense": 70,
            "speed": 97
        }
    },
    {
        "id": 21,
        "name_de": "Habitak",
        "name_en": "spearow",
        "type1": "Normal",
        "type2": "Flug",
        "stats": {
            "hp": 40,
            "attack": 60,
            "defense": 30,
            "specialAttack": 31,
            "specialDefense": 31,
            "speed": 70
        }
    },
    {
        "id": 22,
        "name_de": "Ibitak",
        "name_en": "fearow",
        "type1": "Normal",
        "type2": "Flug",
        "stats": {
            "hp": 65,
            "attack": 90,
            "defense": 65,
            "specialAttack": 61,
            "specialDefense": 61,
            "speed": 100
        }
    },
    {
        "id": 23,
        "name_de": "Rettan",
        "name_en": "ekans",
        "type1": "Gift",
        "type2": "",
        "stats": {
            "hp": 35,
            "attack": 60,
            "defense": 44,
            "specialAttack": 40,
            "specialDefense": 54,
            "speed": 55
        }
    },
    {
        "id": 24,
        "name_de": "Arbok",
        "name_en": "arbok",
        "type1": "Gift",
        "type2": "",
        "stats": {
            "hp": 60,
            "attack": 95,
            "defense": 69,
            "specialAttack": 65,
            "specialDefense": 79,
            "speed": 80
        }
    },
    {
        "id": 25,
        "name_de": "Pikachu",
        "name_en": "pikachu",
        "type1": "Elektro",
        "type2": "",
        "stats": {
            "hp": 35,
            "attack": 55,
            "defense": 40,
            "specialAttack": 50,
            "specialDefense": 50,
            "speed": 90
        }
    },
    {
        "id": 26,
        "name_de": "Raichu",
        "name_en": "raichu",
        "type1": "Elektro",
        "type2": "",
        "stats": {
            "hp": 60,
            "attack": 90,
            "defense": 55,
            "specialAttack": 90,
            "specialDefense": 80,
            "speed": 110
        }
    },
    {
        "id": 27,
        "name_de": "Sandan",
        "name_en": "sandshrew",
        "type1": "Boden",
        "type2": "",
        "stats": {
            "hp": 50,
            "attack": 75,
            "defense": 85,
            "specialAttack": 20,
            "specialDefense": 30,
            "speed": 40
        }
    },
    {
        "id": 28,
        "name_de": "Sandamer",
        "name_en": "sandslash",
        "type1": "Boden",
        "type2": "",
        "stats": {
            "hp": 75,
            "attack": 100,
            "defense": 110,
            "specialAttack": 45,
            "specialDefense": 55,
            "speed": 65
        }
    },
    {
        "id": 29,
        "name_de": "Nidoran♀",
        "name_en": "nidoran-f",
        "type1": "Gift",
        "type2": "",
        "stats": {
            "hp": 55,
            "attack": 47,
            "defense": 52,
            "specialAttack": 40,
            "specialDefense": 40,
            "speed": 41
        }
    },
    {
        "id": 30,
        "name_de": "Nidorina",
        "name_en": "nidorina",
        "type1": "Gift",
        "type2": "",
        "stats": {
            "hp": 70,
            "attack": 62,
            "defense": 67,
            "specialAttack": 55,
            "specialDefense": 55,
            "speed": 56
        }
    },
    {
        "id": 31,
        "name_de": "Nidoqueen",
        "name_en": "nidoqueen",
        "type1": "Gift",
        "type2": "Boden",
        "stats": {
            "hp": 90,
            "attack": 92,
            "defense": 87,
            "specialAttack": 75,
            "specialDefense": 85,
            "speed": 76
        }
    },
    {
        "id": 32,
        "name_de": "Nidoran♂",
        "name_en": "nidoran-m",
        "type1": "Gift",
        "type2": "",
        "stats": {
            "hp": 46,
            "attack": 57,
            "defense": 40,
            "specialAttack": 40,
            "specialDefense": 40,
            "speed": 50
        }
    },
    {
        "id": 33,
        "name_de": "Nidorino",
        "name_en": "nidorino",
        "type1": "Gift",
        "type2": "",
        "stats": {
            "hp": 61,
            "attack": 72,
            "defense": 57,
            "specialAttack": 55,
            "specialDefense": 55,
            "speed": 65
        }
    },
    {
        "id": 34,
        "name_de": "Nidoking",
        "name_en": "nidoking",
        "type1": "Gift",
        "type2": "Boden",
        "stats": {
            "hp": 81,
            "attack": 102,
            "defense": 77,
            "specialAttack": 85,
            "specialDefense": 75,
            "speed": 85
        }
    },
    {
        "id": 35,
        "name_de": "Piepi",
        "name_en": "clefairy",
        "type1": "Fee",
        "type2": "",
        "stats": {
            "hp": 70,
            "attack": 45,
            "defense": 48,
            "specialAttack": 60,
            "specialDefense": 65,
            "speed": 35
        }
    },
    {
        "id": 36,
        "name_de": "Pixi",
        "name_en": "clefable",
        "type1": "Fee",
        "type2": "",
        "stats": {
            "hp": 95,
            "attack": 70,
            "defense": 73,
            "specialAttack": 95,
            "specialDefense": 90,
            "speed": 60
        }
    },
    {
        "id": 37,
        "name_de": "Vulpix",
        "name_en": "vulpix",
        "type1": "Feuer",
        "type2": "",
        "stats": {
            "hp": 38,
            "attack": 41,
            "defense": 40,
            "specialAttack": 50,
            "specialDefense": 65,
            "speed": 65
        }
    },
    {
        "id": 38,
        "name_de": "Vulnona",
        "name_en": "ninetales",
        "type1": "Feuer",
        "type2": "",
        "stats": {
            "hp": 73,
            "attack": 76,
            "defense": 75,
            "specialAttack": 81,
            "specialDefense": 100,
            "speed": 100
        }
    },
    {
        "id": 39,
        "name_de": "Pummeluff",
        "name_en": "jigglypuff",
        "type1": "Normal",
        "type2": "Fee",
        "stats": {
            "hp": 115,
            "attack": 45,
            "defense": 20,
            "specialAttack": 45,
            "specialDefense": 25,
            "speed": 20
        }
    },
    {
        "id": 40,
        "name_de": "Knuddeluff",
        "name_en": "wigglytuff",
        "type1": "Normal",
        "type2": "Fee",
        "stats": {
            "hp": 140,
            "attack": 70,
            "defense": 45,
            "specialAttack": 85,
            "specialDefense": 50,
            "speed": 45
        }
    },
    {
        "id": 41,
        "name_de": "Zubat",
        "name_en": "zubat",
        "type1": "Gift",
        "type2": "Flug",
        "stats": {
            "hp": 40,
            "attack": 45,
            "defense": 35,
            "specialAttack": 30,
            "specialDefense": 40,
            "speed": 55
        }
    },
    {
        "id": 42,
        "name_de": "Golbat",
        "name_en": "golbat",
        "type1": "Gift",
        "type2": "Flug",
        "stats": {
            "hp": 75,
            "attack": 80,
            "defense": 70,
            "specialAttack": 65,
            "specialDefense": 75,
            "speed": 90
        }
    },
    {
        "id": 43,
        "name_de": "Myrapla",
        "name_en": "oddish",
        "type1": "Pflanze",
        "type2": "Gift",
        "stats": {
            "hp": 45,
            "attack": 50,
            "defense": 55,
            "specialAttack": 75,
            "specialDefense": 65,
            "speed": 30
        }
    },
    {
        "id": 44,
        "name_de": "Duflor",
        "name_en": "gloom",
        "type1": "Pflanze",
        "type2": "Gift",
        "stats": {
            "hp": 60,
            "attack": 65,
            "defense": 70,
            "specialAttack": 85,
            "specialDefense": 75,
            "speed": 40
        }
    },
    {
        "id": 45,
        "name_de": "Giflor",
        "name_en": "vileplume",
        "type1": "Pflanze",
        "type2": "Gift",
        "stats": {
            "hp": 75,
            "attack": 80,
            "defense": 85,
            "specialAttack": 110,
            "specialDefense": 90,
            "speed": 50
        }
    },
    {
        "id": 46,
        "name_de": "Paras",
        "name_en": "paras",
        "type1": "Käfer",
        "type2": "Pflanze",
        "stats": {
            "hp": 35,
            "attack": 70,
            "defense": 55,
            "specialAttack": 45,
            "specialDefense": 55,
            "speed": 25
        }
    },
    {
        "id": 47,
        "name_de": "Parasek",
        "name_en": "parasect",
        "type1": "Käfer",
        "type2": "Pflanze",
        "stats": {
            "hp": 60,
            "attack": 95,
            "defense": 80,
            "specialAttack": 60,
            "specialDefense": 80,
            "speed": 30
        }
    },
    {
        "id": 48,
        "name_de": "Bluzuk",
        "name_en": "venonat",
        "type1": "Käfer",
        "type2": "Gift",
        "stats": {
            "hp": 60,
            "attack": 55,
            "defense": 50,
            "specialAttack": 40,
            "specialDefense": 55,
            "speed": 45
        }
    },
    {
        "id": 49,
        "name_de": "Omot",
        "name_en": "venomoth",
        "type1": "Käfer",
        "type2": "Gift",
        "stats": {
            "hp": 70,
            "attack": 65,
            "defense": 60,
            "specialAttack": 90,
            "specialDefense": 75,
            "speed": 90
        }
    },
    {
        "id": 50,
        "name_de": "Digda",
        "name_en": "diglett",
        "type1": "Boden",
        "type2": "",
        "stats": {
            "hp": 10,
            "attack": 55,
            "defense": 25,
            "specialAttack": 35,
            "specialDefense": 45,
            "speed": 95
        }
    },
    {
        "id": 51,
        "name_de": "Digdri",
        "name_en": "dugtrio",
        "type1": "Boden",
        "type2": "",
        "stats": {
            "hp": 35,
            "attack": 100,
            "defense": 50,
            "specialAttack": 50,
            "specialDefense": 70,
            "speed": 120
        }
    },
    {
        "id": 52,
        "name_de": "Mauzi",
        "name_en": "meowth",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 40,
            "attack": 45,
            "defense": 35,
            "specialAttack": 40,
            "specialDefense": 40,
            "speed": 90
        }
    },
    {
        "id": 53,
        "name_de": "Snobilikat",
        "name_en": "persian",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 65,
            "attack": 70,
            "defense": 60,
            "specialAttack": 65,
            "specialDefense": 65,
            "speed": 115
        }
    },
    {
        "id": 54,
        "name_de": "Enton",
        "name_en": "psyduck",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 50,
            "attack": 52,
            "defense": 48,
            "specialAttack": 65,
            "specialDefense": 50,
            "speed": 55
        }
    },
    {
        "id": 55,
        "name_de": "Entoron",
        "name_en": "golduck",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 80,
            "attack": 82,
            "defense": 78,
            "specialAttack": 95,
            "specialDefense": 80,
            "speed": 85
        }
    },
    {
        "id": 56,
        "name_de": "Menki",
        "name_en": "mankey",
        "type1": "Kampf",
        "type2": "",
        "stats": {
            "hp": 40,
            "attack": 80,
            "defense": 35,
            "specialAttack": 35,
            "specialDefense": 45,
            "speed": 70
        }
    },
    {
        "id": 57,
        "name_de": "Rasaff",
        "name_en": "primeape",
        "type1": "Kampf",
        "type2": "",
        "stats": {
            "hp": 65,
            "attack": 105,
            "defense": 60,
            "specialAttack": 60,
            "specialDefense": 70,
            "speed": 95
        }
    },
    {
        "id": 58,
        "name_de": "Fukano",
        "name_en": "growlithe",
        "type1": "Feuer",
        "type2": "",
        "stats": {
            "hp": 55,
            "attack": 70,
            "defense": 45,
            "specialAttack": 70,
            "specialDefense": 50,
            "speed": 60
        }
    },
    {
        "id": 59,
        "name_de": "Arkani",
        "name_en": "arcanine",
        "type1": "Feuer",
        "type2": "",
        "stats": {
            "hp": 90,
            "attack": 110,
            "defense": 80,
            "specialAttack": 100,
            "specialDefense": 80,
            "speed": 95
        }
    },
    {
        "id": 60,
        "name_de": "Quapsel",
        "name_en": "poliwag",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 40,
            "attack": 50,
            "defense": 40,
            "specialAttack": 40,
            "specialDefense": 40,
            "speed": 90
        }
    },
    {
        "id": 61,
        "name_de": "Quaputzi",
        "name_en": "poliwhirl",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 65,
            "attack": 65,
            "defense": 65,
            "specialAttack": 50,
            "specialDefense": 50,
            "speed": 90
        }
    },
    {
        "id": 62,
        "name_de": "Quappo",
        "name_en": "poliwrath",
        "type1": "Wasser",
        "type2": "Kampf",
        "stats": {
            "hp": 90,
            "attack": 95,
            "defense": 95,
            "specialAttack": 70,
            "specialDefense": 90,
            "speed": 70
        }
    },
    {
        "id": 63,
        "name_de": "Abra",
        "name_en": "abra",
        "type1": "Psycho",
        "type2": "",
        "stats": {
            "hp": 25,
            "attack": 20,
            "defense": 15,
            "specialAttack": 105,
            "specialDefense": 55,
            "speed": 90
        }
    },
    {
        "id": 64,
        "name_de": "Kadabra",
        "name_en": "kadabra",
        "type1": "Psycho",
        "type2": "",
        "stats": {
            "hp": 40,
            "attack": 35,
            "defense": 30,
            "specialAttack": 120,
            "specialDefense": 70,
            "speed": 105
        }
    },
    {
        "id": 65,
        "name_de": "Simsala",
        "name_en": "alakazam",
        "type1": "Psycho",
        "type2": "",
        "stats": {
            "hp": 55,
            "attack": 50,
            "defense": 45,
            "specialAttack": 135,
            "specialDefense": 95,
            "speed": 120
        }
    },
    {
        "id": 66,
        "name_de": "Machollo",
        "name_en": "machop",
        "type1": "Kampf",
        "type2": "",
        "stats": {
            "hp": 70,
            "attack": 80,
            "defense": 50,
            "specialAttack": 35,
            "specialDefense": 35,
            "speed": 35
        }
    },
    {
        "id": 67,
        "name_de": "Maschock",
        "name_en": "machoke",
        "type1": "Kampf",
        "type2": "",
        "stats": {
            "hp": 80,
            "attack": 100,
            "defense": 70,
            "specialAttack": 50,
            "specialDefense": 60,
            "speed": 45
        }
    },
    {
        "id": 68,
        "name_de": "Machomei",
        "name_en": "machamp",
        "type1": "Kampf",
        "type2": "",
        "stats": {
            "hp": 90,
            "attack": 130,
            "defense": 80,
            "specialAttack": 65,
            "specialDefense": 85,
            "speed": 55
        }
    },
    {
        "id": 69,
        "name_de": "Knofensa",
        "name_en": "bellsprout",
        "type1": "Pflanze",
        "type2": "Gift",
        "stats": {
            "hp": 50,
            "attack": 75,
            "defense": 35,
            "specialAttack": 70,
            "specialDefense": 30,
            "speed": 40
        }
    },
    {
        "id": 70,
        "name_de": "Ultrigaria",
        "name_en": "weepinbell",
        "type1": "Pflanze",
        "type2": "Gift",
        "stats": {
            "hp": 65,
            "attack": 90,
            "defense": 50,
            "specialAttack": 85,
            "specialDefense": 45,
            "speed": 55
        }
    },
    {
        "id": 71,
        "name_de": "Sarzenia",
        "name_en": "victreebel",
        "type1": "Pflanze",
        "type2": "Gift",
        "stats": {
            "hp": 80,
            "attack": 105,
            "defense": 65,
            "specialAttack": 100,
            "specialDefense": 70,
            "speed": 70
        }
    },
    {
        "id": 72,
        "name_de": "Tentacha",
        "name_en": "tentacool",
        "type1": "Wasser",
        "type2": "Gift",
        "stats": {
            "hp": 40,
            "attack": 40,
            "defense": 35,
            "specialAttack": 50,
            "specialDefense": 100,
            "speed": 70
        }
    },
    {
        "id": 73,
        "name_de": "Tentoxa",
        "name_en": "tentacruel",
        "type1": "Wasser",
        "type2": "Gift",
        "stats": {
            "hp": 80,
            "attack": 70,
            "defense": 65,
            "specialAttack": 80,
            "specialDefense": 120,
            "speed": 100
        }
    },
    {
        "id": 74,
        "name_de": "Kleinstein",
        "name_en": "geodude",
        "type1": "Gestein",
        "type2": "Boden",
        "stats": {
            "hp": 40,
            "attack": 80,
            "defense": 100,
            "specialAttack": 30,
            "specialDefense": 30,
            "speed": 20
        }
    },
    {
        "id": 75,
        "name_de": "Georok",
        "name_en": "graveler",
        "type1": "Gestein",
        "type2": "Boden",
        "stats": {
            "hp": 55,
            "attack": 95,
            "defense": 115,
            "specialAttack": 45,
            "specialDefense": 45,
            "speed": 35
        }
    },
    {
        "id": 76,
        "name_de": "Geowaz",
        "name_en": "golem",
        "type1": "Gestein",
        "type2": "Boden",
        "stats": {
            "hp": 80,
            "attack": 120,
            "defense": 130,
            "specialAttack": 55,
            "specialDefense": 65,
            "speed": 45
        }
    },
    {
        "id": 77,
        "name_de": "Ponita",
        "name_en": "ponyta",
        "type1": "Feuer",
        "type2": "",
        "stats": {
            "hp": 50,
            "attack": 85,
            "defense": 55,
            "specialAttack": 65,
            "specialDefense": 65,
            "speed": 90
        }
    },
    {
        "id": 78,
        "name_de": "Gallopa",
        "name_en": "rapidash",
        "type1": "Feuer",
        "type2": "",
        "stats": {
            "hp": 65,
            "attack": 100,
            "defense": 70,
            "specialAttack": 80,
            "specialDefense": 80,
            "speed": 105
        }
    },
    {
        "id": 79,
        "name_de": "Flegmon",
        "name_en": "slowpoke",
        "type1": "Wasser",
        "type2": "Psycho",
        "stats": {
            "hp": 90,
            "attack": 65,
            "defense": 65,
            "specialAttack": 40,
            "specialDefense": 40,
            "speed": 15
        }
    },
    {
        "id": 80,
        "name_de": "Lahmus",
        "name_en": "slowbro",
        "type1": "Wasser",
        "type2": "Psycho",
        "stats": {
            "hp": 95,
            "attack": 75,
            "defense": 110,
            "specialAttack": 100,
            "specialDefense": 80,
            "speed": 30
        }
    },
    {
        "id": 81,
        "name_de": "Magnetilo",
        "name_en": "magnemite",
        "type1": "Elektro",
        "type2": "Stahl",
        "stats": {
            "hp": 25,
            "attack": 35,
            "defense": 70,
            "specialAttack": 95,
            "specialDefense": 55,
            "speed": 45
        }
    },
    {
        "id": 82,
        "name_de": "Magneton",
        "name_en": "magneton",
        "type1": "Elektro",
        "type2": "Stahl",
        "stats": {
            "hp": 50,
            "attack": 60,
            "defense": 95,
            "specialAttack": 120,
            "specialDefense": 70,
            "speed": 70
        }
    },
    {
        "id": 83,
        "name_de": "Porenta",
        "name_en": "farfetchd",
        "type1": "Normal",
        "type2": "Flug",
        "stats": {
            "hp": 52,
            "attack": 90,
            "defense": 55,
            "specialAttack": 58,
            "specialDefense": 62,
            "speed": 60
        }
    },
    {
        "id": 84,
        "name_de": "Dodu",
        "name_en": "doduo",
        "type1": "Normal",
        "type2": "Flug",
        "stats": {
            "hp": 35,
            "attack": 85,
            "defense": 45,
            "specialAttack": 35,
            "specialDefense": 35,
            "speed": 75
        }
    },
    {
        "id": 85,
        "name_de": "Dodri",
        "name_en": "dodrio",
        "type1": "Normal",
        "type2": "Flug",
        "stats": {
            "hp": 60,
            "attack": 110,
            "defense": 70,
            "specialAttack": 60,
            "specialDefense": 60,
            "speed": 110
        }
    },
    {
        "id": 86,
        "name_de": "Jurob",
        "name_en": "seel",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 65,
            "attack": 45,
            "defense": 55,
            "specialAttack": 45,
            "specialDefense": 70,
            "speed": 45
        }
    },
    {
        "id": 87,
        "name_de": "Jugong",
        "name_en": "dewgong",
        "type1": "Wasser",
        "type2": "Eis",
        "stats": {
            "hp": 90,
            "attack": 70,
            "defense": 80,
            "specialAttack": 70,
            "specialDefense": 95,
            "speed": 70
        }
    },
    {
        "id": 88,
        "name_de": "Sleima",
        "name_en": "grimer",
        "type1": "Gift",
        "type2": "",
        "stats": {
            "hp": 80,
            "attack": 80,
            "defense": 50,
            "specialAttack": 40,
            "specialDefense": 50,
            "speed": 25
        }
    },
    {
        "id": 89,
        "name_de": "Sleimok",
        "name_en": "muk",
        "type1": "Gift",
        "type2": "",
        "stats": {
            "hp": 105,
            "attack": 105,
            "defense": 75,
            "specialAttack": 65,
            "specialDefense": 100,
            "speed": 50
        }
    },
    {
        "id": 90,
        "name_de": "Muschas",
        "name_en": "shellder",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 30,
            "attack": 65,
            "defense": 100,
            "specialAttack": 45,
            "specialDefense": 25,
            "speed": 40
        }
    },
    {
        "id": 91,
        "name_de": "Austos",
        "name_en": "cloyster",
        "type1": "Wasser",
        "type2": "Eis",
        "stats": {
            "hp": 50,
            "attack": 95,
            "defense": 180,
            "specialAttack": 85,
            "specialDefense": 45,
            "speed": 70
        }
    },
    {
        "id": 92,
        "name_de": "Nebulak",
        "name_en": "gastly",
        "type1": "Geist",
        "type2": "Gift",
        "stats": {
            "hp": 30,
            "attack": 35,
            "defense": 30,
            "specialAttack": 100,
            "specialDefense": 35,
            "speed": 80
        }
    },
    {
        "id": 93,
        "name_de": "Alpollo",
        "name_en": "haunter",
        "type1": "Geist",
        "type2": "Gift",
        "stats": {
            "hp": 45,
            "attack": 50,
            "defense": 45,
            "specialAttack": 115,
            "specialDefense": 55,
            "speed": 95
        }
    },
    {
        "id": 94,
        "name_de": "Gengar",
        "name_en": "gengar",
        "type1": "Geist",
        "type2": "Gift",
        "stats": {
            "hp": 60,
            "attack": 65,
            "defense": 60,
            "specialAttack": 130,
            "specialDefense": 75,
            "speed": 110
        }
    },
    {
        "id": 95,
        "name_de": "Onix",
        "name_en": "onix",
        "type1": "Gestein",
        "type2": "Boden",
        "stats": {
            "hp": 35,
            "attack": 45,
            "defense": 160,
            "specialAttack": 30,
            "specialDefense": 45,
            "speed": 70
        }
    },
    {
        "id": 96,
        "name_de": "Traumato",
        "name_en": "drowzee",
        "type1": "Psycho",
        "type2": "",
        "stats": {
            "hp": 60,
            "attack": 48,
            "defense": 45,
            "specialAttack": 43,
            "specialDefense": 90,
            "speed": 42
        }
    },
    {
        "id": 97,
        "name_de": "Hypno",
        "name_en": "hypno",
        "type1": "Psycho",
        "type2": "",
        "stats": {
            "hp": 85,
            "attack": 73,
            "defense": 70,
            "specialAttack": 73,
            "specialDefense": 115,
            "speed": 67
        }
    },
    {
        "id": 98,
        "name_de": "Krabby",
        "name_en": "krabby",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 30,
            "attack": 105,
            "defense": 90,
            "specialAttack": 25,
            "specialDefense": 25,
            "speed": 50
        }
    },
    {
        "id": 99,
        "name_de": "Kingler",
        "name_en": "kingler",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 55,
            "attack": 130,
            "defense": 115,
            "specialAttack": 50,
            "specialDefense": 50,
            "speed": 75
        }
    },
    {
        "id": 100,
        "name_de": "Voltobal",
        "name_en": "voltorb",
        "type1": "Elektro",
        "type2": "",
        "stats": {
            "hp": 40,
            "attack": 30,
            "defense": 50,
            "specialAttack": 55,
            "specialDefense": 55,
            "speed": 100
        }
    },
    {
        "id": 101,
        "name_de": "Lektrobal",
        "name_en": "electrode",
        "type1": "Elektro",
        "type2": "",
        "stats": {
            "hp": 60,
            "attack": 50,
            "defense": 70,
            "specialAttack": 80,
            "specialDefense": 80,
            "speed": 150
        }
    },
    {
        "id": 102,
        "name_de": "Owei",
        "name_en": "exeggcute",
        "type1": "Pflanze",
        "type2": "Psycho",
        "stats": {
            "hp": 60,
            "attack": 40,
            "defense": 80,
            "specialAttack": 60,
            "specialDefense": 45,
            "speed": 40
        }
    },
    {
        "id": 103,
        "name_de": "Kokowei",
        "name_en": "exeggutor",
        "type1": "Pflanze",
        "type2": "Psycho",
        "stats": {
            "hp": 95,
            "attack": 95,
            "defense": 85,
            "specialAttack": 125,
            "specialDefense": 75,
            "speed": 55
        }
    },
    {
        "id": 104,
        "name_de": "Tragosso",
        "name_en": "cubone",
        "type1": "Boden",
        "type2": "",
        "stats": {
            "hp": 50,
            "attack": 50,
            "defense": 95,
            "specialAttack": 40,
            "specialDefense": 50,
            "speed": 35
        }
    },
    {
        "id": 105,
        "name_de": "Knogga",
        "name_en": "marowak",
        "type1": "Boden",
        "type2": "",
        "stats": {
            "hp": 60,
            "attack": 80,
            "defense": 110,
            "specialAttack": 50,
            "specialDefense": 80,
            "speed": 45
        }
    },
    {
        "id": 106,
        "name_de": "Kicklee",
        "name_en": "hitmonlee",
        "type1": "Kampf",
        "type2": "",
        "stats": {
            "hp": 50,
            "attack": 120,
            "defense": 53,
            "specialAttack": 35,
            "specialDefense": 110,
            "speed": 87
        }
    },
    {
        "id": 107,
        "name_de": "Nockchan",
        "name_en": "hitmonchan",
        "type1": "Kampf",
        "type2": "",
        "stats": {
            "hp": 50,
            "attack": 105,
            "defense": 79,
            "specialAttack": 35,
            "specialDefense": 110,
            "speed": 76
        }
    },
    {
        "id": 108,
        "name_de": "Schlurp",
        "name_en": "lickitung",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 90,
            "attack": 55,
            "defense": 75,
            "specialAttack": 60,
            "specialDefense": 75,
            "speed": 30
        }
    },
    {
        "id": 109,
        "name_de": "Smogon",
        "name_en": "koffing",
        "type1": "Gift",
        "type2": "",
        "stats": {
            "hp": 40,
            "attack": 65,
            "defense": 95,
            "specialAttack": 60,
            "specialDefense": 45,
            "speed": 35
        }
    },
    {
        "id": 110,
        "name_de": "Smogmog",
        "name_en": "weezing",
        "type1": "Gift",
        "type2": "",
        "stats": {
            "hp": 65,
            "attack": 90,
            "defense": 120,
            "specialAttack": 85,
            "specialDefense": 70,
            "speed": 60
        }
    },
    {
        "id": 111,
        "name_de": "Rihorn",
        "name_en": "rhyhorn",
        "type1": "Boden",
        "type2": "Gestein",
        "stats": {
            "hp": 80,
            "attack": 85,
            "defense": 95,
            "specialAttack": 30,
            "specialDefense": 30,
            "speed": 25
        }
    },
    {
        "id": 112,
        "name_de": "Rizeros",
        "name_en": "rhydon",
        "type1": "Boden",
        "type2": "Gestein",
        "stats": {
            "hp": 105,
            "attack": 130,
            "defense": 120,
            "specialAttack": 45,
            "specialDefense": 45,
            "speed": 40
        }
    },
    {
        "id": 113,
        "name_de": "Chaneira",
        "name_en": "chansey",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 250,
            "attack": 5,
            "defense": 5,
            "specialAttack": 35,
            "specialDefense": 105,
            "speed": 50
        }
    },
    {
        "id": 114,
        "name_de": "Tangela",
        "name_en": "tangela",
        "type1": "Pflanze",
        "type2": "",
        "stats": {
            "hp": 65,
            "attack": 55,
            "defense": 115,
            "specialAttack": 100,
            "specialDefense": 40,
            "speed": 60
        }
    },
    {
        "id": 115,
        "name_de": "Kangama",
        "name_en": "kangaskhan",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 105,
            "attack": 95,
            "defense": 80,
            "specialAttack": 40,
            "specialDefense": 80,
            "speed": 90
        }
    },
    {
        "id": 116,
        "name_de": "Seeper",
        "name_en": "horsea",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 30,
            "attack": 40,
            "defense": 70,
            "specialAttack": 70,
            "specialDefense": 25,
            "speed": 60
        }
    },
    {
        "id": 117,
        "name_de": "Seemon",
        "name_en": "seadra",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 55,
            "attack": 65,
            "defense": 95,
            "specialAttack": 95,
            "specialDefense": 45,
            "speed": 85
        }
    },
    {
        "id": 118,
        "name_de": "Goldini",
        "name_en": "goldeen",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 45,
            "attack": 67,
            "defense": 60,
            "specialAttack": 35,
            "specialDefense": 50,
            "speed": 63
        }
    },
    {
        "id": 119,
        "name_de": "Golking",
        "name_en": "seaking",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 80,
            "attack": 92,
            "defense": 65,
            "specialAttack": 65,
            "specialDefense": 80,
            "speed": 68
        }
    },
    {
        "id": 120,
        "name_de": "Sterndu",
        "name_en": "staryu",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 30,
            "attack": 45,
            "defense": 55,
            "specialAttack": 70,
            "specialDefense": 55,
            "speed": 85
        }
    },
    {
        "id": 121,
        "name_de": "Starmie",
        "name_en": "starmie",
        "type1": "Wasser",
        "type2": "Psycho",
        "stats": {
            "hp": 60,
            "attack": 75,
            "defense": 85,
            "specialAttack": 100,
            "specialDefense": 85,
            "speed": 115
        }
    },
    {
        "id": 122,
        "name_de": "Pantimos",
        "name_en": "mr-mime",
        "type1": "Psycho",
        "type2": "Fee",
        "stats": {
            "hp": 40,
            "attack": 45,
            "defense": 65,
            "specialAttack": 100,
            "specialDefense": 120,
            "speed": 90
        }
    },
    {
        "id": 123,
        "name_de": "Sichlor",
        "name_en": "scyther",
        "type1": "Käfer",
        "type2": "Flug",
        "stats": {
            "hp": 70,
            "attack": 110,
            "defense": 80,
            "specialAttack": 55,
            "specialDefense": 80,
            "speed": 105
        }
    },
    {
        "id": 124,
        "name_de": "Rossana",
        "name_en": "jynx",
        "type1": "Eis",
        "type2": "Psycho",
        "stats": {
            "hp": 65,
            "attack": 50,
            "defense": 35,
            "specialAttack": 115,
            "specialDefense": 95,
            "speed": 95
        }
    },
    {
        "id": 125,
        "name_de": "Elektek",
        "name_en": "electabuzz",
        "type1": "Elektro",
        "type2": "",
        "stats": {
            "hp": 65,
            "attack": 83,
            "defense": 57,
            "specialAttack": 95,
            "specialDefense": 85,
            "speed": 105
        }
    },
    {
        "id": 126,
        "name_de": "Magmar",
        "name_en": "magmar",
        "type1": "Feuer",
        "type2": "",
        "stats": {
            "hp": 65,
            "attack": 95,
            "defense": 57,
            "specialAttack": 100,
            "specialDefense": 85,
            "speed": 93
        }
    },
    {
        "id": 127,
        "name_de": "Pinsir",
        "name_en": "pinsir",
        "type1": "Käfer",
        "type2": "",
        "stats": {
            "hp": 65,
            "attack": 125,
            "defense": 100,
            "specialAttack": 55,
            "specialDefense": 70,
            "speed": 85
        }
    },
    {
        "id": 128,
        "name_de": "Tauros",
        "name_en": "tauros",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 75,
            "attack": 100,
            "defense": 95,
            "specialAttack": 40,
            "specialDefense": 70,
            "speed": 110
        }
    },
    {
        "id": 129,
        "name_de": "Karpador",
        "name_en": "magikarp",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 20,
            "attack": 10,
            "defense": 55,
            "specialAttack": 15,
            "specialDefense": 20,
            "speed": 80
        }
    },
    {
        "id": 130,
        "name_de": "Garados",
        "name_en": "gyarados",
        "type1": "Wasser",
        "type2": "Flug",
        "stats": {
            "hp": 95,
            "attack": 125,
            "defense": 79,
            "specialAttack": 60,
            "specialDefense": 100,
            "speed": 81
        }
    },
    {
        "id": 131,
        "name_de": "Lapras",
        "name_en": "lapras",
        "type1": "Wasser",
        "type2": "Eis",
        "stats": {
            "hp": 130,
            "attack": 85,
            "defense": 80,
            "specialAttack": 85,
            "specialDefense": 95,
            "speed": 60
        }
    },
    {
        "id": 132,
        "name_de": "Ditto",
        "name_en": "ditto",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 48,
            "attack": 48,
            "defense": 48,
            "specialAttack": 48,
            "specialDefense": 48,
            "speed": 48
        }
    },
    {
        "id": 133,
        "name_de": "Evoli",
        "name_en": "eevee",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 55,
            "attack": 55,
            "defense": 50,
            "specialAttack": 45,
            "specialDefense": 65,
            "speed": 55
        }
    },
    {
        "id": 134,
        "name_de": "Aquana",
        "name_en": "vaporeon",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 130,
            "attack": 65,
            "defense": 60,
            "specialAttack": 110,
            "specialDefense": 95,
            "speed": 65
        }
    },
    {
        "id": 135,
        "name_de": "Blitza",
        "name_en": "jolteon",
        "type1": "Elektro",
        "type2": "",
        "stats": {
            "hp": 65,
            "attack": 65,
            "defense": 60,
            "specialAttack": 110,
            "specialDefense": 95,
            "speed": 130
        }
    },
    {
        "id": 136,
        "name_de": "Flamara",
        "name_en": "flareon",
        "type1": "Feuer",
        "type2": "",
        "stats": {
            "hp": 65,
            "attack": 130,
            "defense": 60,
            "specialAttack": 95,
            "specialDefense": 110,
            "speed": 65
        }
    },
    {
        "id": 137,
        "name_de": "Porygon",
        "name_en": "porygon",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 65,
            "attack": 60,
            "defense": 70,
            "specialAttack": 85,
            "specialDefense": 75,
            "speed": 40
        }
    },
    {
        "id": 138,
        "name_de": "Amonitas",
        "name_en": "omanyte",
        "type1": "Gestein",
        "type2": "Wasser",
        "stats": {
            "hp": 35,
            "attack": 40,
            "defense": 100,
            "specialAttack": 90,
            "specialDefense": 55,
            "speed": 35
        }
    },
    {
        "id": 139,
        "name_de": "Amoroso",
        "name_en": "omastar",
        "type1": "Gestein",
        "type2": "Wasser",
        "stats": {
            "hp": 70,
            "attack": 60,
            "defense": 125,
            "specialAttack": 115,
            "specialDefense": 70,
            "speed": 55
        }
    },
    {
        "id": 140,
        "name_de": "Kabuto",
        "name_en": "kabuto",
        "type1": "Gestein",
        "type2": "Wasser",
        "stats": {
            "hp": 30,
            "attack": 80,
            "defense": 90,
            "specialAttack": 55,
            "specialDefense": 45,
            "speed": 55
        }
    },
    {
        "id": 141,
        "name_de": "Kabutops",
        "name_en": "kabutops",
        "type1": "Gestein",
        "type2": "Wasser",
        "stats": {
            "hp": 60,
            "attack": 115,
            "defense": 105,
            "specialAttack": 65,
            "specialDefense": 70,
            "speed": 80
        }
    },
    {
        "id": 142,
        "name_de": "Aerodactyl",
        "name_en": "aerodactyl",
        "type1": "Gestein",
        "type2": "Flug",
        "stats": {
            "hp": 80,
            "attack": 105,
            "defense": 65,
            "specialAttack": 60,
            "specialDefense": 75,
            "speed": 130
        }
    },
    {
        "id": 143,
        "name_de": "Relaxo",
        "name_en": "snorlax",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 160,
            "attack": 110,
            "defense": 65,
            "specialAttack": 65,
            "specialDefense": 110,
            "speed": 30
        }
    },
    {
        "id": 144,
        "name_de": "Arktos",
        "name_en": "articuno",
        "type1": "Eis",
        "type2": "Flug",
        "stats": {
            "hp": 90,
            "attack": 85,
            "defense": 100,
            "specialAttack": 95,
            "specialDefense": 125,
            "speed": 85
        }
    },
    {
        "id": 145,
        "name_de": "Zapdos",
        "name_en": "zapdos",
        "type1": "Elektro",
        "type2": "Flug",
        "stats": {
            "hp": 90,
            "attack": 90,
            "defense": 85,
            "specialAttack": 125,
            "specialDefense": 90,
            "speed": 100
        }
    },
    {
        "id": 146,
        "name_de": "Lavados",
        "name_en": "moltres",
        "type1": "Feuer",
        "type2": "Flug",
        "stats": {
            "hp": 90,
            "attack": 100,
            "defense": 90,
            "specialAttack": 125,
            "specialDefense": 85,
            "speed": 90
        }
    },
    {
        "id": 147,
        "name_de": "Dratini",
        "name_en": "dratini",
        "type1": "Drache",
        "type2": "",
        "stats": {
            "hp": 41,
            "attack": 64,
            "defense": 45,
            "specialAttack": 50,
            "specialDefense": 50,
            "speed": 50
        }
    },
    {
        "id": 148,
        "name_de": "Dragonir",
        "name_en": "dragonair",
        "type1": "Drache",
        "type2": "",
        "stats": {
            "hp": 61,
            "attack": 84,
            "defense": 65,
            "specialAttack": 70,
            "specialDefense": 70,
            "speed": 70
        }
    },
    {
        "id": 149,
        "name_de": "Dragoran",
        "name_en": "dragonite",
        "type1": "Drache",
        "type2": "Flug",
        "stats": {
            "hp": 91,
            "attack": 134,
            "defense": 95,
            "specialAttack": 100,
            "specialDefense": 100,
            "speed": 80
        }
    },
    {
        "id": 150,
        "name_de": "Mewtu",
        "name_en": "mewtwo",
        "type1": "Psycho",
        "type2": "",
        "stats": {
            "hp": 106,
            "attack": 110,
            "defense": 90,
            "specialAttack": 154,
            "specialDefense": 90,
            "speed": 130
        }
    },
    {
        "id": 151,
        "name_de": "Mew",
        "name_en": "mew",
        "type1": "Psycho",
        "type2": "",
        "stats": {
            "hp": 100,
            "attack": 100,
            "defense": 100,
            "specialAttack": 100,
            "specialDefense": 100,
            "speed": 100
        }
    },
    {
        "id": 152,
        "name_de": "Endivie",
        "name_en": "chikorita",
        "type1": "Pflanze",
        "type2": "",
        "stats": {
            "hp": 45,
            "attack": 49,
            "defense": 65,
            "specialAttack": 49,
            "specialDefense": 65,
            "speed": 45
        }
    },
    {
        "id": 153,
        "name_de": "Lorblatt",
        "name_en": "bayleef",
        "type1": "Pflanze",
        "type2": "",
        "stats": {
            "hp": 60,
            "attack": 62,
            "defense": 80,
            "specialAttack": 63,
            "specialDefense": 80,
            "speed": 60
        }
    },
    {
        "id": 154,
        "name_de": "Meganie",
        "name_en": "meganium",
        "type1": "Pflanze",
        "type2": "",
        "stats": {
            "hp": 80,
            "attack": 82,
            "defense": 100,
            "specialAttack": 83,
            "specialDefense": 100,
            "speed": 80
        }
    },
    {
        "id": 155,
        "name_de": "Feurigel",
        "name_en": "cyndaquil",
        "type1": "Feuer",
        "type2": "",
        "stats": {
            "hp": 39,
            "attack": 52,
            "defense": 43,
            "specialAttack": 60,
            "specialDefense": 50,
            "speed": 65
        }
    },
    {
        "id": 156,
        "name_de": "Igelavar",
        "name_en": "quilava",
        "type1": "Feuer",
        "type2": "",
        "stats": {
            "hp": 58,
            "attack": 64,
            "defense": 58,
            "specialAttack": 80,
            "specialDefense": 65,
            "speed": 80
        }
    },
    {
        "id": 157,
        "name_de": "Tornupto",
        "name_en": "typhlosion",
        "type1": "Feuer",
        "type2": "",
        "stats": {
            "hp": 78,
            "attack": 84,
            "defense": 78,
            "specialAttack": 109,
            "specialDefense": 85,
            "speed": 100
        }
    },
    {
        "id": 158,
        "name_de": "Karnimani",
        "name_en": "totodile",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 50,
            "attack": 65,
            "defense": 64,
            "specialAttack": 44,
            "specialDefense": 48,
            "speed": 43
        }
    },
    {
        "id": 159,
        "name_de": "Tyracroc",
        "name_en": "croconaw",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 65,
            "attack": 80,
            "defense": 80,
            "specialAttack": 59,
            "specialDefense": 63,
            "speed": 58
        }
    },
    {
        "id": 160,
        "name_de": "Impergator",
        "name_en": "feraligatr",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 85,
            "attack": 105,
            "defense": 100,
            "specialAttack": 79,
            "specialDefense": 83,
            "speed": 78
        }
    },
    {
        "id": 161,
        "name_de": "Wiesor",
        "name_en": "sentret",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 35,
            "attack": 46,
            "defense": 34,
            "specialAttack": 35,
            "specialDefense": 45,
            "speed": 20
        }
    },
    {
        "id": 162,
        "name_de": "Wiesenior",
        "name_en": "furret",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 85,
            "attack": 76,
            "defense": 64,
            "specialAttack": 45,
            "specialDefense": 55,
            "speed": 90
        }
    },
    {
        "id": 163,
        "name_de": "Hoothoot",
        "name_en": "hoothoot",
        "type1": "Normal",
        "type2": "Flug",
        "stats": {
            "hp": 60,
            "attack": 30,
            "defense": 30,
            "specialAttack": 36,
            "specialDefense": 56,
            "speed": 50
        }
    },
    {
        "id": 164,
        "name_de": "Noctuh",
        "name_en": "noctowl",
        "type1": "Normal",
        "type2": "Flug",
        "stats": {
            "hp": 100,
            "attack": 50,
            "defense": 50,
            "specialAttack": 86,
            "specialDefense": 96,
            "speed": 70
        }
    },
    {
        "id": 165,
        "name_de": "Ledyba",
        "name_en": "ledyba",
        "type1": "Käfer",
        "type2": "Flug",
        "stats": {
            "hp": 40,
            "attack": 20,
            "defense": 30,
            "specialAttack": 40,
            "specialDefense": 80,
            "speed": 55
        }
    },
    {
        "id": 166,
        "name_de": "Ledian",
        "name_en": "ledian",
        "type1": "Käfer",
        "type2": "Flug",
        "stats": {
            "hp": 55,
            "attack": 35,
            "defense": 50,
            "specialAttack": 55,
            "specialDefense": 110,
            "speed": 85
        }
    },
    {
        "id": 167,
        "name_de": "Webarak",
        "name_en": "spinarak",
        "type1": "Käfer",
        "type2": "Gift",
        "stats": {
            "hp": 40,
            "attack": 60,
            "defense": 40,
            "specialAttack": 40,
            "specialDefense": 40,
            "speed": 30
        }
    },
    {
        "id": 168,
        "name_de": "Ariados",
        "name_en": "ariados",
        "type1": "Käfer",
        "type2": "Gift",
        "stats": {
            "hp": 70,
            "attack": 90,
            "defense": 70,
            "specialAttack": 60,
            "specialDefense": 70,
            "speed": 40
        }
    },
    {
        "id": 169,
        "name_de": "Iksbat",
        "name_en": "crobat",
        "type1": "Gift",
        "type2": "Flug",
        "stats": {
            "hp": 85,
            "attack": 90,
            "defense": 80,
            "specialAttack": 70,
            "specialDefense": 80,
            "speed": 130
        }
    },
    {
        "id": 170,
        "name_de": "Lampi",
        "name_en": "chinchou",
        "type1": "Wasser",
        "type2": "Elektro",
        "stats": {
            "hp": 75,
            "attack": 38,
            "defense": 38,
            "specialAttack": 56,
            "specialDefense": 56,
            "speed": 67
        }
    },
    {
        "id": 171,
        "name_de": "Lanturn",
        "name_en": "lanturn",
        "type1": "Wasser",
        "type2": "Elektro",
        "stats": {
            "hp": 125,
            "attack": 58,
            "defense": 58,
            "specialAttack": 76,
            "specialDefense": 76,
            "speed": 67
        }
    },
    {
        "id": 172,
        "name_de": "Pichu",
        "name_en": "pichu",
        "type1": "Elektro",
        "type2": "",
        "stats": {
            "hp": 20,
            "attack": 40,
            "defense": 15,
            "specialAttack": 35,
            "specialDefense": 35,
            "speed": 60
        }
    },
    {
        "id": 173,
        "name_de": "Pii",
        "name_en": "cleffa",
        "type1": "Fee",
        "type2": "",
        "stats": {
            "hp": 50,
            "attack": 25,
            "defense": 28,
            "specialAttack": 45,
            "specialDefense": 55,
            "speed": 15
        }
    },
    {
        "id": 174,
        "name_de": "Fluffeluff",
        "name_en": "igglybuff",
        "type1": "Normal",
        "type2": "Fee",
        "stats": {
            "hp": 90,
            "attack": 30,
            "defense": 15,
            "specialAttack": 40,
            "specialDefense": 20,
            "speed": 15
        }
    },
    {
        "id": 175,
        "name_de": "Togepi",
        "name_en": "togepi",
        "type1": "Fee",
        "type2": "",
        "stats": {
            "hp": 35,
            "attack": 20,
            "defense": 65,
            "specialAttack": 40,
            "specialDefense": 65,
            "speed": 20
        }
    },
    {
        "id": 176,
        "name_de": "Togetic",
        "name_en": "togetic",
        "type1": "Fee",
        "type2": "Flug",
        "stats": {
            "hp": 55,
            "attack": 40,
            "defense": 85,
            "specialAttack": 80,
            "specialDefense": 105,
            "speed": 40
        }
    },
    {
        "id": 177,
        "name_de": "Natu",
        "name_en": "natu",
        "type1": "Psycho",
        "type2": "Flug",
        "stats": {
            "hp": 40,
            "attack": 50,
            "defense": 45,
            "specialAttack": 70,
            "specialDefense": 45,
            "speed": 70
        }
    },
    {
        "id": 178,
        "name_de": "Xatu",
        "name_en": "xatu",
        "type1": "Psycho",
        "type2": "Flug",
        "stats": {
            "hp": 65,
            "attack": 75,
            "defense": 70,
            "specialAttack": 95,
            "specialDefense": 70,
            "speed": 95
        }
    },
    {
        "id": 179,
        "name_de": "Voltilamm",
        "name_en": "mareep",
        "type1": "Elektro",
        "type2": "",
        "stats": {
            "hp": 55,
            "attack": 40,
            "defense": 40,
            "specialAttack": 65,
            "specialDefense": 45,
            "speed": 35
        }
    },
    {
        "id": 180,
        "name_de": "Waaty",
        "name_en": "flaaffy",
        "type1": "Elektro",
        "type2": "",
        "stats": {
            "hp": 70,
            "attack": 55,
            "defense": 55,
            "specialAttack": 80,
            "specialDefense": 60,
            "speed": 45
        }
    },
    {
        "id": 181,
        "name_de": "Ampharos",
        "name_en": "ampharos",
        "type1": "Elektro",
        "type2": "",
        "stats": {
            "hp": 90,
            "attack": 75,
            "defense": 85,
            "specialAttack": 115,
            "specialDefense": 90,
            "speed": 55
        }
    },
    {
        "id": 182,
        "name_de": "Blubella",
        "name_en": "bellossom",
        "type1": "Pflanze",
        "type2": "",
        "stats": {
            "hp": 75,
            "attack": 80,
            "defense": 95,
            "specialAttack": 90,
            "specialDefense": 100,
            "speed": 50
        }
    },
    {
        "id": 183,
        "name_de": "Marill",
        "name_en": "marill",
        "type1": "Wasser",
        "type2": "Fee",
        "stats": {
            "hp": 70,
            "attack": 20,
            "defense": 50,
            "specialAttack": 20,
            "specialDefense": 50,
            "speed": 40
        }
    },
    {
        "id": 184,
        "name_de": "Azumarill",
        "name_en": "azumarill",
        "type1": "Wasser",
        "type2": "Fee",
        "stats": {
            "hp": 100,
            "attack": 50,
            "defense": 80,
            "specialAttack": 60,
            "specialDefense": 80,
            "speed": 50
        }
    },
    {
        "id": 185,
        "name_de": "Mogelbaum",
        "name_en": "sudowoodo",
        "type1": "Gestein",
        "type2": "",
        "stats": {
            "hp": 70,
            "attack": 100,
            "defense": 115,
            "specialAttack": 30,
            "specialDefense": 65,
            "speed": 30
        }
    },
    {
        "id": 186,
        "name_de": "Quaxo",
        "name_en": "politoed",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 90,
            "attack": 75,
            "defense": 75,
            "specialAttack": 90,
            "specialDefense": 100,
            "speed": 70
        }
    },
    {
        "id": 187,
        "name_de": "Hoppspross",
        "name_en": "hoppip",
        "type1": "Pflanze",
        "type2": "Flug",
        "stats": {
            "hp": 35,
            "attack": 35,
            "defense": 40,
            "specialAttack": 35,
            "specialDefense": 55,
            "speed": 50
        }
    },
    {
        "id": 188,
        "name_de": "Hubelupf",
        "name_en": "skiploom",
        "type1": "Pflanze",
        "type2": "Flug",
        "stats": {
            "hp": 55,
            "attack": 45,
            "defense": 50,
            "specialAttack": 45,
            "specialDefense": 65,
            "speed": 80
        }
    },
    {
        "id": 189,
        "name_de": "Papungha",
        "name_en": "jumpluff",
        "type1": "Pflanze",
        "type2": "Flug",
        "stats": {
            "hp": 75,
            "attack": 55,
            "defense": 70,
            "specialAttack": 55,
            "specialDefense": 95,
            "speed": 110
        }
    },
    {
        "id": 190,
        "name_de": "Griffel",
        "name_en": "aipom",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 55,
            "attack": 70,
            "defense": 55,
            "specialAttack": 40,
            "specialDefense": 55,
            "speed": 85
        }
    },
    {
        "id": 191,
        "name_de": "Sonnkern",
        "name_en": "sunkern",
        "type1": "Pflanze",
        "type2": "",
        "stats": {
            "hp": 30,
            "attack": 30,
            "defense": 30,
            "specialAttack": 30,
            "specialDefense": 30,
            "speed": 30
        }
    },
    {
        "id": 192,
        "name_de": "Sonnflora",
        "name_en": "sunflora",
        "type1": "Pflanze",
        "type2": "",
        "stats": {
            "hp": 75,
            "attack": 75,
            "defense": 55,
            "specialAttack": 105,
            "specialDefense": 85,
            "speed": 30
        }
    },
    {
        "id": 193,
        "name_de": "Yanma",
        "name_en": "yanma",
        "type1": "Käfer",
        "type2": "Flug",
        "stats": {
            "hp": 65,
            "attack": 65,
            "defense": 45,
            "specialAttack": 75,
            "specialDefense": 45,
            "speed": 95
        }
    },
    {
        "id": 194,
        "name_de": "Felino",
        "name_en": "wooper",
        "type1": "Wasser",
        "type2": "Boden",
        "stats": {
            "hp": 55,
            "attack": 45,
            "defense": 45,
            "specialAttack": 25,
            "specialDefense": 25,
            "speed": 15
        }
    },
    {
        "id": 195,
        "name_de": "Morlord",
        "name_en": "quagsire",
        "type1": "Wasser",
        "type2": "Boden",
        "stats": {
            "hp": 95,
            "attack": 85,
            "defense": 85,
            "specialAttack": 65,
            "specialDefense": 65,
            "speed": 35
        }
    },
    {
        "id": 196,
        "name_de": "Psiana",
        "name_en": "espeon",
        "type1": "Psycho",
        "type2": "",
        "stats": {
            "hp": 65,
            "attack": 65,
            "defense": 60,
            "specialAttack": 130,
            "specialDefense": 95,
            "speed": 110
        }
    },
    {
        "id": 197,
        "name_de": "Nachtara",
        "name_en": "umbreon",
        "type1": "Unlicht",
        "type2": "",
        "stats": {
            "hp": 95,
            "attack": 65,
            "defense": 110,
            "specialAttack": 60,
            "specialDefense": 130,
            "speed": 65
        }
    },
    {
        "id": 198,
        "name_de": "Kramurx",
        "name_en": "murkrow",
        "type1": "Unlicht",
        "type2": "Flug",
        "stats": {
            "hp": 60,
            "attack": 85,
            "defense": 42,
            "specialAttack": 85,
            "specialDefense": 42,
            "speed": 91
        }
    },
    {
        "id": 199,
        "name_de": "Laschoking",
        "name_en": "slowking",
        "type1": "Wasser",
        "type2": "Psycho",
        "stats": {
            "hp": 95,
            "attack": 75,
            "defense": 80,
            "specialAttack": 100,
            "specialDefense": 110,
            "speed": 30
        }
    },
    {
        "id": 200,
        "name_de": "Traunfugil",
        "name_en": "misdreavus",
        "type1": "Geist",
        "type2": "",
        "stats": {
            "hp": 60,
            "attack": 60,
            "defense": 60,
            "specialAttack": 85,
            "specialDefense": 85,
            "speed": 85
        }
    },
    {
        "id": 201,
        "name_de": "Icognito",
        "name_en": "unown",
        "type1": "Psycho",
        "type2": "",
        "stats": {
            "hp": 48,
            "attack": 72,
            "defense": 48,
            "specialAttack": 72,
            "specialDefense": 48,
            "speed": 48
        }
    },
    {
        "id": 202,
        "name_de": "Woingenau",
        "name_en": "wobbuffet",
        "type1": "Psycho",
        "type2": "",
        "stats": {
            "hp": 190,
            "attack": 33,
            "defense": 58,
            "specialAttack": 33,
            "specialDefense": 58,
            "speed": 33
        }
    },
    {
        "id": 203,
        "name_de": "Girafarig",
        "name_en": "girafarig",
        "type1": "Normal",
        "type2": "Psycho",
        "stats": {
            "hp": 70,
            "attack": 80,
            "defense": 65,
            "specialAttack": 90,
            "specialDefense": 65,
            "speed": 85
        }
    },
    {
        "id": 204,
        "name_de": "Tannza",
        "name_en": "pineco",
        "type1": "Käfer",
        "type2": "",
        "stats": {
            "hp": 50,
            "attack": 65,
            "defense": 90,
            "specialAttack": 35,
            "specialDefense": 35,
            "speed": 15
        }
    },
    {
        "id": 205,
        "name_de": "Forstellka",
        "name_en": "forretress",
        "type1": "Käfer",
        "type2": "Stahl",
        "stats": {
            "hp": 75,
            "attack": 90,
            "defense": 140,
            "specialAttack": 60,
            "specialDefense": 60,
            "speed": 40
        }
    },
    {
        "id": 206,
        "name_de": "Dummisel",
        "name_en": "dunsparce",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 100,
            "attack": 70,
            "defense": 70,
            "specialAttack": 65,
            "specialDefense": 65,
            "speed": 45
        }
    },
    {
        "id": 207,
        "name_de": "Skorgla",
        "name_en": "gligar",
        "type1": "Boden",
        "type2": "Flug",
        "stats": {
            "hp": 65,
            "attack": 75,
            "defense": 105,
            "specialAttack": 35,
            "specialDefense": 65,
            "speed": 85
        }
    },
    {
        "id": 208,
        "name_de": "Stahlos",
        "name_en": "steelix",
        "type1": "Stahl",
        "type2": "Boden",
        "stats": {
            "hp": 75,
            "attack": 85,
            "defense": 200,
            "specialAttack": 55,
            "specialDefense": 65,
            "speed": 30
        }
    },
    {
        "id": 209,
        "name_de": "Snubbull",
        "name_en": "snubbull",
        "type1": "Fee",
        "type2": "",
        "stats": {
            "hp": 60,
            "attack": 80,
            "defense": 50,
            "specialAttack": 40,
            "specialDefense": 40,
            "speed": 30
        }
    },
    {
        "id": 210,
        "name_de": "Granbull",
        "name_en": "granbull",
        "type1": "Fee",
        "type2": "",
        "stats": {
            "hp": 90,
            "attack": 120,
            "defense": 75,
            "specialAttack": 60,
            "specialDefense": 60,
            "speed": 45
        }
    },
    {
        "id": 211,
        "name_de": "Baldorfish",
        "name_en": "qwilfish",
        "type1": "Wasser",
        "type2": "Gift",
        "stats": {
            "hp": 65,
            "attack": 95,
            "defense": 85,
            "specialAttack": 55,
            "specialDefense": 55,
            "speed": 85
        }
    },
    {
        "id": 212,
        "name_de": "Scherox",
        "name_en": "scizor",
        "type1": "Käfer",
        "type2": "Stahl",
        "stats": {
            "hp": 70,
            "attack": 130,
            "defense": 100,
            "specialAttack": 55,
            "specialDefense": 80,
            "speed": 65
        }
    },
    {
        "id": 213,
        "name_de": "Pottrott",
        "name_en": "shuckle",
        "type1": "Käfer",
        "type2": "Gestein",
        "stats": {
            "hp": 20,
            "attack": 10,
            "defense": 230,
            "specialAttack": 10,
            "specialDefense": 230,
            "speed": 5
        }
    },
    {
        "id": 214,
        "name_de": "Skaraborn",
        "name_en": "heracross",
        "type1": "Käfer",
        "type2": "Kampf",
        "stats": {
            "hp": 80,
            "attack": 125,
            "defense": 75,
            "specialAttack": 40,
            "specialDefense": 95,
            "speed": 85
        }
    },
    {
        "id": 215,
        "name_de": "Sniebel",
        "name_en": "sneasel",
        "type1": "Unlicht",
        "type2": "Eis",
        "stats": {
            "hp": 55,
            "attack": 95,
            "defense": 55,
            "specialAttack": 35,
            "specialDefense": 75,
            "speed": 115
        }
    },
    {
        "id": 216,
        "name_de": "Teddiursa",
        "name_en": "teddiursa",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 60,
            "attack": 80,
            "defense": 50,
            "specialAttack": 50,
            "specialDefense": 50,
            "speed": 40
        }
    },
    {
        "id": 217,
        "name_de": "Ursaring",
        "name_en": "ursaring",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 90,
            "attack": 130,
            "defense": 75,
            "specialAttack": 75,
            "specialDefense": 75,
            "speed": 55
        }
    },
    {
        "id": 218,
        "name_de": "Schneckmag",
        "name_en": "slugma",
        "type1": "Feuer",
        "type2": "",
        "stats": {
            "hp": 40,
            "attack": 40,
            "defense": 40,
            "specialAttack": 70,
            "specialDefense": 40,
            "speed": 20
        }
    },
    {
        "id": 219,
        "name_de": "Magcargo",
        "name_en": "magcargo",
        "type1": "Feuer",
        "type2": "Gestein",
        "stats": {
            "hp": 60,
            "attack": 50,
            "defense": 120,
            "specialAttack": 90,
            "specialDefense": 80,
            "speed": 30
        }
    },
    {
        "id": 220,
        "name_de": "Quiekel",
        "name_en": "swinub",
        "type1": "Eis",
        "type2": "Boden",
        "stats": {
            "hp": 50,
            "attack": 50,
            "defense": 40,
            "specialAttack": 30,
            "specialDefense": 30,
            "speed": 50
        }
    },
    {
        "id": 221,
        "name_de": "Keifel",
        "name_en": "piloswine",
        "type1": "Eis",
        "type2": "Boden",
        "stats": {
            "hp": 100,
            "attack": 100,
            "defense": 80,
            "specialAttack": 60,
            "specialDefense": 60,
            "speed": 50
        }
    },
    {
        "id": 222,
        "name_de": "Corasonn",
        "name_en": "corsola",
        "type1": "Wasser",
        "type2": "Gestein",
        "stats": {
            "hp": 65,
            "attack": 55,
            "defense": 95,
            "specialAttack": 65,
            "specialDefense": 95,
            "speed": 35
        }
    },
    {
        "id": 223,
        "name_de": "Remoraid",
        "name_en": "remoraid",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 35,
            "attack": 65,
            "defense": 35,
            "specialAttack": 65,
            "specialDefense": 35,
            "speed": 65
        }
    },
    {
        "id": 224,
        "name_de": "Octillery",
        "name_en": "octillery",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 75,
            "attack": 105,
            "defense": 75,
            "specialAttack": 105,
            "specialDefense": 75,
            "speed": 45
        }
    },
    {
        "id": 225,
        "name_de": "Botogel",
        "name_en": "delibird",
        "type1": "Eis",
        "type2": "Flug",
        "stats": {
            "hp": 45,
            "attack": 55,
            "defense": 45,
            "specialAttack": 65,
            "specialDefense": 45,
            "speed": 75
        }
    },
    {
        "id": 226,
        "name_de": "Mantax",
        "name_en": "mantine",
        "type1": "Wasser",
        "type2": "Flug",
        "stats": {
            "hp": 85,
            "attack": 40,
            "defense": 70,
            "specialAttack": 80,
            "specialDefense": 140,
            "speed": 70
        }
    },
    {
        "id": 227,
        "name_de": "Panzaeron",
        "name_en": "skarmory",
        "type1": "Stahl",
        "type2": "Flug",
        "stats": {
            "hp": 65,
            "attack": 80,
            "defense": 140,
            "specialAttack": 40,
            "specialDefense": 70,
            "speed": 70
        }
    },
    {
        "id": 228,
        "name_de": "Hunduster",
        "name_en": "houndour",
        "type1": "Unlicht",
        "type2": "Feuer",
        "stats": {
            "hp": 45,
            "attack": 60,
            "defense": 30,
            "specialAttack": 80,
            "specialDefense": 50,
            "speed": 65
        }
    },
    {
        "id": 229,
        "name_de": "Hundemon",
        "name_en": "houndoom",
        "type1": "Unlicht",
        "type2": "Feuer",
        "stats": {
            "hp": 75,
            "attack": 90,
            "defense": 50,
            "specialAttack": 110,
            "specialDefense": 80,
            "speed": 95
        }
    },
    {
        "id": 230,
        "name_de": "Seedraking",
        "name_en": "kingdra",
        "type1": "Wasser",
        "type2": "Drache",
        "stats": {
            "hp": 75,
            "attack": 95,
            "defense": 95,
            "specialAttack": 95,
            "specialDefense": 95,
            "speed": 85
        }
    },
    {
        "id": 231,
        "name_de": "Phanpy",
        "name_en": "phanpy",
        "type1": "Boden",
        "type2": "",
        "stats": {
            "hp": 90,
            "attack": 60,
            "defense": 60,
            "specialAttack": 40,
            "specialDefense": 40,
            "speed": 40
        }
    },
    {
        "id": 232,
        "name_de": "Donphan",
        "name_en": "donphan",
        "type1": "Boden",
        "type2": "",
        "stats": {
            "hp": 90,
            "attack": 120,
            "defense": 120,
            "specialAttack": 60,
            "specialDefense": 60,
            "speed": 50
        }
    },
    {
        "id": 233,
        "name_de": "Porygon2",
        "name_en": "porygon2",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 85,
            "attack": 80,
            "defense": 90,
            "specialAttack": 105,
            "specialDefense": 95,
            "speed": 60
        }
    },
    {
        "id": 234,
        "name_de": "Damhirplex",
        "name_en": "stantler",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 73,
            "attack": 95,
            "defense": 62,
            "specialAttack": 85,
            "specialDefense": 65,
            "speed": 85
        }
    },
    {
        "id": 235,
        "name_de": "Farbeagle",
        "name_en": "smeargle",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 55,
            "attack": 20,
            "defense": 35,
            "specialAttack": 20,
            "specialDefense": 45,
            "speed": 75
        }
    },
    {
        "id": 236,
        "name_de": "Rabauz",
        "name_en": "tyrogue",
        "type1": "Kampf",
        "type2": "",
        "stats": {
            "hp": 35,
            "attack": 35,
            "defense": 35,
            "specialAttack": 35,
            "specialDefense": 35,
            "speed": 35
        }
    },
    {
        "id": 237,
        "name_de": "Kapoera",
        "name_en": "hitmontop",
        "type1": "Kampf",
        "type2": "",
        "stats": {
            "hp": 50,
            "attack": 95,
            "defense": 95,
            "specialAttack": 35,
            "specialDefense": 110,
            "speed": 70
        }
    },
    {
        "id": 238,
        "name_de": "Kussilla",
        "name_en": "smoochum",
        "type1": "Eis",
        "type2": "Psycho",
        "stats": {
            "hp": 45,
            "attack": 30,
            "defense": 15,
            "specialAttack": 85,
            "specialDefense": 65,
            "speed": 65
        }
    },
    {
        "id": 239,
        "name_de": "Elekid",
        "name_en": "elekid",
        "type1": "Elektro",
        "type2": "",
        "stats": {
            "hp": 45,
            "attack": 63,
            "defense": 37,
            "specialAttack": 65,
            "specialDefense": 55,
            "speed": 95
        }
    },
    {
        "id": 240,
        "name_de": "Magby",
        "name_en": "magby",
        "type1": "Feuer",
        "type2": "",
        "stats": {
            "hp": 45,
            "attack": 75,
            "defense": 37,
            "specialAttack": 70,
            "specialDefense": 55,
            "speed": 83
        }
    },
    {
        "id": 241,
        "name_de": "Miltank",
        "name_en": "miltank",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 95,
            "attack": 80,
            "defense": 105,
            "specialAttack": 40,
            "specialDefense": 70,
            "speed": 100
        }
    },
    {
        "id": 242,
        "name_de": "Heiteira",
        "name_en": "blissey",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 255,
            "attack": 10,
            "defense": 10,
            "specialAttack": 75,
            "specialDefense": 135,
            "speed": 55
        }
    },
    {
        "id": 243,
        "name_de": "Raikou",
        "name_en": "raikou",
        "type1": "Elektro",
        "type2": "",
        "stats": {
            "hp": 90,
            "attack": 85,
            "defense": 75,
            "specialAttack": 115,
            "specialDefense": 100,
            "speed": 115
        }
    },
    {
        "id": 244,
        "name_de": "Entei",
        "name_en": "entei",
        "type1": "Feuer",
        "type2": "",
        "stats": {
            "hp": 115,
            "attack": 115,
            "defense": 85,
            "specialAttack": 90,
            "specialDefense": 75,
            "speed": 100
        }
    },
    {
        "id": 245,
        "name_de": "Suicune",
        "name_en": "suicune",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 100,
            "attack": 75,
            "defense": 115,
            "specialAttack": 90,
            "specialDefense": 115,
            "speed": 85
        }
    },
    {
        "id": 246,
        "name_de": "Larvitar",
        "name_en": "larvitar",
        "type1": "Gestein",
        "type2": "Boden",
        "stats": {
            "hp": 50,
            "attack": 64,
            "defense": 50,
            "specialAttack": 45,
            "specialDefense": 50,
            "speed": 41
        }
    },
    {
        "id": 247,
        "name_de": "Pupitar",
        "name_en": "pupitar",
        "type1": "Gestein",
        "type2": "Boden",
        "stats": {
            "hp": 70,
            "attack": 84,
            "defense": 70,
            "specialAttack": 65,
            "specialDefense": 70,
            "speed": 51
        }
    },
    {
        "id": 248,
        "name_de": "Despotar",
        "name_en": "tyranitar",
        "type1": "Gestein",
        "type2": "Unlicht",
        "stats": {
            "hp": 100,
            "attack": 134,
            "defense": 110,
            "specialAttack": 95,
            "specialDefense": 100,
            "speed": 61
        }
    },
    {
        "id": 249,
        "name_de": "Lugia",
        "name_en": "lugia",
        "type1": "Psycho",
        "type2": "Flug",
        "stats": {
            "hp": 106,
            "attack": 90,
            "defense": 130,
            "specialAttack": 90,
            "specialDefense": 154,
            "speed": 110
        }
    },
    {
        "id": 250,
        "name_de": "Ho-Oh",
        "name_en": "ho-oh",
        "type1": "Feuer",
        "type2": "Flug",
        "stats": {
            "hp": 106,
            "attack": 130,
            "defense": 90,
            "specialAttack": 110,
            "specialDefense": 154,
            "speed": 90
        }
    },
    {
        "id": 251,
        "name_de": "Celebi",
        "name_en": "celebi",
        "type1": "Psycho",
        "type2": "Pflanze",
        "stats": {
            "hp": 100,
            "attack": 100,
            "defense": 100,
            "specialAttack": 100,
            "specialDefense": 100,
            "speed": 100
        }
    },
    {
        "id": 252,
        "name_de": "Geckarbor",
        "name_en": "treecko",
        "type1": "Pflanze",
        "type2": "",
        "stats": {
            "hp": 40,
            "attack": 45,
            "defense": 35,
            "specialAttack": 65,
            "specialDefense": 55,
            "speed": 70
        }
    },
    {
        "id": 253,
        "name_de": "Reptain",
        "name_en": "grovyle",
        "type1": "Pflanze",
        "type2": "",
        "stats": {
            "hp": 50,
            "attack": 65,
            "defense": 45,
            "specialAttack": 85,
            "specialDefense": 65,
            "speed": 95
        }
    },
    {
        "id": 254,
        "name_de": "Gewaldro",
        "name_en": "sceptile",
        "type1": "Pflanze",
        "type2": "",
        "stats": {
            "hp": 70,
            "attack": 85,
            "defense": 65,
            "specialAttack": 105,
            "specialDefense": 85,
            "speed": 120
        }
    },
    {
        "id": 255,
        "name_de": "Flemmli",
        "name_en": "torchic",
        "type1": "Feuer",
        "type2": "",
        "stats": {
            "hp": 45,
            "attack": 60,
            "defense": 40,
            "specialAttack": 70,
            "specialDefense": 50,
            "speed": 45
        }
    },
    {
        "id": 256,
        "name_de": "Jungglut",
        "name_en": "combusken",
        "type1": "Feuer",
        "type2": "Kampf",
        "stats": {
            "hp": 60,
            "attack": 85,
            "defense": 60,
            "specialAttack": 85,
            "specialDefense": 60,
            "speed": 55
        }
    },
    {
        "id": 257,
        "name_de": "Lohgock",
        "name_en": "blaziken",
        "type1": "Feuer",
        "type2": "Kampf",
        "stats": {
            "hp": 80,
            "attack": 120,
            "defense": 70,
            "specialAttack": 110,
            "specialDefense": 70,
            "speed": 80
        }
    },
    {
        "id": 258,
        "name_de": "Hydropi",
        "name_en": "mudkip",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 50,
            "attack": 70,
            "defense": 50,
            "specialAttack": 50,
            "specialDefense": 50,
            "speed": 40
        }
    },
    {
        "id": 259,
        "name_de": "Moorabbel",
        "name_en": "marshtomp",
        "type1": "Wasser",
        "type2": "Boden",
        "stats": {
            "hp": 70,
            "attack": 85,
            "defense": 70,
            "specialAttack": 60,
            "specialDefense": 70,
            "speed": 50
        }
    },
    {
        "id": 260,
        "name_de": "Sumpex",
        "name_en": "swampert",
        "type1": "Wasser",
        "type2": "Boden",
        "stats": {
            "hp": 100,
            "attack": 110,
            "defense": 90,
            "specialAttack": 85,
            "specialDefense": 90,
            "speed": 60
        }
    },
    {
        "id": 261,
        "name_de": "Fiffyen",
        "name_en": "poochyena",
        "type1": "Unlicht",
        "type2": "",
        "stats": {
            "hp": 35,
            "attack": 55,
            "defense": 35,
            "specialAttack": 30,
            "specialDefense": 30,
            "speed": 35
        }
    },
    {
        "id": 262,
        "name_de": "Magnayen",
        "name_en": "mightyena",
        "type1": "Unlicht",
        "type2": "",
        "stats": {
            "hp": 70,
            "attack": 90,
            "defense": 70,
            "specialAttack": 60,
            "specialDefense": 60,
            "speed": 70
        }
    },
    {
        "id": 263,
        "name_de": "Zigzachs",
        "name_en": "zigzagoon",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 38,
            "attack": 30,
            "defense": 41,
            "specialAttack": 30,
            "specialDefense": 41,
            "speed": 60
        }
    },
    {
        "id": 264,
        "name_de": "Geradaks",
        "name_en": "linoone",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 78,
            "attack": 70,
            "defense": 61,
            "specialAttack": 50,
            "specialDefense": 61,
            "speed": 100
        }
    },
    {
        "id": 265,
        "name_de": "Waumpel",
        "name_en": "wurmple",
        "type1": "Käfer",
        "type2": "",
        "stats": {
            "hp": 45,
            "attack": 45,
            "defense": 35,
            "specialAttack": 20,
            "specialDefense": 30,
            "speed": 20
        }
    },
    {
        "id": 266,
        "name_de": "Schaloko",
        "name_en": "silcoon",
        "type1": "Käfer",
        "type2": "",
        "stats": {
            "hp": 50,
            "attack": 35,
            "defense": 55,
            "specialAttack": 25,
            "specialDefense": 25,
            "speed": 15
        }
    },
    {
        "id": 267,
        "name_de": "Papinella",
        "name_en": "beautifly",
        "type1": "Käfer",
        "type2": "Flug",
        "stats": {
            "hp": 60,
            "attack": 70,
            "defense": 50,
            "specialAttack": 100,
            "specialDefense": 50,
            "speed": 65
        }
    },
    {
        "id": 268,
        "name_de": "Panekon",
        "name_en": "cascoon",
        "type1": "Käfer",
        "type2": "",
        "stats": {
            "hp": 50,
            "attack": 35,
            "defense": 55,
            "specialAttack": 25,
            "specialDefense": 25,
            "speed": 15
        }
    },
    {
        "id": 269,
        "name_de": "Pudox",
        "name_en": "dustox",
        "type1": "Käfer",
        "type2": "Gift",
        "stats": {
            "hp": 60,
            "attack": 50,
            "defense": 70,
            "specialAttack": 50,
            "specialDefense": 90,
            "speed": 65
        }
    },
    {
        "id": 270,
        "name_de": "Loturzel",
        "name_en": "lotad",
        "type1": "Wasser",
        "type2": "Pflanze",
        "stats": {
            "hp": 40,
            "attack": 30,
            "defense": 30,
            "specialAttack": 40,
            "specialDefense": 50,
            "speed": 30
        }
    },
    {
        "id": 271,
        "name_de": "Lombrero",
        "name_en": "lombre",
        "type1": "Wasser",
        "type2": "Pflanze",
        "stats": {
            "hp": 60,
            "attack": 50,
            "defense": 50,
            "specialAttack": 60,
            "specialDefense": 70,
            "speed": 50
        }
    },
    {
        "id": 272,
        "name_de": "Kappalores",
        "name_en": "ludicolo",
        "type1": "Wasser",
        "type2": "Pflanze",
        "stats": {
            "hp": 80,
            "attack": 70,
            "defense": 70,
            "specialAttack": 90,
            "specialDefense": 100,
            "speed": 70
        }
    },
    {
        "id": 273,
        "name_de": "Samurzel",
        "name_en": "seedot",
        "type1": "Pflanze",
        "type2": "",
        "stats": {
            "hp": 40,
            "attack": 40,
            "defense": 50,
            "specialAttack": 30,
            "specialDefense": 30,
            "speed": 30
        }
    },
    {
        "id": 274,
        "name_de": "Blanas",
        "name_en": "nuzleaf",
        "type1": "Pflanze",
        "type2": "Unlicht",
        "stats": {
            "hp": 70,
            "attack": 70,
            "defense": 40,
            "specialAttack": 60,
            "specialDefense": 40,
            "speed": 60
        }
    },
    {
        "id": 275,
        "name_de": "Tengulist",
        "name_en": "shiftry",
        "type1": "Pflanze",
        "type2": "Unlicht",
        "stats": {
            "hp": 90,
            "attack": 100,
            "defense": 60,
            "specialAttack": 90,
            "specialDefense": 60,
            "speed": 80
        }
    },
    {
        "id": 276,
        "name_de": "Schwalbini",
        "name_en": "taillow",
        "type1": "Normal",
        "type2": "Flug",
        "stats": {
            "hp": 40,
            "attack": 55,
            "defense": 30,
            "specialAttack": 30,
            "specialDefense": 30,
            "speed": 85
        }
    },
    {
        "id": 277,
        "name_de": "Schwalboss",
        "name_en": "swellow",
        "type1": "Normal",
        "type2": "Flug",
        "stats": {
            "hp": 60,
            "attack": 85,
            "defense": 60,
            "specialAttack": 75,
            "specialDefense": 50,
            "speed": 125
        }
    },
    {
        "id": 278,
        "name_de": "Wingull",
        "name_en": "wingull",
        "type1": "Wasser",
        "type2": "Flug",
        "stats": {
            "hp": 40,
            "attack": 30,
            "defense": 30,
            "specialAttack": 55,
            "specialDefense": 30,
            "speed": 85
        }
    },
    {
        "id": 279,
        "name_de": "Pelipper",
        "name_en": "pelipper",
        "type1": "Wasser",
        "type2": "Flug",
        "stats": {
            "hp": 60,
            "attack": 50,
            "defense": 100,
            "specialAttack": 95,
            "specialDefense": 70,
            "speed": 65
        }
    },
    {
        "id": 280,
        "name_de": "Trasla",
        "name_en": "ralts",
        "type1": "Psycho",
        "type2": "Fee",
        "stats": {
            "hp": 28,
            "attack": 25,
            "defense": 25,
            "specialAttack": 45,
            "specialDefense": 35,
            "speed": 40
        }
    },
    {
        "id": 281,
        "name_de": "Kirlia",
        "name_en": "kirlia",
        "type1": "Psycho",
        "type2": "Fee",
        "stats": {
            "hp": 38,
            "attack": 35,
            "defense": 35,
            "specialAttack": 65,
            "specialDefense": 55,
            "speed": 50
        }
    },
    {
        "id": 282,
        "name_de": "Guardevoir",
        "name_en": "gardevoir",
        "type1": "Psycho",
        "type2": "Fee",
        "stats": {
            "hp": 68,
            "attack": 65,
            "defense": 65,
            "specialAttack": 125,
            "specialDefense": 115,
            "speed": 80
        }
    },
    {
        "id": 283,
        "name_de": "Gehweiher",
        "name_en": "surskit",
        "type1": "Käfer",
        "type2": "Wasser",
        "stats": {
            "hp": 40,
            "attack": 30,
            "defense": 32,
            "specialAttack": 50,
            "specialDefense": 52,
            "speed": 65
        }
    },
    {
        "id": 284,
        "name_de": "Maskeregen",
        "name_en": "masquerain",
        "type1": "Käfer",
        "type2": "Flug",
        "stats": {
            "hp": 70,
            "attack": 60,
            "defense": 62,
            "specialAttack": 100,
            "specialDefense": 82,
            "speed": 80
        }
    },
    {
        "id": 285,
        "name_de": "Knilz",
        "name_en": "shroomish",
        "type1": "Pflanze",
        "type2": "",
        "stats": {
            "hp": 60,
            "attack": 40,
            "defense": 60,
            "specialAttack": 40,
            "specialDefense": 60,
            "speed": 35
        }
    },
    {
        "id": 286,
        "name_de": "Kapilz",
        "name_en": "breloom",
        "type1": "Pflanze",
        "type2": "Kampf",
        "stats": {
            "hp": 60,
            "attack": 130,
            "defense": 80,
            "specialAttack": 60,
            "specialDefense": 60,
            "speed": 70
        }
    },
    {
        "id": 287,
        "name_de": "Bummelz",
        "name_en": "slakoth",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 60,
            "attack": 60,
            "defense": 60,
            "specialAttack": 35,
            "specialDefense": 35,
            "speed": 30
        }
    },
    {
        "id": 288,
        "name_de": "Muntier",
        "name_en": "vigoroth",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 80,
            "attack": 80,
            "defense": 80,
            "specialAttack": 55,
            "specialDefense": 55,
            "speed": 90
        }
    },
    {
        "id": 289,
        "name_de": "Letarking",
        "name_en": "slaking",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 150,
            "attack": 160,
            "defense": 100,
            "specialAttack": 95,
            "specialDefense": 65,
            "speed": 100
        }
    },
    {
        "id": 290,
        "name_de": "Nincada",
        "name_en": "nincada",
        "type1": "Käfer",
        "type2": "Boden",
        "stats": {
            "hp": 31,
            "attack": 45,
            "defense": 90,
            "specialAttack": 30,
            "specialDefense": 30,
            "speed": 40
        }
    },
    {
        "id": 291,
        "name_de": "Ninjask",
        "name_en": "ninjask",
        "type1": "Käfer",
        "type2": "Flug",
        "stats": {
            "hp": 61,
            "attack": 90,
            "defense": 45,
            "specialAttack": 50,
            "specialDefense": 50,
            "speed": 160
        }
    },
    {
        "id": 292,
        "name_de": "Ninjatom",
        "name_en": "shedinja",
        "type1": "Käfer",
        "type2": "Geist",
        "stats": {
            "hp": 1,
            "attack": 90,
            "defense": 45,
            "specialAttack": 30,
            "specialDefense": 30,
            "speed": 40
        }
    },
    {
        "id": 293,
        "name_de": "Flurmel",
        "name_en": "whismur",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 64,
            "attack": 51,
            "defense": 23,
            "specialAttack": 51,
            "specialDefense": 23,
            "speed": 28
        }
    },
    {
        "id": 294,
        "name_de": "Krakeelo",
        "name_en": "loudred",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 84,
            "attack": 71,
            "defense": 43,
            "specialAttack": 71,
            "specialDefense": 43,
            "speed": 48
        }
    },
    {
        "id": 295,
        "name_de": "Krawumms",
        "name_en": "exploud",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 104,
            "attack": 91,
            "defense": 63,
            "specialAttack": 91,
            "specialDefense": 73,
            "speed": 68
        }
    },
    {
        "id": 296,
        "name_de": "Makuhita",
        "name_en": "makuhita",
        "type1": "Kampf",
        "type2": "",
        "stats": {
            "hp": 72,
            "attack": 60,
            "defense": 30,
            "specialAttack": 20,
            "specialDefense": 30,
            "speed": 25
        }
    },
    {
        "id": 297,
        "name_de": "Hariyama",
        "name_en": "hariyama",
        "type1": "Kampf",
        "type2": "",
        "stats": {
            "hp": 144,
            "attack": 120,
            "defense": 60,
            "specialAttack": 40,
            "specialDefense": 60,
            "speed": 50
        }
    },
    {
        "id": 298,
        "name_de": "Azurill",
        "name_en": "azurill",
        "type1": "Normal",
        "type2": "Fee",
        "stats": {
            "hp": 50,
            "attack": 20,
            "defense": 40,
            "specialAttack": 20,
            "specialDefense": 40,
            "speed": 20
        }
    },
    {
        "id": 299,
        "name_de": "Nasgnet",
        "name_en": "nosepass",
        "type1": "Gestein",
        "type2": "",
        "stats": {
            "hp": 30,
            "attack": 45,
            "defense": 135,
            "specialAttack": 45,
            "specialDefense": 90,
            "speed": 30
        }
    },
    {
        "id": 300,
        "name_de": "Eneco",
        "name_en": "skitty",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 50,
            "attack": 45,
            "defense": 45,
            "specialAttack": 35,
            "specialDefense": 35,
            "speed": 50
        }
    },
    {
        "id": 301,
        "name_de": "Enekoro",
        "name_en": "delcatty",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 70,
            "attack": 65,
            "defense": 65,
            "specialAttack": 55,
            "specialDefense": 55,
            "speed": 90
        }
    },
    {
        "id": 302,
        "name_de": "Zobiris",
        "name_en": "sableye",
        "type1": "Unlicht",
        "type2": "Geist",
        "stats": {
            "hp": 50,
            "attack": 75,
            "defense": 75,
            "specialAttack": 65,
            "specialDefense": 65,
            "speed": 50
        }
    },
    {
        "id": 303,
        "name_de": "Flunkifer",
        "name_en": "mawile",
        "type1": "Stahl",
        "type2": "Fee",
        "stats": {
            "hp": 50,
            "attack": 85,
            "defense": 85,
            "specialAttack": 55,
            "specialDefense": 55,
            "speed": 50
        }
    },
    {
        "id": 304,
        "name_de": "Stollunior",
        "name_en": "aron",
        "type1": "Stahl",
        "type2": "Gestein",
        "stats": {
            "hp": 50,
            "attack": 70,
            "defense": 100,
            "specialAttack": 40,
            "specialDefense": 40,
            "speed": 30
        }
    },
    {
        "id": 305,
        "name_de": "Stollrak",
        "name_en": "lairon",
        "type1": "Stahl",
        "type2": "Gestein",
        "stats": {
            "hp": 60,
            "attack": 90,
            "defense": 140,
            "specialAttack": 50,
            "specialDefense": 50,
            "speed": 40
        }
    },
    {
        "id": 306,
        "name_de": "Stolloss",
        "name_en": "aggron",
        "type1": "Stahl",
        "type2": "Gestein",
        "stats": {
            "hp": 70,
            "attack": 110,
            "defense": 180,
            "specialAttack": 60,
            "specialDefense": 60,
            "speed": 50
        }
    },
    {
        "id": 307,
        "name_de": "Meditie",
        "name_en": "meditite",
        "type1": "Kampf",
        "type2": "Psycho",
        "stats": {
            "hp": 30,
            "attack": 40,
            "defense": 55,
            "specialAttack": 40,
            "specialDefense": 55,
            "speed": 60
        }
    },
    {
        "id": 308,
        "name_de": "Meditalis",
        "name_en": "medicham",
        "type1": "Kampf",
        "type2": "Psycho",
        "stats": {
            "hp": 60,
            "attack": 60,
            "defense": 75,
            "specialAttack": 60,
            "specialDefense": 75,
            "speed": 80
        }
    },
    {
        "id": 309,
        "name_de": "Frizelbliz",
        "name_en": "electrike",
        "type1": "Elektro",
        "type2": "",
        "stats": {
            "hp": 40,
            "attack": 45,
            "defense": 40,
            "specialAttack": 65,
            "specialDefense": 40,
            "speed": 65
        }
    },
    {
        "id": 310,
        "name_de": "Voltenso",
        "name_en": "manectric",
        "type1": "Elektro",
        "type2": "",
        "stats": {
            "hp": 70,
            "attack": 75,
            "defense": 60,
            "specialAttack": 105,
            "specialDefense": 60,
            "speed": 105
        }
    },
    {
        "id": 311,
        "name_de": "Plusle",
        "name_en": "plusle",
        "type1": "Elektro",
        "type2": "",
        "stats": {
            "hp": 60,
            "attack": 50,
            "defense": 40,
            "specialAttack": 85,
            "specialDefense": 75,
            "speed": 95
        }
    },
    {
        "id": 312,
        "name_de": "Minun",
        "name_en": "minun",
        "type1": "Elektro",
        "type2": "",
        "stats": {
            "hp": 60,
            "attack": 40,
            "defense": 50,
            "specialAttack": 75,
            "specialDefense": 85,
            "speed": 95
        }
    },
    {
        "id": 313,
        "name_de": "Volbeat",
        "name_en": "volbeat",
        "type1": "Käfer",
        "type2": "",
        "stats": {
            "hp": 65,
            "attack": 73,
            "defense": 75,
            "specialAttack": 47,
            "specialDefense": 85,
            "speed": 85
        }
    },
    {
        "id": 314,
        "name_de": "Illumise",
        "name_en": "illumise",
        "type1": "Käfer",
        "type2": "",
        "stats": {
            "hp": 65,
            "attack": 47,
            "defense": 75,
            "specialAttack": 73,
            "specialDefense": 85,
            "speed": 85
        }
    },
    {
        "id": 315,
        "name_de": "Roselia",
        "name_en": "roselia",
        "type1": "Pflanze",
        "type2": "Gift",
        "stats": {
            "hp": 50,
            "attack": 60,
            "defense": 45,
            "specialAttack": 100,
            "specialDefense": 80,
            "speed": 65
        }
    },
    {
        "id": 316,
        "name_de": "Schluppuck",
        "name_en": "gulpin",
        "type1": "Gift",
        "type2": "",
        "stats": {
            "hp": 70,
            "attack": 43,
            "defense": 53,
            "specialAttack": 43,
            "specialDefense": 53,
            "speed": 40
        }
    },
    {
        "id": 317,
        "name_de": "Schlukwech",
        "name_en": "swalot",
        "type1": "Gift",
        "type2": "",
        "stats": {
            "hp": 100,
            "attack": 73,
            "defense": 83,
            "specialAttack": 73,
            "specialDefense": 83,
            "speed": 55
        }
    },
    {
        "id": 318,
        "name_de": "Kanivanha",
        "name_en": "carvanha",
        "type1": "Wasser",
        "type2": "Unlicht",
        "stats": {
            "hp": 45,
            "attack": 90,
            "defense": 20,
            "specialAttack": 65,
            "specialDefense": 20,
            "speed": 65
        }
    },
    {
        "id": 319,
        "name_de": "Tohaido",
        "name_en": "sharpedo",
        "type1": "Wasser",
        "type2": "Unlicht",
        "stats": {
            "hp": 70,
            "attack": 120,
            "defense": 40,
            "specialAttack": 95,
            "specialDefense": 40,
            "speed": 95
        }
    },
    {
        "id": 320,
        "name_de": "Wailmer",
        "name_en": "wailmer",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 130,
            "attack": 70,
            "defense": 35,
            "specialAttack": 70,
            "specialDefense": 35,
            "speed": 60
        }
    },
    {
        "id": 321,
        "name_de": "Wailord",
        "name_en": "wailord",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 170,
            "attack": 90,
            "defense": 45,
            "specialAttack": 90,
            "specialDefense": 45,
            "speed": 60
        }
    },
    {
        "id": 322,
        "name_de": "Camaub",
        "name_en": "numel",
        "type1": "Feuer",
        "type2": "Boden",
        "stats": {
            "hp": 60,
            "attack": 60,
            "defense": 40,
            "specialAttack": 65,
            "specialDefense": 45,
            "speed": 35
        }
    },
    {
        "id": 323,
        "name_de": "Camerupt",
        "name_en": "camerupt",
        "type1": "Feuer",
        "type2": "Boden",
        "stats": {
            "hp": 70,
            "attack": 100,
            "defense": 70,
            "specialAttack": 105,
            "specialDefense": 75,
            "speed": 40
        }
    },
    {
        "id": 324,
        "name_de": "Qurtel",
        "name_en": "torkoal",
        "type1": "Feuer",
        "type2": "",
        "stats": {
            "hp": 70,
            "attack": 85,
            "defense": 140,
            "specialAttack": 85,
            "specialDefense": 70,
            "speed": 20
        }
    },
    {
        "id": 325,
        "name_de": "Spoink",
        "name_en": "spoink",
        "type1": "Psycho",
        "type2": "",
        "stats": {
            "hp": 60,
            "attack": 25,
            "defense": 35,
            "specialAttack": 70,
            "specialDefense": 80,
            "speed": 60
        }
    },
    {
        "id": 326,
        "name_de": "Groink",
        "name_en": "grumpig",
        "type1": "Psycho",
        "type2": "",
        "stats": {
            "hp": 80,
            "attack": 45,
            "defense": 65,
            "specialAttack": 90,
            "specialDefense": 110,
            "speed": 80
        }
    },
    {
        "id": 327,
        "name_de": "Pandir",
        "name_en": "spinda",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 60,
            "attack": 60,
            "defense": 60,
            "specialAttack": 60,
            "specialDefense": 60,
            "speed": 60
        }
    },
    {
        "id": 328,
        "name_de": "Knacklion",
        "name_en": "trapinch",
        "type1": "Boden",
        "type2": "",
        "stats": {
            "hp": 45,
            "attack": 100,
            "defense": 45,
            "specialAttack": 45,
            "specialDefense": 45,
            "speed": 10
        }
    },
    {
        "id": 329,
        "name_de": "Vibrava",
        "name_en": "vibrava",
        "type1": "Boden",
        "type2": "Drache",
        "stats": {
            "hp": 50,
            "attack": 70,
            "defense": 50,
            "specialAttack": 50,
            "specialDefense": 50,
            "speed": 70
        }
    },
    {
        "id": 330,
        "name_de": "Libelldra",
        "name_en": "flygon",
        "type1": "Boden",
        "type2": "Drache",
        "stats": {
            "hp": 80,
            "attack": 100,
            "defense": 80,
            "specialAttack": 80,
            "specialDefense": 80,
            "speed": 100
        }
    },
    {
        "id": 331,
        "name_de": "Tuska",
        "name_en": "cacnea",
        "type1": "Pflanze",
        "type2": "",
        "stats": {
            "hp": 50,
            "attack": 85,
            "defense": 40,
            "specialAttack": 85,
            "specialDefense": 40,
            "speed": 35
        }
    },
    {
        "id": 332,
        "name_de": "Noktuska",
        "name_en": "cacturne",
        "type1": "Pflanze",
        "type2": "Unlicht",
        "stats": {
            "hp": 70,
            "attack": 115,
            "defense": 60,
            "specialAttack": 115,
            "specialDefense": 60,
            "speed": 55
        }
    },
    {
        "id": 333,
        "name_de": "Wablu",
        "name_en": "swablu",
        "type1": "Normal",
        "type2": "Flug",
        "stats": {
            "hp": 45,
            "attack": 40,
            "defense": 60,
            "specialAttack": 40,
            "specialDefense": 75,
            "speed": 50
        }
    },
    {
        "id": 334,
        "name_de": "Altaria",
        "name_en": "altaria",
        "type1": "Drache",
        "type2": "Flug",
        "stats": {
            "hp": 75,
            "attack": 70,
            "defense": 90,
            "specialAttack": 70,
            "specialDefense": 105,
            "speed": 80
        }
    },
    {
        "id": 335,
        "name_de": "Sengo",
        "name_en": "zangoose",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 73,
            "attack": 115,
            "defense": 60,
            "specialAttack": 60,
            "specialDefense": 60,
            "speed": 90
        }
    },
    {
        "id": 336,
        "name_de": "Vipitis",
        "name_en": "seviper",
        "type1": "Gift",
        "type2": "",
        "stats": {
            "hp": 73,
            "attack": 100,
            "defense": 60,
            "specialAttack": 100,
            "specialDefense": 60,
            "speed": 65
        }
    },
    {
        "id": 337,
        "name_de": "Lunastein",
        "name_en": "lunatone",
        "type1": "Gestein",
        "type2": "Psycho",
        "stats": {
            "hp": 90,
            "attack": 55,
            "defense": 65,
            "specialAttack": 95,
            "specialDefense": 85,
            "speed": 70
        }
    },
    {
        "id": 338,
        "name_de": "Sonnfel",
        "name_en": "solrock",
        "type1": "Gestein",
        "type2": "Psycho",
        "stats": {
            "hp": 90,
            "attack": 95,
            "defense": 85,
            "specialAttack": 55,
            "specialDefense": 65,
            "speed": 70
        }
    },
    {
        "id": 339,
        "name_de": "Schmerbe",
        "name_en": "barboach",
        "type1": "Wasser",
        "type2": "Boden",
        "stats": {
            "hp": 50,
            "attack": 48,
            "defense": 43,
            "specialAttack": 46,
            "specialDefense": 41,
            "speed": 60
        }
    },
    {
        "id": 340,
        "name_de": "Welsar",
        "name_en": "whiscash",
        "type1": "Wasser",
        "type2": "Boden",
        "stats": {
            "hp": 110,
            "attack": 78,
            "defense": 73,
            "specialAttack": 76,
            "specialDefense": 71,
            "speed": 60
        }
    },
    {
        "id": 341,
        "name_de": "Krebscorps",
        "name_en": "corphish",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 43,
            "attack": 80,
            "defense": 65,
            "specialAttack": 50,
            "specialDefense": 35,
            "speed": 35
        }
    },
    {
        "id": 342,
        "name_de": "Krebutack",
        "name_en": "crawdaunt",
        "type1": "Wasser",
        "type2": "Unlicht",
        "stats": {
            "hp": 63,
            "attack": 120,
            "defense": 85,
            "specialAttack": 90,
            "specialDefense": 55,
            "speed": 55
        }
    },
    {
        "id": 343,
        "name_de": "Puppance",
        "name_en": "baltoy",
        "type1": "Boden",
        "type2": "Psycho",
        "stats": {
            "hp": 40,
            "attack": 40,
            "defense": 55,
            "specialAttack": 40,
            "specialDefense": 70,
            "speed": 55
        }
    },
    {
        "id": 344,
        "name_de": "Lepumentas",
        "name_en": "claydol",
        "type1": "Boden",
        "type2": "Psycho",
        "stats": {
            "hp": 60,
            "attack": 70,
            "defense": 105,
            "specialAttack": 70,
            "specialDefense": 120,
            "speed": 75
        }
    },
    {
        "id": 345,
        "name_de": "Liliep",
        "name_en": "lileep",
        "type1": "Gestein",
        "type2": "Pflanze",
        "stats": {
            "hp": 66,
            "attack": 41,
            "defense": 77,
            "specialAttack": 61,
            "specialDefense": 87,
            "speed": 23
        }
    },
    {
        "id": 346,
        "name_de": "Wielie",
        "name_en": "cradily",
        "type1": "Gestein",
        "type2": "Pflanze",
        "stats": {
            "hp": 86,
            "attack": 81,
            "defense": 97,
            "specialAttack": 81,
            "specialDefense": 107,
            "speed": 43
        }
    },
    {
        "id": 347,
        "name_de": "Anorith",
        "name_en": "anorith",
        "type1": "Gestein",
        "type2": "Käfer",
        "stats": {
            "hp": 45,
            "attack": 95,
            "defense": 50,
            "specialAttack": 40,
            "specialDefense": 50,
            "speed": 75
        }
    },
    {
        "id": 348,
        "name_de": "Armaldo",
        "name_en": "armaldo",
        "type1": "Gestein",
        "type2": "Käfer",
        "stats": {
            "hp": 75,
            "attack": 125,
            "defense": 100,
            "specialAttack": 70,
            "specialDefense": 80,
            "speed": 45
        }
    },
    {
        "id": 349,
        "name_de": "Barschwa",
        "name_en": "feebas",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 20,
            "attack": 15,
            "defense": 20,
            "specialAttack": 10,
            "specialDefense": 55,
            "speed": 80
        }
    },
    {
        "id": 350,
        "name_de": "Milotic",
        "name_en": "milotic",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 95,
            "attack": 60,
            "defense": 79,
            "specialAttack": 100,
            "specialDefense": 125,
            "speed": 81
        }
    },
    {
        "id": 351,
        "name_de": "Formeo",
        "name_en": "castform",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 70,
            "attack": 70,
            "defense": 70,
            "specialAttack": 70,
            "specialDefense": 70,
            "speed": 70
        }
    },
    {
        "id": 352,
        "name_de": "Kecleon",
        "name_en": "kecleon",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 60,
            "attack": 90,
            "defense": 70,
            "specialAttack": 60,
            "specialDefense": 120,
            "speed": 40
        }
    },
    {
        "id": 353,
        "name_de": "Shuppet",
        "name_en": "shuppet",
        "type1": "Geist",
        "type2": "",
        "stats": {
            "hp": 44,
            "attack": 75,
            "defense": 35,
            "specialAttack": 63,
            "specialDefense": 33,
            "speed": 45
        }
    },
    {
        "id": 354,
        "name_de": "Banette",
        "name_en": "banette",
        "type1": "Geist",
        "type2": "",
        "stats": {
            "hp": 64,
            "attack": 115,
            "defense": 65,
            "specialAttack": 83,
            "specialDefense": 63,
            "speed": 65
        }
    },
    {
        "id": 355,
        "name_de": "Zwirrlicht",
        "name_en": "duskull",
        "type1": "Geist",
        "type2": "",
        "stats": {
            "hp": 20,
            "attack": 40,
            "defense": 90,
            "specialAttack": 30,
            "specialDefense": 90,
            "speed": 25
        }
    },
    {
        "id": 356,
        "name_de": "Zwirrklop",
        "name_en": "dusclops",
        "type1": "Geist",
        "type2": "",
        "stats": {
            "hp": 40,
            "attack": 70,
            "defense": 130,
            "specialAttack": 60,
            "specialDefense": 130,
            "speed": 25
        }
    },
    {
        "id": 357,
        "name_de": "Tropius",
        "name_en": "tropius",
        "type1": "Pflanze",
        "type2": "Flug",
        "stats": {
            "hp": 99,
            "attack": 68,
            "defense": 83,
            "specialAttack": 72,
            "specialDefense": 87,
            "speed": 51
        }
    },
    {
        "id": 358,
        "name_de": "Palimpalim",
        "name_en": "chimecho",
        "type1": "Psycho",
        "type2": "",
        "stats": {
            "hp": 75,
            "attack": 50,
            "defense": 80,
            "specialAttack": 95,
            "specialDefense": 90,
            "speed": 65
        }
    },
    {
        "id": 359,
        "name_de": "Absol",
        "name_en": "absol",
        "type1": "Unlicht",
        "type2": "",
        "stats": {
            "hp": 65,
            "attack": 130,
            "defense": 60,
            "specialAttack": 75,
            "specialDefense": 60,
            "speed": 75
        }
    },
    {
        "id": 360,
        "name_de": "Isso",
        "name_en": "wynaut",
        "type1": "Psycho",
        "type2": "",
        "stats": {
            "hp": 95,
            "attack": 23,
            "defense": 48,
            "specialAttack": 23,
            "specialDefense": 48,
            "speed": 23
        }
    },
    {
        "id": 361,
        "name_de": "Schneppke",
        "name_en": "snorunt",
        "type1": "Eis",
        "type2": "",
        "stats": {
            "hp": 50,
            "attack": 50,
            "defense": 50,
            "specialAttack": 50,
            "specialDefense": 50,
            "speed": 50
        }
    },
    {
        "id": 362,
        "name_de": "Firnontor",
        "name_en": "glalie",
        "type1": "Eis",
        "type2": "",
        "stats": {
            "hp": 80,
            "attack": 80,
            "defense": 80,
            "specialAttack": 80,
            "specialDefense": 80,
            "speed": 80
        }
    },
    {
        "id": 363,
        "name_de": "Seemops",
        "name_en": "spheal",
        "type1": "Eis",
        "type2": "Wasser",
        "stats": {
            "hp": 70,
            "attack": 40,
            "defense": 50,
            "specialAttack": 55,
            "specialDefense": 50,
            "speed": 25
        }
    },
    {
        "id": 364,
        "name_de": "Seejong",
        "name_en": "sealeo",
        "type1": "Eis",
        "type2": "Wasser",
        "stats": {
            "hp": 90,
            "attack": 60,
            "defense": 70,
            "specialAttack": 75,
            "specialDefense": 70,
            "speed": 45
        }
    },
    {
        "id": 365,
        "name_de": "Walraisa",
        "name_en": "walrein",
        "type1": "Eis",
        "type2": "Wasser",
        "stats": {
            "hp": 110,
            "attack": 80,
            "defense": 90,
            "specialAttack": 95,
            "specialDefense": 90,
            "speed": 65
        }
    },
    {
        "id": 366,
        "name_de": "Perlu",
        "name_en": "clamperl",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 35,
            "attack": 64,
            "defense": 85,
            "specialAttack": 74,
            "specialDefense": 55,
            "speed": 32
        }
    },
    {
        "id": 367,
        "name_de": "Aalabyss",
        "name_en": "huntail",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 55,
            "attack": 104,
            "defense": 105,
            "specialAttack": 94,
            "specialDefense": 75,
            "speed": 52
        }
    },
    {
        "id": 368,
        "name_de": "Saganabyss",
        "name_en": "gorebyss",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 55,
            "attack": 84,
            "defense": 105,
            "specialAttack": 114,
            "specialDefense": 75,
            "speed": 52
        }
    },
    {
        "id": 369,
        "name_de": "Relicanth",
        "name_en": "relicanth",
        "type1": "Wasser",
        "type2": "Gestein",
        "stats": {
            "hp": 100,
            "attack": 90,
            "defense": 130,
            "specialAttack": 45,
            "specialDefense": 65,
            "speed": 55
        }
    },
    {
        "id": 370,
        "name_de": "Liebiskus",
        "name_en": "luvdisc",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 43,
            "attack": 30,
            "defense": 55,
            "specialAttack": 40,
            "specialDefense": 65,
            "speed": 97
        }
    },
    {
        "id": 371,
        "name_de": "Kindwurm",
        "name_en": "bagon",
        "type1": "Drache",
        "type2": "",
        "stats": {
            "hp": 45,
            "attack": 75,
            "defense": 60,
            "specialAttack": 40,
            "specialDefense": 30,
            "speed": 50
        }
    },
    {
        "id": 372,
        "name_de": "Draschel",
        "name_en": "shelgon",
        "type1": "Drache",
        "type2": "",
        "stats": {
            "hp": 65,
            "attack": 95,
            "defense": 100,
            "specialAttack": 60,
            "specialDefense": 50,
            "speed": 50
        }
    },
    {
        "id": 373,
        "name_de": "Brutalanda",
        "name_en": "salamence",
        "type1": "Drache",
        "type2": "Flug",
        "stats": {
            "hp": 95,
            "attack": 135,
            "defense": 80,
            "specialAttack": 110,
            "specialDefense": 80,
            "speed": 100
        }
    },
    {
        "id": 374,
        "name_de": "Tanhel",
        "name_en": "beldum",
        "type1": "Stahl",
        "type2": "Psycho",
        "stats": {
            "hp": 40,
            "attack": 55,
            "defense": 80,
            "specialAttack": 35,
            "specialDefense": 60,
            "speed": 30
        }
    },
    {
        "id": 375,
        "name_de": "Metang",
        "name_en": "metang",
        "type1": "Stahl",
        "type2": "Psycho",
        "stats": {
            "hp": 60,
            "attack": 75,
            "defense": 100,
            "specialAttack": 55,
            "specialDefense": 80,
            "speed": 50
        }
    },
    {
        "id": 376,
        "name_de": "Metagross",
        "name_en": "metagross",
        "type1": "Stahl",
        "type2": "Psycho",
        "stats": {
            "hp": 80,
            "attack": 135,
            "defense": 130,
            "specialAttack": 95,
            "specialDefense": 90,
            "speed": 70
        }
    },
    {
        "id": 377,
        "name_de": "Regirock",
        "name_en": "regirock",
        "type1": "Gestein",
        "type2": "",
        "stats": {
            "hp": 80,
            "attack": 100,
            "defense": 200,
            "specialAttack": 50,
            "specialDefense": 100,
            "speed": 50
        }
    },
    {
        "id": 378,
        "name_de": "Regice",
        "name_en": "regice",
        "type1": "Eis",
        "type2": "",
        "stats": {
            "hp": 80,
            "attack": 50,
            "defense": 100,
            "specialAttack": 100,
            "specialDefense": 200,
            "speed": 50
        }
    },
    {
        "id": 379,
        "name_de": "Registeel",
        "name_en": "registeel",
        "type1": "Stahl",
        "type2": "",
        "stats": {
            "hp": 80,
            "attack": 75,
            "defense": 150,
            "specialAttack": 75,
            "specialDefense": 150,
            "speed": 50
        }
    },
    {
        "id": 380,
        "name_de": "Latias",
        "name_en": "latias",
        "type1": "Drache",
        "type2": "Psycho",
        "stats": {
            "hp": 80,
            "attack": 80,
            "defense": 90,
            "specialAttack": 110,
            "specialDefense": 130,
            "speed": 110
        }
    },
    {
        "id": 381,
        "name_de": "Latios",
        "name_en": "latios",
        "type1": "Drache",
        "type2": "Psycho",
        "stats": {
            "hp": 80,
            "attack": 90,
            "defense": 80,
            "specialAttack": 130,
            "specialDefense": 110,
            "speed": 110
        }
    },
    {
        "id": 382,
        "name_de": "Kyogre",
        "name_en": "kyogre",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 100,
            "attack": 100,
            "defense": 90,
            "specialAttack": 150,
            "specialDefense": 140,
            "speed": 90
        }
    },
    {
        "id": 383,
        "name_de": "Groudon",
        "name_en": "groudon",
        "type1": "Boden",
        "type2": "",
        "stats": {
            "hp": 100,
            "attack": 150,
            "defense": 140,
            "specialAttack": 100,
            "specialDefense": 90,
            "speed": 90
        }
    },
    {
        "id": 384,
        "name_de": "Rayquaza",
        "name_en": "rayquaza",
        "type1": "Drache",
        "type2": "Flug",
        "stats": {
            "hp": 105,
            "attack": 150,
            "defense": 90,
            "specialAttack": 150,
            "specialDefense": 90,
            "speed": 95
        }
    },
    {
        "id": 385,
        "name_de": "Jirachi",
        "name_en": "jirachi",
        "type1": "Stahl",
        "type2": "Psycho",
        "stats": {
            "hp": 100,
            "attack": 100,
            "defense": 100,
            "specialAttack": 100,
            "specialDefense": 100,
            "speed": 100
        }
    },
    {
        "id": 386,
        "name_de": "Deoxys",
        "name_en": "deoxys-normal",
        "type1": "Psycho",
        "type2": "",
        "stats": {
            "hp": 50,
            "attack": 150,
            "defense": 50,
            "specialAttack": 150,
            "specialDefense": 50,
            "speed": 150
        }
    },
    {
        "id": 387,
        "name_de": "Chelast",
        "name_en": "turtwig",
        "type1": "Pflanze",
        "type2": "",
        "stats": {
            "hp": 55,
            "attack": 68,
            "defense": 64,
            "specialAttack": 45,
            "specialDefense": 55,
            "speed": 31
        }
    },
    {
        "id": 388,
        "name_de": "Chelcarain",
        "name_en": "grotle",
        "type1": "Pflanze",
        "type2": "",
        "stats": {
            "hp": 75,
            "attack": 89,
            "defense": 85,
            "specialAttack": 55,
            "specialDefense": 65,
            "speed": 36
        }
    },
    {
        "id": 389,
        "name_de": "Chelterrar",
        "name_en": "torterra",
        "type1": "Pflanze",
        "type2": "Boden",
        "stats": {
            "hp": 95,
            "attack": 109,
            "defense": 105,
            "specialAttack": 75,
            "specialDefense": 85,
            "speed": 56
        }
    },
    {
        "id": 390,
        "name_de": "Panflam",
        "name_en": "chimchar",
        "type1": "Feuer",
        "type2": "",
        "stats": {
            "hp": 44,
            "attack": 58,
            "defense": 44,
            "specialAttack": 58,
            "specialDefense": 44,
            "speed": 61
        }
    },
    {
        "id": 391,
        "name_de": "Panpyro",
        "name_en": "monferno",
        "type1": "Feuer",
        "type2": "Kampf",
        "stats": {
            "hp": 64,
            "attack": 78,
            "defense": 52,
            "specialAttack": 78,
            "specialDefense": 52,
            "speed": 81
        }
    },
    {
        "id": 392,
        "name_de": "Panferno",
        "name_en": "infernape",
        "type1": "Feuer",
        "type2": "Kampf",
        "stats": {
            "hp": 76,
            "attack": 104,
            "defense": 71,
            "specialAttack": 104,
            "specialDefense": 71,
            "speed": 108
        }
    },
    {
        "id": 393,
        "name_de": "Plinfa",
        "name_en": "piplup",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 53,
            "attack": 51,
            "defense": 53,
            "specialAttack": 61,
            "specialDefense": 56,
            "speed": 40
        }
    },
    {
        "id": 394,
        "name_de": "Pliprin",
        "name_en": "prinplup",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 64,
            "attack": 66,
            "defense": 68,
            "specialAttack": 81,
            "specialDefense": 76,
            "speed": 50
        }
    },
    {
        "id": 395,
        "name_de": "Impoleon",
        "name_en": "empoleon",
        "type1": "Wasser",
        "type2": "Stahl",
        "stats": {
            "hp": 84,
            "attack": 86,
            "defense": 88,
            "specialAttack": 111,
            "specialDefense": 101,
            "speed": 60
        }
    },
    {
        "id": 396,
        "name_de": "Staralili",
        "name_en": "starly",
        "type1": "Normal",
        "type2": "Flug",
        "stats": {
            "hp": 40,
            "attack": 55,
            "defense": 30,
            "specialAttack": 30,
            "specialDefense": 30,
            "speed": 60
        }
    },
    {
        "id": 397,
        "name_de": "Staravia",
        "name_en": "staravia",
        "type1": "Normal",
        "type2": "Flug",
        "stats": {
            "hp": 55,
            "attack": 75,
            "defense": 50,
            "specialAttack": 40,
            "specialDefense": 40,
            "speed": 80
        }
    },
    {
        "id": 398,
        "name_de": "Staraptor",
        "name_en": "staraptor",
        "type1": "Normal",
        "type2": "Flug",
        "stats": {
            "hp": 85,
            "attack": 120,
            "defense": 70,
            "specialAttack": 50,
            "specialDefense": 60,
            "speed": 100
        }
    },
    {
        "id": 399,
        "name_de": "Bidiza",
        "name_en": "bidoof",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 59,
            "attack": 45,
            "defense": 40,
            "specialAttack": 35,
            "specialDefense": 40,
            "speed": 31
        }
    },
    {
        "id": 400,
        "name_de": "Bidifas",
        "name_en": "bibarel",
        "type1": "Normal",
        "type2": "Wasser",
        "stats": {
            "hp": 79,
            "attack": 85,
            "defense": 60,
            "specialAttack": 55,
            "specialDefense": 60,
            "speed": 71
        }
    },
    {
        "id": 401,
        "name_de": "Zirpurze",
        "name_en": "kricketot",
        "type1": "Käfer",
        "type2": "",
        "stats": {
            "hp": 37,
            "attack": 25,
            "defense": 41,
            "specialAttack": 25,
            "specialDefense": 41,
            "speed": 25
        }
    },
    {
        "id": 402,
        "name_de": "Zirpeise",
        "name_en": "kricketune",
        "type1": "Käfer",
        "type2": "",
        "stats": {
            "hp": 77,
            "attack": 85,
            "defense": 51,
            "specialAttack": 55,
            "specialDefense": 51,
            "speed": 65
        }
    },
    {
        "id": 403,
        "name_de": "Sheinux",
        "name_en": "shinx",
        "type1": "Elektro",
        "type2": "",
        "stats": {
            "hp": 45,
            "attack": 65,
            "defense": 34,
            "specialAttack": 40,
            "specialDefense": 34,
            "speed": 45
        }
    },
    {
        "id": 404,
        "name_de": "Luxio",
        "name_en": "luxio",
        "type1": "Elektro",
        "type2": "",
        "stats": {
            "hp": 60,
            "attack": 85,
            "defense": 49,
            "specialAttack": 60,
            "specialDefense": 49,
            "speed": 60
        }
    },
    {
        "id": 405,
        "name_de": "Luxtra",
        "name_en": "luxray",
        "type1": "Elektro",
        "type2": "",
        "stats": {
            "hp": 80,
            "attack": 120,
            "defense": 79,
            "specialAttack": 95,
            "specialDefense": 79,
            "speed": 70
        }
    },
    {
        "id": 406,
        "name_de": "Knospi",
        "name_en": "budew",
        "type1": "Pflanze",
        "type2": "Gift",
        "stats": {
            "hp": 40,
            "attack": 30,
            "defense": 35,
            "specialAttack": 50,
            "specialDefense": 70,
            "speed": 55
        }
    },
    {
        "id": 407,
        "name_de": "Roserade",
        "name_en": "roserade",
        "type1": "Pflanze",
        "type2": "Gift",
        "stats": {
            "hp": 60,
            "attack": 70,
            "defense": 65,
            "specialAttack": 125,
            "specialDefense": 105,
            "speed": 90
        }
    },
    {
        "id": 408,
        "name_de": "Koknodon",
        "name_en": "cranidos",
        "type1": "Gestein",
        "type2": "",
        "stats": {
            "hp": 67,
            "attack": 125,
            "defense": 40,
            "specialAttack": 30,
            "specialDefense": 30,
            "speed": 58
        }
    },
    {
        "id": 409,
        "name_de": "Rameidon",
        "name_en": "rampardos",
        "type1": "Gestein",
        "type2": "",
        "stats": {
            "hp": 97,
            "attack": 165,
            "defense": 60,
            "specialAttack": 65,
            "specialDefense": 50,
            "speed": 58
        }
    },
    {
        "id": 410,
        "name_de": "Schilterus",
        "name_en": "shieldon",
        "type1": "Gestein",
        "type2": "Stahl",
        "stats": {
            "hp": 30,
            "attack": 42,
            "defense": 118,
            "specialAttack": 42,
            "specialDefense": 88,
            "speed": 30
        }
    },
    {
        "id": 411,
        "name_de": "Bollterus",
        "name_en": "bastiodon",
        "type1": "Gestein",
        "type2": "Stahl",
        "stats": {
            "hp": 60,
            "attack": 52,
            "defense": 168,
            "specialAttack": 47,
            "specialDefense": 138,
            "speed": 30
        }
    },
    {
        "id": 412,
        "name_de": "Burmy",
        "name_en": "burmy",
        "type1": "Käfer",
        "type2": "",
        "stats": {
            "hp": 40,
            "attack": 29,
            "defense": 45,
            "specialAttack": 29,
            "specialDefense": 45,
            "speed": 36
        }
    },
    {
        "id": 413,
        "name_de": "Burmadame",
        "name_en": "wormadam-plant",
        "type1": "Käfer",
        "type2": "Pflanze",
        "stats": {
            "hp": 60,
            "attack": 59,
            "defense": 85,
            "specialAttack": 79,
            "specialDefense": 105,
            "speed": 36
        }
    },
    {
        "id": 414,
        "name_de": "Moterpel",
        "name_en": "mothim",
        "type1": "Käfer",
        "type2": "Flug",
        "stats": {
            "hp": 70,
            "attack": 94,
            "defense": 50,
            "specialAttack": 94,
            "specialDefense": 50,
            "speed": 66
        }
    },
    {
        "id": 415,
        "name_de": "Wadribie",
        "name_en": "combee",
        "type1": "Käfer",
        "type2": "Flug",
        "stats": {
            "hp": 30,
            "attack": 30,
            "defense": 42,
            "specialAttack": 30,
            "specialDefense": 42,
            "speed": 70
        }
    },
    {
        "id": 416,
        "name_de": "Honweisel",
        "name_en": "vespiquen",
        "type1": "Käfer",
        "type2": "Flug",
        "stats": {
            "hp": 70,
            "attack": 80,
            "defense": 102,
            "specialAttack": 80,
            "specialDefense": 102,
            "speed": 40
        }
    },
    {
        "id": 417,
        "name_de": "Pachirisu",
        "name_en": "pachirisu",
        "type1": "Elektro",
        "type2": "",
        "stats": {
            "hp": 60,
            "attack": 45,
            "defense": 70,
            "specialAttack": 45,
            "specialDefense": 90,
            "speed": 95
        }
    },
    {
        "id": 418,
        "name_de": "Bamelin",
        "name_en": "buizel",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 55,
            "attack": 65,
            "defense": 35,
            "specialAttack": 60,
            "specialDefense": 30,
            "speed": 85
        }
    },
    {
        "id": 419,
        "name_de": "Bojelin",
        "name_en": "floatzel",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 85,
            "attack": 105,
            "defense": 55,
            "specialAttack": 85,
            "specialDefense": 50,
            "speed": 115
        }
    },
    {
        "id": 420,
        "name_de": "Kikugi",
        "name_en": "cherubi",
        "type1": "Pflanze",
        "type2": "",
        "stats": {
            "hp": 45,
            "attack": 35,
            "defense": 45,
            "specialAttack": 62,
            "specialDefense": 53,
            "speed": 35
        }
    },
    {
        "id": 421,
        "name_de": "Kinoso",
        "name_en": "cherrim",
        "type1": "Pflanze",
        "type2": "",
        "stats": {
            "hp": 70,
            "attack": 60,
            "defense": 70,
            "specialAttack": 87,
            "specialDefense": 78,
            "speed": 85
        }
    },
    {
        "id": 422,
        "name_de": "Schalellos",
        "name_en": "shellos",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 76,
            "attack": 48,
            "defense": 48,
            "specialAttack": 57,
            "specialDefense": 62,
            "speed": 34
        }
    },
    {
        "id": 423,
        "name_de": "Gastrodon",
        "name_en": "gastrodon",
        "type1": "Wasser",
        "type2": "Boden",
        "stats": {
            "hp": 111,
            "attack": 83,
            "defense": 68,
            "specialAttack": 92,
            "specialDefense": 82,
            "speed": 39
        }
    },
    {
        "id": 424,
        "name_de": "Ambidiffel",
        "name_en": "ambipom",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 75,
            "attack": 100,
            "defense": 66,
            "specialAttack": 60,
            "specialDefense": 66,
            "speed": 115
        }
    },
    {
        "id": 425,
        "name_de": "Driftlon",
        "name_en": "drifloon",
        "type1": "Geist",
        "type2": "Flug",
        "stats": {
            "hp": 90,
            "attack": 50,
            "defense": 34,
            "specialAttack": 60,
            "specialDefense": 44,
            "speed": 70
        }
    },
    {
        "id": 426,
        "name_de": "Drifzepeli",
        "name_en": "drifblim",
        "type1": "Geist",
        "type2": "Flug",
        "stats": {
            "hp": 150,
            "attack": 80,
            "defense": 44,
            "specialAttack": 90,
            "specialDefense": 54,
            "speed": 80
        }
    },
    {
        "id": 427,
        "name_de": "Haspiror",
        "name_en": "buneary",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 55,
            "attack": 66,
            "defense": 44,
            "specialAttack": 44,
            "specialDefense": 56,
            "speed": 85
        }
    },
    {
        "id": 428,
        "name_de": "Schlapor",
        "name_en": "lopunny",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 65,
            "attack": 76,
            "defense": 84,
            "specialAttack": 54,
            "specialDefense": 96,
            "speed": 105
        }
    },
    {
        "id": 429,
        "name_de": "Traunmagil",
        "name_en": "mismagius",
        "type1": "Geist",
        "type2": "",
        "stats": {
            "hp": 60,
            "attack": 60,
            "defense": 60,
            "specialAttack": 105,
            "specialDefense": 105,
            "speed": 105
        }
    },
    {
        "id": 430,
        "name_de": "Kramshef",
        "name_en": "honchkrow",
        "type1": "Unlicht",
        "type2": "Flug",
        "stats": {
            "hp": 100,
            "attack": 125,
            "defense": 52,
            "specialAttack": 105,
            "specialDefense": 52,
            "speed": 71
        }
    },
    {
        "id": 431,
        "name_de": "Charmian",
        "name_en": "glameow",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 49,
            "attack": 55,
            "defense": 42,
            "specialAttack": 42,
            "specialDefense": 37,
            "speed": 85
        }
    },
    {
        "id": 432,
        "name_de": "Shnurgarst",
        "name_en": "purugly",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 71,
            "attack": 82,
            "defense": 64,
            "specialAttack": 64,
            "specialDefense": 59,
            "speed": 112
        }
    },
    {
        "id": 433,
        "name_de": "Klingplim",
        "name_en": "chingling",
        "type1": "Psycho",
        "type2": "",
        "stats": {
            "hp": 45,
            "attack": 30,
            "defense": 50,
            "specialAttack": 65,
            "specialDefense": 50,
            "speed": 45
        }
    },
    {
        "id": 434,
        "name_de": "Skunkapuh",
        "name_en": "stunky",
        "type1": "Gift",
        "type2": "Unlicht",
        "stats": {
            "hp": 63,
            "attack": 63,
            "defense": 47,
            "specialAttack": 41,
            "specialDefense": 41,
            "speed": 74
        }
    },
    {
        "id": 435,
        "name_de": "Skuntank",
        "name_en": "skuntank",
        "type1": "Gift",
        "type2": "Unlicht",
        "stats": {
            "hp": 103,
            "attack": 93,
            "defense": 67,
            "specialAttack": 71,
            "specialDefense": 61,
            "speed": 84
        }
    },
    {
        "id": 436,
        "name_de": "Bronzel",
        "name_en": "bronzor",
        "type1": "Stahl",
        "type2": "Psycho",
        "stats": {
            "hp": 57,
            "attack": 24,
            "defense": 86,
            "specialAttack": 24,
            "specialDefense": 86,
            "speed": 23
        }
    },
    {
        "id": 437,
        "name_de": "Bronzong",
        "name_en": "bronzong",
        "type1": "Stahl",
        "type2": "Psycho",
        "stats": {
            "hp": 67,
            "attack": 89,
            "defense": 116,
            "specialAttack": 79,
            "specialDefense": 116,
            "speed": 33
        }
    },
    {
        "id": 438,
        "name_de": "Mobai",
        "name_en": "bonsly",
        "type1": "Gestein",
        "type2": "",
        "stats": {
            "hp": 50,
            "attack": 80,
            "defense": 95,
            "specialAttack": 10,
            "specialDefense": 45,
            "speed": 10
        }
    },
    {
        "id": 439,
        "name_de": "Pantimimi",
        "name_en": "mime-jr",
        "type1": "Psycho",
        "type2": "Fee",
        "stats": {
            "hp": 20,
            "attack": 25,
            "defense": 45,
            "specialAttack": 70,
            "specialDefense": 90,
            "speed": 60
        }
    },
    {
        "id": 440,
        "name_de": "Wonneira",
        "name_en": "happiny",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 100,
            "attack": 5,
            "defense": 5,
            "specialAttack": 15,
            "specialDefense": 65,
            "speed": 30
        }
    },
    {
        "id": 441,
        "name_de": "Plaudagei",
        "name_en": "chatot",
        "type1": "Normal",
        "type2": "Flug",
        "stats": {
            "hp": 76,
            "attack": 65,
            "defense": 45,
            "specialAttack": 92,
            "specialDefense": 42,
            "speed": 91
        }
    },
    {
        "id": 442,
        "name_de": "Kryppuk",
        "name_en": "spiritomb",
        "type1": "Geist",
        "type2": "Unlicht",
        "stats": {
            "hp": 50,
            "attack": 92,
            "defense": 108,
            "specialAttack": 92,
            "specialDefense": 108,
            "speed": 35
        }
    },
    {
        "id": 443,
        "name_de": "Kaumalat",
        "name_en": "gible",
        "type1": "Drache",
        "type2": "Boden",
        "stats": {
            "hp": 58,
            "attack": 70,
            "defense": 45,
            "specialAttack": 40,
            "specialDefense": 45,
            "speed": 42
        }
    },
    {
        "id": 444,
        "name_de": "Knarksel",
        "name_en": "gabite",
        "type1": "Drache",
        "type2": "Boden",
        "stats": {
            "hp": 68,
            "attack": 90,
            "defense": 65,
            "specialAttack": 50,
            "specialDefense": 55,
            "speed": 82
        }
    },
    {
        "id": 445,
        "name_de": "Knakrack",
        "name_en": "garchomp",
        "type1": "Drache",
        "type2": "Boden",
        "stats": {
            "hp": 108,
            "attack": 130,
            "defense": 95,
            "specialAttack": 80,
            "specialDefense": 85,
            "speed": 102
        }
    },
    {
        "id": 446,
        "name_de": "Mampfaxo",
        "name_en": "munchlax",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 135,
            "attack": 85,
            "defense": 40,
            "specialAttack": 40,
            "specialDefense": 85,
            "speed": 5
        }
    },
    {
        "id": 447,
        "name_de": "Riolu",
        "name_en": "riolu",
        "type1": "Kampf",
        "type2": "",
        "stats": {
            "hp": 40,
            "attack": 70,
            "defense": 40,
            "specialAttack": 35,
            "specialDefense": 40,
            "speed": 60
        }
    },
    {
        "id": 448,
        "name_de": "Lucario",
        "name_en": "lucario",
        "type1": "Kampf",
        "type2": "Stahl",
        "stats": {
            "hp": 70,
            "attack": 110,
            "defense": 70,
            "specialAttack": 115,
            "specialDefense": 70,
            "speed": 90
        }
    },
    {
        "id": 449,
        "name_de": "Hippopotas",
        "name_en": "hippopotas",
        "type1": "Boden",
        "type2": "",
        "stats": {
            "hp": 68,
            "attack": 72,
            "defense": 78,
            "specialAttack": 38,
            "specialDefense": 42,
            "speed": 32
        }
    },
    {
        "id": 450,
        "name_de": "Hippoterus",
        "name_en": "hippowdon",
        "type1": "Boden",
        "type2": "",
        "stats": {
            "hp": 108,
            "attack": 112,
            "defense": 118,
            "specialAttack": 68,
            "specialDefense": 72,
            "speed": 47
        }
    },
    {
        "id": 451,
        "name_de": "Pionskora",
        "name_en": "skorupi",
        "type1": "Gift",
        "type2": "Käfer",
        "stats": {
            "hp": 40,
            "attack": 50,
            "defense": 90,
            "specialAttack": 30,
            "specialDefense": 55,
            "speed": 65
        }
    },
    {
        "id": 452,
        "name_de": "Piondragi",
        "name_en": "drapion",
        "type1": "Gift",
        "type2": "Unlicht",
        "stats": {
            "hp": 70,
            "attack": 90,
            "defense": 110,
            "specialAttack": 60,
            "specialDefense": 75,
            "speed": 95
        }
    },
    {
        "id": 453,
        "name_de": "Glibunkel",
        "name_en": "croagunk",
        "type1": "Gift",
        "type2": "Kampf",
        "stats": {
            "hp": 48,
            "attack": 61,
            "defense": 40,
            "specialAttack": 61,
            "specialDefense": 40,
            "speed": 50
        }
    },
    {
        "id": 454,
        "name_de": "Toxiquak",
        "name_en": "toxicroak",
        "type1": "Gift",
        "type2": "Kampf",
        "stats": {
            "hp": 83,
            "attack": 106,
            "defense": 65,
            "specialAttack": 86,
            "specialDefense": 65,
            "speed": 85
        }
    },
    {
        "id": 455,
        "name_de": "Venuflibis",
        "name_en": "carnivine",
        "type1": "Pflanze",
        "type2": "",
        "stats": {
            "hp": 74,
            "attack": 100,
            "defense": 72,
            "specialAttack": 90,
            "specialDefense": 72,
            "speed": 46
        }
    },
    {
        "id": 456,
        "name_de": "Finneon",
        "name_en": "finneon",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 49,
            "attack": 49,
            "defense": 56,
            "specialAttack": 49,
            "specialDefense": 61,
            "speed": 66
        }
    },
    {
        "id": 457,
        "name_de": "Lumineon",
        "name_en": "lumineon",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 69,
            "attack": 69,
            "defense": 76,
            "specialAttack": 69,
            "specialDefense": 86,
            "speed": 91
        }
    },
    {
        "id": 458,
        "name_de": "Mantirps",
        "name_en": "mantyke",
        "type1": "Wasser",
        "type2": "Flug",
        "stats": {
            "hp": 45,
            "attack": 20,
            "defense": 50,
            "specialAttack": 60,
            "specialDefense": 120,
            "speed": 50
        }
    },
    {
        "id": 459,
        "name_de": "Shnebedeck",
        "name_en": "snover",
        "type1": "Pflanze",
        "type2": "Eis",
        "stats": {
            "hp": 60,
            "attack": 62,
            "defense": 50,
            "specialAttack": 62,
            "specialDefense": 60,
            "speed": 40
        }
    },
    {
        "id": 460,
        "name_de": "Rexblisar",
        "name_en": "abomasnow",
        "type1": "Pflanze",
        "type2": "Eis",
        "stats": {
            "hp": 90,
            "attack": 92,
            "defense": 75,
            "specialAttack": 92,
            "specialDefense": 85,
            "speed": 60
        }
    },
    {
        "id": 461,
        "name_de": "Snibunna",
        "name_en": "weavile",
        "type1": "Unlicht",
        "type2": "Eis",
        "stats": {
            "hp": 70,
            "attack": 120,
            "defense": 65,
            "specialAttack": 45,
            "specialDefense": 85,
            "speed": 125
        }
    },
    {
        "id": 462,
        "name_de": "Magnezone",
        "name_en": "magnezone",
        "type1": "Elektro",
        "type2": "Stahl",
        "stats": {
            "hp": 70,
            "attack": 70,
            "defense": 115,
            "specialAttack": 130,
            "specialDefense": 90,
            "speed": 60
        }
    },
    {
        "id": 463,
        "name_de": "Schlurplek",
        "name_en": "lickilicky",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 110,
            "attack": 85,
            "defense": 95,
            "specialAttack": 80,
            "specialDefense": 95,
            "speed": 50
        }
    },
    {
        "id": 464,
        "name_de": "Rihornior",
        "name_en": "rhyperior",
        "type1": "Boden",
        "type2": "Gestein",
        "stats": {
            "hp": 115,
            "attack": 140,
            "defense": 130,
            "specialAttack": 55,
            "specialDefense": 55,
            "speed": 40
        }
    },
    {
        "id": 465,
        "name_de": "Tangoloss",
        "name_en": "tangrowth",
        "type1": "Pflanze",
        "type2": "",
        "stats": {
            "hp": 100,
            "attack": 100,
            "defense": 125,
            "specialAttack": 110,
            "specialDefense": 50,
            "speed": 50
        }
    },
    {
        "id": 466,
        "name_de": "Elevoltek",
        "name_en": "electivire",
        "type1": "Elektro",
        "type2": "",
        "stats": {
            "hp": 75,
            "attack": 123,
            "defense": 67,
            "specialAttack": 95,
            "specialDefense": 85,
            "speed": 95
        }
    },
    {
        "id": 467,
        "name_de": "Magbrant",
        "name_en": "magmortar",
        "type1": "Feuer",
        "type2": "",
        "stats": {
            "hp": 75,
            "attack": 95,
            "defense": 67,
            "specialAttack": 125,
            "specialDefense": 95,
            "speed": 83
        }
    },
    {
        "id": 468,
        "name_de": "Togekiss",
        "name_en": "togekiss",
        "type1": "Fee",
        "type2": "Flug",
        "stats": {
            "hp": 85,
            "attack": 50,
            "defense": 95,
            "specialAttack": 120,
            "specialDefense": 115,
            "speed": 80
        }
    },
    {
        "id": 469,
        "name_de": "Yanmega",
        "name_en": "yanmega",
        "type1": "Käfer",
        "type2": "Flug",
        "stats": {
            "hp": 86,
            "attack": 76,
            "defense": 86,
            "specialAttack": 116,
            "specialDefense": 56,
            "speed": 95
        }
    },
    {
        "id": 470,
        "name_de": "Folipurba",
        "name_en": "leafeon",
        "type1": "Pflanze",
        "type2": "",
        "stats": {
            "hp": 65,
            "attack": 110,
            "defense": 130,
            "specialAttack": 60,
            "specialDefense": 65,
            "speed": 95
        }
    },
    {
        "id": 471,
        "name_de": "Glaziola",
        "name_en": "glaceon",
        "type1": "Eis",
        "type2": "",
        "stats": {
            "hp": 65,
            "attack": 60,
            "defense": 110,
            "specialAttack": 130,
            "specialDefense": 95,
            "speed": 65
        }
    },
    {
        "id": 472,
        "name_de": "Skorgro",
        "name_en": "gliscor",
        "type1": "Boden",
        "type2": "Flug",
        "stats": {
            "hp": 75,
            "attack": 95,
            "defense": 125,
            "specialAttack": 45,
            "specialDefense": 75,
            "speed": 95
        }
    },
    {
        "id": 473,
        "name_de": "Mamutel",
        "name_en": "mamoswine",
        "type1": "Eis",
        "type2": "Boden",
        "stats": {
            "hp": 110,
            "attack": 130,
            "defense": 80,
            "specialAttack": 70,
            "specialDefense": 60,
            "speed": 80
        }
    },
    {
        "id": 474,
        "name_de": "Porygon-Z",
        "name_en": "porygon-z",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 85,
            "attack": 80,
            "defense": 70,
            "specialAttack": 135,
            "specialDefense": 75,
            "speed": 90
        }
    },
    {
        "id": 475,
        "name_de": "Galagladi",
        "name_en": "gallade",
        "type1": "Psycho",
        "type2": "Kampf",
        "stats": {
            "hp": 68,
            "attack": 125,
            "defense": 65,
            "specialAttack": 65,
            "specialDefense": 115,
            "speed": 80
        }
    },
    {
        "id": 476,
        "name_de": "Voluminas",
        "name_en": "probopass",
        "type1": "Gestein",
        "type2": "Stahl",
        "stats": {
            "hp": 60,
            "attack": 55,
            "defense": 145,
            "specialAttack": 75,
            "specialDefense": 150,
            "speed": 40
        }
    },
    {
        "id": 477,
        "name_de": "Zwirrfinst",
        "name_en": "dusknoir",
        "type1": "Geist",
        "type2": "",
        "stats": {
            "hp": 45,
            "attack": 100,
            "defense": 135,
            "specialAttack": 65,
            "specialDefense": 135,
            "speed": 45
        }
    },
    {
        "id": 478,
        "name_de": "Frosdedje",
        "name_en": "froslass",
        "type1": "Eis",
        "type2": "Geist",
        "stats": {
            "hp": 70,
            "attack": 80,
            "defense": 70,
            "specialAttack": 80,
            "specialDefense": 70,
            "speed": 110
        }
    },
    {
        "id": 479,
        "name_de": "Rotom",
        "name_en": "rotom",
        "type1": "Elektro",
        "type2": "Geist",
        "stats": {
            "hp": 50,
            "attack": 50,
            "defense": 77,
            "specialAttack": 95,
            "specialDefense": 77,
            "speed": 91
        }
    },
    {
        "id": 480,
        "name_de": "Selfe",
        "name_en": "uxie",
        "type1": "Psycho",
        "type2": "",
        "stats": {
            "hp": 75,
            "attack": 75,
            "defense": 130,
            "specialAttack": 75,
            "specialDefense": 130,
            "speed": 95
        }
    },
    {
        "id": 481,
        "name_de": "Vesprit",
        "name_en": "mesprit",
        "type1": "Psycho",
        "type2": "",
        "stats": {
            "hp": 80,
            "attack": 105,
            "defense": 105,
            "specialAttack": 105,
            "specialDefense": 105,
            "speed": 80
        }
    },
    {
        "id": 482,
        "name_de": "Tobutz",
        "name_en": "azelf",
        "type1": "Psycho",
        "type2": "",
        "stats": {
            "hp": 75,
            "attack": 125,
            "defense": 70,
            "specialAttack": 125,
            "specialDefense": 70,
            "speed": 115
        }
    },
    {
        "id": 483,
        "name_de": "Dialga",
        "name_en": "dialga",
        "type1": "Stahl",
        "type2": "Drache",
        "stats": {
            "hp": 100,
            "attack": 120,
            "defense": 120,
            "specialAttack": 150,
            "specialDefense": 100,
            "speed": 90
        }
    },
    {
        "id": 484,
        "name_de": "Palkia",
        "name_en": "palkia",
        "type1": "Wasser",
        "type2": "Drache",
        "stats": {
            "hp": 90,
            "attack": 120,
            "defense": 100,
            "specialAttack": 150,
            "specialDefense": 120,
            "speed": 100
        }
    },
    {
        "id": 485,
        "name_de": "Heatran",
        "name_en": "heatran",
        "type1": "Feuer",
        "type2": "Stahl",
        "stats": {
            "hp": 91,
            "attack": 90,
            "defense": 106,
            "specialAttack": 130,
            "specialDefense": 106,
            "speed": 77
        }
    },
    {
        "id": 486,
        "name_de": "Regigigas",
        "name_en": "regigigas",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 110,
            "attack": 160,
            "defense": 110,
            "specialAttack": 80,
            "specialDefense": 110,
            "speed": 100
        }
    },
    {
        "id": 487,
        "name_de": "Giratina",
        "name_en": "giratina-altered",
        "type1": "Geist",
        "type2": "Drache",
        "stats": {
            "hp": 150,
            "attack": 100,
            "defense": 120,
            "specialAttack": 100,
            "specialDefense": 120,
            "speed": 90
        }
    },
    {
        "id": 488,
        "name_de": "Cresselia",
        "name_en": "cresselia",
        "type1": "Psycho",
        "type2": "",
        "stats": {
            "hp": 120,
            "attack": 70,
            "defense": 110,
            "specialAttack": 75,
            "specialDefense": 120,
            "speed": 85
        }
    },
    {
        "id": 489,
        "name_de": "Phione",
        "name_en": "phione",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 80,
            "attack": 80,
            "defense": 80,
            "specialAttack": 80,
            "specialDefense": 80,
            "speed": 80
        }
    },
    {
        "id": 490,
        "name_de": "Manaphy",
        "name_en": "manaphy",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 100,
            "attack": 100,
            "defense": 100,
            "specialAttack": 100,
            "specialDefense": 100,
            "speed": 100
        }
    },
    {
        "id": 491,
        "name_de": "Darkrai",
        "name_en": "darkrai",
        "type1": "Unlicht",
        "type2": "",
        "stats": {
            "hp": 70,
            "attack": 90,
            "defense": 90,
            "specialAttack": 135,
            "specialDefense": 90,
            "speed": 125
        }
    },
    {
        "id": 492,
        "name_de": "Shaymin",
        "name_en": "shaymin-land",
        "type1": "Pflanze",
        "type2": "",
        "stats": {
            "hp": 100,
            "attack": 100,
            "defense": 100,
            "specialAttack": 100,
            "specialDefense": 100,
            "speed": 100
        }
    },
    {
        "id": 493,
        "name_de": "Arceus",
        "name_en": "arceus",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 120,
            "attack": 120,
            "defense": 120,
            "specialAttack": 120,
            "specialDefense": 120,
            "speed": 120
        }
    },
    {
        "id": 494,
        "name_de": "Victini",
        "name_en": "victini",
        "type1": "Psycho",
        "type2": "Feuer",
        "stats": {
            "hp": 100,
            "attack": 100,
            "defense": 100,
            "specialAttack": 100,
            "specialDefense": 100,
            "speed": 100
        }
    },
    {
        "id": 495,
        "name_de": "Serpifeu",
        "name_en": "snivy",
        "type1": "Pflanze",
        "type2": "",
        "stats": {
            "hp": 45,
            "attack": 45,
            "defense": 55,
            "specialAttack": 45,
            "specialDefense": 55,
            "speed": 63
        }
    },
    {
        "id": 496,
        "name_de": "Efoserp",
        "name_en": "servine",
        "type1": "Pflanze",
        "type2": "",
        "stats": {
            "hp": 60,
            "attack": 60,
            "defense": 75,
            "specialAttack": 60,
            "specialDefense": 75,
            "speed": 83
        }
    },
    {
        "id": 497,
        "name_de": "Serpiroyal",
        "name_en": "serperior",
        "type1": "Pflanze",
        "type2": "",
        "stats": {
            "hp": 75,
            "attack": 75,
            "defense": 95,
            "specialAttack": 75,
            "specialDefense": 95,
            "speed": 113
        }
    },
    {
        "id": 498,
        "name_de": "Floink",
        "name_en": "tepig",
        "type1": "Feuer",
        "type2": "",
        "stats": {
            "hp": 65,
            "attack": 63,
            "defense": 45,
            "specialAttack": 45,
            "specialDefense": 45,
            "speed": 45
        }
    },
    {
        "id": 499,
        "name_de": "Ferkokel",
        "name_en": "pignite",
        "type1": "Feuer",
        "type2": "Kampf",
        "stats": {
            "hp": 90,
            "attack": 93,
            "defense": 55,
            "specialAttack": 70,
            "specialDefense": 55,
            "speed": 55
        }
    },
    {
        "id": 500,
        "name_de": "Flambirex",
        "name_en": "emboar",
        "type1": "Feuer",
        "type2": "Kampf",
        "stats": {
            "hp": 110,
            "attack": 123,
            "defense": 65,
            "specialAttack": 100,
            "specialDefense": 65,
            "speed": 65
        }
    },
    {
        "id": 501,
        "name_de": "Ottaro",
        "name_en": "oshawott",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 55,
            "attack": 55,
            "defense": 45,
            "specialAttack": 63,
            "specialDefense": 45,
            "speed": 45
        }
    },
    {
        "id": 502,
        "name_de": "Zwottronin",
        "name_en": "dewott",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 75,
            "attack": 75,
            "defense": 60,
            "specialAttack": 83,
            "specialDefense": 60,
            "speed": 60
        }
    },
    {
        "id": 503,
        "name_de": "Admurai",
        "name_en": "samurott",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 95,
            "attack": 100,
            "defense": 85,
            "specialAttack": 108,
            "specialDefense": 70,
            "speed": 70
        }
    },
    {
        "id": 504,
        "name_de": "Nagelotz",
        "name_en": "patrat",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 45,
            "attack": 55,
            "defense": 39,
            "specialAttack": 35,
            "specialDefense": 39,
            "speed": 42
        }
    },
    {
        "id": 505,
        "name_de": "Kukmarda",
        "name_en": "watchog",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 60,
            "attack": 85,
            "defense": 69,
            "specialAttack": 60,
            "specialDefense": 69,
            "speed": 77
        }
    },
    {
        "id": 506,
        "name_de": "Yorkleff",
        "name_en": "lillipup",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 45,
            "attack": 60,
            "defense": 45,
            "specialAttack": 25,
            "specialDefense": 45,
            "speed": 55
        }
    },
    {
        "id": 507,
        "name_de": "Terribark",
        "name_en": "herdier",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 65,
            "attack": 80,
            "defense": 65,
            "specialAttack": 35,
            "specialDefense": 65,
            "speed": 60
        }
    },
    {
        "id": 508,
        "name_de": "Bissbark",
        "name_en": "stoutland",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 85,
            "attack": 110,
            "defense": 90,
            "specialAttack": 45,
            "specialDefense": 90,
            "speed": 80
        }
    },
    {
        "id": 509,
        "name_de": "Felilou",
        "name_en": "purrloin",
        "type1": "Unlicht",
        "type2": "",
        "stats": {
            "hp": 41,
            "attack": 50,
            "defense": 37,
            "specialAttack": 50,
            "specialDefense": 37,
            "speed": 66
        }
    },
    {
        "id": 510,
        "name_de": "Kleoparda",
        "name_en": "liepard",
        "type1": "Unlicht",
        "type2": "",
        "stats": {
            "hp": 64,
            "attack": 88,
            "defense": 50,
            "specialAttack": 88,
            "specialDefense": 50,
            "speed": 106
        }
    },
    {
        "id": 511,
        "name_de": "Vegimak",
        "name_en": "pansage",
        "type1": "Pflanze",
        "type2": "",
        "stats": {
            "hp": 50,
            "attack": 53,
            "defense": 48,
            "specialAttack": 53,
            "specialDefense": 48,
            "speed": 64
        }
    },
    {
        "id": 512,
        "name_de": "Vegichita",
        "name_en": "simisage",
        "type1": "Pflanze",
        "type2": "",
        "stats": {
            "hp": 75,
            "attack": 98,
            "defense": 63,
            "specialAttack": 98,
            "specialDefense": 63,
            "speed": 101
        }
    },
    {
        "id": 513,
        "name_de": "Grillmak",
        "name_en": "pansear",
        "type1": "Feuer",
        "type2": "",
        "stats": {
            "hp": 50,
            "attack": 53,
            "defense": 48,
            "specialAttack": 53,
            "specialDefense": 48,
            "speed": 64
        }
    },
    {
        "id": 514,
        "name_de": "Grillchita",
        "name_en": "simisear",
        "type1": "Feuer",
        "type2": "",
        "stats": {
            "hp": 75,
            "attack": 98,
            "defense": 63,
            "specialAttack": 98,
            "specialDefense": 63,
            "speed": 101
        }
    },
    {
        "id": 515,
        "name_de": "Sodamak",
        "name_en": "panpour",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 50,
            "attack": 53,
            "defense": 48,
            "specialAttack": 53,
            "specialDefense": 48,
            "speed": 64
        }
    },
    {
        "id": 516,
        "name_de": "Sodachita",
        "name_en": "simipour",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 75,
            "attack": 98,
            "defense": 63,
            "specialAttack": 98,
            "specialDefense": 63,
            "speed": 101
        }
    },
    {
        "id": 517,
        "name_de": "Somniam",
        "name_en": "munna",
        "type1": "Psycho",
        "type2": "",
        "stats": {
            "hp": 76,
            "attack": 25,
            "defense": 45,
            "specialAttack": 67,
            "specialDefense": 55,
            "speed": 24
        }
    },
    {
        "id": 518,
        "name_de": "Somnivora",
        "name_en": "musharna",
        "type1": "Psycho",
        "type2": "",
        "stats": {
            "hp": 116,
            "attack": 55,
            "defense": 85,
            "specialAttack": 107,
            "specialDefense": 95,
            "speed": 29
        }
    },
    {
        "id": 519,
        "name_de": "Dusselgurr",
        "name_en": "pidove",
        "type1": "Normal",
        "type2": "Flug",
        "stats": {
            "hp": 50,
            "attack": 55,
            "defense": 50,
            "specialAttack": 36,
            "specialDefense": 30,
            "speed": 43
        }
    },
    {
        "id": 520,
        "name_de": "Navitaub",
        "name_en": "tranquill",
        "type1": "Normal",
        "type2": "Flug",
        "stats": {
            "hp": 62,
            "attack": 77,
            "defense": 62,
            "specialAttack": 50,
            "specialDefense": 42,
            "speed": 65
        }
    },
    {
        "id": 521,
        "name_de": "Fasasnob",
        "name_en": "unfezant",
        "type1": "Normal",
        "type2": "Flug",
        "stats": {
            "hp": 80,
            "attack": 115,
            "defense": 80,
            "specialAttack": 65,
            "specialDefense": 55,
            "speed": 93
        }
    },
    {
        "id": 522,
        "name_de": "Elezeba",
        "name_en": "blitzle",
        "type1": "Elektro",
        "type2": "",
        "stats": {
            "hp": 45,
            "attack": 60,
            "defense": 32,
            "specialAttack": 50,
            "specialDefense": 32,
            "speed": 76
        }
    },
    {
        "id": 523,
        "name_de": "Zebritz",
        "name_en": "zebstrika",
        "type1": "Elektro",
        "type2": "",
        "stats": {
            "hp": 75,
            "attack": 100,
            "defense": 63,
            "specialAttack": 80,
            "specialDefense": 63,
            "speed": 116
        }
    },
    {
        "id": 524,
        "name_de": "Kiesling",
        "name_en": "roggenrola",
        "type1": "Gestein",
        "type2": "",
        "stats": {
            "hp": 55,
            "attack": 75,
            "defense": 85,
            "specialAttack": 25,
            "specialDefense": 25,
            "speed": 15
        }
    },
    {
        "id": 525,
        "name_de": "Sedimantur",
        "name_en": "boldore",
        "type1": "Gestein",
        "type2": "",
        "stats": {
            "hp": 70,
            "attack": 105,
            "defense": 105,
            "specialAttack": 50,
            "specialDefense": 40,
            "speed": 20
        }
    },
    {
        "id": 526,
        "name_de": "Brockoloss",
        "name_en": "gigalith",
        "type1": "Gestein",
        "type2": "",
        "stats": {
            "hp": 85,
            "attack": 135,
            "defense": 130,
            "specialAttack": 60,
            "specialDefense": 80,
            "speed": 25
        }
    },
    {
        "id": 527,
        "name_de": "Fleknoil",
        "name_en": "woobat",
        "type1": "Psycho",
        "type2": "Flug",
        "stats": {
            "hp": 65,
            "attack": 45,
            "defense": 43,
            "specialAttack": 55,
            "specialDefense": 43,
            "speed": 72
        }
    },
    {
        "id": 528,
        "name_de": "Fletiamo",
        "name_en": "swoobat",
        "type1": "Psycho",
        "type2": "Flug",
        "stats": {
            "hp": 67,
            "attack": 57,
            "defense": 55,
            "specialAttack": 77,
            "specialDefense": 55,
            "speed": 114
        }
    },
    {
        "id": 529,
        "name_de": "Rotomurf",
        "name_en": "drilbur",
        "type1": "Boden",
        "type2": "",
        "stats": {
            "hp": 60,
            "attack": 85,
            "defense": 40,
            "specialAttack": 30,
            "specialDefense": 45,
            "speed": 68
        }
    },
    {
        "id": 530,
        "name_de": "Stalobor",
        "name_en": "excadrill",
        "type1": "Boden",
        "type2": "Stahl",
        "stats": {
            "hp": 110,
            "attack": 135,
            "defense": 60,
            "specialAttack": 50,
            "specialDefense": 65,
            "speed": 88
        }
    },
    {
        "id": 531,
        "name_de": "Ohrdoch",
        "name_en": "audino",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 103,
            "attack": 60,
            "defense": 86,
            "specialAttack": 60,
            "specialDefense": 86,
            "speed": 50
        }
    },
    {
        "id": 532,
        "name_de": "Praktibalk",
        "name_en": "timburr",
        "type1": "Kampf",
        "type2": "",
        "stats": {
            "hp": 75,
            "attack": 80,
            "defense": 55,
            "specialAttack": 25,
            "specialDefense": 35,
            "speed": 35
        }
    },
    {
        "id": 533,
        "name_de": "Strepoli",
        "name_en": "gurdurr",
        "type1": "Kampf",
        "type2": "",
        "stats": {
            "hp": 85,
            "attack": 105,
            "defense": 85,
            "specialAttack": 40,
            "specialDefense": 50,
            "speed": 40
        }
    },
    {
        "id": 534,
        "name_de": "Meistagrif",
        "name_en": "conkeldurr",
        "type1": "Kampf",
        "type2": "",
        "stats": {
            "hp": 105,
            "attack": 140,
            "defense": 95,
            "specialAttack": 55,
            "specialDefense": 65,
            "speed": 45
        }
    },
    {
        "id": 535,
        "name_de": "Schallquap",
        "name_en": "tympole",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 50,
            "attack": 50,
            "defense": 40,
            "specialAttack": 50,
            "specialDefense": 40,
            "speed": 64
        }
    },
    {
        "id": 536,
        "name_de": "Mebrana",
        "name_en": "palpitoad",
        "type1": "Wasser",
        "type2": "Boden",
        "stats": {
            "hp": 75,
            "attack": 65,
            "defense": 55,
            "specialAttack": 65,
            "specialDefense": 55,
            "speed": 69
        }
    },
    {
        "id": 537,
        "name_de": "Branawarz",
        "name_en": "seismitoad",
        "type1": "Wasser",
        "type2": "Boden",
        "stats": {
            "hp": 105,
            "attack": 95,
            "defense": 75,
            "specialAttack": 85,
            "specialDefense": 75,
            "speed": 74
        }
    },
    {
        "id": 538,
        "name_de": "Jiutesto",
        "name_en": "throh",
        "type1": "Kampf",
        "type2": "",
        "stats": {
            "hp": 120,
            "attack": 100,
            "defense": 85,
            "specialAttack": 30,
            "specialDefense": 85,
            "speed": 45
        }
    },
    {
        "id": 539,
        "name_de": "Karadonis",
        "name_en": "sawk",
        "type1": "Kampf",
        "type2": "",
        "stats": {
            "hp": 75,
            "attack": 125,
            "defense": 75,
            "specialAttack": 30,
            "specialDefense": 75,
            "speed": 85
        }
    },
    {
        "id": 540,
        "name_de": "Strawickl",
        "name_en": "sewaddle",
        "type1": "Käfer",
        "type2": "Pflanze",
        "stats": {
            "hp": 45,
            "attack": 53,
            "defense": 70,
            "specialAttack": 40,
            "specialDefense": 60,
            "speed": 42
        }
    },
    {
        "id": 541,
        "name_de": "Folikon",
        "name_en": "swadloon",
        "type1": "Käfer",
        "type2": "Pflanze",
        "stats": {
            "hp": 55,
            "attack": 63,
            "defense": 90,
            "specialAttack": 50,
            "specialDefense": 80,
            "speed": 42
        }
    },
    {
        "id": 542,
        "name_de": "Matrifol",
        "name_en": "leavanny",
        "type1": "Käfer",
        "type2": "Pflanze",
        "stats": {
            "hp": 75,
            "attack": 103,
            "defense": 80,
            "specialAttack": 70,
            "specialDefense": 80,
            "speed": 92
        }
    },
    {
        "id": 543,
        "name_de": "Toxiped",
        "name_en": "venipede",
        "type1": "Käfer",
        "type2": "Gift",
        "stats": {
            "hp": 30,
            "attack": 45,
            "defense": 59,
            "specialAttack": 30,
            "specialDefense": 39,
            "speed": 57
        }
    },
    {
        "id": 544,
        "name_de": "Rollum",
        "name_en": "whirlipede",
        "type1": "Käfer",
        "type2": "Gift",
        "stats": {
            "hp": 40,
            "attack": 55,
            "defense": 99,
            "specialAttack": 40,
            "specialDefense": 79,
            "speed": 47
        }
    },
    {
        "id": 545,
        "name_de": "Cerapendra",
        "name_en": "scolipede",
        "type1": "Käfer",
        "type2": "Gift",
        "stats": {
            "hp": 60,
            "attack": 100,
            "defense": 89,
            "specialAttack": 55,
            "specialDefense": 69,
            "speed": 112
        }
    },
    {
        "id": 546,
        "name_de": "Waumboll",
        "name_en": "cottonee",
        "type1": "Pflanze",
        "type2": "Fee",
        "stats": {
            "hp": 40,
            "attack": 27,
            "defense": 60,
            "specialAttack": 37,
            "specialDefense": 50,
            "speed": 66
        }
    },
    {
        "id": 547,
        "name_de": "Elfun",
        "name_en": "whimsicott",
        "type1": "Pflanze",
        "type2": "Fee",
        "stats": {
            "hp": 60,
            "attack": 67,
            "defense": 85,
            "specialAttack": 77,
            "specialDefense": 75,
            "speed": 116
        }
    },
    {
        "id": 548,
        "name_de": "Lilminip",
        "name_en": "petilil",
        "type1": "Pflanze",
        "type2": "",
        "stats": {
            "hp": 45,
            "attack": 35,
            "defense": 50,
            "specialAttack": 70,
            "specialDefense": 50,
            "speed": 30
        }
    },
    {
        "id": 549,
        "name_de": "Dressella",
        "name_en": "lilligant",
        "type1": "Pflanze",
        "type2": "",
        "stats": {
            "hp": 70,
            "attack": 60,
            "defense": 75,
            "specialAttack": 110,
            "specialDefense": 75,
            "speed": 90
        }
    },
    {
        "id": 550,
        "name_de": "Barschuft",
        "name_en": "basculin-red-striped",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 70,
            "attack": 92,
            "defense": 65,
            "specialAttack": 80,
            "specialDefense": 55,
            "speed": 98
        }
    },
    {
        "id": 551,
        "name_de": "Ganovil",
        "name_en": "sandile",
        "type1": "Boden",
        "type2": "Unlicht",
        "stats": {
            "hp": 50,
            "attack": 72,
            "defense": 35,
            "specialAttack": 35,
            "specialDefense": 35,
            "speed": 65
        }
    },
    {
        "id": 552,
        "name_de": "Rokkaiman",
        "name_en": "krokorok",
        "type1": "Boden",
        "type2": "Unlicht",
        "stats": {
            "hp": 60,
            "attack": 82,
            "defense": 45,
            "specialAttack": 45,
            "specialDefense": 45,
            "speed": 74
        }
    },
    {
        "id": 553,
        "name_de": "Rabigator",
        "name_en": "krookodile",
        "type1": "Boden",
        "type2": "Unlicht",
        "stats": {
            "hp": 95,
            "attack": 117,
            "defense": 80,
            "specialAttack": 65,
            "specialDefense": 70,
            "speed": 92
        }
    },
    {
        "id": 554,
        "name_de": "Flampion",
        "name_en": "darumaka",
        "type1": "Feuer",
        "type2": "",
        "stats": {
            "hp": 70,
            "attack": 90,
            "defense": 45,
            "specialAttack": 15,
            "specialDefense": 45,
            "speed": 50
        }
    },
    {
        "id": 555,
        "name_de": "Flampivian",
        "name_en": "darmanitan-standard",
        "type1": "Feuer",
        "type2": "",
        "stats": {
            "hp": 105,
            "attack": 140,
            "defense": 55,
            "specialAttack": 30,
            "specialDefense": 55,
            "speed": 95
        }
    },
    {
        "id": 556,
        "name_de": "Maracamba",
        "name_en": "maractus",
        "type1": "Pflanze",
        "type2": "",
        "stats": {
            "hp": 75,
            "attack": 86,
            "defense": 67,
            "specialAttack": 106,
            "specialDefense": 67,
            "speed": 60
        }
    },
    {
        "id": 557,
        "name_de": "Lithomith",
        "name_en": "dwebble",
        "type1": "Käfer",
        "type2": "Gestein",
        "stats": {
            "hp": 50,
            "attack": 65,
            "defense": 85,
            "specialAttack": 35,
            "specialDefense": 35,
            "speed": 55
        }
    },
    {
        "id": 558,
        "name_de": "Castellith",
        "name_en": "crustle",
        "type1": "Käfer",
        "type2": "Gestein",
        "stats": {
            "hp": 70,
            "attack": 105,
            "defense": 125,
            "specialAttack": 65,
            "specialDefense": 75,
            "speed": 45
        }
    },
    {
        "id": 559,
        "name_de": "Zurrokex",
        "name_en": "scraggy",
        "type1": "Unlicht",
        "type2": "Kampf",
        "stats": {
            "hp": 50,
            "attack": 75,
            "defense": 70,
            "specialAttack": 35,
            "specialDefense": 70,
            "speed": 48
        }
    },
    {
        "id": 560,
        "name_de": "Irokex",
        "name_en": "scrafty",
        "type1": "Unlicht",
        "type2": "Kampf",
        "stats": {
            "hp": 65,
            "attack": 90,
            "defense": 115,
            "specialAttack": 45,
            "specialDefense": 115,
            "speed": 58
        }
    },
    {
        "id": 561,
        "name_de": "Symvolara",
        "name_en": "sigilyph",
        "type1": "Psycho",
        "type2": "Flug",
        "stats": {
            "hp": 72,
            "attack": 58,
            "defense": 80,
            "specialAttack": 103,
            "specialDefense": 80,
            "speed": 97
        }
    },
    {
        "id": 562,
        "name_de": "Makabaja",
        "name_en": "yamask",
        "type1": "Geist",
        "type2": "",
        "stats": {
            "hp": 38,
            "attack": 30,
            "defense": 85,
            "specialAttack": 55,
            "specialDefense": 65,
            "speed": 30
        }
    },
    {
        "id": 563,
        "name_de": "Echnatoll",
        "name_en": "cofagrigus",
        "type1": "Geist",
        "type2": "",
        "stats": {
            "hp": 58,
            "attack": 50,
            "defense": 145,
            "specialAttack": 95,
            "specialDefense": 105,
            "speed": 30
        }
    },
    {
        "id": 564,
        "name_de": "Galapaflos",
        "name_en": "tirtouga",
        "type1": "Wasser",
        "type2": "Gestein",
        "stats": {
            "hp": 54,
            "attack": 78,
            "defense": 103,
            "specialAttack": 53,
            "specialDefense": 45,
            "speed": 22
        }
    },
    {
        "id": 565,
        "name_de": "Karippas",
        "name_en": "carracosta",
        "type1": "Wasser",
        "type2": "Gestein",
        "stats": {
            "hp": 74,
            "attack": 108,
            "defense": 133,
            "specialAttack": 83,
            "specialDefense": 65,
            "speed": 32
        }
    },
    {
        "id": 566,
        "name_de": "Flapteryx",
        "name_en": "archen",
        "type1": "Gestein",
        "type2": "Flug",
        "stats": {
            "hp": 55,
            "attack": 112,
            "defense": 45,
            "specialAttack": 74,
            "specialDefense": 45,
            "speed": 70
        }
    },
    {
        "id": 567,
        "name_de": "Aeropteryx",
        "name_en": "archeops",
        "type1": "Gestein",
        "type2": "Flug",
        "stats": {
            "hp": 75,
            "attack": 140,
            "defense": 65,
            "specialAttack": 112,
            "specialDefense": 65,
            "speed": 110
        }
    },
    {
        "id": 568,
        "name_de": "Unratütox",
        "name_en": "trubbish",
        "type1": "Gift",
        "type2": "",
        "stats": {
            "hp": 50,
            "attack": 50,
            "defense": 62,
            "specialAttack": 40,
            "specialDefense": 62,
            "speed": 65
        }
    },
    {
        "id": 569,
        "name_de": "Deponitox",
        "name_en": "garbodor",
        "type1": "Gift",
        "type2": "",
        "stats": {
            "hp": 80,
            "attack": 95,
            "defense": 82,
            "specialAttack": 60,
            "specialDefense": 82,
            "speed": 75
        }
    },
    {
        "id": 570,
        "name_de": "Zorua",
        "name_en": "zorua",
        "type1": "Unlicht",
        "type2": "",
        "stats": {
            "hp": 40,
            "attack": 65,
            "defense": 40,
            "specialAttack": 80,
            "specialDefense": 40,
            "speed": 65
        }
    },
    {
        "id": 571,
        "name_de": "Zoroark",
        "name_en": "zoroark",
        "type1": "Unlicht",
        "type2": "",
        "stats": {
            "hp": 60,
            "attack": 105,
            "defense": 60,
            "specialAttack": 120,
            "specialDefense": 60,
            "speed": 105
        }
    },
    {
        "id": 572,
        "name_de": "Picochilla",
        "name_en": "minccino",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 55,
            "attack": 50,
            "defense": 40,
            "specialAttack": 40,
            "specialDefense": 40,
            "speed": 75
        }
    },
    {
        "id": 573,
        "name_de": "Chillabell",
        "name_en": "cinccino",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 75,
            "attack": 95,
            "defense": 60,
            "specialAttack": 65,
            "specialDefense": 60,
            "speed": 115
        }
    },
    {
        "id": 574,
        "name_de": "Mollimorba",
        "name_en": "gothita",
        "type1": "Psycho",
        "type2": "",
        "stats": {
            "hp": 45,
            "attack": 30,
            "defense": 50,
            "specialAttack": 55,
            "specialDefense": 65,
            "speed": 45
        }
    },
    {
        "id": 575,
        "name_de": "Hypnomorba",
        "name_en": "gothorita",
        "type1": "Psycho",
        "type2": "",
        "stats": {
            "hp": 60,
            "attack": 45,
            "defense": 70,
            "specialAttack": 75,
            "specialDefense": 85,
            "speed": 55
        }
    },
    {
        "id": 576,
        "name_de": "Morbitesse",
        "name_en": "gothitelle",
        "type1": "Psycho",
        "type2": "",
        "stats": {
            "hp": 70,
            "attack": 55,
            "defense": 95,
            "specialAttack": 95,
            "specialDefense": 110,
            "speed": 65
        }
    },
    {
        "id": 577,
        "name_de": "Monozyto",
        "name_en": "solosis",
        "type1": "Psycho",
        "type2": "",
        "stats": {
            "hp": 45,
            "attack": 30,
            "defense": 40,
            "specialAttack": 105,
            "specialDefense": 50,
            "speed": 20
        }
    },
    {
        "id": 578,
        "name_de": "Mitodos",
        "name_en": "duosion",
        "type1": "Psycho",
        "type2": "",
        "stats": {
            "hp": 65,
            "attack": 40,
            "defense": 50,
            "specialAttack": 125,
            "specialDefense": 60,
            "speed": 30
        }
    },
    {
        "id": 579,
        "name_de": "Zytomega",
        "name_en": "reuniclus",
        "type1": "Psycho",
        "type2": "",
        "stats": {
            "hp": 110,
            "attack": 65,
            "defense": 75,
            "specialAttack": 125,
            "specialDefense": 85,
            "speed": 30
        }
    },
    {
        "id": 580,
        "name_de": "Piccolente",
        "name_en": "ducklett",
        "type1": "Wasser",
        "type2": "Flug",
        "stats": {
            "hp": 62,
            "attack": 44,
            "defense": 50,
            "specialAttack": 44,
            "specialDefense": 50,
            "speed": 55
        }
    },
    {
        "id": 581,
        "name_de": "Swaroness",
        "name_en": "swanna",
        "type1": "Wasser",
        "type2": "Flug",
        "stats": {
            "hp": 75,
            "attack": 87,
            "defense": 63,
            "specialAttack": 87,
            "specialDefense": 63,
            "speed": 98
        }
    },
    {
        "id": 582,
        "name_de": "Gelatini",
        "name_en": "vanillite",
        "type1": "Eis",
        "type2": "",
        "stats": {
            "hp": 36,
            "attack": 50,
            "defense": 50,
            "specialAttack": 65,
            "specialDefense": 60,
            "speed": 44
        }
    },
    {
        "id": 583,
        "name_de": "Gelatroppo",
        "name_en": "vanillish",
        "type1": "Eis",
        "type2": "",
        "stats": {
            "hp": 51,
            "attack": 65,
            "defense": 65,
            "specialAttack": 80,
            "specialDefense": 75,
            "speed": 59
        }
    },
    {
        "id": 584,
        "name_de": "Gelatwino",
        "name_en": "vanilluxe",
        "type1": "Eis",
        "type2": "",
        "stats": {
            "hp": 71,
            "attack": 95,
            "defense": 85,
            "specialAttack": 110,
            "specialDefense": 95,
            "speed": 79
        }
    },
    {
        "id": 585,
        "name_de": "Sesokitz",
        "name_en": "deerling",
        "type1": "Normal",
        "type2": "Pflanze",
        "stats": {
            "hp": 60,
            "attack": 60,
            "defense": 50,
            "specialAttack": 40,
            "specialDefense": 50,
            "speed": 75
        }
    },
    {
        "id": 586,
        "name_de": "Kronjuwild",
        "name_en": "sawsbuck",
        "type1": "Normal",
        "type2": "Pflanze",
        "stats": {
            "hp": 80,
            "attack": 100,
            "defense": 70,
            "specialAttack": 60,
            "specialDefense": 70,
            "speed": 95
        }
    },
    {
        "id": 587,
        "name_de": "Emolga",
        "name_en": "emolga",
        "type1": "Elektro",
        "type2": "Flug",
        "stats": {
            "hp": 55,
            "attack": 75,
            "defense": 60,
            "specialAttack": 75,
            "specialDefense": 60,
            "speed": 103
        }
    },
    {
        "id": 588,
        "name_de": "Laukaps",
        "name_en": "karrablast",
        "type1": "Käfer",
        "type2": "",
        "stats": {
            "hp": 50,
            "attack": 75,
            "defense": 45,
            "specialAttack": 40,
            "specialDefense": 45,
            "speed": 60
        }
    },
    {
        "id": 589,
        "name_de": "Cavalanzas",
        "name_en": "escavalier",
        "type1": "Käfer",
        "type2": "Stahl",
        "stats": {
            "hp": 70,
            "attack": 135,
            "defense": 105,
            "specialAttack": 60,
            "specialDefense": 105,
            "speed": 20
        }
    },
    {
        "id": 590,
        "name_de": "Tarnpignon",
        "name_en": "foongus",
        "type1": "Pflanze",
        "type2": "Gift",
        "stats": {
            "hp": 69,
            "attack": 55,
            "defense": 45,
            "specialAttack": 55,
            "specialDefense": 55,
            "speed": 15
        }
    },
    {
        "id": 591,
        "name_de": "Hutsassa",
        "name_en": "amoonguss",
        "type1": "Pflanze",
        "type2": "Gift",
        "stats": {
            "hp": 114,
            "attack": 85,
            "defense": 70,
            "specialAttack": 85,
            "specialDefense": 80,
            "speed": 30
        }
    },
    {
        "id": 592,
        "name_de": "Quabbel",
        "name_en": "frillish",
        "type1": "Wasser",
        "type2": "Geist",
        "stats": {
            "hp": 55,
            "attack": 40,
            "defense": 50,
            "specialAttack": 65,
            "specialDefense": 85,
            "speed": 40
        }
    },
    {
        "id": 593,
        "name_de": "Apoquallyp",
        "name_en": "jellicent",
        "type1": "Wasser",
        "type2": "Geist",
        "stats": {
            "hp": 100,
            "attack": 60,
            "defense": 70,
            "specialAttack": 85,
            "specialDefense": 105,
            "speed": 60
        }
    },
    {
        "id": 594,
        "name_de": "Mamolida",
        "name_en": "alomomola",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 165,
            "attack": 75,
            "defense": 80,
            "specialAttack": 40,
            "specialDefense": 45,
            "speed": 65
        }
    },
    {
        "id": 595,
        "name_de": "Wattzapf",
        "name_en": "joltik",
        "type1": "Käfer",
        "type2": "Elektro",
        "stats": {
            "hp": 50,
            "attack": 47,
            "defense": 50,
            "specialAttack": 57,
            "specialDefense": 50,
            "speed": 65
        }
    },
    {
        "id": 596,
        "name_de": "Voltula",
        "name_en": "galvantula",
        "type1": "Käfer",
        "type2": "Elektro",
        "stats": {
            "hp": 70,
            "attack": 77,
            "defense": 60,
            "specialAttack": 97,
            "specialDefense": 60,
            "speed": 108
        }
    },
    {
        "id": 597,
        "name_de": "Kastadur",
        "name_en": "ferroseed",
        "type1": "Pflanze",
        "type2": "Stahl",
        "stats": {
            "hp": 44,
            "attack": 50,
            "defense": 91,
            "specialAttack": 24,
            "specialDefense": 86,
            "speed": 10
        }
    },
    {
        "id": 598,
        "name_de": "Tentantel",
        "name_en": "ferrothorn",
        "type1": "Pflanze",
        "type2": "Stahl",
        "stats": {
            "hp": 74,
            "attack": 94,
            "defense": 131,
            "specialAttack": 54,
            "specialDefense": 116,
            "speed": 20
        }
    },
    {
        "id": 599,
        "name_de": "Klikk",
        "name_en": "klink",
        "type1": "Stahl",
        "type2": "",
        "stats": {
            "hp": 40,
            "attack": 55,
            "defense": 70,
            "specialAttack": 45,
            "specialDefense": 60,
            "speed": 30
        }
    },
    {
        "id": 600,
        "name_de": "Kliklak",
        "name_en": "klang",
        "type1": "Stahl",
        "type2": "",
        "stats": {
            "hp": 60,
            "attack": 80,
            "defense": 95,
            "specialAttack": 70,
            "specialDefense": 85,
            "speed": 50
        }
    },
    {
        "id": 601,
        "name_de": "Klikdiklak",
        "name_en": "klinklang",
        "type1": "Stahl",
        "type2": "",
        "stats": {
            "hp": 60,
            "attack": 100,
            "defense": 115,
            "specialAttack": 70,
            "specialDefense": 85,
            "speed": 90
        }
    },
    {
        "id": 602,
        "name_de": "Zapplardin",
        "name_en": "tynamo",
        "type1": "Elektro",
        "type2": "",
        "stats": {
            "hp": 35,
            "attack": 55,
            "defense": 40,
            "specialAttack": 45,
            "specialDefense": 40,
            "speed": 60
        }
    },
    {
        "id": 603,
        "name_de": "Zapplalek",
        "name_en": "eelektrik",
        "type1": "Elektro",
        "type2": "",
        "stats": {
            "hp": 65,
            "attack": 85,
            "defense": 70,
            "specialAttack": 75,
            "specialDefense": 70,
            "speed": 40
        }
    },
    {
        "id": 604,
        "name_de": "Zapplarang",
        "name_en": "eelektross",
        "type1": "Elektro",
        "type2": "",
        "stats": {
            "hp": 85,
            "attack": 115,
            "defense": 80,
            "specialAttack": 105,
            "specialDefense": 80,
            "speed": 50
        }
    },
    {
        "id": 605,
        "name_de": "Pygraulon",
        "name_en": "elgyem",
        "type1": "Psycho",
        "type2": "",
        "stats": {
            "hp": 55,
            "attack": 55,
            "defense": 55,
            "specialAttack": 85,
            "specialDefense": 55,
            "speed": 30
        }
    },
    {
        "id": 606,
        "name_de": "Megalon",
        "name_en": "beheeyem",
        "type1": "Psycho",
        "type2": "",
        "stats": {
            "hp": 75,
            "attack": 75,
            "defense": 75,
            "specialAttack": 125,
            "specialDefense": 95,
            "speed": 40
        }
    },
    {
        "id": 607,
        "name_de": "Lichtel",
        "name_en": "litwick",
        "type1": "Geist",
        "type2": "Feuer",
        "stats": {
            "hp": 50,
            "attack": 30,
            "defense": 55,
            "specialAttack": 65,
            "specialDefense": 55,
            "speed": 20
        }
    },
    {
        "id": 608,
        "name_de": "Laternecto",
        "name_en": "lampent",
        "type1": "Geist",
        "type2": "Feuer",
        "stats": {
            "hp": 60,
            "attack": 40,
            "defense": 60,
            "specialAttack": 95,
            "specialDefense": 60,
            "speed": 55
        }
    },
    {
        "id": 609,
        "name_de": "Skelabra",
        "name_en": "chandelure",
        "type1": "Geist",
        "type2": "Feuer",
        "stats": {
            "hp": 60,
            "attack": 55,
            "defense": 90,
            "specialAttack": 145,
            "specialDefense": 90,
            "speed": 80
        }
    },
    {
        "id": 610,
        "name_de": "Milza",
        "name_en": "axew",
        "type1": "Drache",
        "type2": "",
        "stats": {
            "hp": 46,
            "attack": 87,
            "defense": 60,
            "specialAttack": 30,
            "specialDefense": 40,
            "speed": 57
        }
    },
    {
        "id": 611,
        "name_de": "Sharfax",
        "name_en": "fraxure",
        "type1": "Drache",
        "type2": "",
        "stats": {
            "hp": 66,
            "attack": 117,
            "defense": 70,
            "specialAttack": 40,
            "specialDefense": 50,
            "speed": 67
        }
    },
    {
        "id": 612,
        "name_de": "Maxax",
        "name_en": "haxorus",
        "type1": "Drache",
        "type2": "",
        "stats": {
            "hp": 76,
            "attack": 147,
            "defense": 90,
            "specialAttack": 60,
            "specialDefense": 70,
            "speed": 97
        }
    },
    {
        "id": 613,
        "name_de": "Petznief",
        "name_en": "cubchoo",
        "type1": "Eis",
        "type2": "",
        "stats": {
            "hp": 55,
            "attack": 70,
            "defense": 40,
            "specialAttack": 60,
            "specialDefense": 40,
            "speed": 40
        }
    },
    {
        "id": 614,
        "name_de": "Siberio",
        "name_en": "beartic",
        "type1": "Eis",
        "type2": "",
        "stats": {
            "hp": 95,
            "attack": 130,
            "defense": 80,
            "specialAttack": 70,
            "specialDefense": 80,
            "speed": 50
        }
    },
    {
        "id": 615,
        "name_de": "Frigometri",
        "name_en": "cryogonal",
        "type1": "Eis",
        "type2": "",
        "stats": {
            "hp": 80,
            "attack": 50,
            "defense": 50,
            "specialAttack": 95,
            "specialDefense": 135,
            "speed": 105
        }
    },
    {
        "id": 616,
        "name_de": "Schnuthelm",
        "name_en": "shelmet",
        "type1": "Käfer",
        "type2": "",
        "stats": {
            "hp": 50,
            "attack": 40,
            "defense": 85,
            "specialAttack": 40,
            "specialDefense": 65,
            "speed": 25
        }
    },
    {
        "id": 617,
        "name_de": "Hydragil",
        "name_en": "accelgor",
        "type1": "Käfer",
        "type2": "",
        "stats": {
            "hp": 80,
            "attack": 70,
            "defense": 40,
            "specialAttack": 100,
            "specialDefense": 60,
            "speed": 145
        }
    },
    {
        "id": 618,
        "name_de": "Flunschlik",
        "name_en": "stunfisk",
        "type1": "Boden",
        "type2": "Elektro",
        "stats": {
            "hp": 109,
            "attack": 66,
            "defense": 84,
            "specialAttack": 81,
            "specialDefense": 99,
            "speed": 32
        }
    },
    {
        "id": 619,
        "name_de": "Lin-Fu",
        "name_en": "mienfoo",
        "type1": "Kampf",
        "type2": "",
        "stats": {
            "hp": 45,
            "attack": 85,
            "defense": 50,
            "specialAttack": 55,
            "specialDefense": 50,
            "speed": 65
        }
    },
    {
        "id": 620,
        "name_de": "Wie-Shu",
        "name_en": "mienshao",
        "type1": "Kampf",
        "type2": "",
        "stats": {
            "hp": 65,
            "attack": 125,
            "defense": 60,
            "specialAttack": 95,
            "specialDefense": 60,
            "speed": 105
        }
    },
    {
        "id": 621,
        "name_de": "Shardrago",
        "name_en": "druddigon",
        "type1": "Drache",
        "type2": "",
        "stats": {
            "hp": 77,
            "attack": 120,
            "defense": 90,
            "specialAttack": 60,
            "specialDefense": 90,
            "speed": 48
        }
    },
    {
        "id": 622,
        "name_de": "Golbit",
        "name_en": "golett",
        "type1": "Boden",
        "type2": "Geist",
        "stats": {
            "hp": 59,
            "attack": 74,
            "defense": 50,
            "specialAttack": 35,
            "specialDefense": 50,
            "speed": 35
        }
    },
    {
        "id": 623,
        "name_de": "Golgantes",
        "name_en": "golurk",
        "type1": "Boden",
        "type2": "Geist",
        "stats": {
            "hp": 89,
            "attack": 124,
            "defense": 80,
            "specialAttack": 55,
            "specialDefense": 80,
            "speed": 55
        }
    },
    {
        "id": 624,
        "name_de": "Gladiantri",
        "name_en": "pawniard",
        "type1": "Unlicht",
        "type2": "Stahl",
        "stats": {
            "hp": 45,
            "attack": 85,
            "defense": 70,
            "specialAttack": 40,
            "specialDefense": 40,
            "speed": 60
        }
    },
    {
        "id": 625,
        "name_de": "Caesurio",
        "name_en": "bisharp",
        "type1": "Unlicht",
        "type2": "Stahl",
        "stats": {
            "hp": 65,
            "attack": 125,
            "defense": 100,
            "specialAttack": 60,
            "specialDefense": 70,
            "speed": 70
        }
    },
    {
        "id": 626,
        "name_de": "Bisofank",
        "name_en": "bouffalant",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 95,
            "attack": 110,
            "defense": 95,
            "specialAttack": 40,
            "specialDefense": 95,
            "speed": 55
        }
    },
    {
        "id": 627,
        "name_de": "Geronimatz",
        "name_en": "rufflet",
        "type1": "Normal",
        "type2": "Flug",
        "stats": {
            "hp": 70,
            "attack": 83,
            "defense": 50,
            "specialAttack": 37,
            "specialDefense": 50,
            "speed": 60
        }
    },
    {
        "id": 628,
        "name_de": "Washakwil",
        "name_en": "braviary",
        "type1": "Normal",
        "type2": "Flug",
        "stats": {
            "hp": 100,
            "attack": 123,
            "defense": 75,
            "specialAttack": 57,
            "specialDefense": 75,
            "speed": 80
        }
    },
    {
        "id": 629,
        "name_de": "Skallyk",
        "name_en": "vullaby",
        "type1": "Unlicht",
        "type2": "Flug",
        "stats": {
            "hp": 70,
            "attack": 55,
            "defense": 75,
            "specialAttack": 45,
            "specialDefense": 65,
            "speed": 60
        }
    },
    {
        "id": 630,
        "name_de": "Grypheldis",
        "name_en": "mandibuzz",
        "type1": "Unlicht",
        "type2": "Flug",
        "stats": {
            "hp": 110,
            "attack": 65,
            "defense": 105,
            "specialAttack": 55,
            "specialDefense": 95,
            "speed": 80
        }
    },
    {
        "id": 631,
        "name_de": "Furnifraß",
        "name_en": "heatmor",
        "type1": "Feuer",
        "type2": "",
        "stats": {
            "hp": 85,
            "attack": 97,
            "defense": 66,
            "specialAttack": 105,
            "specialDefense": 66,
            "speed": 65
        }
    },
    {
        "id": 632,
        "name_de": "Fermicula",
        "name_en": "durant",
        "type1": "Käfer",
        "type2": "Stahl",
        "stats": {
            "hp": 58,
            "attack": 109,
            "defense": 112,
            "specialAttack": 48,
            "specialDefense": 48,
            "speed": 109
        }
    },
    {
        "id": 633,
        "name_de": "Kapuno",
        "name_en": "deino",
        "type1": "Unlicht",
        "type2": "Drache",
        "stats": {
            "hp": 52,
            "attack": 65,
            "defense": 50,
            "specialAttack": 45,
            "specialDefense": 50,
            "speed": 38
        }
    },
    {
        "id": 634,
        "name_de": "Duodino",
        "name_en": "zweilous",
        "type1": "Unlicht",
        "type2": "Drache",
        "stats": {
            "hp": 72,
            "attack": 85,
            "defense": 70,
            "specialAttack": 65,
            "specialDefense": 70,
            "speed": 58
        }
    },
    {
        "id": 635,
        "name_de": "Trikephalo",
        "name_en": "hydreigon",
        "type1": "Unlicht",
        "type2": "Drache",
        "stats": {
            "hp": 92,
            "attack": 105,
            "defense": 90,
            "specialAttack": 125,
            "specialDefense": 90,
            "speed": 98
        }
    },
    {
        "id": 636,
        "name_de": "Ignivor",
        "name_en": "larvesta",
        "type1": "Käfer",
        "type2": "Feuer",
        "stats": {
            "hp": 55,
            "attack": 85,
            "defense": 55,
            "specialAttack": 50,
            "specialDefense": 55,
            "speed": 60
        }
    },
    {
        "id": 637,
        "name_de": "Ramoth",
        "name_en": "volcarona",
        "type1": "Käfer",
        "type2": "Feuer",
        "stats": {
            "hp": 85,
            "attack": 60,
            "defense": 65,
            "specialAttack": 135,
            "specialDefense": 105,
            "speed": 100
        }
    },
    {
        "id": 638,
        "name_de": "Kobalium",
        "name_en": "cobalion",
        "type1": "Stahl",
        "type2": "Kampf",
        "stats": {
            "hp": 91,
            "attack": 90,
            "defense": 129,
            "specialAttack": 90,
            "specialDefense": 72,
            "speed": 108
        }
    },
    {
        "id": 639,
        "name_de": "Terrakium",
        "name_en": "terrakion",
        "type1": "Gestein",
        "type2": "Kampf",
        "stats": {
            "hp": 91,
            "attack": 129,
            "defense": 90,
            "specialAttack": 72,
            "specialDefense": 90,
            "speed": 108
        }
    },
    {
        "id": 640,
        "name_de": "Viridium",
        "name_en": "virizion",
        "type1": "Pflanze",
        "type2": "Kampf",
        "stats": {
            "hp": 91,
            "attack": 90,
            "defense": 72,
            "specialAttack": 90,
            "specialDefense": 129,
            "speed": 108
        }
    },
    {
        "id": 641,
        "name_de": "Boreos",
        "name_en": "tornadus-incarnate",
        "type1": "Flug",
        "type2": "",
        "stats": {
            "hp": 79,
            "attack": 115,
            "defense": 70,
            "specialAttack": 125,
            "specialDefense": 80,
            "speed": 111
        }
    },
    {
        "id": 642,
        "name_de": "Voltolos",
        "name_en": "thundurus-incarnate",
        "type1": "Elektro",
        "type2": "Flug",
        "stats": {
            "hp": 79,
            "attack": 115,
            "defense": 70,
            "specialAttack": 125,
            "specialDefense": 80,
            "speed": 111
        }
    },
    {
        "id": 643,
        "name_de": "Reshiram",
        "name_en": "reshiram",
        "type1": "Drache",
        "type2": "Feuer",
        "stats": {
            "hp": 100,
            "attack": 120,
            "defense": 100,
            "specialAttack": 150,
            "specialDefense": 120,
            "speed": 90
        }
    },
    {
        "id": 644,
        "name_de": "Zekrom",
        "name_en": "zekrom",
        "type1": "Drache",
        "type2": "Elektro",
        "stats": {
            "hp": 100,
            "attack": 150,
            "defense": 120,
            "specialAttack": 120,
            "specialDefense": 100,
            "speed": 90
        }
    },
    {
        "id": 645,
        "name_de": "Demeteros",
        "name_en": "landorus-incarnate",
        "type1": "Boden",
        "type2": "Flug",
        "stats": {
            "hp": 89,
            "attack": 125,
            "defense": 90,
            "specialAttack": 115,
            "specialDefense": 80,
            "speed": 101
        }
    },
    {
        "id": 646,
        "name_de": "Kyurem",
        "name_en": "kyurem",
        "type1": "Drache",
        "type2": "Eis",
        "stats": {
            "hp": 125,
            "attack": 130,
            "defense": 90,
            "specialAttack": 130,
            "specialDefense": 90,
            "speed": 95
        }
    },
    {
        "id": 647,
        "name_de": "Keldeo",
        "name_en": "keldeo-ordinary",
        "type1": "Wasser",
        "type2": "Kampf",
        "stats": {
            "hp": 91,
            "attack": 72,
            "defense": 90,
            "specialAttack": 129,
            "specialDefense": 90,
            "speed": 108
        }
    },
    {
        "id": 648,
        "name_de": "Meloetta",
        "name_en": "meloetta-aria",
        "type1": "Normal",
        "type2": "Psycho",
        "stats": {
            "hp": 100,
            "attack": 77,
            "defense": 77,
            "specialAttack": 128,
            "specialDefense": 128,
            "speed": 90
        }
    },
    {
        "id": 649,
        "name_de": "Genesect",
        "name_en": "genesect",
        "type1": "Käfer",
        "type2": "Stahl",
        "stats": {
            "hp": 71,
            "attack": 120,
            "defense": 95,
            "specialAttack": 120,
            "specialDefense": 95,
            "speed": 99
        }
    },
    {
        "id": 650,
        "name_de": "Igamaro",
        "name_en": "chespin",
        "type1": "Pflanze",
        "type2": "",
        "stats": {
            "hp": 56,
            "attack": 61,
            "defense": 65,
            "specialAttack": 48,
            "specialDefense": 45,
            "speed": 38
        }
    },
    {
        "id": 651,
        "name_de": "Igastarnish",
        "name_en": "quilladin",
        "type1": "Pflanze",
        "type2": "",
        "stats": {
            "hp": 61,
            "attack": 78,
            "defense": 95,
            "specialAttack": 56,
            "specialDefense": 58,
            "speed": 57
        }
    },
    {
        "id": 652,
        "name_de": "Brigaron",
        "name_en": "chesnaught",
        "type1": "Pflanze",
        "type2": "Kampf",
        "stats": {
            "hp": 88,
            "attack": 107,
            "defense": 122,
            "specialAttack": 74,
            "specialDefense": 75,
            "speed": 64
        }
    },
    {
        "id": 653,
        "name_de": "Fynx",
        "name_en": "fennekin",
        "type1": "Feuer",
        "type2": "",
        "stats": {
            "hp": 40,
            "attack": 45,
            "defense": 40,
            "specialAttack": 62,
            "specialDefense": 60,
            "speed": 60
        }
    },
    {
        "id": 654,
        "name_de": "Rutena",
        "name_en": "braixen",
        "type1": "Feuer",
        "type2": "",
        "stats": {
            "hp": 59,
            "attack": 59,
            "defense": 58,
            "specialAttack": 90,
            "specialDefense": 70,
            "speed": 73
        }
    },
    {
        "id": 655,
        "name_de": "Fennexis",
        "name_en": "delphox",
        "type1": "Feuer",
        "type2": "Psycho",
        "stats": {
            "hp": 75,
            "attack": 69,
            "defense": 72,
            "specialAttack": 114,
            "specialDefense": 100,
            "speed": 104
        }
    },
    {
        "id": 656,
        "name_de": "Froxy",
        "name_en": "froakie",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 41,
            "attack": 56,
            "defense": 40,
            "specialAttack": 62,
            "specialDefense": 44,
            "speed": 71
        }
    },
    {
        "id": 657,
        "name_de": "Amphizel",
        "name_en": "frogadier",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 54,
            "attack": 63,
            "defense": 52,
            "specialAttack": 83,
            "specialDefense": 56,
            "speed": 97
        }
    },
    {
        "id": 658,
        "name_de": "Quajutsu",
        "name_en": "greninja",
        "type1": "Wasser",
        "type2": "Unlicht",
        "stats": {
            "hp": 72,
            "attack": 95,
            "defense": 67,
            "specialAttack": 103,
            "specialDefense": 71,
            "speed": 122
        }
    },
    {
        "id": 659,
        "name_de": "Scoppel",
        "name_en": "bunnelby",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 38,
            "attack": 36,
            "defense": 38,
            "specialAttack": 32,
            "specialDefense": 36,
            "speed": 57
        }
    },
    {
        "id": 660,
        "name_de": "Grebbit",
        "name_en": "diggersby",
        "type1": "Normal",
        "type2": "Boden",
        "stats": {
            "hp": 85,
            "attack": 56,
            "defense": 77,
            "specialAttack": 50,
            "specialDefense": 77,
            "speed": 78
        }
    },
    {
        "id": 661,
        "name_de": "Dartiri",
        "name_en": "fletchling",
        "type1": "Normal",
        "type2": "Flug",
        "stats": {
            "hp": 45,
            "attack": 50,
            "defense": 43,
            "specialAttack": 40,
            "specialDefense": 38,
            "speed": 62
        }
    },
    {
        "id": 662,
        "name_de": "Dartignis",
        "name_en": "fletchinder",
        "type1": "Feuer",
        "type2": "Flug",
        "stats": {
            "hp": 62,
            "attack": 73,
            "defense": 55,
            "specialAttack": 56,
            "specialDefense": 52,
            "speed": 84
        }
    },
    {
        "id": 663,
        "name_de": "Fiaro",
        "name_en": "talonflame",
        "type1": "Feuer",
        "type2": "Flug",
        "stats": {
            "hp": 78,
            "attack": 81,
            "defense": 71,
            "specialAttack": 74,
            "specialDefense": 69,
            "speed": 126
        }
    },
    {
        "id": 664,
        "name_de": "Purmel",
        "name_en": "scatterbug",
        "type1": "Käfer",
        "type2": "",
        "stats": {
            "hp": 38,
            "attack": 35,
            "defense": 40,
            "specialAttack": 27,
            "specialDefense": 25,
            "speed": 35
        }
    },
    {
        "id": 665,
        "name_de": "Puponcho",
        "name_en": "spewpa",
        "type1": "Käfer",
        "type2": "",
        "stats": {
            "hp": 45,
            "attack": 22,
            "defense": 60,
            "specialAttack": 27,
            "specialDefense": 30,
            "speed": 29
        }
    },
    {
        "id": 666,
        "name_de": "Vivillon",
        "name_en": "vivillon",
        "type1": "Käfer",
        "type2": "Flug",
        "stats": {
            "hp": 80,
            "attack": 52,
            "defense": 50,
            "specialAttack": 90,
            "specialDefense": 50,
            "speed": 89
        }
    },
    {
        "id": 667,
        "name_de": "Leufeo",
        "name_en": "litleo",
        "type1": "Feuer",
        "type2": "Normal",
        "stats": {
            "hp": 62,
            "attack": 50,
            "defense": 58,
            "specialAttack": 73,
            "specialDefense": 54,
            "speed": 72
        }
    },
    {
        "id": 668,
        "name_de": "Pyroleo",
        "name_en": "pyroar",
        "type1": "Feuer",
        "type2": "Normal",
        "stats": {
            "hp": 86,
            "attack": 68,
            "defense": 72,
            "specialAttack": 109,
            "specialDefense": 66,
            "speed": 106
        }
    },
    {
        "id": 669,
        "name_de": "Flabébé",
        "name_en": "flabebe",
        "type1": "Fee",
        "type2": "",
        "stats": {
            "hp": 44,
            "attack": 38,
            "defense": 39,
            "specialAttack": 61,
            "specialDefense": 79,
            "speed": 42
        }
    },
    {
        "id": 670,
        "name_de": "Floette",
        "name_en": "floette",
        "type1": "Fee",
        "type2": "",
        "stats": {
            "hp": 54,
            "attack": 45,
            "defense": 47,
            "specialAttack": 75,
            "specialDefense": 98,
            "speed": 52
        }
    },
    {
        "id": 671,
        "name_de": "Florges",
        "name_en": "florges",
        "type1": "Fee",
        "type2": "",
        "stats": {
            "hp": 78,
            "attack": 65,
            "defense": 68,
            "specialAttack": 112,
            "specialDefense": 154,
            "speed": 75
        }
    },
    {
        "id": 672,
        "name_de": "Mähikel",
        "name_en": "skiddo",
        "type1": "Pflanze",
        "type2": "",
        "stats": {
            "hp": 66,
            "attack": 65,
            "defense": 48,
            "specialAttack": 62,
            "specialDefense": 57,
            "speed": 52
        }
    },
    {
        "id": 673,
        "name_de": "Chevrumm",
        "name_en": "gogoat",
        "type1": "Pflanze",
        "type2": "",
        "stats": {
            "hp": 123,
            "attack": 100,
            "defense": 62,
            "specialAttack": 97,
            "specialDefense": 81,
            "speed": 68
        }
    },
    {
        "id": 674,
        "name_de": "Pam-Pam",
        "name_en": "pancham",
        "type1": "Kampf",
        "type2": "",
        "stats": {
            "hp": 67,
            "attack": 82,
            "defense": 62,
            "specialAttack": 46,
            "specialDefense": 48,
            "speed": 43
        }
    },
    {
        "id": 675,
        "name_de": "Pandagro",
        "name_en": "pangoro",
        "type1": "Kampf",
        "type2": "Unlicht",
        "stats": {
            "hp": 95,
            "attack": 124,
            "defense": 78,
            "specialAttack": 69,
            "specialDefense": 71,
            "speed": 58
        }
    },
    {
        "id": 676,
        "name_de": "Coiffwaff",
        "name_en": "furfrou",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 75,
            "attack": 80,
            "defense": 60,
            "specialAttack": 65,
            "specialDefense": 90,
            "speed": 102
        }
    },
    {
        "id": 677,
        "name_de": "Psiau",
        "name_en": "espurr",
        "type1": "Psycho",
        "type2": "",
        "stats": {
            "hp": 62,
            "attack": 48,
            "defense": 54,
            "specialAttack": 63,
            "specialDefense": 60,
            "speed": 68
        }
    },
    {
        "id": 678,
        "name_de": "Psiaugon",
        "name_en": "meowstic-male",
        "type1": "Psycho",
        "type2": "",
        "stats": {
            "hp": 74,
            "attack": 48,
            "defense": 76,
            "specialAttack": 83,
            "specialDefense": 81,
            "speed": 104
        }
    },
    {
        "id": 679,
        "name_de": "Gramokles",
        "name_en": "honedge",
        "type1": "Stahl",
        "type2": "Geist",
        "stats": {
            "hp": 45,
            "attack": 80,
            "defense": 100,
            "specialAttack": 35,
            "specialDefense": 37,
            "speed": 28
        }
    },
    {
        "id": 680,
        "name_de": "Duokles",
        "name_en": "doublade",
        "type1": "Stahl",
        "type2": "Geist",
        "stats": {
            "hp": 59,
            "attack": 110,
            "defense": 150,
            "specialAttack": 45,
            "specialDefense": 49,
            "speed": 35
        }
    },
    {
        "id": 681,
        "name_de": "Durengard (Schild)",
        "name_en": "aegislash-shield",
        "type1": "Stahl",
        "type2": "Geist",
        "stats": {
            "hp": 60,
            "attack": 50,
            "defense": 140,
            "specialAttack": 50,
            "specialDefense": 140,
            "speed": 60
        }
    },
    {
        "id": 682,
        "name_de": "Parfi",
        "name_en": "spritzee",
        "type1": "Fee",
        "type2": "",
        "stats": {
            "hp": 78,
            "attack": 52,
            "defense": 60,
            "specialAttack": 63,
            "specialDefense": 65,
            "speed": 23
        }
    },
    {
        "id": 683,
        "name_de": "Parfinesse",
        "name_en": "aromatisse",
        "type1": "Fee",
        "type2": "",
        "stats": {
            "hp": 101,
            "attack": 72,
            "defense": 72,
            "specialAttack": 99,
            "specialDefense": 89,
            "speed": 29
        }
    },
    {
        "id": 684,
        "name_de": "Flauschling",
        "name_en": "swirlix",
        "type1": "Fee",
        "type2": "",
        "stats": {
            "hp": 62,
            "attack": 48,
            "defense": 66,
            "specialAttack": 59,
            "specialDefense": 57,
            "speed": 49
        }
    },
    {
        "id": 685,
        "name_de": "Sabbaione",
        "name_en": "slurpuff",
        "type1": "Fee",
        "type2": "",
        "stats": {
            "hp": 82,
            "attack": 80,
            "defense": 86,
            "specialAttack": 85,
            "specialDefense": 75,
            "speed": 72
        }
    },
    {
        "id": 686,
        "name_de": "Iscalar",
        "name_en": "inkay",
        "type1": "Unlicht",
        "type2": "Psycho",
        "stats": {
            "hp": 53,
            "attack": 54,
            "defense": 53,
            "specialAttack": 37,
            "specialDefense": 46,
            "speed": 45
        }
    },
    {
        "id": 687,
        "name_de": "Calamanero",
        "name_en": "malamar",
        "type1": "Unlicht",
        "type2": "Psycho",
        "stats": {
            "hp": 86,
            "attack": 92,
            "defense": 88,
            "specialAttack": 68,
            "specialDefense": 75,
            "speed": 73
        }
    },
    {
        "id": 688,
        "name_de": "Bithora",
        "name_en": "binacle",
        "type1": "Gestein",
        "type2": "Wasser",
        "stats": {
            "hp": 42,
            "attack": 52,
            "defense": 67,
            "specialAttack": 39,
            "specialDefense": 56,
            "speed": 50
        }
    },
    {
        "id": 689,
        "name_de": "Thanathora",
        "name_en": "barbaracle",
        "type1": "Gestein",
        "type2": "Wasser",
        "stats": {
            "hp": 72,
            "attack": 105,
            "defense": 115,
            "specialAttack": 54,
            "specialDefense": 86,
            "speed": 68
        }
    },
    {
        "id": 690,
        "name_de": "Algitt",
        "name_en": "skrelp",
        "type1": "Gift",
        "type2": "Wasser",
        "stats": {
            "hp": 50,
            "attack": 60,
            "defense": 60,
            "specialAttack": 60,
            "specialDefense": 60,
            "speed": 30
        }
    },
    {
        "id": 691,
        "name_de": "Tandrak",
        "name_en": "dragalge",
        "type1": "Gift",
        "type2": "Drache",
        "stats": {
            "hp": 65,
            "attack": 75,
            "defense": 90,
            "specialAttack": 97,
            "specialDefense": 123,
            "speed": 44
        }
    },
    {
        "id": 692,
        "name_de": "Scampisto",
        "name_en": "clauncher",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 50,
            "attack": 53,
            "defense": 62,
            "specialAttack": 58,
            "specialDefense": 63,
            "speed": 44
        }
    },
    {
        "id": 693,
        "name_de": "Wummer",
        "name_en": "clawitzer",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 71,
            "attack": 73,
            "defense": 88,
            "specialAttack": 120,
            "specialDefense": 89,
            "speed": 59
        }
    },
    {
        "id": 694,
        "name_de": "Eguana",
        "name_en": "helioptile",
        "type1": "Elektro",
        "type2": "Normal",
        "stats": {
            "hp": 44,
            "attack": 38,
            "defense": 33,
            "specialAttack": 61,
            "specialDefense": 43,
            "speed": 70
        }
    },
    {
        "id": 695,
        "name_de": "Elezard",
        "name_en": "heliolisk",
        "type1": "Elektro",
        "type2": "Normal",
        "stats": {
            "hp": 62,
            "attack": 55,
            "defense": 52,
            "specialAttack": 109,
            "specialDefense": 94,
            "speed": 109
        }
    },
    {
        "id": 696,
        "name_de": "Balgoras",
        "name_en": "tyrunt",
        "type1": "Gestein",
        "type2": "Drache",
        "stats": {
            "hp": 58,
            "attack": 89,
            "defense": 77,
            "specialAttack": 45,
            "specialDefense": 45,
            "speed": 48
        }
    },
    {
        "id": 697,
        "name_de": "Monargoras",
        "name_en": "tyrantrum",
        "type1": "Gestein",
        "type2": "Drache",
        "stats": {
            "hp": 82,
            "attack": 121,
            "defense": 119,
            "specialAttack": 69,
            "specialDefense": 59,
            "speed": 71
        }
    },
    {
        "id": 698,
        "name_de": "Amarino",
        "name_en": "amaura",
        "type1": "Gestein",
        "type2": "Eis",
        "stats": {
            "hp": 77,
            "attack": 59,
            "defense": 50,
            "specialAttack": 67,
            "specialDefense": 63,
            "speed": 46
        }
    },
    {
        "id": 699,
        "name_de": "Amagarga",
        "name_en": "aurorus",
        "type1": "Gestein",
        "type2": "Eis",
        "stats": {
            "hp": 123,
            "attack": 77,
            "defense": 72,
            "specialAttack": 99,
            "specialDefense": 92,
            "speed": 58
        }
    },
    {
        "id": 700,
        "name_de": "Feelinara",
        "name_en": "sylveon",
        "type1": "Fee",
        "type2": "",
        "stats": {
            "hp": 95,
            "attack": 65,
            "defense": 65,
            "specialAttack": 110,
            "specialDefense": 130,
            "speed": 60
        }
    },
    {
        "id": 701,
        "name_de": "Resladero",
        "name_en": "hawlucha",
        "type1": "Kampf",
        "type2": "Flug",
        "stats": {
            "hp": 78,
            "attack": 92,
            "defense": 75,
            "specialAttack": 74,
            "specialDefense": 63,
            "speed": 118
        }
    },
    {
        "id": 702,
        "name_de": "Dedenne",
        "name_en": "dedenne",
        "type1": "Elektro",
        "type2": "Fee",
        "stats": {
            "hp": 67,
            "attack": 58,
            "defense": 57,
            "specialAttack": 81,
            "specialDefense": 67,
            "speed": 101
        }
    },
    {
        "id": 703,
        "name_de": "Rocara",
        "name_en": "carbink",
        "type1": "Gestein",
        "type2": "Fee",
        "stats": {
            "hp": 50,
            "attack": 50,
            "defense": 150,
            "specialAttack": 50,
            "specialDefense": 150,
            "speed": 50
        }
    },
    {
        "id": 704,
        "name_de": "Viscora",
        "name_en": "goomy",
        "type1": "Drache",
        "type2": "",
        "stats": {
            "hp": 45,
            "attack": 50,
            "defense": 35,
            "specialAttack": 55,
            "specialDefense": 75,
            "speed": 40
        }
    },
    {
        "id": 705,
        "name_de": "Viscargot",
        "name_en": "sliggoo",
        "type1": "Drache",
        "type2": "",
        "stats": {
            "hp": 68,
            "attack": 75,
            "defense": 53,
            "specialAttack": 83,
            "specialDefense": 113,
            "speed": 60
        }
    },
    {
        "id": 706,
        "name_de": "Viscogon",
        "name_en": "goodra",
        "type1": "Drache",
        "type2": "",
        "stats": {
            "hp": 90,
            "attack": 100,
            "defense": 70,
            "specialAttack": 110,
            "specialDefense": 150,
            "speed": 80
        }
    },
    {
        "id": 707,
        "name_de": "Clavion",
        "name_en": "klefki",
        "type1": "Stahl",
        "type2": "Fee",
        "stats": {
            "hp": 57,
            "attack": 80,
            "defense": 91,
            "specialAttack": 80,
            "specialDefense": 87,
            "speed": 75
        }
    },
    {
        "id": 708,
        "name_de": "Paragoni",
        "name_en": "phantump",
        "type1": "Geist",
        "type2": "Pflanze",
        "stats": {
            "hp": 43,
            "attack": 70,
            "defense": 48,
            "specialAttack": 50,
            "specialDefense": 60,
            "speed": 38
        }
    },
    {
        "id": 709,
        "name_de": "Trombork",
        "name_en": "trevenant",
        "type1": "Geist",
        "type2": "Pflanze",
        "stats": {
            "hp": 85,
            "attack": 110,
            "defense": 76,
            "specialAttack": 65,
            "specialDefense": 82,
            "speed": 56
        }
    },
    {
        "id": 710,
        "name_de": "Irrbis",
        "name_en": "pumpkaboo-average",
        "type1": "Geist",
        "type2": "Pflanze",
        "stats": {
            "hp": 49,
            "attack": 66,
            "defense": 70,
            "specialAttack": 44,
            "specialDefense": 55,
            "speed": 51
        }
    },
    {
        "id": 711,
        "name_de": "Pumpdjinn",
        "name_en": "gourgeist-average",
        "type1": "Geist",
        "type2": "Pflanze",
        "stats": {
            "hp": 65,
            "attack": 90,
            "defense": 122,
            "specialAttack": 58,
            "specialDefense": 75,
            "speed": 84
        }
    },
    {
        "id": 712,
        "name_de": "Arktip",
        "name_en": "bergmite",
        "type1": "Eis",
        "type2": "",
        "stats": {
            "hp": 55,
            "attack": 69,
            "defense": 85,
            "specialAttack": 32,
            "specialDefense": 35,
            "speed": 28
        }
    },
    {
        "id": 713,
        "name_de": "Arktilas",
        "name_en": "avalugg",
        "type1": "Eis",
        "type2": "",
        "stats": {
            "hp": 95,
            "attack": 117,
            "defense": 184,
            "specialAttack": 44,
            "specialDefense": 46,
            "speed": 28
        }
    },
    {
        "id": 714,
        "name_de": "eF-eM",
        "name_en": "noibat",
        "type1": "Flug",
        "type2": "Drache",
        "stats": {
            "hp": 40,
            "attack": 30,
            "defense": 35,
            "specialAttack": 45,
            "specialDefense": 40,
            "speed": 55
        }
    },
    {
        "id": 715,
        "name_de": "UHaFnir",
        "name_en": "noivern",
        "type1": "Flug",
        "type2": "Drache",
        "stats": {
            "hp": 85,
            "attack": 70,
            "defense": 80,
            "specialAttack": 97,
            "specialDefense": 80,
            "speed": 123
        }
    },
    {
        "id": 716,
        "name_de": "Xerneas",
        "name_en": "xerneas",
        "type1": "Fee",
        "type2": "",
        "stats": {
            "hp": 126,
            "attack": 131,
            "defense": 95,
            "specialAttack": 131,
            "specialDefense": 98,
            "speed": 99
        }
    },
    {
        "id": 717,
        "name_de": "Yveltal",
        "name_en": "yveltal",
        "type1": "Unlicht",
        "type2": "Flug",
        "stats": {
            "hp": 126,
            "attack": 131,
            "defense": 95,
            "specialAttack": 131,
            "specialDefense": 98,
            "speed": 99
        }
    },
    {
        "id": 718,
        "name_de": "Zygarde",
        "name_en": "zygarde-50",
        "type1": "Drache",
        "type2": "Boden",
        "stats": {
            "hp": 108,
            "attack": 100,
            "defense": 121,
            "specialAttack": 81,
            "specialDefense": 95,
            "speed": 95
        }
    },
    {
        "id": 719,
        "name_de": "Diancie",
        "name_en": "diancie",
        "type1": "Gestein",
        "type2": "Fee",
        "stats": {
            "hp": 50,
            "attack": 100,
            "defense": 150,
            "specialAttack": 100,
            "specialDefense": 150,
            "speed": 50
        }
    },
    {
        "id": 720,
        "name_de": "Hoopa",
        "name_en": "hoopa",
        "type1": "Psycho",
        "type2": "Geist",
        "stats": {
            "hp": 80,
            "attack": 110,
            "defense": 60,
            "specialAttack": 150,
            "specialDefense": 130,
            "speed": 70
        }
    },
    {
        "id": 721,
        "name_de": "Volcanion",
        "name_en": "volcanion",
        "type1": "Feuer",
        "type2": "Wasser",
        "stats": {
            "hp": 80,
            "attack": 110,
            "defense": 120,
            "specialAttack": 130,
            "specialDefense": 90,
            "speed": 70
        }
    },
    {
        "id": 722,
        "name_de": "Bauz",
        "name_en": "rowlet",
        "type1": "Pflanze",
        "type2": "Flug",
        "stats": {
            "hp": 68,
            "attack": 55,
            "defense": 55,
            "specialAttack": 50,
            "specialDefense": 50,
            "speed": 42
        }
    },
    {
        "id": 723,
        "name_de": "Arboretoss",
        "name_en": "dartrix",
        "type1": "Pflanze",
        "type2": "Flug",
        "stats": {
            "hp": 78,
            "attack": 75,
            "defense": 75,
            "specialAttack": 70,
            "specialDefense": 70,
            "speed": 52
        }
    },
    {
        "id": 724,
        "name_de": "Silvarro",
        "name_en": "decidueye",
        "type1": "Pflanze",
        "type2": "Geist",
        "stats": {
            "hp": 78,
            "attack": 107,
            "defense": 75,
            "specialAttack": 100,
            "specialDefense": 100,
            "speed": 70
        }
    },
    {
        "id": 725,
        "name_de": "Flamiau",
        "name_en": "litten",
        "type1": "Feuer",
        "type2": "",
        "stats": {
            "hp": 45,
            "attack": 65,
            "defense": 40,
            "specialAttack": 60,
            "specialDefense": 40,
            "speed": 70
        }
    },
    {
        "id": 726,
        "name_de": "Miezunder",
        "name_en": "torracat",
        "type1": "Feuer",
        "type2": "",
        "stats": {
            "hp": 65,
            "attack": 85,
            "defense": 50,
            "specialAttack": 80,
            "specialDefense": 50,
            "speed": 90
        }
    },
    {
        "id": 727,
        "name_de": "Fuegro",
        "name_en": "incineroar",
        "type1": "Feuer",
        "type2": "Unlicht",
        "stats": {
            "hp": 95,
            "attack": 115,
            "defense": 90,
            "specialAttack": 80,
            "specialDefense": 90,
            "speed": 60
        }
    },
    {
        "id": 728,
        "name_de": "Robball",
        "name_en": "popplio",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 50,
            "attack": 54,
            "defense": 54,
            "specialAttack": 66,
            "specialDefense": 56,
            "speed": 40
        }
    },
    {
        "id": 729,
        "name_de": "Marikeck",
        "name_en": "brionne",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 60,
            "attack": 69,
            "defense": 69,
            "specialAttack": 91,
            "specialDefense": 81,
            "speed": 50
        }
    },
    {
        "id": 730,
        "name_de": "Primarene",
        "name_en": "primarina",
        "type1": "Wasser",
        "type2": "Fee",
        "stats": {
            "hp": 80,
            "attack": 74,
            "defense": 74,
            "specialAttack": 126,
            "specialDefense": 116,
            "speed": 60
        }
    },
    {
        "id": 731,
        "name_de": "Peppeck",
        "name_en": "pikipek",
        "type1": "Normal",
        "type2": "Flug",
        "stats": {
            "hp": 35,
            "attack": 75,
            "defense": 30,
            "specialAttack": 30,
            "specialDefense": 30,
            "speed": 65
        }
    },
    {
        "id": 732,
        "name_de": "Trompeck",
        "name_en": "trumbeak",
        "type1": "Normal",
        "type2": "Flug",
        "stats": {
            "hp": 55,
            "attack": 85,
            "defense": 50,
            "specialAttack": 40,
            "specialDefense": 50,
            "speed": 75
        }
    },
    {
        "id": 733,
        "name_de": "Tukanon",
        "name_en": "toucannon",
        "type1": "Normal",
        "type2": "Flug",
        "stats": {
            "hp": 80,
            "attack": 120,
            "defense": 75,
            "specialAttack": 75,
            "specialDefense": 75,
            "speed": 60
        }
    },
    {
        "id": 734,
        "name_de": "Mangunior",
        "name_en": "yungoos",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 48,
            "attack": 70,
            "defense": 30,
            "specialAttack": 30,
            "specialDefense": 30,
            "speed": 45
        }
    },
    {
        "id": 735,
        "name_de": "Manguspektor",
        "name_en": "gumshoos",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 88,
            "attack": 110,
            "defense": 60,
            "specialAttack": 55,
            "specialDefense": 60,
            "speed": 45
        }
    },
    {
        "id": 736,
        "name_de": "Mabula",
        "name_en": "grubbin",
        "type1": "Käfer",
        "type2": "",
        "stats": {
            "hp": 47,
            "attack": 62,
            "defense": 45,
            "specialAttack": 55,
            "specialDefense": 45,
            "speed": 46
        }
    },
    {
        "id": 737,
        "name_de": "Akkup",
        "name_en": "charjabug",
        "type1": "Käfer",
        "type2": "Elektro",
        "stats": {
            "hp": 57,
            "attack": 82,
            "defense": 95,
            "specialAttack": 55,
            "specialDefense": 75,
            "speed": 36
        }
    },
    {
        "id": 738,
        "name_de": "Donarion",
        "name_en": "vikavolt",
        "type1": "Käfer",
        "type2": "Elektro",
        "stats": {
            "hp": 77,
            "attack": 70,
            "defense": 90,
            "specialAttack": 145,
            "specialDefense": 75,
            "speed": 43
        }
    },
    {
        "id": 739,
        "name_de": "Krabbox",
        "name_en": "crabrawler",
        "type1": "Kampf",
        "type2": "",
        "stats": {
            "hp": 47,
            "attack": 82,
            "defense": 57,
            "specialAttack": 42,
            "specialDefense": 47,
            "speed": 63
        }
    },
    {
        "id": 740,
        "name_de": "Krawell",
        "name_en": "crabominable",
        "type1": "Kampf",
        "type2": "Eis",
        "stats": {
            "hp": 97,
            "attack": 132,
            "defense": 77,
            "specialAttack": 62,
            "specialDefense": 67,
            "speed": 43
        }
    },
    {
        "id": 741,
        "name_de": "Choreogel",
        "name_en": "oricorio-baile",
        "type1": "Feuer",
        "type2": "Flug",
        "stats": {
            "hp": 75,
            "attack": 70,
            "defense": 70,
            "specialAttack": 98,
            "specialDefense": 70,
            "speed": 93
        }
    },
    {
        "id": 742,
        "name_de": "Wommel",
        "name_en": "cutiefly",
        "type1": "Käfer",
        "type2": "Fee",
        "stats": {
            "hp": 40,
            "attack": 45,
            "defense": 40,
            "specialAttack": 55,
            "specialDefense": 40,
            "speed": 84
        }
    },
    {
        "id": 743,
        "name_de": "Bandelby",
        "name_en": "ribombee",
        "type1": "Käfer",
        "type2": "Fee",
        "stats": {
            "hp": 60,
            "attack": 55,
            "defense": 60,
            "specialAttack": 95,
            "specialDefense": 70,
            "speed": 124
        }
    },
    {
        "id": 744,
        "name_de": "Wuffels",
        "name_en": "rockruff",
        "type1": "Gestein",
        "type2": "",
        "stats": {
            "hp": 45,
            "attack": 65,
            "defense": 40,
            "specialAttack": 30,
            "specialDefense": 40,
            "speed": 60
        }
    },
    {
        "id": 745,
        "name_de": "Wolwerock",
        "name_en": "lycanroc-midday",
        "type1": "Gestein",
        "type2": "",
        "stats": {
            "hp": 75,
            "attack": 115,
            "defense": 65,
            "specialAttack": 55,
            "specialDefense": 65,
            "speed": 112
        }
    },
    {
        "id": 746,
        "name_de": "Lusardin",
        "name_en": "wishiwashi-solo",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 45,
            "attack": 20,
            "defense": 20,
            "specialAttack": 25,
            "specialDefense": 25,
            "speed": 40
        }
    },
    {
        "id": 747,
        "name_de": "Garstella",
        "name_en": "mareanie",
        "type1": "Gift",
        "type2": "Wasser",
        "stats": {
            "hp": 50,
            "attack": 53,
            "defense": 62,
            "specialAttack": 43,
            "specialDefense": 52,
            "speed": 45
        }
    },
    {
        "id": 748,
        "name_de": "Aggrostella",
        "name_en": "toxapex",
        "type1": "Gift",
        "type2": "Wasser",
        "stats": {
            "hp": 50,
            "attack": 63,
            "defense": 152,
            "specialAttack": 53,
            "specialDefense": 142,
            "speed": 35
        }
    },
    {
        "id": 749,
        "name_de": "Pampuli",
        "name_en": "mudbray",
        "type1": "Boden",
        "type2": "",
        "stats": {
            "hp": 70,
            "attack": 100,
            "defense": 70,
            "specialAttack": 45,
            "specialDefense": 55,
            "speed": 45
        }
    },
    {
        "id": 750,
        "name_de": "Pampross",
        "name_en": "mudsdale",
        "type1": "Boden",
        "type2": "",
        "stats": {
            "hp": 100,
            "attack": 125,
            "defense": 100,
            "specialAttack": 55,
            "specialDefense": 85,
            "speed": 35
        }
    },
    {
        "id": 751,
        "name_de": "Araqua",
        "name_en": "dewpider",
        "type1": "Wasser",
        "type2": "Käfer",
        "stats": {
            "hp": 38,
            "attack": 40,
            "defense": 52,
            "specialAttack": 40,
            "specialDefense": 72,
            "speed": 27
        }
    },
    {
        "id": 752,
        "name_de": "Aranestro",
        "name_en": "araquanid",
        "type1": "Wasser",
        "type2": "Käfer",
        "stats": {
            "hp": 68,
            "attack": 70,
            "defense": 92,
            "specialAttack": 50,
            "specialDefense": 132,
            "speed": 42
        }
    },
    {
        "id": 753,
        "name_de": "Imantis",
        "name_en": "fomantis",
        "type1": "Pflanze",
        "type2": "",
        "stats": {
            "hp": 40,
            "attack": 55,
            "defense": 35,
            "specialAttack": 50,
            "specialDefense": 35,
            "speed": 35
        }
    },
    {
        "id": 754,
        "name_de": "Mantidea",
        "name_en": "lurantis",
        "type1": "Pflanze",
        "type2": "",
        "stats": {
            "hp": 70,
            "attack": 105,
            "defense": 90,
            "specialAttack": 80,
            "specialDefense": 90,
            "speed": 45
        }
    },
    {
        "id": 755,
        "name_de": "Bubungus",
        "name_en": "morelull",
        "type1": "Pflanze",
        "type2": "Fee",
        "stats": {
            "hp": 40,
            "attack": 35,
            "defense": 55,
            "specialAttack": 65,
            "specialDefense": 75,
            "speed": 15
        }
    },
    {
        "id": 756,
        "name_de": "Lamellux",
        "name_en": "shiinotic",
        "type1": "Pflanze",
        "type2": "Fee",
        "stats": {
            "hp": 60,
            "attack": 45,
            "defense": 80,
            "specialAttack": 90,
            "specialDefense": 100,
            "speed": 30
        }
    },
    {
        "id": 757,
        "name_de": "Molunk",
        "name_en": "salandit",
        "type1": "Gift",
        "type2": "Feuer",
        "stats": {
            "hp": 48,
            "attack": 44,
            "defense": 40,
            "specialAttack": 71,
            "specialDefense": 40,
            "speed": 77
        }
    },
    {
        "id": 758,
        "name_de": "Amfira",
        "name_en": "salazzle",
        "type1": "Gift",
        "type2": "Feuer",
        "stats": {
            "hp": 68,
            "attack": 64,
            "defense": 60,
            "specialAttack": 111,
            "specialDefense": 60,
            "speed": 117
        }
    },
    {
        "id": 759,
        "name_de": "Velursi",
        "name_en": "stufful",
        "type1": "Normal",
        "type2": "Kampf",
        "stats": {
            "hp": 70,
            "attack": 75,
            "defense": 50,
            "specialAttack": 45,
            "specialDefense": 50,
            "speed": 50
        }
    },
    {
        "id": 760,
        "name_de": "Kosturso",
        "name_en": "bewear",
        "type1": "Normal",
        "type2": "Kampf",
        "stats": {
            "hp": 120,
            "attack": 125,
            "defense": 80,
            "specialAttack": 55,
            "specialDefense": 60,
            "speed": 60
        }
    },
    {
        "id": 761,
        "name_de": "Frubberl",
        "name_en": "bounsweet",
        "type1": "Pflanze",
        "type2": "",
        "stats": {
            "hp": 42,
            "attack": 30,
            "defense": 38,
            "specialAttack": 30,
            "specialDefense": 38,
            "speed": 32
        }
    },
    {
        "id": 762,
        "name_de": "Frubaila",
        "name_en": "steenee",
        "type1": "Pflanze",
        "type2": "",
        "stats": {
            "hp": 52,
            "attack": 40,
            "defense": 48,
            "specialAttack": 40,
            "specialDefense": 48,
            "speed": 62
        }
    },
    {
        "id": 763,
        "name_de": "Fruyal",
        "name_en": "tsareena",
        "type1": "Pflanze",
        "type2": "",
        "stats": {
            "hp": 72,
            "attack": 120,
            "defense": 98,
            "specialAttack": 50,
            "specialDefense": 98,
            "speed": 72
        }
    },
    {
        "id": 764,
        "name_de": "Curelei",
        "name_en": "comfey",
        "type1": "Fee",
        "type2": "",
        "stats": {
            "hp": 51,
            "attack": 52,
            "defense": 90,
            "specialAttack": 82,
            "specialDefense": 110,
            "speed": 100
        }
    },
    {
        "id": 765,
        "name_de": "Kommandutan",
        "name_en": "oranguru",
        "type1": "Normal",
        "type2": "Psycho",
        "stats": {
            "hp": 90,
            "attack": 60,
            "defense": 80,
            "specialAttack": 90,
            "specialDefense": 110,
            "speed": 60
        }
    },
    {
        "id": 766,
        "name_de": "Quartermak",
        "name_en": "passimian",
        "type1": "Kampf",
        "type2": "",
        "stats": {
            "hp": 100,
            "attack": 120,
            "defense": 90,
            "specialAttack": 40,
            "specialDefense": 60,
            "speed": 80
        }
    },
    {
        "id": 767,
        "name_de": "Reißlaus",
        "name_en": "wimpod",
        "type1": "Käfer",
        "type2": "Wasser",
        "stats": {
            "hp": 25,
            "attack": 35,
            "defense": 40,
            "specialAttack": 20,
            "specialDefense": 30,
            "speed": 80
        }
    },
    {
        "id": 768,
        "name_de": "Tectass",
        "name_en": "golisopod",
        "type1": "Käfer",
        "type2": "Wasser",
        "stats": {
            "hp": 75,
            "attack": 125,
            "defense": 140,
            "specialAttack": 60,
            "specialDefense": 90,
            "speed": 40
        }
    },
    {
        "id": 769,
        "name_de": "Sankabuh",
        "name_en": "sandygast",
        "type1": "Geist",
        "type2": "Boden",
        "stats": {
            "hp": 55,
            "attack": 55,
            "defense": 80,
            "specialAttack": 70,
            "specialDefense": 45,
            "speed": 15
        }
    },
    {
        "id": 770,
        "name_de": "Colossand",
        "name_en": "palossand",
        "type1": "Geist",
        "type2": "Boden",
        "stats": {
            "hp": 85,
            "attack": 75,
            "defense": 110,
            "specialAttack": 100,
            "specialDefense": 75,
            "speed": 35
        }
    },
    {
        "id": 771,
        "name_de": "Gufa",
        "name_en": "pyukumuku",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 55,
            "attack": 60,
            "defense": 130,
            "specialAttack": 30,
            "specialDefense": 130,
            "speed": 5
        }
    },
    {
        "id": 772,
        "name_de": "Typ:Null",
        "name_en": "type-null",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 95,
            "attack": 95,
            "defense": 95,
            "specialAttack": 95,
            "specialDefense": 95,
            "speed": 59
        }
    },
    {
        "id": 773,
        "name_de": "Amigento",
        "name_en": "silvally",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 95,
            "attack": 95,
            "defense": 95,
            "specialAttack": 95,
            "specialDefense": 95,
            "speed": 95
        }
    },
    {
        "id": 774,
        "name_de": "Meteno",
        "name_en": "minior-red-meteor",
        "type1": "Gestein",
        "type2": "Flug",
        "stats": {
            "hp": 60,
            "attack": 60,
            "defense": 100,
            "specialAttack": 60,
            "specialDefense": 100,
            "speed": 60
        }
    },
    {
        "id": 775,
        "name_de": "Koalelu",
        "name_en": "komala",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 65,
            "attack": 115,
            "defense": 65,
            "specialAttack": 75,
            "specialDefense": 95,
            "speed": 65
        }
    },
    {
        "id": 776,
        "name_de": "Tortunator",
        "name_en": "turtonator",
        "type1": "Feuer",
        "type2": "Drache",
        "stats": {
            "hp": 60,
            "attack": 78,
            "defense": 135,
            "specialAttack": 91,
            "specialDefense": 85,
            "speed": 36
        }
    },
    {
        "id": 777,
        "name_de": "Togedemaru",
        "name_en": "togedemaru",
        "type1": "Elektro",
        "type2": "Stahl",
        "stats": {
            "hp": 65,
            "attack": 98,
            "defense": 63,
            "specialAttack": 40,
            "specialDefense": 73,
            "speed": 96
        }
    },
    {
        "id": 778,
        "name_de": "Mimigma",
        "name_en": "mimikyu-disguised",
        "type1": "Geist",
        "type2": "Fee",
        "stats": {
            "hp": 55,
            "attack": 90,
            "defense": 80,
            "specialAttack": 50,
            "specialDefense": 105,
            "speed": 96
        }
    },
    {
        "id": 779,
        "name_de": "Knirfish",
        "name_en": "bruxish",
        "type1": "Wasser",
        "type2": "Psycho",
        "stats": {
            "hp": 68,
            "attack": 105,
            "defense": 70,
            "specialAttack": 70,
            "specialDefense": 70,
            "speed": 92
        }
    },
    {
        "id": 780,
        "name_de": "Sen-Long",
        "name_en": "drampa",
        "type1": "Normal",
        "type2": "Drache",
        "stats": {
            "hp": 78,
            "attack": 60,
            "defense": 85,
            "specialAttack": 135,
            "specialDefense": 91,
            "speed": 36
        }
    },
    {
        "id": 781,
        "name_de": "Moruda",
        "name_en": "dhelmise",
        "type1": "Geist",
        "type2": "Pflanze",
        "stats": {
            "hp": 70,
            "attack": 131,
            "defense": 100,
            "specialAttack": 86,
            "specialDefense": 90,
            "speed": 40
        }
    },
    {
        "id": 782,
        "name_de": "Miniras",
        "name_en": "jangmo-o",
        "type1": "Drache",
        "type2": "",
        "stats": {
            "hp": 45,
            "attack": 55,
            "defense": 65,
            "specialAttack": 45,
            "specialDefense": 45,
            "speed": 45
        }
    },
    {
        "id": 783,
        "name_de": "Mediras",
        "name_en": "hakamo-o",
        "type1": "Drache",
        "type2": "Kampf",
        "stats": {
            "hp": 55,
            "attack": 75,
            "defense": 90,
            "specialAttack": 65,
            "specialDefense": 70,
            "speed": 65
        }
    },
    {
        "id": 784,
        "name_de": "Grandiras",
        "name_en": "kommo-o",
        "type1": "Drache",
        "type2": "Kampf",
        "stats": {
            "hp": 75,
            "attack": 110,
            "defense": 125,
            "specialAttack": 100,
            "specialDefense": 105,
            "speed": 85
        }
    },
    {
        "id": 785,
        "name_de": "Kapu-Riki",
        "name_en": "tapu-koko",
        "type1": "Elektro",
        "type2": "Fee",
        "stats": {
            "hp": 70,
            "attack": 115,
            "defense": 85,
            "specialAttack": 95,
            "specialDefense": 75,
            "speed": 130
        }
    },
    {
        "id": 786,
        "name_de": "Kapu-Fala",
        "name_en": "tapu-lele",
        "type1": "Psycho",
        "type2": "Fee",
        "stats": {
            "hp": 70,
            "attack": 85,
            "defense": 75,
            "specialAttack": 130,
            "specialDefense": 115,
            "speed": 95
        }
    },
    {
        "id": 787,
        "name_de": "Kapu-Toro",
        "name_en": "tapu-bulu",
        "type1": "Pflanze",
        "type2": "Fee",
        "stats": {
            "hp": 70,
            "attack": 130,
            "defense": 115,
            "specialAttack": 85,
            "specialDefense": 95,
            "speed": 75
        }
    },
    {
        "id": 788,
        "name_de": "Kapu-Kime",
        "name_en": "tapu-fini",
        "type1": "Wasser",
        "type2": "Fee",
        "stats": {
            "hp": 70,
            "attack": 75,
            "defense": 115,
            "specialAttack": 95,
            "specialDefense": 130,
            "speed": 85
        }
    },
    {
        "id": 789,
        "name_de": "Cosmog",
        "name_en": "cosmog",
        "type1": "Psycho",
        "type2": "",
        "stats": {
            "hp": 43,
            "attack": 29,
            "defense": 31,
            "specialAttack": 29,
            "specialDefense": 31,
            "speed": 37
        }
    },
    {
        "id": 790,
        "name_de": "Cosmovum",
        "name_en": "cosmoem",
        "type1": "Psycho",
        "type2": "",
        "stats": {
            "hp": 43,
            "attack": 29,
            "defense": 131,
            "specialAttack": 29,
            "specialDefense": 131,
            "speed": 37
        }
    },
    {
        "id": 791,
        "name_de": "Solgaleo",
        "name_en": "solgaleo",
        "type1": "Psycho",
        "type2": "Stahl",
        "stats": {
            "hp": 137,
            "attack": 137,
            "defense": 107,
            "specialAttack": 113,
            "specialDefense": 89,
            "speed": 97
        }
    },
    {
        "id": 792,
        "name_de": "Lunala",
        "name_en": "lunala",
        "type1": "Psycho",
        "type2": "Geist",
        "stats": {
            "hp": 137,
            "attack": 113,
            "defense": 89,
            "specialAttack": 137,
            "specialDefense": 107,
            "speed": 97
        }
    },
    {
        "id": 793,
        "name_de": "Anego",
        "name_en": "nihilego",
        "type1": "Gestein",
        "type2": "Gift",
        "stats": {
            "hp": 109,
            "attack": 53,
            "defense": 47,
            "specialAttack": 127,
            "specialDefense": 131,
            "speed": 103
        }
    },
    {
        "id": 794,
        "name_de": "Masskito",
        "name_en": "buzzwole",
        "type1": "Käfer",
        "type2": "Kampf",
        "stats": {
            "hp": 107,
            "attack": 139,
            "defense": 139,
            "specialAttack": 53,
            "specialDefense": 53,
            "speed": 79
        }
    },
    {
        "id": 795,
        "name_de": "Schabelle",
        "name_en": "pheromosa",
        "type1": "Käfer",
        "type2": "Kampf",
        "stats": {
            "hp": 71,
            "attack": 137,
            "defense": 37,
            "specialAttack": 137,
            "specialDefense": 37,
            "speed": 151
        }
    },
    {
        "id": 796,
        "name_de": "Voltriant",
        "name_en": "xurkitree",
        "type1": "Elektro",
        "type2": "",
        "stats": {
            "hp": 83,
            "attack": 89,
            "defense": 71,
            "specialAttack": 173,
            "specialDefense": 71,
            "speed": 83
        }
    },
    {
        "id": 797,
        "name_de": "Kaguron",
        "name_en": "celesteela",
        "type1": "Stahl",
        "type2": "Flug",
        "stats": {
            "hp": 97,
            "attack": 101,
            "defense": 103,
            "specialAttack": 107,
            "specialDefense": 101,
            "speed": 61
        }
    },
    {
        "id": 798,
        "name_de": "Katagami",
        "name_en": "kartana",
        "type1": "Pflanze",
        "type2": "Stahl",
        "stats": {
            "hp": 59,
            "attack": 181,
            "defense": 131,
            "specialAttack": 59,
            "specialDefense": 31,
            "speed": 109
        }
    },
    {
        "id": 799,
        "name_de": "Schlingking",
        "name_en": "guzzlord",
        "type1": "Unlicht",
        "type2": "Drache",
        "stats": {
            "hp": 223,
            "attack": 101,
            "defense": 53,
            "specialAttack": 97,
            "specialDefense": 53,
            "speed": 43
        }
    },
    {
        "id": 800,
        "name_de": "Necrozma",
        "name_en": "necrozma",
        "type1": "Psycho",
        "type2": "",
        "stats": {
            "hp": 97,
            "attack": 107,
            "defense": 101,
            "specialAttack": 127,
            "specialDefense": 89,
            "speed": 79
        }
    },
    {
        "id": 801,
        "name_de": "Magearna",
        "name_en": "magearna",
        "type1": "Stahl",
        "type2": "Fee",
        "stats": {
            "hp": 80,
            "attack": 95,
            "defense": 115,
            "specialAttack": 130,
            "specialDefense": 115,
            "speed": 65
        }
    },
    {
        "id": 802,
        "name_de": "Marshadow",
        "name_en": "marshadow",
        "type1": "Kampf",
        "type2": "Geist",
        "stats": {
            "hp": 90,
            "attack": 125,
            "defense": 80,
            "specialAttack": 90,
            "specialDefense": 90,
            "speed": 125
        }
    },
    {
        "id": 803,
        "name_de": "Venicro",
        "name_en": "poipole",
        "type1": "Gift",
        "type2": "",
        "stats": {
            "hp": 67,
            "attack": 73,
            "defense": 67,
            "specialAttack": 73,
            "specialDefense": 67,
            "speed": 73
        }
    },
    {
        "id": 804,
        "name_de": "Agoyon",
        "name_en": "naganadel",
        "type1": "Gift",
        "type2": "Drache",
        "stats": {
            "hp": 73,
            "attack": 73,
            "defense": 73,
            "specialAttack": 127,
            "specialDefense": 73,
            "speed": 121
        }
    },
    {
        "id": 805,
        "name_de": "Muramura",
        "name_en": "stakataka",
        "type1": "Gestein",
        "type2": "Stahl",
        "stats": {
            "hp": 61,
            "attack": 131,
            "defense": 211,
            "specialAttack": 53,
            "specialDefense": 101,
            "speed": 13
        }
    },
    {
        "id": 806,
        "name_de": "Kopplosio",
        "name_en": "blacephalon",
        "type1": "Feuer",
        "type2": "Geist",
        "stats": {
            "hp": 53,
            "attack": 127,
            "defense": 53,
            "specialAttack": 151,
            "specialDefense": 79,
            "speed": 107
        }
    },
    {
        "id": 807,
        "name_de": "Zeraora",
        "name_en": "zeraora",
        "type1": "Elektro",
        "type2": "",
        "stats": {
            "hp": 88,
            "attack": 112,
            "defense": 75,
            "specialAttack": 102,
            "specialDefense": 80,
            "speed": 143
        }
    },
    {
        "id": 808,
        "name_de": "Meltan",
        "name_en": "meltan",
        "type1": "Stahl",
        "type2": "",
        "stats": {
            "hp": 46,
            "attack": 65,
            "defense": 65,
            "specialAttack": 55,
            "specialDefense": 35,
            "speed": 34
        }
    },
    {
        "id": 809,
        "name_de": "Melmetal",
        "name_en": "melmetal",
        "type1": "Stahl",
        "type2": "",
        "stats": {
            "hp": 135,
            "attack": 143,
            "defense": 143,
            "specialAttack": 80,
            "specialDefense": 65,
            "speed": 34
        }
    },
    {
        "id": 810,
        "name_de": "Chimpep",
        "name_en": "grookey",
        "type1": "Pflanze",
        "type2": "",
        "stats": {
            "hp": 50,
            "attack": 65,
            "defense": 50,
            "specialAttack": 40,
            "specialDefense": 40,
            "speed": 65
        }
    },
    {
        "id": 811,
        "name_de": "Chimstix",
        "name_en": "thwackey",
        "type1": "Pflanze",
        "type2": "",
        "stats": {
            "hp": 70,
            "attack": 85,
            "defense": 70,
            "specialAttack": 55,
            "specialDefense": 60,
            "speed": 80
        }
    },
    {
        "id": 812,
        "name_de": "Gortrom",
        "name_en": "rillaboom",
        "type1": "Pflanze",
        "type2": "",
        "stats": {
            "hp": 100,
            "attack": 125,
            "defense": 90,
            "specialAttack": 60,
            "specialDefense": 70,
            "speed": 85
        }
    },
    {
        "id": 813,
        "name_de": "Hopplo",
        "name_en": "scorbunny",
        "type1": "Feuer",
        "type2": "",
        "stats": {
            "hp": 50,
            "attack": 71,
            "defense": 40,
            "specialAttack": 40,
            "specialDefense": 40,
            "speed": 69
        }
    },
    {
        "id": 814,
        "name_de": "Kickerlo",
        "name_en": "raboot",
        "type1": "Feuer",
        "type2": "",
        "stats": {
            "hp": 65,
            "attack": 86,
            "defense": 60,
            "specialAttack": 55,
            "specialDefense": 60,
            "speed": 94
        }
    },
    {
        "id": 815,
        "name_de": "Liberlo",
        "name_en": "cinderace",
        "type1": "Feuer",
        "type2": "",
        "stats": {
            "hp": 80,
            "attack": 116,
            "defense": 75,
            "specialAttack": 65,
            "specialDefense": 75,
            "speed": 119
        }
    },
    {
        "id": 816,
        "name_de": "Memmeon",
        "name_en": "sobble",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 50,
            "attack": 40,
            "defense": 40,
            "specialAttack": 70,
            "specialDefense": 40,
            "speed": 70
        }
    },
    {
        "id": 817,
        "name_de": "Phlegleon",
        "name_en": "drizzile",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 65,
            "attack": 60,
            "defense": 55,
            "specialAttack": 95,
            "specialDefense": 55,
            "speed": 90
        }
    },
    {
        "id": 818,
        "name_de": "Intelleon",
        "name_en": "inteleon",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 70,
            "attack": 85,
            "defense": 65,
            "specialAttack": 125,
            "specialDefense": 65,
            "speed": 120
        }
    },
    {
        "id": 819,
        "name_de": "Raffel",
        "name_en": "skwovet",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 70,
            "attack": 55,
            "defense": 55,
            "specialAttack": 35,
            "specialDefense": 35,
            "speed": 25
        }
    },
    {
        "id": 820,
        "name_de": "Schlaraffel",
        "name_en": "greedent",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 120,
            "attack": 95,
            "defense": 95,
            "specialAttack": 55,
            "specialDefense": 75,
            "speed": 20
        }
    },
    {
        "id": 821,
        "name_de": "Meikro",
        "name_en": "rookidee",
        "type1": "Flug",
        "type2": "",
        "stats": {
            "hp": 38,
            "attack": 47,
            "defense": 35,
            "specialAttack": 33,
            "specialDefense": 35,
            "speed": 57
        }
    },
    {
        "id": 822,
        "name_de": "Kranoviz",
        "name_en": "corvisquire",
        "type1": "Flug",
        "type2": "",
        "stats": {
            "hp": 68,
            "attack": 67,
            "defense": 55,
            "specialAttack": 43,
            "specialDefense": 55,
            "speed": 77
        }
    },
    {
        "id": 823,
        "name_de": "Krarmor",
        "name_en": "corviknight",
        "type1": "Flug",
        "type2": "Stahl",
        "stats": {
            "hp": 98,
            "attack": 87,
            "defense": 105,
            "specialAttack": 53,
            "specialDefense": 85,
            "speed": 67
        }
    },
    {
        "id": 824,
        "name_de": "Sensect",
        "name_en": "blipbug",
        "type1": "Käfer",
        "type2": "",
        "stats": {
            "hp": 25,
            "attack": 20,
            "defense": 20,
            "specialAttack": 25,
            "specialDefense": 45,
            "speed": 45
        }
    },
    {
        "id": 825,
        "name_de": "Keradar",
        "name_en": "dottler",
        "type1": "Käfer",
        "type2": "Psycho",
        "stats": {
            "hp": 50,
            "attack": 35,
            "defense": 80,
            "specialAttack": 50,
            "specialDefense": 90,
            "speed": 30
        }
    },
    {
        "id": 826,
        "name_de": "Maritellit",
        "name_en": "orbeetle",
        "type1": "Käfer",
        "type2": "Psycho",
        "stats": {
            "hp": 60,
            "attack": 45,
            "defense": 110,
            "specialAttack": 80,
            "specialDefense": 120,
            "speed": 90
        }
    },
    {
        "id": 827,
        "name_de": "Kleptifux",
        "name_en": "nickit",
        "type1": "Unlicht",
        "type2": "",
        "stats": {
            "hp": 40,
            "attack": 28,
            "defense": 28,
            "specialAttack": 47,
            "specialDefense": 52,
            "speed": 50
        }
    },
    {
        "id": 828,
        "name_de": "Gaunux",
        "name_en": "thievul",
        "type1": "Unlicht",
        "type2": "",
        "stats": {
            "hp": 70,
            "attack": 58,
            "defense": 58,
            "specialAttack": 87,
            "specialDefense": 92,
            "speed": 90
        }
    },
    {
        "id": 829,
        "name_de": "Cottini",
        "name_en": "gossifleur",
        "type1": "Pflanze",
        "type2": "",
        "stats": {
            "hp": 40,
            "attack": 40,
            "defense": 60,
            "specialAttack": 40,
            "specialDefense": 60,
            "speed": 10
        }
    },
    {
        "id": 830,
        "name_de": "Cottomi",
        "name_en": "eldegoss",
        "type1": "Pflanze",
        "type2": "",
        "stats": {
            "hp": 60,
            "attack": 50,
            "defense": 90,
            "specialAttack": 80,
            "specialDefense": 120,
            "speed": 60
        }
    },
    {
        "id": 831,
        "name_de": "Wolly",
        "name_en": "wooloo",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 42,
            "attack": 40,
            "defense": 55,
            "specialAttack": 40,
            "specialDefense": 45,
            "speed": 48
        }
    },
    {
        "id": 832,
        "name_de": "Zwollock",
        "name_en": "dubwool",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 72,
            "attack": 80,
            "defense": 100,
            "specialAttack": 60,
            "specialDefense": 90,
            "speed": 88
        }
    },
    {
        "id": 833,
        "name_de": "Kamehaps",
        "name_en": "chewtle",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 50,
            "attack": 64,
            "defense": 50,
            "specialAttack": 38,
            "specialDefense": 38,
            "speed": 44
        }
    },
    {
        "id": 834,
        "name_de": "Kamalm",
        "name_en": "drednaw",
        "type1": "Wasser",
        "type2": "Gestein",
        "stats": {
            "hp": 90,
            "attack": 115,
            "defense": 90,
            "specialAttack": 48,
            "specialDefense": 68,
            "speed": 74
        }
    },
    {
        "id": 835,
        "name_de": "Voldi",
        "name_en": "yamper",
        "type1": "Elektro",
        "type2": "",
        "stats": {
            "hp": 59,
            "attack": 45,
            "defense": 50,
            "specialAttack": 40,
            "specialDefense": 50,
            "speed": 26
        }
    },
    {
        "id": 836,
        "name_de": "Bellektro",
        "name_en": "boltund",
        "type1": "Elektro",
        "type2": "",
        "stats": {
            "hp": 69,
            "attack": 90,
            "defense": 60,
            "specialAttack": 90,
            "specialDefense": 60,
            "speed": 121
        }
    },
    {
        "id": 837,
        "name_de": "Klonkett",
        "name_en": "rolycoly",
        "type1": "Gestein",
        "type2": "",
        "stats": {
            "hp": 30,
            "attack": 40,
            "defense": 50,
            "specialAttack": 40,
            "specialDefense": 50,
            "speed": 30
        }
    },
    {
        "id": 838,
        "name_de": "Wagong",
        "name_en": "carkol",
        "type1": "Gestein",
        "type2": "Feuer",
        "stats": {
            "hp": 80,
            "attack": 60,
            "defense": 90,
            "specialAttack": 60,
            "specialDefense": 70,
            "speed": 50
        }
    },
    {
        "id": 839,
        "name_de": "Montecarbo",
        "name_en": "coalossal",
        "type1": "Gestein",
        "type2": "Feuer",
        "stats": {
            "hp": 110,
            "attack": 80,
            "defense": 120,
            "specialAttack": 80,
            "specialDefense": 90,
            "speed": 30
        }
    },
    {
        "id": 840,
        "name_de": "Knapfel",
        "name_en": "applin",
        "type1": "Pflanze",
        "type2": "Drache",
        "stats": {
            "hp": 40,
            "attack": 40,
            "defense": 80,
            "specialAttack": 40,
            "specialDefense": 40,
            "speed": 20
        }
    },
    {
        "id": 841,
        "name_de": "Drapfel",
        "name_en": "flapple",
        "type1": "Pflanze",
        "type2": "Drache",
        "stats": {
            "hp": 70,
            "attack": 110,
            "defense": 80,
            "specialAttack": 95,
            "specialDefense": 60,
            "speed": 70
        }
    },
    {
        "id": 842,
        "name_de": "Schlapfel",
        "name_en": "appletun",
        "type1": "Pflanze",
        "type2": "Drache",
        "stats": {
            "hp": 110,
            "attack": 85,
            "defense": 80,
            "specialAttack": 100,
            "specialDefense": 80,
            "speed": 30
        }
    },
    {
        "id": 843,
        "name_de": "Salanga",
        "name_en": "silicobra",
        "type1": "Boden",
        "type2": "",
        "stats": {
            "hp": 52,
            "attack": 57,
            "defense": 75,
            "specialAttack": 35,
            "specialDefense": 50,
            "speed": 46
        }
    },
    {
        "id": 844,
        "name_de": "Sanaconda",
        "name_en": "sandaconda",
        "type1": "Boden",
        "type2": "",
        "stats": {
            "hp": 72,
            "attack": 107,
            "defense": 125,
            "specialAttack": 65,
            "specialDefense": 70,
            "speed": 71
        }
    },
    {
        "id": 845,
        "name_de": "Urgl",
        "name_en": "cramorant",
        "type1": "Flug",
        "type2": "Wasser",
        "stats": {
            "hp": 70,
            "attack": 85,
            "defense": 55,
            "specialAttack": 85,
            "specialDefense": 95,
            "speed": 85
        }
    },
    {
        "id": 846,
        "name_de": "Pikuda",
        "name_en": "arrokuda",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 41,
            "attack": 63,
            "defense": 40,
            "specialAttack": 40,
            "specialDefense": 30,
            "speed": 66
        }
    },
    {
        "id": 847,
        "name_de": "Barrakiefa",
        "name_en": "barraskewda",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 61,
            "attack": 123,
            "defense": 60,
            "specialAttack": 60,
            "specialDefense": 50,
            "speed": 136
        }
    },
    {
        "id": 848,
        "name_de": "Toxel",
        "name_en": "toxel",
        "type1": "Elektro",
        "type2": "Gift",
        "stats": {
            "hp": 40,
            "attack": 38,
            "defense": 35,
            "specialAttack": 54,
            "specialDefense": 35,
            "speed": 40
        }
    },
    {
        "id": 849,
        "name_de": "Riffex",
        "name_en": "toxtricity-amped",
        "type1": "Elektro",
        "type2": "Gift",
        "stats": {
            "hp": 75,
            "attack": 98,
            "defense": 70,
            "specialAttack": 114,
            "specialDefense": 70,
            "speed": 75
        }
    },
    {
        "id": 850,
        "name_de": "Thermopod",
        "name_en": "sizzlipede",
        "type1": "Feuer",
        "type2": "Käfer",
        "stats": {
            "hp": 50,
            "attack": 65,
            "defense": 45,
            "specialAttack": 50,
            "specialDefense": 50,
            "speed": 45
        }
    },
    {
        "id": 851,
        "name_de": "Infernopod",
        "name_en": "centiskorch",
        "type1": "Feuer",
        "type2": "Käfer",
        "stats": {
            "hp": 100,
            "attack": 115,
            "defense": 65,
            "specialAttack": 90,
            "specialDefense": 90,
            "speed": 65
        }
    },
    {
        "id": 852,
        "name_de": "Klopptopus",
        "name_en": "clobbopus",
        "type1": "Kampf",
        "type2": "",
        "stats": {
            "hp": 50,
            "attack": 68,
            "defense": 60,
            "specialAttack": 50,
            "specialDefense": 50,
            "speed": 32
        }
    },
    {
        "id": 853,
        "name_de": "Kaocto",
        "name_en": "grapploct",
        "type1": "Kampf",
        "type2": "",
        "stats": {
            "hp": 80,
            "attack": 118,
            "defense": 90,
            "specialAttack": 70,
            "specialDefense": 80,
            "speed": 42
        }
    },
    {
        "id": 854,
        "name_de": "Fatalitee",
        "name_en": "sinistea",
        "type1": "Geist",
        "type2": "",
        "stats": {
            "hp": 40,
            "attack": 45,
            "defense": 45,
            "specialAttack": 74,
            "specialDefense": 54,
            "speed": 50
        }
    },
    {
        "id": 855,
        "name_de": "Mortipot",
        "name_en": "polteageist",
        "type1": "Geist",
        "type2": "",
        "stats": {
            "hp": 60,
            "attack": 65,
            "defense": 65,
            "specialAttack": 134,
            "specialDefense": 114,
            "speed": 70
        }
    },
    {
        "id": 856,
        "name_de": "Brimova",
        "name_en": "hatenna",
        "type1": "Psycho",
        "type2": "",
        "stats": {
            "hp": 42,
            "attack": 30,
            "defense": 45,
            "specialAttack": 56,
            "specialDefense": 53,
            "speed": 39
        }
    },
    {
        "id": 857,
        "name_de": "Brimano",
        "name_en": "hattrem",
        "type1": "Psycho",
        "type2": "",
        "stats": {
            "hp": 57,
            "attack": 40,
            "defense": 65,
            "specialAttack": 86,
            "specialDefense": 73,
            "speed": 49
        }
    },
    {
        "id": 858,
        "name_de": "Silembrim",
        "name_en": "hatterene",
        "type1": "Psycho",
        "type2": "Fee",
        "stats": {
            "hp": 57,
            "attack": 90,
            "defense": 95,
            "specialAttack": 136,
            "specialDefense": 103,
            "speed": 29
        }
    },
    {
        "id": 859,
        "name_de": "Bähmon",
        "name_en": "impidimp",
        "type1": "Unlicht",
        "type2": "Fee",
        "stats": {
            "hp": 45,
            "attack": 45,
            "defense": 30,
            "specialAttack": 55,
            "specialDefense": 40,
            "speed": 50
        }
    },
    {
        "id": 860,
        "name_de": "Pelzebub",
        "name_en": "morgrem",
        "type1": "Unlicht",
        "type2": "Fee",
        "stats": {
            "hp": 65,
            "attack": 60,
            "defense": 45,
            "specialAttack": 75,
            "specialDefense": 55,
            "speed": 70
        }
    },
    {
        "id": 861,
        "name_de": "Olangaar",
        "name_en": "grimmsnarl",
        "type1": "Unlicht",
        "type2": "Fee",
        "stats": {
            "hp": 95,
            "attack": 120,
            "defense": 65,
            "specialAttack": 95,
            "specialDefense": 75,
            "speed": 60
        }
    },
    {
        "id": 862,
        "name_de": "Barrikadax",
        "name_en": "obstagoon",
        "type1": "Unlicht",
        "type2": "Normal",
        "stats": {
            "hp": 93,
            "attack": 90,
            "defense": 101,
            "specialAttack": 60,
            "specialDefense": 81,
            "speed": 95
        }
    },
    {
        "id": 863,
        "name_de": "Mauzinger",
        "name_en": "perrserker",
        "type1": "Stahl",
        "type2": "",
        "stats": {
            "hp": 70,
            "attack": 110,
            "defense": 100,
            "specialAttack": 50,
            "specialDefense": 60,
            "speed": 50
        }
    },
    {
        "id": 864,
        "name_de": "Gorgasonn",
        "name_en": "cursola",
        "type1": "Geist",
        "type2": "",
        "stats": {
            "hp": 60,
            "attack": 95,
            "defense": 50,
            "specialAttack": 145,
            "specialDefense": 130,
            "speed": 30
        }
    },
    {
        "id": 865,
        "name_de": "Lauchzelot",
        "name_en": "sirfetchd",
        "type1": "Kampf",
        "type2": "",
        "stats": {
            "hp": 62,
            "attack": 135,
            "defense": 95,
            "specialAttack": 68,
            "specialDefense": 82,
            "speed": 65
        }
    },
    {
        "id": 866,
        "name_de": "Pantifrost",
        "name_en": "mr-rime",
        "type1": "Eis",
        "type2": "Psycho",
        "stats": {
            "hp": 80,
            "attack": 85,
            "defense": 75,
            "specialAttack": 110,
            "specialDefense": 100,
            "speed": 70
        }
    },
    {
        "id": 867,
        "name_de": "Oghnatoll",
        "name_en": "runerigus",
        "type1": "Boden",
        "type2": "Geist",
        "stats": {
            "hp": 58,
            "attack": 95,
            "defense": 145,
            "specialAttack": 50,
            "specialDefense": 105,
            "speed": 30
        }
    },
    {
        "id": 868,
        "name_de": "Hokumil",
        "name_en": "milcery",
        "type1": "Fee",
        "type2": "",
        "stats": {
            "hp": 45,
            "attack": 40,
            "defense": 40,
            "specialAttack": 50,
            "specialDefense": 61,
            "speed": 34
        }
    },
    {
        "id": 869,
        "name_de": "Pokusan",
        "name_en": "alcremie",
        "type1": "Fee",
        "type2": "",
        "stats": {
            "hp": 65,
            "attack": 60,
            "defense": 75,
            "specialAttack": 110,
            "specialDefense": 121,
            "speed": 64
        }
    },
    {
        "id": 870,
        "name_de": "Legios",
        "name_en": "falinks",
        "type1": "Kampf",
        "type2": "",
        "stats": {
            "hp": 65,
            "attack": 100,
            "defense": 100,
            "specialAttack": 70,
            "specialDefense": 60,
            "speed": 75
        }
    },
    {
        "id": 871,
        "name_de": "Britzigel",
        "name_en": "pincurchin",
        "type1": "Elektro",
        "type2": "",
        "stats": {
            "hp": 48,
            "attack": 101,
            "defense": 95,
            "specialAttack": 91,
            "specialDefense": 85,
            "speed": 15
        }
    },
    {
        "id": 872,
        "name_de": "Snomnom",
        "name_en": "snom",
        "type1": "Eis",
        "type2": "Käfer",
        "stats": {
            "hp": 30,
            "attack": 25,
            "defense": 35,
            "specialAttack": 45,
            "specialDefense": 30,
            "speed": 20
        }
    },
    {
        "id": 873,
        "name_de": "Mottineva",
        "name_en": "frosmoth",
        "type1": "Eis",
        "type2": "Käfer",
        "stats": {
            "hp": 70,
            "attack": 65,
            "defense": 60,
            "specialAttack": 125,
            "specialDefense": 90,
            "speed": 65
        }
    },
    {
        "id": 874,
        "name_de": "Humanolith",
        "name_en": "stonjourner",
        "type1": "Gestein",
        "type2": "",
        "stats": {
            "hp": 100,
            "attack": 125,
            "defense": 135,
            "specialAttack": 20,
            "specialDefense": 20,
            "speed": 70
        }
    },
    {
        "id": 875,
        "name_de": "Kubuin",
        "name_en": "eiscue-ice",
        "type1": "Eis",
        "type2": "",
        "stats": {
            "hp": 75,
            "attack": 80,
            "defense": 110,
            "specialAttack": 65,
            "specialDefense": 90,
            "speed": 50
        }
    },
    {
        "id": 876,
        "name_de": "Servol (m)",
        "name_en": "indeedee-male",
        "type1": "Psycho",
        "type2": "Normal",
        "stats": {
            "hp": 60,
            "attack": 65,
            "defense": 55,
            "specialAttack": 105,
            "specialDefense": 95,
            "speed": 95
        }
    },
    {
        "id": 877,
        "name_de": "Morpeko (satt)",
        "name_en": "morpeko-full-belly",
        "type1": "Elektro",
        "type2": "Unlicht",
        "stats": {
            "hp": 58,
            "attack": 95,
            "defense": 58,
            "specialAttack": 70,
            "specialDefense": 58,
            "speed": 97
        }
    },
    {
        "id": 878,
        "name_de": "Kupfanti",
        "name_en": "cufant",
        "type1": "Stahl",
        "type2": "",
        "stats": {
            "hp": 72,
            "attack": 80,
            "defense": 49,
            "specialAttack": 40,
            "specialDefense": 49,
            "speed": 40
        }
    },
    {
        "id": 879,
        "name_de": "Patinaraja",
        "name_en": "copperajah",
        "type1": "Stahl",
        "type2": "",
        "stats": {
            "hp": 122,
            "attack": 130,
            "defense": 69,
            "specialAttack": 80,
            "specialDefense": 69,
            "speed": 30
        }
    },
    {
        "id": 880,
        "name_de": "Lectragon",
        "name_en": "dracozolt",
        "type1": "Elektro",
        "type2": "Drache",
        "stats": {
            "hp": 90,
            "attack": 100,
            "defense": 90,
            "specialAttack": 80,
            "specialDefense": 70,
            "speed": 75
        }
    },
    {
        "id": 881,
        "name_de": "Lecryodon",
        "name_en": "arctozolt",
        "type1": "Elektro",
        "type2": "Eis",
        "stats": {
            "hp": 90,
            "attack": 100,
            "defense": 90,
            "specialAttack": 90,
            "specialDefense": 80,
            "speed": 55
        }
    },
    {
        "id": 882,
        "name_de": "Pescragon",
        "name_en": "dracovish",
        "type1": "Wasser",
        "type2": "Drache",
        "stats": {
            "hp": 90,
            "attack": 90,
            "defense": 100,
            "specialAttack": 70,
            "specialDefense": 80,
            "speed": 75
        }
    },
    {
        "id": 883,
        "name_de": "Pescryodon",
        "name_en": "arctovish",
        "type1": "Wasser",
        "type2": "Eis",
        "stats": {
            "hp": 90,
            "attack": 90,
            "defense": 100,
            "specialAttack": 80,
            "specialDefense": 90,
            "speed": 55
        }
    },
    {
        "id": 884,
        "name_de": "Duraludon",
        "name_en": "duraludon",
        "type1": "Stahl",
        "type2": "Drache",
        "stats": {
            "hp": 70,
            "attack": 95,
            "defense": 115,
            "specialAttack": 120,
            "specialDefense": 50,
            "speed": 85
        }
    },
    {
        "id": 885,
        "name_de": "Grolldra",
        "name_en": "dreepy",
        "type1": "Drache",
        "type2": "Geist",
        "stats": {
            "hp": 28,
            "attack": 60,
            "defense": 30,
            "specialAttack": 40,
            "specialDefense": 30,
            "speed": 82
        }
    },
    {
        "id": 886,
        "name_de": "Phandra",
        "name_en": "drakloak",
        "type1": "Drache",
        "type2": "Geist",
        "stats": {
            "hp": 68,
            "attack": 80,
            "defense": 50,
            "specialAttack": 60,
            "specialDefense": 50,
            "speed": 102
        }
    },
    {
        "id": 887,
        "name_de": "Katapuldra",
        "name_en": "dragapult",
        "type1": "Drache",
        "type2": "Geist",
        "stats": {
            "hp": 88,
            "attack": 120,
            "defense": 75,
            "specialAttack": 100,
            "specialDefense": 75,
            "speed": 142
        }
    },
    {
        "id": 888,
        "name_de": "Zacian",
        "name_en": "zacian",
        "type1": "Fee",
        "type2": "",
        "stats": {
            "hp": 92,
            "attack": 120,
            "defense": 115,
            "specialAttack": 80,
            "specialDefense": 115,
            "speed": 138
        }
    },
    {
        "id": 889,
        "name_de": "Zamazenta",
        "name_en": "zamazenta",
        "type1": "Kampf",
        "type2": "",
        "stats": {
            "hp": 92,
            "attack": 120,
            "defense": 115,
            "specialAttack": 80,
            "specialDefense": 115,
            "speed": 138
        }
    },
    {
        "id": 890,
        "name_de": "Endynalos",
        "name_en": "eternatus",
        "type1": "Gift",
        "type2": "Drache",
        "stats": {
            "hp": 140,
            "attack": 85,
            "defense": 95,
            "specialAttack": 145,
            "specialDefense": 95,
            "speed": 130
        }
    },
    {
        "id": 891,
        "name_de": "Dakuma",
        "name_en": "kubfu",
        "type1": "Kampf",
        "type2": "",
        "stats": {
            "hp": 60,
            "attack": 90,
            "defense": 60,
            "specialAttack": 53,
            "specialDefense": 50,
            "speed": 72
        }
    },
    {
        "id": 892,
        "name_de": "Wulaosu (fok.)",
        "name_en": "urshifu-single-strike",
        "type1": "Kampf",
        "type2": "Unlicht",
        "stats": {
            "hp": 100,
            "attack": 130,
            "defense": 100,
            "specialAttack": 63,
            "specialDefense": 60,
            "speed": 97
        }
    },
    {
        "id": 893,
        "name_de": "Zarude",
        "name_en": "zarude",
        "type1": "Unlicht",
        "type2": "Pflanze",
        "stats": {
            "hp": 105,
            "attack": 120,
            "defense": 105,
            "specialAttack": 70,
            "specialDefense": 95,
            "speed": 105
        }
    },
    {
        "id": 894,
        "name_de": "Regieleki",
        "name_en": "regieleki",
        "type1": "Elektro",
        "type2": "",
        "stats": {
            "hp": 80,
            "attack": 100,
            "defense": 50,
            "specialAttack": 100,
            "specialDefense": 50,
            "speed": 200
        }
    },
    {
        "id": 895,
        "name_de": "Regidrago",
        "name_en": "regidrago",
        "type1": "Drache",
        "type2": "",
        "stats": {
            "hp": 200,
            "attack": 100,
            "defense": 50,
            "specialAttack": 100,
            "specialDefense": 50,
            "speed": 80
        }
    },
    {
        "id": 896,
        "name_de": "Polaross",
        "name_en": "glastrier",
        "type1": "Eis",
        "type2": "",
        "stats": {
            "hp": 100,
            "attack": 145,
            "defense": 130,
            "specialAttack": 65,
            "specialDefense": 110,
            "speed": 30
        }
    },
    {
        "id": 897,
        "name_de": "Phantoross",
        "name_en": "spectrier",
        "type1": "Geist",
        "type2": "",
        "stats": {
            "hp": 100,
            "attack": 65,
            "defense": 60,
            "specialAttack": 145,
            "specialDefense": 80,
            "speed": 130
        }
    },
    {
        "id": 898,
        "name_de": "Coronospa",
        "name_en": "calyrex",
        "type1": "Psycho",
        "type2": "Pflanze",
        "stats": {
            "hp": 100,
            "attack": 80,
            "defense": 80,
            "specialAttack": 80,
            "specialDefense": 80,
            "speed": 80
        }
    },
    {
        "id": 899,
        "name_de": "Damythir",
        "name_en": "wyrdeer",
        "type1": "Normal",
        "type2": "Psycho",
        "stats": {
            "hp": 103,
            "attack": 105,
            "defense": 72,
            "specialAttack": 105,
            "specialDefense": 75,
            "speed": 65
        }
    },
    {
        "id": 900,
        "name_de": "Axantor",
        "name_en": "kleavor",
        "type1": "Käfer",
        "type2": "Gestein",
        "stats": {
            "hp": 70,
            "attack": 135,
            "defense": 95,
            "specialAttack": 45,
            "specialDefense": 70,
            "speed": 85
        }
    },
    {
        "id": 901,
        "name_de": "Ursaluna",
        "name_en": "ursaluna",
        "type1": "Boden",
        "type2": "Normal",
        "stats": {
            "hp": 130,
            "attack": 140,
            "defense": 105,
            "specialAttack": 45,
            "specialDefense": 80,
            "speed": 50
        }
    },
    {
        "id": 902,
        "name_de": "Salmagnis",
        "name_en": "basculegion-male",
        "type1": "Wasser",
        "type2": "Geist",
        "stats": {
            "hp": 120,
            "attack": 112,
            "defense": 65,
            "specialAttack": 80,
            "specialDefense": 75,
            "speed": 78
        }
    },
    {
        "id": 903,
        "name_de": "Snieboss",
        "name_en": "sneasler",
        "type1": "Kampf",
        "type2": "Gift",
        "stats": {
            "hp": 80,
            "attack": 130,
            "defense": 60,
            "specialAttack": 40,
            "specialDefense": 80,
            "speed": 120
        }
    },
    {
        "id": 904,
        "name_de": "Myriador",
        "name_en": "overqwil",
        "type1": "Unlicht",
        "type2": "Gift",
        "stats": {
            "hp": 85,
            "attack": 115,
            "defense": 95,
            "specialAttack": 65,
            "specialDefense": 65,
            "speed": 85
        }
    },
    {
        "id": 905,
        "name_de": "Cupidos",
        "name_en": "enamorus-incarnate",
        "type1": "Fee",
        "type2": "Flug",
        "stats": {
            "hp": 74,
            "attack": 115,
            "defense": 70,
            "specialAttack": 135,
            "specialDefense": 80,
            "speed": 106
        }
    },
    {
        "id": 906,
        "name_de": "Felori",
        "name_en": "sprigatito",
        "type1": "Pflanze",
        "type2": "",
        "stats": {
            "hp": 40,
            "attack": 61,
            "defense": 54,
            "specialAttack": 45,
            "specialDefense": 45,
            "speed": 65
        }
    },
    {
        "id": 907,
        "name_de": "Feliospa",
        "name_en": "floragato",
        "type1": "Pflanze",
        "type2": "",
        "stats": {
            "hp": 61,
            "attack": 80,
            "defense": 63,
            "specialAttack": 60,
            "specialDefense": 63,
            "speed": 83
        }
    },
    {
        "id": 908,
        "name_de": "Maskagato",
        "name_en": "meowscarada",
        "type1": "Pflanze",
        "type2": "Unlicht",
        "stats": {
            "hp": 76,
            "attack": 110,
            "defense": 70,
            "specialAttack": 81,
            "specialDefense": 70,
            "speed": 123
        }
    },
    {
        "id": 909,
        "name_de": "Krokel",
        "name_en": "fuecoco",
        "type1": "Feuer",
        "type2": "",
        "stats": {
            "hp": 67,
            "attack": 45,
            "defense": 59,
            "specialAttack": 63,
            "specialDefense": 40,
            "speed": 36
        }
    },
    {
        "id": 910,
        "name_de": "Lokroko",
        "name_en": "crocalor",
        "type1": "Feuer",
        "type2": "",
        "stats": {
            "hp": 81,
            "attack": 55,
            "defense": 78,
            "specialAttack": 90,
            "specialDefense": 58,
            "speed": 49
        }
    },
    {
        "id": 911,
        "name_de": "Skelokrok",
        "name_en": "skeledirge",
        "type1": "Feuer",
        "type2": "Geist",
        "stats": {
            "hp": 104,
            "attack": 75,
            "defense": 100,
            "specialAttack": 110,
            "specialDefense": 75,
            "speed": 66
        }
    },
    {
        "id": 912,
        "name_de": "Kwaks",
        "name_en": "quaxly",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 55,
            "attack": 65,
            "defense": 45,
            "specialAttack": 50,
            "specialDefense": 45,
            "speed": 50
        }
    },
    {
        "id": 913,
        "name_de": "Fuentente",
        "name_en": "quaxwell",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 70,
            "attack": 85,
            "defense": 65,
            "specialAttack": 65,
            "specialDefense": 60,
            "speed": 65
        }
    },
    {
        "id": 914,
        "name_de": "Bailonda",
        "name_en": "quaquaval",
        "type1": "Wasser",
        "type2": "Kampf",
        "stats": {
            "hp": 85,
            "attack": 120,
            "defense": 80,
            "specialAttack": 85,
            "specialDefense": 75,
            "speed": 85
        }
    },
    {
        "id": 915,
        "name_de": "Ferkuli",
        "name_en": "lechonk",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 54,
            "attack": 45,
            "defense": 40,
            "specialAttack": 35,
            "specialDefense": 45,
            "speed": 35
        }
    },
    {
        "id": 916,
        "name_de": "Fragrunz",
        "name_en": "oinkologne-male",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 110,
            "attack": 100,
            "defense": 75,
            "specialAttack": 59,
            "specialDefense": 80,
            "speed": 65
        }
    },
    {
        "id": 917,
        "name_de": "Tarundel",
        "name_en": "tarountula",
        "type1": "Käfer",
        "type2": "",
        "stats": {
            "hp": 35,
            "attack": 41,
            "defense": 45,
            "specialAttack": 29,
            "specialDefense": 40,
            "speed": 20
        }
    },
    {
        "id": 918,
        "name_de": "Spinsidias",
        "name_en": "spidops",
        "type1": "Käfer",
        "type2": "",
        "stats": {
            "hp": 60,
            "attack": 79,
            "defense": 92,
            "specialAttack": 52,
            "specialDefense": 86,
            "speed": 35
        }
    },
    {
        "id": 919,
        "name_de": "Micrick",
        "name_en": "nymble",
        "type1": "Käfer",
        "type2": "",
        "stats": {
            "hp": 33,
            "attack": 46,
            "defense": 40,
            "specialAttack": 21,
            "specialDefense": 25,
            "speed": 45
        }
    },
    {
        "id": 920,
        "name_de": "Lextremo",
        "name_en": "lokix",
        "type1": "Käfer",
        "type2": "Unlicht",
        "stats": {
            "hp": 71,
            "attack": 102,
            "defense": 78,
            "specialAttack": 52,
            "specialDefense": 55,
            "speed": 92
        }
    },
    {
        "id": 921,
        "name_de": "Pamo",
        "name_en": "pawmi",
        "type1": "Elektro",
        "type2": "",
        "stats": {
            "hp": 45,
            "attack": 50,
            "defense": 20,
            "specialAttack": 40,
            "specialDefense": 25,
            "speed": 60
        }
    },
    {
        "id": 922,
        "name_de": "Pamamo",
        "name_en": "pawmo",
        "type1": "Elektro",
        "type2": "Kampf",
        "stats": {
            "hp": 60,
            "attack": 75,
            "defense": 40,
            "specialAttack": 50,
            "specialDefense": 40,
            "speed": 85
        }
    },
    {
        "id": 923,
        "name_de": "Pamomamo",
        "name_en": "pawmot",
        "type1": "Elektro",
        "type2": "Kampf",
        "stats": {
            "hp": 70,
            "attack": 115,
            "defense": 70,
            "specialAttack": 70,
            "specialDefense": 60,
            "speed": 105
        }
    },
    {
        "id": 924,
        "name_de": "Zwieps",
        "name_en": "tandemaus",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 50,
            "attack": 50,
            "defense": 45,
            "specialAttack": 40,
            "specialDefense": 45,
            "speed": 75
        }
    },
    {
        "id": 925,
        "name_de": "Famieps",
        "name_en": "maushold-family-of-four",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 74,
            "attack": 75,
            "defense": 70,
            "specialAttack": 65,
            "specialDefense": 75,
            "speed": 111
        }
    },
    {
        "id": 926,
        "name_de": "Hefel",
        "name_en": "fidough",
        "type1": "Fee",
        "type2": "",
        "stats": {
            "hp": 37,
            "attack": 55,
            "defense": 70,
            "specialAttack": 30,
            "specialDefense": 55,
            "speed": 65
        }
    },
    {
        "id": 927,
        "name_de": "Backel",
        "name_en": "dachsbun",
        "type1": "Fee",
        "type2": "",
        "stats": {
            "hp": 57,
            "attack": 80,
            "defense": 115,
            "specialAttack": 50,
            "specialDefense": 80,
            "speed": 95
        }
    },
    {
        "id": 928,
        "name_de": "Olini",
        "name_en": "smoliv",
        "type1": "Pflanze",
        "type2": "Normal",
        "stats": {
            "hp": 41,
            "attack": 35,
            "defense": 45,
            "specialAttack": 58,
            "specialDefense": 51,
            "speed": 30
        }
    },
    {
        "id": 929,
        "name_de": "Olivinio",
        "name_en": "dolliv",
        "type1": "Pflanze",
        "type2": "Normal",
        "stats": {
            "hp": 52,
            "attack": 53,
            "defense": 60,
            "specialAttack": 78,
            "specialDefense": 78,
            "speed": 33
        }
    },
    {
        "id": 930,
        "name_de": "Olithena",
        "name_en": "arboliva",
        "type1": "Pflanze",
        "type2": "Normal",
        "stats": {
            "hp": 78,
            "attack": 69,
            "defense": 90,
            "specialAttack": 125,
            "specialDefense": 109,
            "speed": 39
        }
    },
    {
        "id": 931,
        "name_de": "Krawalloro",
        "name_en": "squawkabilly-green-plumage",
        "type1": "Normal",
        "type2": "Flug",
        "stats": {
            "hp": 82,
            "attack": 96,
            "defense": 51,
            "specialAttack": 45,
            "specialDefense": 51,
            "speed": 92
        }
    },
    {
        "id": 932,
        "name_de": "Geosali",
        "name_en": "nacli",
        "type1": "Gestein",
        "type2": "",
        "stats": {
            "hp": 55,
            "attack": 55,
            "defense": 75,
            "specialAttack": 35,
            "specialDefense": 35,
            "speed": 25
        }
    },
    {
        "id": 933,
        "name_de": "Sedisal",
        "name_en": "naclstack",
        "type1": "Gestein",
        "type2": "",
        "stats": {
            "hp": 60,
            "attack": 60,
            "defense": 100,
            "specialAttack": 35,
            "specialDefense": 65,
            "speed": 35
        }
    },
    {
        "id": 934,
        "name_de": "Saltigant",
        "name_en": "garganacl",
        "type1": "Gestein",
        "type2": "",
        "stats": {
            "hp": 100,
            "attack": 100,
            "defense": 130,
            "specialAttack": 45,
            "specialDefense": 90,
            "speed": 35
        }
    },
    {
        "id": 935,
        "name_de": "Knarbon",
        "name_en": "charcadet",
        "type1": "Feuer",
        "type2": "",
        "stats": {
            "hp": 40,
            "attack": 50,
            "defense": 40,
            "specialAttack": 50,
            "specialDefense": 40,
            "speed": 35
        }
    },
    {
        "id": 936,
        "name_de": "Crimanzo",
        "name_en": "armarouge",
        "type1": "Feuer",
        "type2": "Psycho",
        "stats": {
            "hp": 85,
            "attack": 60,
            "defense": 100,
            "specialAttack": 125,
            "specialDefense": 80,
            "speed": 75
        }
    },
    {
        "id": 937,
        "name_de": "Azugladis",
        "name_en": "ceruledge",
        "type1": "Feuer",
        "type2": "Geist",
        "stats": {
            "hp": 75,
            "attack": 125,
            "defense": 80,
            "specialAttack": 60,
            "specialDefense": 100,
            "speed": 85
        }
    },
    {
        "id": 938,
        "name_de": "Blipp",
        "name_en": "tadbulb",
        "type1": "Elektro",
        "type2": "",
        "stats": {
            "hp": 61,
            "attack": 31,
            "defense": 41,
            "specialAttack": 59,
            "specialDefense": 35,
            "speed": 45
        }
    },
    {
        "id": 939,
        "name_de": "Wampitz",
        "name_en": "bellibolt",
        "type1": "Elektro",
        "type2": "",
        "stats": {
            "hp": 109,
            "attack": 64,
            "defense": 91,
            "specialAttack": 103,
            "specialDefense": 83,
            "speed": 45
        }
    },
    {
        "id": 940,
        "name_de": "Voltrel",
        "name_en": "wattrel",
        "type1": "Elektro",
        "type2": "Flug",
        "stats": {
            "hp": 40,
            "attack": 40,
            "defense": 35,
            "specialAttack": 55,
            "specialDefense": 40,
            "speed": 70
        }
    },
    {
        "id": 941,
        "name_de": "Voltrean",
        "name_en": "kilowattrel",
        "type1": "Elektro",
        "type2": "Flug",
        "stats": {
            "hp": 70,
            "attack": 70,
            "defense": 60,
            "specialAttack": 105,
            "specialDefense": 60,
            "speed": 125
        }
    },
    {
        "id": 942,
        "name_de": "Mobtiff",
        "name_en": "maschiff",
        "type1": "Unlicht",
        "type2": "",
        "stats": {
            "hp": 60,
            "attack": 78,
            "defense": 60,
            "specialAttack": 40,
            "specialDefense": 51,
            "speed": 51
        }
    },
    {
        "id": 943,
        "name_de": "Mastifioso",
        "name_en": "mabosstiff",
        "type1": "Unlicht",
        "type2": "",
        "stats": {
            "hp": 80,
            "attack": 120,
            "defense": 90,
            "specialAttack": 60,
            "specialDefense": 70,
            "speed": 85
        }
    },
    {
        "id": 944,
        "name_de": "Sproxi",
        "name_en": "shroodle",
        "type1": "Gift",
        "type2": "Normal",
        "stats": {
            "hp": 40,
            "attack": 65,
            "defense": 35,
            "specialAttack": 40,
            "specialDefense": 35,
            "speed": 75
        }
    },
    {
        "id": 945,
        "name_de": "Affiti",
        "name_en": "grafaiai",
        "type1": "Gift",
        "type2": "Normal",
        "stats": {
            "hp": 63,
            "attack": 95,
            "defense": 65,
            "specialAttack": 80,
            "specialDefense": 72,
            "speed": 110
        }
    },
    {
        "id": 946,
        "name_de": "Weherba",
        "name_en": "bramblin",
        "type1": "Pflanze",
        "type2": "Geist",
        "stats": {
            "hp": 40,
            "attack": 65,
            "defense": 30,
            "specialAttack": 45,
            "specialDefense": 35,
            "speed": 60
        }
    },
    {
        "id": 947,
        "name_de": "Horrerba",
        "name_en": "brambleghast",
        "type1": "Pflanze",
        "type2": "Geist",
        "stats": {
            "hp": 55,
            "attack": 115,
            "defense": 70,
            "specialAttack": 80,
            "specialDefense": 70,
            "speed": 90
        }
    },
    {
        "id": 948,
        "name_de": "Tentagra",
        "name_en": "toedscool",
        "type1": "Boden",
        "type2": "Pflanze",
        "stats": {
            "hp": 40,
            "attack": 40,
            "defense": 35,
            "specialAttack": 50,
            "specialDefense": 100,
            "speed": 70
        }
    },
    {
        "id": 949,
        "name_de": "Tenterra",
        "name_en": "toedscruel",
        "type1": "Boden",
        "type2": "Pflanze",
        "stats": {
            "hp": 80,
            "attack": 70,
            "defense": 65,
            "specialAttack": 80,
            "specialDefense": 120,
            "speed": 100
        }
    },
    {
        "id": 950,
        "name_de": "Klibbe",
        "name_en": "klawf",
        "type1": "Gestein",
        "type2": "",
        "stats": {
            "hp": 70,
            "attack": 100,
            "defense": 115,
            "specialAttack": 35,
            "specialDefense": 55,
            "speed": 75
        }
    },
    {
        "id": 951,
        "name_de": "Chilingel",
        "name_en": "capsakid",
        "type1": "Pflanze",
        "type2": "",
        "stats": {
            "hp": 50,
            "attack": 62,
            "defense": 40,
            "specialAttack": 62,
            "specialDefense": 40,
            "speed": 50
        }
    },
    {
        "id": 952,
        "name_de": "Halupenjo",
        "name_en": "scovillain",
        "type1": "Pflanze",
        "type2": "Feuer",
        "stats": {
            "hp": 65,
            "attack": 108,
            "defense": 65,
            "specialAttack": 108,
            "specialDefense": 65,
            "speed": 75
        }
    },
    {
        "id": 953,
        "name_de": "Relluk",
        "name_en": "rellor",
        "type1": "Käfer",
        "type2": "",
        "stats": {
            "hp": 41,
            "attack": 50,
            "defense": 60,
            "specialAttack": 31,
            "specialDefense": 58,
            "speed": 30
        }
    },
    {
        "id": 954,
        "name_de": "Skarabaks",
        "name_en": "rabsca",
        "type1": "Käfer",
        "type2": "Psycho",
        "stats": {
            "hp": 75,
            "attack": 50,
            "defense": 85,
            "specialAttack": 115,
            "specialDefense": 100,
            "speed": 45
        }
    },
    {
        "id": 955,
        "name_de": "Flattutu",
        "name_en": "flittle",
        "type1": "Psycho",
        "type2": "",
        "stats": {
            "hp": 30,
            "attack": 35,
            "defense": 30,
            "specialAttack": 55,
            "specialDefense": 30,
            "speed": 75
        }
    },
    {
        "id": 956,
        "name_de": "Psiopatra",
        "name_en": "espathra",
        "type1": "Psycho",
        "type2": "",
        "stats": {
            "hp": 95,
            "attack": 60,
            "defense": 60,
            "specialAttack": 101,
            "specialDefense": 60,
            "speed": 105
        }
    },
    {
        "id": 957,
        "name_de": "Forgita",
        "name_en": "tinkatink",
        "type1": "Fee",
        "type2": "Stahl",
        "stats": {
            "hp": 50,
            "attack": 45,
            "defense": 45,
            "specialAttack": 35,
            "specialDefense": 64,
            "speed": 58
        }
    },
    {
        "id": 958,
        "name_de": "Tafforgita",
        "name_en": "tinkatuff",
        "type1": "Fee",
        "type2": "Stahl",
        "stats": {
            "hp": 65,
            "attack": 55,
            "defense": 55,
            "specialAttack": 45,
            "specialDefense": 82,
            "speed": 78
        }
    },
    {
        "id": 959,
        "name_de": "Granforgita",
        "name_en": "tinkaton",
        "type1": "Fee",
        "type2": "Stahl",
        "stats": {
            "hp": 85,
            "attack": 75,
            "defense": 77,
            "specialAttack": 70,
            "specialDefense": 105,
            "speed": 94
        }
    },
    {
        "id": 960,
        "name_de": "Schligda",
        "name_en": "wiglett",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 10,
            "attack": 55,
            "defense": 25,
            "specialAttack": 35,
            "specialDefense": 25,
            "speed": 95
        }
    },
    {
        "id": 961,
        "name_de": "Schligdri",
        "name_en": "wugtrio",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 35,
            "attack": 100,
            "defense": 50,
            "specialAttack": 50,
            "specialDefense": 70,
            "speed": 120
        }
    },
    {
        "id": 962,
        "name_de": "Adebom",
        "name_en": "bombirdier",
        "type1": "Flug",
        "type2": "Unlicht",
        "stats": {
            "hp": 70,
            "attack": 103,
            "defense": 85,
            "specialAttack": 60,
            "specialDefense": 85,
            "speed": 82
        }
    },
    {
        "id": 963,
        "name_de": "Normifin",
        "name_en": "finizen",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 70,
            "attack": 45,
            "defense": 40,
            "specialAttack": 45,
            "specialDefense": 40,
            "speed": 75
        }
    },
    {
        "id": 964,
        "name_de": "Delfinator",
        "name_en": "palafin-zero",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 100,
            "attack": 70,
            "defense": 72,
            "specialAttack": 53,
            "specialDefense": 62,
            "speed": 100
        }
    },
    {
        "id": 965,
        "name_de": "Knattox",
        "name_en": "varoom",
        "type1": "Stahl",
        "type2": "Gift",
        "stats": {
            "hp": 45,
            "attack": 70,
            "defense": 63,
            "specialAttack": 30,
            "specialDefense": 45,
            "speed": 47
        }
    },
    {
        "id": 966,
        "name_de": "Knattatox",
        "name_en": "revavroom",
        "type1": "Stahl",
        "type2": "Gift",
        "stats": {
            "hp": 80,
            "attack": 119,
            "defense": 90,
            "specialAttack": 54,
            "specialDefense": 67,
            "speed": 90
        }
    },
    {
        "id": 967,
        "name_de": "Mopex",
        "name_en": "cyclizar",
        "type1": "Drache",
        "type2": "Normal",
        "stats": {
            "hp": 70,
            "attack": 95,
            "defense": 65,
            "specialAttack": 85,
            "specialDefense": 65,
            "speed": 121
        }
    },
    {
        "id": 968,
        "name_de": "Schlurm",
        "name_en": "orthworm",
        "type1": "Stahl",
        "type2": "",
        "stats": {
            "hp": 70,
            "attack": 85,
            "defense": 145,
            "specialAttack": 60,
            "specialDefense": 55,
            "speed": 65
        }
    },
    {
        "id": 969,
        "name_de": "Lumispross",
        "name_en": "glimmet",
        "type1": "Gestein",
        "type2": "Gift",
        "stats": {
            "hp": 48,
            "attack": 35,
            "defense": 42,
            "specialAttack": 105,
            "specialDefense": 60,
            "speed": 60
        }
    },
    {
        "id": 970,
        "name_de": "Lumiflora",
        "name_en": "glimmora",
        "type1": "Gestein",
        "type2": "Gift",
        "stats": {
            "hp": 83,
            "attack": 55,
            "defense": 90,
            "specialAttack": 130,
            "specialDefense": 81,
            "speed": 86
        }
    },
    {
        "id": 971,
        "name_de": "Gruff",
        "name_en": "greavard",
        "type1": "Geist",
        "type2": "",
        "stats": {
            "hp": 50,
            "attack": 61,
            "defense": 60,
            "specialAttack": 30,
            "specialDefense": 55,
            "speed": 34
        }
    },
    {
        "id": 972,
        "name_de": "Friedwuff",
        "name_en": "houndstone",
        "type1": "Geist",
        "type2": "",
        "stats": {
            "hp": 72,
            "attack": 101,
            "defense": 100,
            "specialAttack": 50,
            "specialDefense": 97,
            "speed": 68
        }
    },
    {
        "id": 973,
        "name_de": "Flaminkno",
        "name_en": "flamigo",
        "type1": "Flug",
        "type2": "Kampf",
        "stats": {
            "hp": 82,
            "attack": 115,
            "defense": 74,
            "specialAttack": 75,
            "specialDefense": 64,
            "speed": 90
        }
    },
    {
        "id": 974,
        "name_de": "Flaniwal",
        "name_en": "cetoddle",
        "type1": "Eis",
        "type2": "",
        "stats": {
            "hp": 108,
            "attack": 68,
            "defense": 45,
            "specialAttack": 30,
            "specialDefense": 40,
            "speed": 43
        }
    },
    {
        "id": 975,
        "name_de": "Kolowal",
        "name_en": "cetitan",
        "type1": "Eis",
        "type2": "",
        "stats": {
            "hp": 170,
            "attack": 113,
            "defense": 65,
            "specialAttack": 45,
            "specialDefense": 55,
            "speed": 73
        }
    },
    {
        "id": 976,
        "name_de": "Agiluza",
        "name_en": "veluza",
        "type1": "Wasser",
        "type2": "Psycho",
        "stats": {
            "hp": 90,
            "attack": 102,
            "defense": 73,
            "specialAttack": 78,
            "specialDefense": 65,
            "speed": 70
        }
    },
    {
        "id": 977,
        "name_de": "Heerashai",
        "name_en": "dondozo",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 150,
            "attack": 100,
            "defense": 115,
            "specialAttack": 65,
            "specialDefense": 65,
            "speed": 35
        }
    },
    {
        "id": 978,
        "name_de": "Nigiragi",
        "name_en": "tatsugiri-curly",
        "type1": "Drache",
        "type2": "Wasser",
        "stats": {
            "hp": 68,
            "attack": 50,
            "defense": 60,
            "specialAttack": 120,
            "specialDefense": 95,
            "speed": 82
        }
    },
    {
        "id": 979,
        "name_de": "Epitaff",
        "name_en": "annihilape",
        "type1": "Kampf",
        "type2": "Geist",
        "stats": {
            "hp": 110,
            "attack": 115,
            "defense": 80,
            "specialAttack": 50,
            "specialDefense": 90,
            "speed": 90
        }
    },
    {
        "id": 980,
        "name_de": "Suelord",
        "name_en": "clodsire",
        "type1": "Gift",
        "type2": "Boden",
        "stats": {
            "hp": 130,
            "attack": 75,
            "defense": 60,
            "specialAttack": 45,
            "specialDefense": 100,
            "speed": 20
        }
    },
    {
        "id": 981,
        "name_de": "Farigiraf",
        "name_en": "farigiraf",
        "type1": "Normal",
        "type2": "Psycho",
        "stats": {
            "hp": 120,
            "attack": 90,
            "defense": 70,
            "specialAttack": 110,
            "specialDefense": 70,
            "speed": 60
        }
    },
    {
        "id": 982,
        "name_de": "Dummimisel",
        "name_en": "dudunsparce-two-segment",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 125,
            "attack": 100,
            "defense": 80,
            "specialAttack": 85,
            "specialDefense": 75,
            "speed": 55
        }
    },
    {
        "id": 983,
        "name_de": "Gladimperio",
        "name_en": "kingambit",
        "type1": "Unlicht",
        "type2": "Stahl",
        "stats": {
            "hp": 100,
            "attack": 135,
            "defense": 120,
            "specialAttack": 60,
            "specialDefense": 85,
            "speed": 50
        }
    },
    {
        "id": 984,
        "name_de": "Riesenzahn",
        "name_en": "great-tusk",
        "type1": "Boden",
        "type2": "Kampf",
        "stats": {
            "hp": 115,
            "attack": 131,
            "defense": 131,
            "specialAttack": 53,
            "specialDefense": 53,
            "speed": 87
        }
    },
    {
        "id": 985,
        "name_de": "Brüllschweif",
        "name_en": "scream-tail",
        "type1": "Fee",
        "type2": "Psycho",
        "stats": {
            "hp": 115,
            "attack": 65,
            "defense": 99,
            "specialAttack": 65,
            "specialDefense": 115,
            "speed": 111
        }
    },
    {
        "id": 986,
        "name_de": "Wutpilz",
        "name_en": "brute-bonnet",
        "type1": "Pflanze",
        "type2": "Unlicht",
        "stats": {
            "hp": 111,
            "attack": 127,
            "defense": 99,
            "specialAttack": 79,
            "specialDefense": 99,
            "speed": 55
        }
    },
    {
        "id": 987,
        "name_de": "Flatterhaar",
        "name_en": "flutter-mane",
        "type1": "Geist",
        "type2": "Fee",
        "stats": {
            "hp": 55,
            "attack": 55,
            "defense": 55,
            "specialAttack": 135,
            "specialDefense": 135,
            "speed": 135
        }
    },
    {
        "id": 988,
        "name_de": "Kriechflügel",
        "name_en": "slither-wing",
        "type1": "Käfer",
        "type2": "Kampf",
        "stats": {
            "hp": 85,
            "attack": 135,
            "defense": 79,
            "specialAttack": 85,
            "specialDefense": 105,
            "speed": 81
        }
    },
    {
        "id": 989,
        "name_de": "Sandfell",
        "name_en": "sandy-shocks",
        "type1": "Elektro",
        "type2": "Boden",
        "stats": {
            "hp": 85,
            "attack": 81,
            "defense": 97,
            "specialAttack": 121,
            "specialDefense": 85,
            "speed": 101
        }
    },
    {
        "id": 990,
        "name_de": "Eisenrad",
        "name_en": "iron-treads",
        "type1": "Boden",
        "type2": "Stahl",
        "stats": {
            "hp": 90,
            "attack": 112,
            "defense": 120,
            "specialAttack": 72,
            "specialDefense": 70,
            "speed": 106
        }
    },
    {
        "id": 991,
        "name_de": "Eisenbündel",
        "name_en": "iron-bundle",
        "type1": "Eis",
        "type2": "Wasser",
        "stats": {
            "hp": 56,
            "attack": 80,
            "defense": 114,
            "specialAttack": 124,
            "specialDefense": 60,
            "speed": 136
        }
    },
    {
        "id": 992,
        "name_de": "Eisenhand",
        "name_en": "iron-hands",
        "type1": "Kampf",
        "type2": "Elektro",
        "stats": {
            "hp": 154,
            "attack": 140,
            "defense": 108,
            "specialAttack": 50,
            "specialDefense": 68,
            "speed": 50
        }
    },
    {
        "id": 993,
        "name_de": "Eisenhals",
        "name_en": "iron-jugulis",
        "type1": "Unlicht",
        "type2": "Flug",
        "stats": {
            "hp": 94,
            "attack": 80,
            "defense": 86,
            "specialAttack": 122,
            "specialDefense": 80,
            "speed": 108
        }
    },
    {
        "id": 994,
        "name_de": "Eisenfalter",
        "name_en": "iron-moth",
        "type1": "Feuer",
        "type2": "Gift",
        "stats": {
            "hp": 80,
            "attack": 70,
            "defense": 60,
            "specialAttack": 140,
            "specialDefense": 110,
            "speed": 110
        }
    },
    {
        "id": 995,
        "name_de": "Eisendorn",
        "name_en": "iron-thorns",
        "type1": "Gestein",
        "type2": "Elektro",
        "stats": {
            "hp": 100,
            "attack": 134,
            "defense": 110,
            "specialAttack": 70,
            "specialDefense": 84,
            "speed": 72
        }
    },
    {
        "id": 996,
        "name_de": "Frospino",
        "name_en": "frigibax",
        "type1": "Drache",
        "type2": "Eis",
        "stats": {
            "hp": 65,
            "attack": 75,
            "defense": 45,
            "specialAttack": 35,
            "specialDefense": 45,
            "speed": 55
        }
    },
    {
        "id": 997,
        "name_de": "Cryospino",
        "name_en": "arctibax",
        "type1": "Drache",
        "type2": "Eis",
        "stats": {
            "hp": 90,
            "attack": 95,
            "defense": 66,
            "specialAttack": 45,
            "specialDefense": 65,
            "speed": 62
        }
    },
    {
        "id": 998,
        "name_de": "Espinodon",
        "name_en": "baxcalibur",
        "type1": "Drache",
        "type2": "Eis",
        "stats": {
            "hp": 115,
            "attack": 145,
            "defense": 92,
            "specialAttack": 75,
            "specialDefense": 86,
            "speed": 87
        }
    },
    {
        "id": 999,
        "name_de": "Gierspenst",
        "name_en": "gimmighoul",
        "type1": "Geist",
        "type2": "",
        "stats": {
            "hp": 45,
            "attack": 30,
            "defense": 70,
            "specialAttack": 75,
            "specialDefense": 70,
            "speed": 10
        }
    },
    {
        "id": 1000,
        "name_de": "Monetigo",
        "name_en": "gholdengo",
        "type1": "Stahl",
        "type2": "Geist",
        "stats": {
            "hp": 87,
            "attack": 60,
            "defense": 95,
            "specialAttack": 133,
            "specialDefense": 91,
            "speed": 84
        }
    },
    {
        "id": 1001,
        "name_de": "Chongjian",
        "name_en": "wo-chien",
        "type1": "Unlicht",
        "type2": "Pflanze",
        "stats": {
            "hp": 85,
            "attack": 85,
            "defense": 100,
            "specialAttack": 95,
            "specialDefense": 135,
            "speed": 70
        }
    },
    {
        "id": 1002,
        "name_de": "Baojian",
        "name_en": "chien-pao",
        "type1": "Unlicht",
        "type2": "Eis",
        "stats": {
            "hp": 80,
            "attack": 120,
            "defense": 80,
            "specialAttack": 90,
            "specialDefense": 65,
            "speed": 135
        }
    },
    {
        "id": 1003,
        "name_de": "Dinglu",
        "name_en": "ting-lu",
        "type1": "Unlicht",
        "type2": "Boden",
        "stats": {
            "hp": 155,
            "attack": 110,
            "defense": 125,
            "specialAttack": 55,
            "specialDefense": 80,
            "speed": 45
        }
    },
    {
        "id": 1004,
        "name_de": "Yuyu",
        "name_en": "chi-yu",
        "type1": "Unlicht",
        "type2": "Feuer",
        "stats": {
            "hp": 55,
            "attack": 80,
            "defense": 80,
            "specialAttack": 135,
            "specialDefense": 120,
            "speed": 100
        }
    },
    {
        "id": 1005,
        "name_de": "Donnersichel",
        "name_en": "roaring-moon",
        "type1": "Drache",
        "type2": "Unlicht",
        "stats": {
            "hp": 105,
            "attack": 139,
            "defense": 71,
            "specialAttack": 55,
            "specialDefense": 101,
            "speed": 119
        }
    },
    {
        "id": 1006,
        "name_de": "Eisenkrieger",
        "name_en": "iron-valiant",
        "type1": "Fee",
        "type2": "Kampf",
        "stats": {
            "hp": 74,
            "attack": 130,
            "defense": 90,
            "specialAttack": 120,
            "specialDefense": 60,
            "speed": 116
        }
    },
    {
        "id": 1007,
        "name_de": "Koraidon",
        "name_en": "koraidon",
        "type1": "Kampf",
        "type2": "Drache",
        "stats": {
            "hp": 100,
            "attack": 135,
            "defense": 115,
            "specialAttack": 85,
            "specialDefense": 100,
            "speed": 135
        }
    },
    {
        "id": 1008,
        "name_de": "Miraidon",
        "name_en": "miraidon",
        "type1": "Elektro",
        "type2": "Drache",
        "stats": {
            "hp": 100,
            "attack": 85,
            "defense": 100,
            "specialAttack": 135,
            "specialDefense": 115,
            "speed": 135
        }
    },
    {
        "id": 1009,
        "name_de": "Windewoge",
        "name_en": "walking-wake",
        "type1": "Wasser",
        "type2": "Drache",
        "stats": {
            "hp": 99,
            "attack": 83,
            "defense": 91,
            "specialAttack": 125,
            "specialDefense": 83,
            "speed": 109
        }
    },
    {
        "id": 1010,
        "name_de": "Eisenblatt",
        "name_en": "iron-leaves",
        "type1": "Pflanze",
        "type2": "Psycho",
        "stats": {
            "hp": 90,
            "attack": 130,
            "defense": 88,
            "specialAttack": 70,
            "specialDefense": 108,
            "speed": 104
        }
    },
    {
        "id": 1011,
        "name_de": "Sirapfel",
        "name_en": "dipplin",
        "type1": "Pflanze",
        "type2": "Drache",
        "stats": {
            "hp": 80,
            "attack": 80,
            "defense": 110,
            "specialAttack": 95,
            "specialDefense": 80,
            "speed": 40
        }
    },
    {
        "id": 1012,
        "name_de": "Mortcha",
        "name_en": "poltchageist",
        "type1": "Pflanze",
        "type2": "Geist",
        "stats": {
            "hp": 40,
            "attack": 45,
            "defense": 45,
            "specialAttack": 74,
            "specialDefense": 54,
            "speed": 50
        }
    },
    {
        "id": 1013,
        "name_de": "Fatalitcha",
        "name_en": "sinistcha",
        "type1": "Pflanze",
        "type2": "Geist",
        "stats": {
            "hp": 71,
            "attack": 60,
            "defense": 106,
            "specialAttack": 121,
            "specialDefense": 80,
            "speed": 70
        }
    },
    {
        "id": 1014,
        "name_de": "Boninu",
        "name_en": "okidogi",
        "type1": "Gift",
        "type2": "Kampf",
        "stats": {
            "hp": 88,
            "attack": 128,
            "defense": 115,
            "specialAttack": 58,
            "specialDefense": 86,
            "speed": 80
        }
    },
    {
        "id": 1015,
        "name_de": "Benesaru",
        "name_en": "munkidori",
        "type1": "Gift",
        "type2": "Psycho",
        "stats": {
            "hp": 88,
            "attack": 75,
            "defense": 66,
            "specialAttack": 130,
            "specialDefense": 90,
            "speed": 106
        }
    },
    {
        "id": 1016,
        "name_de": "Beatori",
        "name_en": "fezandipiti",
        "type1": "Gift",
        "type2": "Fee",
        "stats": {
            "hp": 88,
            "attack": 91,
            "defense": 82,
            "specialAttack": 70,
            "specialDefense": 125,
            "speed": 99
        }
    },
    {
        "id": 1017,
        "name_de": "Ogerpon",
        "name_en": "ogerpon",
        "type1": "Pflanze",
        "type2": "",
        "stats": {
            "hp": 80,
            "attack": 120,
            "defense": 84,
            "specialAttack": 60,
            "specialDefense": 96,
            "speed": 110
        }
    },
    {
        "id": 1018,
        "name_de": "Briduradon",
        "name_en": "archaludon",
        "type1": "Stahl",
        "type2": "Drache",
        "stats": {
            "hp": 90,
            "attack": 105,
            "defense": 130,
            "specialAttack": 125,
            "specialDefense": 65,
            "speed": 85
        }
    },
    {
        "id": 1019,
        "name_de": "Hydrapfel",
        "name_en": "hydrapple",
        "type1": "Pflanze",
        "type2": "Drache",
        "stats": {
            "hp": 106,
            "attack": 80,
            "defense": 110,
            "specialAttack": 120,
            "specialDefense": 80,
            "speed": 44
        }
    },
    {
        "id": 1020,
        "name_de": "Keilflamme",
        "name_en": "gouging-fire",
        "type1": "Feuer",
        "type2": "Drache",
        "stats": {
            "hp": 105,
            "attack": 115,
            "defense": 121,
            "specialAttack": 65,
            "specialDefense": 93,
            "speed": 91
        }
    },
    {
        "id": 1021,
        "name_de": "Furienblitz",
        "name_en": "raging-bolt",
        "type1": "Elektro",
        "type2": "Drache",
        "stats": {
            "hp": 125,
            "attack": 73,
            "defense": 91,
            "specialAttack": 137,
            "specialDefense": 89,
            "speed": 75
        }
    },
    {
        "id": 1022,
        "name_de": "Eisenfels",
        "name_en": "iron-boulder",
        "type1": "Gestein",
        "type2": "Psycho",
        "stats": {
            "hp": 90,
            "attack": 120,
            "defense": 80,
            "specialAttack": 68,
            "specialDefense": 108,
            "speed": 124
        }
    },
    {
        "id": 1023,
        "name_de": "Eisenhaupt",
        "name_en": "iron-crown",
        "type1": "Stahl",
        "type2": "Psycho",
        "stats": {
            "hp": 90,
            "attack": 72,
            "defense": 100,
            "specialAttack": 122,
            "specialDefense": 108,
            "speed": 98
        }
    },
    {
        "id": 1024,
        "name_de": "Terapagos",
        "name_en": "terapagos",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 90,
            "attack": 65,
            "defense": 85,
            "specialAttack": 65,
            "specialDefense": 85,
            "speed": 60
        }
    },
    {
        "id": 1025,
        "name_de": "Infamomo",
        "name_en": "pecharunt",
        "type1": "Gift",
        "type2": "Geist",
        "stats": {
            "hp": 88,
            "attack": 88,
            "defense": 160,
            "specialAttack": 88,
            "specialDefense": 88,
            "speed": 88
        }
    },
    {
        "id": 10001,
        "name_de": "Deoxys (Angr)",
        "name_en": "deoxys-attack",
        "type1": "Psycho",
        "type2": "",
        "stats": {
            "hp": 50,
            "attack": 180,
            "defense": 20,
            "specialAttack": 180,
            "specialDefense": 20,
            "speed": 150
        }
    },
    {
        "id": 10002,
        "name_de": "Deoxys (Abw)",
        "name_en": "deoxys-defense",
        "type1": "Psycho",
        "type2": "",
        "stats": {
            "hp": 50,
            "attack": 70,
            "defense": 160,
            "specialAttack": 70,
            "specialDefense": 160,
            "speed": 90
        }
    },
    {
        "id": 10003,
        "name_de": "Deoxys (Init)",
        "name_en": "deoxys-speed",
        "type1": "Psycho",
        "type2": "",
        "stats": {
            "hp": 50,
            "attack": 95,
            "defense": 90,
            "specialAttack": 95,
            "specialDefense": 90,
            "speed": 180
        }
    },
    {
        "id": 10004,
        "name_de": "Burmadame (Sand)",
        "name_en": "wormadam-sandy",
        "type1": "Käfer",
        "type2": "Boden",
        "stats": {
            "hp": 60,
            "attack": 79,
            "defense": 105,
            "specialAttack": 59,
            "specialDefense": 85,
            "speed": 36
        }
    },
    {
        "id": 10005,
        "name_de": "Burmadame (Müll)",
        "name_en": "wormadam-trash",
        "type1": "Käfer",
        "type2": "Stahl",
        "stats": {
            "hp": 60,
            "attack": 69,
            "defense": 95,
            "specialAttack": 69,
            "specialDefense": 95,
            "speed": 36
        }
    },
    {
        "id": 10006,
        "name_de": "Shaymin (Zenit)",
        "name_en": "shaymin-sky",
        "type1": "Pflanze",
        "type2": "Flug",
        "stats": {
            "hp": 100,
            "attack": 103,
            "defense": 75,
            "specialAttack": 120,
            "specialDefense": 75,
            "speed": 127
        }
    },
    {
        "id": 10007,
        "name_de": "Giratina (Ur)",
        "name_en": "giratina-origin",
        "type1": "Geist",
        "type2": "Drache",
        "stats": {
            "hp": 150,
            "attack": 120,
            "defense": 100,
            "specialAttack": 120,
            "specialDefense": 100,
            "speed": 90
        }
    },
    {
        "id": 10008,
        "name_de": "Rotom (Hitze)",
        "name_en": "rotom-heat",
        "type1": "Elektro",
        "type2": "Feuer",
        "stats": {
            "hp": 50,
            "attack": 65,
            "defense": 107,
            "specialAttack": 105,
            "specialDefense": 107,
            "speed": 86
        }
    },
    {
        "id": 10009,
        "name_de": "Rotom (Wasch)",
        "name_en": "rotom-wash",
        "type1": "Elektro",
        "type2": "Wasser",
        "stats": {
            "hp": 50,
            "attack": 65,
            "defense": 107,
            "specialAttack": 105,
            "specialDefense": 107,
            "speed": 86
        }
    },
    {
        "id": 10010,
        "name_de": "Rotom (Frost)",
        "name_en": "rotom-frost",
        "type1": "Elektro",
        "type2": "Eis",
        "stats": {
            "hp": 50,
            "attack": 65,
            "defense": 107,
            "specialAttack": 105,
            "specialDefense": 107,
            "speed": 86
        }
    },
    {
        "id": 10011,
        "name_de": "Rotom (Wirbel)",
        "name_en": "rotom-fan",
        "type1": "Elektro",
        "type2": "Flug",
        "stats": {
            "hp": 50,
            "attack": 65,
            "defense": 107,
            "specialAttack": 105,
            "specialDefense": 107,
            "speed": 86
        }
    },
    {
        "id": 10012,
        "name_de": "Rotom (Schneid)",
        "name_en": "rotom-mow",
        "type1": "Elektro",
        "type2": "Pflanze",
        "stats": {
            "hp": 50,
            "attack": 65,
            "defense": 107,
            "specialAttack": 105,
            "specialDefense": 107,
            "speed": 86
        }
    },
    {
        "id": 10013,
        "name_de": "Formeo (sonnig)",
        "name_en": "castform-sunny",
        "type1": "Feuer",
        "type2": "",
        "stats": {
            "hp": 70,
            "attack": 70,
            "defense": 70,
            "specialAttack": 70,
            "specialDefense": 70,
            "speed": 70
        }
    },
    {
        "id": 10014,
        "name_de": "Formeo (Regen)",
        "name_en": "castform-rainy",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 70,
            "attack": 70,
            "defense": 70,
            "specialAttack": 70,
            "specialDefense": 70,
            "speed": 70
        }
    },
    {
        "id": 10015,
        "name_de": "Formeo (Schnee)",
        "name_en": "castform-snowy",
        "type1": "Eis",
        "type2": "",
        "stats": {
            "hp": 70,
            "attack": 70,
            "defense": 70,
            "specialAttack": 70,
            "specialDefense": 70,
            "speed": 70
        }
    },



    {
        "id": 10017,
        "name_de": "Flampivian (Zen)",
        "name_en": "darmanitan-zen",
        "type1": "Feuer",
        "type2": "Psycho",
        "stats": {
            "hp": 105,
            "attack": 30,
            "defense": 105,
            "specialAttack": 140,
            "specialDefense": 105,
            "speed": 55
        }
    },
    {
        "id": 10018,
        "name_de": "Meloetta (Pir.)",
        "name_en": "meloetta-pirouette",
        "type1": "Normal",
        "type2": "Kampf",
        "stats": {
            "hp": 100,
            "attack": 128,
            "defense": 90,
            "specialAttack": 77,
            "specialDefense": 77,
            "speed": 128
        }
    },
    {
        "id": 10019,
        "name_de": "Boreos (Tier)",
        "name_en": "tornadus-therian",
        "type1": "Flug",
        "type2": "",
        "stats": {
            "hp": 79,
            "attack": 100,
            "defense": 80,
            "specialAttack": 110,
            "specialDefense": 90,
            "speed": 121
        }
    },
    {
        "id": 10020,
        "name_de": "Voltolos (Tier)",
        "name_en": "thundurus-therian",
        "type1": "Elektro",
        "type2": "Flug",
        "stats": {
            "hp": 79,
            "attack": 105,
            "defense": 70,
            "specialAttack": 145,
            "specialDefense": 80,
            "speed": 101
        }
    },
    {
        "id": 10021,
        "name_de": "Demeteros (Tier)",
        "name_en": "landorus-therian",
        "type1": "Boden",
        "type2": "Flug",
        "stats": {
            "hp": 89,
            "attack": 145,
            "defense": 90,
            "specialAttack": 105,
            "specialDefense": 80,
            "speed": 91
        }
    },
    {
        "id": 10022,
        "name_de": "Kyurem schwarz",
        "name_en": "kyurem-black",
        "type1": "Drache",
        "type2": "Eis",
        "stats": {
            "hp": 125,
            "attack": 170,
            "defense": 100,
            "specialAttack": 120,
            "specialDefense": 90,
            "speed": 95
        }
    },
    {
        "id": 10023,
        "name_de": "Kyurem weiss",
        "name_en": "kyurem-white",
        "type1": "Drache",
        "type2": "Eis",
        "stats": {
            "hp": 125,
            "attack": 120,
            "defense": 90,
            "specialAttack": 170,
            "specialDefense": 100,
            "speed": 95
        }
    },
    {
        "id": 10024,
        "name_de": "Keldeo (res.)",
        "name_en": "keldeo-resolute",
        "type1": "Wasser",
        "type2": "Kampf",
        "stats": {
            "hp": 91,
            "attack": 72,
            "defense": 90,
            "specialAttack": 129,
            "specialDefense": 90,
            "speed": 108
        }
    },
    {
        "id": 10025,
        "name_de": "Psiaugon (w)",
        "name_en": "meowstic-female",
        "type1": "Psycho",
        "type2": "",
        "stats": {
            "hp": 74,
            "attack": 48,
            "defense": 76,
            "specialAttack": 83,
            "specialDefense": 81,
            "speed": 104
        }
    },
    {
        "id": 10026,
        "name_de": "Durengard (Klinge)",
        "name_en": "aegislash-blade",
        "type1": "Stahl",
        "type2": "Geist",
        "stats": {
            "hp": 60,
            "attack": 140,
            "defense": 50,
            "specialAttack": 140,
            "specialDefense": 50,
            "speed": 60
        }
    },
    {
        "id": 10027,
        "name_de": "Irrbis S",
        "name_en": "pumpkaboo-small",
        "type1": "Geist",
        "type2": "Pflanze",
        "stats": {
            "hp": 44,
            "attack": 66,
            "defense": 70,
            "specialAttack": 44,
            "specialDefense": 55,
            "speed": 56
        }
    },
    {
        "id": 10028,
        "name_de": "Irrbis L",
        "name_en": "pumpkaboo-large",
        "type1": "Geist",
        "type2": "Pflanze",
        "stats": {
            "hp": 54,
            "attack": 66,
            "defense": 70,
            "specialAttack": 44,
            "specialDefense": 55,
            "speed": 46
        }
    },
    {
        "id": 10029,
        "name_de": "Irrbis XL",
        "name_en": "pumpkaboo-super",
        "type1": "Geist",
        "type2": "Pflanze",
        "stats": {
            "hp": 59,
            "attack": 66,
            "defense": 70,
            "specialAttack": 44,
            "specialDefense": 55,
            "speed": 41
        }
    },
    {
        "id": 10030,
        "name_de": "Pumpdjinn S",
        "name_en": "gourgeist-small",
        "type1": "Geist",
        "type2": "Pflanze",
        "stats": {
            "hp": 55,
            "attack": 85,
            "defense": 122,
            "specialAttack": 58,
            "specialDefense": 75,
            "speed": 99
        }
    },
    {
        "id": 10031,
        "name_de": "Pumpdjinn L",
        "name_en": "gourgeist-large",
        "type1": "Geist",
        "type2": "Pflanze",
        "stats": {
            "hp": 75,
            "attack": 95,
            "defense": 122,
            "specialAttack": 58,
            "specialDefense": 75,
            "speed": 69
        }
    },
    {
        "id": 10032,
        "name_de": "Pumpdjinn XL",
        "name_en": "gourgeist-super",
        "type1": "Geist",
        "type2": "Pflanze",
        "stats": {
            "hp": 85,
            "attack": 100,
            "defense": 122,
            "specialAttack": 58,
            "specialDefense": 75,
            "speed": 54
        }
    },
    {
        "id": 10033,
        "name_de": "Bisaflor",
        "name_en": "venusaur-mega",
        "type1": "Pflanze",
        "type2": "Gift",
        "stats": {
            "hp": 80,
            "attack": 100,
            "defense": 123,
            "specialAttack": 122,
            "specialDefense": 120,
            "speed": 80
        }
    },
    {
        "id": 10034,
        "name_de": "Glurak-X",
        "name_en": "charizard-mega-x",
        "type1": "Feuer",
        "type2": "Drache",
        "stats": {
            "hp": 78,
            "attack": 130,
            "defense": 111,
            "specialAttack": 130,
            "specialDefense": 85,
            "speed": 100
        }
    },
    {
        "id": 10035,
        "name_de": "Glurak-Y",
        "name_en": "charizard-mega-y",
        "type1": "Feuer",
        "type2": "Flug",
        "stats": {
            "hp": 78,
            "attack": 104,
            "defense": 78,
            "specialAttack": 159,
            "specialDefense": 115,
            "speed": 100
        }
    },
    {
        "id": 10036,
        "name_de": "Turtok",
        "name_en": "blastoise-mega",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 79,
            "attack": 103,
            "defense": 120,
            "specialAttack": 135,
            "specialDefense": 115,
            "speed": 78
        }
    },
    {
        "id": 10037,
        "name_de": "Simsala",
        "name_en": "alakazam-mega",
        "type1": "Psycho",
        "type2": "",
        "stats": {
            "hp": 55,
            "attack": 50,
            "defense": 65,
            "specialAttack": 175,
            "specialDefense": 105,
            "speed": 150
        }
    },
    {
        "id": 10038,
        "name_de": "Gengar",
        "name_en": "gengar-mega",
        "type1": "Geist",
        "type2": "Gift",
        "stats": {
            "hp": 60,
            "attack": 65,
            "defense": 80,
            "specialAttack": 170,
            "specialDefense": 95,
            "speed": 130
        }
    },
    {
        "id": 10039,
        "name_de": "Kangama",
        "name_en": "kangaskhan-mega",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 105,
            "attack": 125,
            "defense": 100,
            "specialAttack": 60,
            "specialDefense": 100,
            "speed": 100
        }
    },
    {
        "id": 10040,
        "name_de": "Pinsir",
        "name_en": "pinsir-mega",
        "type1": "Käfer",
        "type2": "Flug",
        "stats": {
            "hp": 65,
            "attack": 155,
            "defense": 120,
            "specialAttack": 65,
            "specialDefense": 90,
            "speed": 105
        }
    },
    {
        "id": 10041,
        "name_de": "Garados",
        "name_en": "gyarados-mega",
        "type1": "Wasser",
        "type2": "Unlicht",
        "stats": {
            "hp": 95,
            "attack": 155,
            "defense": 109,
            "specialAttack": 70,
            "specialDefense": 130,
            "speed": 81
        }
    },
    {
        "id": 10042,
        "name_de": "Aerodactyl",
        "name_en": "aerodactyl-mega",
        "type1": "Gestein",
        "type2": "Flug",
        "stats": {
            "hp": 80,
            "attack": 135,
            "defense": 85,
            "specialAttack": 70,
            "specialDefense": 95,
            "speed": 150
        }
    },
    {
        "id": 10043,
        "name_de": "Mewtu-X",
        "name_en": "mewtwo-mega-x",
        "type1": "Psycho",
        "type2": "Kampf",
        "stats": {
            "hp": 106,
            "attack": 190,
            "defense": 100,
            "specialAttack": 154,
            "specialDefense": 100,
            "speed": 130
        }
    },
    {
        "id": 10044,
        "name_de": "Mewtu-Y",
        "name_en": "mewtwo-mega-y",
        "type1": "Psycho",
        "type2": "",
        "stats": {
            "hp": 106,
            "attack": 150,
            "defense": 70,
            "specialAttack": 194,
            "specialDefense": 120,
            "speed": 140
        }
    },
    {
        "id": 10045,
        "name_de": "Ampharos",
        "name_en": "ampharos-mega",
        "type1": "Elektro",
        "type2": "Drache",
        "stats": {
            "hp": 90,
            "attack": 95,
            "defense": 105,
            "specialAttack": 165,
            "specialDefense": 110,
            "speed": 45
        }
    },
    {
        "id": 10046,
        "name_de": "Scherox",
        "name_en": "scizor-mega",
        "type1": "Käfer",
        "type2": "Stahl",
        "stats": {
            "hp": 70,
            "attack": 150,
            "defense": 140,
            "specialAttack": 65,
            "specialDefense": 100,
            "speed": 75
        }
    },
    {
        "id": 10047,
        "name_de": "Skaraborn",
        "name_en": "heracross-mega",
        "type1": "Käfer",
        "type2": "Kampf",
        "stats": {
            "hp": 80,
            "attack": 185,
            "defense": 115,
            "specialAttack": 40,
            "specialDefense": 105,
            "speed": 75
        }
    },
    {
        "id": 10048,
        "name_de": "Hundemon",
        "name_en": "houndoom-mega",
        "type1": "Unlicht",
        "type2": "Feuer",
        "stats": {
            "hp": 75,
            "attack": 90,
            "defense": 90,
            "specialAttack": 140,
            "specialDefense": 90,
            "speed": 115
        }
    },
    {
        "id": 10049,
        "name_de": "Despotar",
        "name_en": "tyranitar-mega",
        "type1": "Gestein",
        "type2": "Unlicht",
        "stats": {
            "hp": 100,
            "attack": 164,
            "defense": 150,
            "specialAttack": 95,
            "specialDefense": 120,
            "speed": 71
        }
    },
    {
        "id": 10050,
        "name_de": "Lohgock",
        "name_en": "blaziken-mega",
        "type1": "Feuer",
        "type2": "Kampf",
        "stats": {
            "hp": 80,
            "attack": 160,
            "defense": 80,
            "specialAttack": 130,
            "specialDefense": 80,
            "speed": 100
        }
    },
    {
        "id": 10051,
        "name_de": "Guardevoir",
        "name_en": "gardevoir-mega",
        "type1": "Psycho",
        "type2": "Fee",
        "stats": {
            "hp": 68,
            "attack": 85,
            "defense": 65,
            "specialAttack": 165,
            "specialDefense": 135,
            "speed": 100
        }
    },
    {
        "id": 10052,
        "name_de": "Flunkifer",
        "name_en": "mawile-mega",
        "type1": "Stahl",
        "type2": "Fee",
        "stats": {
            "hp": 50,
            "attack": 105,
            "defense": 125,
            "specialAttack": 55,
            "specialDefense": 95,
            "speed": 50
        }
    },
    {
        "id": 10053,
        "name_de": "Stolloss",
        "name_en": "aggron-mega",
        "type1": "Stahl",
        "type2": "",
        "stats": {
            "hp": 70,
            "attack": 140,
            "defense": 230,
            "specialAttack": 60,
            "specialDefense": 80,
            "speed": 50
        }
    },
    {
        "id": 10054,
        "name_de": "Meditalis",
        "name_en": "medicham-mega",
        "type1": "Kampf",
        "type2": "Psycho",
        "stats": {
            "hp": 60,
            "attack": 100,
            "defense": 85,
            "specialAttack": 80,
            "specialDefense": 85,
            "speed": 100
        }
    },
    {
        "id": 10055,
        "name_de": "Voltenso",
        "name_en": "manectric-mega",
        "type1": "Elektro",
        "type2": "",
        "stats": {
            "hp": 70,
            "attack": 75,
            "defense": 80,
            "specialAttack": 135,
            "specialDefense": 80,
            "speed": 135
        }
    },
    {
        "id": 10056,
        "name_de": "Banette",
        "name_en": "banette-mega",
        "type1": "Geist",
        "type2": "",
        "stats": {
            "hp": 64,
            "attack": 165,
            "defense": 75,
            "specialAttack": 93,
            "specialDefense": 83,
            "speed": 75
        }
    },
    {
        "id": 10057,
        "name_de": "Absol",
        "name_en": "absol-mega",
        "type1": "Unlicht",
        "type2": "",
        "stats": {
            "hp": 65,
            "attack": 150,
            "defense": 60,
            "specialAttack": 115,
            "specialDefense": 60,
            "speed": 115
        }
    },
    {
        "id": 10058,
        "name_de": "Knakrack",
        "name_en": "garchomp-mega",
        "type1": "Drache",
        "type2": "Boden",
        "stats": {
            "hp": 108,
            "attack": 170,
            "defense": 115,
            "specialAttack": 120,
            "specialDefense": 95,
            "speed": 92
        }
    },
    {
        "id": 10059,
        "name_de": "Lucario",
        "name_en": "lucario-mega",
        "type1": "Kampf",
        "type2": "Stahl",
        "stats": {
            "hp": 70,
            "attack": 145,
            "defense": 88,
            "specialAttack": 140,
            "specialDefense": 70,
            "speed": 112
        }
    },
    {
        "id": 10060,
        "name_de": "Rexblisar",
        "name_en": "abomasnow-mega",
        "type1": "Pflanze",
        "type2": "Eis",
        "stats": {
            "hp": 90,
            "attack": 132,
            "defense": 105,
            "specialAttack": 132,
            "specialDefense": 105,
            "speed": 30
        }
    },
    {
        "id": 10061,
        "name_de": "Floette",
        "name_en": "floette-eternal",
        "type1": "Fee",
        "type2": "",
        "stats": {
            "hp": 74,
            "attack": 65,
            "defense": 67,
            "specialAttack": 125,
            "specialDefense": 128,
            "speed": 92
        }
    },
    {
        "id": 10062,
        "name_de": "Latias",
        "name_en": "latias-mega",
        "type1": "Drache",
        "type2": "Psycho",
        "stats": {
            "hp": 80,
            "attack": 100,
            "defense": 120,
            "specialAttack": 140,
            "specialDefense": 150,
            "speed": 110
        }
    },
    {
        "id": 10063,
        "name_de": "Latios",
        "name_en": "latios-mega",
        "type1": "Drache",
        "type2": "Psycho",
        "stats": {
            "hp": 80,
            "attack": 130,
            "defense": 100,
            "specialAttack": 160,
            "specialDefense": 120,
            "speed": 110
        }
    },
    {
        "id": 10064,
        "name_de": "Sumpex",
        "name_en": "swampert-mega",
        "type1": "Wasser",
        "type2": "Boden",
        "stats": {
            "hp": 100,
            "attack": 150,
            "defense": 110,
            "specialAttack": 95,
            "specialDefense": 110,
            "speed": 70
        }
    },
    {
        "id": 10065,
        "name_de": "Gewaldro",
        "name_en": "sceptile-mega",
        "type1": "Pflanze",
        "type2": "Drache",
        "stats": {
            "hp": 70,
            "attack": 110,
            "defense": 75,
            "specialAttack": 145,
            "specialDefense": 85,
            "speed": 145
        }
    },
    {
        "id": 10066,
        "name_de": "Zobiris",
        "name_en": "sableye-mega",
        "type1": "Unlicht",
        "type2": "Geist",
        "stats": {
            "hp": 50,
            "attack": 85,
            "defense": 125,
            "specialAttack": 85,
            "specialDefense": 115,
            "speed": 20
        }
    },
    {
        "id": 10067,
        "name_de": "Altaria",
        "name_en": "altaria-mega",
        "type1": "Drache",
        "type2": "Fee",
        "stats": {
            "hp": 75,
            "attack": 110,
            "defense": 110,
            "specialAttack": 110,
            "specialDefense": 105,
            "speed": 80
        }
    },
    {
        "id": 10068,
        "name_de": "Galagladi",
        "name_en": "gallade-mega",
        "type1": "Psycho",
        "type2": "Kampf",
        "stats": {
            "hp": 68,
            "attack": 165,
            "defense": 95,
            "specialAttack": 65,
            "specialDefense": 115,
            "speed": 110
        }
    },
    {
        "id": 10069,
        "name_de": "Ohrdoch",
        "name_en": "audino-mega",
        "type1": "Normal",
        "type2": "Fee",
        "stats": {
            "hp": 103,
            "attack": 60,
            "defense": 126,
            "specialAttack": 80,
            "specialDefense": 126,
            "speed": 50
        }
    },
    {
        "id": 10070,
        "name_de": "Tohaido",
        "name_en": "sharpedo-mega",
        "type1": "Wasser",
        "type2": "Unlicht",
        "stats": {
            "hp": 70,
            "attack": 140,
            "defense": 70,
            "specialAttack": 110,
            "specialDefense": 65,
            "speed": 105
        }
    },
    {
        "id": 10071,
        "name_de": "Lahmus",
        "name_en": "slowbro-mega",
        "type1": "Wasser",
        "type2": "Psycho",
        "stats": {
            "hp": 95,
            "attack": 75,
            "defense": 180,
            "specialAttack": 130,
            "specialDefense": 80,
            "speed": 30
        }
    },
    {
        "id": 10072,
        "name_de": "Stahlos",
        "name_en": "steelix-mega",
        "type1": "Stahl",
        "type2": "Boden",
        "stats": {
            "hp": 75,
            "attack": 125,
            "defense": 230,
            "specialAttack": 55,
            "specialDefense": 95,
            "speed": 30
        }
    },
    {
        "id": 10073,
        "name_de": "Tauboss",
        "name_en": "pidgeot-mega",
        "type1": "Normal",
        "type2": "Flug",
        "stats": {
            "hp": 83,
            "attack": 80,
            "defense": 80,
            "specialAttack": 135,
            "specialDefense": 80,
            "speed": 121
        }
    },
    {
        "id": 10074,
        "name_de": "Firnontor",
        "name_en": "glalie-mega",
        "type1": "Eis",
        "type2": "",
        "stats": {
            "hp": 80,
            "attack": 120,
            "defense": 80,
            "specialAttack": 120,
            "specialDefense": 80,
            "speed": 100
        }
    },
    {
        "id": 10075,
        "name_de": "Diancie",
        "name_en": "diancie-mega",
        "type1": "Gestein",
        "type2": "Fee",
        "stats": {
            "hp": 50,
            "attack": 160,
            "defense": 110,
            "specialAttack": 160,
            "specialDefense": 110,
            "speed": 110
        }
    },
    {
        "id": 10076,
        "name_de": "Metagross",
        "name_en": "metagross-mega",
        "type1": "Stahl",
        "type2": "Psycho",
        "stats": {
            "hp": 80,
            "attack": 145,
            "defense": 150,
            "specialAttack": 105,
            "specialDefense": 110,
            "speed": 110
        }
    },

    {
        "id": 10079,
        "name_de": "Rayquaza",
        "name_en": "rayquaza-mega",
        "type1": "Drache",
        "type2": "Flug",
        "stats": {
            "hp": 105,
            "attack": 180,
            "defense": 100,
            "specialAttack": 180,
            "specialDefense": 100,
            "speed": 115
        }
    },

    {
        "id": 10087,
        "name_de": "Camerupt",
        "name_en": "camerupt-mega",
        "type1": "Feuer",
        "type2": "Boden",
        "stats": {
            "hp": 70,
            "attack": 120,
            "defense": 100,
            "specialAttack": 145,
            "specialDefense": 105,
            "speed": 20
        }
    },
    {
        "id": 10088,
        "name_de": "Schlapor",
        "name_en": "lopunny-mega",
        "type1": "Normal",
        "type2": "Kampf",
        "stats": {
            "hp": 65,
            "attack": 136,
            "defense": 94,
            "specialAttack": 54,
            "specialDefense": 96,
            "speed": 135
        }
    },
    {
        "id": 10089,
        "name_de": "Brutalanda",
        "name_en": "salamence-mega",
        "type1": "Drache",
        "type2": "Flug",
        "stats": {
            "hp": 95,
            "attack": 145,
            "defense": 130,
            "specialAttack": 120,
            "specialDefense": 90,
            "speed": 120
        }
    },
    {
        "id": 10090,
        "name_de": "Bibor",
        "name_en": "beedrill-mega",
        "type1": "Käfer",
        "type2": "Gift",
        "stats": {
            "hp": 65,
            "attack": 150,
            "defense": 40,
            "specialAttack": 15,
            "specialDefense": 80,
            "speed": 145
        }
    },
    {
        "id": 10278,
        "name_de": "Hoopa (entf.)",
        "name_en": "hoopa-unbound",
        "type1": "Psycho",
        "type2": "Unlicht",
        "stats": {
            "hp": 80,
            "attack": 160,
            "defense": 60,
            "specialAttack": 170,
            "specialDefense": 130,
            "speed": 80
        }
    },
    {
        "id": 10091,
        "name_de": "Rattfratz",
        "name_en": "rattata-alola",
        "type1": "Unlicht",
        "type2": "Normal",
        "stats": {
            "hp": 30,
            "attack": 56,
            "defense": 35,
            "specialAttack": 25,
            "specialDefense": 35,
            "speed": 72
        }
    },
    {
        "id": 10092,
        "name_de": "Rattikarl",
        "name_en": "raticate-alola",
        "type1": "Unlicht",
        "type2": "Normal",
        "stats": {
            "hp": 75,
            "attack": 71,
            "defense": 70,
            "specialAttack": 40,
            "specialDefense": 80,
            "speed": 77
        }
    },
     {
        "id": 10100,
        "name_de": "Raichu",
        "name_en": "raichu-alola",
        "type1": "Elektro",
        "type2": "Psycho",
        "stats": {
            "hp": 60,
            "attack": 85,
            "defense": 50,
            "specialAttack": 95,
            "specialDefense": 85,
            "speed": 110
        }
    },
    {
        "id": 10101,
        "name_de": "Sandan",
        "name_en": "sandshrew-alola",
        "type1": "Eis",
        "type2": "Stahl",
        "stats": {
            "hp": 50,
            "attack": 75,
            "defense": 90,
            "specialAttack": 10,
            "specialDefense": 35,
            "speed": 40
        }
    },
    {
        "id": 10102,
        "name_de": "Sandamer",
        "name_en": "sandslash-alola",
        "type1": "Eis",
        "type2": "Stahl",
        "stats": {
            "hp": 75,
            "attack": 100,
            "defense": 120,
            "specialAttack": 25,
            "specialDefense": 65,
            "speed": 65
        }
    },
    {
        "id": 10103,
        "name_de": "Vulpix",
        "name_en": "vulpix-alola",
        "type1": "Eis",
        "type2": "",
        "stats": {
            "hp": 38,
            "attack": 41,
            "defense": 40,
            "specialAttack": 50,
            "specialDefense": 65,
            "speed": 65
        }
    },
    {
        "id": 10104,
        "name_de": "Vulnona",
        "name_en": "ninetales-alola",
        "type1": "Eis",
        "type2": "Fee",
        "stats": {
            "hp": 73,
            "attack": 67,
            "defense": 75,
            "specialAttack": 81,
            "specialDefense": 100,
            "speed": 109
        }
    },
    {
        "id": 10105,
        "name_de": "Digda",
        "name_en": "diglett-alola",
        "type1": "Boden",
        "type2": "Stahl",
        "stats": {
            "hp": 10,
            "attack": 55,
            "defense": 30,
            "specialAttack": 35,
            "specialDefense": 45,
            "speed": 90
        }
    },
    {
        "id": 10106,
        "name_de": "Digdri",
        "name_en": "dugtrio-alola",
        "type1": "Boden",
        "type2": "Stahl",
        "stats": {
            "hp": 35,
            "attack": 100,
            "defense": 60,
            "specialAttack": 50,
            "specialDefense": 70,
            "speed": 110
        }
    },
    {
        "id": 10107,
        "name_de": "Mauzi",
        "name_en": "meowth-alola",
        "type1": "Unlicht",
        "type2": "",
        "stats": {
            "hp": 40,
            "attack": 35,
            "defense": 35,
            "specialAttack": 50,
            "specialDefense": 40,
            "speed": 90
        }
    },
    {
        "id": 10108,
        "name_de": "Snobilikat",
        "name_en": "persian-alola",
        "type1": "Unlicht",
        "type2": "",
        "stats": {
            "hp": 65,
            "attack": 60,
            "defense": 60,
            "specialAttack": 75,
            "specialDefense": 65,
            "speed": 115
        }
    },
    {
        "id": 10109,
        "name_de": "Kleinstein",
        "name_en": "geodude-alola",
        "type1": "Gestein",
        "type2": "Elektro",
        "stats": {
            "hp": 40,
            "attack": 80,
            "defense": 100,
            "specialAttack": 30,
            "specialDefense": 30,
            "speed": 20
        }
    },
    {
        "id": 10110,
        "name_de": "Georok",
        "name_en": "graveler-alola",
        "type1": "Gestein",
        "type2": "Elektro",
        "stats": {
            "hp": 55,
            "attack": 95,
            "defense": 115,
            "specialAttack": 45,
            "specialDefense": 45,
            "speed": 35
        }
    },
    {
        "id": 10111,
        "name_de": "Geowaz",
        "name_en": "golem-alola",
        "type1": "Gestein",
        "type2": "Elektro",
        "stats": {
            "hp": 80,
            "attack": 120,
            "defense": 130,
            "specialAttack": 55,
            "specialDefense": 65,
            "speed": 45
        }
    },
    {
        "id": 10112,
        "name_de": "Sleima",
        "name_en": "grimer-alola",
        "type1": "Gift",
        "type2": "Unlicht",
        "stats": {
            "hp": 80,
            "attack": 80,
            "defense": 50,
            "specialAttack": 40,
            "specialDefense": 50,
            "speed": 25
        }
    },
    {
        "id": 10113,
        "name_de": "Sleimok",
        "name_en": "muk-alola",
        "type1": "Gift",
        "type2": "Unlicht",
        "stats": {
            "hp": 105,
            "attack": 105,
            "defense": 75,
            "specialAttack": 65,
            "specialDefense": 100,
            "speed": 50
        }
    },
    {
        "id": 10114,
        "name_de": "Kokowei",
        "name_en": "exeggutor-alola",
        "type1": "Pflanze",
        "type2": "Drache",
        "stats": {
            "hp": 95,
            "attack": 105,
            "defense": 85,
            "specialAttack": 125,
            "specialDefense": 75,
            "speed": 45
        }
    },
    {
        "id": 10115,
        "name_de": "Knogga",
        "name_en": "marowak-alola",
        "type1": "Feuer",
        "type2": "Geist",
        "stats": {
            "hp": 60,
            "attack": 80,
            "defense": 110,
            "specialAttack": 50,
            "specialDefense": 80,
            "speed": 45
        }
    },
    {
        "id": 10116,
        "name_de": "Quajutsu (Fr-Akt)",
        "name_en": "greninja-battle-bond",
        "type1": "Wasser",
        "type2": "Unlicht",
        "stats": {
            "hp": 72,
            "attack": 95,
            "defense": 67,
            "specialAttack": 103,
            "specialDefense": 71,
            "speed": 122
        }
    },
    {
        "id": 10117,
        "name_de": "Ashs Quajutsu",
        "name_en": "greninja-ash",
        "type1": "Wasser",
        "type2": "Unlicht",
        "stats": {
            "hp": 72,
            "attack": 145,
            "defense": 67,
            "specialAttack": 153,
            "specialDefense": 71,
            "speed": 132
        }
    },
    {
        "id": 10118,
        "name_de": "Zygarde (10)",
        "name_en": "zygarde-10-power-construct",
        "type1": "Drache",
        "type2": "Boden",
        "stats": {
            "hp": 54,
            "attack": 100,
            "defense": 71,
            "specialAttack": 61,
            "specialDefense": 85,
            "speed": 115
        }
    },
    {
        "id": 10119,
        "name_de": "Zygarde (50)",
        "name_en": "zygarde-50-power-construct",
        "type1": "Drache",
        "type2": "Boden",
        "stats": {
            "hp": 108,
            "attack": 100,
            "defense": 121,
            "specialAttack": 81,
            "specialDefense": 95,
            "speed": 95
        }
    },
    {
        "id": 10120,
        "name_de": "Zygarde (100)",
        "name_en": "zygarde-complete",
        "type1": "Drache",
        "type2": "Boden",
        "stats": {
            "hp": 216,
            "attack": 100,
            "defense": 121,
            "specialAttack": 91,
            "specialDefense": 95,
            "speed": 85
        }
    },
    {
        "id": 10123,
        "name_de": "Choreogel (Cheerl.)",
        "name_en": "oricorio-pom-pom",
        "type1": "Elektro",
        "type2": "Flug",
        "stats": {
            "hp": 75,
            "attack": 70,
            "defense": 70,
            "specialAttack": 98,
            "specialDefense": 70,
            "speed": 93
        }
    },
    {
        "id": 10124,
        "name_de": "Choreogel (Hula)",
        "name_en": "oricorio-pau",
        "type1": "Psycho",
        "type2": "Flug",
        "stats": {
            "hp": 75,
            "attack": 70,
            "defense": 70,
            "specialAttack": 98,
            "specialDefense": 70,
            "speed": 93
        }
    },
    {
        "id": 10125,
        "name_de": "Choreogel (Buyo)",
        "name_en": "oricorio-sensu",
        "type1": "Geist",
        "type2": "Flug",
        "stats": {
            "hp": 75,
            "attack": 70,
            "defense": 70,
            "specialAttack": 98,
            "specialDefense": 70,
            "speed": 93
        }
    },
    {
        "id": 10126,
        "name_de": "Wolwerock (Nacht.)",
        "name_en": "lycanroc-midnight",
        "type1": "Gestein",
        "type2": "",
        "stats": {
            "hp": 85,
            "attack": 115,
            "defense": 75,
            "specialAttack": 55,
            "specialDefense": 75,
            "speed": 82
        }
    },
    {
        "id": 10127,
        "name_de": "Lusardin (Schwarm)",
        "name_en": "wishiwashi-school",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 45,
            "attack": 140,
            "defense": 130,
            "specialAttack": 140,
            "specialDefense": 135,
            "speed": 30
        }
    },
    {
        "id": 10136,
        "name_de": "Meteno (Kern)",
        "name_en": "minior-red",
        "type1": "Gestein",
        "type2": "Flug",
        "stats": {
            "hp": 60,
            "attack": 100,
            "defense": 60,
            "specialAttack": 100,
            "specialDefense": 60,
            "speed": 120
        }
    },

    {
        "id": 10152,
        "name_de": "Wolwerock (Zwielicht)",
        "name_en": "lycanroc-dusk",
        "type1": "Gestein",
        "type2": "",
        "stats": {
            "hp": 75,
            "attack": 117,
            "defense": 65,
            "specialAttack": 55,
            "specialDefense": 65,
            "speed": 110
        }
    },

    {
        "id": 10155,
        "name_de": "Necrozma (AM)",
        "name_en": "necrozma-dusk",
        "type1": "Psycho",
        "type2": "Stahl",
        "stats": {
            "hp": 97,
            "attack": 157,
            "defense": 127,
            "specialAttack": 113,
            "specialDefense": 109,
            "speed": 77
        }
    },
    {
        "id": 10156,
        "name_de": "Necrozma (MS)",
        "name_en": "necrozma-dawn",
        "type1": "Psycho",
        "type2": "Geist",
        "stats": {
            "hp": 97,
            "attack": 113,
            "defense": 109,
            "specialAttack": 157,
            "specialDefense": 127,
            "speed": 77
        }
    },
    {
        "id": 10157,
        "name_de": "Ultra-Necrozma",
        "name_en": "necrozma-ultra",
        "type1": "Psycho",
        "type2": "Drache",
        "stats": {
            "hp": 97,
            "attack": 167,
            "defense": 97,
            "specialAttack": 167,
            "specialDefense": 97,
            "speed": 129
        }
    },

    {
        "id": 10161,
        "name_de": "Mauzi",
        "name_en": "meowth-galar",
        "type1": "Stahl",
        "type2": "",
        "stats": {
            "hp": 50,
            "attack": 65,
            "defense": 55,
            "specialAttack": 40,
            "specialDefense": 40,
            "speed": 40
        }
    },
    {
        "id": 10162,
        "name_de": "Ponita",
        "name_en": "ponyta-galar",
        "type1": "Psycho",
        "type2": "",
        "stats": {
            "hp": 50,
            "attack": 85,
            "defense": 55,
            "specialAttack": 65,
            "specialDefense": 65,
            "speed": 90
        }
    },
    {
        "id": 10163,
        "name_de": "Gallopa",
        "name_en": "rapidash-galar",
        "type1": "Psycho",
        "type2": "Fee",
        "stats": {
            "hp": 65,
            "attack": 100,
            "defense": 70,
            "specialAttack": 80,
            "specialDefense": 80,
            "speed": 105
        }
    },
    {
        "id": 10164,
        "name_de": "Flegmon",
        "name_en": "slowpoke-galar",
        "type1": "Psycho",
        "type2": "",
        "stats": {
            "hp": 90,
            "attack": 65,
            "defense": 65,
            "specialAttack": 40,
            "specialDefense": 40,
            "speed": 15
        }
    },
    {
        "id": 10165,
        "name_de": "Lahmus",
        "name_en": "slowbro-galar",
        "type1": "Gift",
        "type2": "Psycho",
        "stats": {
            "hp": 95,
            "attack": 100,
            "defense": 95,
            "specialAttack": 100,
            "specialDefense": 70,
            "speed": 30
        }
    },
    {
        "id": 10166,
        "name_de": "Porenta",
        "name_en": "farfetchd-galar",
        "type1": "Kampf",
        "type2": "",
        "stats": {
            "hp": 52,
            "attack": 95,
            "defense": 55,
            "specialAttack": 58,
            "specialDefense": 62,
            "speed": 55
        }
    },
    {
        "id": 10167,
        "name_de": "Smogmog",
        "name_en": "weezing-galar",
        "type1": "Gift",
        "type2": "Fee",
        "stats": {
            "hp": 65,
            "attack": 90,
            "defense": 120,
            "specialAttack": 85,
            "specialDefense": 70,
            "speed": 60
        }
    },
    {
        "id": 10168,
        "name_de": "Pantimos",
        "name_en": "mr-mime-galar",
        "type1": "Eis",
        "type2": "Psycho",
        "stats": {
            "hp": 50,
            "attack": 65,
            "defense": 65,
            "specialAttack": 90,
            "specialDefense": 90,
            "speed": 100
        }
    },
    {
        "id": 10169,
        "name_de": "Arktos",
        "name_en": "articuno-galar",
        "type1": "Psycho",
        "type2": "Flug",
        "stats": {
            "hp": 90,
            "attack": 85,
            "defense": 85,
            "specialAttack": 125,
            "specialDefense": 100,
            "speed": 95
        }
    },
    {
        "id": 10170,
        "name_de": "Zapdos",
        "name_en": "zapdos-galar",
        "type1": "Kampf",
        "type2": "Flug",
        "stats": {
            "hp": 90,
            "attack": 125,
            "defense": 90,
            "specialAttack": 85,
            "specialDefense": 90,
            "speed": 100
        }
    },
    {
        "id": 10171,
        "name_de": "Lavados",
        "name_en": "moltres-galar",
        "type1": "Unlicht",
        "type2": "Flug",
        "stats": {
            "hp": 90,
            "attack": 85,
            "defense": 90,
            "specialAttack": 100,
            "specialDefense": 125,
            "speed": 90
        }
    },
    {
        "id": 10172,
        "name_de": "Laschoking",
        "name_en": "slowking-galar",
        "type1": "Gift",
        "type2": "Psycho",
        "stats": {
            "hp": 95,
            "attack": 65,
            "defense": 80,
            "specialAttack": 110,
            "specialDefense": 110,
            "speed": 30
        }
    },
    {
        "id": 10173,
        "name_de": "Corasonn",
        "name_en": "corsola-galar",
        "type1": "Geist",
        "type2": "",
        "stats": {
            "hp": 60,
            "attack": 55,
            "defense": 100,
            "specialAttack": 65,
            "specialDefense": 100,
            "speed": 30
        }
    },
    {
        "id": 10174,
        "name_de": "Zigzachs",
        "name_en": "zigzagoon-galar",
        "type1": "Unlicht",
        "type2": "Normal",
        "stats": {
            "hp": 38,
            "attack": 30,
            "defense": 41,
            "specialAttack": 30,
            "specialDefense": 41,
            "speed": 60
        }
    },
    {
        "id": 10175,
        "name_de": "Geradaks",
        "name_en": "linoone-galar",
        "type1": "Unlicht",
        "type2": "Normal",
        "stats": {
            "hp": 78,
            "attack": 70,
            "defense": 61,
            "specialAttack": 50,
            "specialDefense": 61,
            "speed": 100
        }
    },
    {
        "id": 10176,
        "name_de": "Flampion",
        "name_en": "darumaka-galar",
        "type1": "Eis",
        "type2": "",
        "stats": {
            "hp": 70,
            "attack": 90,
            "defense": 45,
            "specialAttack": 15,
            "specialDefense": 45,
            "speed": 50
        }
    },
    {
        "id": 10177,
        "name_de": "Flampivian",
        "name_en": "darmanitan-galar-standard",
        "type1": "Eis",
        "type2": "",
        "stats": {
            "hp": 105,
            "attack": 140,
            "defense": 55,
            "specialAttack": 30,
            "specialDefense": 55,
            "speed": 95
        }
    },
    {
        "id": 10178,
        "name_de": "Flampivian (Zen)",
        "name_en": "darmanitan-galar-zen",
        "type1": "Eis",
        "type2": "Feuer",
        "stats": {
            "hp": 105,
            "attack": 160,
            "defense": 55,
            "specialAttack": 30,
            "specialDefense": 55,
            "speed": 135
        }
    },
    {
        "id": 10179,
        "name_de": "Makabaja",
        "name_en": "yamask-galar",
        "type1": "Boden",
        "type2": "Geist",
        "stats": {
            "hp": 38,
            "attack": 55,
            "defense": 85,
            "specialAttack": 30,
            "specialDefense": 65,
            "speed": 30
        }
    },
    {
        "id": 10180,
        "name_de": "Flunschlik",
        "name_en": "stunfisk-galar",
        "type1": "Boden",
        "type2": "Stahl",
        "stats": {
            "hp": 109,
            "attack": 81,
            "defense": 99,
            "specialAttack": 66,
            "specialDefense": 84,
            "speed": 32
        }
    },
    {
        "id": 10184,
        "name_de": "Riffex",
        "name_en": "toxtricity-low-key",
        "type1": "Elektro",
        "type2": "Gift",
        "stats": {
            "hp": 75,
            "attack": 98,
            "defense": 70,
            "specialAttack": 114,
            "specialDefense": 70,
            "speed": 75
        }
    },
    {
        "id": 10185,
        "name_de": "Kubuin",
        "name_en": "eiscue-noice",
        "type1": "Eis",
        "type2": "",
        "stats": {
            "hp": 75,
            "attack": 80,
            "defense": 70,
            "specialAttack": 65,
            "specialDefense": 50,
            "speed": 130
        }
    },
    {
        "id": 10186,
        "name_de": "Servol (w)",
        "name_en": "indeedee-female",
        "type1": "Psycho",
        "type2": "Normal",
        "stats": {
            "hp": 70,
            "attack": 55,
            "defense": 65,
            "specialAttack": 95,
            "specialDefense": 105,
            "speed": 85
        }
    },
    {
        "id": 10187,
        "name_de": "Morpeko (Kohldampf)",
        "name_en": "morpeko-hangry",
        "type1": "Elektro",
        "type2": "Unlicht",
        "stats": {
            "hp": 58,
            "attack": 95,
            "defense": 58,
            "specialAttack": 70,
            "specialDefense": 58,
            "speed": 97
        }
    },
    {
        "id": 10188,
        "name_de": "Zacian (Krone)",
        "name_en": "zacian-crowned",
        "type1": "Fee",
        "type2": "Stahl",
        "stats": {
            "hp": 92,
            "attack": 150,
            "defense": 115,
            "specialAttack": 80,
            "specialDefense": 115,
            "speed": 148
        }
    },
    {
        "id": 10189,
        "name_de": "Zamazenta (Krone)",
        "name_en": "zamazenta-crowned",
        "type1": "Kampf",
        "type2": "Stahl",
        "stats": {
            "hp": 92,
            "attack": 120,
            "defense": 140,
            "specialAttack": 80,
            "specialDefense": 140,
            "speed": 128
        }
    },
    {
        "id": 10190,
        "name_de": "Eternamax-Endynalos",
        "name_en": "eternatus-eternamax",
        "type1": "Gift",
        "type2": "Drache",
        "stats": {
            "hp": 255,
            "attack": 115,
            "defense": 250,
            "specialAttack": 125,
            "specialDefense": 250,
            "speed": 130
        }
    },
    {
        "id": 10191,
        "name_de": "Wulaosu (fliess.)",
        "name_en": "urshifu-rapid-strike",
        "type1": "Kampf",
        "type2": "Wasser",
        "stats": {
            "hp": 100,
            "attack": 130,
            "defense": 100,
            "specialAttack": 63,
            "specialDefense": 60,
            "speed": 97
        }
    },

    {
        "id": 10193,
        "name_de": "Coronospa (PoR)",
        "name_en": "calyrex-ice",
        "type1": "Psycho",
        "type2": "Eis",
        "stats": {
            "hp": 100,
            "attack": 165,
            "defense": 150,
            "specialAttack": 85,
            "specialDefense": 130,
            "speed": 50
        }
    },
    {
        "id": 10194,
        "name_de": "Coronospa (PhR)",
        "name_en": "calyrex-shadow",
        "type1": "Psycho",
        "type2": "Geist",
        "stats": {
            "hp": 100,
            "attack": 85,
            "defense": 80,
            "specialAttack": 165,
            "specialDefense": 100,
            "speed": 150
        }
    },
    {
        "id": 10195,
        "name_de": "Bisaflor",
        "name_en": "venusaur-gmax",
        "type1": "Pflanze",
        "type2": "Gift",
        "stats": {
            "hp": 80,
            "attack": 82,
            "defense": 83,
            "specialAttack": 100,
            "specialDefense": 100,
            "speed": 80
        }
    },
    {
        "id": 10196,
        "name_de": "Glurak",
        "name_en": "charizard-gmax",
        "type1": "Feuer",
        "type2": "Flug",
        "stats": {
            "hp": 78,
            "attack": 84,
            "defense": 78,
            "specialAttack": 109,
            "specialDefense": 85,
            "speed": 100
        }
    },
    {
        "id": 10197,
        "name_de": "Turtok",
        "name_en": "blastoise-gmax",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 79,
            "attack": 83,
            "defense": 100,
            "specialAttack": 85,
            "specialDefense": 105,
            "speed": 78
        }
    },
    {
        "id": 10198,
        "name_de": "Smettbo",
        "name_en": "butterfree-gmax",
        "type1": "Käfer",
        "type2": "Flug",
        "stats": {
            "hp": 60,
            "attack": 45,
            "defense": 50,
            "specialAttack": 90,
            "specialDefense": 80,
            "speed": 70
        }
    },
    {
        "id": 10199,
        "name_de": "Pikachu",
        "name_en": "pikachu-gmax",
        "type1": "Elektro",
        "type2": "",
        "stats": {
            "hp": 35,
            "attack": 55,
            "defense": 40,
            "specialAttack": 50,
            "specialDefense": 50,
            "speed": 90
        }
    },
    {
        "id": 10200,
        "name_de": "Mauzi",
        "name_en": "meowth-gmax",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 40,
            "attack": 45,
            "defense": 35,
            "specialAttack": 40,
            "specialDefense": 40,
            "speed": 90
        }
    },
    {
        "id": 10201,
        "name_de": "Machomei",
        "name_en": "machamp-gmax",
        "type1": "Kampf",
        "type2": "",
        "stats": {
            "hp": 90,
            "attack": 130,
            "defense": 80,
            "specialAttack": 65,
            "specialDefense": 85,
            "speed": 55
        }
    },
    {
        "id": 10202,
        "name_de": "Gengar",
        "name_en": "gengar-gmax",
        "type1": "Geist",
        "type2": "Gift",
        "stats": {
            "hp": 60,
            "attack": 65,
            "defense": 60,
            "specialAttack": 130,
            "specialDefense": 75,
            "speed": 110
        }
    },
    {
        "id": 10203,
        "name_de": "Kingler",
        "name_en": "kingler-gmax",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 55,
            "attack": 130,
            "defense": 115,
            "specialAttack": 50,
            "specialDefense": 50,
            "speed": 75
        }
    },
    {
        "id": 10204,
        "name_de": "Lapras",
        "name_en": "lapras-gmax",
        "type1": "Wasser",
        "type2": "Eis",
        "stats": {
            "hp": 130,
            "attack": 85,
            "defense": 80,
            "specialAttack": 85,
            "specialDefense": 95,
            "speed": 60
        }
    },
    {
        "id": 10205,
        "name_de": "Evoli",
        "name_en": "eevee-gmax",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 55,
            "attack": 55,
            "defense": 50,
            "specialAttack": 45,
            "specialDefense": 65,
            "speed": 55
        }
    },
    {
        "id": 10206,
        "name_de": "Relaxo",
        "name_en": "snorlax-gmax",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 160,
            "attack": 110,
            "defense": 65,
            "specialAttack": 65,
            "specialDefense": 110,
            "speed": 30
        }
    },
    {
        "id": 10207,
        "name_de": "Deponitox",
        "name_en": "garbodor-gmax",
        "type1": "Gift",
        "type2": "",
        "stats": {
            "hp": 80,
            "attack": 95,
            "defense": 82,
            "specialAttack": 60,
            "specialDefense": 82,
            "speed": 75
        }
    },
    {
        "id": 10208,
        "name_de": "Melmetal",
        "name_en": "melmetal-gmax",
        "type1": "Stahl",
        "type2": "",
        "stats": {
            "hp": 135,
            "attack": 143,
            "defense": 143,
            "specialAttack": 80,
            "specialDefense": 65,
            "speed": 34
        }
    },
    {
        "id": 10209,
        "name_de": "Gortrom",
        "name_en": "rillaboom-gmax",
        "type1": "Pflanze",
        "type2": "",
        "stats": {
            "hp": 100,
            "attack": 125,
            "defense": 90,
            "specialAttack": 60,
            "specialDefense": 70,
            "speed": 85
        }
    },
    {
        "id": 10210,
        "name_de": "Liberlo",
        "name_en": "cinderace-gmax",
        "type1": "Feuer",
        "type2": "",
        "stats": {
            "hp": 80,
            "attack": 116,
            "defense": 75,
            "specialAttack": 65,
            "specialDefense": 75,
            "speed": 119
        }
    },
    {
        "id": 10211,
        "name_de": "Intelleon",
        "name_en": "inteleon-gmax",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 70,
            "attack": 85,
            "defense": 65,
            "specialAttack": 125,
            "specialDefense": 65,
            "speed": 120
        }
    },
    {
        "id": 10212,
        "name_de": "Krarmor",
        "name_en": "corviknight-gmax",
        "type1": "Flug",
        "type2": "Stahl",
        "stats": {
            "hp": 98,
            "attack": 87,
            "defense": 105,
            "specialAttack": 53,
            "specialDefense": 85,
            "speed": 67
        }
    },
    {
        "id": 10213,
        "name_de": "Maritellit",
        "name_en": "orbeetle-gmax",
        "type1": "Käfer",
        "type2": "Psycho",
        "stats": {
            "hp": 60,
            "attack": 45,
            "defense": 110,
            "specialAttack": 80,
            "specialDefense": 120,
            "speed": 90
        }
    },
    {
        "id": 10214,
        "name_de": "Kamalm",
        "name_en": "drednaw-gmax",
        "type1": "Wasser",
        "type2": "Gestein",
        "stats": {
            "hp": 90,
            "attack": 115,
            "defense": 90,
            "specialAttack": 48,
            "specialDefense": 68,
            "speed": 74
        }
    },
    {
        "id": 10215,
        "name_de": "Montecarbo",
        "name_en": "coalossal-gmax",
        "type1": "Gestein",
        "type2": "Feuer",
        "stats": {
            "hp": 110,
            "attack": 80,
            "defense": 120,
            "specialAttack": 80,
            "specialDefense": 90,
            "speed": 30
        }
    },
    {
        "id": 10216,
        "name_de": "Drapfel",
        "name_en": "flapple-gmax",
        "type1": "Pflanze",
        "type2": "Drache",
        "stats": {
            "hp": 70,
            "attack": 110,
            "defense": 80,
            "specialAttack": 95,
            "specialDefense": 60,
            "speed": 70
        }
    },
    {
        "id": 10217,
        "name_de": "Schlapfel",
        "name_en": "appletun-gmax",
        "type1": "Pflanze",
        "type2": "Drache",
        "stats": {
            "hp": 110,
            "attack": 85,
            "defense": 80,
            "specialAttack": 100,
            "specialDefense": 80,
            "speed": 30
        }
    },
    {
        "id": 10218,
        "name_de": "Sanaconda",
        "name_en": "sandaconda-gmax",
        "type1": "Boden",
        "type2": "",
        "stats": {
            "hp": 72,
            "attack": 107,
            "defense": 125,
            "specialAttack": 65,
            "specialDefense": 70,
            "speed": 71
        }
    },
    {
        "id": 10219,
        "name_de": "Riffex",
        "name_en": "toxtricity-amped-gmax",
        "type1": "Elektro",
        "type2": "Gift",
        "stats": {
            "hp": 75,
            "attack": 98,
            "defense": 70,
            "specialAttack": 114,
            "specialDefense": 70,
            "speed": 75
        }
    },
    {
        "id": 10220,
        "name_de": "Infernopod",
        "name_en": "centiskorch-gmax",
        "type1": "Feuer",
        "type2": "Käfer",
        "stats": {
            "hp": 100,
            "attack": 115,
            "defense": 65,
            "specialAttack": 90,
            "specialDefense": 90,
            "speed": 65
        }
    },
    {
        "id": 10221,
        "name_de": "Silembrim",
        "name_en": "hatterene-gmax",
        "type1": "Psycho",
        "type2": "Fee",
        "stats": {
            "hp": 57,
            "attack": 90,
            "defense": 95,
            "specialAttack": 136,
            "specialDefense": 103,
            "speed": 29
        }
    },
    {
        "id": 10222,
        "name_de": "Olangaar",
        "name_en": "grimmsnarl-gmax",
        "type1": "Unlicht",
        "type2": "Fee",
        "stats": {
            "hp": 95,
            "attack": 120,
            "defense": 65,
            "specialAttack": 95,
            "specialDefense": 75,
            "speed": 60
        }
    },
    {
        "id": 10223,
        "name_de": "Pokusan",
        "name_en": "alcremie-gmax",
        "type1": "Fee",
        "type2": "",
        "stats": {
            "hp": 65,
            "attack": 60,
            "defense": 75,
            "specialAttack": 110,
            "specialDefense": 121,
            "speed": 64
        }
    },
    {
        "id": 10224,
        "name_de": "Patinaraja",
        "name_en": "copperajah-gmax",
        "type1": "Stahl",
        "type2": "",
        "stats": {
            "hp": 122,
            "attack": 130,
            "defense": 69,
            "specialAttack": 80,
            "specialDefense": 69,
            "speed": 30
        }
    },
    {
        "id": 10225,
        "name_de": "Duraludon",
        "name_en": "duraludon-gmax",
        "type1": "Stahl",
        "type2": "Drache",
        "stats": {
            "hp": 70,
            "attack": 95,
            "defense": 115,
            "specialAttack": 120,
            "specialDefense": 50,
            "speed": 85
        }
    },
    {
        "id": 10226,
        "name_de": "Wulaosu (fok.)",
        "name_en": "urshifu-single-strike-gmax",
        "type1": "Kampf",
        "type2": "Unlicht",
        "stats": {
            "hp": 100,
            "attack": 130,
            "defense": 100,
            "specialAttack": 63,
            "specialDefense": 60,
            "speed": 97
        }
    },
    {
        "id": 10227,
        "name_de": "Wulaosu (fliess.)",
        "name_en": "urshifu-rapid-strike-gmax",
        "type1": "Kampf",
        "type2": "Wasser",
        "stats": {
            "hp": 100,
            "attack": 130,
            "defense": 100,
            "specialAttack": 63,
            "specialDefense": 60,
            "speed": 97
        }
    },
    {
        "id": 10229,
        "name_de": "Fukano",
        "name_en": "growlithe-hisui",
        "type1": "Feuer",
        "type2": "Gestein",
        "stats": {
            "hp": 60,
            "attack": 75,
            "defense": 45,
            "specialAttack": 65,
            "specialDefense": 50,
            "speed": 55
        }
    },
    {
        "id": 10230,
        "name_de": "Arkani",
        "name_en": "arcanine-hisui",
        "type1": "Feuer",
        "type2": "Gestein",
        "stats": {
            "hp": 95,
            "attack": 115,
            "defense": 80,
            "specialAttack": 95,
            "specialDefense": 80,
            "speed": 90
        }
    },
    {
        "id": 10231,
        "name_de": "Voltobal",
        "name_en": "voltorb-hisui",
        "type1": "Elektro",
        "type2": "Pflanze",
        "stats": {
            "hp": 40,
            "attack": 30,
            "defense": 50,
            "specialAttack": 55,
            "specialDefense": 55,
            "speed": 100
        }
    },
    {
        "id": 10232,
        "name_de": "Lektrobal",
        "name_en": "electrode-hisui",
        "type1": "Elektro",
        "type2": "Pflanze",
        "stats": {
            "hp": 60,
            "attack": 50,
            "defense": 70,
            "specialAttack": 80,
            "specialDefense": 80,
            "speed": 150
        }
    },
    {
        "id": 10233,
        "name_de": "Tornupto",
        "name_en": "typhlosion-hisui",
        "type1": "Feuer",
        "type2": "Geist",
        "stats": {
            "hp": 73,
            "attack": 84,
            "defense": 78,
            "specialAttack": 119,
            "specialDefense": 85,
            "speed": 95
        }
    },
    {
        "id": 10234,
        "name_de": "Baldorfish",
        "name_en": "qwilfish-hisui",
        "type1": "Unlicht",
        "type2": "Gift",
        "stats": {
            "hp": 65,
            "attack": 95,
            "defense": 85,
            "specialAttack": 55,
            "specialDefense": 55,
            "speed": 85
        }
    },
    {
        "id": 10235,
        "name_de": "Sniebel",
        "name_en": "sneasel-hisui",
        "type1": "Kampf",
        "type2": "Gift",
        "stats": {
            "hp": 55,
            "attack": 95,
            "defense": 55,
            "specialAttack": 35,
            "specialDefense": 75,
            "speed": 115
        }
    },
    {
        "id": 10236,
        "name_de": "Admurai",
        "name_en": "samurott-hisui",
        "type1": "Wasser",
        "type2": "Unlicht",
        "stats": {
            "hp": 90,
            "attack": 108,
            "defense": 80,
            "specialAttack": 100,
            "specialDefense": 65,
            "speed": 85
        }
    },
    {
        "id": 10237,
        "name_de": "Dressella",
        "name_en": "lilligant-hisui",
        "type1": "Pflanze",
        "type2": "Kampf",
        "stats": {
            "hp": 70,
            "attack": 105,
            "defense": 75,
            "specialAttack": 50,
            "specialDefense": 75,
            "speed": 105
        }
    },
    {
        "id": 10238,
        "name_de": "Zorua",
        "name_en": "zorua-hisui",
        "type1": "Normal",
        "type2": "Geist",
        "stats": {
            "hp": 35,
            "attack": 60,
            "defense": 40,
            "specialAttack": 85,
            "specialDefense": 40,
            "speed": 70
        }
    },
    {
        "id": 10239,
        "name_de": "Zoroark",
        "name_en": "zoroark-hisui",
        "type1": "Normal",
        "type2": "Geist",
        "stats": {
            "hp": 55,
            "attack": 100,
            "defense": 60,
            "specialAttack": 125,
            "specialDefense": 60,
            "speed": 110
        }
    },
    {
        "id": 10240,
        "name_de": "Washakwil",
        "name_en": "braviary-hisui",
        "type1": "Psycho",
        "type2": "Flug",
        "stats": {
            "hp": 110,
            "attack": 83,
            "defense": 70,
            "specialAttack": 112,
            "specialDefense": 70,
            "speed": 65
        }
    },
    {
        "id": 10241,
        "name_de": "Viscargot",
        "name_en": "sliggoo-hisui",
        "type1": "Stahl",
        "type2": "Drache",
        "stats": {
            "hp": 58,
            "attack": 75,
            "defense": 83,
            "specialAttack": 83,
            "specialDefense": 113,
            "speed": 40
        }
    },
    {
        "id": 10242,
        "name_de": "Viscogon",
        "name_en": "goodra-hisui",
        "type1": "Stahl",
        "type2": "Drache",
        "stats": {
            "hp": 80,
            "attack": 100,
            "defense": 100,
            "specialAttack": 110,
            "specialDefense": 150,
            "speed": 60
        }
    },
    {
        "id": 10243,
        "name_de": "Arktilas",
        "name_en": "avalugg-hisui",
        "type1": "Eis",
        "type2": "Gestein",
        "stats": {
            "hp": 95,
            "attack": 127,
            "defense": 184,
            "specialAttack": 34,
            "specialDefense": 36,
            "speed": 38
        }
    },
    {
        "id": 10244,
        "name_de": "Silvarro",
        "name_en": "decidueye-hisui",
        "type1": "Pflanze",
        "type2": "Kampf",
        "stats": {
            "hp": 88,
            "attack": 112,
            "defense": 80,
            "specialAttack": 95,
            "specialDefense": 95,
            "speed": 60
        }
    },
    {
        "id": 10245,
        "name_de": "Dialga (Ur)",
        "name_en": "dialga-origin",
        "type1": "Stahl",
        "type2": "Drache",
        "stats": {
            "hp": 100,
            "attack": 100,
            "defense": 120,
            "specialAttack": 150,
            "specialDefense": 120,
            "speed": 90
        }
    },
    {
        "id": 10246,
        "name_de": "Palkia (Ur)",
        "name_en": "palkia-origin",
        "type1": "Wasser",
        "type2": "Drache",
        "stats": {
            "hp": 90,
            "attack": 100,
            "defense": 100,
            "specialAttack": 150,
            "specialDefense": 120,
            "speed": 120
        }
    },

    {
        "id": 10248,
        "name_de": "Salmagnis (w)",
        "name_en": "basculegion-female",
        "type1": "Wasser",
        "type2": "Geist",
        "stats": {
            "hp": 120,
            "attack": 92,
            "defense": 65,
            "specialAttack": 100,
            "specialDefense": 75,
            "speed": 78
        }
    },
    {
        "id": 10249,
        "name_de": "Cupidos (Tier)",
        "name_en": "enamorus-therian",
        "type1": "Fee",
        "type2": "Flug",
        "stats": {
            "hp": 74,
            "attack": 115,
            "defense": 110,
            "specialAttack": 135,
            "specialDefense": 100,
            "speed": 46
        }
    },
    {
        "id": 10250,
        "name_de": "Tauros (Kampf)",
        "name_en": "tauros-paldea-combat-breed",
        "type1": "Kampf",
        "type2": "",
        "stats": {
            "hp": 75,
            "attack": 110,
            "defense": 105,
            "specialAttack": 30,
            "specialDefense": 70,
            "speed": 100
        }
    },
    {
        "id": 10251,
        "name_de": "Tauros (Feuer)",
        "name_en": "tauros-paldea-blaze-breed",
        "type1": "Kampf",
        "type2": "Feuer",
        "stats": {
            "hp": 75,
            "attack": 110,
            "defense": 105,
            "specialAttack": 30,
            "specialDefense": 70,
            "speed": 100
        }
    },
    {
        "id": 10252,
        "name_de": "Tauros (Wasser)",
        "name_en": "tauros-paldea-aqua-breed",
        "type1": "Kampf",
        "type2": "Wasser",
        "stats": {
            "hp": 75,
            "attack": 110,
            "defense": 105,
            "specialAttack": 30,
            "specialDefense": 70,
            "speed": 100
        }
    },
    {
        "id": 10253,
        "name_de": "Felino",
        "name_en": "wooper-paldea",
        "type1": "Gift",
        "type2": "Boden",
        "stats": {
            "hp": 55,
            "attack": 45,
            "defense": 45,
            "specialAttack": 25,
            "specialDefense": 25,
            "speed": 15
        }
    },
    {
        "id": 10254,
        "name_de": "Fragrunz (w)",
        "name_en": "oinkologne-female",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 115,
            "attack": 90,
            "defense": 70,
            "specialAttack": 59,
            "specialDefense": 90,
            "speed": 65
        }
    },
    {
        "id": 10255,
        "name_de": "Dummimisel (3)",
        "name_en": "dudunsparce-three-segment",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 125,
            "attack": 100,
            "defense": 80,
            "specialAttack": 85,
            "specialDefense": 75,
            "speed": 55
        }
    },
    {
        "id": 10256,
        "name_de": "Delfinator (Held)",
        "name_en": "palafin-hero",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 100,
            "attack": 160,
            "defense": 97,
            "specialAttack": 106,
            "specialDefense": 87,
            "speed": 100
        }
    },
    {
        "id": 10257,
        "name_de": "Famieps (3)",
        "name_en": "maushold-family-of-three",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 74,
            "attack": 75,
            "defense": 70,
            "specialAttack": 65,
            "specialDefense": 75,
            "speed": 111
        }
    },





    {
        "id": 10263,
        "name_de": "Gierspenst (Wanderf.)",
        "name_en": "gimmighoul-roaming",
        "type1": "Geist",
        "type2": "",
        "stats": {
            "hp": 45,
            "attack": 30,
            "defense": 25,
            "specialAttack": 75,
            "specialDefense": 45,
            "speed": 80
        }
    },

        {
        "id": 10272,
        "name_de": "Blutmond-Ursaluna",
        "name_en": "ursaluna-bloodmoon",
        "type1": "Boden",
        "type2": "Normal",
        "stats": {
            "hp": 113,
            "attack": 70,
            "defense": 120,
            "specialAttack": 135,
            "specialDefense": 65,
            "speed": 52
        }
    },
    {
        "id": 10273,
        "name_de": "Ogerpon (BM)",
        "name_en": "ogerpon-wellspring-mask",
        "type1": "Pflanze",
        "type2": "Wasser",
        "stats": {
            "hp": 80,
            "attack": 120,
            "defense": 84,
            "specialAttack": 60,
            "specialDefense": 96,
            "speed": 110
        }
    },
    {
        "id": 10274,
        "name_de": "Ogerpon (OM)",
        "name_en": "ogerpon-hearthflame-mask",
        "type1": "Pflanze",
        "type2": "Feuer",
        "stats": {
            "hp": 80,
            "attack": 120,
            "defense": 84,
            "specialAttack": 60,
            "specialDefense": 96,
            "speed": 110
        }
    },
    {
        "id": 10275,
        "name_de": "Ogerpon (FM)",
        "name_en": "ogerpon-cornerstone-mask",
        "type1": "Pflanze",
        "type2": "Gestein",
        "stats": {
            "hp": 80,
            "attack": 120,
            "defense": 84,
            "specialAttack": 60,
            "specialDefense": 96,
            "speed": 110
        }
    },
    {
        "id": 10276,
        "name_de": "Terakr.-Terapagos",
        "name_en": "terapagos-terastal",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 95,
            "attack": 95,
            "defense": 110,
            "specialAttack": 105,
            "specialDefense": 110,
            "speed": 85
        }
    },
    {
        "id": 10277,
        "name_de": "Stellar-Terapagos",
        "name_en": "terapagos-stellar",
        "type1": "Normal",
        "type2": "",
        "stats": {
            "hp": 95,
            "attack": 95,
            "defense": 110,
            "specialAttack": 105,
            "specialDefense": 110,
            "speed": 85
        }
    },
    {
        "id": 10279,
        "name_de": "Groudon (Proto)",
        "name_en": "groudon-primal",
        "type1": "Boden",
        "type2": "Feuer",
        "stats": {
            "hp": 100,
            "attack": 180,
            "defense": 160,
            "specialAttack": 150,
            "specialDefense": 90,
            "speed": 90
        }
    },
    {
        "id": 10280,
        "name_de": "Kyogre (Proto)",
        "name_en": "kyogre-primal",
        "type1": "Wasser",
        "type2": "",
        "stats": {
            "hp": 100,
            "attack": 150,
            "defense": 90,
            "specialAttack": 180,
            "specialDefense": 160,
            "speed": 90
        }
    },

    {
        "id": 11000,
        "name_de": "absolutes Maximum (Doppeltyp)",
        "name_en": "max",
        "type1": "Geist",
        "type2": "Fee",
        "stats": {
            "hp": 255,
            "attack": 190,
            "defense": 250,
            "specialAttack": 194,
            "specialDefense": 250,
            "speed": 200
        }
    },
    {
        "id": 11001,
        "name_de": "absolutes Minimum (Doppeltyp)",
        "name_en": "min",
        "type1": "Käfer",
        "type2": "Pflanze",
        "stats": {
            "hp": 1,
            "attack": 5,
            "defense": 5,
            "specialAttack": 10,
            "specialDefense": 20,
            "speed": 5
        }
    },

    {
        "id": 11002,
        "name_de": "absolutes Maximum (Monotyp)",
        "name_en": "max",
        "type1": "Geist",
        "type2": "",
        "stats": {
            "hp": 255,
            "attack": 190,
            "defense": 250,
            "specialAttack": 194,
            "specialDefense": 250,
            "speed": 200
        }
    },
    {
        "id": 11003,
        "name_de": "absolutes Minimum (Monotyp)",
        "name_en": "min",
        "type1": "Pflanze",
        "type2": "",
        "stats": {
            "hp": 1,
            "attack": 5,
            "defense": 5,
            "specialAttack": 10,
            "specialDefense": 20,
            "speed": 5
        }
    },

];
