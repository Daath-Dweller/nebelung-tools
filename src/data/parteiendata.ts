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
}

export interface SeatDistribution {
    id: number;
    regionId: number;
    partyId: number;
    seats: number;
}

export const countries: Country[] = [
    { id: 1, name: 'Switzerland' },
    { id: 2, name: 'Germany' },
    { id: 3, name: 'Austria' },
];

export const regions: Region[] = [
    // Switzerland Cantons
    { id: 1, name: 'Zurich', countryId: 1 },
    { id: 2, name: 'Bern', countryId: 1 },
    // ... add all 26 cantons

    // Germany Bundesländer
    { id: 27, name: 'Bavaria', countryId: 2 },
    { id: 28, name: 'Berlin', countryId: 2 },
    { id: 29, name: 'North Rhine-Westphalia', countryId: 2 },
    // ... add all 16 Bundesländer

    // Austria Bundesländer
    { id: 43, name: 'Vienna', countryId: 3 },
    { id: 44, name: 'Tyrol', countryId: 3 },
    { id: 45, name: 'Styria', countryId: 3 },
    // ... add all 9 Bundesländer
];

export const parties: Party[] = [
    // Swiss Parties
    { id: 1, name: 'Schweizerische Volkspartei', abbreviation: 'SVP', color: '#008000', countryId: 1 },
    { id: 2, name: 'Sozialdemokratische Partei der Schweiz', abbreviation: 'SP', color: '#D52B1E', countryId: 1 },
    { id: 3, name: 'FDP.Die Liberalen', abbreviation: 'FDP', color: '#005F9E', countryId: 1 },
    { id: 4, name: 'Die Mitte', abbreviation: 'Mitte', color: '#FF7F00', countryId: 1 },
    { id: 5, name: 'GRÜNE Schweiz', abbreviation: 'GPS', color: '#64A12D', countryId: 1 },
    { id: 6, name: 'Grünliberale Partei', abbreviation: 'GLP', color: '#BBE440', countryId: 1 },
    { id: 7, name: 'Evangelische Volkspartei der Schweiz', abbreviation: 'EVP', color: '#FFD700', countryId: 1 },
    { id: 8, name: 'Eidgenössisch-Demokratische Union', abbreviation: 'EDU', color: '#800080', countryId: 1 },
    { id: 9, name: 'Alternative Liste', abbreviation: 'AL', color: '#FF00FF', countryId: 1 },
    // ... add other Swiss parties

    // German Parties
    { id: 10, name: 'Christlich Demokratische Union Deutschlands', abbreviation: 'CDU', color: '#000000', countryId: 2 },
    { id: 11, name: 'Christlich-Soziale Union in Bayern', abbreviation: 'CSU', color: '#008AC5', countryId: 2 },
    { id: 12, name: 'Sozialdemokratische Partei Deutschlands', abbreviation: 'SPD', color: '#E3000F', countryId: 2 },
    { id: 13, name: 'Freie Demokratische Partei', abbreviation: 'FDP', color: '#FFED00', countryId: 2 },
    { id: 14, name: 'Bündnis 90/Die Grünen', abbreviation: 'Grüne', color: '#64A12D', countryId: 2 },
    { id: 15, name: 'Die Linke', abbreviation: 'Linke', color: '#BE3075', countryId: 2 },
    { id: 16, name: 'Alternative für Deutschland', abbreviation: 'AfD', color: '#009EE0', countryId: 2 },
    // ... add other German parties as needed

    // Austrian Parties
    { id: 20, name: 'Österreichische Volkspartei', abbreviation: 'ÖVP', color: '#63C3D0', countryId: 3 },
    { id: 21, name: 'Sozialdemokratische Partei Österreichs', abbreviation: 'SPÖ', color: '#E2231A', countryId: 3 },
    { id: 22, name: 'Freiheitliche Partei Österreichs', abbreviation: 'FPÖ', color: '#0E428E', countryId: 3 },
    { id: 23, name: 'Die Grünen – Die Grüne Alternative', abbreviation: 'Grüne', color: '#6BA539', countryId: 3 },
    { id: 24, name: 'NEOS – Das Neue Österreich und Liberales Forum', abbreviation: 'NEOS', color: '#E91C80', countryId: 3 },
    // ... add other Austrian parties as needed
];

export const seatDistributions: SeatDistribution[] = [
    // Seat distributions for regions
    // For Zurich, Switzerland
    { id: 1, regionId: 1, partyId: 1, seats: 50 }, // SVP
    { id: 2, regionId: 1, partyId: 2, seats: 40 }, // SP
    { id: 3, regionId: 1, partyId: 3, seats: 30 }, // FDP
    { id: 4, regionId: 1, partyId: 4, seats: 20 }, // Mitte
    { id: 5, regionId: 1, partyId: 5, seats: 15 }, // GPS
    { id: 6, regionId: 1, partyId: 6, seats: 10 }, // GLP
    { id: 7, regionId: 1, partyId: 7, seats: 5 },  // EVP
    { id: 8, regionId: 1, partyId: 8, seats: 2 },  // EDU
    { id: 9, regionId: 1, partyId: 9, seats: 1 },  // AL

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
