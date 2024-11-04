// logik.ts

interface Fehlschluss {
    name: string;
    name2: string;
    beispiel: string;
    erlaeuterung: string;
}

interface FehlschluesseUndHeuristika {
    [key: string]: { [key: string]: Fehlschluss };
}

export const fehlschluesse: FehlschluesseUndHeuristika = {
    fehlschluesse: {
        PostHocErgoPropterHoc: {
            name: 'Post Hoc Ergo Propter Hoc',
            name2: 'danach, also deswegen',
            beispiel: '"Meine Oma raucht seit 80 Jahren und ist noch top gesund!" ',
            erlaeuterung: 'Scheinkausalität durch Abfolge. Nur weil eine Einzelperson nach langem Rauchen gesund ist, heisst das nicht, dass' +
                ' Rauchen generell nicht krank machen kann. Wahrscheinlicher wäre: Sie ist trotz 80 Jahren Rauchen gesund, aber nicht weil Rauchen ' +
                ' keine negativen Auswirkungen hat.'
        },
        CumHocErgoPropterHoc: {
            name: 'Cum Hoc Ergo Propter Hoc',
            name2: 'mit diesem, also deswegen',
            beispiel: 'Du bist nur ständig krank, weil du dich vegetarisch ernährst!',
            erlaeuterung: 'Scheinkausalität durch zeitgleiches Auftreten: Es ist möglich, aber keine logische Schlussfolgerung. ' +
                'Es gibt Dutzende andere Gründe, warum jemand oft krank sein kann. Ein direkter Kausalzusammenhang ' +
                'ohne Prüfung impliziert höchstens eine Korrelation.'
        },
        ArgumentumAdAntiquitatem: {
            name: 'Argumentum ad antiquitatem',
            name2: "Traditionsfehlschluss",
            beispiel: '"Es war aber schon immer so!" / "Es ist eine Tradition!"',
            erlaeuterung: 'Moralistischer Fehlschluss der 2 Ebenen vermischt (traditionell & moralisch) und eine Reduktion darauf, dass eine Tradition inhärent gut sein muss. Man hatte zu anderen' +
                ' Zeiten auch argumentiert, dass es schon immer so war schwarze Sklaven zu haben oder dass Männer ihre Frauen schlagen dürfen. ' +
                'Das macht es nicht moralisch gut.'
        },
        argumentumAdVerecundiam: {
            name: 'Argumentum ad verecundiam',
            name2: "Autoritätsargument",
            beispiel: '"Das Gesetzt / der Vater / Chef / Experte sagt das aber so!"',
            erlaeuterung: 'Moralistischer Fehlschluss der 2 Ebenen vermischt (Autorität & Moral) und eine Reduktion darauf, dass eine Autorität immer Recht haben muss. ' +
                'Viele alte Gesetze würden heutzutage als unmenschlich angesehen, so auch die Personen die sie predigten und durchsetzten. Expertenwissen oder Autorität führt nicht ' +
                'automatisch zu richtigem oder gutem Handeln.'
        },
        argumentumAdPopulum: {
            name: 'Argumentum ad populum',
            name2: "Mehrheitsargument",
            beispiel: '"Alle machen es so!"',
            erlaeuterung: 'Moralistischer Fehlschluss der 2 Ebenen vermischt (Gruppengrösse & Moral) und eine Reduktion darauf, dass eine grosse Anzahl von Personen immer Recht haben muss. ' +
                'Die Menge der Personen, die eine Handlung vollziehen, trifft keine Aussage über die Richtigkeit oder Güte der Handlung.'
        },
        naturfehlschluss: {
            name: 'Naturalistischer Fehlschluss',
            name2: "naturalistic fallacy",
            beispiel: 'Es ist natürlich! / Löwen töten auch zum Überleben!',
            erlaeuterung: 'Moralistischer Fehlschluss der 2 Ebenen vermischt (natürlich & moralisch) und eine Reduktion darauf, dass natürlich inhärent gut sein muss.' +
                ' Natürlich sind auch Gifte und Toxine. Natürlich ist es auch ohne Moral zu töten. Natürlich ist auch Vergewaltigung und Infantizid im Tierreich. Natürlichkeit' +
                ' spielt keine Rolle für die Bewertung der Handlung eines Menschen.'
        },
        genfehlschluss: {
            name: 'genetischer Fehlschluss',
            name2: "genetic fallacy",
            beispiel: 'Der ist ja auch ein deutscher Politiker, na klar belügt er das Volk!',
            erlaeuterung: 'Moralistischer Fehlschluss der 2 Ebenen vermischt (Herkunft & Moral) und eine Reduktion darauf, dass jemand nur nach seiner Herkunft zugeschriebenen Eigenschaften handelt.' +
                ' Nur weil eine Handlungsweise für eine Bevölkerungsgruppe scheinbar naheliegt, heisst das nicht, dass eine Einzelperson daran gebunden ist. Es folgt nicht logisch daraus.'
        },
        fallacyOfOrigins: {
            name: 'Genetischer Fehlschluss 2',
            name2: 'fallacy of origins',
            beispiel: '"Diese Theorie kann nicht stimmen, sie stammt aus dem Mittelalter!"',
            erlaeuterung: 'Hier wird die Gültigkeit einer Aussage oder Idee aufgrund ihrer Herkunft oder Geschichte angezweifelt, unabhängig von ihrem aktuellen Wahrheitsgehalt oder ihrer Relevanz. Die Herkunft wird genutzt, um das Argument zu diskreditieren, ohne den Inhalt zu prüfen.'
        },
        guiltfehlschluss: {
            name: 'Schuld durch Assoziation',
            name2: "Guilt by association fallacy",
            beispiel: 'Der ist ja auch mit Person X befreundet, klar, dass er lügt!',
            erlaeuterung: 'Moralistischer Fehlschluss der 2 Ebenen vermischt (Sozialer Umgang & Moral) und eine Reduktion darauf, dass jemand die Eigenschaften zwingend teilt, die seine' +
                ' Bekanntschaften bzw. sein soziales Umfeld haben. Daraus folgernd, dass seine Aussagen wenig oder keinen Wert haben.'
        },
        deplKonkret: {
            name: 'Fehlschluss der deplatzierten Konkretheit',
            name2: "fallacy of misplaced concreteness",
            beispiel: 'Der Karte eines Berges mehr Wert beimessen als der empirisch wahrgenommenen Realität.',
            erlaeuterung: 'Besonders in Naturwissenschaften wird dem Modell / abstrakten Konzept mehr Bedeutung beigemessen, als der wahrnehmbaren Wirklichkeit. Mechanistische Grundannahmen die Dinge' +
                ' auf Messwerte reduzieren, ignorieren dabei Emergenz und die Möglichkeit von Veränderungen oder noch nicht korrekt erfassten Informationen. So könnte jemand der so denkt, der Karte des Berges ' +
                'nach einem Steinrutsch mehr vertrauen, weil er ignoriert, dass sich die Gegebenheiten geändert haben oder er verneint die Existenz einer Eigenschaft, die sich erst nach einem unbekannten Zusammenspiel' +
                ' von anderen Eigenschaften neu ergibt.'
        },
        strohmannargument: {
            name: 'Strohmannargument',
            name2: 'straw man argument',
            beispiel: '"Person A: Wir sollten die Ausgaben für das Militär reduzieren. Person B: Du willst also, dass unser Land wehrlos ist und jeder uns angreifen kann?"',
            erlaeuterung: 'Hier wird die Position des Gegenübers verzerrt oder übertrieben dargestellt, um sie leichter angreifen zu können. Statt auf das eigentliche Argument einzugehen, wird ein "Strohmann" aufgebaut, der leichter zu widerlegen ist.'
        },
        slipperySlope: {
            name: 'Dammbruchargument',
            name2: 'slippery slope',
            beispiel: '"Wenn wir Cannabis legalisieren, wird das dazu führen, dass bald alle Drogen legal sind und die Gesellschaft im Chaos versinkt."',
            erlaeuterung: 'Es wird behauptet, dass eine bestimmte Handlung zwangsläufig zu einer Kette von Ereignissen führt, die in einem extrem negativen Ergebnis enden, ohne dafür Beweise zu liefern. Diese Argumentation übertreibt die Konsequenzen und ignoriert mögliche Kontrollmechanismen.'
        },
        redHerring: {
            name: 'Scheinargument',
            name2: 'red herring',
            beispiel: 'Whatabouthism wie: "Warum sollten wir uns um Umweltverschmutzung kümmern? Es gibt doch viel wichtigere Probleme wie die Arbeitslosigkeit."',
            erlaeuterung: 'Ein Ablenkungsmanöver, bei dem ein irrelevantes Thema eingeführt wird, um von der eigentlichen Diskussion abzulenken. Statt auf das ursprüngliche Argument einzugehen, wird das Thema gewechselt.'
        },
        derailing: {
            name: 'Derailing',
            name2: 'Themaabweichung',
            beispiel: 'Whatabouthism wie: "Person A: Wir sollten über die Diskriminierung von Frauen sprechen. Person B: Aber Männer werden auch diskriminiert!"',
            erlaeuterung: 'Derailing bedeutet, das Thema der Diskussion zu wechseln, um von einem unangenehmen oder schwierigen Thema abzulenken. Statt auf das ursprüngliche Argument einzugehen, lenkt man die Aufmerksamkeit auf ein anderes, oft verwandtes Thema.'
        },
        poisoningTheWell: {
            name: 'Vergiftung des Brunnens',
            name2: 'poisoning the well',
            beispiel: '"Bevor du ihm zuhörst, wisse, dass er schon oft gelogen hat."',
            erlaeuterung: 'Eine Technik, bei der negative Informationen über eine Person oder Quelle im Voraus präsentiert werden, um deren Glaubwürdigkeit zu untergraben. Dadurch sollen die Zuhörer voreingenommen werden, bevor sie das eigentliche Argument hören.'
        },
        reductioAdHitlerum: {
            name: 'Reductio ad Hitlerum',
            name2: 'Nazivergleich',
            beispiel: '"Du bist für eine Geschwindigkeitsbegrenzung? Das hat Hitler auch eingeführt!"',
            erlaeuterung: 'Ein Fehlschluss, bei dem eine Position oder ein Argument dadurch diskreditiert wird, dass es mit Hitler oder den Nationalsozialisten in Verbindung gebracht wird. Dabei wird impliziert, dass die Position falsch oder moralisch verwerflich ist, nur weil sie von einer negativ besetzten Person oder Gruppe geteilt wurde.'
        },
        ignoratioElenchi: {
            name: 'Ignoratio elenchi',
            name2: 'Thema verfehlt',
            beispiel: '"Wir sollten die Umwelt schützen. Antwort: Aber ohne Wirtschaftswachstum können wir uns Umweltschutz nicht leisten."',
            erlaeuterung: 'Der Fehlschluss besteht darin, ein Argument zu widerlegen, das nicht das eigentliche Thema ist. Anstatt auf das ursprüngliche Argument einzugehen, wird ein anderes Thema angesprochen, das zwar möglicherweise verwandt ist, aber das ursprüngliche Argument ignoriert.'
        },
        nonSequitur: {
            name: 'Non sequitur',
            name2: 'Folgt nicht',
            beispiel: '"Er trägt teure Schuhe, also muss er ein erfolgreicher Geschäftsmann sein."',
            erlaeuterung: 'Eine Schlussfolgerung, die nicht logisch aus den Prämissen folgt. Es wird ein Zusammenhang hergestellt, der nicht durch Beweise gestützt wird. Die Argumentation springt von einer Aussage zu einer scheinbar unbegründeten Schlussfolgerung.'
        },
        baseRateNeglect: {
            name: 'Basisratenvernachlässigung',
            name2: 'base rate neglect',
            beispiel: '"In einem Test für seltene Krankheit X ist das Ergebnis positiv. Daher ist es sehr wahrscheinlich, dass ich die Krankheit habe."',
            erlaeuterung: 'Hier wird die Grundwahrscheinlichkeit (Basisrate) eines Ereignisses ignoriert. Auch wenn der Test eine hohe Genauigkeit hat, ist die Wahrscheinlichkeit, tatsächlich krank zu sein, gering, wenn die Krankheit insgesamt sehr selten ist. ' +
                'Die Basisrate der Krankheit in der Population wird vernachlässigt.'
        },
        repraesentativitaetsheuristik: {
            name: 'Repräsentativitätsheuristik',
            name2: 'representativeness heuristic',
            beispiel: '"Dieser Mann trägt einen Anzug und eine Aktentasche. Er muss ein Manager sein."',
            erlaeuterung: 'Eine kognitive Verzerrung, bei der die Wahrscheinlichkeit eines Ereignisses danach beurteilt wird, wie stark es bestimmten Prototypen entspricht. Dabei werden statistische Wahrscheinlichkeiten oder andere relevante Informationen ignoriert.'
        },
    }
};
