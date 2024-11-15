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
    { id: 3, name: 'Österreich (A)' },
    { id: 2, name: 'Deutschland (D)' },
];

export const regions: Region[] = [
    // Switzerland Cantons
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
    { id: 27, name: 'Zürich (ZH)', countryId: 1 },
    { id: 28, name: 'Zug (ZG)', countryId: 1 },


    // Germany Bundesländer
    { id: 29, name: 'Bayern', countryId: 2 },
    { id: 30, name: 'Berlin', countryId: 2 },
    { id: 31, name: 'Nordrhein-Westfalen', countryId: 2 },
    { id: 32, name: 'Baden-Württemberg', countryId: 2 },
    { id: 33, name: 'Brandenburg', countryId: 2 },
    { id: 34, name: 'Bremen', countryId: 2 },
    { id: 35, name: 'Hamburg', countryId: 2 },
    { id: 36, name: 'Hessen', countryId: 2 },
    { id: 37, name: 'Mecklenburg-Vorpommern', countryId: 2 },
    { id: 38, name: 'Niedersachsen', countryId: 2 },
    { id: 39, name: 'Rheinland-Pfalz', countryId: 2 },
    { id: 40, name: 'Saarland', countryId: 2 },
    { id: 41, name: 'Sachsen', countryId: 2 },
    { id: 42, name: 'Sachsen-Anhalt', countryId: 2 },
    { id: 43, name: 'Schleswig-Holstein', countryId: 2 },
    { id: 44, name: 'Thüringen', countryId: 2 },

// Austria Bundesländer
    { id: 45, name: 'Wien', countryId: 3 },
    { id: 46, name: 'Tirol', countryId: 3 },
    { id: 47, name: 'Steiermark', countryId: 3 },
    { id: 48, name: 'Vorarlberg', countryId: 3 },
    { id: 49, name: 'Salzburg', countryId: 3 },
    { id: 50, name: 'Oberösterreich', countryId: 3 },
    { id: 51, name: 'Niederösterreich', countryId: 3 },
    { id: 52, name: 'Kärnten', countryId: 3 },
    { id: 53, name: 'Burgenland', countryId: 3 }

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
    { id: 20, name: 'Parti socialiste autonome du Sud du Jura', abbreviation: 'PSA', color: '#8d5353', countryId: 1, group: 'Linke und grüne Parteien', groupAbbr: 'LGP' },
    { id: 21, name: 'Liberal-Demokratische Partei ', abbreviation: 'LDP', color: '#005F9E', countryId: 1, group: 'Traditionelle bürgerliche und rechte Parteie', groupAbbr: 'TBR' },
    { id: 22, name: 'Basels starke Alternative', abbreviation: 'BastA!', color: '#FF00FF', countryId: 1, group: 'Linke und grüne Parteien', groupAbbr: 'LGP' },

// German Parties
    { id: 21, name: 'Christlich Demokratische Union Deutschlands', abbreviation: 'CDU', color: '#000000', countryId: 2, group: 'Traditionelle bürgerliche und rechte Parteien', groupAbbr: 'TBR' },
    { id: 22, name: 'Christlich-Soziale Union in Bayern', abbreviation: 'CSU', color: '#008AC5', countryId: 2, group: 'Traditionelle bürgerliche und rechte Parteien', groupAbbr: 'TBR' },
    { id: 23, name: 'Sozialdemokratische Partei Deutschlands', abbreviation: 'SPD', color: '#E3000F', countryId: 2, group: 'Linke und grüne Parteien', groupAbbr: 'LGP' },
    { id: 24, name: 'Freie Demokratische Partei', abbreviation: 'FDP', color: '#FFED00', countryId: 2, group: 'Traditionelle bürgerliche und rechte Parteien', groupAbbr: 'TBR' },
    { id: 25, name: 'Bündnis 90/Die Grünen', abbreviation: 'Grüne', color: '#64A12D', countryId: 2, group: 'Linke und grüne Parteien', groupAbbr: 'LGP' },
    { id: 26, name: 'Die Linke', abbreviation: 'Linke', color: '#BE3075', countryId: 2, group: 'Linke und grüne Parteien', groupAbbr: 'LGP' },
    { id: 27, name: 'Alternative für Deutschland', abbreviation: 'AfD', color: '#009EE0', countryId: 2, group: 'Traditionelle bürgerliche und rechte Parteien', groupAbbr: 'TBR' },
    { id: 28, name: 'Piratenpartei Deutschland', abbreviation: 'Piraten', color: '#FF8800', countryId: 2, group: 'Kleine Mitteparteien und andere', groupAbbr: 'KMUA' },
    { id: 29, name: 'Partei Mensch Umwelt Tierschutz', abbreviation: 'Tierschutzpartei', color: '#008000', countryId: 2, group: 'Kleine Mitteparteien und andere', groupAbbr: 'KMUA' },
    { id: 30, name: 'Ökologisch-Demokratische Partei', abbreviation: 'ÖDP', color: '#FF6600', countryId: 2, group: 'Kleine Mitteparteien und andere', groupAbbr: 'KMUA' },
    { id: 31, name: 'Die Partei', abbreviation: 'Die PARTEI', color: '#DD0000', countryId: 2, group: 'Kleine Mitteparteien und andere', groupAbbr: 'KMUA' },

// Austrian Parties
    { id: 32, name: 'Österreichische Volkspartei', abbreviation: 'ÖVP', color: '#63C3D0', countryId: 3, group: 'Traditionelle bürgerliche und rechte Parteien', groupAbbr: 'TBR' },
    { id: 33, name: 'Sozialdemokratische Partei Österreichs', abbreviation: 'SPÖ', color: '#E2231A', countryId: 3, group: 'Linke und grüne Parteien', groupAbbr: 'LGP' },
    { id: 34, name: 'Freiheitliche Partei Österreichs', abbreviation: 'FPÖ', color: '#0E428E', countryId: 3, group: 'Traditionelle bürgerliche und rechte Parteien', groupAbbr: 'TBR' },
    { id: 35, name: 'Die Grünen – Die Grüne Alternative', abbreviation: 'Grüne', color: '#6BA539', countryId: 3, group: 'Linke und grüne Parteien', groupAbbr: 'LGP' },
    { id: 36, name: 'NEOS – Das Neue Österreich und Liberales Forum', abbreviation: 'NEOS', color: '#E91C80', countryId: 3, group: 'Kleine Mitteparteien und andere', groupAbbr: 'KMUA' },
    { id: 37, name: 'Kommunistische Partei Österreichs', abbreviation: 'KPÖ', color: '#BE4B48', countryId: 3, group: 'Linke und grüne Parteien', groupAbbr: 'LGP' },
    { id: 38, name: 'Liste Pilz', abbreviation: 'JETZT', color: '#0072B8', countryId: 3, group: 'Kleine Mitteparteien und andere', groupAbbr: 'KMUA' },
    { id: 39, name: 'Bündnis Zukunft Österreich', abbreviation: 'BZÖ', color: '#FF9900', countryId: 3, group: 'Traditionelle bürgerliche und rechte Parteien', groupAbbr: 'TBR' },

    // ... add other Austrian parties as needed
];

export const seatDistributions: SeatDistribution[] = [
    // Seat distributions for regions

    // Zürich, CH
    { id: 1, regionId: 27, partyId: 1, seats: 46 }, // SVP
    { id: 2, regionId: 27, partyId: 2, seats: 36 }, // SP
    { id: 3, regionId: 27, partyId: 3, seats: 29 }, // FDP
    { id: 4, regionId: 27, partyId: 4, seats: 11 }, // Mitte
    { id: 5, regionId: 27, partyId: 5, seats: 19 }, // GPS
    { id: 6, regionId: 27, partyId: 6, seats: 24 }, // GLP
    { id: 7, regionId: 27, partyId: 7, seats: 7 },  // EVP
    { id: 8, regionId: 27, partyId: 8, seats: 3 },  // EDU
    { id: 9, regionId: 27, partyId: 9, seats: 5 },  // AL

    // Zug, CH
    { id: 1, regionId: 28, partyId: 1, seats: 18 }, // SVP
    { id: 2, regionId: 28, partyId: 2, seats: 8 }, // SP
    { id: 3, regionId: 28, partyId: 3, seats: 18 }, // FDP
    { id: 4, regionId: 28, partyId: 4, seats: 19 }, // Mitte
    { id: 5, regionId: 28, partyId: 5, seats: 11 }, // GPS
    { id: 6, regionId: 28, partyId: 6, seats: 6 }, // GLP
    { id: 7, regionId: 28, partyId: 19, seats: 20 }, //PL

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
    { id: 6, regionId: 4, partyId: 6, seats: 2 }, // GLP
    { id: 7, regionId: 4, partyId: 7, seats: 2 },  // EVP
    { id: 8, regionId: 4, partyId: 7, seats: 2 },  // EDU

    // Bern, CH
    { id: 1, regionId: 8, partyId: 1, seats: 44 }, // SVP
    { id: 2, regionId: 8, partyId: 2, seats: 32 }, // SP
    { id: 3, regionId: 8, partyId: 3, seats: 18 }, // FDP
    { id: 4, regionId: 8, partyId: 4, seats: 12 }, // Mitte
    { id: 5, regionId: 8, partyId: 5, seats: 19 }, // GPS
    { id: 6, regionId: 8, partyId: 6, seats: 16 }, // GLP
    { id: 7, regionId: 8, partyId: 7, seats: 9 },  // EVP
    { id: 8, regionId: 8, partyId: 8, seats: 6 },  // EDU
    { id: 9, regionId: 8, partyId: 9, seats: 1 },  // AL
    { id: 10, regionId: 8, partyId: 20, seats: 2 },  // PSA
    { id: 11, regionId: 8, partyId: 19, seats: 1 },  // Bürgerliche Stadt- und Landliste

    // BL, CH
    { id: 1, regionId: 6, partyId: 1, seats: 21 }, // SVP
    { id: 2, regionId: 6, partyId: 2, seats: 20 }, // SP
    { id: 3, regionId: 6, partyId: 3, seats: 17 }, // FDP
    { id: 4, regionId: 6, partyId: 4, seats: 10 }, // Mitte
    { id: 5, regionId: 6, partyId: 5, seats: 12 }, // GPS
    { id: 6, regionId: 6, partyId: 6, seats: 6 }, // GLP
    { id: 7, regionId: 6, partyId: 7, seats: 4 },  // EVP

    // BS, CH
    { id: 1, regionId: 7, partyId: 1, seats: 12 }, // SVP
    { id: 2, regionId: 7, partyId: 2, seats: 31 }, // SP
    { id: 3, regionId: 7, partyId: 3, seats: 7 }, // FDP
    { id: 4, regionId: 7, partyId: 4, seats: 7 }, // Mitte
    { id: 5, regionId: 7, partyId: 5, seats: 12 }, // GPS
    { id: 6, regionId: 7, partyId: 6, seats: 7 }, // GLP
    { id: 7, regionId: 7, partyId: 7, seats: 4 },  // EVP
    { id: 8, regionId: 7, partyId: 21, seats: 12 },  // LDP
    { id: 9, regionId: 7, partyId: 22, seats: 6 },  // Basta
    { id: 10, regionId: 7, partyId: 19, seats: 1 },  // Bürgerliche Stadt- und Landliste
];
