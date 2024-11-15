// Kategorie-Anzeigenamen
export const categoryDisplayNames: { [category: string]: string } = {
    length: "Längen",
    force: "Kraft",
    weight: "Gewicht",
    time: "Zeit",
    temperature: "Temperatur",
    speed: "Geschwindigkeit",
    area: "Flächen",
    volume: "Volumen"
};

export const conversions: { [unit: string]: { factor: number, category: string, kommastellen?: number, displayName?: string } } = {
    // Längenmasseinheiten (Kategorie: length)
    meter: { factor: 1, category: 'length', kommastellen: 2, displayName: "Meter" },
    zentimeter: { factor: 100, category: 'length', kommastellen: 0, displayName: "Zentimeter" },
    millimeter: { factor: 1000, category: 'length', kommastellen: 0, displayName: "Millimeter" },
    kilometer: { factor: 0.001, category: 'length', kommastellen: 6, displayName: "Kilometer" },
    inch: { factor: 39.3701, category: 'length', kommastellen: 2, displayName: "Zoll" },
    foot: { factor: 3.28084, category: 'length', kommastellen: 2, displayName: "Fuss" },
    yard: { factor: 1.09361, category: 'length', kommastellen: 2, displayName: "Yard" },
    mile: { factor: 0.000621371, category: 'length', kommastellen: 6, displayName: "Meile" },
    nautische_meile: { factor: 0.000539957, category: 'length', kommastellen: 6, displayName: "Nautische Meile" },

    fussballfeld: { factor: 0.00952380952, category: 'length', kommastellen: 2, displayName: "Fußballfeld" },
    blauwal: { factor: 0.0357142857, category: 'length', kommastellen: 1, displayName: "Blauwal (Ø)" },
    koenigspython: { factor: 0.8333, category: 'length', kommastellen: 1, displayName: "Königspython (Ø)" },
    giraffe: { factor: 0.1905, category: 'length', kommastellen: 1, displayName: "Giraffe (Ø-Höhe)" },
    gruene_anakonda: { factor: 0.2222, category: 'length', kommastellen: 1, displayName: "Gr. Anakonda (Ø)" },
    afrikanischer_elefant: { factor: 0.2857, category: 'length', kommastellen: 1, displayName: "Afr. Elefant (Ø-Höhe)" },
    strauss: { factor: 0.4, category: 'length', kommastellen: 1, displayName: "Afr. Strauß (Ø-Höhe)" },
    leistenkrokodil: { factor: 0.2174, category: 'length', kommastellen: 1, displayName: "m. Leistenkrokodil(Ø)" },
    banane: { factor: 5.2632, category: 'length', kommastellen: 1, displayName: "Banane (Ø)" },
    cybertruck: { factor: 0.176, category: 'length', kommastellen: 1, displayName: "Tesla Cybertruck" },

    // Flächenmaßeinheiten (Kategorie: area)
    quadratmeter: { factor: 1, category: 'area', kommastellen: 2, displayName: "Quadratmeter" },
    quadratzentimeter: { factor: 10000, category: 'area', kommastellen: 0, displayName: "Quadratzentimeter" },
    quadratmillimeter: { factor: 1000000, category: 'area', kommastellen: 0, displayName: "Quadratmillimeter" },
    hektar: { factor: 0.0001, category: 'area', kommastellen: 6, displayName: "Hektar" },
    quadratkilometer: { factor: 0.000001, category: 'area', kommastellen: 6, displayName: "Quadratkilometer" },
    acre: { factor: 0.000247105, category: 'area', kommastellen: 6, displayName: "Acre" },
    fussballfeld_flaeche: { factor: 0.000142857, category: 'area', kommastellen: 6, displayName: "Fußballfeld (105x68m)" },

    // Volumenmaßeinheiten (Kategorie: volume)
    kubikmeter: { factor: 1, category: 'volume', kommastellen: 2, displayName: "Kubikmeter" },
    liter: { factor: 1000, category: 'volume', kommastellen: 0, displayName: "Liter" },
    milliliter: { factor: 1000000, category: 'volume', kommastellen: 0, displayName: "Milliliter" },
    kubikzentimeter: { factor: 1000000, category: 'volume', kommastellen: 0, displayName: "Kubikzentimeter" },
    gallon_us: { factor: 264.172, category: 'volume', kommastellen: 2, displayName: "Gallon (US)" },
    gallon_uk: { factor: 219.969, category: 'volume', kommastellen: 2, displayName: "Gallon (UK)" },
    kubikmillimeter: { factor: 1000000000, category: 'volume', kommastellen: 0, displayName: "Kubikmillimeter" },

    // Masseneinheiten (Kategorie: weight)
    kilogramm: { factor: 1, category: 'weight', kommastellen: 2, displayName: "Kilogramm" },
    gramm: { factor: 1000, category: 'weight', kommastellen: 0, displayName: "Gramm" },
    milligramm: { factor: 1000000, category: 'weight', kommastellen: 0, displayName: "Milligramm" },
    tonne: { factor: 0.001, category: 'weight', kommastellen: 4, displayName: "Tonne" },
    pound: { factor: 2.20462, category: 'weight', kommastellen: 2, displayName: "Pfund" },
    ounce: { factor: 35.274, category: 'weight', kommastellen: 2, displayName: "Unze" },

    // Zeiteinheiten (Kategorie: time)
    sekunde: { factor: 1, category: 'time', kommastellen: 2, displayName: "Sekunde" },
    minute: { factor: 1 / 60, category: 'time', kommastellen: 2, displayName: "Minute" },
    stunde: { factor: 1 / 3600, category: 'time', kommastellen: 2, displayName: "Stunde" },
    tag: { factor: 1 / 86400, category: 'time', kommastellen: 4, displayName: "Tag" },

    // Krafteinheiten (Kategorie: force)
    newton: { factor: 1, category: 'force', kommastellen: 2, displayName: "Newton" },
    kilonewton: { factor: 0.001, category: 'force', kommastellen: 4, displayName: "Kilonewton" },
    dyne: { factor: 100000, category: 'force', kommastellen: 0, displayName: "Dyne" },

    // Temperatur (Kategorie: temperature)
    celsius: { factor: 1, category: 'temperature', kommastellen: 2, displayName: "Grad Celsius" },
    fahrenheit: { factor: 1.8, category: 'temperature', kommastellen: 2, displayName: "Grad Fahrenheit" },
    kelvin: { factor: 1, category: 'temperature', kommastellen: 2, displayName: "Kelvin" },

    // Geschwindigkeitsmaßeinheiten (Kategorie: speed)
    meter_pro_sekunde: { factor: 1, category: 'speed', kommastellen: 2, displayName: "Meter pro Sekunde (m/s)" },
    kilometer_pro_stunde: { factor: 3.6, category: 'speed', kommastellen: 2, displayName: "Kilometer pro Stunde (km/h)" },
    mile_per_hour: { factor: 2.23694, category: 'speed', kommastellen: 2, displayName: "Miles per Hour (mph)" },
    knot: { factor: 1.94384, category: 'speed', kommastellen: 2, displayName: "Knoten (kn)" }
};
