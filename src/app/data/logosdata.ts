// logosdata.ts

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

export const options1 = ["philosophische Strömung", "Religion", "Person"];

export const options2 = {
    "philosophische Strömung": ["Stoizismus"],
    Religion: ["Shinto", "Christentum", "Buddhismus", "Hinduismus", "Judentum", "Islam"],
    Person: ["Nietzsche", "Aristoteles", "Cioran", "Platon", "Hobbes", "Descartes", "Feuerbach", "Frege", "Wittgenstein", "Schopenhauer"],
};

export const options3 = ["das Ich", "ein personifizierter Gott"];

export const logosEntries: { [key: string]: LogosEntry } = {
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
    Shinto: {
        description:
            "Shinto ist die indigene Religion Japans, die die Verehrung von Kami beinhaltet.",
        details: {
            "das Ich": {
                description:
                    "Im Shinto existiert ein Ich in Verbindung mit Natur und Gemeinschaft, ohne feste Beständigkeit.",
                position: 1,
            },
            "ein personifizierter Gott": {
                description:
                    "Shinto verehrt viele Kami als Naturgeister, aber keinen personifizierten Gott.",
                position: 2,
            },
        },
    },
    Christentum: {
        description:
            "Das Christentum ist eine monotheistische Religion, die auf den Lehren von Jesus Christus basiert.",
        details: {
            "das Ich": {
                description:
                    "Im Christentum besitzt das Individuum eine beständige Seele in Beziehung zu Gott.",
                position: 3,
            },
            "ein personifizierter Gott": {
                description:
                    "Das Christentum glaubt an einen personifizierten Gott, der eine persönliche Beziehung zu den Gläubigen hat.",
                position: 3,
            },
        },
    },
    Buddhismus: {
        description:
            "Der Buddhismus ist eine spirituelle Tradition, die auf den Lehren Buddhas basiert.",
        details: {
            "das Ich": {
                description:
                    "Im Buddhismus gilt das Ich als Illusion, eine Ansammlung veränderlicher Elemente.",
                position: 1,
            },
            "ein personifizierter Gott": {
                description:
                    "Der Buddhismus kennt keinen personifizierten Gott, sondern fokussiert auf persönliche Erleuchtung.",
                position: 1,
            },
        },
    },
    Hinduismus: {
        description:
            "Der Hinduismus ist eine der ältesten Religionen der Welt und hat ein komplexes Glaubenssystem.",
        details: {
            "das Ich": {
                description:
                    "Im Hinduismus ist das Ich, das Atman, eine unsterbliche Seele, die Reinkarnation durchläuft.",
                position: 3,
            },
            "ein personifizierter Gott": {
                description:
                    "Der Hinduismus verehrt mehrere personifizierte Götter, die Aspekte des Göttlichen repräsentieren.",
                position: 3,
            },
        },
    },
    Judentum: {
        description:
            "Das Judentum ist die älteste abrahamitische Religion, die auf den Bund mit Gott basiert.",
        details: {
            "das Ich": {
                description:
                    "Im Judentum wird das Ich als individuelle, beständige Seele in Beziehung zu Gott verstanden.",
                position: 3,
            },
            "ein personifizierter Gott": {
                description:
                    "Das Judentum verehrt einen personifizierten Gott, der über persönliche Beziehungen zu den Menschen wacht.",
                position: 3,
            },
        },
    },
    Islam: {
        description:
            "Der Islam ist eine monotheistische Religion, die durch die Offenbarungen an den Propheten Mohammed entstand.",
        details: {
            "das Ich": {
                description:
                    "Im Islam wird das Ich als Seele verstanden, die durch Glauben und Taten eine ewige Beständigkeit erlangen kann.",
                position: 3,
            },
            "ein personifizierter Gott": {
                description:
                    "Der Islam verehrt Allah als personifizierten Gott mit persönlichen, jedoch übermenschlichen Eigenschaften.",
                position: 3,
            },
        },
    },
    Nietzsche: {
        description:
            "Friedrich Nietzsche war ein deutscher Philosoph des 19. Jahrhunderts, der den Übermenschen und den Willen zur Macht betonte.",
        details: {
            "das Ich": {
                description:
                    "Nietzsche sieht das Ich als Konstruktion und dynamische Projektion, beeinflusst durch soziale und psychologische Faktoren.",
                position: 1,
            },
            "ein personifizierter Gott": {
                description:
                    "Nietzsche erklärte 'Gott ist tot' und lehnte die Existenz eines personifizierten Gottes ab.",
                position: 1,
            },
        },
    },
    Aristoteles: {
        description:
            "Aristoteles war ein antiker griechischer Philosoph, der als Schüler Platons wesentliche Grundlagen der westlichen Philosophie prägte.",
        details: {
            "das Ich": {
                description:
                    "Für Aristoteles ist das Ich eine vernunftbegabte Seele, die beständig nach Glück und Tugend strebt.",
                position: 3,
            },
            "ein personifizierter Gott": {
                description:
                    "Aristoteles glaubte an einen 'unbewegten Beweger', der jedoch keinen personifizierten Gott darstellt.",
                position: 2,
            },
        },
    },
    Cioran: {
        description:
            "Emil Cioran war ein pessimistischer Philosoph des 20. Jahrhunderts, der das Leben als absurde Existenz sah.",
        details: {
            "das Ich": {
                description:
                    "Für Cioran ist das Ich ein quälender Zustand, der die Illusion eines stabilen Selbst erzeugt.",
                position: 1,
            },
            "ein personifizierter Gott": {
                description:
                    "Cioran lehnte die Vorstellung eines personifizierten Gottes ab und sah den Glauben als illusionär.",
                position: 1,
            },
        },
    },
    Platon: {
        description:
            "Platon war ein antiker griechischer Philosoph und Begründer der idealistischen Philosophie.",
        details: {
            "das Ich": {
                description:
                    "Für Platon ist das Ich eine unsterbliche Seele, die an den Ideen teilhat und in den Körper eingebunden ist.",
                position: 3,
            },
            "ein personifizierter Gott": {
                description:
                    "Platon sprach von einer göttlichen Ordnung, lehnte aber einen personifizierten Gott ab.",
                position: 2,
            },
        },
    },
    Hobbes: {
        description:
            "Thomas Hobbes war ein englischer Philosoph, der den Gesellschaftsvertrag und den Leviathan postulierte.",
        details: {
            "das Ich": {
                description:
                    "Hobbes sieht das Ich als egoistisches, materielles Wesen, das vom Selbsterhaltungstrieb geprägt ist.",
                position: 2,
            },
            "ein personifizierter Gott": {
                description:
                    "Hobbes betrachtete Gott als notwendiges Konzept für gesellschaftliche Ordnung, aber nicht als personifiziertes Wesen.",
                position: 2,
            },
        },
    },
    Descartes: {
        description:
            "René Descartes war ein französischer Philosoph und Mathematiker, bekannt für seinen Dualismus von Körper und Geist.",
        details: {
            "das Ich": {
                description:
                    "Descartes identifizierte das Ich als denkendes Wesen (*cogito*), das klar und beständig existiert.",
                position: 3,
            },
            "ein personifizierter Gott": {
                description:
                    "Descartes glaubte an einen vollkommenen Gott, den er als notwendig für die Existenz des Ichs ansah.",
                position: 3,
            },
        },
    },
    Feuerbach: {
        description:
            "Ludwig Feuerbach war ein deutscher Philosoph, der die Religion als Projektion menschlicher Wünsche verstand.",
        details: {
            "das Ich": {
                description:
                    "Feuerbach sah das Ich als Produkt sozialer und psychologischer Projektionen, ohne metaphysische Beständigkeit.",
                position: 1,
            },
            "ein personifizierter Gott": {
                description:
                    "Für Feuerbach ist Gott eine Projektion menschlicher Ideale, kein personifiziertes Wesen.",
                position: 1,
            },
        },
    },
    Frege: {
        description:
            "Gottlob Frege war ein deutscher Mathematiker und Philosoph, der die Grundlagen der modernen Logik legte.",
        details: {
            "das Ich": {
                description:
                    "Frege befasste sich wenig mit dem Ich, das er als bedeutungslos für objektive Logik ansah.",
                position: 1,
            },
            "ein personifizierter Gott": {
                description:
                    "Frege äußerte sich kaum zu einem personifizierten Gott und sah Logik als unabhängig von Religion.",
                position: 1,
            },
        },
    },
    Wittgenstein: {
        description:
            "Ludwig Wittgenstein war ein österreichischer Philosoph, der die Sprachphilosophie revolutionierte.",
        details: {
            "das Ich": {
                description:
                    "Wittgenstein sah das Ich als unbestimmt und durch Sprache konstruiert, ohne stabile Identität.",
                position: 1,
            },
            "ein personifizierter Gott": {
                description:
                    "Wittgenstein diskutierte Gott als sprachliches Konzept, jedoch nicht als personifiziertes Wesen.",
                position: 2,
            },
        },
    },
    Schopenhauer: {
        description:
            "Arthur Schopenhauer war ein deutscher Philosoph, der die Welt als 'Wille und Vorstellung' erklärte.",
        details: {
            "das Ich": {
                description:
                    "Schopenhauer sah das Ich als Ausdruck des universellen Willens, letztlich illusionär und leidvoll.",
                position: 1,
            },
            "ein personifizierter Gott": {
                description:
                    "Schopenhauer verneinte einen personifizierten Gott und sah das Weltgeschehen als blindem Willen unterworfen.",
                position: 1,
            },
        },
    },
};

export const judgmentOptions = ["Klare Ablehnung", "Uneindeutig", "Klare Zustimmung"];