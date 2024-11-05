// Define interfaces for structured data
interface LogosDetail {
    description: string;
    position: number;
}

interface LogosEntry {
    description: string;
    details: {
        [key: string]: LogosDetail;
    };
}

export const categoryOptions = ["philosophische Strömung", "Religion", "Person"];

export const subcategoryOptions = {
    "philosophische Strömung": ["Stoizismus"],
    Religion: ["Shinto", "Christentum", "Buddhismus", "Hinduismus", "Judentum", "Islam"],
    Person: ["Nietzsche", "Aristoteles", "Cioran", "Platon", "Hobbes", "Descartes", "Feuerbach", "Frege", "Wittgenstein", "Schopenhauer"],
};

export const themeOptions = ["das Ich", "ein personifizierter Gott"];

export const logosEntries: { [key: string]: LogosEntry } = {
    // (Einträge wie zuvor)
    Stoizismus: {
        description:
            "Der Stoizismus ist eine antike Philosophie, die Gelassenheit und Selbstbeherrschung lehrt.",
        details: {
            "das Ich": {
                description:
                    "Im Stoizismus ist das Ich Teil eines kosmischen Ganzen und durch die Vernunft beständig, aber veränderlich.",
                position: 3,
            },
            "ein personifizierter Gott": {
                description:
                    "Der Stoizismus glaubt an eine universelle Vernunft, aber nicht an einen personifizierten Gott.",
                position: 2,
            },
        },
    },
    // Weitere Einträge...
};

export const judgmentOptions = ["Klare Ablehnung", "Uneindeutig", "Klare Zustimmung"];
