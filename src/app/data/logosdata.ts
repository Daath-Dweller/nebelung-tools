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
        "philosophische Strömung": [
            "Stoizismus",
            "Zynismus",
            "Antinatalismus",
            "Idealismus",
            "Realismus",
            "Empirismus",
            "Rationalismus",
            "Existentialismus",
            "Nihilismus",
            "Utilitarismus",
            "Strukturalismus",
            "Pragmatismus",
            "Poststrukturalismus",
            "Relativismus",
            "Konsequentialismus",
            "Deontologismus"
        ],
    Religion: [
        "Shinto",
        "Christentum",
        "Buddhismus",
        "Hinduismus",
        "Judentum",
        "Islam",
        "Asatru",
        "Sikhismus",
        "Taoismus",
        "Konfuzianismus",
        "Gnostizismus",
        "Zoroastrismus",
        "Voodoo"
    ],
    Person: [
        "Nietzsche",
        "Aristoteles",
        "Cioran",
        "Platon",
        "Hobbes",
        "Descartes",
        "Feuerbach",
        "Frege",
        "Wittgenstein",
        "Schopenhauer",
        "Sokrates",
        "John Locke",
        "Spinoza",
        "Kant",
        "Sartre",
        "Camus",
        "Marx",
        "Foucault",
        "Heidegger",
        "Epikur",
        "Thomas von Aquin",
        "Diogenes",
        "Konfuzius",
        "Laotse",
        "Derrida",
        "Francis Bacon"
    ],
};

export const themeOptions = ["das Ich", "ein personifizierter Gott"];

export const logosEntries: { [key: string]: LogosEntry } = {
    Sokrates: {
        description: "Sokrates war ein antiker griechischer Philosoph, bekannt für seine dialektische Methode und die Betonung ethischer Reflexion.",
        details: {
            "das Ich": {
                description: "Für Sokrates ist das Ich eine suchende Vernunft, die durch Selbsterkenntnis moralische Wahrheit findet.",
                position: 2,
            },
            "ein personifizierter Gott": {
                description: "Sokrates akzeptierte göttliche Eingebungen, jedoch ohne klaren personifizierten Gott.",
                position: 2,
            },
        },
    },
    "John Locke": {
        description: "John Locke war ein englischer Philosoph, bekannt für seine Theorien des Liberalismus und des empirischen Wissens.",
        details: {
            "das Ich": {
                description: "Locke sieht das Ich als Tabula Rasa, das durch Erfahrung geformt wird.",
                position: 3,
            },
            "ein personifizierter Gott": {
                description: "Locke glaubte an einen personifizierten Schöpfergott als Grundlage der Moral.",
                position: 3,
            },
        },
    },
    Spinoza: {
        description: "Baruch Spinoza war ein rationalistischer Philosoph, der Gott als Natur und universelle Substanz auffasste.",
        details: {
            "das Ich": {
                description: "Für Spinoza ist das Ich ein Teil der Substanz Gottes, das sich selbst als illusorisch getrennt erfährt.",
                position: 2,
            },
            "ein personifizierter Gott": {
                description: "Spinoza lehnte einen personifizierten Gott ab und verstand Gott als Natur.",
                position: 1,
            },
        },
    },
    Kant: {
        description: "Immanuel Kant war ein deutscher Philosoph, der den Kategorischen Imperativ und den transzendentalen Idealismus entwickelte.",
        details: {
            "das Ich": {
                description: "Kant sieht das Ich als erkenntnistheoretisches Subjekt, das durch Vernunft moralische Gesetze setzt.",
                position: 3,
            },
            "ein personifizierter Gott": {
                description: "Kant postulierte einen Gott als moralische Idee, ohne klare Personifizierung.",
                position: 2,
            },
        },
    },
    Sartre: {
        description: "Jean-Paul Sartre war ein französischer Existentialist, der Freiheit und Verantwortung des Individuums betonte.",
        details: {
            "das Ich": {
                description: "Für Sartre ist das Ich zur Freiheit verurteilt und muss sich selbst definieren.",
                position: 1,
            },
            "ein personifizierter Gott": {
                description: "Sartre lehnte einen personifizierten Gott ab und sah das Leben als absurde Freiheit.",
                position: 1,
            },
        },
    },
    Camus: {
        description: "Albert Camus war ein französischer Philosoph des Absurdismus, der die Sinnlosigkeit des Lebens betonte.",
        details: {
            "das Ich": {
                description: "Camus sieht das Ich als Individuum, das im Angesicht des Absurden handeln muss.",
                position: 1,
            },
            "ein personifizierter Gott": {
                description: "Camus lehnte die Existenz eines personifizierten Gottes als Trostillusion ab.",
                position: 1,
            },
        },
    },
    Marx: {
        description: "Karl Marx war ein deutscher Philosoph und Ökonom, der den dialektischen Materialismus und den Kommunismus entwickelte.",
        details: {
            "das Ich": {
                description: "Marx sieht das Ich als soziales Wesen, das durch Klassenverhältnisse geprägt ist.",
                position: 2,
            },
            "ein personifizierter Gott": {
                description: "Marx lehnte Religion und einen personifizierten Gott als 'Opium des Volkes' ab.",
                position: 1,
            },
        },
    },
    Foucault: {
        description: "Michel Foucault war ein französischer Philosoph, bekannt für seine Studien zu Macht und Diskursen.",
        details: {
            "das Ich": {
                description: "Foucault sieht das Ich als Konstruktion, die von Machtstrukturen und Diskursen beeinflusst ist.",
                position: 2,
            },
            "ein personifizierter Gott": {
                description: "Foucault äußerte sich kaum zu einem personifizierten Gott und analysierte Religion als Machtinstrument.",
                position: 1,
            },
        },
    },
    Heidegger: {
        description: "Martin Heidegger war ein deutscher Philosoph, der das Konzept des Seins und der Existenz untersuchte.",
        details: {
            "das Ich": {
                description: "Für Heidegger ist das Ich ein Dasein, das im Sein verankert ist und zum Tode hin lebt.",
                position: 2,
            },
            "ein personifizierter Gott": {
                description: "Heidegger lehnte einen personifizierten Gott ab und konzentrierte sich auf das Sein.",
                position: 1,
            },
        },
    },
    Epikur: {
        description: "Epikur war ein antiker griechischer Philosoph, der die Bedeutung von Glück und dem Vermeiden von Schmerz betonte.",
        details: {
            "das Ich": {
                description: "Epikur sieht das Ich als empfindendes Wesen, das nach Lust und Schmerzvermeidung strebt.",
                position: 3,
            },
            "ein personifizierter Gott": {
                description: "Epikur glaubte an Götter, die jedoch nicht in das menschliche Leben eingreifen.",
                position: 2,
            },
        },
    },
    "Thomas von Aquin": {
        description: "Thomas von Aquin war ein mittelalterlicher Theologe und Philosoph, der den christlichen Glauben mit der Vernunft verband.",
        details: {
            "das Ich": {
                description: "Thomas sieht das Ich als Seele, die in Beziehung zu Gott steht und durch Tugend vervollkommnet wird.",
                position: 3,
            },
            "ein personifizierter Gott": {
                description: "Thomas von Aquin beschreibt Gott als personifiziertes Wesen, das das Universum und die Moral lenkt.",
                position: 3,
            },
        },
    },
    Diogenes: {
        description: "Diogenes war ein antiker griechischer Philosoph und Zyniker, bekannt für seine radikale Ablehnung gesellschaftlicher Konventionen.",
        details: {
            "das Ich": {
                description: "Diogenes sieht das Ich als naturverbunden und unabhängig von sozialem Einfluss.",
                position: 1,
            },
            "ein personifizierter Gott": {
                description: "Diogenes lehnte die Vorstellung eines personifizierten Gottes ab und betonte die Einfachheit der Natur.",
                position: 1,
            },
        },
    },
    Konfuzius: {
        description: "Konfuzius war ein chinesischer Philosoph, der ethische und soziale Prinzipien für ein harmonisches Leben betonte.",
        details: {
            "das Ich": {
                description: "Für Konfuzius ist das Ich ein Teil eines größeren sozialen Gefüges, das durch moralische Tugenden gedeiht.",
                position: 2,
            },
            "ein personifizierter Gott": {
                description: "Konfuzius spricht von einem 'Himmel', jedoch ohne personifizierten Gott.",
                position: 1,
            },
        },
    },
    Laotse: {
        description: "Laotse war ein legendärer chinesischer Philosoph und Begründer des Taoismus.",
        details: {
            "das Ich": {
                description: "Für Laotse ist das Ich ein Teil des Dao und sollte sich an die natürliche Ordnung anpassen.",
                position: 2,
            },
            "ein personifizierter Gott": {
                description: "Laotse spricht vom Dao, einer unpersönlichen Kraft, jedoch nicht von einem personifizierten Gott.",
                position: 1,
            },
        },
    },
    Derrida: {
        description: "Jacques Derrida war ein französischer Philosoph und Begründer der Dekonstruktion.",
        details: {
            "das Ich": {
                description: "Derrida sieht das Ich als durch Sprache und Bedeutungsverschiebung geformt.",
                position: 2,
            },
            "ein personifizierter Gott": {
                description: "Derrida hinterfragte die Stabilität des Gottesbegriffs und lehnte eine feste Personifizierung ab.",
                position: 1,
            },
        },
    },
    "Francis Bacon": {
        description: "Francis Bacon war ein englischer Philosoph und Begründer des Empirismus.",
        details: {
            "das Ich": {
                description: "Bacon sieht das Ich als erkenntnissuchendes Wesen, das durch Erfahrung die Natur erforscht.",
                position: 3,
            },
            "ein personifizierter Gott": {
                description: "Bacon sah einen Schöpfer als Ursprung der Naturgesetze, jedoch ohne klare Personifizierung.",
                position: 2,
            },
        },
    },
    Asatru: {
        description: "Asatru ist eine Form des Neopaganismus, die auf die germanische Mythologie zurückgreift und die Verehrung nordischer Götter betont.",
        details: {
            "das Ich": {
                description: "Im Asatru ist das Ich mit den Ahnen und der Natur verbunden und agiert im Einklang mit den Göttern.",
                position: 2,
            },
            "ein personifizierter Gott": {
                description: "Asatru verehrt viele personifizierte Götter wie Odin und Thor als reale Wesenheiten.",
                position: 3,
            },
        },
    },
    Sikhismus: {
        description: "Der Sikhismus ist eine monotheistische Religion, die in Indien gegründet wurde und Gleichheit und soziale Gerechtigkeit betont.",
        details: {
            "das Ich": {
                description: "Im Sikhismus wird das Ich als spirituelle Seele gesehen, die mit dem Schöpfer verbunden ist.",
                position: 3,
            },
            "ein personifizierter Gott": {
                description: "Der Sikhismus verehrt einen einzigen, nicht personifizierten Gott, der als formlos und allgegenwärtig gilt.",
                position: 3,
            },
        },
    },
    Taoismus: {
        description: "Der Taoismus ist eine chinesische Religion und Philosophie, die im Einklang mit dem Dao, dem Weg des Universums, lebt.",
        details: {
            "das Ich": {
                description: "Im Taoismus wird das Ich als unbeständiger Teil des größeren Kosmos betrachtet, in Harmonie mit dem Dao.",
                position: 2,
            },
            "ein personifizierter Gott": {
                description: "Der Taoismus verehrt keine personifizierten Götter, sondern das Dao als unpersönliche Kraft.",
                position: 1,
            },
        },
    },
    Konfuzianismus: {
        description: "Der Konfuzianismus ist eine chinesische Philosophie, die Ethik und soziale Moral betont.",
        details: {
            "das Ich": {
                description: "Im Konfuzianismus ist das Ich stark von familiären und sozialen Bindungen geprägt.",
                position: 2,
            },
            "ein personifizierter Gott": {
                description: "Der Konfuzianismus beinhaltet keinen personifizierten Gott, sondern ein Konzept von moralischem Himmel und Tugend.",
                position: 1,
            },
        },
    },
    Gnostizismus: {
        description: "Der Gnostizismus ist eine religiöse Bewegung, die Erlösung durch geheimes Wissen anstrebt.",
        details: {
            "das Ich": {
                description: "Im Gnostizismus ist das Ich ein göttlicher Funken, der von der materiellen Welt befreit werden muss.",
                position: 2,
            },
            "ein personifizierter Gott": {
                description: "Der Gnostizismus verehrt einen verborgenen, personifizierten Gott, getrennt von dem Schöpfer der materiellen Welt.",
                position: 2,
            },
        },
    },
    Zoroastrismus: {
        description: "Der Zoroastrismus ist eine der ältesten monotheistischen Religionen und betont den Kampf zwischen Gut und Böse.",
        details: {
            "das Ich": {
                description: "Im Zoroastrismus ist das Ich Teil des kosmischen Kampfes und strebt nach Reinheit und Wahrheit.",
                position: 3,
            },
            "ein personifizierter Gott": {
                description: "Der Zoroastrismus verehrt Ahura Mazda als personifizierten Gott und Vertreter des Guten.",
                position: 3,
            },
        },
    },
    Voodoo: {
        description: "Voodoo ist eine synkretistische Religion afrikanischer Herkunft, die Geister und Ahnen verehrt.",
        details: {
            "das Ich": {
                description: "Im Voodoo wird das Ich als Teil eines Netzwerks von Ahnen und spirituellen Kräften betrachtet.",
                position: 2,
            },
            "ein personifizierter Gott": {
                description: "Voodoo verehrt viele personifizierte Geister und Gottheiten, darunter auch Ahnengeister.",
                position: 3,
            },
        },
    },
    Relativismus: {
        description: "Relativismus ist die Ansicht, dass Wahrheit und Moral von individuellen oder kulturellen Kontexten abhängen.",
        details: {
            "das Ich": {
                description: "Im Relativismus ist das Ich ein Produkt seiner kulturellen und individuellen Perspektiven.",
                position: 2,
            },
            "ein personifizierter Gott": {
                description: "Relativismus sieht die Vorstellung eines personifizierten Gottes als kulturell bedingt und nicht absolut an.",
                position: 2,
            },
        },
    },
    Konsequentialismus: {
        description: "Konsequentialismus ist eine ethische Theorie, die Handlungen nach ihren Konsequenzen bewertet.",
        details: {
            "das Ich": {
                description: "Im Konsequentialismus ist das Ich verantwortlich für die Ergebnisse seiner Handlungen.",
                position: 3,
            },
            "ein personifizierter Gott": {
                description: "Ein personifizierter Gott spielt im Konsequentialismus oft keine zentrale Rolle, da moralisches Handeln an den Ergebnissen gemessen wird.",
                position: 2,
            },
        },
    },
    Deontologismus: {
        description: "Deontologismus ist eine ethische Theorie, die Handlungen nach festen moralischen Prinzipien bewertet, unabhängig von den Konsequenzen.",
        details: {
            "das Ich": {
                description: "Im Deontologismus ist das Ich verpflichtet, moralische Regeln zu befolgen, ungeachtet der Konsequenzen.",
                position: 3,
            },
            "ein personifizierter Gott": {
                description: "Ein personifizierter Gott kann im Deontologismus eine Rolle spielen, wenn er als Quelle moralischer Prinzipien gilt.",
                position: 3,
            },
        },
    },
    Zynismus: {
        description: "Der Zynismus ist eine Philosophie, die gesellschaftliche Normen und Werte radikal hinterfragt und oft verachtet.",
        details: {
            "das Ich": {
                description: "Im Zynismus wird das Ich als egoistisch und von natürlichen Trieben getrieben betrachtet.",
                position: 2,
            },
            "ein personifizierter Gott": {
                description: "Zynismus lehnt die Existenz eines personifizierten Gottes ab und betrachtet Religion oft als Mittel der Täuschung.",
                position: 1,
            },
        },
    },
    Antinatalismus: {
        description: "Antinatalismus ist die Ansicht, dass es moralisch falsch ist, Leben zu erzeugen, aufgrund des inhärenten Leidens der Existenz.",
        details: {
            "das Ich": {
                description: "Im Antinatalismus ist das Ich eine Last, die durch Geburt aufoktroyiert wird.",
                position: 1,
            },
            "ein personifizierter Gott": {
                description: "Antinatalismus lehnt die Vorstellung eines wohlwollenden Schöpfers angesichts des Leides ab.",
                position: 1,
            },
        },
    },
    Idealismus: {
        description: "Idealismus ist eine Philosophie, die betont, dass Realität primär durch den Geist konstruiert ist.",
        details: {
            "das Ich": {
                description: "Im Idealismus ist das Ich eine zentrale Wahrnehmungseinheit, die die Welt interpretiert.",
                position: 3,
            },
            "ein personifizierter Gott": {
                description: "Idealismus sieht das Göttliche als durch den Geist geprägt, oft ohne klare Personifizierung.",
                position: 2,
            },
        },
    },
    Realismus: {
        description: "Realismus ist die Philosophie, die davon ausgeht, dass die Welt unabhängig vom menschlichen Bewusstsein existiert.",
        details: {
            "das Ich": {
                description: "Im Realismus ist das Ich ein Bewusstsein, das die objektive Realität erfährt.",
                position: 3,
            },
            "ein personifizierter Gott": {
                description: "Realismus schließt einen personifizierten Gott oft nicht aus, konzentriert sich jedoch auf beobachtbare Realität.",
                position: 2,
            },
        },
    },
    Empirismus: {
        description: "Empirismus betont, dass Wissen hauptsächlich durch Sinneserfahrungen gewonnen wird.",
        details: {
            "das Ich": {
                description: "Im Empirismus wird das Ich durch seine Erfahrungen definiert und formt so seine Realität.",
                position: 3,
            },
            "ein personifizierter Gott": {
                description: "Empirismus hat oft wenig Bezug zu einem personifizierten Gott, da er schwer erfahrbar ist.",
                position: 2,
            },
        },
    },
    Rationalismus: {
        description: "Rationalismus ist die Auffassung, dass Wissen vor allem durch Vernunft erworben wird.",
        details: {
            "das Ich": {
                description: "Im Rationalismus wird das Ich als Vernunftwesen betrachtet, das abstrakte Wahrheiten erkennt.",
                position: 3,
            },
            "ein personifizierter Gott": {
                description: "Ein personifizierter Gott wird im Rationalismus oft durch logische Begründungen hinterfragt.",
                position: 2,
            },
        },
    },
    Existentialismus: {
        description: "Existentialismus betont die Freiheit des Individuums und die Sinnsuche in einer oft absurden Welt.",
        details: {
            "das Ich": {
                description: "Im Existentialismus ist das Ich zur eigenen Schöpfung und zur Sinnsuche verdammt.",
                position: 1,
            },
            "ein personifizierter Gott": {
                description: "Existentialismus sieht einen personifizierten Gott als irrelevant oder nicht-existent an.",
                position: 1,
            },
        },
    },
    Nihilismus: {
        description: "Nihilismus ist die philosophische Ansicht, dass Leben und Existenz keinen inhärenten Sinn haben.",
        details: {
            "das Ich": {
                description: "Im Nihilismus ist das Ich eine Illusion ohne Bedeutung oder Ziel.",
                position: 1,
            },
            "ein personifizierter Gott": {
                description: "Nihilismus lehnt die Existenz eines personifizierten Gottes als sinnlos ab.",
                position: 1,
            },
        },
    },
    Utilitarismus: {
        description: "Utilitarismus ist eine Ethik, die Handlungen nach dem größten Nutzen für das größte Glück bewertet.",
        details: {
            "das Ich": {
                description: "Im Utilitarismus ist das Ich ein Teil des Ganzen, das nach maximalem Glück für alle strebt.",
                position: 2,
            },
            "ein personifizierter Gott": {
                description: "Ein personifizierter Gott wird im Utilitarismus oft irrelevant, wenn das Glück maximiert wird.",
                position: 2,
            },
        },
    },
    Strukturalismus: {
        description: "Strukturalismus analysiert gesellschaftliche und sprachliche Strukturen als bestimmend für das Individuum.",
        details: {
            "das Ich": {
                description: "Im Strukturalismus ist das Ich ein Produkt gesellschaftlicher und sprachlicher Strukturen.",
                position: 2,
            },
            "ein personifizierter Gott": {
                description: "Strukturalismus sieht religiöse Konzepte oft als gesellschaftliche Konstruktionen.",
                position: 2,
            },
        },
    },
    Pragmatismus: {
        description: "Pragmatismus bewertet Ideen nach ihrer praktischen Umsetzbarkeit und ihren Ergebnissen.",
        details: {
            "das Ich": {
                description: "Im Pragmatismus ist das Ich flexibel und anwendbar auf praktische Ziele und Ergebnisse.",
                position: 3,
            },
            "ein personifizierter Gott": {
                description: "Pragmatismus sieht den Nutzen eines personifizierten Gottes an seinem Effekt gemessen.",
                position: 2,
            },
        },
    },
    Poststrukturalismus: {
        description: "Poststrukturalismus hinterfragt feste Strukturen und die Stabilität von Sprache und Bedeutung.",
        details: {
            "das Ich": {
                description: "Im Poststrukturalismus ist das Ich fragmentiert und durch flexible Bedeutungen geprägt.",
                position: 2,
            },
            "ein personifizierter Gott": {
                description: "Poststrukturalismus lehnt einen festen personifizierten Gott ab und hinterfragt alle festen Bedeutungen.",
                position: 2,
            },
        },
    },
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
