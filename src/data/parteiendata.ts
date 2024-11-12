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
    // ... add all 16 Bundesländer

    // Austria Bundesländer
    { id: 43, name: 'Vienna', countryId: 3 },
    { id: 44, name: 'Tyrol', countryId: 3 },
    // ... add all 9 Bundesländer
];

export const parties: Party[] = [
    // Swiss Parties
    { id: 1, name: 'Schweizerische Volkspartei', abbreviation: 'SVP', color: '#008000', countryId: 1 },
    { id: 2, name: 'Sozialdemokratische Partei der Schweiz', abbreviation: 'SP', color: '#008000', countryId: 1 },
    { id: 3, name: 'FDP.Die Liberalen', abbreviation: 'FDP', color: '#008000', countryId: 1 },
    { id: 4, name: 'Die Mitte', abbreviation: 'Mitte', color: '#008000', countryId: 1 },
    { id: 5, name: 'GRÜNE Schweiz', abbreviation: 'GPS', color: '#008000', countryId: 1 },
    { id: 6, name: 'Grünliberale Partei', abbreviation: 'GLP', color: '#008000', countryId: 1 },
    { id: 7, name: 'Evangelische Volkspartei der Schweiz', abbreviation: 'EVP', color: '#008000', countryId: 1 },
    { id: 8, name: 'Eidgenössisch-Demokratische Union', abbreviation: 'EDU', color: '#008000', countryId: 1 },
    { id: 9, name: 'Swiss People\'s Party', abbreviation: 'AL', color: '#008000', countryId: 1 },
    // ... add other Swiss parties

    // German Parties
    { id: 10, name: 'Christian Democratic Union', abbreviation: 'CDU', color: '#000000', countryId: 2 },
    // ... add other German parties

    // Austrian Parties
    { id: 20, name: 'Austrian People\'s Party', abbreviation: 'ÖVP', color: '#0000FF', countryId: 3 },
    // ... add other Austrian parties
];

export const seatDistributions: SeatDistribution[] = [
    // Seat distributions for regions
    // For Zurich, Switzerland
    { id: 1, regionId: 1, partyId: 1, seats: 50 },
    // ... add seat distributions for other parties in Zurich

    // For Bavaria, Germany
    { id: 100, regionId: 27, partyId: 10, seats: 85 },
    // ... add seat distributions for other parties in Bavaria

    // For Vienna, Austria
    { id: 200, regionId: 43, partyId: 20, seats: 50 },
    // ... add seat distributions for other parties in Vienna
];
