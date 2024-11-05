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

export const themeOptions = ["das Ich (Existenz eines beständigen Selbst)", "ein personifizierter Gott", "Geist-Körper-Dualismus (Existenz einer Seele)", "Existenz von objektiver Moral", "Existenz eines freien Willens"];

export const logosEntries: { [key: string]: LogosEntry } = {
    Sokrates: {
        description: "Sokrates war ein antiker griechischer Philosoph, bekannt für seine dialektische Methode und die Betonung ethischer Reflexion.",
        details: {
            "das Ich (Existenz eines beständigen Selbst)": {
                description: "Für Sokrates ist das Ich eine suchende Vernunft, die durch Selbsterkenntnis moralische Wahrheit findet.",
                position: 2,
            },
            "ein personifizierter Gott": {
                description: "Sokrates akzeptierte göttliche Eingebungen, jedoch ohne klaren personifizierten Gott.",
                position: 2,
            },
            "Geist-Körper-Dualismus (Existenz einer Seele)": {
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
        },
    },
    "John Locke": {
        description: "John Locke war ein englischer Philosoph, bekannt für seine Theorien des Liberalismus und des empirischen Wissens.",
        details: {
            "das Ich (Existenz eines beständigen Selbst)": {
                description: "Locke sieht das Ich als Tabula Rasa, das durch Erfahrung geformt wird.",
                position: 3,
            },
            "ein personifizierter Gott": {
                description: "Locke glaubte an einen personifizierten Schöpfergott als Grundlage der Moral.",
                position: 3,
            },
            "Geist-Körper-Dualismus (Existenz einer Seele)": {
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
        },
    },
    Spinoza: {
        description: "Baruch Spinoza war ein rationalistischer Philosoph, der Gott als Natur und universelle Substanz auffasste.",
        details: {
            "das Ich (Existenz eines beständigen Selbst)": {
                description: "Für Spinoza ist das Ich ein Teil der Substanz Gottes, das sich selbst als illusorisch getrennt erfährt.",
                position: 2,
            },
            "ein personifizierter Gott": {
                description: "Spinoza lehnte einen personifizierten Gott ab und verstand Gott als Natur.",
                position: 1,
            },
            "Geist-Körper-Dualismus (Existenz einer Seele)": {
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
        },
    },
    Kant: {
        description: "Immanuel Kant war ein deutscher Philosoph, der den Kategorischen Imperativ und den transzendentalen Idealismus entwickelte.",
        details: {
            "das Ich (Existenz eines beständigen Selbst)": {
                description: "Kant sieht das Ich als erkenntnistheoretisches Subjekt, das durch Vernunft moralische Gesetze setzt.",
                position: 3,
            },
            "ein personifizierter Gott": {
                description: "Kant postulierte einen Gott als moralische Idee, ohne klare Personifizierung.",
                position: 2,
            },
            "Geist-Körper-Dualismus (Existenz einer Seele)": {
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
        },
    },
    Sartre: {
        description: "Jean-Paul Sartre war ein französischer Existentialist, der Freiheit und Verantwortung des Individuums betonte.",
        details: {
            "das Ich (Existenz eines beständigen Selbst)": {
                description: "Für Sartre ist das Ich zur Freiheit verurteilt und muss sich selbst definieren.",
                position: 1,
            },
            "ein personifizierter Gott": {
                description: "Sartre lehnte einen personifizierten Gott ab und sah das Leben als absurde Freiheit.",
                position: 1,
            },
            "Geist-Körper-Dualismus (Existenz einer Seele)": {
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
        },
    },


    Camus: {
        description: "Albert Camus war ein französischer Philosoph des Absurdismus, der die Sinnlosigkeit des Lebens betonte.",
        details: {
            "das Ich (Existenz eines beständigen Selbst)": {
                description: "Camus sieht das Ich als Individuum, das im Angesicht des Absurden handeln muss.",
                position: 1,
            },
            "ein personifizierter Gott": {
                description: "Camus lehnte die Existenz eines personifizierten Gottes als Trostillusion ab.",
                position: 1,
            },
            "Geist-Körper-Dualismus (Existenz einer Seele)": {
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
        },
    },
    Marx: {
        description: "Karl Marx war ein deutscher Philosoph und Ökonom, der den dialektischen Materialismus und den Kommunismus entwickelte.",
        details: {
            "das Ich (Existenz eines beständigen Selbst)": {
                description: "Marx sieht das Ich als soziales Wesen, das durch Klassenverhältnisse geprägt ist.",
                position: 2,
            },
            "ein personifizierter Gott": {
                description: "Marx lehnte Religion und einen personifizierten Gott als 'Opium des Volkes' ab.",
                position: 1,
            },
            "Geist-Körper-Dualismus (Existenz einer Seele)": {
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
        },
    },
    Foucault: {
        description: "Michel Foucault war ein französischer Philosoph, bekannt für seine Studien zu Macht und Diskursen.",
        details: {
            "das Ich (Existenz eines beständigen Selbst)": {
                description: "Foucault sieht das Ich als Konstruktion, die von Machtstrukturen und Diskursen beeinflusst ist.",
                position: 2,
            },
            "ein personifizierter Gott": {
                description: "Foucault äußerte sich kaum zu einem personifizierten Gott und analysierte Religion als Machtinstrument.",
                position: 1,
            },
            "Geist-Körper-Dualismus (Existenz einer Seele)": {
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
        },
    },
    Heidegger: {
        description: "Martin Heidegger war ein deutscher Philosoph, der das Konzept des Seins und der Existenz untersuchte.",
        details: {
            "das Ich (Existenz eines beständigen Selbst)": {
                description: "Für Heidegger ist das Ich ein Dasein, das im Sein verankert ist und zum Tode hin lebt.",
                position: 2,
            },
            "ein personifizierter Gott": {
                description: "Heidegger lehnte einen personifizierten Gott ab und konzentrierte sich auf das Sein.",
                position: 1,
            },
            "Geist-Körper-Dualismus (Existenz einer Seele)": {
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
        },
    },
    Epikur: {
        description: "Epikur war ein antiker griechischer Philosoph, der die Bedeutung von Glück und dem Vermeiden von Schmerz betonte.",
        details: {
            "das Ich (Existenz eines beständigen Selbst)": {
                description: "Epikur sieht das Ich als empfindendes Wesen, das nach Lust und Schmerzvermeidung strebt.",
                position: 3,
            },
            "ein personifizierter Gott": {
                description: "Epikur glaubte an Götter, die jedoch nicht in das menschliche Leben eingreifen.",
                position: 2,
            },
            "Geist-Körper-Dualismus (Existenz einer Seele)": {
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
        },
    },
    "Thomas von Aquin": {
        description: "Thomas von Aquin war ein mittelalterlicher Theologe und Philosoph, der den christlichen Glauben mit der Vernunft verband.",
        details: {
            "das Ich (Existenz eines beständigen Selbst)": {
                description: "Thomas sieht das Ich als Seele, die in Beziehung zu Gott steht und durch Tugend vervollkommnet wird.",
                position: 3,
            },
            "ein personifizierter Gott": {
                description: "Thomas von Aquin beschreibt Gott als personifiziertes Wesen, das das Universum und die Moral lenkt.",
                position: 3,
            },
            "Geist-Körper-Dualismus (Existenz einer Seele)": {
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
        },
    },
    Diogenes: {
        description: "Diogenes war ein antiker griechischer Philosoph und Zyniker, bekannt für seine radikale Ablehnung gesellschaftlicher Konventionen.",
        details: {
            "das Ich (Existenz eines beständigen Selbst)": {
                description: "Diogenes sieht das Ich als naturverbunden und unabhängig von sozialem Einfluss.",
                position: 1,
            },
            "ein personifizierter Gott": {
                description: "Diogenes lehnte die Vorstellung eines personifizierten Gottes ab und betonte die Einfachheit der Natur.",
                position: 1,
            },
            "Geist-Körper-Dualismus (Existenz einer Seele)": {
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
        },
    },
    Konfuzius: {
        description: "Konfuzius war ein chinesischer Philosoph, der ethische und soziale Prinzipien für ein harmonisches Leben betonte.",
        details: {
            "das Ich (Existenz eines beständigen Selbst)": {
                description: "Für Konfuzius ist das Ich ein Teil eines größeren sozialen Gefüges, das durch moralische Tugenden gedeiht.",
                position: 2,
            },
            "ein personifizierter Gott": {
                description: "Konfuzius spricht von einem 'Himmel', jedoch ohne personifizierten Gott.",
                position: 1,
            },
            "Geist-Körper-Dualismus (Existenz einer Seele)": {
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
        },
    },
    Laotse: {
        description: "Laotse war ein legendärer chinesischer Philosoph und Begründer des Taoismus.",
        details: {
            "das Ich (Existenz eines beständigen Selbst)": {
                description: "Für Laotse ist das Ich ein Teil des Dao und sollte sich an die natürliche Ordnung anpassen.",
                position: 2,
            },
            "ein personifizierter Gott": {
                description: "Laotse spricht vom Dao, einer unpersönlichen Kraft, jedoch nicht von einem personifizierten Gott.",
                position: 1,
            },
            "Geist-Körper-Dualismus (Existenz einer Seele)": {
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
        },
    },
    Derrida: {
        description: "Jacques Derrida war ein französischer Philosoph und Begründer der Dekonstruktion.",
        details: {
            "das Ich (Existenz eines beständigen Selbst)": {
                description: "Derrida sieht das Ich als durch Sprache und Bedeutungsverschiebung geformt.",
                position: 2,
            },
            "ein personifizierter Gott": {
                description: "Derrida hinterfragte die Stabilität des Gottesbegriffs und lehnte eine feste Personifizierung ab.",
                position: 1,
            },
            "Geist-Körper-Dualismus (Existenz einer Seele)": {
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
        },
    },


    "Francis Bacon": {
        description: "Francis Bacon war ein englischer Philosoph und Begründer des Empirismus.",
        details: {
            "das Ich (Existenz eines beständigen Selbst)": {
                description: "Bacon sieht das Ich als erkenntnissuchendes Wesen, das durch Erfahrung die Natur erforscht.",
                position: 3,
            },
            "ein personifizierter Gott": {
                description: "Bacon sah einen Schöpfer als Ursprung der Naturgesetze, jedoch ohne klare Personifizierung.",
                position: 2,
            },
            "Geist-Körper-Dualismus (Existenz einer Seele)": {
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
        },
    },
    Asatru: {
        description: "Asatru ist eine Form des Neopaganismus, die auf die germanische Mythologie zurückgreift und die Verehrung nordischer Götter betont.",
        details: {
            "das Ich (Existenz eines beständigen Selbst)": {
                description: "Im Asatru ist das Ich mit den Ahnen und der Natur verbunden und agiert im Einklang mit den Göttern.",
                position: 2,
            },
            "ein personifizierter Gott": {
                description: "Asatru verehrt viele personifizierte Götter wie Odin und Thor als reale Wesenheiten.",
                position: 3,
            },
            "Geist-Körper-Dualismus (Existenz einer Seele)": {
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
            },
        },
    },
    Sikhismus: {
        description: "Der Sikhismus ist eine monotheistische Religion, die in Indien gegründet wurde und Gleichheit und soziale Gerechtigkeit betont.",
        details: {
            "das Ich (Existenz eines beständigen Selbst)": {
                description: "Im Sikhismus wird das Ich als spirituelle Seele gesehen, die mit dem Schöpfer verbunden ist.",
                position: 3,
            },
            "ein personifizierter Gott": {
                description: "Der Sikhismus verehrt einen einzigen, nicht personifizierten Gott, der als formlos und allgegenwärtig gilt.",
                position: 3,
            },
            "Geist-Körper-Dualismus (Existenz einer Seele)": {
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
        },
    },
    Taoismus: {
        description: "Der Taoismus ist eine chinesische Religion und Philosophie, die im Einklang mit dem Dao, dem Weg des Universums, lebt.",
        details: {
            "das Ich (Existenz eines beständigen Selbst)": {
                description: "Im Taoismus wird das Ich als unbeständiger Teil des größeren Kosmos betrachtet, in Harmonie mit dem Dao.",
                position: 2,
            },
            "ein personifizierter Gott": {
                description: "Der Taoismus verehrt keine personifizierten Götter, sondern das Dao als unpersönliche Kraft.",
                position: 1,
            },
            "Geist-Körper-Dualismus (Existenz einer Seele)": {
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
        },
    },
    Konfuzianismus: {
        description: "Der Konfuzianismus ist eine chinesische Philosophie, die Ethik und soziale Moral betont.",
        details: {
            "das Ich (Existenz eines beständigen Selbst)": {
                description: "Im Konfuzianismus ist das Ich stark von familiären und sozialen Bindungen geprägt.",
                position: 2,
            },
            "ein personifizierter Gott": {
                description: "Der Konfuzianismus beinhaltet keinen personifizierten Gott, sondern ein Konzept von moralischem Himmel und Tugend.",
                position: 1,
            },
            "Geist-Körper-Dualismus (Existenz einer Seele)": {
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
        },
    },
    Gnostizismus: {
        description: "Der Gnostizismus ist eine religiöse Bewegung, die Erlösung durch geheimes Wissen anstrebt.",
        details: {
            "das Ich (Existenz eines beständigen Selbst)": {
                description: "Im Gnostizismus ist das Ich ein göttlicher Funken, der von der materiellen Welt befreit werden muss.",
                position: 2,
            },
            "ein personifizierter Gott": {
                description: "Der Gnostizismus verehrt einen verborgenen, personifizierten Gott, getrennt von dem Schöpfer der materiellen Welt.",
                position: 2,
            },
            "Geist-Körper-Dualismus (Existenz einer Seele)": {
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
        },
    },
    Zoroastrismus: {
        description: "Der Zoroastrismus ist eine der ältesten monotheistischen Religionen und betont den Kampf zwischen Gut und Böse.",
        details: {
            "das Ich (Existenz eines beständigen Selbst)": {
                description: "Im Zoroastrismus ist das Ich Teil des kosmischen Kampfes und strebt nach Reinheit und Wahrheit.",
                position: 3,
            },
            "ein personifizierter Gott": {
                description: "Der Zoroastrismus verehrt Ahura Mazda als personifizierten Gott und Vertreter des Guten.",
                position: 3,
            },
            "Geist-Körper-Dualismus (Existenz einer Seele)": {
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
        },
    },
    Voodoo: {
        description: "Voodoo ist eine synkretistische Religion afrikanischer Herkunft, die Geister und Ahnen verehrt.",
        details: {
            "das Ich (Existenz eines beständigen Selbst)": {
                description: "Im Voodoo wird das Ich als Teil eines Netzwerks von Ahnen und spirituellen Kräften betrachtet.",
                position: 2,
            },
            "ein personifizierter Gott": {
                description: "Voodoo verehrt viele personifizierte Geister und Gottheiten, darunter auch Ahnengeister.",
                position: 3,
            },
            "Geist-Körper-Dualismus (Existenz einer Seele)": {
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
        },
    },
    Relativismus: {
        description: "Relativismus ist die Ansicht, dass Wahrheit und Moral von individuellen oder kulturellen Kontexten abhängen.",
        details: {
            "das Ich (Existenz eines beständigen Selbst)": {
                description: "Im Relativismus ist das Ich ein Produkt seiner kulturellen und individuellen Perspektiven.",
                position: 2,
            },
            "ein personifizierter Gott": {
                description: "Relativismus sieht die Vorstellung eines personifizierten Gottes als kulturell bedingt und nicht absolut an.",
                position: 2,
            },
            "Geist-Körper-Dualismus (Existenz einer Seele)": {
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
        },
    },

    Konsequentialismus: {
        description: "Konsequentialismus ist eine ethische Theorie, die Handlungen nach ihren Konsequenzen bewertet.",
        details: {
            "das Ich (Existenz eines beständigen Selbst)": {
                description: "Im Konsequentialismus ist das Ich verantwortlich für die Ergebnisse seiner Handlungen.",
                position: 3,
            },
            "ein personifizierter Gott": {
                description: "Ein personifizierter Gott spielt im Konsequentialismus oft keine zentrale Rolle, da moralisches Handeln an den Ergebnissen gemessen wird.",
                position: 2,
            },
            "Geist-Körper-Dualismus (Existenz einer Seele)": {
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
        },
    },
    Deontologismus: {
        description: "Deontologismus ist eine ethische Theorie, die Handlungen nach festen moralischen Prinzipien bewertet, unabhängig von den Konsequenzen.",
        details: {
            "das Ich (Existenz eines beständigen Selbst)": {
                description: "Im Deontologismus ist das Ich verpflichtet, moralische Regeln zu befolgen, ungeachtet der Konsequenzen.",
                position: 3,
            },
            "ein personifizierter Gott": {
                description: "Ein personifizierter Gott kann im Deontologismus eine Rolle spielen, wenn er als Quelle moralischer Prinzipien gilt.",
                position: 3,
            },
            "Geist-Körper-Dualismus (Existenz einer Seele)": {
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
        },
    },
    Zynismus: {
        description: "Der Zynismus ist eine Philosophie, die gesellschaftliche Normen und Werte radikal hinterfragt und oft verachtet.",
        details: {
            "das Ich (Existenz eines beständigen Selbst)": {
                description: "Im Zynismus wird das Ich als egoistisch und von natürlichen Trieben getrieben betrachtet.",
                position: 2,
            },
            "ein personifizierter Gott": {
                description: "Zynismus lehnt die Existenz eines personifizierten Gottes ab und betrachtet Religion oft als Mittel der Täuschung.",
                position: 1,
            },
            "Geist-Körper-Dualismus (Existenz einer Seele)": {
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
        },
    },
    Antinatalismus: {
        description: "Antinatalismus ist die Ansicht, dass es moralisch falsch ist, Leben zu erzeugen, aufgrund des inhärenten Leidens der Existenz.",
        details: {
            "das Ich (Existenz eines beständigen Selbst)": {
                description: "Im Antinatalismus ist das Ich eine Last, die durch Geburt aufoktroyiert wird.",
                position: 1,
            },
            "ein personifizierter Gott": {
                description: "Antinatalismus lehnt die Vorstellung eines wohlwollenden Schöpfers angesichts des Leides ab.",
                position: 1,
            },
            "Geist-Körper-Dualismus (Existenz einer Seele)": {
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
        },
    },
    Idealismus: {
        description: "Idealismus ist eine Philosophie, die betont, dass Realität primär durch den Geist konstruiert ist.",
        details: {
            "das Ich (Existenz eines beständigen Selbst)": {
                description: "Im Idealismus ist das Ich eine zentrale Wahrnehmungseinheit, die die Welt interpretiert.",
                position: 3,
            },
            "ein personifizierter Gott": {
                description: "Idealismus sieht das Göttliche als durch den Geist geprägt, oft ohne klare Personifizierung.",
                position: 2,
            },
            "Geist-Körper-Dualismus (Existenz einer Seele)": {
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
        },
    },
    Realismus: {
        description: "Realismus ist die Philosophie, die davon ausgeht, dass die Welt unabhängig vom menschlichen Bewusstsein existiert.",
        details: {
            "das Ich (Existenz eines beständigen Selbst)": {
                description: "Im Realismus ist das Ich ein Bewusstsein, das die objektive Realität erfährt.",
                position: 3,
            },
            "ein personifizierter Gott": {
                description: "Realismus schließt einen personifizierten Gott oft nicht aus, konzentriert sich jedoch auf beobachtbare Realität.",
                position: 2,
            },
            "Geist-Körper-Dualismus (Existenz einer Seele)": {
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
        },
    },
    Empirismus: {
        description: "Empirismus betont, dass Wissen hauptsächlich durch Sinneserfahrungen gewonnen wird.",
        details: {
            "das Ich (Existenz eines beständigen Selbst)": {
                description: "Im Empirismus wird das Ich durch seine Erfahrungen definiert und formt so seine Realität.",
                position: 3,
            },
            "ein personifizierter Gott": {
                description: "Empirismus hat oft wenig Bezug zu einem personifizierten Gott, da er schwer erfahrbar ist.",
                position: 2,
            },
            "Geist-Körper-Dualismus (Existenz einer Seele)": {
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
        },
    },
    Rationalismus: {
        description: "Rationalismus ist die Auffassung, dass Wissen vor allem durch Vernunft erworben wird.",
        details: {
            "das Ich (Existenz eines beständigen Selbst)": {
                description: "Im Rationalismus wird das Ich als Vernunftwesen betrachtet, das abstrakte Wahrheiten erkennt.",
                position: 3,
            },
            "ein personifizierter Gott": {
                description: "Ein personifizierter Gott wird im Rationalismus oft durch logische Begründungen hinterfragt.",
                position: 2,
            },
            "Geist-Körper-Dualismus (Existenz einer Seele)": {
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
        },
    },
    Existentialismus: {
        description: "Existentialismus betont die Freiheit des Individuums und die Sinnsuche in einer oft absurden Welt.",
        details: {
            "das Ich (Existenz eines beständigen Selbst)": {
                description: "Im Existentialismus ist das Ich zur eigenen Schöpfung und zur Sinnsuche verdammt.",
                position: 1,
            },
            "ein personifizierter Gott": {
                description: "Existentialismus sieht einen personifizierten Gott als irrelevant oder nicht-existent an.",
                position: 1,
            },
            "Geist-Körper-Dualismus (Existenz einer Seele)": {
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
        },
    },
    Nihilismus: {
        description: "Nihilismus ist die philosophische Ansicht, dass Leben und Existenz keinen inhärenten Sinn haben.",
        details: {
            "das Ich (Existenz eines beständigen Selbst)": {
                description: "Im Nihilismus ist das Ich eine Illusion ohne Bedeutung oder Ziel.",
                position: 1,
            },
            "ein personifizierter Gott": {
                description: "Nihilismus lehnt die Existenz eines personifizierten Gottes als sinnlos ab.",
                position: 1,
            },
            "Geist-Körper-Dualismus (Existenz einer Seele)": {
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
        },
    },
    Utilitarismus: {
        description: "Utilitarismus ist eine Ethik, die Handlungen nach dem größten Nutzen für das größte Glück bewertet.",
        details: {
            "das Ich (Existenz eines beständigen Selbst)": {
                description: "Im Utilitarismus ist das Ich ein Teil des Ganzen, das nach maximalem Glück für alle strebt.",
                position: 2,
            },
            "ein personifizierter Gott": {
                description: "Ein personifizierter Gott wird im Utilitarismus oft irrelevant, wenn das Glück maximiert wird.",
                position: 2,
            },
            "Geist-Körper-Dualismus (Existenz einer Seele)": {
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
        },
    },


    Strukturalismus: {
        description: "Strukturalismus analysiert gesellschaftliche und sprachliche Strukturen als bestimmend für das Individuum.",
        details: {
            "das Ich (Existenz eines beständigen Selbst)": {
                description: "Im Strukturalismus ist das Ich ein Produkt gesellschaftlicher und sprachlicher Strukturen.",
                position: 2,
            },
            "ein personifizierter Gott": {
                description: "Strukturalismus sieht religiöse Konzepte oft als gesellschaftliche Konstruktionen.",
                position: 2,
            },
            "Geist-Körper-Dualismus (Existenz einer Seele)": {
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
        },
    },
    Pragmatismus: {
        description: "Pragmatismus bewertet Ideen nach ihrer praktischen Umsetzbarkeit und ihren Ergebnissen.",
        details: {
            "das Ich (Existenz eines beständigen Selbst)": {
                description: "Im Pragmatismus ist das Ich flexibel und anwendbar auf praktische Ziele und Ergebnisse.",
                position: 3,
            },
            "ein personifizierter Gott": {
                description: "Pragmatismus sieht den Nutzen eines personifizierten Gottes an seinem Effekt gemessen.",
                position: 2,
            },
            "Geist-Körper-Dualismus (Existenz einer Seele)": {
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
        },
    },
    Poststrukturalismus: {
        description: "Poststrukturalismus hinterfragt feste Strukturen und die Stabilität von Sprache und Bedeutung.",
        details: {
            "das Ich (Existenz eines beständigen Selbst)": {
                description: "Im Poststrukturalismus ist das Ich fragmentiert und durch flexible Bedeutungen geprägt.",
                position: 2,
            },
            "ein personifizierter Gott": {
                description: "Poststrukturalismus lehnt einen festen personifizierten Gott ab und hinterfragt alle festen Bedeutungen.",
                position: 2,
            },
            "Geist-Körper-Dualismus (Existenz einer Seele)": {
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
        },
    },
    Stoizismus: {
        description: "Der Stoizismus ist eine antike Philosophie, die Gelassenheit und Selbstbeherrschung lehrt.",
        details: {
            "das Ich (Existenz eines beständigen Selbst)": {
                description: "Im Stoizismus ist das Ich Teil eines kosmischen Ganzen und durch die Vernunft beständig, aber veränderlich.",
                position: 3,
            },
            "ein personifizierter Gott": {
                description: "Der Stoizismus glaubt an eine universelle Vernunft, aber nicht an einen personifizierten Gott.",
                position: 2,
            },
            "Geist-Körper-Dualismus (Existenz einer Seele)": {
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
        },
    },
    Shinto: {
        description: "Shinto ist die indigene Religion Japans, die die Verehrung von Kami beinhaltet.",
        details: {
            "das Ich (Existenz eines beständigen Selbst)": {
                description: "Im Shinto existiert ein Ich in Verbindung mit Natur und Gemeinschaft, ohne feste Beständigkeit.",
                position: 1,
            },
            "ein personifizierter Gott": {
                description: "Shinto verehrt viele Kami als Naturgeister, aber keinen personifizierten Gott.",
                position: 2,
            },
            "Geist-Körper-Dualismus (Existenz einer Seele)": {
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
        },
    },
    Christentum: {
        description: "Das Christentum ist eine monotheistische Religion, die auf den Lehren von Jesus Christus basiert.",
        details: {
            "das Ich (Existenz eines beständigen Selbst)": {
                description: "Im Christentum besitzt das Individuum eine beständige Seele in Beziehung zu Gott.",
                position: 3,
            },
            "ein personifizierter Gott": {
                description: "Das Christentum glaubt an einen personifizierten Gott, der eine persönliche Beziehung zu den Gläubigen hat.",
                position: 3,
            },
            "Geist-Körper-Dualismus (Existenz einer Seele)": {
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
        },
    },
    Buddhismus: {
        description: "Der Buddhismus ist eine spirituelle Tradition, die auf den Lehren Buddhas basiert.",
        details: {
            "das Ich (Existenz eines beständigen Selbst)": {
                description: "Im Buddhismus gilt das Ich als Illusion, eine Ansammlung veränderlicher Elemente.",
                position: 1,
            },
            "ein personifizierter Gott": {
                description: "Der Buddhismus kennt keinen personifizierten Gott, sondern fokussiert auf persönliche Erleuchtung.",
                position: 1,
            },
            "Geist-Körper-Dualismus (Existenz einer Seele)": {
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
        },
    },
    Hinduismus: {
        description: "Der Hinduismus ist eine der ältesten Religionen der Welt und hat ein komplexes Glaubenssystem.",
        details: {
            "das Ich (Existenz eines beständigen Selbst)": {
                description: "Im Hinduismus ist das Ich, das Atman, eine unsterbliche Seele, die Reinkarnation durchläuft.",
                position: 3,
            },
            "ein personifizierter Gott": {
                description: "Der Hinduismus verehrt mehrere personifizierte Götter, die Aspekte des Göttlichen repräsentieren.",
                position: 3,
            },
            "Geist-Körper-Dualismus (Existenz einer Seele)": {
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
        },
    },
    Judentum: {
        description: "Das Judentum ist die älteste abrahamitische Religion, die auf den Bund mit Gott basiert.",
        details: {
            "das Ich (Existenz eines beständigen Selbst)": {
                description: "Im Judentum wird das Ich als individuelle, beständige Seele in Beziehung zu Gott verstanden.",
                position: 3,
            },
            "ein personifizierter Gott": {
                description: "Das Judentum verehrt einen personifizierten Gott, der über persönliche Beziehungen zu den Menschen wacht.",
                position: 3,
            },
            "Geist-Körper-Dualismus (Existenz einer Seele)": {
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
        },
    },
    Islam: {
        description: "Der Islam ist eine monotheistische Religion, die durch die Offenbarungen an den Propheten Mohammed entstand.",
        details: {
            "das Ich (Existenz eines beständigen Selbst)": {
                description: "Im Islam wird das Ich als Seele verstanden, die durch Glauben und Taten eine ewige Beständigkeit erlangen kann.",
                position: 3,
            },
            "ein personifizierter Gott": {
                description: "Der Islam verehrt Allah als personifizierten Gott mit persönlichen, jedoch übermenschlichen Eigenschaften.",
                position: 3,
            },
            "Geist-Körper-Dualismus (Existenz einer Seele)": {
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
        },
    },
    Nietzsche: {
        description: "Friedrich Nietzsche war ein deutscher Philosoph des 19. Jahrhunderts, der den Übermenschen und den Willen zur Macht betonte.",
        details: {
            "das Ich (Existenz eines beständigen Selbst)": {
                description: "Nietzsche sieht das Ich als Konstruktion und dynamische Projektion, beeinflusst durch soziale und psychologische Faktoren.",
                position: 1,
            },
            "ein personifizierter Gott": {
                description: "Nietzsche erklärte 'Gott ist tot' und lehnte die Existenz eines personifizierten Gottes ab.",
                position: 1,
            },
            "Geist-Körper-Dualismus (Existenz einer Seele)": {
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
        },
    },
    Aristoteles: {
        description: "Aristoteles war ein antiker griechischer Philosoph, der als Schüler Platons wesentliche Grundlagen der westlichen Philosophie prägte.",
        details: {
            "das Ich (Existenz eines beständigen Selbst)": {
                description: "Für Aristoteles ist das Ich eine vernunftbegabte Seele, die beständig nach Glück und Tugend strebt.",
                position: 3,
            },
            "ein personifizierter Gott": {
                description: "Aristoteles glaubte an einen 'unbewegten Beweger', der jedoch keinen personifizierten Gott darstellt.",
                position: 2,
            },
            "Geist-Körper-Dualismus (Existenz einer Seele)": {
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
        },
    },
    Cioran: {
        description: "Emil Cioran war ein pessimistischer Philosoph des 20. Jahrhunderts, der das Leben als absurde Existenz sah.",
        details: {
            "das Ich (Existenz eines beständigen Selbst)": {
                description: "Für Cioran ist das Ich ein quälender Zustand, der die Illusion eines stabilen Selbst erzeugt.",
                position: 1,
            },
            "ein personifizierter Gott": {
                description: "Cioran lehnte die Vorstellung eines personifizierten Gottes ab und sah den Glauben als illusionär.",
                position: 1,
            },
            "Geist-Körper-Dualismus (Existenz einer Seele)": {
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
        },
    },
    Platon: {
        description: "Platon war ein antiker griechischer Philosoph und Begründer der idealistischen Philosophie.",
        details: {
            "das Ich (Existenz eines beständigen Selbst)": {
                description: "Für Platon ist das Ich eine unsterbliche Seele, die an den Ideen teilhat und in den Körper eingebunden ist.",
                position: 3,
            },
            "ein personifizierter Gott": {
                description: "Platon sprach von einer göttlichen Ordnung, lehnte aber einen personifizierten Gott ab.",
                position: 2,
            },
            "Geist-Körper-Dualismus (Existenz einer Seele)": {
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
        },
    },

    Hobbes: {
        description: "Thomas Hobbes war ein englischer Philosoph, der den Gesellschaftsvertrag und den Leviathan postulierte.",
        details: {
            "das Ich (Existenz eines beständigen Selbst)": {
                description: "Hobbes sieht das Ich als egoistisches, materielles Wesen, das vom Selbsterhaltungstrieb geprägt ist.",
                position: 2,
            },
            "ein personifizierter Gott": {
                description: "Hobbes betrachtete Gott als notwendiges Konzept für gesellschaftliche Ordnung, aber nicht als personifiziertes Wesen.",
                position: 2,
            },
            "Geist-Körper-Dualismus (Existenz einer Seele)": {
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
        },
    },
    Descartes: {
        description: "René Descartes war ein französischer Philosoph und Mathematiker, bekannt für seinen Dualismus von Körper und Geist.",
        details: {
            "das Ich (Existenz eines beständigen Selbst)": {
                description: "Descartes identifizierte das Ich als denkendes Wesen (*cogito*), das klar und beständig existiert.",
                position: 3,
            },
            "ein personifizierter Gott": {
                description: "Descartes glaubte an einen vollkommenen Gott, den er als notwendig für die Existenz des Ichs ansah.",
                position: 3,
            },
            "Geist-Körper-Dualismus (Existenz einer Seele)": {
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
        },
    },
    Feuerbach: {
        description: "Ludwig Feuerbach war ein deutscher Philosoph, der die Religion als Projektion menschlicher Wünsche verstand.",
        details: {
            "das Ich (Existenz eines beständigen Selbst)": {
                description: "Feuerbach sah das Ich als Produkt sozialer und psychologischer Projektionen, ohne metaphysische Beständigkeit.",
                position: 1,
            },
            "ein personifizierter Gott": {
                description: "Für Feuerbach ist Gott eine Projektion menschlicher Ideale, kein personifiziertes Wesen.",
                position: 1,
            },
            "Geist-Körper-Dualismus (Existenz einer Seele)": {
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
        },
    },
    Frege: {
        description: "Gottlob Frege war ein deutscher Mathematiker und Philosoph, der die Grundlagen der modernen Logik legte.",
        details: {
            "das Ich (Existenz eines beständigen Selbst)": {
                description: "Frege befasste sich wenig mit dem Ich, das er als bedeutungslos für objektive Logik ansah.",
                position: 1,
            },
            "ein personifizierter Gott": {
                description: "Frege äußerte sich kaum zu einem personifizierten Gott und sah Logik als unabhängig von Religion.",
                position: 1,
            },
            "Geist-Körper-Dualismus (Existenz einer Seele)": {
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
        },
    },
    Wittgenstein: {
        description: "Ludwig Wittgenstein war ein österreichischer Philosoph, der die Sprachphilosophie revolutionierte.",
        details: {
            "das Ich (Existenz eines beständigen Selbst)": {
                description: "Wittgenstein sah das Ich als unbestimmt und durch Sprache konstruiert, ohne stabile Identität.",
                position: 1,
            },
            "ein personifizierter Gott": {
                description: "Wittgenstein diskutierte Gott als sprachliches Konzept, jedoch nicht als personifiziertes Wesen.",
                position: 2,
            },
            "Geist-Körper-Dualismus (Existenz einer Seele)": {
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
        },
    },
    Schopenhauer: {
        description: "Arthur Schopenhauer war ein deutscher Philosoph, der die Welt als 'Wille und Vorstellung' erklärte.",
        details: {
            "das Ich (Existenz eines beständigen Selbst)": {
                description: "Schopenhauer sah das Ich als Ausdruck des universellen Willens, letztlich illusionär und leidvoll.",
                position: 1,
            },
            "ein personifizierter Gott": {
                description: "Schopenhauer verneinte einen personifizierten Gott und sah das Weltgeschehen als blindem Willen unterworfen.",
                position: 1,
            },
            "Geist-Körper-Dualismus (Existenz einer Seele)": {
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
        },
    },
};

export const judgmentOptions = ["Klare Ablehnung", "Uneindeutig", "Klare Zustimmung"];
