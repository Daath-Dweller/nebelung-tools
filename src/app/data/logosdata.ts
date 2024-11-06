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

export const categoryOptions = ["Person", "Religion", "philosophische Strömung"];

export const subcategoryOptions = {
    "philosophische Strömung": [
        "Existentialismus",
        "Rationalismus",
        "Realismus",
        "Idealismus",
        "Empirismus",
        "Stoizismus",
        "Nihilismus",
        "Pragmatismus",
        "Utilitarismus",
        "Zynismus",
        "Hedonismus",
        "Strukturalismus",
        "Relativismus",
        "Antinatalismus",
        "Deontologismus",
        "Konsequentialismus",
        "Poststrukturalismus",
        "Absurdismus",
        "Transzendentalismus"
    ],
    Religion: {
        "Abrahamitische Religionen": [
            "Judentum",
            "Christentum",
            "Islam"
        ],
        "Dharmische Religionen": [
            "Hinduismus",
            "Buddhismus",
            "Sikhismus",
            "Zen-Buddhismus"
        ],
        "Chinesische Religionen und Philosophien": [
            "Taoismus",
            "Konfuzianismus"
        ],
        "Japanische Religionen": [
            "Shinto",
            "Zen-Buddhismus"
        ],
        "Dualistische und esoterische Religionen": [
            "Gnostizismus",
            "Zoroastrismus"
        ],
        "Natur- und indigene Religionen": [
            "Asatru",
            "Voodoo"
        ],
        "Moderne Religionen und spirituelle Bewegungen": [
            "Scientology",
            "Pantheismus"
        ]
    },
    Person: {
        "Philosophen der Antike": [
            "Aristoteles",
            "Platon",
            "Sokrates",
            "Epikur",
            "Diogenes",
            "Heraklit",
            "Demokrit",
            "Anaximander",
            "Plotin",
            "Konfuzius",
            "Laotse",
            "Aurel, Mark"
        ],
        "Philosophen des Mittelalters": [
            "Thomas von Aquin",
            "Augustinus",
            "Averroes",
            "von Canterbury, Anselm",
            "Ockham, William"
        ],
        "Philosophen der Renaissance": [
            "Machiavelli, Niccolo",
            "Bacon, Francis",
            "de Montaigne, Michel"
        ],
        "Philosophen des 17. Jahrhunderts": [
            "Descartes, René",
            "Hobbes, Thomas",
            "Spinoza, Baruch",
            "Locke, John",
            "Leibniz, Gottfried Wilhelm",
            "Berkeley, George"
        ],
        "Philosophen des 18. Jahrhunderts": [
            "Kant, Immanuel",
            "Hume, David",
            "Comte, Auguste"
        ],
        "Philosophen des 19. Jahrhunderts": [
            "Nietzsche, Friedrich",
            "Kierkegaard, Søren",
            "Feuerbach, Ludwig",
            "Mill, John Stuart",
            "Marx, Karl",
            "Schopenhauer, Arthur",
            "Fichte, Johann Gottlieb"
        ],
        "Philosophen des 20. Jahrhunderts": [
            "Wittgenstein, Ludwig",
            "Sartre, Jean-Paul",
            "Camus, Albert",
            "Foucault, Michel",
            "Heidegger, Martin",
            "Derrida, Jacques",
            "Russell, Bertrand",
            "Zizek, Slavoj",
            "Arendt, Hannah",
            "Popper, Karl",
            "Habermas, Jürgen",
            "Frege, Gottlob",
            "Rawls, John",
            "Chomsky, Noam",
            "Baudrillard, Jean",
            "de Beauvoir, Simone"
        ]
    }
};


export const themeOptions = ["Existenz eines Ichs bzw. beständigen Selbst", "Existenz eines (personifizierten) Gottes", "Existenz einer Seele (Geist-Körper-Dualismus)",
    "Existenz von objektiver Moral", "Existenz eines freien Willens", "Existenz eines Lebenssinns"];

export const logosEntries: { [key: string]: LogosEntry } = {
    Sokrates: {
        description: "Sokrates war ein antiker griechischer Philosoph, bekannt für seine dialektische Methode und die Betonung ethischer Reflexion.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Für Sokrates ist das Ich eine suchende Vernunft, die durch Selbsterkenntnis moralische Wahrheit findet.",
                position: 2,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Sokrates akzeptierte göttliche Eingebungen, jedoch ohne klaren personifizierten Gott.",
                position: 2,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Sokrates befürwortete einen Dualismus, glaubte an die Unsterblichkeit der Seele und trennte diese vom Körper.",
                position: 3,
            },
            "Existenz von objektiver Moral": {
                description: "Sokrates argumentierte für eine objektive Moral, die durch Vernunft erkennbar sei.",
                position: 3,
            },
            "Existenz eines freien Willens": {
                description: "Sokrates ging davon aus, dass der Mensch freien Willen hat, um zwischen Gut und Böse zu wählen.",
                position: 3,
            },
            "Existenz eines Lebenssinns": {
                description: "Sokrates sah das Streben nach Weisheit und ethischer Reflexion als zentralen Lebenssinn.",
                position: 2,
            },


        },
    },

    "Locke, John": {
        description: "John Locke war ein englischer Philosoph, bekannt für seine Theorien des Liberalismus und des empirischen Wissens.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Locke sieht das Ich als Tabula Rasa, das durch Erfahrung geformt wird.",
                position: 3,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Locke glaubte an einen personifizierten Schöpfergott als Grundlage der Moral.",
                position: 3,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Locke vertrat die Idee einer immateriellen Seele, die jedoch mit dem Körper interagiert.",
                position: 2,
            },
            "Existenz von objektiver Moral": {
                description: "Für Locke ist Moral objektiv und basiert auf natürlichen Gesetzen, die durch Vernunft entdeckt werden können.",
                position: 3,
            },
            "Existenz eines freien Willens": {
                description: "Locke glaubte an den freien Willen und die persönliche Verantwortung des Individuums.",
                position: 3,
            },
            "Existenz eines Lebenssinns": {
                description: "Für Locke besteht der Lebenssinn im Streben nach persönlichem Glück und moralischer Verantwortung.",
                position: 3,
            },

        },
    },

    "Spinoza, Baruch": {
        description: "Baruch Spinoza war ein rationalistischer Philosoph, der Gott als Natur und universelle Substanz auffasste.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Für Spinoza ist das Ich ein Teil der Substanz Gottes, das sich selbst als illusorisch getrennt erfährt.",
                position: 2,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Spinoza lehnte einen personifizierten Gott ab und verstand Gott als Natur.",
                position: 1,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Spinoza lehnte den Dualismus ab und betrachtete Geist und Körper als zwei Seiten derselben Substanz.",
                position: 1,
            },
            "Existenz von objektiver Moral": {
                description: "Spinoza argumentierte, dass Moralität Ausdruck der Vernunft ist und objektive Prinzipien hat.",
                position: 3,
            },
            "Existenz eines freien Willens": {
                description: "Spinoza glaubte nicht an freien Willen; alle Handlungen sind durch die Naturgesetze determiniert.",
                position: 1,
            },
            "Existenz eines Lebenssinns": {
                description: "Spinoza sah den Sinn des Lebens in der Erkenntnis der Natur Gottes und der eigenen Existenz.",
                position: 2,
            },

        },
    },

    "Kant, Immanuel": {
        description: "Immanuel Kant war ein deutscher Philosoph, der den Kategorischen Imperativ und den transzendentalen Idealismus entwickelte.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Kant sieht das Ich als erkenntnistheoretisches Subjekt, das durch Vernunft moralische Gesetze setzt.",
                position: 3,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Kant postulierte einen Gott als moralische Idee, ohne klare Personifizierung.",
                position: 2,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Kant glaubte an eine unsterbliche Seele, die das moralische Subjekt bildet.",
                position: 3,
            },
            "Existenz von objektiver Moral": {
                description: "Kant entwickelte die Theorie des objektiven moralischen Gesetzes durch den Kategorischen Imperativ.",
                position: 3,
            },
            "Existenz eines freien Willens": {
                description: "Kant vertrat den freien Willen als Bedingung moralischer Verantwortung.",
                position: 3,
            },
            "Existenz eines Lebenssinns": {
                description: "Für Kant liegt der Lebenssinn in der moralischen Pflichterfüllung und dem Streben nach dem höchsten Gut.",
                position: 3,
            },

        },
    },

    "Sartre, Jean-Paul": {
        description: "Jean-Paul Sartre war ein französischer Existentialist, der Freiheit und Verantwortung des Individuums betonte.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Für Sartre ist das Ich zur Freiheit verurteilt und muss sich selbst definieren.",
                position: 1,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Sartre lehnte einen personifizierten Gott ab und sah das Leben als absurde Freiheit.",
                position: 1,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Sartre lehnte den Dualismus ab und betrachtete das Bewusstsein als Ergebnis des Daseins.",
                position: 1,
            },
            "Existenz von objektiver Moral": {
                description: "Sartre verneinte objektive Moral; Moralität ist ein Produkt individueller Wahl und Verantwortung.",
                position: 1,
            },
            "Existenz eines freien Willens": {
                description: "Sartre betonte den freien Willen als fundamentale menschliche Freiheit.",
                position: 3,
            },
            "Existenz eines Lebenssinns": {
                description: "Sartre betrachtete den Lebenssinn als individuelle Wahl und Verantwortung zur Selbstbestimmung.",
                position: 1,
            },

        },
    },

    "Camus, Albert": {
        description: "Albert Camus war ein französischer Philosoph des Absurdismus, der die Sinnlosigkeit des Lebens betonte.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Camus sieht das Ich als Individuum, das im Angesicht des Absurden handeln muss.",
                position: 1,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Camus lehnte die Existenz eines personifizierten Gottes als Trostillusion ab.",
                position: 1,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Camus lehnte den Geist-Körper-Dualismus ab und betrachtete das Leben rein physisch.",
                position: 1,
            },
            "Existenz von objektiver Moral": {
                description: "Camus verwarf objektive Moral und betonte die Freiheit des Individuums im moralischen Handeln.",
                position: 1,
            },
            "Existenz eines freien Willens": {
                description: "Camus nahm den freien Willen als zentralen Bestandteil der menschlichen Existenz an.",
                position: 3,
            },
            "Existenz eines Lebenssinns": {
                description: "Camus sah den Lebenssinn in der Rebellion gegen die Absurdität und der Schaffung eigener Werte.",
                position: 1,
            },

        },
    },

    "Marx, Karl": {
        description: "Karl Marx war ein deutscher Philosoph und Ökonom, der den dialektischen Materialismus und den Kommunismus entwickelte.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Marx sieht das Ich als soziales Wesen, das durch Klassenverhältnisse geprägt ist.",
                position: 2,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Marx lehnte Religion und einen personifizierten Gott als 'Opium des Volkes' ab.",
                position: 1,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Marx lehnte den Dualismus ab und sah den Menschen als materielles Wesen.",
                position: 1,
            },
            "Existenz von objektiver Moral": {
                description: "Für Marx ist Moral ein Produkt der Klassenverhältnisse und daher nicht objektiv.",
                position: 1,
            },
            "Existenz eines freien Willens": {
                description: "Marx sah den freien Willen als eingeschränkt durch materielle und soziale Bedingungen.",
                position: 2,
            },
            "Existenz eines Lebenssinns": {
                description: "Marx sah den Sinn des Lebens in der Überwindung von Klassenverhältnissen und der Schaffung einer gerechten Gesellschaft.",
                position: 2,
            },

        },
    },

    "Foucault, Michel": {
        description: "Michel Foucault war ein französischer Philosoph, bekannt für seine Studien zu Macht und Diskursen.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Foucault sieht das Ich als Konstruktion, die von Machtstrukturen und Diskursen beeinflusst ist.",
                position: 2,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Foucault äußerte sich kaum zu einem personifizierten Gott und analysierte Religion als Machtinstrument.",
                position: 1,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Foucault betrachtete das Selbst als gesellschaftlich geformt und ohne metaphysische Seele.",
                position: 1,
            },
            "Existenz von objektiver Moral": {
                description: "Foucault verneinte objektive Moral und sah ethische Normen als gesellschaftliche Konstrukte.",
                position: 1,
            },
            "Existenz eines freien Willens": {
                description: "Foucault betrachtete den freien Willen kritisch, als durch Machtstrukturen begrenzt.",
                position: 2,
            },
            "Existenz eines Lebenssinns": {
                description: "Foucault stellte die Frage nach einem objektiven Lebenssinn zurück und analysierte die Machtverhältnisse, die Sinn konstruieren.",
                position: 1,
            },

        },
    },

    "Heidegger, Martin": {
        description: "Martin Heidegger war ein deutscher Philosoph, der das Konzept des Seins und der Existenz untersuchte.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Für Heidegger ist das Ich ein Dasein, das im Sein verankert ist und zum Tode hin lebt.",
                position: 2,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Heidegger lehnte einen personifizierten Gott ab und konzentrierte sich auf das Sein.",
                position: 1,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Heidegger lehnte den Dualismus ab und betrachtete das Selbst als Einheit im Dasein.",
                position: 2,
            },
            "Existenz von objektiver Moral": {
                description: "Heidegger stellte die Frage der objektiven Moral zurück und fokussierte auf die Authentizität des Daseins.",
                position: 2,
            },
            "Existenz eines freien Willens": {
                description: "Heidegger sah das Dasein als von Möglichkeiten bestimmt, ohne klaren Fokus auf freien Willen.",
                position: 2,
            },
            "Existenz eines Lebenssinns": {
                description: "Heidegger sah den Lebenssinn im authentischen Sein-zum-Tode, das die Existenz in ihrer Endlichkeit erfasst.",
                position: 2,
            },

        },
    },
    Epikur: {
        description: "Epikur war ein antiker griechischer Philosoph, der die Bedeutung von Glück und dem Vermeiden von Schmerz betonte.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Epikur sieht das Ich als empfindendes Wesen, das nach Lust und Schmerzvermeidung strebt.",
                position: 3,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Epikur glaubte an Götter, die jedoch nicht in das menschliche Leben eingreifen.",
                position: 2,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Epikur sah das Selbst als materiell und sterblich, ohne unsterbliche Seele.",
                position: 1,
            },
            "Existenz von objektiver Moral": {
                description: "Für Epikur existiert keine objektive Moral; moralisches Handeln dient der Schmerzvermeidung.",
                position: 1,
            },
            "Existenz eines freien Willens": {
                description: "Epikur glaubte an den freien Willen und betonte die individuelle Verantwortung im Streben nach Glück.",
                position: 3,
            },
            "Existenz eines Lebenssinns": {
                description: "Für Epikur liegt der Lebenssinn im Streben nach Lust und der Vermeidung von Schmerz.",
                position: 3,
            },

        },
    },
    "Thomas von Aquin": {
        description: "Thomas von Aquin war ein mittelalterlicher Theologe und Philosoph, der den christlichen Glauben mit der Vernunft verband.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Thomas sieht das Ich als Seele, die in Beziehung zu Gott steht und durch Tugend vervollkommnet wird.",
                position: 3,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Thomas von Aquin beschreibt Gott als personifiziertes Wesen, das das Universum und die Moral lenkt.",
                position: 3,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Thomas bejahte einen Dualismus, wobei die unsterbliche Seele den Körper überlebt.",
                position: 3,
            },
            "Existenz von objektiver Moral": {
                description: "Thomas lehrte eine objektive Moral, die auf göttlichem Gesetz basiert.",
                position: 3,
            },
            "Existenz eines freien Willens": {
                description: "Thomas vertrat den freien Willen als notwendig für moralisches Handeln und göttliche Belohnung.",
                position: 3,
            },
            "Existenz eines Lebenssinns": {
                description: "Thomas von Aquin sah den Lebenssinn in der Erkenntnis und Vereinigung mit Gott.",
                position: 3,
            },

        },
    },
    Diogenes: {
        description: "Diogenes war ein antiker griechischer Philosoph und Zyniker, bekannt für seine radikale Ablehnung gesellschaftlicher Konventionen.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Diogenes sieht das Ich als naturverbunden und unabhängig von sozialem Einfluss.",
                position: 1,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Diogenes lehnte die Vorstellung eines personifizierten Gottes ab und betonte die Einfachheit der Natur.",
                position: 1,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Diogenes sah das Selbst als Einheit ohne metaphysische Seele.",
                position: 1,
            },
            "Existenz von objektiver Moral": {
                description: "Diogenes verwarf objektive Moral und folgte der Natur als moralischem Maßstab.",
                position: 1,
            },
            "Existenz eines freien Willens": {
                description: "Diogenes befürwortete den freien Willen im Sinne einer Autonomie gegenüber gesellschaftlichen Zwängen.",
                position: 3,
            },
            "Existenz eines Lebenssinns": {
                description: "Diogenes verwarf einen objektiven Lebenssinn und lebte nach der natürlichen Einfachheit.",
                position: 1,
            },

        },
    },
    Konfuzius: {
        description: "Konfuzius war ein chinesischer Philosoph, der ethische und soziale Prinzipien für ein harmonisches Leben betonte.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Für Konfuzius ist das Ich ein Teil eines größeren sozialen Gefüges, das durch moralische Tugenden gedeiht.",
                position: 2,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Konfuzius spricht von einem 'Himmel', jedoch ohne personifizierten Gott.",
                position: 1,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Konfuzius äußerte sich kaum zum Dualismus, betonte jedoch die Rolle des Himmels in der menschlichen Existenz.",
                position: 2,
            },
            "Existenz von objektiver Moral": {
                description: "Konfuzius befürwortete eine objektive Moral, basierend auf sozialen und familiären Pflichten.",
                position: 3,
            },
            "Existenz eines freien Willens": {
                description: "Konfuzius betrachtete den freien Willen als begrenzt durch soziale und familiäre Pflichten.",
                position: 2,
            },
            "Existenz eines Lebenssinns": {
                description: "Konfuzius sah den Lebenssinn in der Erfüllung sozialer und familiärer Pflichten.",
                position: 3,
            },

        },
    },
    Laotse: {
        description: "Laotse war ein legendärer chinesischer Philosoph und Begründer des Taoismus.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Für Laotse ist das Ich ein Teil des Dao und sollte sich an die natürliche Ordnung anpassen.",
                position: 2,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Laotse spricht vom Dao, einer unpersönlichen Kraft, jedoch nicht von einem personifizierten Gott.",
                position: 1,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Laotse lehnte eine strikte Trennung zwischen Geist und Körper ab und betonte die Einheit des Dao.",
                position: 1,
            },
            "Existenz von objektiver Moral": {
                description: "Für Laotse gibt es keine objektive Moral; moralisches Handeln folgt dem natürlichen Fluss des Dao.",
                position: 1,
            },
            "Existenz eines freien Willens": {
                description: "Laotse empfahl Anpassung an das Dao, stellte jedoch die Existenz eines freien Willens nicht direkt infrage.",
                position: 2,
            },
            "Existenz eines Lebenssinns": {
                description: "Laotse betrachtete den Lebenssinn als Harmonie mit dem Dao, dem natürlichen Weg des Universums.",
                position: 2,
            },

        },
    },
    "Derrida, Jacques": {
        description: "Jacques Derrida war ein französischer Philosoph und Begründer der Dekonstruktion.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Derrida sieht das Ich als durch Sprache und Bedeutungsverschiebung geformt.",
                position: 2,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Derrida hinterfragte die Stabilität des Gottesbegriffs und lehnte eine feste Personifizierung ab.",
                position: 1,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Derrida lehnte die traditionelle Vorstellung von Geist und Körper als getrennt ab.",
                position: 1,
            },
            "Existenz von objektiver Moral": {
                description: "Derrida bezweifelte die Existenz objektiver Moral und betrachtete Moral als diskursabhängig.",
                position: 1,
            },
            "Existenz eines freien Willens": {
                description: "Derrida hinterfragte den freien Willen, sah jedoch die Wahl als zentral im Umgang mit Bedeutung.",
                position: 2,
            },
            "Existenz eines Lebenssinns": {
                description: "Derrida hinterfragte feste Konzepte wie einen objektiven Lebenssinn und betrachtete Bedeutung als fluide.",
                position: 2,
            },

        },
    },


    "Bacon, Francis": {
        description: "Francis Bacon war ein englischer Philosoph und Begründer des Empirismus.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Bacon sieht das Ich als erkenntnissuchendes Wesen, das durch Erfahrung die Natur erforscht.",
                position: 3,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Bacon sah einen Schöpfer als Ursprung der Naturgesetze, jedoch ohne klare Personifizierung.",
                position: 2,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Bacon äußerte sich kaum zum Dualismus und betrachtete das Selbst primär empirisch.",
                position: 2,
            },
            "Existenz von objektiver Moral": {
                description: "Bacon sah Moral als naturgegeben, aber ohne metaphysische Objektivität.",
                position: 2,
            },
            "Existenz eines freien Willens": {
                description: "Bacon ließ die Frage des freien Willens offen, betonte jedoch die Rolle der Vernunft im Handeln.",
                position: 2,
            },
            "Existenz eines Lebenssinns": {
                description: "Bacon sah den Lebenssinn im Streben nach Wissen und Beherrschung der Natur durch empirische Methoden.",
                position: 3,
            },

        },
    },
    Asatru: {
        description: "Asatru ist eine Form des Neopaganismus, die auf die germanische Mythologie zurückgreift und die Verehrung nordischer Götter betont.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Im Asatru ist das Ich mit den Ahnen und der Natur verbunden und agiert im Einklang mit den Göttern.",
                position: 2,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Asatru verehrt viele personifizierte Götter wie Odin und Thor als reale Wesenheiten.",
                position: 3,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Im Asatru wird das Selbst als Seele betrachtet, die in das spirituelle Netzwerk eingebunden ist.",
                position: 3,
            },
            "Existenz von objektiver Moral": {
                description: "Asatru sieht Moral als von den Göttern inspiriert und objektiv durch Tradition verankert.",
                position: 2,
            },
            "Existenz eines freien Willens": {
                description: "Freier Wille wird akzeptiert, wobei die Götter und das Schicksal den Rahmen beeinflussen.",
                position: 2,
            },    "Existenz eines Lebenssinns": {
                description: "Asatru sieht den Lebenssinn in der Ehrung der Ahnen, Natur und der nordischen Götter.",
                position: 2,
            },


        },
    },
    Sikhismus: {
        description: "Der Sikhismus ist eine monotheistische Religion, die in Indien gegründet wurde und Gleichheit und soziale Gerechtigkeit betont.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Im Sikhismus wird das Ich als spirituelle Seele gesehen, die mit dem Schöpfer verbunden ist.",
                position: 3,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Der Sikhismus verehrt einen einzigen, nicht personifizierten Gott, der als formlos und allgegenwärtig gilt.",
                position: 3,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Der Sikhismus betrachtet die Seele als ewig, getrennt vom physischen Körper.",
                position: 3,
            },
            "Existenz von objektiver Moral": {
                description: "Die Moral im Sikhismus ist objektiv und basiert auf den Lehren des Gurus.",
                position: 3,
            },
            "Existenz eines freien Willens": {
                description: "Der freie Wille ist vorhanden, jedoch eingebettet in das göttliche Gesetz.",
                position: 3,
            },
            "Existenz eines Lebenssinns": {
                description: "Im Sikhismus liegt der Lebenssinn in der Vereinigung mit Gott und dem Dienst an der Menschheit.",
                position: 3,
            },


        },
    },
    Taoismus: {
        description: "Der Taoismus ist eine chinesische Religion und Philosophie, die im Einklang mit dem Dao, dem Weg des Universums, lebt.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Im Taoismus wird das Ich als unbeständiger Teil des größeren Kosmos betrachtet, in Harmonie mit dem Dao.",
                position: 2,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Der Taoismus verehrt keine personifizierten Götter, sondern das Dao als unpersönliche Kraft.",
                position: 1,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Der Taoismus sieht keine scharfe Trennung zwischen Körper und Geist, sondern eine natürliche Einheit.",
                position: 1,
            },
            "Existenz von objektiver Moral": {
                description: "Moral ist im Taoismus flexibel und richtet sich nach dem natürlichen Fluss des Dao.",
                position: 1,
            },
            "Existenz eines freien Willens": {
                description: "Freier Wille wird als untergeordnet zum Dao gesehen; harmonisches Handeln ist entscheidend.",
                position: 2,
            },
            "Existenz eines Lebenssinns": {
                description: "Im Taoismus wird der Lebenssinn in der natürlichen Harmonie und dem Fluss des Dao gesehen.",
                position: 2,
            },


        },
    },
    Konfuzianismus: {
        description: "Der Konfuzianismus ist eine chinesische Philosophie, die Ethik und soziale Moral betont.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Im Konfuzianismus ist das Ich stark von familiären und sozialen Bindungen geprägt.",
                position: 2,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Der Konfuzianismus beinhaltet keinen personifizierten Gott, sondern ein Konzept von moralischem Himmel und Tugend.",
                position: 1,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Konfuzianismus äußert sich kaum zur Seele, betont aber den Einfluss des Himmels auf das Selbst.",
                position: 2,
            },
            "Existenz von objektiver Moral": {
                description: "Die Moral im Konfuzianismus ist objektiv und orientiert sich an sozialer Harmonie und Tugend.",
                position: 3,
            },
            "Existenz eines freien Willens": {
                description: "Freier Wille wird als eingeschränkt gesehen, da das Individuum durch soziale Normen gebunden ist.",
                position: 2,
            },
            "Existenz eines Lebenssinns": {
                description: "Im Konfuzianismus liegt der Lebenssinn in der Erfüllung ethischer Pflichten und sozialer Harmonie.",
                position: 3,
            },


        },
    },
    Gnostizismus: {
        description: "Der Gnostizismus ist eine religiöse Bewegung, die Erlösung durch geheimes Wissen anstrebt.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Im Gnostizismus ist das Ich ein göttlicher Funken, der von der materiellen Welt befreit werden muss.",
                position: 2,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Der Gnostizismus verehrt einen verborgenen, personifizierten Gott, getrennt von dem Schöpfer der materiellen Welt.",
                position: 2,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Gnostizismus sieht die Seele als göttliches Element, das vom Körper getrennt werden muss.",
                position: 3,
            },
            "Existenz von objektiver Moral": {
                description: "Moral wird durch göttliches Wissen als objektiv betrachtet, oft im Gegensatz zur physischen Welt.",
                position: 3,
            },
            "Existenz eines freien Willens": {
                description: "Freier Wille ist notwendig, um die materielle Welt abzulehnen und nach Erkenntnis zu streben.",
                position: 3,
            },
            "Existenz eines Lebenssinns": {
                description: "Gnostizismus sieht den Lebenssinn in der Befreiung des göttlichen Funkens aus der materiellen Welt.",
                position: 2,
            },


        },
    },
    Zoroastrismus: {
        description: "Der Zoroastrismus ist eine der ältesten monotheistischen Religionen und betont den Kampf zwischen Gut und Böse.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Im Zoroastrismus ist das Ich Teil des kosmischen Kampfes und strebt nach Reinheit und Wahrheit.",
                position: 3,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Der Zoroastrismus verehrt Ahura Mazda als personifizierten Gott und Vertreter des Guten.",
                position: 3,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Die Seele ist im Zoroastrismus ewig und trennt sich vom Körper nach dem Tod.",
                position: 3,
            },
            "Existenz von objektiver Moral": {
                description: "Moral ist objektiv und besteht im Kampf zwischen Gut und Böse.",
                position: 3,
            },
            "Existenz eines freien Willens": {
                description: "Der Mensch hat freien Willen, um zwischen Gut und Böse zu wählen.",
                position: 3,
            },
            "Existenz eines Lebenssinns": {
                description: "Im Zoroastrismus besteht der Lebenssinn im Kampf für das Gute gegen das Böse.",
                position: 3,
            },


        },
    },
    Voodoo: {
        description: "Voodoo ist eine synkretistische Religion afrikanischer Herkunft, die Geister und Ahnen verehrt.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Im Voodoo wird das Ich als Teil eines Netzwerks von Ahnen und spirituellen Kräften betrachtet.",
                position: 2,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Voodoo verehrt viele personifizierte Geister und Gottheiten, darunter auch Ahnengeister.",
                position: 3,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Das Selbst ist im Voodoo mit einer Seele ausgestattet, die nach dem Tod weiter existiert.",
                position: 3,
            },
            "Existenz von objektiver Moral": {
                description: "Moralische Werte sind im Voodoo traditionsbasiert und durch Rituale gefestigt.",
                position: 2,
            },
            "Existenz eines freien Willens": {
                description: "Freier Wille wird anerkannt, jedoch stark durch Ahnen- und Geisterwelt beeinflusst.",
                position: 2,
            },
            "Existenz eines Lebenssinns": {
                description: "Im Voodoo wird der Lebenssinn in der Harmonie mit Ahnen und spirituellen Kräften gesucht.",
                position: 2,
            },


        },
    },
    Relativismus: {
        description: "Relativismus ist die Ansicht, dass Wahrheit und Moral von individuellen oder kulturellen Kontexten abhängen.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Im Relativismus ist das Ich ein Produkt seiner kulturellen und individuellen Perspektiven.",
                position: 2,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Relativismus sieht die Vorstellung eines personifizierten Gottes als kulturell bedingt und nicht absolut an.",
                position: 2,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Relativismus betrachtet die Seele als kontextabhängiges Konzept, nicht als objektiv existierend.",
                position: 1,
            },
            "Existenz von objektiver Moral": {
                description: "Relativismus lehnt objektive Moral ab und sieht ethische Werte als kontextabhängig.",
                position: 1,
            },
            "Existenz eines freien Willens": {
                description: "Freier Wille wird oft als illusionär betrachtet, da er von kulturellen Normen geprägt ist.",
                position: 2,
            },
            "Existenz eines Lebenssinns": {
                description: "Relativismus verneint einen objektiven Lebenssinn und betrachtet ihn als kulturell und individuell bedingt.",
                position: 1,
            },


        },
    },

    Konsequentialismus: {
        description: "Konsequentialismus ist eine ethische Theorie, die Handlungen nach ihren Konsequenzen bewertet.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Im Konsequentialismus ist das Ich verantwortlich für die Ergebnisse seiner Handlungen.",
                position: 3,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Ein personifizierter Gott spielt im Konsequentialismus oft keine zentrale Rolle, da moralisches Handeln an den Ergebnissen gemessen wird.",
                position: 2,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Konsequentialismus äußert sich wenig zu Seele oder Dualismus, da Fokus auf Handlungsfolgen liegt.",
                position: 2,
            },
            "Existenz von objektiver Moral": {
                description: "Moral ist objektiv und basiert auf der Maximierung des allgemeinen Wohls.",
                position: 3,
            },
            "Existenz eines freien Willens": {
                description: "Freier Wille ist notwendig, um die Verantwortung für die Konsequenzen der Handlungen zu übernehmen.",
                position: 3,
            },
            "Existenz eines Lebenssinns": {
                description: "Im Konsequentialismus liegt der Lebenssinn in der Maximierung des Wohls durch die Konsequenzen der Handlungen.",
                position: 3,
            },


        },
    },
    Deontologismus: {
        description: "Deontologismus ist eine ethische Theorie, die Handlungen nach festen moralischen Prinzipien bewertet, unabhängig von den Konsequenzen.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Im Deontologismus ist das Ich verpflichtet, moralische Regeln zu befolgen, ungeachtet der Konsequenzen.",
                position: 3,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Ein personifizierter Gott kann im Deontologismus eine Rolle spielen, wenn er als Quelle moralischer Prinzipien gilt.",
                position: 3,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Deontologismus äußert sich selten zu Geist-Körper-Dualismus, aber setzt ein moralisches Selbst voraus.",
                position: 2,
            },
            "Existenz von objektiver Moral": {
                description: "Moralische Prinzipien gelten als objektiv und universell gültig.",
                position: 3,
            },
            "Existenz eines freien Willens": {
                description: "Freier Wille ist notwendig, um moralische Verpflichtungen freiwillig zu erfüllen.",
                position: 3,
            },
            "Existenz eines Lebenssinns": {
                description: "Im Deontologismus wird der Lebenssinn in der Erfüllung moralischer Pflichten gesehen.",
                position: 3,
            },


        },
    },
    Zynismus: {
        description: "Der Zynismus ist eine Philosophie, die gesellschaftliche Normen und Werte radikal hinterfragt und oft verachtet.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Im Zynismus wird das Ich als egoistisch und von natürlichen Trieben getrieben betrachtet.",
                position: 2,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Zynismus lehnt die Existenz eines personifizierten Gottes ab und betrachtet Religion oft als Mittel der Täuschung.",
                position: 1,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Der Zynismus äußert sich selten zum Dualismus, verachtet jedoch metaphysische Spekulationen.",
                position: 1,
            },
            "Existenz von objektiver Moral": {
                description: "Objektive Moral wird als gesellschaftliches Konstrukt verworfen.",
                position: 1,
            },
            "Existenz eines freien Willens": {
                description: "Freier Wille wird als notwendig erachtet, um soziale Konventionen zu hinterfragen und abzulehnen.",
                position: 3,
            },
            "Existenz eines Lebenssinns": {
                description: "Zynismus verneint einen objektiven Lebenssinn und propagiert ein Leben im Einklang mit der Natur.",
                position: 1,
            },

        },
    },
    Antinatalismus: {
        description: "Antinatalismus ist die Ansicht, dass es moralisch falsch ist, Leben zu erzeugen, aufgrund des inhärenten Leidens der Existenz.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Im Antinatalismus ist das Ich eine Last, die durch Geburt aufoktroyiert wird.",
                position: 1,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Antinatalismus lehnt die Vorstellung eines wohlwollenden Schöpfers angesichts des Leides ab.",
                position: 1,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Antinatalismus äußert sich selten zum Dualismus, da Fokus auf Leid und Existenz liegt.",
                position: 1,
            },
            "Existenz von objektiver Moral": {
                description: "Moral ist objektiv und basiert auf der Reduzierung von Leid.",
                position: 2,
            },
            "Existenz eines freien Willens": {
                description: "Freier Wille wird als begrenzt betrachtet, da Leid und Existenz untrennbar sind.",
                position: 2,
            },
            "Existenz eines Lebenssinns": {
                description: "Antinatalismus verneint einen positiven Lebenssinn und betrachtet das Leben als inhärent leidvoll.",
                position: 1,
            },


        },
    },
    Idealismus: {
        description: "Idealismus ist eine Philosophie, die betont, dass Realität primär durch den Geist konstruiert ist.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Im Idealismus ist das Ich eine zentrale Wahrnehmungseinheit, die die Welt interpretiert.",
                position: 3,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Idealismus sieht das Göttliche als durch den Geist geprägt, oft ohne klare Personifizierung.",
                position: 2,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Idealismus bejaht oft den Dualismus, wobei Geist die primäre Realität darstellt.",
                position: 3,
            },
            "Existenz von objektiver Moral": {
                description: "Moral wird oft als objektiv und durch geistige Prinzipien bedingt betrachtet.",
                position: 3,
            },
            "Existenz eines freien Willens": {
                description: "Freier Wille ist ein integraler Bestandteil des Geistes, der Realität konstruiert.",
                position: 3,
            },
            "Existenz eines Lebenssinns": {
                description: "Idealismus sieht den Lebenssinn in der Verwirklichung geistiger Ideen und moralischer Prinzipien.",
                position: 3,
            },


        },
    },
    Realismus: {
        description: "Realismus ist die Philosophie, die davon ausgeht, dass die Welt unabhängig vom menschlichen Bewusstsein existiert.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Im Realismus ist das Ich ein Bewusstsein, das die objektive Realität erfährt.",
                position: 3,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Realismus schließt einen personifizierten Gott oft nicht aus, konzentriert sich jedoch auf beobachtbare Realität.",
                position: 2,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Realismus ist offen für den Dualismus, sieht jedoch oft den Körper als primär.",
                position: 2,
            },
            "Existenz von objektiver Moral": {
                description: "Moral wird im Realismus als unabhängig von individueller Wahrnehmung betrachtet.",
                position: 3,
            },
            "Existenz eines freien Willens": {
                description: "Der freie Wille wird als Teil der menschlichen Interaktion mit der objektiven Realität gesehen.",
                position: 3,
            },
            "Existenz eines Lebenssinns": {
                description: "Im Realismus wird der Lebenssinn oft in der objektiven Realität und im pragmatischen Handeln gesucht.",
                position: 2,
            },


        },
    },
    Empirismus: {
        description: "Empirismus betont, dass Wissen hauptsächlich durch Sinneserfahrungen gewonnen wird.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Im Empirismus wird das Ich durch seine Erfahrungen definiert und formt so seine Realität.",
                position: 3,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Empirismus hat oft wenig Bezug zu einem personifizierten Gott, da er schwer erfahrbar ist.",
                position: 2,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Empirismus äußert sich selten zum Dualismus, da Wissen auf Sinneserfahrung beruht.",
                position: 2,
            },
            "Existenz von objektiver Moral": {
                description: "Moral kann empirisch beobachtbare Auswirkungen haben, ist jedoch nicht notwendigerweise objektiv.",
                position: 2,
            },
            "Existenz eines freien Willens": {
                description: "Freier Wille wird als Folge von empirisch erlebter Entscheidungsfreiheit betrachtet.",
                position: 2,
            },
            "Existenz eines Lebenssinns": {
                description: "Empirismus betrachtet den Lebenssinn als in den realen Erfahrungen und Erkenntnissen begründet.",
                position: 3,
            },


        },
    },
    Rationalismus: {
        description: "Rationalismus ist die Auffassung, dass Wissen vor allem durch Vernunft erworben wird.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Im Rationalismus wird das Ich als Vernunftwesen betrachtet, das abstrakte Wahrheiten erkennt.",
                position: 3,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Ein personifizierter Gott wird im Rationalismus oft durch logische Begründungen hinterfragt.",
                position: 2,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Der Rationalismus neigt zum Dualismus und sieht den Geist als primäres Erkenntnisorgan.",
                position: 3,
            },
            "Existenz von objektiver Moral": {
                description: "Moralische Prinzipien gelten als objektiv, da sie durch die Vernunft erkannt werden.",
                position: 3,
            },
            "Existenz eines freien Willens": {
                description: "Freier Wille ist notwendig, um vernünftige und moralische Entscheidungen zu treffen.",
                position: 3,
            },
            "Existenz eines Lebenssinns": {
                description: "Im Rationalismus wird der Lebenssinn in der Suche nach Wahrheit durch Vernunft gesehen.",
                position: 3,
            },


        },
    },
    Existentialismus: {
        description: "Existentialismus betont die Freiheit des Individuums und die Sinnsuche in einer oft absurden Welt.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Im Existentialismus ist das Ich zur eigenen Schöpfung und zur Sinnsuche verdammt.",
                position: 1,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Existentialismus sieht einen personifizierten Gott als irrelevant oder nicht-existent an.",
                position: 1,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Existentialismus lehnt oft den Dualismus ab und betont das körperlich erfahrene Dasein.",
                position: 1,
            },
            "Existenz von objektiver Moral": {
                description: "Moral ist subjektiv und vom individuellen Handeln abhängig.",
                position: 1,
            },
            "Existenz eines freien Willens": {
                description: "Freier Wille ist zentral; jeder muss sich selbst erschaffen und Verantwortung tragen.",
                position: 3,
            },
            "Existenz eines Lebenssinns": {
                description: "Existentialismus sieht den Lebenssinn als individuelle Entscheidung in einer oft sinnlosen Welt.",
                position: 1,
            },


        },
    },
    Nihilismus: {
        description: "Nihilismus ist die philosophische Ansicht, dass Leben und Existenz keinen inhärenten Sinn haben.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Im Nihilismus ist das Ich eine Illusion ohne Bedeutung oder Ziel.",
                position: 1,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Nihilismus lehnt die Existenz eines personifizierten Gottes als sinnlos ab.",
                position: 1,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Nihilismus äußert sich oft nicht zum Dualismus, betrachtet das Selbst jedoch als illusorisch.",
                position: 1,
            },
            "Existenz von objektiver Moral": {
                description: "Objektive Moral wird verworfen, da nichts einen inhärenten Wert besitzt.",
                position: 1,
            },
            "Existenz eines freien Willens": {
                description: "Der Nihilismus lässt die Frage des freien Willens offen, da Handlungen keinen Wert haben.",
                position: 1,
            },
            "Existenz eines Lebenssinns": {
                description: "Nihilismus verneint die Existenz eines objektiven Lebenssinns und betrachtet alle Werte als subjektiv.",
                position: 1,
            },


        },
    },
    Utilitarismus: {
        description: "Utilitarismus ist eine Ethik, die Handlungen nach dem größten Nutzen für das größte Glück bewertet.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Im Utilitarismus ist das Ich ein Teil des Ganzen, das nach maximalem Glück für alle strebt.",
                position: 2,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Ein personifizierter Gott wird im Utilitarismus oft irrelevant, wenn das Glück maximiert wird.",
                position: 2,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Utilitarismus äußert sich selten zum Dualismus, da der Fokus auf Handlungsfolgen liegt.",
                position: 2,
            },
            "Existenz von objektiver Moral": {
                description: "Moral ist objektiv und zielt auf das größte Glück für die größte Zahl.",
                position: 3,
            },
            "Existenz eines freien Willens": {
                description: "Freier Wille ist notwendig, um moralisch und vorausschauend handeln zu können.",
                position: 3,
            },
            "Existenz eines Lebenssinns": {
                description: "Im Utilitarismus besteht der Lebenssinn im Streben nach dem größtmöglichen Glück für die Mehrheit.",
                position: 3,
            },


        },
    },


    Strukturalismus: {
        description: "Strukturalismus analysiert gesellschaftliche und sprachliche Strukturen als bestimmend für das Individuum.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Im Strukturalismus ist das Ich ein Produkt gesellschaftlicher und sprachlicher Strukturen.",
                position: 2,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Strukturalismus sieht religiöse Konzepte oft als gesellschaftliche Konstruktionen.",
                position: 2,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Der Strukturalismus konzentriert sich auf soziale Strukturen und äußert sich wenig zum Dualismus.",
                position: 1,
            },
            "Existenz von objektiver Moral": {
                description: "Moral wird als abhängig von sprachlichen und kulturellen Strukturen gesehen, nicht als objektiv.",
                position: 1,
            },
            "Existenz eines freien Willens": {
                description: "Freier Wille wird als durch soziale Strukturen begrenzt betrachtet.",
                position: 2,
            },
            "Existenz eines Lebenssinns": {
                description: "Strukturalismus betrachtet den Lebenssinn als gesellschaftlich konstruiert und nicht inhärent.",
                position: 2,
            },


        },
    },
    Pragmatismus: {
        description: "Pragmatismus bewertet Ideen nach ihrer praktischen Umsetzbarkeit und ihren Ergebnissen.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Im Pragmatismus ist das Ich flexibel und anwendbar auf praktische Ziele und Ergebnisse.",
                position: 3,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Pragmatismus sieht den Nutzen eines personifizierten Gottes an seinem Effekt gemessen.",
                position: 2,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Pragmatismus legt selten Wert auf Dualismus, fokussiert stattdessen auf praktische Auswirkungen.",
                position: 2,
            },
            "Existenz von objektiver Moral": {
                description: "Moralische Werte sind flexibel und an ihrem praktischen Nutzen orientiert, nicht objektiv.",
                position: 2,
            },
            "Existenz eines freien Willens": {
                description: "Freier Wille wird als notwendig für praktische Handlungsfreiheit betrachtet.",
                position: 3,
            },
            "Existenz eines Lebenssinns": {
                description: "Im Pragmatismus wird der Lebenssinn in praktischen Zielen und deren Umsetzung gesehen.",
                position: 3,
            },


        },
    },
    Poststrukturalismus: {
        description: "Poststrukturalismus hinterfragt feste Strukturen und die Stabilität von Sprache und Bedeutung.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Im Poststrukturalismus ist das Ich fragmentiert und durch flexible Bedeutungen geprägt.",
                position: 2,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Poststrukturalismus lehnt einen festen personifizierten Gott ab und hinterfragt alle festen Bedeutungen.",
                position: 2,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Poststrukturalismus lehnt feste Konzepte wie den Dualismus oft ab.",
                position: 1,
            },
            "Existenz von objektiver Moral": {
                description: "Objektive Moral wird verworfen, da alle Werte als abhängig von kulturellen Kontexten betrachtet werden.",
                position: 1,
            },
            "Existenz eines freien Willens": {
                description: "Freier Wille wird als durch Diskurse und gesellschaftliche Machtstrukturen beeinflusst gesehen.",
                position: 2,
            },
            "Existenz eines Lebenssinns": {
                description: "Poststrukturalismus verneint einen festen Lebenssinn und betrachtet Bedeutung als fluid und kontextabhängig.",
                position: 2,
            },


        },
    },
    Stoizismus: {
        description: "Der Stoizismus ist eine antike Philosophie, die Gelassenheit und Selbstbeherrschung lehrt.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Im Stoizismus ist das Ich Teil eines kosmischen Ganzen und durch die Vernunft beständig, aber veränderlich.",
                position: 3,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Der Stoizismus glaubt an eine universelle Vernunft, aber nicht an einen personifizierten Gott.",
                position: 2,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Der Stoizismus befürwortet eine Form des Dualismus, in dem der Geist die Vernunft verkörpert.",
                position: 3,
            },
            "Existenz von objektiver Moral": {
                description: "Moral wird als objektiv durch die universelle Vernunft bestimmt.",
                position: 3,
            },
            "Existenz eines freien Willens": {
                description: "Freier Wille ist notwendig, um mit Gelassenheit und Vernunft zu handeln.",
                position: 3,
            },
            "Existenz eines Lebenssinns": {
                description: "Stoizismus sieht den Lebenssinn im Streben nach Tugend und Gelassenheit im Einklang mit der Natur.",
                position: 3,
            },


        },
    },
    Shinto: {
        description: "Shinto ist die indigene Religion Japans, die die Verehrung von Kami beinhaltet.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Im Shinto existiert ein Ich in Verbindung mit Natur und Gemeinschaft, ohne feste Beständigkeit.",
                position: 1,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Shinto verehrt viele Kami als Naturgeister, aber keinen personifizierten Gott.",
                position: 2,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Shinto bejaht eine spirituelle Dimension, betont jedoch den Einklang mit der physischen Welt.",
                position: 2,
            },
            "Existenz von objektiver Moral": {
                description: "Moral wird als traditionsbasiert und von den Kami beeinflusst, jedoch nicht absolut objektiv.",
                position: 2,
            },
            "Existenz eines freien Willens": {
                description: "Freier Wille wird als Teil der Beziehung zu Natur und Kami gesehen.",
                position: 2,
            },
            "Existenz eines Lebenssinns": {
                description: "Shinto sieht den Lebenssinn in der Harmonie mit der Natur und der Ehrung der Kami.",
                position: 2,
            },


        },
    },
    Christentum: {
        description: "Das Christentum ist eine monotheistische Religion, die auf den Lehren von Jesus Christus basiert.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Im Christentum besitzt das Individuum eine beständige Seele in Beziehung zu Gott.",
                position: 3,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Das Christentum glaubt an einen personifizierten Gott, der eine persönliche Beziehung zu den Gläubigen hat.",
                position: 3,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Christentum bejaht den Dualismus, mit der Seele als unsterblichem Wesen, das über den Körper hinaus besteht.",
                position: 3,
            },
            "Existenz von objektiver Moral": {
                description: "Moral ist objektiv und wird durch göttliche Gebote und das Leben Christi vorgegeben.",
                position: 3,
            },
            "Existenz eines freien Willens": {
                description: "Freier Wille ist zentral, damit der Mensch Entscheidungen für oder gegen das Göttliche treffen kann.",
                position: 3,
            },
            "Existenz eines Lebenssinns": {
                description: "Im Christentum liegt der Lebenssinn in der Beziehung zu Gott und dem Erreichen des ewigen Lebens.",
                position: 3,
            },


        },
    },
    Buddhismus: {
        description: "Der Buddhismus ist eine spirituelle Tradition, die auf den Lehren Buddhas basiert.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Im Buddhismus gilt das Ich als Illusion, eine Ansammlung veränderlicher Elemente.",
                position: 1,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Der Buddhismus kennt keinen personifizierten Gott, sondern fokussiert auf persönliche Erleuchtung.",
                position: 1,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Buddhismus lehnt den Dualismus ab und sieht das Selbst als vergängliche Kombination von Elementen.",
                position: 1,
            },
            "Existenz von objektiver Moral": {
                description: "Moral wird durch die Lehre von Karma und Mitgefühl geleitet, aber nicht als absolut objektiv.",
                position: 2,
            },
            "Existenz eines freien Willens": {
                description: "Freier Wille wird anerkannt, wobei Handlungen Konsequenzen (Karma) erzeugen.",
                position: 2,
            },
            "Existenz eines Lebenssinns": {
                description: "Buddhismus sieht den Lebenssinn in der Überwindung des Leidens und dem Erreichen des Nirvana.",
                position: 2,
            },


        },
    },
    Hinduismus: {
        description: "Der Hinduismus ist eine der ältesten Religionen der Welt und hat ein komplexes Glaubenssystem.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Im Hinduismus ist das Ich, das Atman, eine unsterbliche Seele, die Reinkarnation durchläuft.",
                position: 3,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Der Hinduismus verehrt mehrere personifizierte Götter, die Aspekte des Göttlichen repräsentieren.",
                position: 3,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Der Hinduismus bejaht den Dualismus, wobei die unsterbliche Seele den physischen Körper überdauert.",
                position: 3,
            },
            "Existenz von objektiver Moral": {
                description: "Moral wird als objektiv betrachtet und basiert auf Dharma und Karma.",
                position: 3,
            },
            "Existenz eines freien Willens": {
                description: "Freier Wille ist vorhanden, jedoch beeinflusst durch das Gesetz des Karma.",
                position: 3,
            },
            "Existenz eines Lebenssinns": {
                description: "Im Hinduismus liegt der Lebenssinn im Erreichen der Befreiung (Moksha) und der Vereinigung mit dem Göttlichen.",
                position: 3,
            },


        },
    },
    Judentum: {
        description: "Das Judentum ist die älteste abrahamitische Religion, die auf den Bund mit Gott basiert.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Im Judentum wird das Ich als individuelle, beständige Seele in Beziehung zu Gott verstanden.",
                position: 3,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Das Judentum verehrt einen personifizierten Gott, der über persönliche Beziehungen zu den Menschen wacht.",
                position: 3,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Judentum bejaht den Dualismus mit der Seele als unvergänglicher Essenz.",
                position: 3,
            },
            "Existenz von objektiver Moral": {
                description: "Moralische Prinzipien gelten als objektiv und sind durch die Thora und göttliche Gebote gegeben.",
                position: 3,
            },
            "Existenz eines freien Willens": {
                description: "Freier Wille ist wesentlich, damit Menschen ethisch handeln und den göttlichen Geboten folgen können.",
                position: 3,
            },
            "Existenz eines Lebenssinns": {
                description: "Im Judentum besteht der Lebenssinn in der Erfüllung des Bundes mit Gott und dem Streben nach Gerechtigkeit.",
                position: 3,
            },

        },
    },
    Islam: {
        description: "Der Islam ist eine monotheistische Religion, die durch die Offenbarungen an den Propheten Mohammed entstand.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Im Islam wird das Ich als Seele verstanden, die durch Glauben und Taten eine ewige Beständigkeit erlangen kann.",
                position: 3,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Der Islam verehrt Allah als personifizierten Gott mit persönlichen, jedoch übermenschlichen Eigenschaften.",
                position: 3,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Islam bejaht den Dualismus, wobei die Seele den Körper überdauert und das Jenseits erwartet.",
                position: 3,
            },
            "Existenz von objektiver Moral": {
                description: "Moral wird als objektiv betrachtet und ist durch den Koran und die Scharia festgelegt.",
                position: 3,
            },
            "Existenz eines freien Willens": {
                description: "Freier Wille ist gegeben, damit Menschen Verantwortung für ihre Taten tragen und sich für den Glauben entscheiden können.",
                position: 3,
            },
            "Existenz eines Lebenssinns": {
                description: "Im Islam wird der Lebenssinn in der Hingabe an Gott und der Erfüllung seiner Gebote gesehen.",
                position: 3,
            },

        },


    },
    "Nietzsche, Friedrich": {
        description: "Friedrich Nietzsche war ein deutscher Philosoph des 19. Jahrhunderts, der den Übermenschen und den Willen zur Macht betonte.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Nietzsche sieht das Ich als Konstruktion und dynamische Projektion, beeinflusst durch soziale und psychologische Faktoren.",
                position: 1,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Nietzsche erklärte 'Gott ist tot' und lehnte die Existenz eines personifizierten Gottes ab.",
                position: 1,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Nietzsche lehnte den Dualismus ab und betrachtete den Körper als primäre Existenzbasis.",
                position: 1,
            },
            "Existenz von objektiver Moral": {
                description: "Moral ist subjektiv und vom Willen zur Macht und individueller Stärke geprägt.",
                position: 1,
            },
            "Existenz eines freien Willens": {
                description: "Nietzsche befürwortete eine Art freien Willen, definiert durch individuelle Stärke und Selbstüberwindung.",
                position: 3,
            },
            "Existenz eines Lebenssinns": {
                description: "Nietzsche sah den Lebenssinn in der Überwindung des Individuums durch den Willen zur Macht.",
                position: 1,
            },


        },
    },
    Aristoteles: {
        description: "Aristoteles war ein antiker griechischer Philosoph, der als Schüler Platons wesentliche Grundlagen der westlichen Philosophie prägte.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Für Aristoteles ist das Ich eine vernunftbegabte Seele, die beständig nach Glück und Tugend strebt.",
                position: 3,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Aristoteles glaubte an einen 'unbewegten Beweger', der jedoch keinen personifizierten Gott darstellt.",
                position: 2,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Aristoteles sah die Seele als untrennbar mit dem Körper verbunden, betonte jedoch geistige Elemente.",
                position: 2,
            },
            "Existenz von objektiver Moral": {
                description: "Moral ist objektiv und basiert auf der Verwirklichung von Tugenden, die das gute Leben fördern.",
                position: 3,
            },
            "Existenz eines freien Willens": {
                description: "Freier Wille ist notwendig, um tugendhaft zu handeln und das individuelle Potenzial zu entfalten.",
                position: 3,
            },
            "Existenz eines Lebenssinns": {
                description: "Für Aristoteles liegt der Lebenssinn im Streben nach Eudaimonia, dem guten Leben durch Tugend.",
                position: 3,
            },


        },
    },
    "Cioran, Emil": {
        description: "Emil Cioran war ein pessimistischer Philosoph des 20. Jahrhunderts, der das Leben als absurde Existenz sah.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Für Cioran ist das Ich ein quälender Zustand, der die Illusion eines stabilen Selbst erzeugt.",
                position: 1,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Cioran lehnte die Vorstellung eines personifizierten Gottes ab und sah den Glauben als illusionär.",
                position: 1,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Cioran verwarf den Dualismus und betrachtete das Selbst als vergängliche Illusion.",
                position: 1,
            },
            "Existenz von objektiver Moral": {
                description: "Cioran lehnte objektive Moral ab und betrachtete das Leben als sinnlos und moralisch neutral.",
                position: 1,
            },
            "Existenz eines freien Willens": {
                description: "Freier Wille wird als illusionär betrachtet, da das Leben in Ciorans Sicht absurd ist.",
                position: 1,
            },
            "Existenz eines Lebenssinns": {
                description: "Cioran verneinte die Existenz eines objektiven Lebenssinns und betrachtete das Leben als absurden Zustand.",
                position: 1,
            },


        },
    },
    Platon: {
        description: "Platon war ein antiker griechischer Philosoph und Begründer der idealistischen Philosophie.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Für Platon ist das Ich eine unsterbliche Seele, die an den Ideen teilhat und in den Körper eingebunden ist.",
                position: 3,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Platon sprach von einer göttlichen Ordnung, lehnte aber einen personifizierten Gott ab.",
                position: 2,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Platon befürwortete den Dualismus und sah die Seele als von den Ideen beeinflusst und ewig.",
                position: 3,
            },
            "Existenz von objektiver Moral": {
                description: "Moral ist objektiv und basiert auf den unveränderlichen Ideen.",
                position: 3,
            },
            "Existenz eines freien Willens": {
                description: "Freier Wille ist notwendig, damit die Seele moralische Entscheidungen trifft und zur Erkenntnis gelangt.",
                position: 3,
            },
            "Existenz eines Lebenssinns": {
                description: "Platon sah den Lebenssinn in der Annäherung an die Ideenwelt und dem Streben nach Weisheit.",
                position: 3,
            },


        },
    },

    "Hobbes, Thomas": {
        description: "Thomas Hobbes war ein englischer Philosoph, der den Gesellschaftsvertrag und den Leviathan postulierte.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Hobbes sieht das Ich als egoistisches, materielles Wesen, das vom Selbsterhaltungstrieb geprägt ist.",
                position: 2,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Hobbes betrachtete Gott als notwendiges Konzept für gesellschaftliche Ordnung, aber nicht als personifiziertes Wesen.",
                position: 2,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Hobbes verwarf den Dualismus und sah den Menschen als rein materielles Wesen.",
                position: 1,
            },
            "Existenz von objektiver Moral": {
                description: "Moral ist im Naturzustand relativ, erhält jedoch Objektivität durch den Gesellschaftsvertrag.",
                position: 2,
            },
            "Existenz eines freien Willens": {
                description: "Hobbes sah den freien Willen als eingeschränkt durch Naturgesetze und Selbsterhaltungstrieb.",
                position: 2,
            },
            "Existenz eines Lebenssinns": {
                description: "Für Hobbes bestand der Lebenssinn im Selbsterhalt und der Stabilität durch den Gesellschaftsvertrag.",
                position: 2,
            },


        },
    },
    "Descartes, René": {
        description: "René Descartes war ein französischer Philosoph und Mathematiker, bekannt für seinen Dualismus von Körper und Geist.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Descartes identifizierte das Ich als denkendes Wesen (*cogito*), das klar und beständig existiert.",
                position: 3,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Descartes glaubte an einen vollkommenen Gott, den er als notwendig für die Existenz des Ichs ansah.",
                position: 3,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Descartes war ein starker Befürworter des Dualismus und sah Geist und Körper als getrennte Substanzen.",
                position: 3,
            },
            "Existenz von objektiver Moral": {
                description: "Descartes glaubte an eine objektive Moral, die durch Vernunft und göttliche Perfektion gegeben ist.",
                position: 3,
            },
            "Existenz eines freien Willens": {
                description: "Freier Wille war für Descartes grundlegend, da er die menschliche Fähigkeit zur Vernunft und Entscheidung betonte.",
                position: 3,
            },
            "Existenz eines Lebenssinns": {
                description: "Descartes sah den Lebenssinn in der Suche nach Gewissheit und der Befolgung göttlicher Vernunft.",
                position: 3,
            },


        },
    },
    "Feuerbach, Ludwig": {
        description: "Ludwig Feuerbach war ein deutscher Philosoph, der die Religion als Projektion menschlicher Wünsche verstand.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Feuerbach sah das Ich als Produkt sozialer und psychologischer Projektionen, ohne metaphysische Beständigkeit.",
                position: 1,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Für Feuerbach ist Gott eine Projektion menschlicher Ideale, kein personifiziertes Wesen.",
                position: 1,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Feuerbach verwarf den Dualismus und sah das Selbst als rein materiell.",
                position: 1,
            },
            "Existenz von objektiver Moral": {
                description: "Moralische Werte sind für Feuerbach sozial konstruiert und nicht objektiv.",
                position: 1,
            },
            "Existenz eines freien Willens": {
                description: "Freier Wille wird als durch soziale Umstände beeinflusst betrachtet, jedoch nicht absolut geleugnet.",
                position: 2,
            },
            "Existenz eines Lebenssinns": {
                description: "Feuerbach sah den Lebenssinn in der Selbstverwirklichung und der Projektion menschlicher Ideale.",
                position: 2,
            },


        },
    },
    "Frege, Gottlob": {
        description: "Gottlob Frege war ein deutscher Mathematiker und Philosoph, der die Grundlagen der modernen Logik legte.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Frege befasste sich wenig mit dem Ich, das er als bedeutungslos für objektive Logik ansah.",
                position: 1,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Frege äußerte sich kaum zu einem personifizierten Gott und sah Logik als unabhängig von Religion.",
                position: 1,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Frege äußerte sich nicht explizit zum Dualismus und fokussierte auf formale Logik.",
                position: 1,
            },
            "Existenz von objektiver Moral": {
                description: "Frege konzentrierte sich auf Logik und äußerte sich nicht zur Moral.",
                position: 1,
            },
            "Existenz eines freien Willens": {
                description: "Frege äußerte sich selten zum freien Willen und sah die Logik als vorrangig.",
                position: 1,
            },
            "Existenz eines Lebenssinns": {
                description: "Frege äußerte sich kaum zum Lebenssinn und konzentrierte sich auf die objektive Logik.",
                position: 1,
            },

        },
    },
    "Wittgenstein, Ludwig": {
        description: "Ludwig Wittgenstein war ein österreichischer Philosoph, der die Sprachphilosophie revolutionierte.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Wittgenstein sah das Ich als unbestimmt und durch Sprache konstruiert, ohne stabile Identität.",
                position: 1,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Wittgenstein diskutierte Gott als sprachliches Konzept, jedoch nicht als personifiziertes Wesen.",
                position: 2,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Wittgenstein äußerte sich selten direkt zum Dualismus, konzentrierte sich auf Sprache als Realitätsfilter.",
                position: 1,
            },
            "Existenz von objektiver Moral": {
                description: "Wittgenstein sah Moral als sprachabhängig und betrachtete sie daher als subjektiv und kontextbezogen.",
                position: 2,
            },
            "Existenz eines freien Willens": {
                description: "Freier Wille wird indirekt hinterfragt, da Sprache und Bedeutung die Wahrnehmung beeinflussen.",
                position: 2,
            },
            "Existenz eines Lebenssinns": {
                description: "Wittgenstein sah den Lebenssinn als unaussprechlich und jenseits sprachlicher Begriffe.",
                position: 2,
            },


        },
    },
    "Schopenhauer, Arthur": {
        description: "Arthur Schopenhauer war ein deutscher Philosoph, der die Welt als 'Wille und Vorstellung' erklärte.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Schopenhauer sah das Ich als Ausdruck des universellen Willens, letztlich illusionär und leidvoll.",
                position: 1,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Schopenhauer verneinte einen personifizierten Gott und sah das Weltgeschehen als blindem Willen unterworfen.",
                position: 1,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Schopenhauer betrachtete den Dualismus kritisch und sah den Willen als universelle Kraft.",
                position: 2,
            },
            "Existenz von objektiver Moral": {
                description: "Moral ist für Schopenhauer subjektiv und basiert auf Mitleid als einzige moralische Motivation.",
                position: 2,
            },
            "Existenz eines freien Willens": {
                description: "Schopenhauer lehnte den freien Willen ab und sah den Willen als determinierte Kraft.",
                position: 1,
            },
            "Existenz eines Lebenssinns": {
                description: "Schopenhauer verneinte einen positiven Lebenssinn und sah das Leben als von Leiden geprägt.",
                position: 1,
            },

        },   },

            Pantheismus: {
                description: "Pantheismus ist die religiöse Überzeugung, dass Gott und das Universum identisch sind und Gott in allem existiert.",
                details: {
                    "Existenz eines Ichs bzw. beständigen Selbst": {
                        description: "Im Pantheismus wird das Ich als Teil des allumfassenden Göttlichen betrachtet.",
                        position: 2,
                    },
                    "Existenz eines (personifizierten) Gottes": {
                        description: "Pantheismus lehnt einen personifizierten Gott ab und sieht das Göttliche in allen Dingen.",
                        position: 1,
                    },
                    "Existenz einer Seele (Geist-Körper-Dualismus)": {
                        description: "Pantheismus verneint die Trennung von Geist und Materie und sieht alles als Einheit.",
                        position: 1,
                    },
                    "Existenz von objektiver Moral": {
                        description: "Moral wird als immanent in der Natur und dem Göttlichen verstanden, jedoch nicht als absolut.",
                        position: 2,
                    },
                    "Existenz eines freien Willens": {
                        description: "Freier Wille wird als begrenzt betrachtet, da das Individuum Teil eines göttlichen Ganzen ist.",
                        position: 2,
                    },
                    "Existenz eines Lebenssinns": {
                        description: "Der Pantheismus sieht den Lebenssinn in der Harmonie und Verbindung mit dem Universum.",
                        position: 2,
                    },

                },
            },
            "Zen-Buddhismus": {
                description: "Zen-Buddhismus ist eine Schule des Buddhismus, die Meditation und das unmittelbare Erleben des Seins betont.",
                details: {
                    "Existenz eines Ichs bzw. beständigen Selbst": {
                        description: "Im Zen-Buddhismus gilt das Ich als Illusion und wird durch Meditation transzendiert.",
                        position: 1,
                    },
                    "Existenz eines (personifizierten) Gottes": {
                        description: "Zen-Buddhismus lehnt die Vorstellung eines personifizierten Gottes ab und betont das Erwachen.",
                        position: 1,
                    },
                    "Existenz einer Seele (Geist-Körper-Dualismus)": {
                        description: "Zen-Buddhismus verneint den Dualismus und sieht Geist und Körper als Einheit im Moment.",
                        position: 1,
                    },
                    "Existenz von objektiver Moral": {
                        description: "Moral wird durch Mitgefühl und Weisheit geleitet, aber nicht als absolut objektiv angesehen.",
                        position: 2,
                    },
                    "Existenz eines freien Willens": {
                        description: "Freier Wille wird als Illusion betrachtet, während das Handeln aus dem Erwachen entspringt.",
                        position: 1,
                    },
                    "Existenz eines Lebenssinns": {
                        description: "Zen-Buddhismus sieht den Lebenssinn in der Befreiung vom Leiden und dem Erleben des Jetzt.",
                        position: 2,
                    },

                },
            },
            Heraklit: {
                description: "Heraklit war ein vorsokratischer Philosoph, der die Lehre vom ständigen Wandel und der Einheit der Gegensätze entwickelte.",
                details: {
                    "Existenz eines Ichs bzw. beständigen Selbst": {
                        description: "Heraklit sieht das Ich als ständig im Wandel begriffen und Teil des ewigen Flusses.",
                        position: 2,
                    },
                    "Existenz eines (personifizierten) Gottes": {
                        description: "Heraklit sprach von einem universalen Logos, jedoch nicht von einem personifizierten Gott.",
                        position: 2,
                    },
                    "Existenz einer Seele (Geist-Körper-Dualismus)": {
                        description: "Heraklit sah das Selbst als dynamischen Teil des Weltgesetzes, ohne strikten Dualismus.",
                        position: 1,
                    },
                    "Existenz von objektiver Moral": {
                        description: "Moral ist für Heraklit Teil des kosmischen Logos und in den Naturgesetzen verankert.",
                        position: 2,
                    },
                    "Existenz eines freien Willens": {
                        description: "Freier Wille wird als eingeschränkt durch den kosmischen Logos betrachtet.",
                        position: 2,
                    },
                    "Existenz eines Lebenssinns": {
                        description: "Für Heraklit besteht der Lebenssinn in der Erkenntnis des ewigen Wandels.",
                        position: 2,
                    },

                },
            },
            "Berkeley, George": {
                description: "George Berkeley war ein irischer Philosoph und Bischof, der den subjektiven Idealismus entwickelte.",
                details: {
                    "Existenz eines Ichs bzw. beständigen Selbst": {
                        description: "Berkeley sieht das Ich als denkendes Wesen, das durch Wahrnehmung existiert.",
                        position: 3,
                    },
                    "Existenz eines (personifizierten) Gottes": {
                        description: "Berkeley glaubte an einen personifizierten Gott, der als Grundlage aller Wahrnehmung dient.",
                        position: 3,
                    },
                    "Existenz einer Seele (Geist-Körper-Dualismus)": {
                        description: "Berkeley verneinte die Materie, glaubte jedoch an das Geistige als primäre Realität.",
                        position: 2,
                    },
                    "Existenz von objektiver Moral": {
                        description: "Für Berkeley ist Moral objektiv und durch göttliche Wahrnehmung begründet.",
                        position: 3,
                    },
                    "Existenz eines freien Willens": {
                        description: "Freier Wille ist für Berkeley gegeben und bedingt die moralische Verantwortung.",
                        position: 3,
                    },
                    "Existenz eines Lebenssinns": {
                        description: "Berkeley sah den Lebenssinn in der Nähe zu Gott und dem Streben nach Tugend.",
                        position: 3,
                    },

                },
            },
            "Ockham, William": {
                description: "Wilhelm von Ockham war ein mittelalterlicher Philosoph, bekannt für das Sparsamkeitsprinzip 'Ockhams Rasiermesser'.",
                details: {
                    "Existenz eines Ichs bzw. beständigen Selbst": {
                        description: "Für Ockham ist das Ich ein individuelles Wesen, das keine überflüssigen Annahmen benötigt.",
                        position: 2,
                    },
                    "Existenz eines (personifizierten) Gottes": {
                        description: "Ockham glaubte an einen personifizierten Gott, dessen Existenz einfach postuliert wird.",
                        position: 3,
                    },
                    "Existenz einer Seele (Geist-Körper-Dualismus)": {
                        description: "Ockham bejahte die Existenz einer Seele, ohne überflüssige Metaphysik.",
                        position: 3,
                    },
                    "Existenz von objektiver Moral": {
                        description: "Moralische Prinzipien gelten als objektiv und sind göttlicher Ordnung untergeordnet.",
                        position: 3,
                    },
                    "Existenz eines freien Willens": {
                        description: "Ockham akzeptierte den freien Willen als notwendige Bedingung moralischer Verantwortung.",
                        position: 3,
                    },
                    "Existenz eines Lebenssinns": {
                        description: "Für Ockham liegt der Lebenssinn in der Einhaltung göttlicher Gebote und der Einfachheit des Glaubens.",
                        position: 3,
                    },

                },
            },
            "Hume, David": {
                description: "David Hume war ein schottischer Philosoph, der für seinen Empirismus und seine Skepsis bekannt ist.",
                details: {
                    "Existenz eines Ichs bzw. beständigen Selbst": {
                        description: "Hume sah das Ich als Bündel von Wahrnehmungen, ohne beständige Essenz.",
                        position: 1,
                    },
                    "Existenz eines (personifizierten) Gottes": {
                        description: "Hume war skeptisch gegenüber einem personifizierten Gott und sah Glauben als irrational.",
                        position: 1,
                    },
                    "Existenz einer Seele (Geist-Körper-Dualismus)": {
                        description: "Hume lehnte den Dualismus ab und betrachtete das Selbst als Ansammlung von Wahrnehmungen.",
                        position: 1,
                    },
                    "Existenz von objektiver Moral": {
                        description: "Moral ist subjektiv und basiert auf Gefühlen und Nutzen, nicht auf objektiven Prinzipien.",
                        position: 1,
                    },
                    "Existenz eines freien Willens": {
                        description: "Hume akzeptierte freien Willen als kompatibel mit Determinismus.",
                        position: 2,
                    },
                    "Existenz eines Lebenssinns": {
                        description: "Hume sah keinen objektiven Lebenssinn, sondern betonte den Wert des Lebensgenusses.",
                        position: 1,
                    },

                },
            },
            "Fichte, Johann Gottlieb": {
                description: "Johann Gottlieb Fichte war ein deutscher Idealist, der das Ich und die Freiheit des Individuums betonte.",
                details: {
                    "Existenz eines Ichs bzw. beständigen Selbst": {
                        description: "Fichte sah das Ich als aktiven, schaffenden Grund aller Realität.",
                        position: 3,
                    },
                    "Existenz eines (personifizierten) Gottes": {
                        description: "Fichte sprach von einem göttlichen Prinzip, jedoch nicht von einem personifizierten Gott.",
                        position: 2,
                    },
                    "Existenz einer Seele (Geist-Körper-Dualismus)": {
                        description: "Fichte verneinte den Dualismus und sah das Ich als Einheit des Seins.",
                        position: 2,
                    },
                    "Existenz von objektiver Moral": {
                        description: "Moral ist objektiv und folgt dem Streben des Ichs nach Freiheit und Vernunft.",
                        position: 3,
                    },
                    "Existenz eines freien Willens": {
                        description: "Freier Wille ist zentral für das schöpferische Ich in Fichtes Philosophie.",
                        position: 3,
                    },
                    "Existenz eines Lebenssinns": {
                        description: "Für Fichte besteht der Lebenssinn im Streben des Ichs nach Selbstverwirklichung und Freiheit.",
                        position: 3,
                    },

                },
            },
            "Kierkegaard, Søren": {
                description: "Søren Kierkegaard war ein dänischer Philosoph und Vater des Existentialismus, der die persönliche Entscheidung betonte.",
                details: {
                    "Existenz eines Ichs bzw. beständigen Selbst": {
                        description: "Kierkegaard sieht das Ich als in der Wahl und Existenz befindlich, ständig in Spannung.",
                        position: 2,
                    },
                    "Existenz eines (personifizierten) Gottes": {
                        description: "Kierkegaard glaubte an einen personifizierten Gott, zu dem das Individuum eine persönliche Beziehung eingeht.",
                        position: 3,
                    },
                    "Existenz einer Seele (Geist-Körper-Dualismus)": {
                        description: "Kierkegaard befürwortete die Existenz einer Seele, die das Individuum in die Beziehung zu Gott führt.",
                        position: 3,
                    },
                    "Existenz von objektiver Moral": {
                        description: "Moral ist für Kierkegaard in der Beziehung zu Gott begründet und objektiv.",
                        position: 3,
                    },
                    "Existenz eines freien Willens": {
                        description: "Freier Wille ist für Kierkegaard entscheidend, da die Wahl den Glauben formt.",
                        position: 3,
                    },
                    "Existenz eines Lebenssinns": {
                        description: "Kierkegaard sah den Lebenssinn in der individuellen Beziehung zu Gott und der Selbstfindung.",
                        position: 3,
                    },

                },
            },
            "Mill, John Stuart": {
                description: "John Stuart Mill war ein britischer Philosoph und Ökonom, bekannt für seinen Utilitarismus und Liberalismus.",
                details: {
                    "Existenz eines Ichs bzw. beständigen Selbst": {
                        description: "Für Mill ist das Ich ein empfindendes Wesen, das nach Glück strebt.",
                        position: 3,
                    },
                    "Existenz eines (personifizierten) Gottes": {
                        description: "Mill äußerte sich kaum zu einem personifizierten Gott, da er empirische Beobachtung bevorzugte.",
                        position: 1,
                    },
                    "Existenz einer Seele (Geist-Körper-Dualismus)": {
                        description: "Mill äußerte sich wenig zum Dualismus und fokussierte sich auf das empirische Selbst.",
                        position: 2,
                    },
                    "Existenz von objektiver Moral": {
                        description: "Moral ist objektiv und basiert auf der Maximierung des Glücks für die Mehrheit.",
                        position: 3,
                    },
                    "Existenz eines freien Willens": {
                        description: "Freier Wille ist entscheidend für die moralische Verantwortung und das Streben nach Glück.",
                        position: 3,
                    },
                    "Existenz eines Lebenssinns": {
                        description: "Für Mill liegt der Lebenssinn in der Maximierung des Glücks und der Freiheit des Individuums.",
                        position: 3,
                    },

                },
            },
            "de Beauvoir, Simone": {
                description: "Simone de Beauvoir war eine französische Existentialistin und Feministin, die das Verhältnis von Freiheit und Geschlecht untersuchte.",
                details: {
                    "Existenz eines Ichs bzw. beständigen Selbst": {
                        description: "Für de Beauvoir ist das Ich ein freies Wesen, das sich in sozialer und geschlechtlicher Identität konstruiert.",
                        position: 2,
                    },
                    "Existenz eines (personifizierten) Gottes": {
                        description: "De Beauvoir lehnte einen personifizierten Gott ab und betonte das Individuum als frei.",
                        position: 1,
                    },
                    "Existenz einer Seele (Geist-Körper-Dualismus)": {
                        description: "De Beauvoir sah den Körper als primäre Erfahrung des Selbst, ohne metaphysischen Dualismus.",
                        position: 1,
                    },
                    "Existenz von objektiver Moral": {
                        description: "Moral ist für de Beauvoir subjektiv und muss aus individuellen und sozialen Bedingungen heraus konstruiert werden.",
                        position: 2,
                    },
                    "Existenz eines freien Willens": {
                        description: "Freier Wille ist zentral, um die Rolle und Freiheit des Individuums selbst zu gestalten.",
                        position: 3,
                    },
                    "Existenz eines Lebenssinns": {
                        description: "De Beauvoir sah den Lebenssinn in der freien Selbstgestaltung und im Engagement für soziale Gerechtigkeit.",
                        position: 2,
                    },

                },
            },
            "Habermas, Jürgen": {
                description: "Jürgen Habermas ist ein deutscher Philosoph, bekannt für seine Theorie des kommunikativen Handelns.",
                details: {
                    "Existenz eines Ichs bzw. beständigen Selbst": {
                        description: "Für Habermas ist das Ich ein kommunikatives Wesen, das sich in sozialen Interaktionen formt.",
                        position: 2,
                    },
                    "Existenz eines (personifizierten) Gottes": {
                        description: "Habermas äußerte sich wenig zu einem personifizierten Gott und konzentrierte sich auf säkulare Kommunikation.",
                        position: 1,
                    },
                    "Existenz einer Seele (Geist-Körper-Dualismus)": {
                        description: "Habermas legte wenig Wert auf den Dualismus und sah das Selbst als sozial konstruiert.",
                        position: 1,
                    },
                    "Existenz von objektiver Moral": {
                        description: "Moralische Prinzipien entstehen für Habermas durch intersubjektive Kommunikation und Konsens.",
                        position: 3,
                    },
                    "Existenz eines freien Willens": {
                        description: "Freier Wille ist zentral, um an Kommunikation und demokratischer Teilhabe teilzunehmen.",
                        position: 3,
                    },
                    "Existenz eines Lebenssinns": {
                        description: "Habermas sieht den Lebenssinn in der Partizipation an rationaler Kommunikation und sozialem Zusammenleben.",
                        position: 3,
                    },

                },
            },
            "Zizek, Slavoj": {
                description: "Slavoj Zizek ist ein slowenischer Philosoph und Kulturkritiker, bekannt für seine postmarxistische Theorie und Psychoanalyse.",
                details: {
                    "Existenz eines Ichs bzw. beständigen Selbst": {
                        description: "Zizek sieht das Ich als durch ideologische Strukturen und unbewusste Triebe geprägt.",
                        position: 2,
                    },
                    "Existenz eines (personifizierten) Gottes": {
                        description: "Zizek analysiert die Idee eines personifizierten Gottes als ideologisches Konstrukt.",
                        position: 1,
                    },
                    "Existenz einer Seele (Geist-Körper-Dualismus)": {
                        description: "Zizek verneint einen traditionellen Dualismus und betont den Einfluss des Unbewussten.",
                        position: 2,
                    },
                    "Existenz von objektiver Moral": {
                        description: "Moral ist für Zizek eine Konstruktion und abhängig von sozialen und ideologischen Kontexten.",
                        position: 2,
                    },
                    "Existenz eines freien Willens": {
                        description: "Freier Wille wird als illusionär betrachtet und stark durch das Unbewusste beeinflusst.",
                        position: 1,
                    },
                    "Existenz eines Lebenssinns": {
                        description: "Zizek sieht keinen objektiven Lebenssinn, analysiert jedoch den ideologischen Bedarf daran.",
                        position: 2,
                    },

                },
            },



    "Scientology": {
        description: "Scientology ist eine moderne spirituelle Bewegung, die persönliche Freiheit und geistige Erlösung durch spezielle Techniken anstrebt.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Scientology betrachtet das Ich als unsterbliches Wesen (Thetan), das von körperlicher und geistiger Existenz getrennt ist.",
                position: 3,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Scientology hat keine klare Vorstellung eines personifizierten Gottes, sondern fördert individuelle spirituelle Freiheit.",
                position: 2,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Scientology sieht eine deutliche Trennung zwischen Körper und Geist, wobei das wahre Selbst als unsterblicher Thetan existiert.",
                position: 3,
            },
            "Existenz von objektiver Moral": {
                description: "Scientology lehrt ethische Grundsätze, jedoch ohne den Anspruch auf objektive Moral.",
                position: 2,
            },
            "Existenz eines freien Willens": {
                description: "Scientology betont, dass jeder Mensch die Freiheit hat, seinen Weg zu wählen und sein Schicksal zu bestimmen.",
                position: 3,
            },
            "Existenz eines Lebenssinns": {
                description: "Scientology sieht den Lebenssinn in der Selbstverwirklichung und dem Erreichen geistiger Freiheit.",
                position: 3,
            },

        },
    },

    "Absurdismus": {
        description: "Absurdismus, besonders geprägt durch Albert Camus, betont das unvermeidbare Paradox zwischen menschlichem Streben nach Bedeutung und einer sinnlosen Welt.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Absurdismus erkennt das Ich an, jedoch als Entität in ständiger Konfrontation mit der Sinnlosigkeit.",
                position: 2,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Der Absurdismus weist die Existenz eines personifizierten Gottes zurück und sieht Gott als irrelevant für die menschliche Existenz.",
                position: 1,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Absurdismus beschäftigt sich weniger mit Dualismus und sieht das Selbst als rein existenziell.",
                position: 2,
            },
            "Existenz von objektiver Moral": {
                description: "Camus betonte die Abwesenheit einer objektiven Moral, da das Universum bedeutungslos ist.",
                position: 1,
            },
            "Existenz eines freien Willens": {
                description: "Absurdismus unterstützt den freien Willen als individuelle Entscheidung gegen die Absurdität.",
                position: 3,
            },
            "Existenz eines Lebenssinns": {
                description: "Absurdismus lehnt einen inhärenten Lebenssinn ab und fordert, dass der Mensch selbst einen Sinn schafft.",
                position: 1,
            },

        },
    },

    "Hedonismus": {
        description: "Hedonismus ist eine ethische Theorie, die das Streben nach Lust und das Vermeiden von Schmerz als höchstes Gut ansieht.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Im Hedonismus ist das Ich oft als Empfänger von Lust und Schmerz zentral.",
                position: 3,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Hedonismus betrachtet die Existenz eines Gottes als irrelevant zur Lustmaximierung.",
                position: 1,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Hedonismus bezieht sich selten auf Dualismus und fokussiert eher auf das physische Erleben.",
                position: 2,
            },
            "Existenz von objektiver Moral": {
                description: "Hedonismus erkennt keine objektive Moral an, da es auf subjektive Lustmaximierung abzielt.",
                position: 1,
            },
            "Existenz eines freien Willens": {
                description: "Der freie Wille wird im Hedonismus als Wahlmöglichkeit zur Lustmaximierung gesehen.",
                position: 3,
            },
            "Existenz eines Lebenssinns": {
                description: "Für den Hedonismus ist der Sinn des Lebens das Erreichen von maximalem Vergnügen.",
                position: 3,
            },

        },
    },
    "Transzendentalismus": {
        description: "Der Transzendentalismus betont die spirituelle Natur und die Verbundenheit des Individuums mit der Natur.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Der Transzendentalismus betrachtet das Selbst als spirituelle, mit der Natur verbundene Einheit.",
                position: 3,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Transzendentalisten neigen dazu, Gott als unpersönliche, allgegenwärtige Kraft in der Natur zu sehen.",
                position: 2,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Transzendentalismus sieht den Geist als immanentes Teil des Selbst, das über den Körper hinausgeht.",
                position: 3,
            },
            "Existenz von objektiver Moral": {
                description: "Transzendentalismus erkennt moralische Prinzipien als eingebettet in die Natur und das universelle Gute.",
                position: 3,
            },
            "Existenz eines freien Willens": {
                description: "Der Transzendentalismus bejaht den freien Willen als Ausdruck der individuellen Seele.",
                position: 3,
            },
            "Existenz eines Lebenssinns": {
                description: "Im Transzendentalismus ist der Lebenssinn die persönliche Verbindung mit dem Göttlichen und der Natur.",
                position: 3,
            },

        },
    },

    "Arendt, Hannah": {
        description: "Hannah Arendt war eine politische Theoretikerin, die sich mit den Konzepten von Macht, Freiheit und Totalitarismus beschäftigte.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Arendt betrachtet das Ich als Ergebnis von Handlungen und Beziehungen in der sozialen Welt.",
                position: 2,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Arendt äußerte sich kaum über einen personalen Gott und hielt Religion für eine private Angelegenheit.",
                position: 2,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Arendt äußerte sich selten explizit zum Dualismus, betonte jedoch das Denken als spirituelle Praxis.",
                position: 2,
            },
            "Existenz von objektiver Moral": {
                description: "Arendt hielt an moralischen Prinzipien fest, insbesondere im Kontext von Verantwortung und Menschlichkeit.",
                position: 3,
            },
            "Existenz eines freien Willens": {
                description: "Arendt sah den freien Willen als zentral für das menschliche Handeln und die politische Freiheit.",
                position: 3,
            },
            "Existenz eines Lebenssinns": {
                description: "Arendt betrachtete den Lebenssinn als eingebettet in die aktive Teilnahme am politischen und sozialen Leben.",
                position: 3,
            },

        },
    },

    "von Canterbury, Anselm": {
        description: "Anselm von Canterbury war ein mittelalterlicher Theologe und Philosoph, bekannt für das ontologische Argument für Gottes Existenz.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Anselm sah das Ich als von Gott erschaffenes, unsterbliches Wesen.",
                position: 3,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Anselm postulierte einen personifizierten Gott, der als höchste Realität existiert.",
                position: 3,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Anselm bejahte eine unsterbliche Seele als Teil des göttlichen Plans.",
                position: 3,
            },
            "Existenz von objektiver Moral": {
                description: "Anselm betrachtete Moral als objektiv und von Gottes Natur abgeleitet.",
                position: 3,
            },
            "Existenz eines freien Willens": {
                description: "Anselm glaubte an den freien Willen als Geschenk Gottes zur moralischen Entscheidungsfreiheit.",
                position: 3,
            },
            "Existenz eines Lebenssinns": {
                description: "Anselm sah den Lebenssinn in der Gotteserkenntnis und dem Streben nach Tugend.",
                position: 3,
            },

        },
    },


    "Chomsky, Noam": {
        description: "Noam Chomsky ist ein amerikanischer Linguist und Philosoph, bekannt für seine Theorie der generativen Grammatik und seine politische Kritik.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Chomsky sieht das Ich als veränderbares Ergebnis von Sprache und Kultur.",
                position: 2,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Chomsky äußerte sich skeptisch über Religion und glaubt nicht an einen personalen Gott.",
                position: 1,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Chomsky betrachtet das Denken als Produkt biologischer Prozesse, bleibt jedoch offen für philosophische Fragen des Bewusstseins.",
                position: 2,
            },
            "Existenz von objektiver Moral": {
                description: "Chomsky sieht moralische Prinzipien als tief in menschlicher Natur und Vernunft verwurzelt, aber nicht absolut.",
                position: 2,
            },
            "Existenz eines freien Willens": {
                description: "Chomsky bejaht freien Willen in einem natürlichen und gesellschaftlichen Rahmen.",
                position: 3,
            },
            "Existenz eines Lebenssinns": {
                description: "Chomsky sieht den Sinn des Lebens in der intellektuellen und moralischen Weiterentwicklung.",
                position: 3,
            },

        },
    },

    "Rawls, John": {
        description: "John Rawls war ein amerikanischer Philosoph, bekannt für seine Theorie der Gerechtigkeit und seine Idee des 'Schleiers des Nichtwissens'.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Rawls sieht das Ich als autonomes moralisches Wesen, das Gerechtigkeit anstrebt.",
                position: 3,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Rawls äußerte sich selten über die Existenz eines personifizierten Gottes, sah jedoch moralische Prinzipien als universell.",
                position: 2,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Rawls konzentriert sich eher auf ethische als metaphysische Fragen und äußerte sich wenig zum Dualismus.",
                position: 2,
            },
            "Existenz von objektiver Moral": {
                description: "Rawls glaubte an objektive Gerechtigkeitsprinzipien, die unabhängig von Religion oder Kultur bestehen.",
                position: 3,
            },
            "Existenz eines freien Willens": {
                description: "Rawls unterstützt freien Willen, um gerechte Entscheidungen im 'Schleier des Nichtwissens' zu treffen.",
                position: 3,
            },
            "Existenz eines Lebenssinns": {
                description: "Rawls sah den Lebenssinn im Streben nach einer gerechten und fairen Gesellschaft.",
                position: 3,
            },

        },
    },

    "Popper, Karl": {
        description: "Karl Popper war ein österreichisch-britischer Philosoph, bekannt für seine Theorie der Falsifizierbarkeit und seine Arbeiten zur offenen Gesellschaft.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Popper sah das Ich als Ergebnis von Handlungen und bewussten Entscheidungen.",
                position: 2,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Popper war skeptisch gegenüber Religion und lehnte einen personalen Gott ab.",
                position: 1,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Popper entwickelte eine Theorie des 'Drei-Welten-Modells', die das Mentale als eigenständige Dimension ansieht.",
                position: 3,
            },
            "Existenz von objektiver Moral": {
                description: "Popper hielt an universellen ethischen Prinzipien fest, die eine offene Gesellschaft ermöglichen.",
                position: 3,
            },
            "Existenz eines freien Willens": {
                description: "Popper unterstützte die Idee des freien Willens als notwendigen Bestandteil der offenen Gesellschaft.",
                position: 3,
            },
            "Existenz eines Lebenssinns": {
                description: "Popper sah den Sinn des Lebens in der wissenschaftlichen Erkenntnis und dem Streben nach Freiheit.",
                position: 3,
            },

        },
    },

    "Russell, Bertrand": {
        description: "Bertrand Russell war ein britischer Philosoph und Mathematiker, bekannt für seine Arbeiten zur Logik und seine Kritik an Religion.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Russell betrachtete das Ich eher skeptisch und sah es als Produkt der menschlichen Erfahrung.",
                position: 2,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Russell war ein bekannter Atheist und lehnte die Existenz eines personalen Gottes ab.",
                position: 1,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Russell sah die Seele skeptisch und befürwortete eine materialistische Sichtweise.",
                position: 1,
            },
            "Existenz von objektiver Moral": {
                description: "Russell sah Moral als weitgehend relativ und auf menschlicher Vernunft basierend.",
                position: 2,
            },
            "Existenz eines freien Willens": {
                description: "Russell war unentschlossen und sah den freien Willen als problematisch im Kontext der Determinismus-Debatte.",
                position: 2,
            },
            "Existenz eines Lebenssinns": {
                description: "Russell sah keinen inhärenten Lebenssinn und betrachtete das Streben nach Wissen als Zweck.",
                position: 2,
            },

        },
    },

    "Leibniz, Gottfried Wilhelm": {
        description: "Gottfried Wilhelm Leibniz war ein deutscher Philosoph und Mathematiker, bekannt für seine Theorie der Monaden und den Optimismus.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Leibniz sah das Ich als Monade, eine unteilbare und beständige Einheit des Bewusstseins.",
                position: 3,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Leibniz glaubte an einen personalen Gott, der die beste aller möglichen Welten geschaffen hat.",
                position: 3,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Leibniz bejahte den Dualismus und sah die Monaden als geistige Substanzen.",
                position: 3,
            },
            "Existenz von objektiver Moral": {
                description: "Leibniz vertrat die Existenz einer objektiven Moral, die in der göttlichen Vernunft begründet ist.",
                position: 3,
            },
            "Existenz eines freien Willens": {
                description: "Leibniz unterstützte den freien Willen im Rahmen einer prästabilierten Harmonie.",
                position: 3,
            },
            "Existenz eines Lebenssinns": {
                description: "Leibniz sah den Lebenssinn im Verständnis und Nachahmen der göttlichen Ordnung.",
                position: 3,
            },

        },
    },

    "Comte, Auguste": {
        description: "Auguste Comte war ein französischer Philosoph, Begründer des Positivismus und der Soziologie.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Comte sah das Ich als Produkt sozialer Einflüsse und Erfahrungen.",
                position: 2,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Comte lehnte einen personalen Gott ab und sah die Religion als soziologisches Phänomen.",
                position: 1,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Comte akzeptierte keinen Dualismus und sah das menschliche Bewusstsein als rein biologisch.",
                position: 1,
            },
            "Existenz von objektiver Moral": {
                description: "Comte sah moralische Prinzipien als sozial bedingt und durch wissenschaftliche Erkenntnis formbar.",
                position: 2,
            },
            "Existenz eines freien Willens": {
                description: "Comte betrachtete den freien Willen als eingeschränkt durch soziale und biologische Gesetze.",
                position: 2,
            },
            "Existenz eines Lebenssinns": {
                description: "Comte sah den Sinn des Lebens in der Verbesserung der Gesellschaft durch wissenschaftliche Fortschritte.",
                position: 3,
            },

        },
    },

    "Machiavelli, Niccolo": {
        description: "Niccolo Machiavelli war ein italienischer Philosoph und Politiker, bekannt für seine realistische Sicht auf Macht und Politik.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Machiavelli sah das Ich als flexibel, anpassungsfähig und von politischen Umständen beeinflusst.",
                position: 2,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Machiavelli zeigte wenig Interesse an einem personalen Gott und betonte die Rolle des Schicksals.",
                position: 2,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Machiavelli befasste sich nicht explizit mit dem Dualismus, sah aber den Menschen als pragmatisch und materiell.",
                position: 2,
            },
            "Existenz von objektiver Moral": {
                description: "Machiavelli betonte die politische Realität und sah moralische Flexibilität als notwendig an.",
                position: 1,
            },
            "Existenz eines freien Willens": {
                description: "Machiavelli bejahte den freien Willen, sah ihn jedoch durch Schicksal und Machtkämpfe eingeschränkt.",
                position: 2,
            },
            "Existenz eines Lebenssinns": {
                description: "Für Machiavelli bestand der Lebenssinn im Erfolg und dem Streben nach politischer Macht.",
                position: 2,
            },

        },
    },
    "Demokrit": {
        description: "Demokrit war ein antiker griechischer Philosoph und Atomist, bekannt für seine Lehre, dass alles aus Atomen und leerem Raum besteht.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Demokrit sah das Ich als eine Ansammlung von Atomen, die keinen festen Kern besitzt.",
                position: 1,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Demokrit lehnte die Existenz eines personalen Gottes ab und sah alles als natürliche Prozesse an.",
                position: 1,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Er sah die Seele als eine besondere Anordnung von Atomen, die mit dem Körper vergeht.",
                position: 2,
            },
            "Existenz von objektiver Moral": {
                description: "Demokrit glaubte an ethische Prinzipien, die zur Harmonie beitragen, aber nicht als göttlich fundiert.",
                position: 2,
            },
            "Existenz eines freien Willens": {
                description: "Für Demokrit war freier Wille stark eingeschränkt durch die Naturgesetze und Atombewegungen.",
                position: 1,
            },
            "Existenz eines Lebenssinns": {
                description: "Der Sinn des Lebens bestand für Demokrit im Glück, das durch seelische Harmonie erreicht wird.",
                position: 2,
            },
        },
    },

    "Anaximander": {
        description: "Anaximander war ein vorsokratischer griechischer Philosoph, der das Prinzip des 'Apeiron' als Ursprung aller Dinge postulierte.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Anaximander sah das Ich als vergänglich und durch das unendliche Prinzip des Apeiron beeinflusst.",
                position: 2,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Anaximander vertrat kein Bild eines personalen Gottes, sondern das Apeiron als unendliches Prinzip.",
                position: 1,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Anaximander sprach dem Menschen keine unsterbliche Seele zu, sondern sah ihn als Teil des natürlichen Kreislaufs.",
                position: 2,
            },
            "Existenz von objektiver Moral": {
                description: "Für Anaximander existiert eine kosmische Ordnung, die als moralische Richtschnur verstanden werden kann.",
                position: 2,
            },
            "Existenz eines freien Willens": {
                description: "Anaximander hielt den freien Willen für begrenzt durch kosmische Prinzipien.",
                position: 2,
            },
            "Existenz eines Lebenssinns": {
                description: "Der Lebenssinn bestand für Anaximander im Einklang mit dem kosmischen Prinzip des Apeiron.",
                position: 2,
            },
        },
    },

    "Plotin": {
        description: "Plotin war ein antiker Philosoph und Begründer des Neuplatonismus, der die Seele als Streben nach dem 'Einen' sah.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Für Plotin ist das Ich eine unsterbliche Seele, die nach Vereinigung mit dem 'Einen' strebt.",
                position: 3,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Plotin beschrieb das 'Eine' als eine überpersonale, schöpferische Quelle.",
                position: 2,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Plotin bejahte den Dualismus, wobei die Seele vom Körper getrennt und unsterblich ist.",
                position: 3,
            },
            "Existenz von objektiver Moral": {
                description: "Moral wird durch die Nähe zum 'Einen' objektiv bestimmt und drückt kosmische Ordnung aus.",
                position: 3,
            },
            "Existenz eines freien Willens": {
                description: "Plotin befürwortete freien Willen, der es der Seele erlaubt, dem 'Einen' näher zu kommen.",
                position: 3,
            },
            "Existenz eines Lebenssinns": {
                description: "Der Sinn des Lebens liegt im Streben der Seele, zum 'Einen' zurückzukehren.",
                position: 3,
            },
        },
    },

    "Aurel, Mark": {
        description: "Mark Aurel war ein römischer Kaiser und Stoiker, bekannt für seine philosophischen Betrachtungen über Tugend und das Leben.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Mark Aurel betrachtete das Ich als vernünftige Seele, die beständig nach Tugend strebt.",
                position: 3,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Er sah das Göttliche als universelle Vernunft, aber nicht als personalen Gott.",
                position: 2,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Die Seele wird als vom Körper getrennt betrachtet und bleibt nach dem Tod bestehen.",
                position: 2,
            },
            "Existenz von objektiver Moral": {
                description: "Für Mark Aurel ist die Moral objektiv und orientiert sich an der kosmischen Ordnung.",
                position: 3,
            },
            "Existenz eines freien Willens": {
                description: "Freier Wille ist notwendig, um gemäß der stoischen Tugend zu handeln.",
                position: 3,
            },
            "Existenz eines Lebenssinns": {
                description: "Der Sinn des Lebens liegt für ihn im tugendhaften Leben und im Einklang mit der Natur.",
                position: 3,
            },
        },
    },

    "Augustinus": {
        description: "Augustinus war ein christlicher Philosoph und Theologe, der die Idee der Erbsünde und göttlichen Gnade prägte.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Für Augustinus ist das Ich eine beständige Seele, die im göttlichen Heil ihren Sinn findet.",
                position: 3,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Augustinus sah Gott als personalen und allmächtigen Schöpfer.",
                position: 3,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Er bejahte den Dualismus und betrachtete die Seele als unsterblich.",
                position: 3,
            },
            "Existenz von objektiver Moral": {
                description: "Moral ist für Augustinus objektiv und durch Gottes Gebote bestimmt.",
                position: 3,
            },
            "Existenz eines freien Willens": {
                description: "Freier Wille existiert, wird jedoch durch die Erbsünde beeinflusst.",
                position: 2,
            },
            "Existenz eines Lebenssinns": {
                description: "Der Lebenssinn liegt für Augustinus in der Liebe zu Gott und der Erlangung des ewigen Heils.",
                position: 3,
            },
        },
    },

    "Averroes": {
        description: "Averroes war ein muslimischer Philosoph und Kommentator von Aristoteles, bekannt für seine Versuche, Vernunft und Glauben zu verbinden.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Averroes sah das Ich als individuelle Seele, die durch Wissen vervollkommnet wird.",
                position: 2,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Er bejahte einen personalen Gott als Schöpfer und Ursprung der Vernunft.",
                position: 3,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Die Seele ist nach Averroes unsterblich und von körperlichen Beschränkungen unabhängig.",
                position: 3,
            },
            "Existenz von objektiver Moral": {
                description: "Moral wird als objektiv betrachtet und durch göttliche Gesetze festgelegt.",
                position: 3,
            },
            "Existenz eines freien Willens": {
                description: "Freier Wille existiert im Einklang mit göttlicher Vorsehung und Vernunft.",
                position: 3,
            },
            "Existenz eines Lebenssinns": {
                description: "Der Lebenssinn liegt für Averroes im Streben nach Wissen und Tugend zur Ehre Gottes.",
                position: 3,
            },
        },
    },

    "de Montaigne, Michel": {
        description: "Michel de Montaigne war ein französischer Philosoph und Essayist, bekannt für seine skeptischen Reflexionen über das menschliche Leben.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Montaigne sah das Ich als veränderlich und geprägt von Selbstzweifel und Reflexion.",
                position: 2,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Er zeigte sich skeptisch gegenüber einem personalen Gott und betrachtete Glauben als persönlichen Weg.",
                position: 2,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Montaigne äußerte sich selten zum Dualismus und sah das Selbst als ständig wandelbar.",
                position: 1,
            },
            "Existenz von objektiver Moral": {
                description: "Er zweifelte an objektiver Moral und befürwortete eine individualisierte, selbstkritische Ethik.",
                position: 1,
            },
            "Existenz eines freien Willens": {
                description: "Montaigne erkannte freien Willen an, sah ihn jedoch als eingeschränkt durch menschliche Schwächen.",
                position: 2,
            },
            "Existenz eines Lebenssinns": {
                description: "Für Montaigne bestand der Lebenssinn im Verständnis der menschlichen Natur und der Selbstreflexion.",
                position: 2,
            },
        },
    },

    "de Spinoza, Baruch": {
        description: "Baruch de Spinoza war ein rationalistischer Philosoph, der Gott als die gesamte Natur begriff.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Für Spinoza ist das Ich ein Teil der universellen Substanz und daher illusionär.",
                position: 1,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Spinoza lehnte einen personalen Gott ab und sah Gott als identisch mit der Natur.",
                position: 1,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Er verwarf den Dualismus und sah Geist und Körper als zwei Seiten derselben Substanz.",
                position: 1,
            },
            "Existenz von objektiver Moral": {
                description: "Für Spinoza existiert objektive Moral, die durch die Vernunft und die Harmonie mit der Natur bestimmt wird.",
                position: 3,
            },
            "Existenz eines freien Willens": {
                description: "Spinoza verneinte den freien Willen und sah Handlungen als durch Naturgesetze determiniert.",
                position: 1,
            },
            "Existenz eines Lebenssinns": {
                description: "Der Sinn des Lebens besteht für Spinoza im Erreichen von Wissen und Harmonie mit der Natur.",
                position: 3,
            },
        },
    },

    "Baudrillard, Jean": {
        description: "Jean Baudrillard war ein französischer Philosoph und Soziologe, der die Theorie des Hyperrealismus entwickelte.",
        details: {
            "Existenz eines Ichs bzw. beständigen Selbst": {
                description: "Baudrillard sah das Ich als fragmentiert und durch simulierte Realität beeinflusst.",
                position: 1,
            },
            "Existenz eines (personifizierten) Gottes": {
                description: "Baudrillard betrachtete Gott als überflüssig in einer Welt des Hyperrealismus.",
                position: 1,
            },
            "Existenz einer Seele (Geist-Körper-Dualismus)": {
                description: "Er lehnte eine beständige Seele ab und sah das Selbst als durch Medien und Simulation geprägt.",
                position: 1,
            },
            "Existenz von objektiver Moral": {
                description: "Baudrillard verwarf objektive Moral und sah ethische Werte als durch Medien verzerrt.",
                position: 1,
            },
            "Existenz eines freien Willens": {
                description: "Freier Wille wird als durch die Simulation und Medienmacht beeinflusst und stark begrenzt betrachtet.",
                position: 1,
            },
            "Existenz eines Lebenssinns": {
                description: "Baudrillard sah keinen festen Lebenssinn und betrachtete das Leben als eine Simulation ohne tiefere Bedeutung.",
                position: 1,
            },
        },
    },


};


