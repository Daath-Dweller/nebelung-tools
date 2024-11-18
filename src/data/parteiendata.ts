// parteiendata.ts

export interface Country {
    id: number;
    name: string;
    flag: string;
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
    { id: 1, name: 'Schweiz (CH)', flag: '🇨🇭', },
    { id: 3, name: 'Österreich (A)', flag: '🇦🇹', },
    { id: 2, name: 'Deutschland (D)', flag: '🇩🇪',  },

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
    { id: 32, name: 'Baden-Württemberg', countryId: 2 },
    { id: 33, name: 'Brandenburg', countryId: 2 },
    { id: 34, name: 'Bremen', countryId: 2 },
    { id: 35, name: 'Hamburg', countryId: 2 },
    { id: 36, name: 'Hessen', countryId: 2 },
    { id: 37, name: 'Mecklenburg-Vorpommern', countryId: 2 },
    { id: 38, name: 'Niedersachsen', countryId: 2 },
    { id: 31, name: 'Nordrhein-Westfalen', countryId: 2 },
    { id: 39, name: 'Rheinland-Pfalz', countryId: 2 },
    { id: 40, name: 'Saarland', countryId: 2 },
    { id: 41, name: 'Sachsen', countryId: 2 },
    { id: 42, name: 'Sachsen-Anhalt', countryId: 2 },
    { id: 43, name: 'Schleswig-Holstein', countryId: 2 },
    { id: 44, name: 'Thüringen', countryId: 2 },

// Austria Bundesländer
    { id: 53, name: 'Burgenland', countryId: 3 },
    { id: 52, name: 'Kärnten', countryId: 3 },
    { id: 51, name: 'Niederösterreich', countryId: 3 },
    { id: 50, name: 'Oberösterreich', countryId: 3 },
    { id: 49, name: 'Salzburg', countryId: 3 },
    { id: 47, name: 'Steiermark', countryId: 3 },
    { id: 46, name: 'Tirol', countryId: 3 },
    { id: 48, name: 'Vorarlberg', countryId: 3 },
    { id: 45, name: 'Wien', countryId: 3 },

];

export const parties: Party[] = [
// Swiss Parties
    { id: 1, name: 'Schweizerische Volkspartei', abbreviation: 'SVP', color: '#008000', countryId: 1, group: 'Traditionelle bürgerliche und rechte Parteien', groupAbbr: 'TBR' },
    { id: 2, name: 'Sozialdemokratische Partei der Schweiz', abbreviation: 'SP', color: '#D52B1E', countryId: 1, group: 'Linke und grüne Parteien', groupAbbr: 'LGP' },
    { id: 3, name: 'FDP.Die Liberalen', abbreviation: 'FDP', color: '#005F9E', countryId: 1, group: 'Traditionelle bürgerliche und rechte Parteien', groupAbbr: 'TBR' },
    { id: 4, name: 'Die Mitte', abbreviation: 'Mitte', color: '#FF7F00', countryId: 1, group: 'Traditionelle bürgerliche und rechte Parteien', groupAbbr: 'TBR' },
    { id: 5, name: 'GRÜNE Schweiz', abbreviation: 'GPS', color: '#64A12D', countryId: 1, group: 'Linke und grüne Parteien', groupAbbr: 'LGP' },
    { id: 6, name: 'Grünliberale Partei', abbreviation: 'GLP', color: '#BBE440', countryId: 1, group: '(Kleine) Mitteparteien und andere', groupAbbr: 'KMUA' },
    { id: 7, name: 'Evangelische Volkspartei der Schweiz', abbreviation: 'EVP', color: '#FFD700', countryId: 1, group: '(Kleine) Mitteparteien und andere', groupAbbr: 'KMUA' },
    { id: 8, name: 'Eidgenössisch-Demokratische Union', abbreviation: 'EDU', color: '#800080', countryId: 1, group: 'Kleine Rechtsparteien', groupAbbr: 'TBR' },
    { id: 9, name: 'Alternative Liste', abbreviation: 'AL', color: '#FF00FF', countryId: 1, group: 'Kleine Linksparteien', groupAbbr: 'LGP' },
    { id: 10, name: 'Partei der Arbeit', abbreviation: 'PdA', color: '#FF0000', countryId: 1, group: 'Kleine Linksparteien', groupAbbr: 'LGP' },
    { id: 11, name: 'Solidarität', abbreviation: 'Sol.', color: '#FF4500', countryId: 1, group: 'Kleine Linksparteien', groupAbbr: 'LGP' },
    { id: 12, name: 'Lega dei Ticinesi', abbreviation: 'Lega', color: '#0000FF', countryId: 1,  group: 'Traditionelle bürgerliche und rechte Parteien', groupAbbr: 'TBR' },
    { id: 13, name: 'Mouvement Citoyens Genevois', abbreviation: 'MCG', color: '#FFD700', countryId: 1,  group: 'Traditionelle bürgerliche und rechte Parteien', groupAbbr: 'TBR' },
    { id: 19, name: 'Parteilos', abbreviation: 'PL', color: '#eaeaea', countryId: 1, group: 'Parteilos', groupAbbr: 'PL' },
    { id: 20, name: 'Parti socialiste autonome du Sud du Jura', abbreviation: 'PSA', color: '#8d5353', countryId: 1, group: 'Linke und grüne Parteien', groupAbbr: 'LGP' },
    { id: 21, name: 'Liberal-Demokratische Partei ', abbreviation: 'LDP', color: '#005F9E', countryId: 1, group: 'Traditionelle bürgerliche und rechte Parteie', groupAbbr: 'TBR' },
    { id: 22, name: 'Basels starke Alternative', abbreviation: 'BastA!', color: '#FF00FF', countryId: 1, group: 'Linke und grüne Parteien', groupAbbr: 'LGP' },
    { id: 23, name: 'Christlich-soziale Partei', abbreviation: 'CSP', color: '#a31234', countryId: 1, group: '(Kleine) Mitteparteien und andere', groupAbbr: 'KMUA' },
    { id: 24, name: 'Maudets Liste - libertes et justice sociale', abbreviation: 'LJS', color: '#451db9', countryId: 1, group: '(Kleine) Mitteparteien und andere', groupAbbr: 'KMUA' },
    { id: 25, name: 'Kommunistische Partei - Partito Comunista', abbreviation: 'PC', color: '#3f1372', countryId: 1, group: 'Linke und grüne Parteien', groupAbbr: 'LGP' },
    { id: 26, name: 'Vorwärts Tessin & Arbeit - Avanti con Ticino & Lavoro', abbreviation: 'ATL', color: '#984417', countryId: 1, group: '(Kleine) Mitteparteien und andere', groupAbbr: 'KMUA' },
    { id: 27, name: 'HelvEthica Ticino', abbreviation: 'HET', color: '#dc5b0a', countryId: 1, group: '(Kleine) Mitteparteien und andere', groupAbbr: 'KMUA' },
    { id: 28, name: 'Più Donne - Mehr Frauen', abbreviation: 'PD', color: '#9111ea', countryId: 1,  group: 'Linke und grüne Parteien', groupAbbr: 'LGP' },
    { id: 29, name: 'Bewegung für den Sozialismus - Movimento per il socialismo', abbreviation: 'MPS', color: '#b41db9', countryId: 1, group: 'Linke und grüne Parteien', groupAbbr: 'LGP' },
    { id: 30, name: 'Aufrecht Schweiz', abbreviation: 'AS', color: '#1e4f1f', countryId: 1, group: 'Traditionelle bürgerliche und rechte Parteien', groupAbbr: 'TBR' },
    { id: 31, name: 'Décroissance Alternatives', abbreviation: 'DA', color: '#441c6b', countryId: 1, group: 'Linke und grüne Parteien', groupAbbr: 'LGP' },
    { id: 32, name: 'Les Libres', abbreviation: 'LL', color: '#1f8085', countryId: 1, group: 'Traditionelle bürgerliche und rechte Parteien', groupAbbr: 'TBR' },

// German Parties
    { id: 100, name: 'Christlich Demokratische Union Deutschlands', abbreviation: 'CDU', color: '#000000', countryId: 2, group: 'Traditionelle bürgerliche und rechte Parteien', groupAbbr: 'TBR' },
    { id: 101, name: 'Christlich-Soziale Union in Bayern', abbreviation: 'CSU', color: '#008AC5', countryId: 2, group: 'Traditionelle bürgerliche und rechte Parteien', groupAbbr: 'TBR' },
    { id: 102, name: 'Sozialdemokratische Partei Deutschlands', abbreviation: 'SPD', color: '#E3000F', countryId: 2, group: 'Linke und grüne Parteien', groupAbbr: 'LGP' },
    { id: 103, name: 'Freie Demokratische Partei', abbreviation: 'FDP', color: '#FFED00', countryId: 2, group: 'Traditionelle bürgerliche und rechte Parteien', groupAbbr: 'TBR' },
    { id: 104, name: 'Bündnis 90/Die Grünen', abbreviation: 'Grüne', color: '#64A12D', countryId: 2, group: 'Linke und grüne Parteien', groupAbbr: 'LGP' },
    { id: 105, name: 'Die Linke', abbreviation: 'Linke', color: '#BE3075', countryId: 2, group: 'Linke und grüne Parteien', groupAbbr: 'LGP' },
    { id: 106, name: 'Alternative für Deutschland', abbreviation: 'AfD', color: '#009EE0', countryId: 2, group: 'Traditionelle bürgerliche und rechte Parteien', groupAbbr: 'TBR' },
    { id: 111, name: 'Freie Wähler', abbreviation: 'FW', color: '#cc6e29', countryId: 2, group: '(Kleine) Mitteparteien und andere', groupAbbr: 'KMUA' },
    { id: 112, name: 'Bündnis Sahra Wagenknecht', abbreviation: 'BSW', color: '#7d29cc', countryId: 2,  group: 'Linke und grüne Parteien', groupAbbr: 'LGP' },
    { id: 113, name: 'Parteilos', abbreviation: 'PL', color: '#d0ccc8', countryId: 2, group: 'Parteilos', groupAbbr: 'PL' },
    { id: 114, name: 'Bündnis Deutschland', abbreviation: 'BD', color: '#00dcff', countryId: 2, group: 'Traditionelle bürgerliche und rechte Parteien', groupAbbr: 'TBR' },
    { id: 115, name: 'Werteunion', abbreviation: 'WU', color: '#383e3f', countryId: 2, group: 'Traditionelle bürgerliche und rechte Parteien', groupAbbr: 'TBR' },
    { id: 116, name: 'Südschleswigscher Wählerverband', abbreviation: 'SSW', color: '#97bd39', countryId: 2, group: 'Linke und grüne Parteien', groupAbbr: 'LGP' },

// Austrian Parties
    { id: 200, name: 'Österreichische Volkspartei', abbreviation: 'ÖVP', color: '#63C3D0', countryId: 3, group: 'Traditionelle bürgerliche und rechte Parteien', groupAbbr: 'TBR' },
    { id: 201, name: 'Sozialdemokratische Partei Österreichs', abbreviation: 'SPÖ', color: '#E2231A', countryId: 3, group: 'Linke und grüne Parteien', groupAbbr: 'LGP' },
    { id: 202, name: 'Freiheitliche Partei Österreichs', abbreviation: 'FPÖ', color: '#0E428E', countryId: 3, group: 'Traditionelle bürgerliche und rechte Parteien', groupAbbr: 'TBR' },
    { id: 203, name: 'Die Grünen – Die Grüne Alternative', abbreviation: 'Grüne', color: '#6BA539', countryId: 3, group: 'Linke und grüne Parteien', groupAbbr: 'LGP' },
    { id: 204, name: 'NEOS – Das Neue Österreich und Liberales Forum', abbreviation: 'NEOS', color: '#E91C80', countryId: 3, group: '(Kleine) Mitteparteien und andere', groupAbbr: 'KMUA' },
    { id: 205, name: 'Kommunistische Partei Österreichs', abbreviation: 'KPÖ', color: '#BE4B48', countryId: 3, group: 'Linke und grüne Parteien', groupAbbr: 'LGP' },
    { id: 206, name: 'Liste Fritz Dinkhauser', abbreviation: 'FRITZ', color: '#0072B8', countryId: 3, group: '(Kleine) Mitteparteien und andere', groupAbbr: 'KMUA' },
    { id: 207, name: 'Bündnis Zukunft Österreich', abbreviation: 'BZÖ', color: '#FF9900', countryId: 3, group: 'Traditionelle bürgerliche und rechte Parteien', groupAbbr: 'TBR' },
    { id: 208, name: 'MFG – Menschen Freiheit Grundrechte', abbreviation: 'MFG', color: '#9A9A9A', countryId: 3, group: 'Traditionelle bürgerliche und rechte Parteien', groupAbbr: 'TBR' },
    { id: 209, name: 'Team Kärnten', abbreviation: 'TK', color: '#005BAC', countryId: 3, group: '(Kleine) Mitteparteien und andere', groupAbbr: 'KMUA' },
    { id: 210, name: 'Parteilos', abbreviation: 'PL', color: '#d0ccc8', countryId: 3, group: 'Parteilos', groupAbbr: 'PL' },

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

    // Freiburg, CH
    { id: 1, regionId: 9, partyId: 1, seats: 18 }, // SVP
    { id: 2, regionId: 9, partyId: 2, seats: 21 }, // SP
    { id: 3, regionId: 9, partyId: 3, seats: 23 }, // FDP
    { id: 4, regionId: 9, partyId: 4, seats: 26 }, // Mitte
    { id: 5, regionId: 9, partyId: 5, seats: 13 }, // GPS
    { id: 6, regionId: 9, partyId: 6, seats: 3 }, // GLP
    { id: 7, regionId: 9, partyId: 8, seats: 1 },  // EDU
    { id: 8, regionId: 9, partyId: 23, seats: 4 },  // CSP
    { id: 9, regionId: 9, partyId: 19, seats: 1 }, //PL

    // Genf, CH
    { id: 1, regionId: 10, partyId: 1, seats: 12 }, // SVP
    { id: 2, regionId: 10, partyId: 2, seats: 18 }, // SP
    { id: 3, regionId: 10, partyId: 3, seats: 22 }, // FDP
    { id: 4, regionId: 10, partyId: 4, seats: 9 }, // Mitte
    { id: 5, regionId: 10, partyId: 5, seats: 15 }, // GPS
    { id: 6, regionId: 10, partyId: 13, seats: 14 }, // MCG
    { id: 7, regionId: 10, partyId: 24, seats: 10 }, // LJS

    // Glarus, CH
    { id: 1, regionId: 11, partyId: 1, seats: 18 }, // SVP
    { id: 2, regionId: 11, partyId: 2, seats: 8 }, // SP
    { id: 3, regionId: 11, partyId: 3, seats: 11 }, // FDP
    { id: 4, regionId: 11, partyId: 4, seats: 12 }, // Mitte
    { id: 5, regionId: 11, partyId: 5, seats: 8 }, // GPS
    { id: 6, regionId: 11, partyId: 6, seats: 3 }, // GLP

    // Graubünden, CH
    { id: 1, regionId: 12, partyId: 1, seats: 25 }, // SVP
    { id: 2, regionId: 12, partyId: 2, seats: 27 }, // SP
    { id: 3, regionId: 12, partyId: 3, seats: 34 }, // FDP
    { id: 4, regionId: 12, partyId: 4, seats: 2 }, // Mitte
    { id: 5, regionId: 12, partyId: 5, seats: 7 }, // GPS

    // Jura, CH
    { id: 1, regionId: 13, partyId: 1, seats: 7 }, // SVP
    { id: 2, regionId: 13, partyId: 2, seats: 13 }, // SP
    { id: 3, regionId: 13, partyId: 3, seats: 8 }, // FDP
    { id: 4, regionId: 13, partyId: 4, seats: 15 }, // Mitte
    { id: 5, regionId: 13, partyId: 5, seats: 7 }, // GPS
    { id: 6, regionId: 13, partyId: 6, seats: 2 }, // GLP
    { id: 7, regionId: 13, partyId: 9, seats: 2 },  // AL
    { id: 8, regionId: 13, partyId: 23, seats: 6 },  // CSP

    // Luzern, CH
    { id: 1, regionId: 14, partyId: 1, seats: 27 }, // SVP
    { id: 2, regionId: 14, partyId: 2, seats: 19}, // SP
    { id: 3, regionId: 14, partyId: 3, seats: 22 }, // FDP
    { id: 4, regionId: 14, partyId: 4, seats: 32 }, // Mitte
    { id: 5, regionId: 14, partyId: 5, seats: 8 }, // GPS

    // Neuenburg, CH
    { id: 1, regionId: 15, partyId: 1, seats: 8 }, // SVP
    { id: 2, regionId: 15, partyId: 2, seats: 21 }, // SP
    { id: 3, regionId: 15, partyId: 3, seats: 32 }, // FDP
    { id: 4, regionId: 15, partyId: 4, seats: 4 }, // Mitte
    { id: 5, regionId: 15, partyId: 5, seats: 19 }, // GPS
    { id: 6, regionId: 15, partyId: 6, seats: 8 }, // GLP
    { id: 7, regionId: 15, partyId: 9, seats: 8 },  // AL

    // Nidwalden, CH
    { id: 1, regionId: 16, partyId: 1, seats: 15 }, // SVP
    { id: 2, regionId: 16, partyId: 2, seats: 2 }, // SP
    { id: 3, regionId: 16, partyId: 3, seats: 16 }, // FDP
    { id: 4, regionId: 16, partyId: 4, seats: 15 }, // Mitte
    { id: 5, regionId: 16, partyId: 5, seats: 7 }, // GPS
    { id: 6, regionId: 16, partyId: 6, seats: 5 }, // GLP

    // Obwalden, CH
    { id: 1, regionId: 17, partyId: 1, seats: 13 }, // SVP
    { id: 2, regionId: 17, partyId: 2, seats: 6 }, // SP
    { id: 3, regionId: 17, partyId: 3, seats: 11 }, // FDP
    { id: 4, regionId: 17, partyId: 4, seats: 19 }, // Mitte
    { id: 5, regionId: 17, partyId: 6, seats: 2}, // GLP
    { id: 6, regionId: 17, partyId: 23, seats: 4 },  // CSP

    // Schaffhausen, CH
    { id: 1, regionId: 18, partyId: 1, seats: 21 }, // SVP
    { id: 2, regionId: 18, partyId: 2, seats: 16 }, // SP
    { id: 3, regionId: 18, partyId: 3, seats: 9 }, // FDP
    { id: 4, regionId: 18, partyId: 4, seats: 2 }, // Mitte
    { id: 5, regionId: 18, partyId: 5, seats: 3 }, // GPS
    { id: 6, regionId: 18, partyId: 6, seats: 5 }, // GLP
    { id: 7, regionId: 18, partyId: 7, seats: 2 },  // EVP
    { id: 8, regionId: 18, partyId: 8, seats: 2 },  // EDU

    // Schwyz, CH
    { id: 1, regionId: 19, partyId: 1, seats: 38 }, // SVP
    { id: 2, regionId: 19, partyId: 2, seats: 14 }, // SP
    { id: 3, regionId: 19, partyId: 3, seats: 19 }, // FDP
    { id: 4, regionId: 19, partyId: 4, seats: 23 }, // Mitte
    { id: 5, regionId: 19, partyId: 5, seats: 1 }, // GPS
    { id: 6, regionId: 19, partyId: 6, seats: 5 }, // GLP

    // Solothurn, CH
    { id: 1, regionId: 20, partyId: 1, seats: 21 }, // SVP
    { id: 2, regionId: 20, partyId: 2, seats: 20 }, // SP
    { id: 3, regionId: 20, partyId: 3, seats: 22 }, // FDP
    { id: 4, regionId: 20, partyId: 4, seats: 20 }, // Mitte
    { id: 5, regionId: 20, partyId: 5, seats: 10 }, // GPS
    { id: 6, regionId: 20, partyId: 6, seats: 6 }, // GLP
    { id: 7, regionId: 20, partyId: 7, seats: 1 },  // EVP

    // St. Gallen, CH
    { id: 1, regionId: 21, partyId: 1, seats: 42 }, // SVP
    { id: 2, regionId: 21, partyId: 2, seats: 18 }, // SP
    { id: 3, regionId: 21, partyId: 3, seats: 19 }, // FDP
    { id: 4, regionId: 21, partyId: 4, seats: 27 }, // Mitte
    { id: 5, regionId: 21, partyId: 5, seats: 6 }, // GPS
    { id: 6, regionId: 21, partyId: 6, seats: 6 }, // GLP
    { id: 7, regionId: 21, partyId: 7, seats: 2 },  // EVP

    // Tessin, CH
    { id: 1, regionId: 22, partyId: 1, seats: 9 }, // SVP
    { id: 2, regionId: 22, partyId: 2, seats: 12 }, // SP
    { id: 3, regionId: 22, partyId: 3, seats: 21 }, // FDP
    { id: 4, regionId: 22, partyId: 4, seats: 16 }, // Mitte
    { id: 5, regionId: 22, partyId: 5, seats: 5 }, // GPS
    { id: 6, regionId: 22, partyId: 6, seats: 2 }, // GLP
    { id: 7, regionId: 22, partyId: 9, seats: 4 },  // AL
    { id: 8, regionId: 22, partyId: 12, seats: 14 },  // LEGA
    { id: 9, regionId: 22, partyId: 25, seats: 2 },  // PC
    { id: 10, regionId: 22, partyId: 26, seats: 3 },  // ATL
    { id: 11, regionId: 22, partyId: 27, seats: 2 },  // HET
    { id: 12, regionId: 22, partyId: 28, seats: 2 },  // PD
    { id: 13, regionId: 22, partyId: 29, seats: 2 },  // MPS

    // Thurgau, CH
    { id: 1, regionId: 23, partyId: 1, seats: 42 }, // SVP
    { id: 2, regionId: 23, partyId: 2, seats: 18 }, // SP
    { id: 3, regionId: 23, partyId: 3, seats: 17 }, // FDP
    { id: 4, regionId: 23, partyId: 4, seats: 21 }, // Mitte
    { id: 5, regionId: 23, partyId: 5, seats: 13 }, // GPS
    { id: 6, regionId: 23, partyId: 6, seats: 6 }, // GLP
    { id: 7, regionId: 23, partyId: 9, seats: 6 },  // AL
    { id: 8, regionId: 23, partyId: 8, seats: 5 },  // EDU
    { id: 9, regionId: 23, partyId: 30, seats: 1 },  // AS

    // Uri, CH
    { id: 1, regionId: 24, partyId: 1, seats: 17 }, // SVP
    { id: 2, regionId: 24, partyId: 2, seats: 4 }, // SP
    { id: 3, regionId: 24, partyId: 3, seats: 12 }, // FDP
    { id: 4, regionId: 24, partyId: 4, seats: 22 }, // Mitte
    { id: 5, regionId: 24, partyId: 5, seats: 2 }, // GPS
    { id: 6, regionId: 24, partyId: 6, seats: 3 }, // GLP
    { id: 7, regionId: 24, partyId: 19, seats: 4 }, //PL

    // Waadt, CH
    { id: 1, regionId: 25, partyId: 1, seats: 23 }, // SVP
    { id: 2, regionId: 25, partyId: 2, seats: 32 }, // SP
    { id: 3, regionId: 25, partyId: 3, seats: 50 }, // FDP
    { id: 5, regionId: 25, partyId: 5, seats: 25 }, // GPS
    { id: 6, regionId: 25, partyId: 6, seats: 11 }, // GLP
    { id: 7, regionId: 25, partyId: 9, seats: 5 },  // AL
    { id: 8, regionId: 25, partyId: 31, seats: 2 },  // DA
    { id: 9, regionId: 25, partyId: 11, seats: 1 },  // Sol
    { id: 10, regionId: 25, partyId: 10, seats: 3 },  // PdA
    { id: 11, regionId: 25, partyId: 32, seats: 2 },  // LL

    // Wallis, CH
    { id: 1, regionId: 26, partyId: 1, seats: 22 }, // SVP
    { id: 2, regionId: 26, partyId: 2, seats: 15 }, // SP
    { id: 3, regionId: 26, partyId: 3, seats: 27 }, // FDP
    { id: 4, regionId: 26, partyId: 4, seats: 40 }, // Mitte
    { id: 5, regionId: 26, partyId: 5, seats: 13 }, // GPS
    { id: 6, regionId: 26, partyId: 9, seats: 1 },  // AL
    { id: 7, regionId: 26, partyId: 23, seats: 4 },  // CSP

    // Zug, CH
    { id: 1, regionId: 28, partyId: 1, seats: 18 }, // SVP
    { id: 2, regionId: 28, partyId: 2, seats: 8 }, // SP
    { id: 3, regionId: 28, partyId: 3, seats: 18 }, // FDP
    { id: 4, regionId: 28, partyId: 4, seats: 19 }, // Mitte
    { id: 5, regionId: 28, partyId: 5, seats: 11 }, // GPS
    { id: 6, regionId: 28, partyId: 6, seats: 6 }, // GLP


    //BW, D
    { id: 1, regionId: 32, partyId: 100, seats: 42 }, //CDU
    { id: 2, regionId: 32, partyId: 102, seats: 19 }, //SPD
    { id: 3, regionId: 32, partyId: 103, seats: 18 }, //FDP
    { id: 4, regionId: 32, partyId: 104, seats: 58 }, //Grüne
    { id: 5, regionId: 32, partyId: 106, seats: 17 }, //AfD

    //Bayern, D
    { id: 1, regionId: 29, partyId: 101, seats: 85 }, //CSU
    { id: 2, regionId: 29, partyId: 102, seats: 17 }, //SPD
    { id: 3, regionId: 29, partyId: 104, seats: 32 }, //Grüne
    { id: 4, regionId: 29, partyId: 106, seats: 32 }, //AfD
    { id: 5, regionId: 29, partyId: 111, seats: 37 }, //FW

    //Berlin, D
    { id: 1, regionId: 30, partyId: 100, seats: 52 }, //CDU
    { id: 2, regionId: 30, partyId: 102, seats: 34 }, //SPD
    { id: 3, regionId: 30, partyId: 103, seats: 18 }, //FDP
    { id: 4, regionId: 30, partyId: 104, seats: 34 }, //Grüne
    { id: 5, regionId: 30, partyId: 106, seats: 16 }, //AfD
    { id: 6, regionId: 30, partyId: 105, seats: 21 }, //Linke
    { id: 7, regionId: 30, partyId: 112, seats: 2 }, //BSW
    { id: 8, regionId: 30, partyId: 113, seats: 1 }, //PL

//Brandenburg, D
    { id: 1, regionId: 33, partyId: 100, seats: 12 }, //CDU
    { id: 2, regionId: 33, partyId: 102, seats: 32 }, //SPD
    { id: 3, regionId: 33, partyId: 106, seats: 30 }, //AfD
    { id: 4, regionId: 33, partyId: 112, seats: 14 }, //BSW

    //Bremen, D
    { id: 1, regionId: 34, partyId: 100, seats: 24 }, //CDU
    { id: 2, regionId: 34, partyId: 102, seats: 28 }, //SPD
    { id: 3, regionId: 34, partyId: 103, seats: 5 }, //FDP
    { id: 4, regionId: 34, partyId: 104, seats: 10 }, //Grüne
    { id: 5, regionId: 34, partyId: 105, seats: 10 }, //Linke
    { id: 6, regionId: 34, partyId: 114, seats: 7 }, //BD
    { id: 7, regionId: 34, partyId: 113, seats: 3 }, //PL

    //Hamburg, D
    { id: 1, regionId: 35, partyId: 100, seats: 16 }, //CDU
    { id: 2, regionId: 35, partyId: 102, seats: 53 }, //SPD
    { id: 3, regionId: 35, partyId: 104, seats: 32 }, //Grüne
    { id: 4, regionId: 35, partyId: 103, seats: 1 }, //FDP
    { id: 5, regionId: 35, partyId: 106, seats: 7 }, //AfD
    { id: 6, regionId: 35, partyId: 112, seats: 1 }, //BSW
    { id: 7, regionId: 35, partyId: 105, seats: 11 }, //Linke
    { id: 8, regionId: 35, partyId: 113, seats: 2 }, //PL

    //Hessen, D
    { id: 1, regionId: 36, partyId: 100, seats: 52 }, //CDU
    { id: 2, regionId: 36, partyId: 102, seats: 23 }, //SPD
    { id: 3, regionId: 36, partyId: 104, seats: 22 }, //Grüne
    { id: 4, regionId: 36, partyId: 103, seats: 8 }, //FDP
    { id: 5, regionId: 36, partyId: 106, seats: 25 }, //AfD
    { id: 8, regionId: 36, partyId: 113, seats: 3 }, //PL

    //MP, D
    { id: 1, regionId: 37, partyId: 100, seats: 13 }, //CDU
    { id: 2, regionId: 37, partyId: 102, seats: 34 }, //SPD
    { id: 3, regionId: 37, partyId: 104, seats: 5 }, //Grüne
    { id: 4, regionId: 37, partyId: 103, seats: 4 }, //FDP
    { id: 5, regionId: 37, partyId: 106, seats: 14 }, //AfD
    { id: 7, regionId: 37, partyId: 105, seats: 9 }, //Linke

    //NS, D
    { id: 1, regionId: 38, partyId: 100, seats: 47 }, //CDU
    { id: 2, regionId: 38, partyId: 102, seats: 57 }, //SPD
    { id: 3, regionId: 38, partyId: 104, seats: 24 }, //Grüne
    { id: 4, regionId: 38, partyId: 106, seats: 17 }, //AfD
    { id: 5, regionId: 38, partyId: 115, seats: 1 }, //WU

    //NRW, D
    { id: 1, regionId: 31, partyId: 100, seats: 76 }, //CDU
    { id: 2, regionId: 31, partyId: 102, seats: 56 }, //SPD
    { id: 3, regionId: 31, partyId: 104, seats: 39 }, //Grüne
    { id: 4, regionId: 31, partyId: 103, seats: 12 }, //FDP
    { id: 5, regionId: 31, partyId: 106, seats: 12 }, //AfD

    //RP, D
    { id: 1, regionId: 39, partyId: 100, seats: 31 }, //CDU
    { id: 2, regionId: 39, partyId: 102, seats: 39 }, //SPD
    { id: 3, regionId: 39, partyId: 104, seats: 9 }, //Grüne
    { id: 4, regionId: 39, partyId: 103, seats: 6 }, //FDP
    { id: 5, regionId: 39, partyId: 106, seats: 6 }, //AfD
    { id: 6, regionId: 39, partyId: 112, seats: 1 }, //BSW
    { id: 7, regionId: 39, partyId: 111, seats: 6 }, //FW
    { id: 8, regionId: 39, partyId: 113, seats: 3 }, //PL

    //SL, D
    { id: 1, regionId: 40, partyId: 100, seats: 19 }, //CDU
    { id: 2, regionId: 40, partyId: 102, seats: 29 }, //SPD
    { id: 5, regionId: 40, partyId: 106, seats: 3 }, //AfD

    //SN, D
    { id: 1, regionId: 41, partyId: 100, seats: 41 }, //CDU
    { id: 2, regionId: 41, partyId: 102, seats: 10 }, //SPD
    { id: 3, regionId: 41, partyId: 104, seats: 7 }, //Grüne
    { id: 5, regionId: 41, partyId: 106, seats: 40 }, //AfD
    { id: 7, regionId: 41, partyId: 105, seats: 6 }, //Linke
    { id: 6, regionId: 41, partyId: 112, seats: 15 }, //BSW
    { id: 8, regionId: 41, partyId: 113, seats: 1 }, //PL

    //SNA, D
    { id: 1, regionId: 42, partyId: 100, seats: 40 }, //CDU
    { id: 2, regionId: 42, partyId: 102, seats: 9 }, //SPD
    { id: 3, regionId: 42, partyId: 104, seats: 6 }, //Grüne
    { id: 4, regionId: 42, partyId: 103, seats: 7 }, //FDP
    { id: 5, regionId: 42, partyId: 106, seats: 23 }, //AfD
    { id: 8, regionId: 42, partyId: 113, seats: 1 }, //PL

    //SH, D
    { id: 1, regionId: 43, partyId: 100, seats: 34 }, //CDU
    { id: 2, regionId: 43, partyId: 102, seats: 12 }, //SPD
    { id: 3, regionId: 43, partyId: 104, seats: 14 }, //Grüne
    { id: 4, regionId: 43, partyId: 103, seats: 5 }, //FDP
    { id: 5, regionId: 43, partyId: 116, seats: 4 }, //SSW

    //THÜ, D
    { id: 1, regionId: 44, partyId: 100, seats: 23 }, //CDU
    { id: 2, regionId: 44, partyId: 102, seats: 6 }, //SPD
    { id: 5, regionId: 44, partyId: 106, seats: 32 }, //AfD
    { id: 7, regionId: 44, partyId: 105, seats: 12 }, //Linke
    { id: 6, regionId: 44, partyId: 112, seats: 15 }, //BSW


    // Wien, Ö
    { id: 1, regionId: 45, partyId: 200, seats: 22 }, //ÖVP
    { id: 2, regionId: 45, partyId: 201, seats: 46 }, //SPÖ
    { id: 3, regionId: 45, partyId: 202, seats: 8 }, //FPÖ
    { id: 4, regionId: 45, partyId: 203, seats: 16 }, //Grüne
    { id: 5, regionId: 45, partyId: 204, seats: 8 }, //Neos

    // Vorarlberg, Ö
    { id: 1, regionId: 48, partyId: 200, seats: 15 }, //ÖVP
    { id: 2, regionId: 48, partyId: 201, seats: 3 }, //SPÖ
    { id: 3, regionId: 48, partyId: 202, seats: 11 }, //FPÖ
    { id: 4, regionId: 48, partyId: 203, seats: 4 }, //Grüne
    { id: 5, regionId: 48, partyId: 204, seats: 3 }, //Neos

    // Tirol, Ö
    { id: 1, regionId: 46, partyId: 200, seats: 14 }, //ÖVP
    { id: 2, regionId: 46, partyId: 201, seats: 7 }, //SPÖ
    { id: 3, regionId: 46, partyId: 202, seats: 7 }, //FPÖ
    { id: 4, regionId: 46, partyId: 203, seats: 3 }, //Grüne
    { id: 5, regionId: 46, partyId: 204, seats: 2 }, //Neos
    { id: 6, regionId: 46, partyId: 206, seats: 3 }, //LFD

    // Steiermark, Ö
    { id: 1, regionId: 47, partyId: 200, seats: 18 }, //ÖVP
    { id: 2, regionId: 47, partyId: 201, seats: 12 }, //SPÖ
    { id: 3, regionId: 47, partyId: 202, seats: 8 }, //FPÖ
    { id: 4, regionId: 47, partyId: 203, seats: 6 }, //Grüne
    { id: 5, regionId: 47, partyId: 204, seats: 2 }, //Neos
    { id: 6, regionId: 47, partyId: 205, seats: 2 }, //KPÖ

    // Salzburg, Ö
    { id: 1, regionId: 49, partyId: 200, seats: 12 }, //ÖVP
    { id: 2, regionId: 49, partyId: 201, seats: 7 }, //SPÖ
    { id: 3, regionId: 49, partyId: 202, seats: 10 }, //FPÖ
    { id: 4, regionId: 49, partyId: 203, seats: 3}, //Grüne
    { id: 5, regionId: 49, partyId: 205, seats: 4 }, //KPÖ

    // OÖ, Ö
    { id: 1, regionId: 50, partyId: 200, seats: 22 }, //ÖVP
    { id: 2, regionId: 50, partyId: 201, seats: 11 }, //SPÖ
    { id: 3, regionId: 50, partyId: 202, seats: 11 }, //FPÖ
    { id: 4, regionId: 50, partyId: 203, seats: 7 }, //Grüne
    { id: 5, regionId: 50, partyId: 204, seats: 2 }, //Neos
    { id: 6, regionId: 50, partyId: 208, seats: 3 }, //MFG

    // NÖ, Ö
    { id: 1, regionId: 51, partyId: 200, seats: 23 }, //ÖVP
    { id: 2, regionId: 51, partyId: 201, seats: 12 }, //SPÖ
    { id: 3, regionId: 51, partyId: 202, seats: 14 }, //FPÖ
    { id: 4, regionId: 51, partyId: 203, seats: 4 }, //Grüne
    { id: 5, regionId: 51, partyId: 204, seats: 3 }, //Neos

    // Kärnten, Ö
    { id: 1, regionId: 52, partyId: 200, seats: 7 }, //ÖVP
    { id: 2, regionId: 52, partyId: 201, seats: 15 }, //SPÖ
    { id: 3, regionId: 52, partyId: 202, seats: 9 }, //FPÖ
    { id: 4, regionId: 52, partyId: 209, seats: 5 }, //TK

    // BL, Ö
    { id: 1, regionId: 53, partyId: 200, seats: 11 }, //ÖVP
    { id: 2, regionId: 53, partyId: 201, seats: 19 }, //SPÖ
    { id: 3, regionId: 53, partyId: 202, seats: 3 }, //FPÖ
    { id: 4, regionId: 53, partyId: 203, seats: 2 }, //Grüne
    { id: 5, regionId: 53, partyId: 210, seats: 1 }, //PL
];
