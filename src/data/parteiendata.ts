// parteiendata.ts

export interface Country {
    id: number;
    name: string;
}

export interface Region {
    id: number;
    name: string;
    countryId: number;
}

export interface Party {
    id: number;
    name: string;
    abbreviation: string;
    color: string;
    countryId: number;
    group: string;
    groupAbbr: string;
}

export interface SeatDistribution {
    id: number;
    regionId: number;
    partyId: number;
    seats: number;
}

export const countries: Country[] = [
    { id: 1, name: 'Schweiz (CH)' },
    { id: 2, name: 'Deutschland (D)' },
    { id: 3, name: 'Österreich (A)' },
];

export const regions: Region[] = [
    // Switzerland Cantons
    { id: 1, name: 'Zürich (ZH)', countryId: 1 },
    { id: 2, name: 'Zug (ZG)', countryId: 1 },
    { id: 3, name: 'Aargau (AG)', countryId: 1 },
    { id: 4, name: 'Appenzell Ausserrhoden (AR)', countryId: 1 },
    { id: 5, name: 'Appenzell Innerrhoden (AI)', countryId: 1 },
    { id: 6, name: 'Basel-Landschaft (BL)', countryId: 1 },
    { id: 7, name: 'Basel-Stadt (BS)', countryId: 1 },
    { id: 8, name: 'Bern (BE)', countryId: 1 },
    { id: 9, name: 'Freiburg (FR)', countryId: 1 },
    { id: 10, name: 'Genf (GE)', countryId: 1 },
    { id: 11, name: 'Glarus (GL)', countryId: 1 },
    { id: 12, name: 'Graubünden (GR)', countryId: 1 },
    { id: 13, name: 'Jura (JU)', countryId: 1 },
    { id: 14, name: 'Luzern (LU)', countryId: 1 },
    { id: 15, name: 'Neuenburg (NE)', countryId: 1 },
    { id: 16, name: 'Nidwalden (NW)', countryId: 1 },
    { id: 17, name: 'Obwalden (OW)', countryId: 1 },
    { id: 18, name: 'Schaffhausen (SH)', countryId: 1 },
    { id: 19, name: 'Schwyz (SZ)', countryId: 1 },
    { id: 20, name: 'Solothurn (SO)', countryId: 1 },
    { id: 21, name: 'St. Gallen (SG)', countryId: 1 },
    { id: 22, name: 'Tessin (TI)', countryId: 1 },
    { id: 23, name: 'Thurgau (TG)', countryId: 1 },
    { id: 24, name: 'Uri (UR)', countryId: 1 },
    { id: 25, name: 'Waadt (VD)', countryId: 1 },
    { id: 26, name: 'Wallis (VS)', countryId: 1 },


    // Germany Bundesländer
    { id: 27, name: 'Bayern', countryId: 2 },
    { id: 28, name: 'Berlin', countryId: 2 },
    { id: 29, name: 'Nordrhein-Westfalen', countryId: 2 },
    { id: 30, name: 'Baden-Württemberg', countryId: 2 },
    { id: 31, name: 'Brandenburg', countryId: 2 },
    { id: 32, name: 'Bremen', countryId: 2 },
    { id: 33, name: 'Hamburg', countryId: 2 },
    { id: 34, name: 'Hessen', countryId: 2 },
    { id: 35, name: 'Mecklenburg-Vorpommern', countryId: 2 },
    { id: 36, name: 'Niedersachsen', countryId: 2 },
    { id: 37, name: 'Rheinland-Pfalz', countryId: 2 },
    { id: 38, name: 'Saarland', countryId: 2 },
    { id: 39, name: 'Sachsen', countryId: 2 },
    { id: 40, name: 'Sachsen-Anhalt', countryId: 2 },
    { id: 41, name: 'Schleswig-Holstein', countryId: 2 },
    { id: 42, name: 'Thüringen', countryId: 2 },

    // Austria Bundesländer
    { id: 43, name: 'Wien', countryId: 3 },
    { id: 44, name: 'Tirol', countryId: 3 },
    { id: 45, name: 'Steiermark', countryId: 3 },
    { id: 46, name: 'Vorarlberg', countryId: 3 },
    { id: 47, name: 'Salzburg', countryId: 3 },
    { id: 48, name: 'Oberösterreich', countryId: 3 },
    { id: 49, name: 'Niederösterreich', countryId: 3 },
    { id: 50, name: 'Kärnten', countryId: 3 },
    { id: 51, name: 'Burgenland', countryId: 3 }

];

export const parties: Party[] = [
// Swiss Parties
    { id: 1, name: 'Schweizerische Volkspartei', abbreviation: 'SVP', color: '#008000', countryId: 1, group: 'Traditionelle bürgerliche und rechte Parteien', groupAbbr: 'TBR' },
    { id: 2, name: 'Sozialdemokratische Partei der Schweiz', abbreviation: 'SP', color: '#D52B1E', countryId: 1, group: 'Linke und grüne Parteien', groupAbbr: 'LGP' },
    { id: 3, name: 'FDP.Die Liberalen', abbreviation: 'FDP', color: '#005F9E', countryId: 1, group: 'Traditionelle bürgerliche und rechte Parteien', groupAbbr: 'TBR' },
    { id: 4, name: 'Die Mitte', abbreviation: 'Mitte', color: '#FF7F00', countryId: 1, group: 'Traditionelle bürgerliche und rechte Parteien', groupAbbr: 'TBR' },
    { id: 5, name: 'GRÜNE Schweiz', abbreviation: 'GPS', color: '#64A12D', countryId: 1, group: 'Linke und grüne Parteien', groupAbbr: 'LGP' },
    { id: 6, name: 'Grünliberale Partei', abbreviation: 'GLP', color: '#BBE440', countryId: 1, group: 'Kleine Mitteparteien und andere', groupAbbr: 'KMUA' },
    { id: 7, name: 'Evangelische Volkspartei der Schweiz', abbreviation: 'EVP', color: '#FFD700', countryId: 1, group: 'Kleine Mitteparteien und andere', groupAbbr: 'KMUA' },
    { id: 8, name: 'Eidgenössisch-Demokratische Union', abbreviation: 'EDU', color: '#800080', countryId: 1, group: 'Kleine Rechtsparteien', groupAbbr: 'TBR' },
    { id: 9, name: 'Alternative Liste', abbreviation: 'AL', color: '#FF00FF', countryId: 1, group: 'Kleine Linksparteien', groupAbbr: 'LGP' },
    { id: 10, name: 'Partei der Arbeit', abbreviation: 'PdA', color: '#FF0000', countryId: 1, group: 'Kleine Linksparteien', groupAbbr: 'LGP' },
    { id: 11, name: 'Solidarität', abbreviation: 'Sol.', color: '#FF4500', countryId: 1, group: 'Kleine Linksparteien', groupAbbr: 'LGP' },
    { id: 12, name: 'Lega dei Ticinesi', abbreviation: 'Lega', color: '#0000FF', countryId: 1, group: 'Kleine Rechtsparteien', groupAbbr: 'TBR' },
    { id: 13, name: 'Mouvement Citoyens Genevois', abbreviation: 'MCG', color: '#FFD700', countryId: 1, group: 'Kleine Rechtsparteien', groupAbbr: 'TBR' },
    { id: 14, name: 'Christlichdemokratische Volkspartei', abbreviation: 'CVP', color: '#FFA500', countryId: 1, group: 'Traditionelle bürgerliche und rechte Parteien', groupAbbr: 'TBR' },
    { id: 15, name: 'Bürgerlich-Demokratische Partei', abbreviation: 'BDP', color: '#CCCC00', countryId: 1, group: 'Kleine Mitteparteien und andere', groupAbbr: 'KMUA' },
    { id: 16, name: 'Freisinnig-Demokratische Partei', abbreviation: 'LPS', color: '#000080', countryId: 1, group: 'Traditionelle bürgerliche und rechte Parteien', groupAbbr: 'TBR' },
    { id: 17, name: 'Frauen für den Frieden', abbreviation: 'FGA', color: '#008B8B', countryId: 1, group: 'Linke und grüne Parteien', groupAbbr: 'LGP' },
    { id: 18, name: 'Progressive Organisationen', abbreviation: 'POCH', color: '#696969', countryId: 1, group: 'Linke und grüne Parteien', groupAbbr: 'LGP' },
    { id: 19, name: 'Parteilos', abbreviation: 'PL', color: '#eaeaea', countryId: 1, group: 'Parteilos', groupAbbr: 'PL' },

// German Parties
    { id: 20, name: 'Christlich Demokratische Union Deutschlands', abbreviation: 'CDU', color: '#000000', countryId: 2, group: 'Traditionelle bürgerliche und rechte Parteien', groupAbbr: 'TBR' },
    { id: 21, name: 'Christlich-Soziale Union in Bayern', abbreviation: 'CSU', color: '#008AC5', countryId: 2, group: 'Traditionelle bürgerliche und rechte Parteien', groupAbbr: 'TBR' },
    { id: 22, name: 'Sozialdemokratische Partei Deutschlands', abbreviation: 'SPD', color: '#E3000F', countryId: 2, group: 'Linke und grüne Parteien', groupAbbr: 'LGP' },
    { id: 23, name: 'Freie Demokratische Partei', abbreviation: 'FDP', color: '#FFED00', countryId: 2, group: 'Traditionelle bürgerliche und rechte Parteien', groupAbbr: 'TBR' },
    { id: 24, name: 'Bündnis 90/Die Grünen', abbreviation: 'Grüne', color: '#64A12D', countryId: 2, group: 'Linke und grüne Parteien', groupAbbr: 'LGP' },
    { id: 25, name: 'Die Linke', abbreviation: 'Linke', color: '#BE3075', countryId: 2, group: 'Linke und grüne Parteien', groupAbbr: 'LGP' },
    { id: 26, name: 'Alternative für Deutschland', abbreviation: 'AfD', color: '#009EE0', countryId: 2, group: 'Traditionelle bürgerliche und rechte Parteien', groupAbbr: 'TBR' },
    { id: 27, name: 'Piratenpartei Deutschland', abbreviation: 'Piraten', color: '#FF8800', countryId: 2, group: 'Kleine Mitteparteien und andere', groupAbbr: 'KMUA' },
    { id: 28, name: 'Partei Mensch Umwelt Tierschutz', abbreviation: 'Tierschutzpartei', color: '#008000', countryId: 2, group: 'Kleine Mitteparteien und andere', groupAbbr: 'KMUA' },
    { id: 29, name: 'Ökologisch-Demokratische Partei', abbreviation: 'ÖDP', color: '#FF6600', countryId: 2, group: 'Kleine Mitteparteien und andere', groupAbbr: 'KMUA' },
    { id: 30, name: 'Die Partei', abbreviation: 'Die PARTEI', color: '#DD0000', countryId: 2, group: 'Kleine Mitteparteien und andere', groupAbbr: 'KMUA' },

// Austrian Parties
    { id: 31, name: 'Österreichische Volkspartei', abbreviation: 'ÖVP', color: '#63C3D0', countryId: 3, group: 'Traditionelle bürgerliche und rechte Parteien', groupAbbr: 'TBR' },
    { id: 32, name: 'Sozialdemokratische Partei Österreichs', abbreviation: 'SPÖ', color: '#E2231A', countryId: 3, group: 'Linke und grüne Parteien', groupAbbr: 'LGP' },
    { id: 33, name: 'Freiheitliche Partei Österreichs', abbreviation: 'FPÖ', color: '#0E428E', countryId: 3, group: 'Traditionelle bürgerliche und rechte Parteien', groupAbbr: 'TBR' },
    { id: 34, name: 'Die Grünen – Die Grüne Alternative', abbreviation: 'Grüne', color: '#6BA539', countryId: 3, group: 'Linke und grüne Parteien', groupAbbr: 'LGP' },
    { id: 35, name: 'NEOS – Das Neue Österreich und Liberales Forum', abbreviation: 'NEOS', color: '#E91C80', countryId: 3, group: 'Kleine Mitteparteien und andere', groupAbbr: 'KMUA' },
    { id: 36, name: 'Kommunistische Partei Österreichs', abbreviation: 'KPÖ', color: '#BE4B48', countryId: 3, group: 'Linke und grüne Parteien', groupAbbr: 'LGP' },
    { id: 37, name: 'Liste Pilz', abbreviation: 'JETZT', color: '#0072B8', countryId: 3, group: 'Kleine Mitteparteien und andere', groupAbbr: 'KMUA' },
    { id: 38, name: 'Bündnis Zukunft Österreich', abbreviation: 'BZÖ', color: '#FF9900', countryId: 3, group: 'Traditionelle bürgerliche und rechte Parteien', groupAbbr: 'TBR' },

    // ... add other Austrian parties as needed
];

export const seatDistributions: SeatDistribution[] = [
    // Seat distributions for regions

    // Zürich, CH
    { id: 1, regionId: 1, partyId: 1, seats: 46 }, // SVP
    { id: 2, regionId: 1, partyId: 2, seats: 36 }, // SP
    { id: 3, regionId: 1, partyId: 3, seats: 29 }, // FDP
    { id: 4, regionId: 1, partyId: 4, seats: 11 }, // Mitte
    { id: 5, regionId: 1, partyId: 5, seats: 19 }, // GPS
    { id: 6, regionId: 1, partyId: 6, seats: 24 }, // GLP
    { id: 7, regionId: 1, partyId: 7, seats: 7 },  // EVP
    { id: 8, regionId: 1, partyId: 8, seats: 3 },  // EDU
    { id: 9, regionId: 1, partyId: 9, seats: 5 },  // AL

    // Zug, CH
    { id: 1, regionId: 2, partyId: 1, seats: 18 }, // SVP
    { id: 2, regionId: 2, partyId: 2, seats: 8 }, // SP
    { id: 3, regionId: 2, partyId: 3, seats: 18 }, // FDP
    { id: 4, regionId: 2, partyId: 4, seats: 19 }, // Mitte
    { id: 5, regionId: 2, partyId: 5, seats: 11 }, // GPS
    { id: 6, regionId: 2, partyId: 6, seats: 6 }, // GLP
    { id: 7, regionId: 2, partyId: 19, seats: 20 }, //PL

    // Aargau, CH
    { id: 1, regionId: 3, partyId: 1, seats: 48 }, // SVP
    { id: 2, regionId: 3, partyId: 2, seats: 23 }, // SP
    { id: 3, regionId: 3, partyId: 3, seats: 22 }, // FDP
    { id: 4, regionId: 3, partyId: 4, seats: 18 }, // Mitte
    { id: 5, regionId: 3, partyId: 5, seats: 10 }, // GPS
    { id: 6, regionId: 3, partyId: 6, seats: 11 }, // GLP
    { id: 7, regionId: 3, partyId: 7, seats: 5 },  // EVP
    { id: 8, regionId: 3, partyId: 8, seats: 3 },  // EDU

    // AR, CH
    { id: 1, regionId: 4, partyId: 1, seats: 7 }, // SVP
    { id: 2, regionId: 4, partyId: 2, seats: 9 }, // SP
    { id: 3, regionId: 4, partyId: 3, seats: 22 }, // FDP
    { id: 4, regionId: 4, partyId: 4, seats: 3 }, // Mitte
    { id: 5, regionId: 4, partyId: 5, seats: 0 }, // GPS
    { id: 6, regionId: 4, partyId: 6, seats: 2 }, // GLP
    { id: 7, regionId: 4, partyId: 7, seats: 2 },  // EVP
    { id: 8, regionId: 4, partyId: 7, seats: 2 },  // EVP

    // For Bavaria, Germany
    { id: 100, regionId: 27, partyId: 11, seats: 85 }, // CSU
    { id: 101, regionId: 27, partyId: 12, seats: 30 }, // SPD
    { id: 102, regionId: 27, partyId: 14, seats: 25 }, // Grüne
    { id: 103, regionId: 27, partyId: 13, seats: 10 }, // FDP
    { id: 104, regionId: 27, partyId: 15, seats: 5 },  // Linke
    { id: 105, regionId: 27, partyId: 16, seats: 20 }, // AfD

    // For Berlin, Germany
    { id: 110, regionId: 28, partyId: 12, seats: 40 }, // SPD
    { id: 111, regionId: 28, partyId: 14, seats: 35 }, // Grüne
    { id: 112, regionId: 28, partyId: 15, seats: 20 }, // Linke
    { id: 113, regionId: 28, partyId: 10, seats: 15 }, // CDU
    { id: 114, regionId: 28, partyId: 13, seats: 10 }, // FDP
    { id: 115, regionId: 28, partyId: 16, seats: 10 }, // AfD

    // For Vienna, Austria
    { id: 200, regionId: 43, partyId: 21, seats: 46 }, // SPÖ
    { id: 201, regionId: 43, partyId: 23, seats: 16 }, // Grüne
    { id: 202, regionId: 43, partyId: 20, seats: 22 }, // ÖVP
    { id: 203, regionId: 43, partyId: 22, seats: 8 },  // FPÖ
    { id: 204, regionId: 43, partyId: 24, seats: 7 },  // NEOS

    // For Tyrol, Austria
    { id: 210, regionId: 44, partyId: 20, seats: 17 }, // ÖVP
    { id: 211, regionId: 44, partyId: 21, seats: 5 },  // SPÖ
    { id: 212, regionId: 44, partyId: 22, seats: 5 },  // FPÖ
    { id: 213, regionId: 44, partyId: 23, seats: 4 },  // Grüne
    { id: 214, regionId: 44, partyId: 24, seats: 3 },  // NEOS

    // ... add seat distributions for other regions as needed
];
